// verify.mjs — contract + health check for a world. Exit 0 = pass.
//
//   node harness/verify.mjs worlds/<name>
//   node harness/verify.mjs <name> --quick     # ~10s: does it still LOAD, does the console
//                                              #   stay clean, is the exported bundle current.
//                                              #   No luma, no budget, no pilot, no export.
//   node harness/verify.mjs <name> --light     # ~20s: the above PLUS luma/chroma against the
//                                              #   declared key, at every declared moment.
//                                              #   No hands, no rows, no frameMs, no export.
//                                              #   This is the tier for the lighting loop.
//
// Checks (pass/fail): loads cleanly, WorldModule contract complete (assertContract runs
// inside loadWorld — base methods plus whole-or-nothing method families), 6 simulated
// seconds without console errors, triangle/draw-call budget, and — for a world that
// implements a timeline — that seekTo actually changes the frame.
//
// `--quick` exists because the full run costs a minute (more if the world declares late
// moments), which is a perfectly rational thing to skip during a tight edit loop — and
// skipping it is how a world sat BROKEN for a whole round of "fixed it": a string replace
// whose anchor had drifted left a reference undefined, the world threw on construction, and
// nothing said a word because nothing had loaded it. The cheap tier is the fix: it answers
// only "does it still come up, and is the file a human would open still the current one".
//
// Reports (facts, not gates): the probed capabilities and `animated`. Nothing is declared
// in world.json any more (D6), so nothing here can contradict a declaration; these are
// measurements for the author to read against their own intent.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openWorld, step, drive as playTo, worldNameFromArg } from './lib.mjs';
import { sceneAudit, frameCost, rowOverlaps } from './query.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Share of the frame that has to change over 6 seconds to call a world *visibly* animated.
 *  Calibrated on the worlds in this repo (see the table in docs/architecture.md D6).
 *  Deliberately a visibility bar, not a "does anything move at all" bar: a record player's
 *  platter spins 7.8 turns in those 6 seconds and moves 0.1% of the pixels, because a record
 *  is rotationally symmetric. `animated: false` with a non-zero `motion` is the honest report —
 *  something moves, and you cannot see it. */
const MOTION = 0.005;

/** What each declared `key` promises about the rendered frame.
 *
 *  Darkness was the one quality property in this repo with no number attached to it, so it was the
 *  one that drifted: ten scenes in a row came out night/dusk/underground and nothing complained,
 *  while draw calls — which DO have a number — were caught five times in the same run. Every
 *  quality bar that held here held because it was measured.
 *
 *  This is deliberately NOT "bright is better". A vent field at 2500 m has no ambient light and
 *  must be black; it declares `low` and is judged on whether it carries a highlight. What the
 *  gate catches is the cheap version: a world that went dark to hide unfinished form, and a
 *  `natural` world that quietly collapsed into the bottom of the range.
 *
 *  Calibrated on every world in this repo that could be measured (one heavy object world times
 *  out under load and was skipped). The population separates cleanly, thresholds sit in the gap:
 *
 *      median   0.02 0.02 0.04 0.04 0.05 0.05 0.08 0.14 0.16 0.17 0.17 0.25 │ 0.45 0.50 … 0.86
 *      dark     0.84 0.78 0.66 0.63 0.55 0.50 0.42 0.40 0.33 0.29 0.27 0.15 │ 0.01 0.00 … 0.00
 *
 *  Thirteen worlds sit on the left of that line and declare `low`. `high` has none yet; it is
 *  here so a snow scene has somewhere to land, the same reason `format` survives with one value
 *  (architecture D2). */
const LUMA = {
  natural: { maxDark: 0.12, minMedian: 0.25 },
  low: { minBright: 0.008 },
  high: { minMedian: 0.42 },
};

const name = worldNameFromArg(process.argv[2]);
const quick = process.argv.includes('--quick');
// The tier between the two that already existed, and the one the inner loop actually needs.
// `--quick` answers "does it still load" and deliberately measures nothing; the full run costs
// two to four minutes because it drives the controls, walks every row and times fifty frames.
// Neither is the thing you want after moving a light. Lighting is the one property here with a
// number on it, and if reading that number costs a coffee then it gets read twice a session and
// the frame gets tuned by eye in between — which is exactly the drift the key gate exists to
// stop. This tier loads, samples the declared moments, checks them against the key, and stops.
const light = process.argv.includes('--light');
// `--shared` means another render is running beside this one, so frameMs is reported but not
// enforced. sweep passes it whenever it runs more than one job at a time.
const shared = process.argv.includes('--shared');
const frameWarnings = [];
const record = JSON.parse(await fs.readFile(path.join(ROOT, 'worlds', name, 'world.json'), 'utf8'));
const { bundleStatus } = await import('./export.mjs');
// The cheap tier's whole job is "does it still come up", so a world that does NOT come up
// has to be an answer in the same shape as every other answer, not a stack trace.
let opened;
try {
  opened = await openWorld(name);
} catch (err) {
  if (!quick) throw err;
  console.log(JSON.stringify({
    world: name, quick: true, pass: false,
    problems: [`world failed to load: ${String(err.message || err).split('\n').join(' · ')}`],
  }, null, 2));
  process.exit(1);
}
const { page, errors, close } = opened;

if (quick) {
  await step(page, 0.5);
  const caps0 = await page.evaluate(() => ({
    timeline: typeof window.__world.seekTo === 'function',
    interactive: typeof window.__world.act === 'function',
  }));
  await close();
  const bundle = await bundleStatus(name);
  const problems0 = errors.map((e) => `console: ${e}`);
  if (bundle === 'stale') {
    problems0.push('the exported bundle is older than its source — worlds/'
      + `${name}/${name}.html is not what this code builds. Run: node harness/export.mjs ${name}`);
  }
  console.log(JSON.stringify({
    world: name, quick: true, ...caps0, bundle,
    pass: problems0.length === 0, problems: problems0,
  }, null, 2));
  process.exit(problems0.length ? 1 : 0);
}

const caps = await page.evaluate(() => ({
  timeline: typeof window.__world.seekTo === 'function',
  interactive: typeof window.__world.act === 'function',
}));

/** One moment is three luma samples: a frame can be caught mid-flash (a lighthouse is dark for
 *  26 of every 30 seconds), so the median is averaged and the highlight is taken at its PEAK —
 *  "does this world ever show you something bright" is the question, not "right now". */
async function sample(spacing) {
  const shots = [];
  for (let i = 0; i < 3; i++) {
    if (i) await step(page, spacing);
    shots.push(await page.evaluate(() => window.__luma()));
  }
  const mean = (k) => shots.reduce((a, s) => a + s[k], 0) / shots.length;
  return {
    luma: {
      median: Number(mean('median').toFixed(3)),
      dark: Number(mean('dark').toFixed(3)),
      bright: Number(Math.max(...shots.map((s) => s.bright)).toFixed(3)),
    },
    // The other axis. `luma` says where the pixels sit; `chroma` says whether there is more than
    // one colour among them — see play.html's probe for why. Facts, never gates.
    chroma: {
      sat: Number(mean('sat').toFixed(3)),
      spread: Number(mean('spread').toFixed(3)),
    },
  };
}

// A world with a long cycle — a day, a tide, a season — was only ever measured over its first
// six seconds, so the half of it that is most likely to be mud (the night) never reached the
// gate at all. `world.json` can now name the moments that have to be judged, each carrying its
// OWN key, because a game that is `natural` at noon really is `low` at midnight and one number
// cannot be honest about both:
//
//     "verify": { "at": [ { "s": 4, "key": "natural", "name": "day" },
//                         { "s": 62, "key": "low", "name": "night by the fire" } ] }
//
// Declared moments REPLACE the default — list the opening one explicitly if you still want it.
// Reaching a late moment means playing the world, so this drives `pilot.js` when there is one:
// a game left standing still until midnight is measuring its own death screen.
const MOMENTS = (record.verify?.at || []).map((m, i) => (typeof m === 'number'
  ? { s: m, name: `t${m}s` }
  : { s: Number(m.s ?? m.at ?? 0), key: m.key, name: m.name || `t${m.s ?? m.at}s` }))
  .sort((a, b) => a.s - b.s);

const driveWarnings = [];
await page.evaluate(() => window.__motion());          // baseline
const moments = [];
if (MOMENTS.length) {
  for (const m of MOMENTS) {
    await playTo(page, name, m.s, { quiet: true });
    moments.push({ ...m, ...(await sample(0.7)) });
  }
} else {
  // The default moment is six simulated seconds because a world should not be judged on frame
  // zero. `--light` is only asking where the pixels sit, and two seconds answers that: the frames
  // are still three, still spread, and the whole tier gets three times cheaper — which is the
  // difference between measuring the light every time you move it and measuring it twice a day.
  await step(page, light ? 0.8 : 2);
  moments.push({ s: light ? 2 : 6, name: 'opening', ...(await sample(light ? 0.5 : 2)) });
}
// The same argument as declared moments, on the other axis. A world with more than one
// viewpoint has more than one value range — a macro of warm wood and a wide shot of a pale
// board are not the same picture — and luma/chroma were only ever measured wherever the world
// happened to open. `verify.views` names the ones that have to hold up, and reaches them
// through whatever the world already publishes: `act({view})` for a playable one,
// `setView()` for a studio one. No new contract method; if a world has neither, it says so.
const VIEWS = (record.verify?.views || []).map((v) => (typeof v === 'string' ? { name: v } : v));
const views = [];
for (const v of VIEWS) {
  const reached = await page.evaluate((n) => {
    const w = window.__world;
    if (typeof w.act === 'function') w.act({ view: n });
    else if (typeof w.setView === 'function') w.setView(n);
    else return false;
    for (let i = 0; i < 45; i++) w.renderFrame(1 / 30);   // let a move between stations finish
    return true;
  }, v.name);
  if (!reached) { driveWarnings.push(`verify.views names "${v.name}" but this world publishes `
    + 'neither act() nor setView() — there is no way to ask it to look somewhere'); continue; }
  views.push({ ...v, ...(await sample(0)) });
}

const motion = await page.evaluate(() => window.__motion());
const { luma, chroma } = moments[0];

if (light) {
  await close();
  const lit = [...moments.flatMap((m) => keyProblems(m.key || record.key || 'natural', m.luma,
    MOMENTS.length ? m.name : '')),
  ...views.flatMap((v) => keyProblems(v.key || record.key || 'natural', v.luma, v.name)),
  ...errors.map((e) => `console: ${e}`)];
  console.log(JSON.stringify({
    world: name, light: true, key: record.key || 'natural', luma, chroma,
    moments: MOMENTS.length ? moments.map((m) => ({ name: m.name, s: m.s, key: m.key, ...m.luma })) : undefined,
    views: views.length ? views.map((v) => ({ name: v.name, ...v.luma })) : undefined,
    pass: lit.length === 0, problems: lit,
  }, null, 2));
  process.exit(lit.length ? 1 : 0);
}

// A world that implements a timeline claims time is an addressable coordinate. Check it.
let timelineMoves = null;
if (caps.timeline) {
  await page.evaluate(() => { window.__world.seekTo(0); window.__motion(); window.__world.seekTo(1); });
  timelineMoves = await page.evaluate(() => window.__motion());
}

// ── hands ────────────────────────────────────────────────────────────────────
// `act()` is one of a world's two interfaces, and the harness only ever drove that one.
// Three bugs shipped through the other seam in a single build of `dontstarve2`, each
// invisible to `botplay` because the pilot calls `act({interact})` and never presses
// anything: a click that walked to the target and then stood there forever, a crafting
// panel that rebuilt itself ten times a second so no `click` event could ever fire, and
// a handler that read `e.buttons` — which synthetic events do not set.
//
// A generic checker cannot know what a click SHOULD do. It can check two things that are
// wrong in every world:
//
//   1. Real input must not throw. Playwright's mouse and keyboard generate the same events
//      a person's do, including the ones an author never dispatches by hand.
//   2. **A control must survive being pressed.** A browser only fires `click` when down and
//      up land on the same node, so any element that rebuilds itself while the button is
//      held is a button that cannot be pressed. This is checked while the world is TICKING,
//      because that is when a HUD redraws — a test that holds the button with the world
//      paused passes against the broken build, which is exactly what my first attempt did.
const HOLD = 4;                     // frames the world advances while the button is down
const hands = { pressed: 0, swallowed: [], errorsBefore: errors.length };
// Driving real input is the one part of this run that talks to the page through Playwright's
// actionability machinery instead of a plain `evaluate`, which makes it the one part that can
// time out on a world that is merely SLOW: stepping runs in long synchronous bursts, and a
// heavy world can hold the main thread past a locator's patience.
//
// It used to throw out of the whole script when that happened — an uncaught TimeoutError,
// no JSON, no report, and every measurement already taken thrown away with it. The first
// library-wide sweep hit exactly that on the four heaviest worlds (erdtree, gorge, swarm,
// valentine) and reported them as broken; they were not, and the canvas it "could not find"
// was in the DOM the whole time. That contradicts the rule this file already states for its
// cheap tier: a world that will not cooperate has to be an answer in the SAME SHAPE as every
// other answer, not a stack trace. So the hands check reports that it could not run and the
// rest of the verify continues.
try {
  const box = await page.locator('canvas').first().boundingBox({ timeout: 15000 });
  if (box) {
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.evaluate((n) => window.__step(1 / 30, n), HOLD);
    await page.mouse.move(cx + 40, cy + 24);
    await page.mouse.up();
    await page.keyboard.press('Space');
    await page.keyboard.press('KeyW');
    await page.evaluate(() => window.__step(1 / 30, 6));
  }

  // Every control the world put on screen, pressed the way a person presses one.
  //
  // Scanned one at a time, immediately before each press, and that ordering is the
  // whole check. Scanning them all up front does not work in either direction: an
  // earlier press can dismiss a later control (a title card's Begin button takes its
  // own panel with it — that is the control WORKING), and a panel that rebuilds itself
  // has already replaced the rest of the list before the first press lands, so the
  // evidence is gone by the time you look. Freshly scanned, still there when the button
  // goes down: if it is gone when the button comes up, it was replaced, and no click
  // event can ever have fired on it.
  const tally = {};
  for (let n = 0; n < 12; n++) {
    const c = await page.evaluate((mark) => {
      // the WORLD's controls, not the player page's chrome: everything a world
      // draws lives inside the container it was handed
      const root = document.getElementById('stage') || document.body;
      for (const el of root.querySelectorAll('*')) {
        if (el.tagName === 'CANVAS' || el.dataset.dsProbe) continue;
        const st = getComputedStyle(el);
        if (st.pointerEvents !== 'auto' || st.display === 'none' || st.visibility === 'hidden') continue;
        const r = el.getBoundingClientRect();
        if (r.width < 8 || r.height < 8 || r.width > 900 || r.height > 700) continue;
        if (r.x < 0 || r.y < 0) continue;
        el.dataset.dsProbe = mark;
        return { x: r.x + r.width / 2, y: r.y + r.height / 2,
          tag: (el.className || el.tagName).toString().split(' ')[0] };
      }
      return null;
    }, `p${n}`);
    if (!c) break;
    tally[c.tag] = (tally[c.tag] || 0) + 1;
    if (tally[c.tag] > 3) continue;                    // three of a kind is enough
    await page.mouse.move(c.x, c.y);
    await page.mouse.down();
    await page.evaluate((f) => window.__step(1 / 30, f), HOLD);
    const alive = await page.evaluate((id) => !!document.querySelector(`[data-ds-probe="${id}"]`), `p${n}`);
    await page.mouse.up();
    hands.pressed++;
    if (!alive) hands.swallowed.push(c.tag);
  }
  hands.errors = errors.length - hands.errorsBefore;
} catch (e) {
  // Not a pass: `pressed: 0` with a reason is a hole in the evidence, and it says so.
  hands.unavailable = String(e.message || e).split('\n')[0];
  hands.errors = errors.length - hands.errorsBefore;
}
delete hands.errorsBefore;

// And a world that implements `act` claims to be PLAYABLE. That claim used to be a `typeof` and
// nothing else, which is how `gorge` shipped a build where every command handed to `act()` was
// overwritten by the keyboard read on the next frame: the whole playable contract implemented,
// reported green, and completely inert.
//
// Three seconds through the world's own `worlds/<name>/pilot.js` is enough to catch that, and a
// missing pilot is enough to catch "nobody has ever driven this". It is NOT enough to catch a
// wrong control convention — an inverted yaw sign takes a corner to show up — so this warns you
// to go and run `botplay`, which flies the whole course. Cheap check here, real one there.
//
// It runs AFTER the hands check, and deliberately: driving is the most expensive thing in this
// script, hands is the most fragile, and the fragile one should not have to wait behind it.
let drive = null;
if (caps.interactive) {
  const hasPilot = await fs.stat(path.join(ROOT, 'worlds', name, 'pilot.js')).then(() => true, () => false);
  if (!hasPilot) {
    driveWarnings.push(`implements act() but has no worlds/${name}/pilot.js — the playable `
      + 'contract has never been exercised (harness/botplay.mjs)');
  } else {
    drive = await playTo(page, name, 3, { quiet: true }).catch((err) => ({ error: String(err) }));
  }
}

// Budget, frame cost and geometry all come from harness/query.mjs — one place that knows how
// to walk a scene, build a world-space box and fire a ray, shared with harness/probe.mjs.
const info = await sceneAudit(page);
const rows = await rowOverlaps(page);
const frameMs = await frameCost(page);
await close();

const problems = [...errors.map((e) => `console: ${e}`)];
if (info.budget?.tris && info.triangles > info.budget.tris)
  problems.push(`triangles ${info.triangles} > budget ${info.budget.tris}`);
if (info.budget?.drawCalls && info.drawCalls > info.budget.drawCalls)
  problems.push(`drawCalls ${info.drawCalls} > budget ${info.budget.drawCalls}`);
// A budget is a declared intent, like `key` — so it is not scaffolded, because a number nobody
// chose is not an intent, and the one that used to be scaffolded was blown by the first real
// scene on its first run. Instead: measure, and hand the author the line to paste. Set frameMs
// at two or three times what a quiet machine reports; it moves with the machine.
if (!info.budget) {
  frameWarnings.push('no `budget` declared in world.json — measured '
    + `${info.triangles} triangles, ${info.drawCalls} draw calls, ${frameMs} ms/frame. `
    + 'Write the ones you mean to hold yourself to: '
    + `"budget": { "tris": ${Math.ceil(info.triangles * 1.3 / 1000) * 1000}, `
    + `"drawCalls": ${Math.ceil(info.drawCalls * 1.3 / 10) * 10}, `
    + `"frameMs": ${Math.ceil(frameMs * 2.5 / 10) * 10} }`);
}
// Triangles and draw calls are what a world CONTAINS; frameMs is what it COSTS, and the two
// come apart. One world sat at 18% of its triangle budget and 41% of its draw calls while
// taking three times longer per frame than a world a tenth its size — half of it going to one
// line handing `scene.environment` an image-based light every fragment mostly ignored. Neither
// existing number could see that, and it is the number that decides whether the harness can
// drive the world at all: at a second a frame, three seconds of pilot is a minute of blocked
// main thread and the checks behind it start timing out.
// ...and it is only a GATE when this process has the machine to itself. Measured against three
// other verifies running beside it, the same world and the same code produced 722-1165ms against
// 279ms alone — and no statistic escapes that, because everything here is CPU-bound software
// rasterisation and there is no uncontended sample left to find (min swings 2.8x, median 3.9x).
// So `sweep` tells verify it is sharing, and the number is reported without being enforced. The
// place the gate is worth having is the inner loop, where one world is measured on its own.
if (info.budget?.frameMs && frameMs > info.budget.frameMs) {
  const line = `frameMs ${frameMs} > budget ${info.budget.frameMs} (software renderer, compared `
    + 'against other worlds measured the same way — not a claim about a real GPU)';
  if (shared) frameWarnings.push(`${line} — not enforced: this run is sharing the machine, `
    + 'which moves this number by 3-4x. Re-measure with a solo `node harness/verify.mjs`.');
  else problems.push(line);
}
if (timelineMoves !== null && timelineMoves < MOTION)
  problems.push(`timeline: seekTo(0) and seekTo(1) render the same frame (motion ${timelineMoves.toFixed(4)})`);

// The key is a promise about the frame. Check it against the frame — once per declared moment,
// against that moment's own key.
function keyProblems(key, l, where) {
  const at = where ? ` at "${where}"` : '';
  const bar = LUMA[key];
  if (!bar) return [`key "${key}"${at} is not one of ${Object.keys(LUMA).join(' / ')}`];
  if (key === 'natural') {
    if (l.dark > bar.maxDark) {
      return [`key "natural"${at} but ${(l.dark * 100).toFixed(0)}% of the frame is below 5% `
        + `luminance (max ${bar.maxDark * 100}%) — raise the fill, cut the fog, or declare "low"`];
    }
    if (l.median < bar.minMedian) {
      return [`key "natural"${at} but the median pixel is ${l.median.toFixed(3)} `
        + `(min ${bar.minMedian}) — the whole range has collapsed into the bottom`];
    }
  } else if (key === 'low' && l.bright < bar.minBright) {
    return [`key "low"${at} but nothing in the frame is bright (${(l.bright * 100).toFixed(1)}% `
      + `above 55% luminance, min ${bar.minBright * 100}%) — a dark world still needs a lit focal `
      + 'subject, or it is mud rather than mood'];
  } else if (key === 'high' && l.median < bar.minMedian) {
    return [`key "high"${at} but the median pixel is ${l.median.toFixed(3)} (min ${bar.minMedian})`];
  }
  return [];
}
for (const m of moments) {
  m.key = m.key || info.key;
  problems.push(...keyProblems(m.key, m.luma, MOMENTS.length ? m.name : null));
}
for (const v of views) {
  v.key = v.key || info.key;
  problems.push(...keyProblems(v.key, v.luma, `view ${v.name}`));
}

// A world that passes gets its single-file bundle refreshed, right here. Exporting used to be a
// separate step the workflow asked for and nothing enforced — ten objects were built, reviewed
// and committed without one. It costs ~0.2s (0.6s with manifold's wasm) against verify's own
// eight seconds, and it means the artifact a human can actually open is never older than the
// last green run. A world that FAILS keeps its old bundle: a broken build should not ship.
// `--no-export` for the tight loop, and for CI, which checks the committed bundle instead.
let bundle = null;
if (problems.length === 0 && !process.argv.includes('--no-export')) {
  const { exportWorld } = await import('./export.mjs');
  bundle = (await exportWorld({ path: name })).trim();
}

if (hands.swallowed.length) {
  problems.push(`a control is rebuilt while the pointer is held, so it can never be clicked: `
    + `${[...new Set(hands.swallowed)].join(', ')} — a browser only fires click when mousedown `
    + 'and mouseup land on the same node. Rebuild the DOM only when its shape changes.');
}
if (drive?.error) problems.push(`pilot.js threw: ${drive.error}`);
else if (drive && drive.acted > 0 && !drive.moved && !drive.terminal)
  problems.push('act() was called and getState() never changed — the playable contract is inert');

// Rows of instances that are inside each other. Evenly-spaced runs only — scattered instances
// are SUPPOSED to overlap — and a warning rather than a gate, because a bounding box is a
// conservative bound: a diagonal thin part can have a box wider than its slot without touching
// anything. What it is worth is that nothing else in this repo looks at all. `skills/object/
// review.md` has named interpenetration as a hole since the clipper's masts went through six
// sails; `inspect` cannot see it (it reviews each part alone, and this is an assembly property)
// and a 900x600 contact sheet cannot either.
const rowWarnings = rows
  .filter((r) => r.overlapMm > r.pitchMm * 0.25 && r.slender >= 0.12)
  .map((r) => `"${r.name}": ${r.count} instances ${r.sizeMm}mm across on a ${r.pitchMm}mm pitch — `
    + `neighbours overlap by ${r.overlapMm}mm. An evenly spaced row that intersects itself is `
    + 'usually one dimension used for two different measurements (a hammer head is 12mm across '
    + 'the notes and 18mm along the string; put the second number in the first place and sixty '
    + 'of eighty-eight are inside their neighbour). Bounding boxes, so go and look before you '
    + 'believe it — though the thin diagonal parts whose boxes lie about them are already '
    + 'filtered out by `slender`, and the whole library produces one of these.');

const { audit, ...facts } = info;
console.log(JSON.stringify({
  world: name,
  ...caps,
  animated: motion > MOTION,
  ...(caps.interactive ? { piloted: !!drive } : {}),
  motion: Number(motion.toFixed(4)),
  hands,
  frameMs,
  luma,
  chroma,
  ...(MOMENTS.length ? { moments: moments.map(({ s, name, key, luma, chroma }) => ({ s, name, key, luma, chroma })) } : {}),
  ...(views.length ? { views } : {}),
  ...(rows.length ? { rows } : {}),
  ...facts,
  pass: problems.length === 0,
  problems,
  // Heuristics, not gates: each one is a real trap this repo has hit, but a world is allowed
  // to do any of them on purpose. They warn, they never fail a build.
  warnings: [...audit, ...driveWarnings, ...rowWarnings, ...frameWarnings,
    ...(hands.unavailable
      ? [`real input could not be driven at this world (${hands.unavailable}) — every control `
        + 'it draws is UNTESTED in this run, which is a hole in the evidence, not a pass']
      : [])],
  bundle,
}, null, 2));
process.exit(problems.length ? 1 : 0);

// capture.mjs — headless screenshots of a world, for the agent's visual feedback loop.
//
//   node harness/capture.mjs worlds/<name>            # 1 shot; how to shoot is picked from what the
//                                                     #   world implements — a timeline world gets
//                                                     #   sampled at 0/0.5/0.9, everything else gets
//                                                     #   2 simulated seconds first (D6)
//   node harness/capture.mjs <name> --shots 4         # orbit: 4 azimuths around the target
//   node harness/capture.mjs <name> --arc -60,60      # limit orbit to an azimuth arc (deg) —
//                                                     #   for walled/interior scenes where 360° hits
//                                                     #   walls. Persist it as "capture": {"arc": [...]}
//                                                     #   in world.json and every run picks it up.
//   node harness/capture.mjs <name> --at 0,0.5,0.9    # override: seek these timeline positions (0..1)
//   node harness/capture.mjs <name> --after 6         # override: simulate N seconds first
//   node harness/capture.mjs <name> --play 62,250     # PLAY it first: drive the world through
//                                                     #   worlds/<name>/pilot.js and shoot at each
//                                                     #   of those simulated seconds. Combines with
//                                                     #   --hero and --sheet. Defaults to 30 s.
//   node harness/capture.mjs <name> --size 1280x720 --out <dir>
//   node harness/capture.mjs <name> --ref ref.jpg     # comparison sheet: the reference sits in the
//                                                     #   same frame as the shots. Point it at a photo,
//                                                     #   a design frame, or the PREVIOUS capture to
//                                                     #   get a before/after — comparing against memory
//                                                     #   is how a regression survives a review.
//   node harness/capture.mjs <name> --sheet           # same sheet, no reference
//   node harness/capture.mjs <name> --hero            # ONE frame at 1920×1080, not in any sheet
//   node harness/capture.mjs <name> --against         # shoot the same frames again and put them
//                                                     #   beside last round's, with a number on each
//
// NAMED VIEWPOINTS. A world can declare the frames it wants judged by, and then the plain
// command shoots those every time:
//
//   "capture": { "views": {
//       "into-the-pool": { "eye": [1.7, 2.1, 2.2], "at": [0, 0, -0.2] },
//       "close-anemone": { "eye": [1.0, 0.9, 1.3], "at": [0.4, 0.3, 0.7], "fov": 38 },
//       "overhead":      { "az": 0, "el": 78 } } }
//
// `eye`/`at` place the camera outright; `az`/`el` swing the world's own framing, so that view
// stays right when the author re-frames. An orbit tells you what a world looks like from four
// angles; four viewpoints somebody CHOSE are the only thing one round can be compared to the
// next by — and a close-up on the one thing you are actually working on is worth more than
// three quarters of a circle.
//
// --against exists because shots are overwritten every run, so every round gets judged against
// MEMORY of the last one, and that is exactly where a regression hides. One world lost a
// starfish under its own floor for two rounds: the frame was different every time, plausible
// every time, and nothing was holding it up against the frame that still had the starfish in
// it. Rendering is deterministic here — an unchanged world re-shot measures 0.0% — so any
// number above zero is a real change and the two frames sit side by side for you to judge it.
//
// --play exists because `--after N` simulates a world with nobody at the controls, and for a
// GAME that is not a picture of the game — it is a picture of its first moment. Two of the
// games in this repo have a complete visual record of four shots of their own title card,
// which is what "shoot it and look" produces when the shooting cannot press a key. With a
// pilot in the world's directory, the same command shoots the fire at dusk and the boss at
// midnight instead (docs/principles.md E11 — the pilot is already required to be there).
//
// --hero exists because a contact sheet is a comparison tool and a bad verification tool, and
// the difference is not obvious until it costs you. On the clipper every gate was green and all
// six part sheets were clean while the masts were passing straight THROUGH the canvas of six
// sails and every sail was self-shadowing into black ragged patches. Both were invisible in a
// 900×600 review cell and both were unmissable the first time a frame was rendered at full size.
// A thumbnail can tell you which of two frames is better. It cannot tell you whether either one
// is finished. Shoot one of these and actually look at it before you call a world done.
//
// Output: PNG paths on stdout (one per line) + console-error summary. Exit 1 on errors.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openWorld, step, drive, worldNameFromArg } from './lib.mjs';
import { composeSheet } from './sheet.mjs';
import { stashPrevious, diffPairs, report, verdict } from './compare.mjs';
import { orbitProbe } from './query.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const name = worldNameFromArg(args[0]);
const opt = (flag, dflt) => { const i = args.indexOf(flag); return i > 0 ? args[i + 1] : dflt; };
const shotsFlag = opt('--shots', null);
const atsFlag = opt('--at', null);
const afterFlag = opt('--after', null);
// A hero frame defaults BIG. The whole point of it is the resolution, so making the caller
// remember --size would defeat it on exactly the runs where it matters.
const hero = args.includes('--hero');
// `--play` takes an optional comma list of simulated seconds. It is read positionally rather
// than through opt() because "--play" with nothing after it is the common case.
const playIdx = args.indexOf('--play');
const playing = playIdx > 0;
const playAt = (() => {
  if (!playing) return null;
  const next = args[playIdx + 1];
  const list = next && !next.startsWith('--')
    ? next.split(',').map(Number).filter((n) => Number.isFinite(n) && n >= 0)
    : [];
  return (list.length ? list : [30]).sort((a, b) => a - b);
})();
const [width, height] = opt('--size', hero ? '1920x1080' : '1280x720').split('x').map(Number);
// A world's shots land WITH the world (worlds/<name>/shots/), so the frames sit next to the
// code that made them while you review. They are review artifacts, not history — look, then
// keep them out of the commit; the ones that matter belong in the pull request.
const outDir = opt('--out', `worlds/${name.split('/').pop()}/shots`);
// A reference is resolved against the world first, so the workflow's own convention —
// `worlds/<name>/refs/` (git-ignored, see docs/principles.md workflow 2) — can be written the
// short way: `--ref refs/gull.jpg`. Anything else is taken as an ordinary path.
let ref = opt('--ref', null);
if (ref && !(await fs.stat(ref).catch(() => null))) {
  const inWorld = path.join(ROOT, 'worlds', name, ref);
  if (await fs.stat(inWorld).catch(() => null)) ref = inWorld;
}
const wantSheet = !!ref || args.includes('--sheet');
const against = args.includes('--against');

if (ref && !(await fs.stat(ref).catch(() => null))) {
  console.error(`--ref: no such file "${ref}" — a reference photo (worlds/${name}/refs/...), `
    + 'a design frame, or an earlier capture');
  process.exit(1);
}

// A walled world cannot be shot from 360°: half the frames end up inside a wall or under the
// floor. That is a property of the WORLD, not of the invocation, so it lives in its world.json
// as `capture.arc` and one identical command shoots every world correctly:
//     node harness/capture.mjs <name> --shots 4 --sheet
// An explicit --arc still wins, and a world without the field gets the full circle.
const record = JSON.parse(await fs.readFile(path.join(ROOT, 'worlds', name, 'world.json'), 'utf8'));

const { page, errors, close } = await openWorld(name, { width, height });
await fs.mkdir(outDir, { recursive: true });
const canvas = page.locator('canvas').first();
const saved = [];

// Pick how to shoot from what the world actually implements (D6) — nothing is declared.
// A world with a timeline gets sampled along it; anything else gets a couple of simulated
// seconds first, so a living world is never caught on frame zero. Explicit flags always win.
const caps = await page.evaluate(() => ({ timeline: typeof window.__world.seekTo === 'function' }));
const ats = hero || playing ? null
  : atsFlag ? atsFlag.split(',').map(Number)
    : (caps.timeline && !shotsFlag ? [0, 0.5, 0.9] : null);
const shots = Number(shotsFlag ?? 1);
const after = Number(afterFlag ?? (ats ? 0 : 2));

async function shoot(tag) {
  const file = path.join(outDir, `${tag}.png`);
  await canvas.screenshot({ path: file });
  saved.push({ label: tag, file });
}

// Named viewpoints are a property of the WORLD, the same way `capture.arc` is, so a world that
// declares them gets them from the plain command and every round shoots the same frames. Four
// angles round a circle tell you what a world looks like; four viewpoints somebody CHOSE are
// the only thing you can compare one round against the next.
//     "capture": { "views": { "into-the-pool": { "eye": [1.7,2.1,2.2], "at": [0,0,-0.2] },
//                             "waterline":     { "az": 130, "el": 12 } } }
// `eye`/`at` place the camera outright; `az`/`el` swing the world's own framing, so a view stays
// correct when the author re-frames the world.
const views = record.capture?.views;
const usingViews = views && !hero && !playing && !ats && !shotsFlag;
const applyView = (v) => ((v.eye || v.at)
  ? page.evaluate((vv) => window.__view(vv), v)
  : page.evaluate((vv) => window.__orbit(vv.az ?? 0, vv.el ?? null), v));

// What to shoot, as a list built BEFORE the first frame — --against has to know the labels in
// order to move last round's frames out of the way first.
let setup = async () => {};
const plan = [];
if (hero) {
  setup = async () => {
    if (playing) await drive(page, name, playAt[0]);
    else if (after > 0) await step(page, after, { shrink: true });
  };
  const az = opt('--arc', null)?.split(',').map(Number)?.[0];
  plan.push({ label: 'hero', apply: az === undefined ? null : () => page.evaluate((a) => window.__orbit(a), az) });
} else if (playing) {
  // one continuous run, shot as it passes each moment — not one run per frame
  for (const t of playAt) plan.push({ label: `play-${t}`, apply: () => drive(page, name, t) });
} else if (ats) {
  for (const t of ats) {
    plan.push({ label: `t${t}`, apply: () => page.evaluate((tt) => {
      window.__world.seekTo(tt); window.__world.renderFrame(0);
    }, t) });
  }
} else {
  setup = async () => { if (after > 0) await step(page, after, { shrink: true }); };
  if (usingViews) {
    for (const [label, v] of Object.entries(views)) plan.push({ label, apply: () => applyView(v) });
  } else if (shots <= 1) {
    plan.push({ label: 'shot-0', apply: null });
  } else {
    const arc = opt('--arc', null)?.split(',').map(Number) ?? record.capture?.arc;
    const [a0, a1] = arc ?? [0, 360 - 360 / shots];          // no arc anywhere = the full circle
    const azimuths = [];
    for (let i = 0; i < shots; i++) azimuths.push(a0 + ((a1 - a0) / Math.max(1, shots - 1)) * i);
    // Before shooting a circle, ask whether the circle is inside the building. A world that has
    // declared an arc or named views has already answered; everything else gets one ray per
    // azimuth, which is cheaper than one screenshot (docs/principles.md — the probe exists
    // because a camera inside a wall and a camera looking at a wall render the same rectangle).
    let radius = null;
    if (!arc) {
      const probe = await orbitProbe(page, azimuths);
      const blocked = probe.at.filter((x) => x.blocker);
      if (blocked.length) {
        radius = probe.radius;
        const list = blocked.map((b) => `${Math.round(b.az)}° (${b.blocker})`).join(', ');
        console.log(`\nthis world is walled: ${blocked.length}/${azimuths.length} orbit positions `
          + `at r=${probe.r0} look through something — ${list}`);
        const advice = '  Declare `capture.views` (or `capture.arc`) in world.json so this world '
          + 'is judged by frames somebody chose — an orbit is a guess about an interior.';
        if (radius && probe.stillBlocked === 0) {
          console.log(`  shooting at r=${radius} instead, which is clear from every angle.`);
        } else if (radius) {
          console.log(`  shooting at r=${radius}, the best available — ${probe.stillBlocked} of `
            + `${azimuths.length} still look through something.`);
        } else {
          console.log('  no radius improves it; these frames are photographs of walls.');
        }
        console.log(advice);
      }
    }
    for (const az of azimuths) {
      plan.push({
        label: `az${Math.round(az)}`,
        apply: () => page.evaluate(([a, r]) => window.__orbit(a, null, r), [az, radius]),
      });
    }
  }
}

const stashed = against ? await stashPrevious(outDir, plan.map((p) => p.label)) : [];

await setup();
for (const { label, apply } of plan) {
  if (apply) await apply();
  await shoot(label);
}

// Measured before close(), in the page that is already open: the shots are served from the same
// origin, so the comparison costs no second browser.
const diffs = stashed.length ? await diffPairs(page, outDir, stashed) : [];

const info = await page.evaluate(() => {
  const r = window.__world.getRenderer().info.render;
  return { brief: window.__meta?.brief ?? null, triangles: r.triangles, drawCalls: r.calls };
});
await close();
for (const f of saved) console.log(f.file);

if (against) {
  if (!diffs.length) {
    console.log('\n--against: nothing to compare — no previous frames under these labels.'
      + (usingViews ? '' : ' Declare `capture.views` in world.json so the labels are stable.'));
  } else {
    console.log('\nvs previous:\n' + report(diffs));
    const cells = diffs.flatMap((d) => [
      { label: `${d.label}  ·  BEFORE`, file: path.join(outDir, 'prev', `${d.label}.png`) },
      { label: `${d.label}  ·  AFTER`, file: path.join(outDir, `${d.label}.png`) },
    ]);
    console.log(await composeSheet({
      outDir, cellWidth: 760, aspect: width / height, file: 'against.png',
      title: `${name}  —  this round against the last`,
      cells,
      blocks: [{ table: diffs.map((d) => [d.label,
        d.error ? d.error
          : `${(d.moved * 100).toFixed(1)}% of pixels moved · ${(d.mean * 100).toFixed(2)}% mean change`,
        verdict(d)]) }],
    }));
  }
}

if (wantSheet) {
  const cells = ref ? [{ label: 'REFERENCE', file: ref }, ...saved] : saved;
  console.log(await composeSheet({
    outDir, cellWidth: width, aspect: width / height,
    title: name + (ref ? `  —  vs ${path.basename(ref)}` : ''),
    cells,
    blocks: [
      { table: [
        ['shots', saved.map((s) => s.label).join(', ')],
        ['triangles', info.triangles.toLocaleString()],
        ['drawCalls', info.drawCalls],
      ] },
      { title: 'brief', items: info.brief ? [info.brief] : [] },
      { title: 'console errors', items: errors, tone: 'bad' },
    ],
  }));
}

if (errors.length) {
  console.error(`\nconsole errors (${errors.length}):\n` + errors.join('\n'));
  process.exit(1);
}

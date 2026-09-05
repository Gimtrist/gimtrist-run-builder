// lib.mjs — shared bring-up for capture/verify: server + headless browser + loaded world.
import { readFileSync, promises as fsp } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startServer } from './serve.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Launch server + chromium, open the player in capture mode, wait until the
 *  world's first frame has rendered. Returns handles + collected console errors.
 *  Pass `{ part: '<world>/parts/<part>.js' }` to open one part in the studio instead
 *  of a whole world — same page, same hooks, same screenshot path (D7). */
export async function openWorld(worldName, { width = 1280, height = 720, part = null } = {}) {
  const { chromium } = await import('playwright');
  const { server, port } = await startServer({ port: 0 });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  // Console noise that is a fact about headless chromium rather than about the world. This
  // list is somewhere real bugs could hide, so it stays exact and it stays short: nothing goes
  // in that a world could plausibly cause.
  //
  //   pointer lock — `requestPointerLock` can never succeed in a page no user ever focused. A
  //   first-person world is right to ask for it and right to carry on without it (valentine:
  //   "mouse-look if granted; the arrow keys still turn if not"). It only started reaching the
  //   console when the hands check began working, because clicking the canvas is what asks.
  const ENVIRONMENT = [/not valid for pointer lock/i];
  const keep = (t) => !ENVIRONMENT.some((re) => re.test(t)) && errors.push(t);
  page.on('console', (msg) => { if (msg.type() === 'error') keep(msg.text()); });
  page.on('pageerror', (err) => keep(String(err)));
  const subject = part ? `part=${encodeURIComponent(part)}` : `world=${worldName}`;
  await page.goto(`http://localhost:${port}/play.html?${subject}&capture=1`);
  await page.waitForFunction('window.__ready === true', null, { timeout: 20000 })
    .catch(() => { throw new Error(`"${part || worldName}" never became ready.\nconsole: ${errors.join('\n')}`); });
  const close = async () => { await browser.close(); server.close(); };
  return { page, errors, close };
}

/** Shrink the viewport for a stretch of work nobody is going to look at, and put it
 *  back before anybody does. Headless GL is fill-rate bound, so simulated time costs
 *  real time in proportion to the pixels; 320 px wide is ~16x fewer of them and the
 *  simulation is identical. Returns a restore function.
 *
 *  Never wrap anything that MEASURES pixels in this — verify's luma samples read the
 *  framebuffer, so they run at the size the world was opened at. */
async function shrunk(page, on) {
  const vp = on ? page.viewportSize() : null;
  if (!vp) return async () => {};
  await page.setViewportSize({ width: 320, height: Math.max(2, Math.round(320 * vp.height / vp.width)) });
  await page.evaluate(() => window.__world.resize());
  return async () => {
    await page.setViewportSize(vp);
    await page.evaluate(() => { window.__world.resize(); window.__world.renderFrame(0); });
    await page.evaluate(() => new Promise(requestAnimationFrame));
  };
}

/** Advance the world by `seconds` of simulated time (fixed 30 fps steps).
 *  The trailing rAF yield is load-bearing: a long synchronous `__step` leaves the page
 *  busy enough that Playwright's next locator query can time out waiting for the canvas
 *  (`--after N` with a single shot failed 100% of the time without it).
 *
 *  `{ shrink: true }` renders the journey small — opt-in, and never used where the frames
 *  themselves are the measurement. */
export async function step(page, seconds, { shrink = false } = {}) {
  const restore = await shrunk(page, shrink && seconds > 3);
  const SLICE = 4;
  for (let done = 0; done < seconds; done += SLICE) {
    const chunk = Math.min(SLICE, seconds - done);
    await page.evaluate((s) => window.__step(1 / 30, Math.round(s * 30)), chunk);
    await page.evaluate(() => new Promise(requestAnimationFrame));
  }
  await restore();
}

/** Advance the world to `toSeconds` of simulated time — PLAYING it if it can be played.
 *
 *  `step` simulates a world with nobody at the controls, which is the whole truth for a
 *  scene and almost none of it for a game: every review frame of a playable world comes out
 *  as "the first moment, standing still". Two of this repo's games have a complete visual
 *  record consisting of four shots of their own title card, and nobody noticed, because
 *  those were the only frames anything ever produced.
 *
 *  So: if `worlds/<name>/pilot.js` exists, the world is driven through the published
 *  contract exactly as `botplay` drives it (observe → act → renderFrame). No pilot, or no
 *  `act`, and this degrades to `step`, which is the right answer for a scene.
 *
 *  Time is cumulative across calls (`window.__driveT`), so a caller can walk a list of
 *  moments forward without replaying from zero. Work goes out in ~2 s slices with an rAF
 *  yield between them, and that slicing is not about Playwright's evaluate timeout — it is
 *  what keeps the PAGE answerable while the world is being driven. verify used to keep its
 *  own unsliced copy of this loop (90 frames in one evaluate) and on a heavy world that is
 *  a minute of blocked main thread, after which the next locator query has already given
 *  up: the hands check, which exists to catch a button that cannot be pressed, was being
 *  skipped on exactly the worlds most likely to have one. There is one driver now.
 *
 *  Returns what it did as well as where it got to, so a caller does not need its own loop
 *  to find out: `acted` (commands the pilot issued), `moved` (getState ever changed) and
 *  `terminal`. */
export async function drive(page, name, toSeconds, { hz = 30, quiet = false, shrink = true } = {}) {
  const pilotPath = path.join(ROOT, 'worlds', name, 'pilot.js');
  const hasPilot = !!(await fsp.stat(pilotPath).catch(() => null));
  const playable = await page.evaluate(() => typeof window.__world.act === 'function');
  const usePilot = hasPilot && playable;
  if (!usePilot && !quiet && playable) {
    console.error(`note: worlds/${name}/pilot.js does not exist — driving it as a scene instead`);
  }
  const SLICE = 2;
  let at = await page.evaluate(() => window.__driveT || 0);

  // Travelling costs one rendered frame per simulated frame, so getting to minute two of
  // a world at 1280x720 takes minutes of wall clock. Nobody looks at the frames on the
  // way. (botplay already runs its whole course at 256x144 for the same reason.)
  const restore = await shrunk(page, shrink && toSeconds - at > 8);
  while (at < toSeconds - 1e-6) {
    const until = Math.min(toSeconds, at + SLICE);
    await page.evaluate(async ({ n, target, rate, pilot }) => {
      const w = window.__world;
      if (pilot && !window.__pilot) window.__pilot = (await import(`/worlds/${n}/pilot.js`)).default;
      const dt = 1 / rate;
      window.__driveT = window.__driveT || 0;
      const st = window.__driveStats ||= { acted: 0, moved: false, first: null };
      if (st.first === null && w.getState) st.first = JSON.stringify(w.getState());
      const frames = Math.round((target - window.__driveT) * rate);
      for (let i = 0; i < frames; i++) {
        if (pilot) {
          const cmd = window.__pilot(w.observe(), w.getState(), window.__driveT);
          if (cmd) { w.act(cmd); st.acted++; }
        }
        w.renderFrame(dt);
        window.__driveT += dt;
        if (!st.moved && st.first !== null && JSON.stringify(w.getState()) !== st.first) st.moved = true;
      }
    }, { n: name, target: until, rate: hz, pilot: usePilot });
    await page.evaluate(() => new Promise(requestAnimationFrame));
    at = until;
  }
  await restore();
  const stats = await page.evaluate(() => {
    const s = window.__driveStats || { acted: 0, moved: false };
    const st = window.__world.getState?.();
    return { acted: s.acted, moved: s.moved, terminal: !!(st?.terminal ?? st?.dead ?? st?.won) };
  });
  return { played: usePilot, at, ...stats };
}

/** Resolve a CLI arg to a world directory name. Accepts "<world>" or "worlds/<world>".
 *  capture/verify drive module worlds only (page/classic worlds have no WorldModule to step). */
export function worldNameFromArg(arg) {
  if (!arg) { console.error('usage: <script> <world-name>'); process.exit(1); }
  const name = arg.replace(/^worlds\//, '').replace(/\/$/, '');
  const { worlds } = JSON.parse(readFileSync(path.join(ROOT, 'worlds/index.json'), 'utf8'));
  const w = worlds.find((w) => w.path === name);
  if (!w) { console.error(`"${name}" not in worlds/index.json — run: node harness/catalog.mjs`); process.exit(1); }
  if (w.format !== 'module') { console.error(`"${name}" is format "${w.format}" — capture/verify only drive module worlds`); process.exit(1); }
  return name;
}

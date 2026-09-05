// probe.mjs — measure a world instead of squinting at it.
//
//   node harness/probe.mjs <world> --look 0.2,1.4,0.6 --at 0,0.9,-0.3   # is that sight line clear?
//   node harness/probe.mjs <world> --scout 0,0.9,-0.3 --dist 0.28       # where CAN it be seen from?
//   node harness/probe.mjs <world> --shot out.png --look ... --at ... --fov 24
//   node harness/probe.mjs <world> --rows                               # instanced rows inside each other
//   node harness/probe.mjs <world> --at-time 0.5   /   --play 12        # ...after seeking or playing
//
// Why this exists: a camera INSIDE a wall and a camera LOOKING AT a wall render the same brown
// rectangle, and no screenshot can tell you which one you have. Finding a viewpoint inside a
// machine by moving the camera and re-rendering is a slot machine — one world spent a dozen
// rounds on it — while one ray per candidate answers the same question for a thousandth of the
// cost and comes back as numbers you can paste into a params file.
//
// `--scout` is the one to reach for first: it fires a ray from a whole sphere of candidate
// positions and prints the ones that can actually see the target.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openWorld, drive, step, worldNameFromArg } from './lib.mjs';
import { sightLine, scout, rowOverlaps, aim, hideChrome } from './query.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (flag, dflt) => { const i = args.indexOf(flag); return i > 0 ? args[i + 1] : dflt; };
const vec = (s) => (s ? s.split(',').map(Number) : null);
const name = worldNameFromArg(args[0]);

const from = vec(opt('--look', null));
const at = vec(opt('--at', null));
const target = vec(opt('--scout', null));
const rows = args.includes('--rows');
const shot = opt('--shot', null);
if (!from && !target && !rows) {
  console.error('usage: node harness/probe.mjs <world> [--look x,y,z --at x,y,z] [--scout x,y,z]'
    + ' [--rows] [--shot out.png] [--dist 0.3] [--fov 30] [--at-time 0..1] [--play SECONDS]');
  process.exit(1);
}

const [width, height] = opt('--size', '1280x720').split('x').map(Number);
const { page, errors, close } = await openWorld(name, { width, height });

// A mechanism at rest is a different shape from a mechanism working, and the sight line you
// care about is usually the working one. Both ways in are the world's published ones.
const seek = opt('--at-time', null);
if (seek !== null) await page.evaluate((u) => window.__world.seekTo(Number(u)), seek);
const playFor = Number(opt('--play', 0));
if (playFor > 0) await drive(page, name, playFor, { quiet: true, shrink: false });
else if (opt('--after', null)) await step(page, Number(opt('--after')));

const out = { world: name };

if (rows) out.rows = await rowOverlaps(page);

if (from && at) {
  out.sightLine = await sightLine(page, from, at);
  out.sightLine.from = from;
  out.sightLine.to = at;
}

if (target) {
  const dist = Number(opt('--dist', 0.3));
  const open = await scout(page, target, { dist, azStep: Number(opt('--az', 15)) });
  out.scout = { target, dist, open: open.length, sample: open.slice(0, 24) };
}

if (shot) {
  if (!from || !at) { console.error('--shot needs --look and --at'); process.exit(1); }
  await hideChrome(page);
  await aim(page, from, at, Number(opt('--fov', 0)) || undefined);
  const file = path.isAbsolute(shot) ? shot : path.join(ROOT, shot);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await page.locator('canvas').first().screenshot({ path: file });
  out.shot = file;
}

await close();
if (errors.length) out.console = errors.slice(0, 4);
console.log(JSON.stringify(out, null, 2));
process.exit(errors.length ? 1 : 0);

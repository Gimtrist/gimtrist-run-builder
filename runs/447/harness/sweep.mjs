// sweep.mjs — run verify across the whole library and report which worlds have rotted.
//
//   node harness/sweep.mjs                  # every module world, full tier
//   node harness/sweep.mjs --quick          # cheap tier: does each one still come up
//   node harness/sweep.mjs --changed        # only worlds git says you touched
//   node harness/sweep.mjs --changed main   # ...since that ref instead of HEAD~1
//   node harness/sweep.mjs koi abyss        # named worlds
//   node harness/sweep.mjs --jobs 6         # default is min(4, cores - 2)
//
// Why this exists, and it is not a hypothetical:
//
// `verify` measures ONE world, on demand, and it is excellent at it. Nothing measured the
// other sixty-five. The only repo-wide gate was `export.mjs --check`, which compares a
// bundle's hash against its sources — it will tell you a world's HTML is stale and it will
// never tell you the world is broken.
//
// So a world can rot in place, and one did. `rooftop` sat on main failing its own declared
// key —
//
//     key "low" but nothing in the frame is bright (0.6% above 55% luminance, min 0.8%)
//
// — because its mirror was reflecting off a plane at the wrong angle, and the neon that was
// supposed to be its one highlight never came back. Nobody saw it, because nothing had run
// `verify` on that world since the `luma`/`key` gate was written. That gate arrived AFTER
// most of this library was committed, which means most of this library had never once been
// held against the ruler it is now judged by. A measurement nobody re-runs is a measurement
// of the day you took it.
//
// A sweep is a MEASUREMENT, not an edit: every child runs with `--no-export`, so a run over
// sixty-six worlds cannot quietly rewrite sixty-six bundles. Refresh those deliberately,
// with `node harness/export.mjs --all`, after you have looked at what the sweep said.
//
// Exit 0 = every world passed.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const quick = args.includes('--quick');
const flag = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };

const index = JSON.parse(await fs.readFile(path.join(ROOT, 'worlds/index.json'), 'utf8'));
const modules = (index.worlds || index).filter((w) => w.format === 'module').map((w) => w.path);

// ---------------------------------------------------------------------------
// which worlds
let wanted = args.filter((a) => !a.startsWith('--') && modules.includes(a));
if (args.includes('--changed')) {
  const since = flag('--changed', 'HEAD~1');
  const ref = since && !since.startsWith('--') ? since : 'HEAD~1';
  const out = await new Promise((resolve) => {
    execFile('git', ['diff', '--name-only', ref, '--', 'worlds'], { cwd: ROOT },
      (err, stdout) => resolve(err ? '' : stdout));
  });
  const touched = new Set();
  for (const line of out.split('\n')) {
    const m = line.match(/^worlds\/([^/]+)\//);
    if (m && modules.includes(m[1])) touched.add(m[1]);
  }
  wanted = [...touched];
  if (!wanted.length) {
    console.log(`nothing under worlds/ has changed since ${ref} — nothing to sweep`);
    process.exit(0);
  }
}
if (!wanted.length) wanted = modules;

const JOBS = Math.max(1, Number(flag('--jobs', Math.min(4, Math.max(1, os.cpus().length - 2)))));

// ---------------------------------------------------------------------------
/** One child `verify`. It always prints JSON — even when the world fails to come up, which
 *  is a property of verify's cheap tier and the only reason this can stay simple. A child
 *  that manages neither JSON nor a clean exit is itself the finding, so it is reported in
 *  the same shape as everything else rather than thrown. */
function verifyOne(name) {
  return new Promise((resolve) => {
    // Running several renders at once moves frameMs by 3-4x, so tell verify it is sharing the
    // machine: the number is still reported, it just stops being a gate. A sweep exists to find
    // worlds that ROTTED, and a budget that fails because the sweep itself is busy is noise.
    const a = [path.join(ROOT, 'harness/verify.mjs'), name, '--no-export',
      ...(JOBS > 1 ? ['--shared'] : [])];
    if (quick) a.push('--quick');
    const p = spawn('node', a, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '', err = '';
    p.stdout.on('data', (d) => { out += d; });
    p.stderr.on('data', (d) => { err += d; });
    p.on('close', () => {
      try {
        resolve(JSON.parse(out));
      } catch {
        // The LAST lines of a node crash are the least informative part of it — the first
        // sweep reported four worlds as "verify produced no report: } / / Node.js v23.1.0",
        // which is the closing brace of a stack trace and the runtime version. Prefer the
        // first line that looks like a message.
        const lines = (err || out).trim().split('\n').map((l) => l.trim()).filter(Boolean);
        const msg = lines.find((l) => /(Error|error:|Timeout|ENOENT|not found|failed)/i.test(l))
          || lines[0] || 'no output';
        resolve({
          world: name,
          pass: false,
          problems: [`verify produced no report: ${msg}`],
          warnings: [],
        });
      }
    });
  });
}

// ---------------------------------------------------------------------------
const started = Date.now();
console.log(`sweeping ${wanted.length} world${wanted.length === 1 ? '' : 's'}`
  + `, ${quick ? 'cheap' : 'full'} tier, ${JOBS} at a time\n`);

const results = [];
let cursor = 0;
const pad = Math.max(...wanted.map((w) => w.length));
await Promise.all(Array.from({ length: Math.min(JOBS, wanted.length) }, async () => {
  while (cursor < wanted.length) {
    const name = wanted[cursor++];
    const r = await verifyOne(name);
    results.push(r);
    // one line per world as it lands, because a full sweep of this library is a coffee
    // break and a progress bar that only appears at the end is not a progress bar
    const mark = r.pass ? 'ok  ' : 'FAIL';
    const l = r.luma, c = r.chroma;
    const facts = l
      ? `key ${String(r.key).padEnd(7)} med ${l.median.toFixed(2)} dark ${l.dark.toFixed(2)} `
        + `bright ${l.bright.toFixed(3)} spread ${c ? c.spread.toFixed(2) : ' -  '} `
        + `${String(r.triangles ?? '-').padStart(7)} tris ${String(r.drawCalls ?? '-').padStart(4)} calls`
      : '';
    console.log(`  ${mark}  ${name.padEnd(pad)}  ${facts}`
      + `${(results.length).toString().padStart(4)}/${wanted.length}`);
  }
}));

results.sort((a, b) => wanted.indexOf(a.world) - wanted.indexOf(b.world));
const failed = results.filter((r) => !r.pass);
const warned = results.filter((r) => r.pass && r.warnings?.length);

console.log(`\n${results.length - failed.length}/${results.length} passed`
  + `  (${Math.round((Date.now() - started) / 1000)}s)`);

if (warned.length) {
  console.log(`\nwarnings — facts, not gates; a world is allowed to do any of these on purpose:`);
  for (const r of warned) for (const w of r.warnings) console.log(`  ${r.world}: ${w}`);
}
if (failed.length) {
  console.log(`\n${failed.length} world${failed.length === 1 ? '' : 's'} failing:`);
  for (const r of failed) for (const p of r.problems) console.log(`  ${r.world}: ${p}`);
  process.exit(1);
}

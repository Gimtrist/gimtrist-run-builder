// compare.mjs — did this round change what I think it changed, and did it break something else?
//
// Used by `capture.mjs --against`. Shots are review artifacts, not history: every run overwrites
// them, so every round is judged against MEMORY of the last one. That is exactly where a
// regression hides. One world lost a starfish behind a floor for two full rounds — the frame was
// different every time, plausible every time, and nobody noticed something had stopped being in
// it, because there was nothing to hold the new frame up against.
//
// So: move the old frames aside, shoot the same viewpoints again, and put the pairs side by side
// with a number on each. The number is not a quality score — it is "how much of this frame moved",
// which is the one question a diff can honestly answer.
import { promises as fs } from 'node:fs';
import path from 'node:path';

/** Move existing shots into <outDir>/prev/ so this run can be compared with the last one.
 *  Returns the labels that were carried over. */
export async function stashPrevious(outDir, labels) {
  const prev = path.join(outDir, 'prev');
  await fs.mkdir(prev, { recursive: true });
  const kept = [];
  for (const label of labels) {
    const from = path.join(outDir, `${label}.png`);
    if (!(await fs.stat(from).catch(() => null))) continue;
    await fs.rename(from, path.join(prev, `${label}.png`));
    kept.push(label);
  }
  return kept;
}

/** Per-pair difference, measured in the page that is already open — the shots are served over the
 *  same origin, so this costs no extra browser.
 *
 *  `moved` is the fraction of pixels that changed by more than ~5% of range, which is past
 *  dithering and antialiasing and into "something is actually somewhere else". `mean` is the
 *  average change over the whole frame, which separates "one object moved" (low mean, real moved)
 *  from "the whole thing got warmer" (high mean, high moved). */
export async function diffPairs(page, outDir, labels) {
  const origin = new URL(page.url()).origin;
  const rel = path.relative(process.cwd(), outDir).split(path.sep).join('/');
  const list = labels.map((label) => ({
    label,
    a: `${origin}/${rel}/prev/${label}.png`,
    b: `${origin}/${rel}/${label}.png`,
  }));
  return page.evaluate(async (pairs) => {
    const load = (src) => new Promise((res, rej) => {
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = () => rej(new Error(`could not load ${src}`));
      im.src = src;
    });
    const out = [];
    for (const { label, a, b } of pairs) {
      try {
        const [ia, ib] = await Promise.all([load(a), load(b)]);
        const w = Math.min(ia.width, ib.width), h = Math.min(ia.height, ib.height);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        const ctx = c.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(ia, 0, 0);
        const da = ctx.getImageData(0, 0, w, h).data;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(ib, 0, 0);
        const db = ctx.getImageData(0, 0, w, h).data;
        let moved = 0, sum = 0;
        for (let i = 0; i < da.length; i += 4) {
          const d = (Math.abs(da[i] - db[i]) + Math.abs(da[i + 1] - db[i + 1])
            + Math.abs(da[i + 2] - db[i + 2])) / 3;
          sum += d;
          if (d > 12) moved++;
        }
        const n = da.length / 4;
        out.push({ label, moved: moved / n, mean: sum / n / 255 });
      } catch (err) {
        out.push({ label, error: String(err.message || err) });
      }
    }
    return out;
  }, list);
}

/** One line per viewpoint. Deliberately no verdict: "31% moved" is a fact, "regressed" would be
 *  a guess, and the point of putting the two frames side by side is that YOU make that call.
 *
 *  BOTH numbers are printed, because `moved` alone lies in both directions and it lied in both
 *  during one session: deepening the contrast of a floor inlay across five viewpoints reported
 *  "0.0% — identical" while the change was plainly visible, and adding twenty-six suitcases, seven
 *  trolleys and a queue barrier to a hall reported "1.1% — barely moved". `moved` counts pixels
 *  past a threshold, so a small change spread over the whole frame scores zero and a large change
 *  confined to small objects scores almost zero. `mean` is the average change over the frame and
 *  catches the first; the pair together tells you WHICH KIND of change happened:
 *
 *      moved high, mean high   the whole picture is different
 *      moved high, mean low    something moved; the rest held still
 *      moved low,  mean high   a global shift — exposure, palette, a material
 *      moved low,  mean low    nothing happened
 *
 *  So "identical" is only claimed when both are at the floor. */
export function report(diffs) {
  const w = Math.max(...diffs.map((d) => d.label.length));
  return diffs.map((d) => {
    if (d.error) return `  ${d.label.padEnd(w)}  —  ${d.error}`;
    const pct = (d.moved * 100).toFixed(1) + '%';
    const mean = (d.mean * 100).toFixed(2) + '%';
    return `  ${d.label.padEnd(w)}  ${pct.padStart(6)} moved  ${mean.padStart(6)} mean   ${verdict(d)}`;
  }).join('\n');
}

/** The two numbers, read together. Every combination has a sentence: a blank verdict is the one
 *  outcome a reviewer cannot act on, and the middle of the range is where most real edits land. */
export function verdict(d) {
  if (d.error) return d.error;
  const someMove = d.moved >= 0.02, bigMove = d.moved > 0.35;
  const shift = d.mean > 0.012;
  if (!someMove) {
    if (!shift) return d.moved < 0.002 && d.mean < 0.002 ? 'identical' : 'barely moved';
    return 'a global shift — exposure, palette or a material';
  }
  if (!shift) return 'something moved; the rest held still';
  return bigMove ? 'most of the frame' : 'a real change over part of the frame';
}

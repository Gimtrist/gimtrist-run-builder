// rng.js — a seeded random source that splits into independent NAMED streams.
//
//   import { seedRng } from '/runtime/rng.js';
//
//   const rng = seedRng(19980605);          // the world's master seed
//   const puddles = rng.stream('puddles');  // independent sub-stream
//   const signs   = rng.stream('signs');
//
//   puddles();                 // 0..1
//   puddles.range(0.4, 1.2);
//   puddles.int(6);            // 0..5
//   puddles.pick(PALETTE);
//   puddles.chance(0.16);      // true 16% of the time
//
// ---------------------------------------------------------------------------
// Why named streams, rather than one `rnd()` for the whole world.
//
// Nineteen worlds in here declare their own copy of the same LCG and draw every decision
// out of it in one long sequence — every building, every sign, every hanging shirt. That
// makes a world deterministic, which is the point: a capture is a regression test.
//
// It also welds every generator to every other one. In `rooftop`, changing a puddle loop
// from thirty iterations to twelve consumed 54 fewer numbers, and everything drawn after it
// shifted along the sequence: different strokes on every neon sign, different laundry on
// the line, a different roof. The puddles were the only thing being edited. The diff was
// one integer, and the whole picture was a stranger.
//
// The failure is not "randomness is hard", it is COUPLING: with one stream, position in the
// sequence is a global variable that every generator writes to. So the rule is the rule for
// any global — don't have one. A stream's seed here is derived from (master seed, name), so:
//
//   · changing how many numbers 'puddles' draws cannot move 'signs';
//   · adding a NEW stream later disturbs none of the existing ones;
//   · the streams are order-independent — `rng.stream('a')` gives the same sequence
//     whether you ask for it before or after `rng.stream('b')`, and whether or not the
//     master has been called in between.
//
// The last one is why `stream()` derives from the captured seed and never from live state.
//
// ---------------------------------------------------------------------------
// Adopting it in an existing world costs nothing visually: the root callable is bit-exact
// with the LCG those nineteen worlds already inline (same constants, and the product stays
// under 2^53 so plain arithmetic and Math.imul agree), so `seedRng(S)` IS that world's
// `rnd`. Move generators onto named streams one at a time, and expect each move to re-roll
// that generator once — after which it stays put no matter what you edit elsewhere.

const MUL = 1664525;
const INC = 1013904223;

/** FNV-1a, 32-bit. Only needs to scatter short ASCII names, and it does. */
function hash32(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/**
 * @param {number} seed  any integer. The same seed always gives the same world.
 * @returns {(() => number) & {
 *   range: (a: number, b: number) => number,
 *   int: (n: number) => number,
 *   pick: <T>(arr: T[]) => T,
 *   chance: (p: number) => boolean,
 *   stream: (name: string) => ReturnType<typeof seedRng>,
 *   seed: number,
 * }}
 */
export function seedRng(seed) {
  const root = seed >>> 0;
  let s = root;
  const f = () => ((s = (s * MUL + INC) >>> 0) / 4294967296);
  f.seed = root;
  f.range = (a, b) => a + (b - a) * f();
  // `f()` is in [0, 1) so the multiply cannot reach n — but clamping is one comparison and
  // an off-by-one that only fires on one draw in four billion is not a bug you find twice.
  f.int = (n) => Math.min(n - 1, Math.floor(f() * n));
  f.pick = (arr) => arr[Math.min(arr.length - 1, Math.floor(f() * arr.length))];
  f.chance = (p) => f() < p;
  f.stream = (name) => {
    // Derived from the CAPTURED seed, never from `s`: a stream must not depend on how much
    // the master (or any sibling) has been drawn from before it was asked for.
    let t = (hash32(name) ^ Math.imul(root, 2654435761)) >>> 0;
    for (let i = 0; i < 3; i++) t = (t * MUL + INC) >>> 0;   // decorrelate near-identical names
    return seedRng(t);
  };
  return f;
}

export default seedRng;

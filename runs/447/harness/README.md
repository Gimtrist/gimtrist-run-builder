# harness/ — the agent's eyes and hands (deterministic script layer)

All plain Node ESM; the only heavy dependency is Playwright (devDependency, needed only for the agent's closed loop). No long-running process.
**Naming rule: one command = one verb = one responsibility.**

| Script | Responsibility | Key flags |
|---|---|---|
| `serve.mjs` | Zero-dependency static server over the repo root (open / for the gallery) | `--port 5180` |
| `create.mjs` | Scaffold `worlds/<name>/` and refresh the catalog | `--type scene\|game\|object`, `--brief "..."` |
| `capture.mjs` | Headlessly load a world → screenshots for the agent to look at | `--shots N` orbit positions, `--arc a0,a1` limit the angle (walled scenes), `--at t1,t2` timeline positions (0..1), `--after s` simulate s seconds first, `--size WxH`, `--out dir`, `--hero` one frame at 1920×1080 (a contact sheet compares; it does not verify) |
| `verify.mjs` | Load + simulate 5 seconds: console errors, WorldModule contract, budget (tris / drawCalls / frameMs), declared key at every declared moment and viewpoint | Outputs JSON, exit 0 on pass. `--quick` cheap tier, `--no-export` |
| `probe.mjs` | **Measure** a world instead of squinting at it: is that sight line clear, where can this point be seen from, which rows are inside each other | `--look a --at b`, `--scout p --dist d`, `--rows`, `--shot out.png`, `--at-time u`, `--play s` |
| `botplay.mjs` | Fly a playable world to a WIN through its own `worlds/<name>/pilot.js` | `--seconds N`, `--dt hz`. Exit 0 only if the pilot wins — losing is terminal too. The pilot may use `observe`/`getState`/`act` and nothing else — see docs/principles.md E11 |
| `catalog.mjs` | Scan `worlds/*/world.json` → generate `worlds/index.json` | `--check` only validates staleness (CI gate) |
| `smoke.mjs` | End-to-end self-check: create → catalog → verify → capture (both modes) → export, then deletes its throwaway world. **Run it after touching harness/ or runtime/** | 6/6 green, or the loop is broken |
| `lib.mjs` | Shared internal module: start server + chromium, wait for ready, collect console, and **the one loop that steps or pilots a world** (sliced, with an rAF yield between slices, so the page stays answerable while it runs) — not a command, hence no verb name | — |
| `query.mjs` | Shared internal module: the questions you can ask a *running* world — scene audit, frame cost, sight lines, viewpoint scouting, row overlaps. Never changes the world. Used by `verify` and `probe` | — |

capture/verify drive every world through the same page — that is the point of one contract.

Design notes:
- `capture` is the piece a general coding agent does not have: eyes on what it just wrote;
- the capture page is `/play.html?capture=1` — **humans looking and machines testing go down the same path**: render one frame first
  (the render-once-before-loop axiom), then let the script drive `window.__step` (fixed 30fps stepping, deterministic)
  and `window.__orbit` (orbit positions);
- verifying a terminal state (win/lose etc.) must be done in a freshly opened page with one eval running to completion, never reusing an instance you've already poked (guards against state pollution);
- **the harness can render, drive and now measure.** For two years every number it produced was
  either a pixel statistic or a scene-graph count, and neither can answer the question you have
  while building anything with an inside to it — *is there a wall between here and there.* A
  camera inside a wall and a camera looking at a wall render the same rectangle, so hunting a
  viewpoint by moving and re-rendering is a slot machine. `probe --scout` fires one ray per
  candidate instead and prints the positions that can actually see the target;
- **anything long must be sliced.** A single `page.evaluate` that runs hundreds of frames blocks
  the main thread for as long as it takes, and every Playwright locator queued behind it starts
  timing out — which is how the hands check came to be silently skipped on precisely the heavy,
  playable worlds it exists for. `lib.mjs`'s `step`/`drive` are the sliced versions; nothing
  should grow a private copy of that loop.

# worlds/ — the works library

**Flat: one world = one directory.** The category is not a directory, it's the `type` field in `world.json`.

```
worlds/
├── index.json          ← GENERATED: node harness/catalog.mjs (the sole data contract)
└── <name>/
    ├── world.json      ← the hand-written record: name, title, type, brief, budget
    ├── main.js         ← the entry point; createWorld(container) → WorldModule
    ├── params.js       ← objects: every dimension, in metres, in one place
    ├── parts/          ← objects: one reviewable part per file
    ├── cover.png       ← the gallery's thumbnail
    ├── cover.gif       ← a looping turntable on a transparent background (README, hover previews)
    ├── shots/          ← GENERATED: harness/capture.mjs (whole world)
    │   └── parts/<part>/  and harness/inspect.mjs (one part: 4 views + a facts table)
    └── <name>.html     ← GENERATED: harness/export.mjs — self-contained, double-clickable
```

**Everything about one work lives in its own directory, and all of it is committed** —
source, review sheets, and the shareable single file. You can read the code and look at the
frames it actually produced without running anything, and `cp -r worlds/<name> ~/somewhere`
hands someone the whole work. The cost is real and worth knowing: a capture is a diff, and the
exports are 0.5–3.5 MB each (three, the runtime and manifold's wasm are inlined). Re-capture
because something changed, not to have another look.

## One shot format for every world

```bash
node harness/capture.mjs <name> --shots 4 --sheet     # az*.png ×4 + sheet.png, every world
node harness/inspect.mjs <name>                       # objects: shots/parts/<part>/ ×4 + sheet.png
```

Same two commands everywhere, so any two worlds are comparable and nobody has to remember a
per-world incantation. A walled world is the exception that would break that, and it is handled
by the world rather than by the invocation:

```json
"capture": { "arc": [-15, 105] }
```

Without it the orbit is a full circle. With it, the four frames stay inside an arc that is
actually open — noodles rendered **pitch black** from 12 of 24 azimuths (the camera sits behind
the alley's back wall in an unlit night scene) and cafe and kitchen put a wall or a floor slab
across half their frames. The three arcs in this repo were picked by measuring the information
density of each azimuth, not by taste, and then confirmed on the sheet.

### Named viewpoints

An arc says where NOT to stand. `views` says where to stand, and gives each place a name:

```json
"capture": { "views": {
  "into-the-pool": { "eye": [1.66, 2.06, 2.18], "at": [0, -0.04, -0.16] },
  "close-anemone": { "eye": [1.03, 0.85, 1.33], "at": [0.36, 0.32, 0.66], "fov": 38 },
  "overhead":      { "az": 0, "el": 78 }
} }
```

`eye`/`at` place the camera outright; `az`/`el` swing the world's own framing, so a view written
that way stays correct when the author re-frames the world. A world that declares them gets them
from the plain `capture.mjs <name>` — an explicit `--shots N` still falls back to the orbit.

Two reasons to bother. An orbit tells you what a world looks like from four angles, all of them
the same distance away and all of them chosen by arithmetic; **a close-up on the one thing you
are working on** is worth more than three quarters of a circle. And named frames are stable
across rounds, which is what makes `--against` mean anything:

```bash
node harness/capture.mjs <name> --against    # the same frames, beside last round's
```

Shots are overwritten every run, so without this each round is judged against your MEMORY of the
last one. Rendering here is deterministic — re-shooting an unchanged world measures 0.0% — so any
number above zero is a real change, and the pairs sit side by side in `against.png` for you to
say whether it was an improvement. It does not grade them: `8.5% of pixels moved` is a fact, and
"better" is your call. `prev/` and `against.png` are scratch, and git-ignored.

Use `probe.mjs --scout` to pick the eye positions rather than guessing them. A viewpoint that
looks reasonable in your head is often inside a wall: tidepool's first `waterline` view was shot
straight into the back of a boulder, and the rim of its own pool turned out to sit 0.56 m above
the waterline it was supposed to frame — so no low angle could ever have seen it.

## world.json

```json
{
  "name": "lighthouse",          // must equal the directory name, a single lowercase word, no - or _
  "title": "First Light",        // display name (may contain spaces / any language)
  "type": "scene",               // what it is: scene | game | object (open set, extensible)
  "format": "module",            // how it runs
  "entry": "main.js",
  "cover": "cover.png",          // optional
  "brief": "...",                // north star: one line of what it should be like to be there
  "key": "natural",              // lighting key: natural | low | high — verify measures the frame
  "budget": { "tris": 120000, "drawCalls": 80 }
}
```

After editing any `world.json` → `node harness/catalog.mjs` to regenerate index.json.

## One format

Every world is a **module**: a directory with a `world.json` and a `main.js` that
exports `createWorld(container)`. Open it at `/play.html?world=<name>`; the harness can
capture and verify it.

Adapting an existing three.js scene to this contract is wiring only — entry point, loop,
controls. Geometry, materials and tuning are the author's and get carried over verbatim.
If the original was authored on an older three.js, its palette will need
`docs/principles.md` axiom E9.

## Creating one

```bash
node harness/create.mjs <name> --type scene --brief "..."
```

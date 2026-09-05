# The WorldModule contract

Every world exports one function. Everything downstream — the player page, the gallery,
screenshots, verification, single-file export — depends on this and nothing else.

Source of truth: [`runtime/world.js`](../runtime/world.js).

```js
export default function createWorld(container, opts = {}) { /* ... */ }
```

`createWorld` may be `async` (a world that needs the CSG WASM will be). It receives the
DOM element to render into, and returns a **WorldModule**.

## Base — every world implements all of these

| Method | Contract |
|---|---|
| `getScene()` | the `THREE.Scene` |
| `getCamera()` | the active camera |
| `getRenderer()` | the `WebGLRenderer` (verification reads `renderer.info` for the budget) |
| `getCanvas()` | the canvas element |
| `getOrbitControls()` | the controls, or `null` if the world has none |
| `resize()` | takes **no arguments** — read `container.clientWidth/clientHeight` yourself |
| `dispose()` | free geometries, materials, textures, and remove any listener you added |
| `renderFrame(dt)` | advance by `dt` seconds and draw exactly one frame |

### `renderFrame` is the whole loop

The world does **not** own `requestAnimationFrame`. The page calls `renderFrame(dt)`;
in capture mode the harness calls it with a fixed step instead.

That single rule is what makes everything else possible: a world can be stepped six
seconds forward and screenshotted headlessly, two runs produce the same frame, and a
crash surfaces on the first frame instead of hiding inside a loop
(`principles.md`, axioms E2 and E3).

Anything a self-running page would have done per frame — physics, actor ticks, particle
updates, driving an `EffectComposer` — happens inside `renderFrame`, in the same order.

## Optional method families

Two families. Each is **whole or nothing**: implement all of a family's methods, or none
of them. Half a family is a contract error, because the harness will take the presence of
one method as a promise about the rest.

**Timeline** — the world can be addressed by time:

| Method | Contract |
|---|---|
| `play()` | start advancing |
| `pause()` | stop advancing |
| `seekTo(t)` | jump to `t` in `0..1`; **the same `t` must always render the same frame** |
| `getProgress()` | current `t` in `0..1` |
| `duration` | seconds for one full pass (a number, not a function) |

Implementing this makes `capture --at 0,0.5,0.9` meaningful, and verification checks that
`seekTo(0)` and `seekTo(1)` actually differ — a timeline that renders one frame is not a
timeline.

**Playable** — the world can be driven by something other than a human:

| Method | Contract |
|---|---|
| `getState()` | serializable state, including whatever terminal state this world has |
| `act(input)` | inject one input |
| `observe()` | a compact view for a bot |

Wire your keyboard handler to call `act()` too, so a human and a bot travel the same code
path. Anything else and you are testing a path nobody plays.

### Playable does not mean game

Anything a person can operate implements this family: an instrument, a control panel, a
machine with a lever, a toy, a simulation. The moment a world has controls, the controls have
to be drivable from outside — otherwise nothing in this repo can photograph them working, and
nothing can check they are not inert (docs/principles.md E11).

That runs into one assumption baked into `botplay`, which exits 0 only when the pilot **wins**.
Most of these worlds cannot be won. The honest analogue, and the one to write down in
`pilot.js`, is **it came back to a consistent state**:

```js
export const succeeds = (s) => s.acted >= 20 && s.atRest === true && s.holding.length === 0;
```

— it was operated a real number of times, and when the run ended nothing was left hanging: no
control still held down, no moving part stopped half way through its travel, nothing still
owed. That is not a weaker bar than winning. It is the bar that catches the one failure a
screenshot can never show you, because a stuck control looks exactly like a control at rest in
every frame after the one where it stuck.

So `getState()` on a non-game should publish the two or three facts that make "consistent"
checkable — how many times it has been operated, and whether everything is home — rather than
a `won` it will never set. `terminal: false` is a complete and honest answer for a world that
has no end.

## Capabilities are probed, never declared

`world.json` has no `caps` field, on purpose. Implementing `seekTo` **is** having a
timeline; implementing `act` **is** being playable. The harness reads the object:

```js
{ timeline: typeof w.seekTo === 'function',
  interactive: typeof w.act === 'function' }
```

A declaration can disagree with the code. A probe cannot. `verify` additionally
*measures* `animated` — the share of pixels that changed over six simulated seconds —
so "this world is alive" is a fact about the frames, not a claim in a file.

## world.json

Only authored intent lives here.

```jsonc
{
  "name": "<world>",             // one lowercase word, matches the directory
  "title": "First Light",        // display name
  "type": "scene",               // scene · game · object (open set)
  "format": "module",
  "entry": "main.js",
  "cover": "cover.png",          // optional
  "brief": "dusk falls; …",      // the north star your own review is judged against
  "key": "low",                  // natural (default) · low · high — verify measures the frame
  "budget": { "tris": 120000, "drawCalls": 80, "frameMs": 260 },  // optional; verify enforces each
  "verify": {                    // optional; both REPLACE the single default sample
    "at":    [ { "s": 2, "key": "natural" }, { "s": 64, "key": "low", "name": "night" } ],
    "views": [ "<a viewpoint this world publishes>", "..." ]
  }
}
```

`budget.frameMs` is the median cost of a frame in the software renderer. It is not a claim about
a real GPU — it is measured identically for every world, so it compares them, and it catches one
that got ten times heavier. Set it at two or three times what a quiet machine reports; the number
moves with the machine, and policing ten percent would only produce flaky failures.

`verify.at` names the MOMENTS that have to hold up and `verify.views` names the VIEWPOINTS,
because one sample cannot be honest about a world that has more than one of either: a day/night
game really is `natural` at noon and `low` at midnight, and an object with a macro station and a
wide one is two different pictures. Moments are reached by playing the world there (through its
`pilot.js` when it has one); views are reached through whatever the world already publishes —
`act({view: name})` for a playable world, `setView(name)` for a studio one. No new contract
method: if a world publishes neither, `verify` says so rather than guessing.

`key` is the lighting key you are committing to, and it works exactly like `budget`: a declared
intent that the harness then measures the world against. `verify` samples the rendered frame three
times over six seconds and reports

```jsonc
"luma": { "median": 0.21, "dark": 0.18, "bright": 0.06 }
```

— the median pixel's luminance, the share of the frame crushed below 5%, and the peak share above
55%. It fails a `natural` world that has collapsed into the bottom of the range, and a `low` world
with no bright focal subject anywhere. It does **not** push worlds toward being bright: a deep-sea
scene declares `low` and is black on purpose. It pushes them toward being *deliberate*, because
darkness was the one quality property here with no number attached, and it drifted accordingly.

`worlds/index.json` is **generated** — run `npm run catalog` after editing a
`world.json`, and `npm run check` fails if it is stale.

## Minimum viable world

```js
import * as THREE from 'three';

export default function createWorld(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 500);
  camera.position.set(4, 3, 6);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x1a1410, 1.2));
  const cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshStandardMaterial({ color: 0x8899ff }));
  scene.add(cube);

  return {
    getScene: () => scene,
    getCamera: () => camera,
    getRenderer: () => renderer,
    getCanvas: () => renderer.domElement,
    getOrbitControls: () => null,
    resize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    },
    renderFrame(dt) {
      cube.rotation.y += dt * 0.6;
      renderer.render(scene, camera);
    },
    dispose() {
      renderer.dispose();
      scene.traverse((o) => { o.geometry?.dispose(); o.material?.dispose?.(); });
    },
  };
}
```

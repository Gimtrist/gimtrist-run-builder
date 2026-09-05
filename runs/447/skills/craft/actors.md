# actors — bring people into the world

`runtime/actors.js` = mannequin-js figures + grid A* pathfinding + routine DSL + pose library.
People are the strongest signal of "living": a patron who sits down to eat noodles brings more life than a hundred particles.

## Usage

```js
import { World as ActorWorld } from '/runtime/actors.js';

const actors = ActorWorld({
  scene,                                       // required (no globals)
  zone: { x0: -6, z0: -4, x1: 8, z1: 9 },      // walkable rectangle
  obstacles: [{ x0, z0, x1, z1 }, ...],        // axis-aligned obstacles (table/stall/wall)
  radius: 0.32, cell: 0.3, speed: 1.2,         // optional
});

actors.spawn({
  kind: 'm' | 'f', height: 1.72, x, z, yaw, tint: 0x8a4a3a,
  routine: [                                   // loops; empty array = free wander
    { go: [x, z] },                            // A* walk there
    { face: [x, z] },                          // turn to face
    { wait: 3, pose: 'operate', face: [x,z] }, // hold (operate = hands-on-counter work)
    { sit: { x, z, yaw, hold: 9 } },           // sit (turn first then fold, prevents leg twist)
    { grab: mesh }, { put: [x, y, z] },        // pick up/put down (mesh.userData.hold defines grip pose)
  ],
});

// in renderFrame:
actors.tick(dt);
```

Tested in anger: a food-stall scene — an operator working the pot, seated patrons, and
passers-by wandering through.

## Scar rules

1. **mannequin-js on import auto-creates fullscreen canvas + animation loop** — actor-engine neutralizes it at module top level,
   world code doesn't touch it. But never bypass actor-engine with a direct `import 'mannequin-js/src/scene.js'` stage.
2. **Grounding via bbox**: figure origin is not at feet. Engine's `footY` / sit-grounding handled; when placing figures yourself
   use `Box3.setFromObject` to compute foot offset (v1 chase-run groundOffset pattern).
3. **sit pose leg lift < 90°** (85°) — 90° triggers Euler gimbal lock, legs twist into spirals.
4. **Turn first, sit second** (engine has built-in order) — turning while folding = leg spiral.
5. **Pose values are tuned** (walkPose knee timing, arm swing phase) — need new poses, write new functions.
   Don't "tweak two numbers" and break the walk cycle.
6. **Don't forget stool/small objects in obstacles** — A* only sees obstacles; miss them and figures walk through.
7. **Dynamic obstacles (vehicles) via `addCollider({x,z,r})`**, update x/z each frame — pedestrians pathfind around and get pushed out.

## Two kinds of figure, and the draw-call wall between them

`World` gives you a **person**: articulated, poseable, able to sit down and pick up a tray.
It costs ~30 draw calls. That number is the ceiling on every crowd scene here, and it bites
early: thirteen mannequins are already 390 calls, before the building they are standing in.

`Crowd` gives you a **background figure**: one low-poly body, a per-instance gait phase, and the
walk done in the vertex shader by rotating tagged limbs about the hip and the shoulder. One
InstancedMesh per colour slot — coat, trousers, skin, hair, shoes — so a hundred of them is
**five draw calls**, whatever the count, and every person is dressed separately.

```js
import { World as ActorWorld, Crowd } from '/runtime/actors.js';

const crowd = Crowd({
  scene, count: 42,
  zone: { x0: -28, x1: 29, z0: -11.5, z1: 10 },
  obstacles,                      // the same rects World takes — they become the waypoint graph
  step: 2.4, radius: 0.55,        // waypoint spacing, and how wide a person is
  palette: { coat: [0x8e9bb4, 0xb09a80, 0x6f8f7a] },   // any slot; the rest keep the default
  height: [1.58, 1.86], speed: [0.85, 1.35],
  rng: () => stream(),            // optional: keep the crowd inside your seeded stream
});
crowd.tick(dt);
```

Use both in one world. `World` for the three people who *do* something — the barista, the man
asleep on the bench, the one crossing the light in your hero frame. `Crowd` for the sixty who are
just there. That split is also the honest one: a figure that walks a line and never turns its head
does not need shoulders that work, and sixty of them read as a crowd, which is the whole job.

The waypoint graph is generated from `zone` minus `obstacles`, so a walker never strides through
a bench you already declared. Facing is +X, feet at y = 0, and the meshes cast shadows — including
the gait, because a crowd whose shadows stand still is worse than a crowd with none.

**Dress it.** The five slots are `coat`, `trousers`, `skin`, `hair`, `shoes`, each a list drawn
from per person; pass any subset and the rest keep the runtime default. Colour lives in
`instanceColor`, never in the geometry — a crowd with its skin tone baked into the vertices is one
face repeated N times, which is worse than three mannequins.

## Crowd feeling

- 3 people + different routines ≈ living scene; 10 people same routine ≈ uncanny valley. Stagger wait times and tints.
- Wanderers (empty routine) are cheapest background life.
- Each mannequin ≈ 30 draw calls — count it in budget (noodles: 3 people ≈ 90 calls).
  Past about six figures this is the largest single line in a scene's budget; that is the point
  at which `Crowd` stops being an optimisation and starts being the only way to have a crowd.

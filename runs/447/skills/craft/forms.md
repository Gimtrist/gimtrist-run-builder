# forms — the shapes a made object is full of

`runtime/forms.js`. Pure geometry and generated textures: no scene, no lights, no materials, so a
part can call any of it and stay a pure `build(params) -> Object3D` (D7).

```js
import { fluteGeo, sprocketGeo, tube, bentTube, shellGeo, prismoid,
         scaleTexture, dialTexture, grainTexture } from '/runtime/forms.js';
```

Promoted out of `worlds/*/forms.js` by the rule of three — a knurled ring was written for a
camera's focus ring, then a bicycle's sprockets, then an espresso machine's group head.

## What is in it, and which way its axis points

Half the cost of assembling an object is finding out that a lathe runs on +Y and a torus on +Z.

| helper | axis | for |
|---|---|---|
| `fluteGeo(rOut, rIn, h, teeth)` | +Y | knurling: focus rings, dial rims, knobs |
| `sprocketGeo(r, teeth, t, {holeFrac})` | +Z | chainrings, cogs, gear wheels |
| `tube(a, b, r0, r1, mat)` | a → b | a frame, a stand, a strut. Returns a **Mesh** |
| `bentTube(points, r, mat)` | along the path | fork blades, handlebars, cables, steam wands |
| `shellGeo(w, d, h, planR, bevel)` | +Y, on y=0 | a stadium in plan with filleted edges: camera body, radio case |
| `prismoid(w0, d0, w1, d1, h, dz)` | +Y, on y=0 | four flat slopes: a pentaprism hump, a plinth |
| `scaleTexture(labels)` | wraps u | f-stops, distance scales — for an **open** cylinder |
| `dialTexture(labels)` | disc uv | speed dials, gauges, clock faces — for a `CircleGeometry` |
| `grainTexture()` | tiles | value noise as a **bumpMap**: leather, cast iron, clay |
| `cageGeo(cage, {iterations, flat})` | — | **subdivision surface**: smooth form from a coarse cage |
| `boxCage(w,h,d,seg)` / `gridCage(cols,rows,fn)` | — | the two cages to start from |
| `cageWarp(cage, fn)` / `subdivide(cage, n)` | — | push the cage around / smooth it without meshing |

## Subdivision surfaces — when the shape is not a function you can write

Everything above works at the VERTEX: you write the maths that puts each point where it goes, so
**the shapes you can make are the functions you can write**. That is fine for a sprocket and
hopeless for a shoulder. A cage inverts it — place twenty points roughly, and Catmull-Clark does
the continuity:

```js
const cage = { points: [[x,y,z], ...], faces: [[i,j,k,l], ...], creases: [[a,b], ...] };
mesh.geometry = cageGeo(cage, { iterations: 2 });          // smooth, indexed, shared normals
mesh.geometry = cageGeo(boxCage(1, 0.6, 2, 2), { iterations: 1, flat: true });   // a rock
```

Reach for it when the thing has no flats and no axis to lathe around: a hull, a pod, a boulder,
a leaf, a riverbed. Do **not** reach for it for anything with a machined edge — that is `solid.js`.

- **Rounds cost 4x each, and 2–3 is the whole useful range.** A 6-face box is 96 faces after two
  and 384 after three. If it still looks faceted after two, **add control points, not rounds** —
  a cage too coarse to hold the curve cannot be rescued downstream. A `boxCage` at `seg` 8 over
  8.6m puts one point per metre; the bowl it was asked to hold landed nowhere near the formula
  that placed everything else in the pool, and the mismatch cost four rounds to find.
- **`iterations: 1, flat: true` is what a rock looks like.** Two rounds and it is a pebble, none
  and it is a crate. One round faceted gives big planes at different angles with visible edges
  between them — somewhere for the light to land. Smoothness is not the goal.
- **A smooth cage is a dune, not a stone.** Catmull-Clark does its job so well that nothing is
  left to catch a grazing sun. Displace along the normal afterwards at high frequency
  (see `roughen()` in `worlds/tidepool/main.js`) — the cage gives the shape, that gives it a
  surface.
- **`gridCage` faces `e_v x e_u`, so the parametrisation picks the normal.** `fn(u,v) -> [x,h,z]`
  laid out flat faces up; the same patch in polar with `(angle, radius)` faces DOWN and vanishes
  under backface culling. Radius-first is the fix. A sand floor was invisible for two rounds
  over this.
- **Put the points where the curvature is.** A square law on the radius
  (`r = u*u*8`) spends thirteen rings inside a pool and coasts out to 8m on the flat ground
  nobody looks at. A uniform grid fine enough for the bowl would have been 40k wasted faces.
- **Boundary edges are creases automatically**, so an open sheet keeps its rim; `creases` makes
  interior edges sharp too, and they survive further rounds. Two sharp edges at a point ride a
  1-D B-spline along the chain; three or more pin it.
- **`cageGeo` emits position and normal only.** No UV — an `emissiveMap` or any other texture has
  nothing to sample by, silently. For a floor, project planar UVs from the position.

## Four things that cost a round each to find out

- **`CylinderGeometry` is CLOSED by default.** A bezel with a solid front cap sits in front of the
  glass and no amount of material tuning makes the element visible. Pass `openEnded = true`, and
  give the hole a wall (an inner tube with `side: THREE.BackSide`).
- **`ExtrudeGeometry`'s bevel grows the profile OUTWARD by `bevelSize`.** Draw the shape `b`
  smaller all round, or a 142mm camera body measures 149mm. `shellGeo` already does this.
- **`curveSegments` is per curve, and holes are curves.** At `curveSegments: 1` a sprocket's bore
  comes out as a triangle while its teeth look fine, because the teeth are `lineTo`.
- **A `metalness: 1` surface facing the camera renders black**: the reflection is the room times a
  dark base colour and there is nothing left. Give it a `clearcoat`, or lighten the base colour —
  `envMapIntensity` alone does not save it.

## The rule this file lives under

Local first: write the shape in `worlds/<name>/forms.js`. It moves here when a **third** world
wants it — two is a coincidence. A bicycle's own `forms.js` keeps its `spokeSet`, because a
three-cross lacing pattern is nobody else's business yet.

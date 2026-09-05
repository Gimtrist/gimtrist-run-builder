# solid — Manifold CSG solid modeling

`runtime/solid.js` wraps manifold-3d (WASM CSG). When to use: fillets, shells, holes,
boolean union/difference/intersection, convex hulls. When not to: if plane/box/cylinder/sphere/lathe is enough — pure three is cheaper.

## Usage

```js
import * as MK from '/runtime/solid.js';

export default async function createWorld(container) {
  await MK.init();                              // ~1s; fails gracefully to plain box, no try/catch needed

  mesh.geometry = MK.rbGeo(w, h, d, r);         // rounded box (cached by size, zero cost on repeat)
  mesh.geometry = MK.latheGeo([[r,y], ...]);    // lathe shell (bowl/pot/cup: outer base → outer wall → rim → inner wall → inner base)

  // generic boolean (returns Manifold solid, convert to three at the end via toGeometry)
  const g = MK.toGeometry(
    MK.subtract(MK.cube(2, 1, 1), MK.cylinder(2, 0.3)));  // beam with hole
  const h = MK.toGeometry(MK.hull(MK.sphere(0.5), MK.sphere(0.3).translate([2,0,0])));
}
```

Tested in anger: a street-food stall framed with `rbGeo`, its soup pot and bowls turned on
`latheGeo`.

## Scar rules (lessons from VR era, don't step on them again)

1. **Take only positions+indices from Manifold, let three compute normals** (`toGeometry` includes
   `toNonIndexed + computeVertexNormals`). Using Manifold vertex attributes directly → all-black mesh.
2. **Rounded box = convex hull of 8 corner spheres**, not edge chamfering — clean, robust, no degenerate faces. `rbGeo` has it built in.
3. **init must handle failure**: WASM load can fail/timeout (9s), all helpers degrade to plain geometry.
   World code works without checking `MK.on()`, just no fillets.
4. **CSG result is flat-shaded** (non-indexed) — feature not bug, pairs with CSG's hard-surface language.
   Want smooth surfaces, don't use CSG.
5. **Boolean ops happen once at build time**, never in `renderFrame` (cousin to E4: per-frame CSG = stall).
   Only consider three-bvh-csg for high-frequency/runtime booleans (backup, see architecture selection table).

## When to go to text-to-cad

When you need to **manufacture** (STEP export, 3D print, engineering dimensions) not **build a world**:
`npx skills install earthtojake/text-to-cad` and use in parallel (see `skills/cad-export/`, P4).

## skinGeo — a body from a stick figure

The one shape neither plain three nor a subdivision cage can reach. `joints` are `[x, y, z, r]`
and `bones` are `[i, j]` index pairs; a joint no bone reaches is a lone ball.

```js
const joints = [[0,0,0,0.09], [0.3,0.05,0,0.05], [0.55,0.08,0,0.03]];
mesh.geometry = MK.skinGeo(joints, [[0,1],[1,2]], { blend: 0.4, detail: 2.4 });
```

A limb is easy — `forms.tube()` does it — and **the joint is the whole problem**. Cylinders that
intersect look welded; a body has to look grown. So this goes through an SDF and a marching-
tetrahedra mesher rather than CSG: a boolean union gives you the crease, a level set gives you
the fillet, and for anything soft the fillet is the entire point. Starfish arms meeting a central
disc, tentacles leaving a column, a snail's foot under its shell.

The skeleton is also the right thing to keep in a world's source: twelve numbers you can read and
pose, not a mesh you can only regenerate. `poseSkeleton(joints, fn)` returns a moved copy, so one
skeleton can be several creatures and the differences stay visible in the code.

- **The thinnest joint sets the cost of the whole body.** A uniform grid has to resolve the
  narrowest part everywhere, so one 15mm tentacle tip drags a 400mm anemone up with it — seven of
  them came to 630k triangles against a 300k budget. The fix is nearly always a **fatter `rMin`**,
  not a lower `detail`; thickening the tips from 15mm to 22mm cut it by 6x and looked better.
  `skinGeo` warns past 30k triangles.
- **`detail` is cells across the smallest radius; 2–3 is honest.** Each +1 costs about
  `(n+1)³/n³` and buys less than you think.
- **`blend` is the fillet, as a fraction of the smallest radius.** 0 is a hard union. Past ~0.6
  the thin limbs start dissolving into the blob and the silhouette goes with them.
- **A flat animal needs a flat bed.** A parabolic bowl is steepest exactly where things sit, and
  a starfish laid on one is half-buried at the arm tips while its centre floats. Fourth power
  (`1 - (r/R)**4`) gives a real floor and a real wall.
- **`toGeometry(solid, { smooth: true })` for anything from `levelSet`.** The default is flat
  facets, which is right for CSG and wrong here: marching tetrahedra put out thousands of tiny
  faces that are an artefact of the grid, not of the shape, and flat-shading them shows the grid.
  `skinGeo` already does this.
- Without manifold it degrades to welded cones and balls: form and silhouette survive, the
  fillets do not — which is exactly the difference the real path exists to buy.

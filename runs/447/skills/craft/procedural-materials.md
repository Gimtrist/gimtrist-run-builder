# Procedural materials — from coloured plastic to a surface

This repo has no texture library, so every surface starts as a flat-shaded
colour: the plastic look. The two steps that get you out of it are always the
same, and they are worth doing **before** you start pushing lights around,
because a light cannot rescue a material with nothing for it to catch on.

1. **A light probe**, so materials are lit by a *sky* rather than by one grey
   constant.
2. **Three maps from one noise field** — albedo, roughness, normal — so the
   surface has micro-structure.

---

## 1. The sky is your light probe

An ambient light gives you the same grey from every direction, which is why
everything under it reads as plastic. What a real surface gets is a warm
horizon on one side and a cool zenith on the other, and that difference is most
of what "expensive render" means.

Render your sky shader into a PMREM environment map and hand it to the scene:

```js
const pmrem = new THREE.PMREMGenerator(renderer)
const envScene = new THREE.Scene()
envScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), skyMat.clone()))
const envRT = pmrem.fromScene(envScene, 0, 1, 100)
scene.environment = envRT.texture
scene.environmentIntensity = 0.95
pmrem.dispose()                      // the render target stays; dispose it in dispose()
```

The sky material is a `BackSide` shader on a big sphere — a vertical gradient,
a sun disc (`pow(dot(d, sunDir), 900.0)`), a wide sun bloom at a much lower
exponent, and torn `fbm` cloud banding near the horizon. One material, used
twice: once at world scale for the visible sky, once at radius 10 for the probe.

**Reach the zenith colour fast.** `smoothstep(-0.02, 0.40, d.y)` gives you real
blue in the frame; a slow gradient leaves everything in horizon haze and the
whole image collapses into one muddy hue.

## 2. One height field → three maps

Value noise + fbm on a canvas, then a Sobel pass turns the height field into a
tangent-space normal map. See `makeMaterialMaps` in `worlds/erdtree/main.js`
for a complete implementation.

```js
const maps = makeMaterialMaps(256,
  (u, v) => fbm(u * 10, v * 10, 5) * 0.6 + fbm(u * 40, v * 40, 4) * 0.4,   // height
  (c, u, v, h) => { const g = 0.74 + h * 0.40; c.setRGB(g, g * 0.99, g * 0.94) },
  { roughLo: 0.60, roughHi: 0.96, normalScale: 4.0, repeat: 3.0 })

const mat = new THREE.MeshStandardMaterial({
  color: STONE,                       // colour lives HERE, not in the map
  map: maps.map, normalMap: maps.normalMap, roughnessMap: maps.roughnessMap,
  normalScale: new THREE.Vector2(1.1, 1.1),
})
```

Two rules that decide whether this works:

- **A detail map supplies light and shade, not colour.** Keep its albedo near
  neutral and put the hue on `material.color` or in vertex colours. Tint both
  and they *multiply* — a green map over a green vertex colour halves your
  ground's value and turns a sunlit plain black. (See
  [`../three/instancing-traps.md`](../three/instancing-traps.md) trap 2.)
- **Colour textures must be `SRGBColorSpace`; data textures must not.** The
  albedo is colour; the roughness and normal maps are data. Getting this
  backwards renders everything dark and desaturated. `verify` warns about it.

**Stretch the noise to describe the material.** Isotropic fbm reads as generic
lumps. Rock strata want `fbm(u * 9, v * 30)` — squashed on one axis. Wood wants
rings. This costs nothing and is the difference between "a bumpy surface" and
"limestone".

**Tile frequency matters more than tile quality.** A map repeated 7× over a
90-unit cliff face reads as rock grain; the same map at 2× reads as wallpaper.
Put large-scale variation somewhere that never repeats — vertex colours — and
let the map handle only the fine grain.

## 2b. When the geometry has no usable UVs — project the map instead

Everything above assumes the surface has texture coordinates worth tiling on. Merge a wall out of
`ExtrudeGeometry` and its cornice out of `BoxGeometry` and it does not: the buffer holds three UV
conventions at once, and no `repeat` makes sense across them. This is why a room assembled from
primitives reads as smooth cream plaster however good the light is — it is not a lighting problem
and no amount of key/fill will fix it.

Project the map down the three world axes and blend by the surface normal. No UVs, no seams, and
the grain is the same size on a wall as on the arch springing out of it — which is the whole
point, and is also E12's prescription (*a second texture tiled in **world** space*) applied to
geometry rather than to resolution.

```js
import { grainTexture, triplanar } from '/runtime/surface.js';

const grain = grainTexture({ seed: 7 });                 // seamless value noise, tiles in world space
triplanar(stone, { map: grain, scale: 0.42, albedo: 0.13, rough: 0.26 });   // tiles per metre, then swing
```

`scale` is tiles per metre — 0.42 is one tile every 2.4 m, which is masonry; 1.1 is a painted
steel grain. `albedo` and `rough` are the swing either side of the material's own values, so zero
for both is a no-op and you can dial one alone. What it does, under the hood:

```js
material.onBeforeCompile = (sh) => {
  sh.uniforms.triMap = { value: grainTex };          // greyscale, no SRGBColorSpace: it is data
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vTriP;\nvarying vec3 vTriN;')
    .replace('#include <begin_vertex>', `#include <begin_vertex>
      vTriP = (modelMatrix * vec4(transformed, 1.0)).xyz;
      vTriN = normalize(mat3(modelMatrix) * objectNormal);`);
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>
      varying vec3 vTriP; varying vec3 vTriN; uniform sampler2D triMap;
      float triGrain() {
        vec3 n = abs(normalize(vTriN)); n /= (n.x + n.y + n.z);
        return texture2D(triMap, vTriP.zy * SCALE).r * n.x
             + texture2D(triMap, vTriP.xz * SCALE).r * n.y
             + texture2D(triMap, vTriP.xy * SCALE).r * n.z;
      }`)
    .replace('#include <color_fragment>', `#include <color_fragment>
      float triG = triGrain();
      diffuseColor.rgb *= mix(0.87, 1.13, triG);`)
    .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
      roughnessFactor = clamp(roughnessFactor + (triG - 0.5) * 0.26, 0.04, 1.0);`);
};
material.customProgramCacheKey = () => 'tri:0.42:0.13:0.26';   // see the trap below
```

**Bake the constants into the source; do not pass them as uniforms.** Custom uniforms added in
`onBeforeCompile` are attached to the *program*, and materials that return the same
`customProgramCacheKey` share one — so five materials configured with five different strengths all
got the first one's values, which in one case was a change of nothing at all and read as "the
injection is not working". Interpolating the numbers into the shader makes each configuration its
own program, which is what it actually is, and five extra programs cost nothing.

It lives in `runtime/surface.js` rather than `runtime/forms.js` because `forms.js` is pure
geometry and generated textures by its own charter, and this modifies a *material*.

## 3. Two settings that do a lot for very little

- **`flatShading: true` on anything that breaks along planes.** Smooth normals
  over an eroded box give you a sand dune; faceted ones give you rock. Also the
  right call for stylised foliage clusters and crystal.
- **Vertex colours for large-scale variation.** Pale sunlit tops, warmer damp
  bases, a slow `fbm` so no two faces match. This is what stops six cliffs cut
  from the same function from reading as six copies.

## 4. Shapes: correlated noise, never per-vertex random

```js
// RIGHT — rock
const n = fbm(v.x * 1.5, v.z * 1.5 + v.y * 1.1, 4)
v.multiplyScalar(0.72 + n * 0.62)

// WRONG — crumpled paper
v.multiplyScalar(0.72 + Math.random() * 0.62)
```

Neighbouring vertices must move *together*. Per-vertex randomness produces a
high-frequency crumple that reads as damaged paper at every scale — the single
most common way a procedural rock announces itself as procedural.

Start from an `IcosahedronGeometry` (even triangle distribution) rather than a
`DodecahedronGeometry`, subdivide to detail 2, then displace.

---

## Where the wins actually are

Ranked by how much they moved the frame while building `erdtree`:

| change | effect |
|---|---|
| PMREM sky probe instead of ambient | the largest single jump; ends the plastic look |
| detail density (rock, scrub, flowers) | second largest; "a green field" → "ground" |
| a detail map that stopped tinting | fixed a plain that was rendering near-black |
| `flatShading` on cliffs | sand dune → rock, one word |
| stretched (anisotropic) noise | generic lumps → strata |
| a grade pass (split-tone + S-curve + vignette) | "correct render" → "photographed" |

See also [`render-recipes.md`](./render-recipes.md) for tone mapping, bloom and
fog, and [`../three/instancing-traps.md`](../three/instancing-traps.md) for the
ways per-instance colour goes wrong.

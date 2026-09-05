// surface.js — the surface treatments a made world needs and three.js has no material for.
//
// `forms.js` is pure geometry and generated textures, by its own charter; this is the other
// half — things that modify a MATERIAL. Today that is one problem, and it is a problem every
// world built out of primitives has:
//
//   A room assembled from `ExtrudeGeometry` walls and `BoxGeometry` cornices, merged for draw
//   calls, has three UV conventions in one buffer and no usable texture coordinates at all. So
//   no tiled map can be laid on it, and it renders as smooth coloured plastic however good the
//   light is — which reads as a lighting problem and is not one. `skills/craft/
//   procedural-materials.md` opens by saying to fix the surface before touching a light; on
//   merged architecture there was no way to.
//
// The fix is to stop asking the geometry where it is on a texture and ask the WORLD instead:
// project the map down the three axes and blend by the surface normal. No UVs, no seams, and
// the grain is the same size on a wall as on the arch springing out of it — which is also
// docs/principles.md E12's prescription (a second map tiled in *world* space) applied to
// geometry that has no coordinates rather than to a map that has run out of resolution.
//
//   import { grainTexture, triplanar } from '/runtime/surface.js';
//
//   const grain = grainTexture({ seed: 7 });
//   triplanar(stoneMaterial, { map: grain, scale: 0.42, albedo: 0.13, rough: 0.26 });
//
// Works on any material that compiles the standard chunks — MeshStandardMaterial,
// MeshPhysicalMaterial, MeshLambertMaterial, MeshPhongMaterial.
import * as THREE from 'three';

/** Seamless greyscale value noise, as a texture. Tiles by construction: the lattice wraps, so
 *  the map can be repeated in world space without a visible edge.
 *
 *  It is DATA, not colour — no `SRGBColorSpace`, the same rule as a roughness or normal map.
 *
 *  `base` is the coarsest lattice, and it is the one setting that can betray itself: below about
 *  4 the lattice is large enough to SEE, and the surface reads as a repeating tile rather than as
 *  a material. Raise `octaves` for finer detail; raise `base` if the pattern starts to march. */
export function grainTexture({ size = 256, octaves = 3, base = 4, seed = 1, contrast = 1 } = {}) {
  const c = typeof document !== 'undefined' ? document.createElement('canvas') : null;
  if (!c) throw new Error('grainTexture needs a DOM canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  let s = (seed * 2654435761) >>> 0;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);

  const lat = [];
  for (let o = 0; o < octaves; o++) {
    const n = base << o, grid = new Float32Array(n * n);
    for (let i = 0; i < n * n; i++) grid[i] = rnd();
    lat.push({ n, grid });
  }
  const smooth = (t) => t * t * (3 - 2 * t);
  const at = ({ n, grid }, i, j) => grid[((j % n) + n) % n * n + ((i % n) + n) % n];
  const octave = (L, u, v) => {
    const x = u * L.n, y = v * L.n;
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = smooth(x - x0), fy = smooth(y - y0);
    return (at(L, x0, y0) * (1 - fx) + at(L, x0 + 1, y0) * fx) * (1 - fy)
      + (at(L, x0, y0 + 1) * (1 - fx) + at(L, x0 + 1, y0 + 1) * fx) * fy;
  };
  // amplitudes halve per octave and are normalised, so `octaves` changes detail, not brightness
  const amp = lat.map((_, o) => 1 / (2 ** o));
  const total = amp.reduce((a, b) => a + b, 0);

  const img = g.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      let h = 0;
      for (let o = 0; o < lat.length; o++) h += octave(lat[o], u, v) * amp[o];
      h = 0.5 + (h / total - 0.5) * contrast;
      const val = Math.round(255 * Math.min(1, Math.max(0, h)));
      const i = (y * size + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = val;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Modulate a material's albedo and roughness by a world-space triplanar sample of `map`.
 *
 *  `scale` is tiles per metre — 0.42 puts one tile every 2.4 m, which is masonry; 1.1 is a
 *  painted steel grain. `albedo` and `rough` are the swing either side of the material's own
 *  values, so 0 for both is a no-op and you can dial each one alone.
 *
 *  The three numbers are compiled INTO the shader and carried in the program cache key rather
 *  than passed as uniforms, and that is not a style choice — see docs/principles.md E19. Custom
 *  uniforms added in `onBeforeCompile` belong to the PROGRAM: five materials that return the same
 *  `customProgramCacheKey` share one, and four of them silently render with the fifth's values.
 *  It fails as "no change at all", which sends you to debug the injection, which was never wrong.
 *  A texture uniform is safe to pass — it is one object for every material sharing the variant. */
export function triplanar(material, { map, scale = 0.55, albedo = 0.10, rough = 0.22 } = {}) {
  if (!map) throw new Error('triplanar needs a `map` — try grainTexture()');
  const f = (n) => n.toFixed(4);
  material.onBeforeCompile = (sh) => {
    sh.uniforms.triMap = { value: map };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vTriP;\nvarying vec3 vTriN;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
  vTriP = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vTriN = normalize(mat3(modelMatrix) * objectNormal);`)
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vTriP; varying vec3 vTriN;
uniform sampler2D triMap;
float triGrain() {
  vec3 n = abs(normalize(vTriN));
  n /= (n.x + n.y + n.z);
  return texture2D(triMap, vTriP.zy * ${f(scale)}).r * n.x
       + texture2D(triMap, vTriP.xz * ${f(scale)}).r * n.y
       + texture2D(triMap, vTriP.xy * ${f(scale)}).r * n.z;
}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
  float triG = triGrain();
  diffuseColor.rgb *= mix(${f(1 - albedo)}, ${f(1 + albedo)}, triG);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
  roughnessFactor = clamp(roughnessFactor + (triG - 0.5) * ${f(rough)}, 0.04, 1.0);`);
  };
  material.customProgramCacheKey = () => `tri:${f(scale)}:${f(albedo)}:${f(rough)}`;
  material.needsUpdate = true;
  return material;
}

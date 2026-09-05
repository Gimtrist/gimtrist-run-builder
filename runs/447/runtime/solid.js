// solid.js — Manifold-3D (WASM CSG) helpers for worlds. ESM, three r183+.
// Ported from MakoneLift/vr (r128 global version); the scar-tissue rules survive:
//  - take ONLY Manifold's positions+indices, let three compute normals (else all-black)
//  - rounded box = convex hull of 8 corner spheres (clean, robust)
//  - init() has a timeout; every helper degrades to a plain three primitive
// Usage:
//   import * as MK from '/runtime/solid.js';
//   await MK.init();                       // ~1s; safe to call more than once
//   mesh.geometry = MK.rbGeo(w, h, d, r);  // rounded box (cached by size)
//   const g = MK.toGeometry(MK.subtract(MK.cube(2,2,2), MK.sphere(1.2)));
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

let MF = null;
const cache = new Map();

export async function init({ timeoutMs = 9000, wasmBinary = globalThis.__MANIFOLD_WASM } = {}) {
  if (MF) return true;
  try {
    const mod = await Promise.race([
      // wasmBinary lets a single-file export (harness/export.mjs) hand over an inlined copy;
      // without it emscripten fetches manifold.wasm, which file:// forbids — and then every
      // rounded box would silently degrade to a plain one.
      import('manifold-3d').then((m) => m.default(wasmBinary ? { wasmBinary } : {})),
      new Promise((_, rej) => setTimeout(() => rej(new Error('manifold timeout')), timeoutMs)),
    ]);
    mod.setup();
    MF = mod;
  } catch (err) {
    console.warn('solid: init failed, falling back to plain primitives', err);
    MF = null;
  }
  return !!MF;
}

export const on = () => !!MF;

// ---- solid constructors (return Manifold solids; null when manifold is off) ----
export const cube = (w, h, d) => MF && MF.Manifold.cube([w, h, d], true);
export const sphere = (r, segments = 24) => MF && MF.Manifold.sphere(r, segments);
export const cylinder = (h, rBottom, rTop = rBottom, segments = 24) =>
  MF && MF.Manifold.cylinder(h, rBottom, rTop, segments, true);

// ---- boolean ops ----
export const union = (...solids) => solids.reduce((a, b) => a.add(b));
export const subtract = (a, b) => a.subtract(b);
export const intersect = (a, b) => a.intersect(b);
export const hull = (...solids) => union(...solids).hull();

/** Manifold solid -> three BufferGeometry. positions+indices only; three computes the normals.
 *  Default is toNonIndexed + flat facets — the crisp CSG look, and what every existing world
 *  expects. `smooth: true` keeps the shared vertices and averages the normals instead, which is
 *  what a level set wants: marching tetrahedra put out thousands of tiny facets that are an
 *  artefact of the grid, not of the shape, and flat-shading them shows the grid. */
export function toGeometry(solid, { smooth = false } = {}) {
  const m = solid.getMesh();
  const np = m.numProp, vp = m.vertProperties, nv = vp.length / np;
  const pos = new Float32Array(nv * 3);
  for (let i = 0; i < nv; i++) {
    pos[i * 3] = vp[i * np];
    pos[i * 3 + 1] = vp[i * np + 1];
    pos[i * 3 + 2] = vp[i * np + 2];
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(new THREE.BufferAttribute(m.triVerts, 1));
  if (smooth) { g.computeVertexNormals(); return g; }
  const flat = g.toNonIndexed();
  flat.computeVertexNormals();
  g.dispose();
  return flat;
}

/** Rounded box: convex hull of 8 corner spheres. Cached by size; falls back to BoxGeometry. */
export function rbGeo(w, h, d, r) {
  const key = 'rb' + [w, h, d, r].map((v) => (+v).toFixed(3)).join('_');
  if (cache.has(key)) return cache.get(key);
  let geo;
  const rr = Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4);
  if (MF && rr > 0) {
    try {
      const s = MF.Manifold.sphere(rr, 12);
      const corners = [];
      for (const x of [-(w / 2 - rr), w / 2 - rr])
        for (const y of [-(h / 2 - rr), h / 2 - rr])
          for (const z of [-(d / 2 - rr), d / 2 - rr])
            corners.push(s.translate([x, y, z]));
      geo = toGeometry(hull(...corners));
    } catch (err) {
      console.warn('solid: rbGeo failed, plain box', err);
      geo = new THREE.BoxGeometry(w, h, d);
    }
  } else {
    geo = new THREE.BoxGeometry(w, h, d);
  }
  cache.set(key, geo);
  return geo;
}

/** Hollow container of revolution: [r, y] profile points
 *  (outer-bottom → outer-wall → rim → inner-wall → inner-bottom). Plain three, always works. */
export function latheGeo(profile, segments = 28) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
}

// ---------------------------------------------------------------------------
// skinned skeletons — a body from a stick figure

/** Wrap a skeleton in one continuous skin. `joints` are `[x, y, z, r]` — a point and the radius
 *  of the body there — and `bones` are `[i, j]` index pairs into them. A joint no bone reaches
 *  is a lone ball. Every bone is a round cone, and the union is SMOOTH: where two bones meet the
 *  surface swells the way a shoulder does instead of showing the seam of two cylinders crossing.
 *
 *  This is the one shape plain three cannot reach. A limb is easy — `forms.tube()` does it — and
 *  the JOINT is the whole problem: cylinders that intersect look welded, and a body wants to look
 *  grown. Hence an SDF and a marching-tetrahedra mesher rather than CSG. A boolean union gives
 *  you the crease; a level set gives you the fillet; nothing gives you both, and for anything
 *  soft the fillet is the entire point.
 *
 *  A skeleton is also the right thing to hold in a world's source: ~12 numbers you can read and
 *  nudge, instead of a mesh you can only regenerate. Pose it, and the skin follows.
 *
 *  @param {number} blend   fillet radius at the joints, as a fraction of the smallest joint
 *                          radius. 0 is a hard union; past ~0.6 the thin limbs start dissolving
 *                          into the blob and you lose the silhouette.
 *  @param {number} detail  cells across the smallest radius. 3-4 is honest; each +1 costs
 *                          roughly (n+1)³/n³ and buys less than you think.
 */
export function skinGeo(joints, bones = [], { blend = 0.35, detail = 3.2, smooth = true,
  maxCells = 2.5e6 } = {}) {
  const J = joints.map((j) => (j.length >= 4 ? j.slice(0, 4) : [j[0], j[1], j[2], 0.1]));
  if (!J.length) return new THREE.BufferGeometry();
  if (!MF) return skinFallback(J, bones);

  // bones and lone joints are the same primitive: a round cone whose ends can coincide
  const used = new Set();
  for (const [a, b] of bones) { used.add(a); used.add(b); }
  const segs = [...bones.map(([a, b]) => [J[a], J[b]]),
    ...J.filter((_, i) => !used.has(i)).map((j) => [j, j])];
  const P = new Float64Array(segs.length * 8);
  segs.forEach(([a, b], i) => P.set([a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3]], i * 8));

  const rMin = Math.min(...J.map((j) => j[3]));
  const k = Math.max(blend * rMin, 1e-6);

  // Positive INSIDE — manifold's convention, and the opposite of the usual SDF one. The union is
  // a polynomial smooth-max; it is not associative, so with many overlapping bones the fillet
  // depends slightly on the order they were listed. Nobody has ever been able to see it.
  const field = (p) => {
    const px = p[0], py = p[1], pz = p[2];
    let d = -Infinity;
    for (let i = 0; i < P.length; i += 8) {
      const ax = P[i], ay = P[i + 1], az = P[i + 2], ra = P[i + 3];
      const bx = P[i + 4] - ax, by = P[i + 5] - ay, bz = P[i + 6] - az;
      const qx = px - ax, qy = py - ay, qz = pz - az;
      const bb = bx * bx + by * by + bz * bz;
      let h = bb > 0 ? (qx * bx + qy * by + qz * bz) / bb : 0;
      h = h < 0 ? 0 : h > 1 ? 1 : h;
      const dx = qx - bx * h, dy = qy - by * h, dz = qz - bz * h;
      const v = ra + (P[i + 7] - ra) * h - Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (i === 0) { d = v; continue; }
      let t = 0.5 + 0.5 * (v - d) / k;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      d = d + (v - d) * t + k * t * (1 - t);
    }
    return d;
  };

  // The grid is the bill: cells go as (size/edge)³, so a 0.5mm edge over a 3m skeleton is 2e11
  // cells and the tab never comes back. Coarsen until it fits and say so — a chunky mesh you can
  // look at beats a hang you have to kill the browser for.
  let edge = rMin / Math.max(0.5, detail);
  const boundsAt = (e) => ({
    min: [0, 1, 2].map((a) => Math.min(...J.map((j) => j[a] - j[3])) - k - e * 2),
    max: [0, 1, 2].map((a) => Math.max(...J.map((j) => j[a] + j[3])) + k + e * 2),
  });
  for (let guard = 0; guard < 8; guard++) {
    const b = boundsAt(edge);
    const n = [0, 1, 2].reduce((acc, a) => acc * ((b.max[a] - b.min[a]) / edge), 1);
    if (n <= maxCells) break;
    const was = edge;
    edge *= Math.cbrt(n / maxCells);
    if (guard === 0) console.warn(`solid: skinGeo grid ${was.toFixed(4)}m would be ${(n / 1e6).toFixed(1)}M cells; coarsening`);
  }

  try {
    const g = toGeometry(MF.Manifold.levelSet(field, boundsAt(edge), edge, 0), { smooth });
    // The grid guard above is about not hanging; this is about not quietly eating a world's
    // whole triangle budget on one animal. A uniform grid has to resolve the THINNEST part of
    // the skeleton everywhere, so one 15mm tentacle tip drags the whole 400mm body up with it —
    // the fix is nearly always a fatter `rMin`, not a finer `detail`.
    const tris = (g.getIndex()?.count ?? g.getAttribute('position').count) / 3;
    if (tris > 30000) console.warn(`solid: skinGeo produced ${(tris / 1000).toFixed(0)}k triangles `
      + `(edge ${edge.toFixed(4)}m, driven by the ${rMin.toFixed(3)}m joint). Thicken the thinnest `
      + 'joint or drop `detail`.');
    return g;
  } catch (err) {
    console.warn('solid: skinGeo level set failed, welded primitives instead', err);
    return skinFallback(J, bones);
  }
}

/** No manifold: cones and balls, merged. The form and the silhouette survive; the fillets at the
 *  joints do not, so it reads as assembled rather than grown — which is exactly the difference
 *  the real path exists to buy. */
function skinFallback(J, bones) {
  const parts = [];
  const up = new THREE.Vector3(0, 1, 0), dir = new THREE.Vector3();
  for (const [ia, ib] of bones) {
    const A = J[ia], B = J[ib];
    dir.set(B[0] - A[0], B[1] - A[1], B[2] - A[2]);
    const len = dir.length();
    if (len < 1e-9) continue;
    const g = new THREE.CylinderGeometry(B[3], A[3], len, 14, 1);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize()));
    g.translate(A[0] + dir.x / 2, A[1] + dir.y / 2, A[2] + dir.z / 2);
    parts.push(g);
  }
  for (const j of J) {
    const g = new THREE.SphereGeometry(j[3], 14, 10);
    g.translate(j[0], j[1], j[2]);
    parts.push(g);
  }
  return parts.length ? mergeGeometries(parts, false) : new THREE.BufferGeometry();
}

/** A skeleton posed by a function: hand it `[x,y,z,r]` joints and get a new list back. Keeps a
 *  world's source honest — one skeleton, several creatures, and the differences are visible. */
export function poseSkeleton(joints, fn) {
  return joints.map((j, i) => fn(j.slice(), i) || j);
}

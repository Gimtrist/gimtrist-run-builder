// forms.js — the shapes a made object is full of and three has no primitive for.
//
// Promoted here by the rule of three: a knurled ring was written for a camera's focus ring,
// then the bicycle's sprockets, then the espresso machine's group head — three worlds, one shape.
// Everything in this file is PURE GEOMETRY or a generated texture: no scene, no lights, no
// materials, so a part can call it and stay a pure build(params) -> Object3D (D7).
//
//   import { fluteGeo, tube, scaleTexture } from '/runtime/forms.js';
//
// Units are metres, and every helper says which way its axis points, because half the cost of
// assembling an object is finding out that a lathe runs on +Y and a torus on +Z.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const UP = new THREE.Vector3(0, 1, 0);

// ---------------------------------------------------------------------------
// turned and knurled

/** A fluted ring — knurling on a focus ring, a dial rim, a knob. Axis +Y, centred on the origin.
 *  ONE extruded polygon whose radius alternates, so 48 flutes cost one geometry and one draw
 *  call instead of 48 little boxes. The extrude's side faces do not share vertices, so the
 *  facets stay crisp without flatShading. */
export function fluteGeo(rOuter, rInner, h, teeth) {
  const shape = new THREE.Shape();
  const n = teeth * 2;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = i % 2 ? rInner : rOuter;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    if (i) shape.lineTo(x, y); else shape.moveTo(x, y);
  }
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 1 });
  g.translate(0, 0, -h / 2);
  g.rotateX(-Math.PI / 2);                 // extrude runs along +Z; put the axis on +Y
  return g;
}

/** A knurled BAND — the grip on a focus ring, a drum, a crown, a thumbwheel. Axis +Y, centred
 *  on the origin, and unlike `fluteGeo` it is a ring with a bore, so it slips over a smooth root
 *  cylinder instead of being a solid puck whose end caps fight whatever collar sits against them.
 *
 *  The tooth count comes from `pitch` — the arc between crests, in metres — and that is the
 *  whole point: 46 flutes on a ø64 focus ring is a 4.4mm pitch, which reads as a sprocket. Real
 *  knurling runs 0.8–1.5mm and milled scallops 2–4mm, so pitch is the number you actually know.
 *  Each tooth has a flat crest and a flat root, because a knurl is rolled and never comes to a
 *  point; `crest` and `root` are those flats as a fraction of the pitch.
 *
 *  @param {number} rCrest  radius of the tooth crests
 *  @param {number} h       height of the band along +Y
 */
export function knurlGeo(rCrest, h, { pitch = 0.0012, depth = null, bore = null,
  crest = 0.34, root = 0.26 } = {}) {
  const d = depth ?? Math.max(pitch * 0.38, 0.0001);
  const teeth = Math.max(12, Math.round((Math.PI * 2 * rCrest) / pitch));
  const rRoot = rCrest - d;
  const ramp = (1 - crest - root) / 2;
  const profile = [[0, rCrest], [crest, rCrest], [crest + ramp, rRoot], [crest + ramp + root, rRoot]];
  const shape = new THREE.Shape();
  let started = false;
  for (let i = 0; i < teeth; i++) {
    for (const [f, r] of profile) {
      const a = ((i + f) / teeth) * Math.PI * 2;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (started) shape.lineTo(x, y); else { shape.moveTo(x, y); started = true; }
    }
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, bore ?? rRoot * 0.88, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  // curveSegments is for the BORE — the tooth outline is all lineTo and does not care.
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 48 });
  g.translate(0, 0, -h / 2);
  g.rotateX(-Math.PI / 2);
  return g;
}

/** A toothed disc — chainring, sprocket, cog, gear wheel. Axis +Z (a gear stands in the XY
 *  plane, like a wheel). `holeFrac` is most of the disc on purpose: a chainring is a rim of
 *  teeth on a spider, and a solid plate with teeth round it reads as a saw blade. */
export function sprocketGeo(rOuter, teeth, thickness, { toothH = null, holeFrac = 0.42 } = {}) {
  const th = toothH ?? Math.min(rOuter * 0.10, ((Math.PI * rOuter) / teeth) * 0.9);
  const shape = new THREE.Shape();
  const n = teeth * 2;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const r = i % 2 ? rOuter - th : rOuter;
    const x = Math.cos(t) * r, y = Math.sin(t) * r;
    if (i) shape.lineTo(x, y); else shape.moveTo(x, y);
  }
  shape.closePath();
  if (holeFrac > 0) {
    const hole = new THREE.Path();
    hole.absarc(0, 0, rOuter * holeFrac, 0, Math.PI * 2, true);
    shape.holes.push(hole);
  }
  // curveSegments has to be high enough for the HOLE: the tooth outline is all lineTo and does
  // not care, but at curveSegments 1 the bore comes out as a triangle.
  const g = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false, curveSegments: 28 });
  g.translate(0, 0, -thickness / 2);
  return g;
}

// ---------------------------------------------------------------------------
// tubes

/** A tube from a to b (Vector3 or [x,y,z]), tapering r0 → r1. A whole bike frame is this call.
 *  Returns a Mesh, so the caller owns the material. */
export function tube(a, b, r0, r1 = r0, mat, seg = 16) {
  const A = Array.isArray(a) ? new THREE.Vector3(...a) : a.clone();
  const B = Array.isArray(b) ? new THREE.Vector3(...b) : b.clone();
  const dir = B.clone().sub(A);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, dir.length(), seg, 1, false), mat);
  m.position.copy(A).addScaledVector(dir, 0.5);
  m.quaternion.setFromUnitVectors(UP, dir.normalize());
  m.castShadow = m.receiveShadow = true;
  return m;
}

/** A tube that bends: a fork blade, a handlebar, a lamp's cable, a steam wand. Points in order;
 *  the curve is centripetal Catmull-Rom, which — unlike the plain kind — does not overshoot
 *  when the points are unevenly spaced. */
export function bentTube(points, r, mat, { seg = 40, radial = 12, closed = false } = {}) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((p) => (Array.isArray(p) ? new THREE.Vector3(...p) : p)), closed, 'centripetal');
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, seg, r, radial, closed), mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}

// ---------------------------------------------------------------------------
// shells

/** A stadium in plan — round ends, straight sides — filleted along the top and bottom edges.
 *  Axis +Y, sitting on y=0. A camera body, a radio case, a cigarette lighter.
 *
 *  three's bevel grows the profile OUTWARD by bevelSize, so the shape is drawn `b` smaller all
 *  round; without that a 142mm camera body measures 149mm and nobody notices until the facts
 *  table says so. */
export function shellGeo(w, d, h, planR, bevel) {
  const b = Math.min(bevel, planR * 0.5, h / 2 - 1e-4);
  const W = w - b * 2, D = d - b * 2;
  const r = Math.min(planR - b, D / 2 - 1e-4);
  const s = new THREE.Shape();
  const x0 = -W / 2 + r, x1 = W / 2 - r, y0 = -D / 2 + r, y1 = D / 2 - r;
  s.moveTo(x0, -D / 2);
  s.lineTo(x1, -D / 2);
  s.absarc(x1, y0, r, -Math.PI / 2, 0, false);
  s.lineTo(W / 2, y1);
  s.absarc(x1, y1, r, 0, Math.PI / 2, false);
  s.lineTo(x0, D / 2);
  s.absarc(x0, y1, r, Math.PI / 2, Math.PI, false);
  s.lineTo(-W / 2, y0);
  s.absarc(x0, y0, r, Math.PI, Math.PI * 1.5, false);
  const g = new THREE.ExtrudeGeometry(s, {
    depth: h - b * 2, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 3,
    curveSegments: 14,
  });
  g.rotateX(-Math.PI / 2);
  g.translate(0, b, 0);                    // the bevel starts below zero; put the base on y=0
  return g;
}

/** A prismoid: rectangle w0×d0 at y=0, rectangle w1×d1 at y=h, the top one shifted dz.
 *  Four flat slopes and no curvature anywhere — an SLR's pentaprism hump, a chamfered plinth.
 *  Non-indexed, so every face is flat. */
export function prismoid(w0, d0, w1, d1, h, dz = 0) {
  const b = [[-w0 / 2, 0, d0 / 2], [w0 / 2, 0, d0 / 2], [w0 / 2, 0, -d0 / 2], [-w0 / 2, 0, -d0 / 2]];
  const t = [[-w1 / 2, h, d1 / 2 + dz], [w1 / 2, h, d1 / 2 + dz],
    [w1 / 2, h, -d1 / 2 + dz], [-w1 / 2, h, -d1 / 2 + dz]];
  const pos = [];
  const quad = (a, b_, c, d) => { pos.push(...a, ...b_, ...c, ...a, ...c, ...d); };
  for (let i = 0; i < 4; i++) quad(b[i], b[(i + 1) % 4], t[(i + 1) % 4], t[i]);
  quad(t[0], t[1], t[2], t[3]);
  quad(b[3], b[2], b[1], b[0]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

// ---------------------------------------------------------------------------
// subdivision surfaces — a smooth shape out of a cage you can count the corners of

/** A CAGE is the low-poly control hull of a smooth surface:
 *      { points: [[x,y,z], ...], faces: [[i,j,k,l], ...], creases?: [[a,b], ...] }
 *  Faces wind counter-clockwise seen from outside and may have any number of sides; `creases`
 *  names the edges that must stay sharp.
 *
 *  Everything else in this file works at the VERTEX: you write the maths that puts each point
 *  where it goes, so the shapes you can make are the functions you can write. That is fine for
 *  a sprocket and hopeless for a shoulder. Here you place twenty points roughly and Catmull-Clark
 *  does the continuity: the limit surface is smooth everywhere by construction, not because you
 *  got the normals to agree. Reach for it when the thing has no flats and no axis to lathe
 *  around — a hull, a pod, a rock that is one boulder rather than a heap of facets.
 */

const cageEdgeKey = (a, b) => (a < b ? `${a},${b}` : `${b},${a}`);

function subdivideOnce({ points, faces, creases }) {
  const nP = points.length, nF = faces.length;

  const fp = faces.map((f) => {                 // face point: the centroid
    const c = [0, 0, 0];
    for (const i of f) for (let k = 0; k < 3; k++) c[k] += points[i][k];
    return c.map((v) => v / f.length);
  });

  const edges = new Map();                      // who touches what
  faces.forEach((f, fi) => {
    for (let k = 0; k < f.length; k++) {
      const a = f[k], b = f[(k + 1) % f.length];
      const key = cageEdgeKey(a, b);
      let e = edges.get(key);
      if (!e) { e = { a, b, f: [], sharp: false }; edges.set(key, e); }
      e.f.push(fi);
    }
  });
  if (creases) for (const [a, b] of creases) {
    const e = edges.get(cageEdgeKey(a, b));
    if (e) e.sharp = true;
  }
  // an edge with one face is the rim of an open cage: sharp whether you asked for it or not,
  // otherwise every open shell shrinks away from its own opening a little more each round
  for (const e of edges.values()) if (e.f.length !== 2) e.sharp = true;

  const mid = (e) => [0, 1, 2].map((k) => (points[e.a][k] + points[e.b][k]) / 2);

  let slot = nP + nF;                           // edge point, and the slot it will live in
  for (const e of edges.values()) {
    e.i = slot++;
    if (e.sharp) { e.p = mid(e); continue; }
    const F = fp[e.f[0]], G = fp[e.f[1]];
    e.p = [0, 1, 2].map((k) => (points[e.a][k] + points[e.b][k] + F[k] + G[k]) / 4);
  }

  const vf = Array.from({ length: nP }, () => []);
  const ve = Array.from({ length: nP }, () => []);
  faces.forEach((f, fi) => { for (const i of f) vf[i].push(fi); });
  for (const e of edges.values()) { ve[e.a].push(e); ve[e.b].push(e); }

  const vp = points.map((P, i) => {
    const sharp = ve[i].filter((e) => e.sharp);
    if (sharp.length > 2 || vf[i].length === 0) return P.slice();   // corner: pinned
    if (sharp.length === 2) {                                       // crease: a 1-D B-spline
      const m = sharp.map(mid);                                     //   along the sharp chain,
      return [0, 1, 2].map((k) => (m[0][k] + 6 * P[k] + m[1][k]) / 8);  // deaf to the surface
    }
    const n = vf[i].length;                                         // smooth: (F + 2R + (n-3)P)/n
    const F = [0, 0, 0], R = [0, 0, 0];
    for (const fi of vf[i]) for (let k = 0; k < 3; k++) F[k] += fp[fi][k] / n;
    for (const e of ve[i]) { const m = mid(e); for (let k = 0; k < 3; k++) R[k] += m[k] / ve[i].length; }
    return [0, 1, 2].map((k) => (F[k] + 2 * R[k] + (n - 3) * P[k]) / n);
  });

  const out = [...vp, ...fp];
  for (const e of edges.values()) out.push(e.p);

  const outFaces = [];
  faces.forEach((f, fi) => {
    const n = f.length;
    for (let k = 0; k < n; k++) outFaces.push([
      f[k],
      edges.get(cageEdgeKey(f[k], f[(k + 1) % n])).i,
      nP + fi,
      edges.get(cageEdgeKey(f[(k - 1 + n) % n], f[k])).i,
    ]);
  });

  // a crease has to survive the round that halves it, or it is only sharp the first time
  const outCreases = [];
  for (const e of edges.values()) {
    if (e.sharp && e.f.length === 2) outCreases.push([e.a, e.i], [e.i, e.b]);
  }
  return { points: out, faces: outFaces, creases: outCreases.length ? outCreases : undefined };
}

/** Catmull-Clark. Quads everywhere, 4x the faces per round, and the shape pulls in toward the
 *  average of its neighbours — a cube becomes a rounded cube, then very nearly a sphere.
 *
 *  Each round costs 4x, so 2-3 is the useful range: a 6-face box is 96 faces after two and 384
 *  after three, and the fourth round buys triangles smaller than a pixel. If it still looks
 *  faceted after two, the cage is too coarse — add control points, do not add rounds. */
export function subdivide(cage, iterations = 1) {
  let c = cage;
  for (let i = 0; i < iterations; i++) c = subdivideOnce(c);
  return c;
}

/** Cage -> BufferGeometry, subdivided and triangulated. INDEXED with shared vertices and smooth
 *  normals, which is deliberately the opposite of `solid.js`: CSG wants its facets crisp, a
 *  subdivision surface wants none of them. `flat: true` gives the faceting back. */
export function cageGeo(cage, { iterations = 2, flat = false } = {}) {
  const c = subdivide(cage, iterations);
  const pos = new Float32Array(c.points.length * 3);
  c.points.forEach((p, i) => { pos[i * 3] = p[0]; pos[i * 3 + 1] = p[1]; pos[i * 3 + 2] = p[2]; });
  const idx = [];
  for (const f of c.faces) for (let k = 2; k < f.length; k++) idx.push(f[0], f[k - 1], f[k]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(idx);
  if (!flat) { g.computeVertexNormals(); return g; }
  const nf = g.toNonIndexed();
  g.dispose();
  nf.computeVertexNormals();
  return nf;
}

/** Move every point of a cage: `fn(p, i)` returns a new [x,y,z] or mutates and returns nothing.
 *  Cages are meant to be pushed around — this is the whole working method. Start from a box,
 *  pull four points out into a snout, taper the tail, then subdivide:
 *
 *      cageGeo(cageWarp(boxCage(1, 0.6, 2, 2), (p) => [p[0] * (1 - p[2] * 0.3), p[1], p[2]]))
 */
export function cageWarp(cage, fn) {
  const points = cage.points.map((p, i) => fn(p.slice(), i) || p);
  return { ...cage, points };
}

/** A box cage: 6 faces at seg=1, `seg`x`seg` per side above that. The classic starting block —
 *  subdivided twice a bare cube is already a good pebble, and the extra segments are there for
 *  when you need somewhere to grab. Centred on the origin. */
export function boxCage(w = 1, h = w, d = w, seg = 1) {
  const n = Math.max(1, Math.round(seg));
  const half = [w / 2, h / 2, d / 2];
  const points = [], index = new Map(), faces = [];
  const at = (p) => {
    const key = p.map((v) => v.toFixed(5)).join();
    let i = index.get(key);
    if (i === undefined) { i = points.length; points.push(p); index.set(key, i); }
    return i;
  };
  for (let a = 0; a < 3; a++) {
    const u = (a + 1) % 3, v = (a + 2) % 3;      // e_u x e_v = e_a, so [00,10,11,01] faces +a
    for (const s of [-1, 1]) {
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const corner = (di, dj) => {
          const p = [0, 0, 0];
          p[a] = s * half[a];
          p[u] = (-1 + 2 * (i + di) / n) * half[u];
          p[v] = (-1 + 2 * (j + dj) / n) * half[v];
          return at(p);
        };
        const q = [corner(0, 0), corner(1, 0), corner(1, 1), corner(0, 1)];
        faces.push(s > 0 ? q : [q[0], q[3], q[2], q[1]]);
      }
    }
  }
  return { points, faces };
}

/** A grid cage from a parametric patch: `fn(u, v)` -> [x,y,z] over u,v in [0,1]. `closeU` /
 *  `closeV` wrap the seam instead of leaving a rim, which is the difference between a tube and
 *  a sheet, and between a torus and a tube. A leaf, a sail, a cloak, a horn, a riverbed. */
export function gridCage(cols, rows, fn, { closeU = false, closeV = false } = {}) {
  const nu = closeU ? cols : cols + 1, nv = closeV ? rows : rows + 1;
  const points = [];
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) points.push(fn(i / cols, j / rows));
  const faces = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const i1 = (i + 1) % nu, j1 = (j + 1) % nv;
    // v-then-u, so e_v x e_u points at the viewer for the obvious case: fn(u,v) -> [x, h, z]
    // laid out flat is a floor you can see, not a floor whose back you are looking at
    faces.push([j * nu + i, j1 * nu + i, j1 * nu + i1, j * nu + i1]);
  }
  return { points, faces };
}

// ---------------------------------------------------------------------------
// drawn surfaces — generated, never downloaded (D4)

/** A strip of engraved marks to wrap round a barrel: f-stops, a distance scale, a fuel gauge.
 *  Maps onto an open CylinderGeometry, whose u runs once round the circumference. */
export function scaleTexture(labels, { bg = '#1b1d21', fg = '#e8e3d8', accent = '#b2372c',
  accentAt = -1, ticks = true } = {}) {
  const W = 1024, H = 128;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const x = c.getContext('2d');
  x.fillStyle = bg;
  x.fillRect(0, 0, W, H);
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.font = `600 ${Math.round(H * 0.44)}px ui-sans-serif, Helvetica, Arial, sans-serif`;
  labels.forEach((label, i) => {
    const u = ((i + 0.5) / labels.length) * W;
    x.fillStyle = i === accentAt ? accent : fg;
    x.fillText(label, u, H * 0.56);
    if (ticks) {
      x.fillRect(u - 1.5, 0, 3, H * 0.17);
      x.fillRect(u - 1.5, H * 0.86, 3, H * 0.14);
    }
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Numbers around a disc: a shutter speed dial, a pressure gauge, a clock face. Maps onto a
 *  CircleGeometry, whose uv runs 0..1 across the diameter — so radius 0.5 in uv is the rim. */
export function dialTexture(labels, { bg = '#c6c9cf', fg = '#1a1c20', accent = '#b2372c',
  accentAt = -1, radius = 0.355, size = 512, font = 0.075, ticks = 0 } = {}) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  x.fillStyle = bg;
  x.fillRect(0, 0, size, size);
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  if (ticks) {
    x.strokeStyle = fg;
    x.lineWidth = size * 0.006;
    for (let i = 0; i < ticks; i++) {
      const a = (i / ticks) * Math.PI * 2;
      const r0 = size * (radius + 0.045), r1 = size * (radius + 0.075);
      x.beginPath();
      x.moveTo(size / 2 + Math.sin(a) * r0, size / 2 - Math.cos(a) * r0);
      x.lineTo(size / 2 + Math.sin(a) * r1, size / 2 - Math.cos(a) * r1);
      x.stroke();
    }
  }
  x.font = `700 ${Math.round(size * font)}px ui-sans-serif, Helvetica, Arial, sans-serif`;
  labels.forEach((label, i) => {
    const a = (i / labels.length) * Math.PI * 2;
    x.save();
    x.translate(size / 2 + Math.sin(a) * size * radius, size / 2 - Math.cos(a) * size * radius);
    x.rotate(a);
    x.fillStyle = i === accentAt ? accent : fg;
    x.fillText(label, 0, 0);
    x.restore();
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Value noise as a bump map: leather grain, cast iron, unglazed clay, sand.
 *  A fixed seed, so a world renders the same twice. Use as `bumpMap`, never as `map` —
 *  it is a surface, not a colour. */
export function grainTexture({ size = 256, repeat = [10, 4], cell = 6, sharp = 0.32,
  seed = 20250731 } = {}) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  const img = x.createImageData(size, size);
  let s = seed;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const grid = [];
  for (let i = 0; i <= size / cell + 1; i++) {
    grid[i] = [];
    for (let j = 0; j <= size / cell + 1; j++) grid[i][j] = rnd();
  }
  const smooth = (a, b, t) => a + (b - a) * t * t * (3 - 2 * t);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const gx = px / cell, gy = py / cell;
      const i = Math.floor(gx), j = Math.floor(gy);
      const fx = gx - i, fy = gy - j;
      const v = smooth(smooth(grid[i][j], grid[i + 1][j], fx),
        smooth(grid[i][j + 1], grid[i + 1][j + 1], fx), fy);
      const n = Math.round((v * (1 - sharp) + rnd() * sharp) * 255);
      const k = (py * size + px) * 4;
      img.data[k] = img.data[k + 1] = img.data[k + 2] = n;
      img.data[k + 3] = 255;
    }
  }
  x.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  return tex;
}


// ---------------------------------------------------------------------------
// assembly

/** Merge a list of geometries into one, having first made them mergeable.
 *
 *  Promoted here by the rule of three, several times over: forty-three worlds call
 *  `mergeGeometries` and seven of them carry their own copy of the same preparation
 *  (`toNonIndexed`, fill a missing `uv`, drop the odd attribute). The eighth wrote it because
 *  the seven before it were invisible from where it was standing.
 *
 *  What it prevents is not tedium, it is a bad error. `mergeGeometries` requires every geometry
 *  to agree on two things nobody thinks about while building a room: whether they are INDEXED —
 *  Box, Sphere, Shape and Cylinder are, Extrude is not — and which ATTRIBUTES they carry. Mix
 *  them and it does not throw: it logs and returns `null`, which lands in `new THREE.Mesh(null)`
 *  and surfaces two frames later as
 *
 *      TypeError: Cannot read properties of null (reading 'morphAttributes')
 *
 *  — a message with nothing in it about geometry, attributes or the line you actually wrote.
 *
 *  So: flatten to non-indexed only when the list is mixed (an all-indexed list keeps its index
 *  and stays smaller), give every geometry the union of the attributes any of them has, and if
 *  the merge still fails, say which geometry disagreed and how.
 *
 *      add('stone', mergeAll(wallParts));
 *      const withGroups = mergeAll(parts, { groups: true });   // one group per input
 */
export function mergeAll(list, { groups = false } = {}) {
  const geos = (list || []).filter(Boolean);
  if (!geos.length) return null;

  const anyIndexed = geos.some((g) => g.index);
  const allIndexed = geos.every((g) => g.index);
  const flat = anyIndexed && !allIndexed ? geos.map((g) => (g.index ? g.toNonIndexed() : g)) : geos;

  // The union of attributes, and the itemSize each one is used at. A geometry missing one gets
  // it filled with zeros rather than being dropped from the merge — a bench with no uv should
  // not cost the wall it is merged with its texture coordinates.
  const width = new Map();
  for (const g of flat) {
    for (const [name, a] of Object.entries(g.attributes)) {
      if (!width.has(name)) width.set(name, a.itemSize);
    }
  }
  for (const g of flat) {
    for (const [name, size] of width) {
      if (!g.attributes[name]) {
        const n = g.attributes.position.count;
        g.setAttribute(name, new THREE.BufferAttribute(new Float32Array(n * size), size));
      }
    }
    for (const name of Object.keys(g.attributes)) {
      if (!width.has(name)) g.deleteAttribute(name);
    }
  }

  const merged = mergeGeometries(flat, groups);
  if (!merged) {
    const shapes = flat.map((g, i) => `  [${i}] ${g.type} `
      + `${g.index ? 'indexed' : 'non-indexed'} {${Object.keys(g.attributes).join(', ')}}`);
    throw new Error(`mergeAll: mergeGeometries refused ${flat.length} geometries even after `
      + `normalising them. The list was:\n${shapes.join('\n')}`);
  }
  return merged;
}

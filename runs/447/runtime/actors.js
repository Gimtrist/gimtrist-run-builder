// actors.js — mannequin-js people for living worlds. ESM, three r183+, mannequin-js 5.x.
// Ported from MakoneLift/vr (r128 global version). The nav/pose/routine logic is
// battle-tested — changes here are interface-only: explicit scene (no globals), ESM imports.
//
// API:
//   import { World } from '/runtime/actors.js';
//   const world = World({ scene, zone: {x0,z0,x1,z1}, obstacles: [{x0,z0,x1,z1}], radius, cell, speed });
//   const a = world.spawn({ kind: 'm'|'f', height, x, z, yaw, tint, routine: [...] });
//   world.tick(dtSeconds);   // call from renderFrame(dt)
//
// Routine steps (looped):  {go:[x,z]} {face:[x,z]} {wait:sec,pose?,face?} {grab:obj} {put:[x,y,z]}
//                          {sit:{x,z,yaw,hold}}     — empty routine = free wander on the navmesh.
import * as THREE from 'three';
import { mergeAll } from './forms.js';
import { Male, Female } from 'mannequin-js/src/mannequin.js';
import { renderer as _mjsRenderer } from 'mannequin-js/src/scene.js';

// mannequin-js auto-creates a fullscreen stage (canvas + animation loop) on import.
// Neutralize it here so no world ever has to know (scar from v1 chase-run).
if (typeof window !== 'undefined' && _mjsRenderer) {
  try { _mjsRenderer.setAnimationLoop(null); } catch { /* headless */ }
  _mjsRenderer.domElement?.remove();
}

const STRIDE = 0.62;
const _v = new THREE.Vector3(), _box = new THREE.Box3();

/* ---------- nav: grid A* over a zone with axis-aligned obstacle rects ---------- */
export function Nav(zone, obstacles, R, cell) {
  const Z = zone, OBST = obstacles || [], CELL = cell || 0.3;
  const cols = Math.max(1, Math.ceil((Z.x1 - Z.x0) / CELL)), rows = Math.max(1, Math.ceil((Z.z1 - Z.z0) / CELL));
  const c2x = c => Z.x0 + (c + 0.5) * CELL, r2z = r => Z.z0 + (r + 0.5) * CELL;
  const inObst = (x, z) => OBST.some(o => x >= o.x0 - R && x <= o.x1 + R && z >= o.z0 - R && z <= o.z1 + R);
  const blocked = new Uint8Array(cols * rows);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) blocked[r * cols + c] = inObst(c2x(c), r2z(r)) ? 1 : 0;
  const free = (c, r) => c >= 0 && c < cols && r >= 0 && r < rows && !blocked[r * cols + c];
  const w2c = (x, z) => [Math.round((x - Z.x0) / CELL - 0.5), Math.round((z - Z.z0) / CELL - 0.5)];
  function nearestFree(c, r) { if (free(c, r)) return [c, r]; for (let rad = 1; rad < 24; rad++) for (let dc = -rad; dc <= rad; dc++) for (let dr = -rad; dr <= rad; dr++) if (free(c + dc, r + dr)) return [c + dc, r + dr]; return null; }
  const clear = (ax, az, bx, bz) => { const d = Math.hypot(bx - ax, bz - az), n = Math.ceil(d / (CELL * 0.5)); for (let i = 0; i <= n; i++) { const t = n ? i / n : 0; if (inObst(ax + (bx - ax) * t, az + (bz - az) * t)) return false; } return true; };
  function astar(sx, sz, gx, gz) {
    const s = nearestFree(...w2c(sx, sz)), g = nearestFree(...w2c(gx, gz)); if (!s || !g) return null;
    const idx = (c, r) => r * cols + c, N = cols * rows, came = new Int32Array(N).fill(-1), gsc = new Float32Array(N).fill(Infinity), seen = new Uint8Array(N), open = [];
    const h = (c, r) => Math.hypot(c - g[0], r - g[1]), si = idx(s[0], s[1]), gi = idx(g[0], g[1]);
    gsc[si] = 0; open.push({ i: si, f: h(s[0], s[1]) });
    const NB = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414]];
    while (open.length) {
      let bi = 0; for (let k = 1; k < open.length; k++) if (open[k].f < open[bi].f) bi = k;
      const cur = open.splice(bi, 1)[0];
      if (cur.i === gi) break; if (seen[cur.i]) continue; seen[cur.i] = 1;
      const cc = cur.i % cols, cr = (cur.i - cc) / cols;
      for (const [dc, dr, w] of NB) {
        const nc = cc + dc, nr = cr + dr; if (!free(nc, nr)) continue;
        if (dc && dr && (!free(cc + dc, cr) || !free(cc, cr + dr))) continue;
        const ni = idx(nc, nr), ng = gsc[cur.i] + w;
        if (ng < gsc[ni]) { gsc[ni] = ng; came[ni] = cur.i; open.push({ i: ni, f: ng + h(nc, nr) }); }
      }
    }
    if (came[gi] < 0 && gi !== si) return null;
    let path = [], p = gi;
    while (p !== -1) { const cc = p % cols, cr = (p - cc) / cols; path.push([c2x(cc), r2z(cr)]); p = came[p]; }
    path.reverse();
    const sm = [path[0]]; let a = 0;
    while (a < path.length - 1) { let b = path.length - 1; while (b > a + 1 && !clear(path[a][0], path[a][1], path[b][0], path[b][1])) b--; sm.push(path[b]); a = b; }
    return sm;
  }
  const randGoal = () => { for (let t = 0; t < 120; t++) { const c = Math.floor(Math.random() * cols), r = Math.floor(Math.random() * rows); if (free(c, r)) return [c2x(c), r2z(r)]; } return [(Z.x0 + Z.x1) / 2, (Z.z0 + Z.z1) / 2]; };
  return { R, CELL, cols, rows, c2x, r2z, blocked, free, astar, randGoal, inObst };
}

/* ---------- figure: build, detach from any auto-scene, scale to metres, PBR-ify ---------- */
export function makeFigure(scene, kind, targetH, opts = {}) {
  const fig = kind === 'f' ? new Female() : new Male();
  if (fig.parent) fig.parent.remove(fig);      // mannequin may auto-add to its own scene
  fig.position.set(0, 0, 0); fig.rotation.set(0, 0, 0);
  const grp = new THREE.Group(); grp.add(fig); grp.updateMatrixWorld(true);
  const bb = new THREE.Box3().setFromObject(fig), s = targetH / (bb.max.y - bb.min.y);
  grp.scale.setScalar(s); grp.userData.footY = -s * bb.min.y;
  fig.traverse(m => {
    if (!m.isMesh) return;
    m.castShadow = true; m.receiveShadow = true;
    const o = m.material;
    const col = opts.tint ? new THREE.Color(opts.tint) : (o?.color ?? new THREE.Color(0xcccccc));
    // mannequin materials expose a `map()` METHOD, not a texture — carrying it over
    // assigns a function to material.map and the first render throws on `.elements`.
    // Only keep a real Texture (untinted figures used to crash on this).
    const srcMap = !opts.tint && o?.map?.isTexture ? o.map : null;
    m.material = new THREE.MeshStandardMaterial({
      color: col.clone(), map: srcMap, roughness: 0.82, metalness: 0.0 });
    m.material.envMapIntensity = 0.55;
  });
  scene.add(grp);
  return { grp, fig };
}

/* ---------- poses (degrees) — tuned in MakoneLift/vr, do not eyeball-edit ---------- */
export function walkPose(f, ph, a) {
  const sw = Math.sin(ph), co = Math.cos(ph);
  f.l_leg.raise = 28 * sw * a; f.r_leg.raise = -28 * sw * a;                     // hips swing fwd/back
  f.l_leg.straddle = 3; f.r_leg.straddle = 3; f.l_leg.turn = 0; f.r_leg.turn = 0; // feet track forward
  f.l_knee.bend = 4 + a * (6 + 42 * Math.max(0, co)); f.r_knee.bend = 4 + a * (6 + 42 * Math.max(0, -co));
  f.l_ankle.bend = -3 + 10 * sw * a; f.r_ankle.bend = -3 - 10 * sw * a;          // toe push / heel land
  f.l_ankle.turn = 0; f.r_ankle.turn = 0; f.l_ankle.tilt = 0; f.r_ankle.tilt = 0;
  f.l_arm.raise = -14 * sw * a - 4; f.r_arm.raise = 14 * sw * a - 4;             // arms swing opposite
  f.l_arm.straddle = 6; f.r_arm.straddle = 6; f.l_arm.turn = 0; f.r_arm.turn = 0;
  f.l_elbow.bend = 28 + 10 * a; f.r_elbow.bend = 28 + 10 * a;
  f.torso.turn = 4 * sw * a; f.torso.bend = 2 + 2 * a; f.head.nod = -6;
}
export function reachPose(f, k) {
  f.torso.bend = 2 + 26 * k; f.r_arm.raise = -5 + 72 * k; f.r_arm.straddle = 7 - 5 * k;
  f.r_elbow.bend = 18 + 22 * k; f.r_wrist.bend = -15 - 18 * k; f.r_fingers.bend = 10 + (k > 0.65 ? 55 : 0);
}
export function operatePose(f, t) {
  const w = Math.sin(t * 3) * 6;                // both hands forward at a console, slight motion
  f.torso.bend = 14; f.l_arm.raise = 46; f.r_arm.raise = 46; f.l_arm.straddle = 10; f.r_arm.straddle = 10;
  f.l_elbow.bend = 70 + w; f.r_elbow.bend = 70 - w; f.l_fingers.bend = 40; f.r_fingers.bend = 40; f.head.nod = -14;
}
export function sitPose(f, k) {
  f.l_leg.raise = 85 * k; f.r_leg.raise = 85 * k;   // thighs ~horizontal (<90 avoids euler gimbal flip)
  f.l_leg.straddle = 4; f.r_leg.straddle = 4; f.l_leg.turn = 0; f.r_leg.turn = 0;
  f.l_knee.bend = 92 * k; f.r_knee.bend = 92 * k;   // shins straight down to the floor
  f.l_ankle.bend = 16 * k; f.r_ankle.bend = 16 * k; f.l_ankle.turn = 0; f.r_ankle.turn = 0; f.l_ankle.tilt = 0; f.r_ankle.tilt = 0;
  f.torso.bend = 5; f.torso.turn = 0; f.torso.tilt = 0;
  f.l_arm.raise = -4 - 2 * k; f.r_arm.raise = -4 - 2 * k; f.l_arm.straddle = 5; f.r_arm.straddle = 5; f.l_arm.turn = 0; f.r_arm.turn = 0;
  f.l_elbow.bend = 18 + 24 * k; f.r_elbow.bend = 18 + 24 * k; f.head.nod = -6; f.head.turn = 0;
}
export function carryArm(f) {
  f.r_arm.raise = 35; f.r_arm.straddle = 4; f.r_elbow.bend = 82; f.r_wrist.bend = -10; f.r_fingers.bend = 55;
}

/* ---------- world ---------- */
export function World(cfg) {
  const scene = cfg.scene;
  if (!scene) throw new Error('actors: World({ scene }) is required');
  const nav = Nav(cfg.zone, cfg.obstacles, cfg.radius || 0.32, cfg.cell || 0.3);
  const SPEED = cfg.speed || 1.2, SEP = cfg.separation != null ? cfg.separation : 0.62;
  const actors = [], colliders = [];  // colliders: live dynamic circles {x,z,r} actors must not enter
  function addCollider(o) { colliders.push(o); return o; }
  function actorsNear(x, z, r) { let best = null, bd = r; for (const a of actors) { const d = Math.hypot(a.x - x, a.z - z); if (d < bd) { bd = d; best = a; } } return best; }
  function inDyn(x, z) { for (const o of colliders) { const rr = (o.r || 0.5) + nav.R; if ((x - o.x) * (x - o.x) + (z - o.z) * (z - o.z) < rr * rr) return true; } return false; }

  function setGoal(a, gx, gz) { const p = nav.astar(a.x, a.z, gx, gz); a.path = (p && p.length) ? p : [[a.x, a.z], [gx, gz]]; a.pi = 1; }
  function faceTo(a, px, pz, dt) { faceYaw(a, Math.atan2(px - a.x, pz - a.z), dt); }
  function faceYaw(a, yaw, dt) { let d = ((yaw - a.head + 9 * Math.PI) % (2 * Math.PI)) - Math.PI; a.head += d * Math.min(1, 9 * dt); }
  function follow(a, dt) {
    a.moving = false;
    while (a.path && a.pi < a.path.length) {
      const [tx, tz] = a.path[a.pi], dx = tx - a.x, dz = tz - a.z, d = Math.hypot(dx, dz);
      if (d < 0.09) { a.pi++; continue; }
      a.speed += (1 - a.speed) * 0.1; const step = Math.min(d, SPEED * a.speed * dt);
      const nx = a.x + dx / d * step, nz = a.z + dz / d * step;
      if (inDyn(nx, nz)) { a.speed *= 0.6; faceTo(a, tx, tz, dt); return false; }  // hold at a vehicle's edge
      a.x = nx; a.z = nz; faceTo(a, tx, tz, dt); a.ph += step / STRIDE * Math.PI; a.moving = true; return false;
    }
    a.speed += (0 - a.speed) * 0.18; return true;
  }
  function tweenTo(obj, p, k) { obj.getWorldPosition(_v); obj.position.set(_v.x + (p.x - _v.x) * k, _v.y + (p.y - _v.y) * k, _v.z + (p.z - _v.z) * k); }
  function applyHold(obj) {
    const h = obj.userData.hold || { pos: [0, 0.16, 0.02], rot: [0, 0, 0] };
    obj.position.set(h.pos[0], h.pos[1], h.pos[2]); obj.rotation.set(h.rot[0], h.rot[1], h.rot[2]);
  }

  function startStep(a) {
    if (!a.routine || !a.routine.length) { a.sub = 'wander'; a.timer = 0; return; }
    const st = a.routine[a.step]; a.st = st; a.k = 0; a.timer = 0; a.rising = false;
    if (st.go) { setGoal(a, st.go[0], st.go[1]); a.sub = 'go'; }
    else if (st.face) a.sub = 'face';
    else if (st.wait != null) a.sub = 'wait';
    else if (st.grab) a.sub = 'grab';
    else if (st.put) { if (a.carry) scene.attach(a.carry); a.sub = 'put'; }
    else if (st.sit) a.sub = 'sit';
    else a.sub = 'next';
  }
  function nextStep(a) { a.step = (a.step + 1) % a.routine.length; startStep(a); }

  function update(a, dt) {
    const f = a.fig, st = a.st; a.sitting = false; a.moving = false;
    switch (a.sub) {
      case 'wander':
        if (!a.path || a.pi >= a.path.length) {
          a.timer -= dt; walkPose(f, a.ph, a.speed); a.speed += (0 - a.speed) * 0.18;
          if (a.timer <= 0) { const g = nav.randGoal(); setGoal(a, g[0], g[1]); }
        } else { if (follow(a, dt)) { a.path = null; a.timer = 0.6 + Math.random() * 2.6; } walkPose(f, a.ph, a.speed); }
        break;
      case 'go': if (follow(a, dt)) nextStep(a); walkPose(f, a.ph, a.speed); if (a.carry) carryArm(f); break;
      case 'face':
        faceTo(a, st.face[0], st.face[1], dt); a.timer += dt; walkPose(f, a.ph, 0); if (a.carry) carryArm(f);
        if (a.timer > 0.45) nextStep(a); break;
      case 'wait':
        a.timer += dt; if (st.face) faceTo(a, st.face[0], st.face[1], dt);
        if (st.pose === 'operate') operatePose(f, a.timer); else { walkPose(f, a.ph, 0); if (a.carry) carryArm(f); }
        if (a.timer >= st.wait) nextStep(a); break;
      case 'grab': {
        const o = st.grab; o.getWorldPosition(_v); faceTo(a, _v.x, _v.z, dt); a.k = Math.min(1, a.k + dt / 0.55);
        walkPose(f, a.ph, 0); reachPose(f, a.k); f.r_fingers.getWorldPosition(_v); tweenTo(o, { x: _v.x, y: _v.y, z: _v.z }, a.k * 0.5);
        if (a.k >= 1) { f.r_fingers.attach(o); applyHold(o); a.carry = o; a.sub = 'rise'; } break;
      }
      case 'put': {
        const t = st.put; faceTo(a, t[0], t[2], dt); a.k = Math.min(1, a.k + dt / 0.55);
        walkPose(f, a.ph, 0); reachPose(f, a.k); if (a.carry) tweenTo(a.carry, { x: t[0], y: t[1], z: t[2] }, a.k);
        if (a.k >= 1) { if (a.carry) { a.carry.position.set(t[0], t[1], t[2]); a.carry.rotation.set(0, 0, 0); } a.carry = null; a.sub = 'rise'; } break;
      }
      case 'rise': a.k = Math.max(0, a.k - dt / 0.4); walkPose(f, a.ph, 0); reachPose(f, a.k); if (a.k <= 0) nextStep(a); break;
      case 'sit': {
        const s = st.sit;
        let dd = ((s.yaw - a.head + 9 * Math.PI) % (2 * Math.PI)) - Math.PI; a.head += dd * Math.min(1, 8 * dt);
        const aligned = Math.abs(dd) < 0.15;
        if (!a.rising) {
          if (aligned) a.k = Math.min(1, a.k + dt / 0.55);   // face the seat FIRST, then fold (no leg-spin)
          a.x += (s.x - a.x) * Math.min(1, 4 * dt); a.z += (s.z - a.z) * Math.min(1, 4 * dt); sitPose(f, a.k);
          if (a.k >= 1) { a.timer += dt; if (a.timer >= (s.hold || 3)) a.rising = true; }
        } else { a.k = Math.max(0, a.k - dt / 0.5); sitPose(f, a.k); if (a.k <= 0) nextStep(a); }
        a.sitting = a.k > 0.02;
        if (a.carry) a.carry.position.set(0.16, 0.32, 0.18); break;
      }
      case 'next': nextStep(a); break;
    }
    // light mutual separation (skip seated actors so they stay put on the bench)
    if (!a.sitting) for (const b of actors) {
      if (b === a || b.sitting) continue;
      const dx = a.x - b.x, dz = a.z - b.z, d = Math.hypot(dx, dz);
      if (d > 1e-3 && d < SEP) { const push = (SEP - d) / 2, nx = a.x + dx / d * push, nz = a.z + dz / d * push; if (!nav.inObst(nx, nz)) { a.x = nx; a.z = nz; } }
    }
    // hard push-out of dynamic colliders (vehicles) — radially away first, else slide tangentially
    if (!a.sitting) for (const o of colliders) {
      const dx = a.x - o.x, dz = a.z - o.z, d = Math.hypot(dx, dz), rr = (o.r || 0.5) + nav.R;
      if (d < rr) {
        const dd = d > 1e-3 ? d : 1e-3, ux = d > 1e-3 ? dx / dd : 1, uz = d > 1e-3 ? dz / dd : 0, push = rr - dd;
        const dirs = [[ux, uz], [-uz, ux], [uz, -ux], [(ux - uz) * 0.707, (uz + ux) * 0.707], [(ux + uz) * 0.707, (uz - ux) * 0.707]];
        for (const dr of dirs) { const nx = a.x + dr[0] * push, nz = a.z + dr[1] * push; if (!nav.inObst(nx, nz)) { a.x = nx; a.z = nz; break; } }
      }
    }
    a.grp.rotation.y = a.head;
    if (a.sitting) {                      // snap feet to the floor (no through-ground / floating-seat)
      a.grp.position.set(a.x, 0, a.z); a.grp.updateMatrixWorld(true);
      _box.setFromObject(a.fig); a.grp.position.y = -_box.min.y;
    } else {
      const bob = a.moving ? Math.abs(Math.sin(a.ph)) * 0.018 * a.speed : 0;
      a.grp.position.set(a.x, a.grp.userData.footY + bob, a.z);
    }
  }

  function spawn(a0) {
    const { grp, fig } = makeFigure(scene, a0.kind, a0.height || 1.72, { tint: a0.tint });
    const a = { grp, fig, x: a0.x || 0, z: a0.z || 0, ph: 0, head: a0.yaw || 0, speed: 0,
      routine: a0.routine || [], step: 0, sub: 'idle', k: 0, timer: 1 + Math.random() * 2,
      rising: false, carry: null, path: null, pi: 0, moving: false, st: null };
    grp.position.set(a.x, grp.userData.footY, a.z); actors.push(a); startStep(a); return a;
  }
  function tick(dt) { dt = Math.min(dt, 0.05); for (const a of actors) update(a, dt); }
  return { tick, spawn, actors, nav, addCollider, actorsNear, colliders };
}

/* ===========================================================================
 * Crowd — a hundred people for five draw calls.
 *
 * `World` above gives you a PERSON: mannequin-js, articulated, poseable, able to sit down and
 * pick a tray up. It costs about thirty draw calls. That number is the real ceiling on every
 * crowd scene in this repo and it is not a small one — a station concourse built against a
 * reference photograph with seventy-eight figures in it shipped with twelve, because thirteen
 * mannequins were already 390 draw calls and the world had a building to pay for too. The
 * missing density was the single biggest visible gap between the render and the reference.
 *
 * So: a second kind of figure, for the ones you are never going to look at closely. One low-poly
 * body, one InstancedMesh for the skin/hair/legs and one for the coat, a per-instance gait phase,
 * and the walk done in the vertex shader by rotating tagged limbs about the hip and the shoulder.
 * A hundred of them is two draw calls and about 26k triangles, and they walk a waypoint graph
 * generated from the same `zone` + `obstacles` rectangles `World` already takes.
 *
 *   import { Crowd } from '/runtime/actors.js';
 *   const crowd = Crowd({ scene, count: 60, zone, obstacles });
 *   const crowd = Crowd({ ..., palette: { coat: [...], skin: [...] } });   // dress your own
 *   crowd.tick(dt);                       // in renderFrame
 *
 * Use both in one world: `World` for the three people who do something (the barista, the man
 * asleep on the bench), `Crowd` for the sixty who are just there. That is also the honest
 * division — a background figure that walks a line and never turns its head does not need
 * shoulders that work, and a crowd of them reads as a crowd, which is the whole job.
 *
 * Facing is +X. Feet are at y = 0.
 * =========================================================================== */

const LIMB = { BODY: 0, LEG_L: 1, LEG_R: 2, ARM_L: 3, ARM_R: 4 };
const UP_Y = new THREE.Vector3(0, 1, 0);
const HIP_Y = 0.88, SHOULDER_Y = 1.42;

/** One figure, in parts. Each part carries a limb tag (for the gait) and a SLOT — which of the
 *  five things on a person it is. The slot is what carries colour, per person, at draw time; the
 *  geometry carries none, so a crowd is not one author's idea of a face repeated N times. */
function crowdParts(THREE_) {
  const parts = [];
  const push = (geo, limb, slot) => {
    const n = geo.attributes.position.count;
    geo.setAttribute('limb', new THREE_.BufferAttribute(new Float32Array(n).fill(limb), 1));
    parts.push({ geo, slot });
    return geo;
  };
  const cyl = (r0, r1, h, x, y, z, seg = 7) =>
    new THREE_.CylinderGeometry(r0, r1, h, seg).translate(x, y + h / 2, z);
  // SCALE BEFORE TRANSLATE — the other order scales the offset too, and a head authored at
  // y = 1.66 then scaled 1.12 in y ends up at 1.86, floating a hand's width above its neck.
  const blob = (r, seg, ring, sx, sy, sz, y0) =>
    new THREE_.SphereGeometry(r, seg, ring).scale(sx, sy, sz).translate(0, y0, 0);

  for (const s of [-1, 1]) {
    const limb = s < 0 ? LIMB.LEG_L : LIMB.LEG_R;
    push(cyl(0.085, 0.070, 0.86, 0, 0.02, s * 0.105), limb, 'trousers');
    push(new THREE_.BoxGeometry(0.25, 0.07, 0.10).translate(0.03, 0.035, s * 0.105), limb, 'shoes');
  }
  push(blob(0.20, 9, 6, 0.82, 0.62, 1.02, 0.90), LIMB.BODY, 'trousers');
  push(blob(0.30, 10, 7, 0.54, 0.92, 0.80, 1.22), LIMB.BODY, 'coat');
  push(blob(0.24, 10, 6, 0.58, 0.42, 1.02, 1.40), LIMB.BODY, 'coat');
  for (const s of [-1, 1]) {
    const limb = s < 0 ? LIMB.ARM_L : LIMB.ARM_R;
    push(cyl(0.055, 0.048, 0.66, 0, 0.76, s * 0.245), limb, 'coat');
    push(new THREE_.SphereGeometry(0.055, 7, 5).translate(0, 0.76, s * 0.245), limb, 'skin');
  }
  push(cyl(0.052, 0.052, 0.10, 0, 1.52, 0), LIMB.BODY, 'skin');
  push(blob(0.105, 12, 9, 0.92, 1.12, 0.86, 1.66), LIMB.BODY, 'skin');
  push(blob(0.110, 12, 9, 0.94, 1.00, 0.90, 1.69).translate(-0.012, 0, 0), LIMB.BODY, 'hair');
  return parts;
}

/** The default wardrobe: five slots, each a list drawn from per person. It exists so that
 *  `Crowd({scene, count, zone})` produces a crowd rather than a uniform, and so that a world with
 *  its own idea — a hospital, a regiment, a beach — passes `palette` and gets it. */
const CROWD_PALETTE = {
  coat: [0x8e9bb4, 0xb09a80, 0x6f8f7a, 0xc08a80, 0x9aa2ad, 0xd8cdb6, 0x7d8ea8, 0xa8917a,
    0x5f6b7d, 0x9d7f6a, 0x7f8a6f, 0xc4b9a4],
  trousers: [0x40464f, 0x2f3439, 0x5a5245, 0x37414d, 0x6b6255, 0x4a4a4e, 0x2b3138],
  skin: [0xd9b28f, 0xc99a74, 0xa9754f, 0x8a5a3a, 0x66422b, 0xefc9a6, 0xb98a62],
  hair: [0x22180f, 0x120e0b, 0x3d2a18, 0x6b5236, 0x8f7a55, 0x554e48, 0x9a958e],
  shoes: [0x16181b, 0x231d18, 0x2c2e31],
};

/** The limb rotation, as a vertex-shader patch. Applied to the visible material and, through
 *  three's own instancing path, to the shadow — a crowd whose shadows stand still is worse than
 *  a crowd with no shadows, because the eye finds the disagreement before it finds the legs. */
function gaitPatch(sh) {
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', `#include <common>
attribute float limb;
attribute vec2 gait;                       // x: phase, y: amplitude (0 = standing still)
vec3 swing(vec3 p, float pivotY, float a) {
  float c = cos(a), s = sin(a);
  vec2 v = vec2(p.x, p.y - pivotY);
  return vec3(v.x * c + v.y * s, -v.x * s + v.y * c + pivotY, p.z);
}`)
    .replace('#include <begin_vertex>', `#include <begin_vertex>
  {
    float side = (limb == 1.0 || limb == 4.0) ? 1.0 : -1.0;
    if (limb == 1.0 || limb == 2.0) transformed = swing(transformed, ${HIP_Y}, sin(gait.x) * side * gait.y * 0.42);
    else if (limb == 3.0 || limb == 4.0) transformed = swing(transformed, ${SHOULDER_Y}, sin(gait.x) * side * gait.y * 0.24);
    transformed.y -= gait.y * 0.02 * (0.5 - 0.5 * cos(2.0 * gait.x));
  }`);
}

export function Crowd(cfg) {
  const {
    scene, count = 40, zone, obstacles = [], y = 0, step = 2.2, radius = 0.5,
    height = [1.58, 1.86], speed = [0.85, 1.35], rng = Math.random,
  } = cfg;
  const palette = { ...CROWD_PALETTE, ...(cfg.palette || {}) };
  if (cfg.tints) palette.coat = cfg.tints;                 // the common case, spelled short

  // ---- the waypoint graph, straight out of the rectangles the world already declared
  const free = (x, z) => !obstacles.some((o) => x >= o.x0 - radius && x <= o.x1 + radius
    && z >= o.z0 - radius && z <= o.z1 + radius);
  const nodes = [];
  for (let x = zone.x0 + step / 2; x <= zone.x1; x += step) {
    for (let z = zone.z0 + step / 2; z <= zone.z1; z += step) if (free(x, z)) nodes.push([x, z]);
  }
  if (!nodes.length) throw new Error('Crowd: the zone has no free waypoints — every candidate '
    + 'point is inside an obstacle. Widen `zone`, shrink `radius`, or use a smaller `step`.');
  const near = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) < step * 1.6;
  const edges = nodes.map((n, i) => nodes.reduce((acc, m, j) => {
    if (i !== j && near(n, m) && free((n[0] + m[0]) / 2, (n[1] + m[1]) / 2)) acc.push(j);
    return acc;
  }, []));

  // ---- one InstancedMesh per colour slot
  const parts = crowdParts(THREE);
  const slots = [...new Set(parts.map((p) => p.slot))];
  const meshes = slots.map((slot) => {
    const geo = mergeAll(parts.filter((p) => p.slot === slot).map((p) => p.geo));
    // The geometry carries NO colour: instanceColor multiplies into a white material, so every
    // slot is dressed per person. Baking colours into the vertices is what makes a crowd of one.
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.86 });
    mat.onBeforeCompile = gaitPatch;
    mat.customProgramCacheKey = () => 'crowd-gait';
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    mesh.name = `crowd:${slot}`;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;                            // they move; the bounds are the zone
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);
    const gait = new THREE.InstancedBufferAttribute(new Float32Array(count * 2), 2);
    geo.setAttribute('gait', gait);
    mesh.userData.gait = gait;
    mesh.userData.slot = slot;
    scene.add(mesh);
    return mesh;
  });

  // ---- the people
  const pickN = (a, b) => a + rng() * (b - a);
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion();
  const V = new THREE.Vector3(), S = new THREE.Vector3(), tint = new THREE.Color();
  const agents = [];
  for (let i = 0; i < count; i++) {
    const at = (rng() * nodes.length) | 0;
    agents.push({
      i: at, prev: at, x: nodes[at][0], z: nodes[at][1], goal: null,
      yaw: rng() * Math.PI * 2, phase: rng() * 6.283, amp: 0, wait: rng() * 5,
      speed: pickN(speed[0], speed[1]), scale: pickN(height[0], height[1]) / 1.78,
    });
    for (const mesh of meshes) {
      const list = palette[mesh.userData.slot] || [0xffffff];
      tint.setHex(list[(rng() * list.length) | 0]);
      mesh.setColorAt(i, tint);
    }
  }
  for (const mesh of meshes) mesh.instanceColor.needsUpdate = true;

  function nextNode(a) {
    const opts = edges[a.i];
    if (!opts.length) return;
    const fwd = opts.filter((j) => j !== a.prev);
    const pool = fwd.length && rng() < 0.88 ? fwd : opts;
    a.prev = a.i;
    a.i = pool[(rng() * pool.length) | 0];
    a.goal = nodes[a.i];
  }

  function tickCrowd(dt) {
    dt = Math.min(dt, 0.05);
    for (let k = 0; k < agents.length; k++) {
      const a = agents[k];
      if (!a.goal) {
        if (a.wait > 0) { a.wait -= dt; a.amp += (0 - a.amp) * Math.min(1, dt * 4); }
        else nextNode(a);
      } else {
        const dx = a.goal[0] - a.x, dz = a.goal[1] - a.z;
        if (Math.hypot(dx, dz) < 0.35) { a.goal = null; a.wait = rng() < 0.3 ? 1 + rng() * 5 : 0; }
        else {
          let dth = Math.atan2(dz, dx) - a.yaw;
          while (dth > Math.PI) dth -= 6.28318;
          while (dth < -Math.PI) dth += 6.28318;
          a.yaw += Math.max(-2.6 * dt, Math.min(2.6 * dt, dth));
          const v = a.speed * Math.min(1, a.amp + 0.3);
          a.x += Math.cos(a.yaw) * v * dt;
          a.z += Math.sin(a.yaw) * v * dt;
          a.amp += (1 - a.amp) * Math.min(1, dt * 3.5);
          a.phase += v * 3.3 * dt;
        }
      }
      // three.js instances rotate about +Y from +Z, and this figure faces +X
      Q.setFromAxisAngle(UP_Y, -a.yaw);
      M.compose(V.set(a.x, y, a.z), Q, S.setScalar(a.scale));
      for (const mesh of meshes) {
        mesh.setMatrixAt(k, M);
        const g = mesh.userData.gait.array;
        g[k * 2] = a.phase;
        g[k * 2 + 1] = a.amp;
      }
    }
    for (const mesh of meshes) {
      mesh.instanceMatrix.needsUpdate = true;
      mesh.userData.gait.needsUpdate = true;
    }
  }

  tickCrowd(0);
  return { tick: tickCrowd, agents, meshes, nodes, edges };
}

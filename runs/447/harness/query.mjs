// query.mjs — the questions you can ask a world that is already running.
//
// Everything in this repo that inspects a live world used to inline its own `page.evaluate`,
// and the knowledge of how to walk a scene graph, how to build a world-space box and how to
// fire a ray was copied into whichever tool needed it that week. Three tools need it now
// (verify, probe, and inspect's facts table), which is the bar for extracting it.
//
// One rule holds the module together: **a query never changes the world.** It reads, measures
// and returns JSON. Anything that steps, drives or renders belongs in lib.mjs; anything that
// decides whether an answer is a PROBLEM belongs in the tool that asked.
//
// The reason this file exists at all is a gap the harness had for two years: it could render a
// world and it could drive a world, but it could not MEASURE one. Every number it produced was
// either a pixel statistic (luma, chroma, motion) or a scene-graph count (triangles, meshes) —
// and neither can answer the question you actually have while building anything with an inside
// to it: *is there a wall between here and there.* Six throwaway scripts got written to answer
// that during one world. This is those six scripts, once.
//
// Every function here takes a Playwright `page` and returns a promise of plain JSON. `three`
// is imported INSIDE the page (`await import('three')`), never here: this module runs in node,
// where the world's import map does not exist.

/** Walk the scene for budget and for the material traps that all render as "too dark".
 *
 *  Counted by WALKING, not by reading `renderer.info`: info.render is reset on every
 *  renderer.render() call, so a world rendering through an EffectComposer reports only its
 *  LAST pass — a full-screen quad. Measured on erdtree: 181 meshes and ~614k triangles
 *  reported as `{triangles: 1, calls: 1}`. Four worlds render through a composer and every
 *  one of them passed the budget gate unconditionally.
 *
 *  Walking counts scene CONTENT rather than what the frustum drew, so it is an upper bound —
 *  the right bias for a budget: you promise what you built, not what happened to be on screen. */
export function sceneAudit(page) {
  return page.evaluate(() => {
    const scene = window.__world.getScene();
    const isWhite = (c) => !c || (c.r > 0.99 && c.g > 0.99 && c.b > 0.99);
    let triangles = 0, drawCalls = 0;
    const audit = [];
    const say = (o, msg) => audit.push(`${o.name || o.type}: ${msg}`);

    scene.traverse((o) => {
      if (!o.visible || !(o.isMesh || o.isPoints || o.isLine)) return;
      const g = o.geometry;
      if (g) {
        const verts = g.index ? g.index.count : (g.attributes.position?.count || 0);
        triangles += Math.round((verts / 3) * (o.isInstancedMesh ? o.count : 1));
      }
      drawCalls += 1;

      for (const m of (Array.isArray(o.material) ? o.material : [o.material])) {
        if (!m) continue;
        if (m.vertexColors === true && !g?.attributes.color) {
          say(o, 'material.vertexColors is true but the geometry has no `color` attribute — the '
            + 'shader multiplies by an undefined attribute (= 0) and the mesh renders black. '
            + "An InstancedMesh's instanceColor needs no flag at all.");
        }
        if (o.isInstancedMesh && o.instanceColor && !isWhite(m.color)) {
          say(o, `material.color (#${m.color.getHexString()}) MULTIPLIES instanceColor — tinting `
            + 'both crushes the result. Let the instances carry the colour and keep the material white.');
        }
        // DoubleSide alone is fine — a petal disc wants it. The bug is DoubleSide over AUTHORED
        // normals (grass blades tilted skyward): back faces get those normals inverted and go
        // black. Detect it by comparing the first face's geometric normal against its vertex
        // normals — they only disagree when someone authored them by hand.
        // E10, made automatic. A hand-built surface has a 50% chance of facing away from you and
        // every gate stays green when it does: back-face culling makes it invisible, so there is
        // no console error, the contract is complete, the budget is fine and `luma` sees the sky
        // filling the hole. The tell is cheap — the triangle's own winding against the normal the
        // author stored on it. A vault roof shipped like this cast perfect shadows on the floor
        // and could not be seen from under it; the ceiling read as 100% glass for a whole round.
        if (m.side === 0 && g?.attributes.normal && g.attributes.position.count >= 9) {
          // Judged over MANY triangles, not one. A smooth-shaded curved surface averages its
          // vertex normals, and on a tight radius the normal at vertex 0 can sit 50° off the
          // first face — which reads as "reversed" from a single sample and is not. A genuinely
          // reversed winding is reversed everywhere, so the test is a majority across the buffer.
          const P = g.attributes.position, N = g.attributes.normal;
          const count = g.index ? g.index.count : P.count;
          const idx = (k) => (g.index ? g.index.getX(k) : k);
          const at = (A, i) => [A.getX(i), A.getY(i), A.getZ(i)];
          const tris = Math.floor(count / 3);
          const take = Math.min(tris, 24);
          let against = 0, sampled = 0, sum = 0;
          for (let t = 0; t < take; t++) {
            const base = Math.floor((t * tris) / take) * 3;
            const [ax, ay, az] = at(P, idx(base));
            const [bx, by, bz] = at(P, idx(base + 1));
            const [cx, cy, cz] = at(P, idx(base + 2));
            const ux = bx - ax, uy = by - ay, uz = bz - az;
            const vx = cx - ax, vy = cy - ay, vz = cz - az;
            const fx = uy * vz - uz * vy, fy = uz * vx - ux * vz, fz = ux * vy - uy * vx;
            const fl = Math.hypot(fx, fy, fz);
            if (fl < 1e-9) continue;
            // the face's own normal against the AVERAGE of its three vertex normals
            let nx = 0, ny = 0, nz = 0;
            for (let k = 0; k < 3; k++) {
              const [px, py, pz] = at(N, idx(base + k));
              nx += px; ny += py; nz += pz;
            }
            const nl = Math.hypot(nx, ny, nz);
            if (nl < 1e-9) continue;
            const d = (fx * nx + fy * ny + fz * nz) / (fl * nl);
            sampled++; sum += d;
            if (d < -0.25) against++;
          }
          if (sampled >= 6 && against / sampled > 0.9 && sum / sampled < -0.6) {
            say(o, 'the winding of this geometry is OPPOSITE to the normals stored on it, across '
              + `${against}/${sampled} sampled triangles: the front face points away from the side `
              + 'the normals are lit for, so with FrontSide it is invisible from exactly where it '
              + 'is meant to be seen — while still casting perfect shadows, which is what makes it '
              + 'survive every other gate. Reverse the triangle order (a, c, b), not the normals '
              + '(docs/principles.md E10).');
          }
        }
        if (m.side === 2 && g?.attributes.normal && g.attributes.position.count >= 3) {
          const P = g.attributes.position, N = g.attributes.normal;
          const idx = (k) => (g.index ? g.index.getX(k) : k);
          const at = (A, i) => [A.getX(i), A.getY(i), A.getZ(i)];
          const [ax, ay, az] = at(P, idx(0)), [bx, by, bz] = at(P, idx(1)), [cx, cy, cz] = at(P, idx(2));
          const ux = bx - ax, uy = by - ay, uz = bz - az;
          const vx = cx - ax, vy = cy - ay, vz = cz - az;
          let fx = uy * vz - uz * vy, fy = uz * vx - ux * vz, fz = ux * vy - uy * vx;
          const fl = Math.hypot(fx, fy, fz);
          if (fl > 1e-9) {
            const [nx, ny, nz] = at(N, idx(0));
            if (Math.abs((fx * nx + fy * ny + fz * nz) / fl) < 0.8) {
              say(o, 'DoubleSide over authored normals: this geometry\'s vertex normals do not '
                + 'match its surface (deliberately, e.g. grass blades tilted skyward), and '
                + 'DoubleSide inverts them on back faces — so half of them point at the ground '
                + 'and render black. Author the back faces into the geometry and use FrontSide.');
            }
          }
        }
        if (m.map && m.map.colorSpace !== 'srgb') {
          say(o, 'material.map is a colour texture but its colorSpace is not SRGBColorSpace — '
            + 'it will render desaturated and dark.');
        }
        // A metal is a mirror. Give it nothing to reflect and it reflects nothing: bronze, brass
        // and painted steel all render BLACK, and the frame reads as a lighting problem, so the
        // next hour goes into the lights. One station hall lost its clock, its handrails and its
        // signage to this and got them all back from four lines of PMREM.
        if ((m.metalness ?? 0) > 0.5 && !scene.environment && !m.envMap) {
          say(o, `material.metalness is ${(m.metalness).toFixed(2)} and there is no `
            + 'scene.environment (and no material.envMap) — a metal with nothing to reflect '
            + 'renders black however many lights you add. Build one: PMREMGenerator.fromScene() '
            + 'over a two-colour gradient sphere is enough, and it is what the room is in.');
        }
      }
    });
    return {
      triangles, drawCalls, audit: [...new Set(audit)],
      budget: window.__meta.budget || null,
      key: window.__meta.key || 'natural',
    };
  });
}

/** Median cost of one frame, in ms.
 *
 *  Headless chromium renders in software, so the ABSOLUTE number says nothing about a real
 *  GPU — but it is measured identically for every world, so it compares them honestly and
 *  catches one that got ten times heavier. readPixels forces the GPU to finish; without it
 *  this times how fast we can queue work, not how long a frame takes. */
export function frameCost(page) {
  return page.evaluate(() => {
    const w = window.__world, gl = w.getRenderer().getContext(), px = new Uint8Array(4);
    const tick = () => {
      w.renderFrame(1 / 60);
      gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
    };
    for (let i = 0; i < 5; i++) tick();                      // warm up shaders and caches
    const t = [];
    for (let i = 0; i < 25; i++) { const a = performance.now(); tick(); t.push(performance.now() - a); }
    return Number(t.sort((a, b) => a - b)[12].toFixed(1));
  });
}

// ── space ────────────────────────────────────────────────────────────────────
//
// `NAMED` is shared by all of them: three.js leaves most objects unnamed, so an answer that
// says "Mesh overlaps Mesh" is not an answer. Walking up to the nearest named ancestor turns
// it into the name the author actually chose — which is the one they can search for.
// The three queries below are the ones the harness never had. They all run inside the page
// because that is where the world's actual matrices are, and they all take and return plain
// numbers so a CLI, a report or an agent can use the same answer.

/** Instanced rows whose neighbours are inside each other.
 *
 *  Scattered instances are SUPPOSED to overlap — leaves, rocks, grass. A row is not, and a row
 *  is precisely detectable: sort the instances along their dominant axis and the gaps between
 *  consecutive centres are near-constant. So the check only fires on evenly-spaced runs, where
 *  an overlap is never decoration.
 *
 *  This is the hole `skills/object/review.md` has named since the clipper without filling it:
 *  `inspect` reviews each part alone and interpenetration is an ASSEMBLY property, so nothing
 *  looked. Sixty of one world's eighty-eight hammers were 5.75mm inside their neighbours
 *  through every green gate, and the row rendered as one solid white band — which reads as a
 *  material problem, not a geometry one, and gets fixed by tuning lights for an afternoon. */
export function rowOverlaps(page, { minCount = 6, evenness = 0.18, epsilon = 0.0002 } = {}) {
  return page.evaluate(async ({ minCount, evenness, epsilon }) => {
    const T = await import('three');
    const NAMED = (o) => { for (let p = o; p; p = p.parent) if (p.name) return p.name; return o.type; };
    const rows = [];
    const m = new T.Matrix4();
    const world = new T.Matrix4();
    window.__world.getScene().traverse((o) => {
      if (!o.isInstancedMesh || o.count < minCount || !o.visible) return;
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      o.updateWorldMatrix(true, false);
      const boxes = [];
      for (let i = 0; i < o.count; i++) {
        o.getMatrixAt(i, m);
        world.multiplyMatrices(o.matrixWorld, m);
        const b = o.geometry.boundingBox.clone().applyMatrix4(world);
        boxes.push({ i, b, c: b.getCenter(new T.Vector3()) });
      }
      // dominant axis = the one the row actually runs along
      const spread = ['x', 'y', 'z'].map((a) => Math.max(...boxes.map((v) => v.c[a]))
        - Math.min(...boxes.map((v) => v.c[a])));
      const axis = ['x', 'y', 'z'][spread.indexOf(Math.max(...spread))];
      boxes.sort((p, q) => p.c[axis] - q.c[axis]);
      const gaps = boxes.slice(1).map((v, k) => v.c[axis] - boxes[k].c[axis]);
      const mean = gaps.reduce((s, g) => s + g, 0) / gaps.length;
      if (!(mean > 1e-9)) return;
      const sd = Math.sqrt(gaps.reduce((s, g) => s + (g - mean) ** 2, 0) / gaps.length);
      if (sd / mean > evenness) return;                      // scattered, not a row

      let worst = null;
      for (let k = 1; k < boxes.length; k++) {
        const a = boxes[k - 1].b, b = boxes[k].b;
        if (!a.intersectsBox(b)) continue;
        const over = Math.min(a.max[axis], b.max[axis]) - Math.max(a.min[axis], b.min[axis]);
        if (over > epsilon && (!worst || over > worst.over)) {
          worst = { over, a: boxes[k - 1].i, b: boxes[k].i };
        }
      }
      if (!worst) return;
      // Slenderness is measured on the geometry's OWN box, never the world box: a 2.4mm wire
      // leaning across the row has a world box 30mm on a side, so the world box says "chunky"
      // about a part that is a wire. The local box measures the PART; the instance matrix only
      // says where it is. (A unit cube scaled into a plank stays slender-1 in local space — and
      // that is right too, because for a scaled box the world box IS a good proxy.)
      const g3 = o.geometry.boundingBox.getSize(new T.Vector3());
      rows.push({
        name: NAMED(o),
        count: o.count,
        axis,
        pitchMm: +(mean * 1000).toFixed(2),
        sizeMm: +(boxes[0].b.getSize(new T.Vector3())[axis] * 1000).toFixed(2),
        overlapMm: +(worst.over * 1000).toFixed(2),
        // How much of a box the part is. A solid head is ~0.7, a wire ~0.002 — and for the
        // wire the box is not a proxy for the part at all: two parallel diagonals have
        // overlapping boxes and never touch. The caller uses this to tell a finding from an
        // artefact of the method.
        slender: +(Math.min(g3.x, g3.y, g3.z) / Math.max(g3.x, g3.y, g3.z)).toFixed(3),
        instances: [worst.a, worst.b],
      });
    });
    return rows.sort((a, b) => b.overlapMm - a.overlapMm);
  }, { minCount, evenness, epsilon });
}

/** What, if anything, stands between two points.
 *
 *  The question every interior asks and no screenshot answers: a camera inside a wall and a
 *  camera looking at a wall produce the same brown rectangle, and you cannot tell which you
 *  have by looking at it. Returns the blockers in order, nearest first, by name. */
export function sightLine(page, from, to, { ignore = 'studio:' } = {}) {
  return page.evaluate(async ({ from, to, ignore }) => {
    const T = await import('three');
    const a = new T.Vector3(...from), b = new T.Vector3(...to);
    const dir = b.clone().sub(a);
    const far = dir.length();
    const rc = new T.Raycaster(a, dir.normalize(), 0, far - 0.004);
    const NAMED = (o) => { for (let p = o; p; p = p.parent) if (p.name) return p.name; return o.type; };
    const hits = rc.intersectObjects(window.__world.getScene().children, true)
      .filter((h) => !(ignore && NAMED(h.object).startsWith(ignore)));
    const seen = new Set();
    return {
      metres: +far.toFixed(4),
      clear: hits.length === 0,
      blockers: hits.filter((h) => !seen.has(NAMED(h.object)) && seen.add(NAMED(h.object)))
        .slice(0, 6)
        .map((h) => ({ what: NAMED(h.object), atMetres: +h.distance.toFixed(4) })),
    };
  }, { from, to, ignore });
}

/** Is the default orbit going to walk out through a wall, and at what radius does it not?
 *
 *  `__orbit` swings the camera round the world's own target at the world's own distance, which
 *  is right for an object on a table and wrong for every interior: a 64 m hall framed from 34 m
 *  away orbits to 34 m either side of its centre, which is outside the building. The first four
 *  shots of one such world were photographs of the outside of its south wall, and the command
 *  that produced them is the one `create.mjs` prints as the next step.
 *
 *  So: fire one ray per candidate azimuth from where the camera WOULD be to the target. A blocked
 *  ray means that frame is inside a wall or looking through one. If any are blocked, walk the
 *  radius in until none are, and report both — the recovery is used, and the fact that it was
 *  needed is printed, because the real fix is `capture.views` and only the author can write it. */
export function orbitProbe(page, azimuths) {
  return page.evaluate(async ({ azimuths }) => {
    const T = await import('three');
    const w = window.__world;
    const cam = w.getCamera();
    const tc = w.getOrbitControls?.()?.target ?? { x: 0, y: 0, z: 0 };
    const target = new T.Vector3(tc.x ?? 0, tc.y ?? 0, tc.z ?? 0);
    const dy = cam.position.y - target.y;
    const r0 = Math.hypot(cam.position.x - target.x, cam.position.z - target.z);
    const kids = w.getScene().children;
    const NAMED = (o) => { for (let p = o; p; p = p.parent) if (p.name) return p.name; return o.type; };
    // Only SOLID things block a photograph. A ray fired across a hall hits the dust in its own
    // light shafts long before it hits a wall, and haze, glass, sprites and additive glow are all
    // things you can see a room through — counting them said "no radius is clear from any angle"
    // about a world whose every angle was clear.
    const solid = (o) => {
      if (o.isPoints || o.isLine || o.isSprite) return false;
      for (const m of (Array.isArray(o.material) ? o.material : [o.material])) {
        if (!m) continue;
        if (m.transparent && (m.opacity ?? 1) < 0.9) return false;
        if (m.blending === 2 /* AdditiveBlending */) return false;
        if (m.depthWrite === false) return false;
        if (m.transmission > 0.5) return false;
      }
      return true;
    };
    const solidHits = (from, dir, far) => {
      const rc = new T.Raycaster(from, dir.clone().normalize(), 0, far);
      return rc.intersectObjects(kids, true)
        .filter((h) => solid(h.object) && !NAMED(h.object).startsWith('studio:'));
    };
    // Two questions, and neither of them is "does the ray to the target hit anything" — for an
    // object world it always does, and that hit is the picture.
    //
    //   1. Did the orbit walk OUTDOORS? Fire a ray straight up. Inside a building you hit a roof;
    //      outside you hit sky. Only compare against the author's own camera: if they framed from
    //      indoors and the orbit is outdoors, the circle has left the building. This is the exact
    //      failure that photographed the outside of a station's south wall four times.
    //   2. Is there a WALL between the camera and the target? A blocker in the near half of the
    //      path is an obstruction; one at the far end is the subject.
    const UP = new T.Vector3(0, 1, 0);
    const indoors = (p) => solidHits(p, UP, 400).length > 0;
    const authorIndoors = indoors(cam.position.clone());
    const posAt = (az, r) => {
      const a = (az * Math.PI) / 180;
      return new T.Vector3(target.x + r * Math.sin(a), target.y + dy, target.z + r * Math.cos(a));
    };
    const blockerAt = (az, r) => {
      const p = posAt(az, r);
      if (authorIndoors && !indoors(p)) return 'outside the building';
      const dir = target.clone().sub(p);
      const far = dir.length();
      if (far < 1e-3) return null;
      const near = solidHits(p, dir, far - 0.004)[0];
      // A blocker only counts as a wall when it is much nearer the camera than the target AND
      // leaves real clearance behind it. Without the second half, a close orbit round any subject
      // reports the subject as a wall, and the radius search then rejects every radius it tries.
      const isWall = near && near.distance < far * 0.4 && far - near.distance > 2.0;
      return isWall ? NAMED(near.object) : null;
    };
    const blockedCount = (r) => azimuths.filter((az) => blockerAt(az, r)).length;
    const at = azimuths.map((az) => ({ az, blocker: blockerAt(az, r0) }));
    let radius = null, stillBlocked = at.filter((x) => x.blocker).length;
    if (stillBlocked) {
      // Take the largest radius that is clear everywhere; failing that, the one that is clear in
      // the most directions. A partly-better circle is still better than a circle of walls, and
      // the count is reported either way so nobody mistakes the recovery for a framing.
      let best = null;
      for (let f = 0.85; f >= 0.10; f -= 0.05) {
        const n = blockedCount(r0 * f);
        if (n === 0) { best = { f, n }; break; }
        if (!best || n < best.n) best = { f, n };
      }
      if (best && best.n < stillBlocked) { radius = +(r0 * best.f).toFixed(3); stillBlocked = best.n; }
    }
    return { r0: +r0.toFixed(3), at, radius, stillBlocked };
  }, { azimuths });
}


/** Every direction from which a point can actually be seen, at a given distance.
 *
 *  Finding a camera position inside a machine by moving it and looking is a slot machine: the
 *  frame is either the subject or the inside of a wall, and both take a render to find out.
 *  This fires one ray per candidate instead, so a whole sphere of viewpoints costs less than
 *  a single screenshot, and comes back as numbers you can put straight into a params file. */
export function scout(page, target, { dist = 0.3, azStep = 15, elevations = [0, 12, 24, 40, 58] } = {}) {
  return page.evaluate(async ({ target, dist, azStep, elevations, }) => {
    const T = await import('three');
    const t = new T.Vector3(...target);
    const rc = new T.Raycaster();
    const NAMED = (o) => { for (let p = o; p; p = p.parent) if (p.name) return p.name; return o.type; };
    const kids = window.__world.getScene().children;
    const open = [];
    for (let az = 0; az < 360; az += azStep) {
      for (const el of elevations) {
        const a = (az * Math.PI) / 180, e = (el * Math.PI) / 180;
        const p = new T.Vector3(
          t.x + dist * Math.cos(e) * Math.sin(a),
          t.y + dist * Math.sin(e),
          t.z + dist * Math.cos(e) * Math.cos(a));
        rc.set(p, t.clone().sub(p).normalize());
        rc.far = dist - 0.006;
        const blocked = rc.intersectObjects(kids, true).find((h) => !NAMED(h.object).startsWith('studio:'));
        if (!blocked) open.push({ az, el, pos: p.toArray().map((v) => +v.toFixed(3)) });
      }
    }
    return open;
  }, { target, dist, azStep, elevations });
}

/** Put the camera exactly here, looking exactly there — without editing the world to try it. */
export function aim(page, from, at, fov) {
  return page.evaluate(({ from, at, fov }) => {
    const w = window.__world;
    const cam = w.getCamera();
    cam.position.set(...from);
    cam.lookAt(...at);
    if (fov && cam.isPerspectiveCamera) { cam.fov = fov; cam.updateProjectionMatrix(); }
    w.getOrbitControls?.()?.target?.set?.(...at);
    w.getRenderer().render(w.getScene(), cam);
  }, { from, at, fov });
}

/** Hide everything a world draws in DOM on top of its canvas — captions, bars, buttons.
 *  Worlds mark them `data-chrome`; this is what a cover frame and a probe shot both want. */
export function hideChrome(page) {
  return page.evaluate(() => {
    for (const el of document.querySelectorAll('[data-chrome]')) el.style.visibility = 'hidden';
  });
}

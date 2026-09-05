# Principles

> **Re-read this at the start of every session.** Every rule below traces to at
> least one bug that actually shipped in this codebase, or one world that passed
> every check and still was not worth looking at. These are not "general best
> practices" — they are scar tissue.

## Meta-philosophy

1. **Axioms, not patches.** When a problem shows up twice, find the rule that
   would have prevented both occurrences. Write that rule. Don't write "in
   the X case, do Y" — write "X kind of system always needs Y".
2. **Rule of three for abstraction.** Don't extract code into `runtime/`
   until **three** worlds need it. Two = coincidence. Three = pattern.
   Premature extraction creates a primitive that's wrong because you didn't
   have enough use cases to know the right shape.
3. **Single-file worlds until they hurt.** A world is a directory, but keep
   everything in `main.js` until it hurts: 1500 lines is comfortable, 2500 is
   the warning, 3000 is the cliff. Don't pre-split into modules — split when
   this world actually justifies it (3+ distinct modes, or past the cliff).
4. **Verify before you ship.** Every change observable in browser → run
   `node harness/capture.mjs <world>` and LOOK at the frames; run
   `node harness/verify.mjs <world>` for console errors + contract + budget.
   The fast feedback loop is the only reason this whole project works.

---

## Engineering axioms (recurring bugs distilled)

### E1. Verify primitive API signatures before invoking

When you import a shared class (from `runtime/` or any library), **grep one
other world** that uses it. Constructor arg shapes are not obvious from the import.

```bash
grep -rn "new ScreenShake\b" worlds/ | head
```

Real bugs caused by skipping this check:
- `new ScreenShake({ camera })` — should be `new ScreenShake(camera)`. Silent
  until first `.tick()`, then blank canvas (E3).
- `new Cooldown({ time: 0.45 })` — should be `new Cooldown(0.45)`. Silent
  until `.use()` is called (`.use` is undefined, throws). Bullets never fire.
- `new Resource({ start: 70, ... })` — config field is `current`, not `start`.
  Silently ignored, defaulting to `max`.

The 5-second `grep` would have saved 20-minute debug each time.

**But the grep proves the call RUNS, not that it is RIGHT — and this repo's own precedent
is not a source of truth.** `seatrain` needed a planar mirror, grepped the one world that
already had one, copied its `Reflector` setup exactly, and inherited a bug that had been
sitting on main for months (E14). The remedy for a bug that the search itself propagates
cannot be more searching: when the precedent is the only evidence, spend the extra minute
on the primitive's own source, and check the one property that would be wrong if the
precedent were.

### E2. Render at least once before the animation loop starts

```js
fx.render(0)   // first paint — even if loop crashes, user sees something
loop()         // then start animation
```

If `fx.render(0)` itself throws, you see the error immediately instead of
shipping a "works in dev, blank in prod" bug.

### E3. First-frame loop errors disappear behind transparent canvas

A WebGL canvas with no draw calls is **transparent**, not "default-color".
The page background shows through. The HUD (DOM) survives. The user sees
a serene white void with controls floating over it.

When the user reports "blank page" → first thing to check is the console
error stack. The crash will be in the loop body, usually in something
called on the first `tick`.

Full recipe: `skills/three/blank-canvas.md`.

### E4. Share geometry; never `new Geometry()` inside a loop

```js
// ❌ 36 trees → 36 LatheGeometry buffers
function buildPalm() { new LatheGeometry(...) }

// ✅ 36 trees → 1 LatheGeometry buffer
const PALM_GEO = new LatheGeometry(...)
function buildPalm() { new Mesh(PALM_GEO, mat) }
```

If you wrote `new THREE.X(...)` inside a function called in a loop, that
allocation is suspect. Default to lifting it out. Audit at runtime:

```js
const geoSet = new Set()
scene.traverse(o => { if (o.geometry) geoSet.add(o.geometry.uuid) })
console.log('unique geos:', geoSet.size)   // healthy: < 40 for a hand-built scene
```

Full recipe: `skills/three/shared-resources.md`.

### E5. Bloom + bright sky + ACES tone mapping = washed-white screen

For bright daytime scenes (tropical, candy, cartoon):

```js
renderer.toneMapping = THREE.NoToneMapping     // not ACES
// NO bloom (UnrealBloomPass)
scene.background = new THREE.Color(brightColor) // not ProceduralSky w/ near-white horizon
materials.forEach(m => m.emissive = new THREE.Color(0x000000))  // no emissive on Lambert
```

Bloom multiplies bright pixels. Bright scene + bloom = all pixels bloom = white.

Full recipe: `skills/craft/render-recipes.md`.

### E6. Single source of truth for cell/grid state

When the same conceptual thing has two representations (visual mesh AND
collision data; level string AND tile object), the bug is always: one of
them gets updated and the other doesn't.

The fix: collision check the LIVE state, not the source string.

Real bug: a side-scroller's breakable blocks. The level string had `?`.
Collision code read the string. The bump animation hid the mesh. The player
walked through the bumped block, because the string still said `?` but the
mesh was gone.

Fix: collision checks `tileGrid[key].alive` (live state) not the static
level string.

Full discussion: `skills/three/update-order.md`
section "Data coherence".

### E7. Mesh "forward" convention must match physics "forward" convention

If you build a mesh with its nose at local `+Z`, then physics uses a
forward vector convention like `(-sin θ, 0, -cos θ)`, you'll get cars
driving rear-first.

Fix: wrap-inner pattern. Outer group is what physics rotates; inner group
contains the visual mesh pre-rotated 180° so its nose aligns with physics
forward.

```js
function buildCar() {
  const wrap = new THREE.Group()
  const inner = new THREE.Group()
  // ... build visuals in inner ...
  inner.rotation.y = Math.PI    // pre-rotate so nose aligns with physics fwd
  wrap.add(inner)
  return wrap
}
```

Same lesson applies for `dirAngle({dx, dz})` mapping to mesh `rotation.y`:
mesh barrel at local `+Z` → `rotation.y = π/2` points world `+X`, NOT `-π/2`.
Top-down view hides the mistake. First-person view exposes it.

### E8. Snap-turn movement is incompatible with cameras that rotate with the player

4-direction grid games (Pacman / Bomberman / FC Tank Battle / Battle City)
have the player snap-turn 90° many times per second. **Any camera that
tracks the player's facing rotation will whip-pan 90° at the same rate.**
Result: motion sickness within 10 seconds.

Even smoothing the camera's facing via lerp does not save it — you trade
strobe for nausea.

Fix: in snap-turn games, camera modes must use **fixed world orientation**.
Camera position can follow the player (top-down / iso / chase) but the
rotation must not rotate with player.dir. The player still spins (you see
the turret turn), but the world stays put.

See `skills/game/axioms/camera-coupling.md`.

### E9. A palette authored on an older three.js renders wrong on a new one

three r128 fed raw hex straight to the shader and sRGB-encoded on output, so
every color rendered **lighter and more pastel** than its hex. A scene whose
look was tuned on that pipeline, opened under r15x+ with default color
management, renders the same hexes darker and more saturated — a faithful port
that looks wrong.

Do NOT flip `ColorManagement` globally (tried; it makes it worse). After ALL
materials exist, run a one-time shim:

```js
scene.traverse(o => { for (const m of mats(o)) {
  m.color?.convertLinearToSRGB(); m.emissive?.convertLinearToSRGB();
}});
// and: leave authored CanvasTextures WITHOUT texture.colorSpace = SRGBColorSpace
```

That reproduces the old appearance exactly, for one scene, without poisoning the
global pipeline. New worlds must NOT copy the shim — author true hex instead.
And always A/B against a reference render; never port colors by theory alone.

### E10. A hand-built index buffer faces the wrong way half the time

Any mesh you index yourself — a terrain grid, a ribbon, a lofted hull — has a
50% chance of facing away from you, and **every gate stays green when it does**.
Back-face culling makes it invisible, so: no console error, contract complete,
budget fine, `luma` fine (the sky and fog fill the frame), and the capture looks
like a hazy scene rather than an empty one.

`gorge` built a 2.9 km canyon that was invisible for five review rounds. The
tell that broke it was not a screenshot — it was a raycast returning `null`
everywhere the ground should have been.

```js
// rows advance along -Z, columns along +X:
idx.push(a, c, b, b, c, d)   // ❌ normal is -Y. Invisible from above.
idx.push(a, b, c, b, d, c)   // ✅
```

`verify` now checks this for you: a FrontSide geometry whose winding disagrees with the normals
stored on it, across a majority of sampled triangles, is reported in `warnings`. Check it yourself
the moment the mesh exists in one of two ways — both take a minute and neither depends on your
eyes:

```js
// 1. does a ray from above hit it at all?
raycaster.set(new THREE.Vector3(x, 500, z), new THREE.Vector3(0, -1, 0));
console.log(raycaster.intersectObject(mesh).length);       // 0 = wrong winding
// 2. or just look at the first normal after computeVertexNormals()
console.log(mesh.geometry.attributes.normal.getY(0));      // < 0 = wrong winding
```

**Symptom to remember**: "the world looks empty / washed out and I cannot find
the geometry" is a winding bug far more often than it is a lighting bug.

### E11. A world's own autopilot cannot validate its controls

`bot-drivable ≠ player-tested`, and the gap is not a small one.

`gorge` shipped a build where `D` turned the aircraft **left**. It survived every
check because the only thing that ever flew it was the autopilot inside
`main.js`, and that autopilot wrote the internal input struct directly using the
same inverted sign. Two mistakes that cancel, one player who cannot steer.

Underneath it was a second bug of the same family: `act()` set the input struct
and `readKeys()` overwrote it on the very next frame, so the entire playable
contract was implemented, reported `interactive: true`, and was **completely
inert**. Both are invisible from inside.

The rule: **the thing that drives a playable world must live outside it and use
only the published contract** — `observe()` describes, `act()` commands, and a
loop closed between the two is the only thing that proves they agree. That is
what `worlds/<name>/pilot.js` is for, and why it may not import from the world.

```bash
node harness/botplay.mjs <name>     # flies the whole course through pilot.js
```

`verify` runs three seconds of it and warns when a playable world has no pilot;
a wrong control convention takes a corner to appear, so it needs the full run.
Corollary for any world where both a bot and a human write one input struct:
decide which wins, in code, on purpose (`gorge` gates the keyboard read behind a
`botUntil` timestamp).

**And the blind spot in all of the above: an outside pilot cannot see a mirror.**
If `observe()` and `act()` share the same sign error, the pilot reads "the gate
is to your right", commands "turn right", both are wrong in the same direction,
and it flies a perfect line. `gorge` finished 27/27 with zero contacts while `D`
turned the aircraft **left**, and the run was used as evidence that the controls
were fixed. They were not: the fix had been applied to the wrong half.

A pilot closes the loop between `observe` and `act`, so it can only ever prove
the two **agree**. Proving they are *right* needs a third reference that neither
of them defines — and the only one that exists is the screen, because left and
right are facts about what the player sees:

```js
const camRight = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
const a = new THREE.Vector3(); camera.getWorldDirection(a);
for (let i = 0; i < 18; i++) { world.act({ turn: +1 }); world.renderFrame(1 / 30); }
const b = new THREE.Vector3(); camera.getWorldDirection(b);
console.log(b.sub(a).dot(camRight));      // "turn right" MUST be > 0
```

Run that once per playable world, by hand, and read the sign. It is four lines
and it is the only check in this repo that a self-consistent world cannot fool.

### E12. A form authored below the mesh's sampling rate does not exist

If a feature is not at least ~3 samples across, it is not in the picture no
matter how correct the maths is. `gorge` spent four rounds on sandstone ledges
that were exactly one quad tall: the terracing function was right, the strata
were right, and the wall rendered perfectly smooth.

Before authoring a form, divide: **feature size ÷ quad size**. Under 3, you have
two honest choices — make the feature bigger, or spend the vertices where it
goes. Do not tune it; it cannot appear.

The same arithmetic applies to textures (a 4-pixel feature in a 256² map is
noise, not detail) and to the reverse case: `gorge`'s first rock map put its
top octave on a 4-texel span and the whole canyon shimmered like television
static from 400 m away.

**And it applies again on the way out, against the SCREEN.** A texture is
authored at some resolution and then magnified by however much of the world it
has to cover: `dontstarve2` painted its island onto a 2048² map spanning 190 m,
which is 11 texels per metre — and the camera sits close enough that one metre
is ~87 screen pixels, so every painted mark was blown up eight times into soup.
The maths of the marks was fine; they were authored for a magnification that
never happened. Divide again before you author: **texels per metre ÷ pixels per
metre**. Under 1 and the detail cannot survive the trip, however good it is.
The fix is not a bigger map (a 16k map for one island is absurd) — it is a
second texture tiled in *world* space, whose density does not depend on how
much ground the first one had to cover.

**A third division, and it is the one that decides whether you can SEE INTO anything.** An
opening seen off-axis is closed by its own depth: the view slides sideways across the
reveal by `depth × tan(angle from the surface normal)`, and when that reaches the aperture
width the hole shows you nothing but its own wall. `seatrain` is viewed 77° off the side of
its carriages, where `tan` is 4.4 — so a 1.0 m window survives a 70 mm skin (0.31 m of
slide) and is *totally* occluded by a 2.7 m one. Which is why cutting window holes in a
solid extruded body changed nothing: **a hole through a solid is a tunnel, not a window.**

The same division run at `angle = 0` is the reason the sealed version failed at all: the
benches, the ceiling strip and fifty passengers were geometrically inside solid material.
**A form authored inside a solid does not exist either**, and it fails the way E10 fails —
quietly, with a lit-looking result, because an additive glow quad in front of the paint was
doing the job everyone credited to the interior. It only surfaced when the glow was turned
*down*. If you are lighting a room, build the room: a skin, a roof, a floor and end walls.

### E12b. An image is only good for the place it was composed for

The divisions above are about resolution. This one is about **composition**, and
it survives any amount of resolution.

`dontstarve2` hung its inventory icons off the character's wrist to show a held
tool. Every one of them read as a spoon. The icons were fine — they are composed
to be unmistakable at 40 px in a square slot, which means centred, square-ish,
foreshortened, the whole object crammed into a box. A tool in a hand needs the
exact opposite: a long handle, the working end at the far end, and a grip a
third of the way up, because that is what the arm is holding it by. Nothing
about pixels was wrong. The *framing* was authored for a different question.

The same trap, in other shapes: a texture authored as a flat swatch used as a
skybox, a portrait cropped for a card reused as a banner, an emoji picked to
label a tab standing in for a drawn icon next to drawn icons.

**If a drawing has to appear in two places, draw it twice.** It is cheaper than
it sounds — the second version is usually simpler than the first, because it
only has to answer one question.

### E13. Anything that expires must expire on `dt`, not on the wall clock

`setTimeout` does not exist for a world that is being stepped by hand, and every
review tool in this repo steps worlds by hand: `capture` simulates N seconds
inside one synchronous burst, `verify` samples, `botplay` runs a whole course in
a fraction of the time it depicts. A HUD fade, a toast, a title card, a hit
flash, a cooldown pip — anything whose lifetime is measured in `setTimeout`
milliseconds — never fires there.

`dontstarve2`'s opening caption was written with a 4-second `setTimeout`. It sat
over **every** review frame, every contact sheet and the gallery cover, and it
read as an art problem ("why is there text on my hero shot") rather than as a
timing one. It survived four rounds.

```js
// ❌ never fires under capture/verify/botplay
setTimeout(() => banner.style.opacity = '0', 4000)

// ✅ the world's own clock is the only clock
tick(dt) { if (this.t > 0 && (this.t -= dt) <= 0) this.hide() }
```

**CSS transitions are wall-clock too**, and that is the second half of the trap:
after the fix above, `transition: opacity .6s` still left the caption half-faded
in the screenshot, because the harness burns eight simulated seconds in ~200 ms
of real time and shoots immediately after. A fade needs a partner that is not
animated — set `visibility: hidden` as well as `opacity: 0` — or the element
will be caught mid-transition forever.

Same family, same fix: `performance.now()` / `Date.now()` deltas anywhere in a
world are a bug. `renderFrame(dt)` is the only time that exists.

### E14. A primitive that reads the OBJECT's transform cannot be fed a baked geometry

`geometry.rotateX(-Math.PI/2)` and `mesh.rotation.x = -Math.PI/2` put the same triangles in
the same place, and for a plain `Mesh` they are interchangeable. For anything that computes
a **frame** — a plane, an axis, a direction — from `matrixWorld`, they are not, because a
baked rotation leaves `matrixWorld` an identity and the primitive solves for the wrong one:

```js
// three/addons/objects/Reflector.js
normal.set( 0, 0, 1 );
normal.applyMatrix4( rotationMatrix );      // rotationMatrix comes from the OBJECT
```

```js
// ❌ mirror plane is VERTICAL under a floor lying flat
new Reflector(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), opts)
// ✅
const m = new Reflector(new THREE.PlaneGeometry(w, d), opts); m.rotation.x = -Math.PI / 2;
```

**What makes this one dangerous is that it renders something plausible.** A mirror at the
wrong angle still returns the sky and the far background — a sky looks much the same from
any mirror — so the floor still reads as wet and every gate stays green. `rooftop` shipped
this, and it cost the world the one thing its brief was about: the neon arrived as
horizontal streaks lying across the deck, and nothing standing ON the floor reflected at
all. It was also failing its own `low`-key gate on main, because a working mirror was
supposed to be its highlight.

The check is one look, not an argument: **does something standing on the surface have a
reflection?** If only the sky comes back, the plane is wrong.

Same shape, same fix, elsewhere: `DirectionalLight.target`, `Plane`/`Box3` built from an
object, any helper, and physics colliders — `Box3.setFromObject` returns a WORLD box, so a
collider parented to a body that already carries the mesh's rotation gets it applied twice.

### E15. One seeded stream for a whole world welds every generator to every other one

Nineteen worlds in here inline the same LCG and draw every decision from it in one long
sequence. That buys determinism, which is the point — a capture is a regression test. It
also makes **position in the sequence a global variable that every generator writes to.**

Editing `rooftop`'s puddle loop from 30 iterations to 12 consumed 54 fewer numbers, and
everything drawn afterwards shifted along: different strokes on every neon sign, different
laundry on the line, a different roof. The diff was one integer. The whole picture was a
stranger, and the review frame it produced looked like a regression in six places at once.

The fix is the fix for any global — don't have one. `runtime/rng.js` derives each stream's
seed from (master seed, name):

```js
const rng = seedRng(20010720);
const poles = rng.stream('poles'), saloon = rng.stream('saloon');
```

so changing how many numbers `saloon` draws cannot move `poles`, a new stream added later
disturbs none of the existing ones, and the streams are order-independent. The root
callable is bit-exact with the inlined LCG, so adopting it costs an existing world nothing
until you actually split a generator out — and that one move re-rolls that generator once,
after which it stays put.

**Corollary for editing a world you did not write:** before changing a loop bound in a
procedural generator, check whether its `rnd` is shared. If it is, change the values the
loop draws, never the number of draws — or split the stream and expect one re-roll.

### E16. A row of things is not a row if they are inside each other

A repeated thing has ONE slot, and the slot is the pitch. Anything that stands in that row —
a key, a hammer, a damper, a fence post, a window — is bounded by it in the direction the row
runs, and by nothing at all in the other two. Almost every real object's published dimension is
the OTHER one, because that is the dimension the thing is famous for: a bass piano hammer really
is 19.5mm, and that is its depth along the string; across the notes it can never exceed the
13.75mm it is allowed. Put the famous number in the bounded place and sixty of eighty-eight
pieces end up inside their neighbours.

The failure is silent and it does not look like a geometry bug. Sixty overlapping hammers
render as one continuous white band, which reads as a MATERIAL problem — and you can spend an
afternoon lighting it. No gate caught it: `inspect` reviews each part alone and this is an
assembly property, `verify` was measuring console, contract, budget and luminance, and a
900×600 contact sheet is far too small to see a 1.4mm gap close.

Two things now catch it, and both are cheap:

```js
// in params.js, where the row's pitch is already a named number
const inItsSlot = (what, w) => { if (w > PITCH - 0.0008) throw new Error(`${what} ...`); };
```

```bash
node harness/probe.mjs <world> --rows      # every evenly spaced run that intersects itself
```

`verify` runs the same check on every world. It fires on evenly-spaced runs only — scattered
instances are *supposed* to overlap — and it reports `slender`, measured on the geometry's own
box, so a thin part leaning across the row is not mistaken for a fat one sitting in it.

### E17. Anything that needs a real device is invisible to the harness, or traps it

E13's sibling, one layer down. E13 says a world's own clock must be `dt`, because nothing that
waits on the wall clock ever fires under `capture`. The same is true of every real *device*, and
the failure mode is worse than "does not happen": it can take the harness down with it.

Audio is the case that taught it. A headless Chromium has no audio device, and asks for one
anyway: `new AudioContext()` takes **2.6 seconds** there against ~20ms on a real machine. That
is long enough that the next Playwright locator gives up, so a world with sound reported that
its controls could not be tested — a hole in the evidence, produced by a line that had nothing
to do with controls.

The rule is symmetric with E13's: **nothing a capture run cannot perceive should cost a capture
run anything.** The world knows it is in one — `play.html` is loaded with `?capture=1`:

```js
if (new URLSearchParams(location.search).get('capture') === '1') return false;   // no device here
```

Sound itself is fine, and it is built the same way as everything else in this repo: synthesised
from the world's own numbers, never sampled (docs/architecture.md D4). A recording would be an
external asset *and* a different instrument from the one on screen.

### E18. A metal with nothing to reflect renders black

`metalness` is not a slider from "matte" to "shiny" — it is a statement that this surface has no
diffuse response at all and shows you only what is around it. Give it nothing to be around and
the answer is nothing: bronze, brass and painted steel all come out **black**, at every light
level, however many lights you add.

The reason it costs an hour rather than a minute is that it does not look like a material bug. A
black clock in a lit hall reads as a lighting problem, so the next hour goes into the key and the
fill, and every one of them makes it worse.

```js
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(skyScene, 0.04).texture;   // a two-colour gradient sphere is enough
scene.environmentIntensity = 0.3;                              // it is a light as well as a mirror
```

`verify` now says so: any material over `metalness` 0.5 in a scene with no `environment` and no
`envMap` is reported in `warnings`. Thirteen worlds in this repo were rendering their metals black
when that check was first run.

### E19. A uniform added in `onBeforeCompile` belongs to the PROGRAM, not to the material

`customProgramCacheKey` decides which materials share a compiled program. Return the same key from
five materials and they share one — and they share the uniform objects that `onBeforeCompile`
attached to it, so four of them silently render with the fifth one's values.

It fails in the worst possible way: not an error, not a wrong picture, but *no change at all*, so
the conclusion is "the injection is not working" and the next hour goes into the injection, which
was fine the whole time.

```js
// the numbers ARE the variant — compile them into the source, and key the cache by them
.replace('#include <color_fragment>', '#include <color_fragment>\n'
  + `diffuseColor.rgb *= mix(${(1 - strength).toFixed(4)}, ${(1 + strength).toFixed(4)}, g);`)
material.customProgramCacheKey = () => `tri:${strength}`;
```

A texture uniform is the exception and is fine to pass — it is the same object for every material
that shares the variant. It is the per-material *numbers* that need to be in the key, or in the
source.

---

## Game design axioms (already enforced via workflow)

- **Step 0 — fantasy test** (`skills/game/fantasy-test.md`). 5 questions.
  Don't start without passing. A game can score 9/10 on every structural audit
  and still be built on a fantasy nobody wants to play — the audit cannot catch
  that, the test can.
- **Step 0.5 — genre playbook** (`skills/game/playbooks/`). If the
  game is a known genre (TD / survivors / platformer / deckbuilder / ...),
  load the matching `designing-<genre>/SKILL.md` BEFORE drafting the
  design doc. It encodes genre conventions (TD needs 2x speed + wave
  preview; survivors needs evolution pairs; platformer needs coyote time)
  and the death-traps that kill 90% of AI-generated games in that genre.
  Use `genre-router.md` if genre is ambiguous.
- **Forcing-function workflow** (`skills/game/workflow.md`).
  6 steps, design doc first, audit each milestone. Skipping = "toy not a game".
- **Fun compiler gate** (`skills/game/quality/fun-compiler.md`).
  AI defaults to feature soup. Before code, force MDA target, 10-second toy,
  decision spine, peak map, visual/performance contract, and playtest proof.
- **Risky pickups are opt-in** (`skills/game/mechanics/pickup-consent.md`).
  Brushing into a one-shot-die powerup is bad design. The canonical fix is a
  pickup you must deliberately step onto and can walk past.

---

## Architecture rules of thumb

| Question | Rule |
|---|---|
| Should this go in `worlds/<name>/` or `runtime/`? | **Three worlds need it** → runtime. Otherwise inline. |
| Should this game be split into multiple files? | **3000+ line single file OR 3+ distinct modes** → split. Otherwise single file. |
| Should I add real-time shadows? | **< 100 dynamic meshes + camera shows depth (iso / 3/4)** → real shadows. Otherwise drop-shadow or none. See shadow-strategy skill. |
| Should I add PostFX bloom? | **Default no.** Add only if the scene is intentionally dark/moody with isolated bright accents. Bright scenes never. |
| Should I add fog? | **Only when atmosphere is the point.** Snap to "atmospheric", never to "obscuring gameplay". |
| Where do I put a new constant/threshold? | **Top of the file** as a `const`, with a comment explaining *why this value* (cite the design doc trade-off). |
| Where do I put per-stage data? | **Single `STAGES` array** at top of file. Each entry is a config object. `buildStage(idx)` reads from it. |

---

## Workflow discipline

1. **Before coding a new game**: decide the soul (who/where/core verb) and run
   it past the Step 0 fantasy test in `skills/game/fantasy-test.md`. A
   design scratchpad inside the world's directory is useful but optional — there
   is no audit gate. The real check is `harness/capture.mjs`: build both halves, look
   at the frame, fix the worst thing, repeat until it looks alive AND plays well.
2. **Before judging anything that exists outside this repo**: put a reference in
   the frame. **Memory is not a reference.** If the subject is a real thing — an
   animal, a machine, a place, a light — your idea of it is smooth, symmetrical
   and missing the two features that make it recognisable, and every iteration
   against it optimises a target that does not exist. `capture --ref` and
   `inspect --ref` put a photograph in the same sheet as your frames; drop the
   images in `worlds/<name>/refs/`, which is git-ignored, so a reference can
   never quietly become an asset (D4 still holds: copy the form, never the
   pixels). This is scar tissue from a bird that went through six honest
   review rounds and came out generic, because every round was scored against
   the same wrong memory.
3. **Before extracting to lib**: count how many existing scenes have the same
   pattern. **Three or more** = extract. Two = wait.
4. **Before invoking an unfamiliar primitive**: `grep -rn "new <Name>" worlds/`
   to see how others use it.
5. **After every code change visible in browser**: `node harness/capture.mjs
   <world>` → look at the frames (plus `verify.mjs` for console/contract/budget).
6. **When a bug shows up**: ask "is this a new instance of an old axiom?"
   before writing a one-off fix. If yes, the fix is "apply axiom E_N".
   If no, you may have found a new axiom — write it down.

---

## When to add to this file

A new entry belongs here when:
- A bug recurred (you fixed it once, then a few weeks later fixed the same
  shape again) → write the axiom that prevents both
- A primitive extraction taught you about API design at this scale → distill
- A design decision recurred across games → write the rule

What does NOT belong here:
- "In world X, function Y does Z" — that's documentation for one work, and it
  lives in that world's own header comment
- Three.js trivia — that's `skills/three/`
- General game design — that's `skills/game/axioms/`

This file is the bridge: **engineering axioms specific to this codebase's
patterns**, distilled from real mistakes.

## Index of recurring engineering bugs and their fix-axioms

| Symptom | Fix-axiom |
|---|---|
| Blank canvas, only HUD visible | E1 → API verify · E3 → loop crash trace |
| Cars / players move sideways with mesh facing wrong way | E7 → mesh/physics convention align |
| 80+ unique geometries in scene, slow warm-up | E4 → share geometry |
| Whole-screen washes white | E5 → bloom hygiene |
| Player walks through bumped/destroyed obstacle | E6 → single source of truth |
| Bullets never spawn but enemies fire fine | E1 → Cooldown API mismatch |
| First-person camera spins 90° on every move | E8 → snap-turn ≠ rotating cam |
| Scene ported from an older three.js renders dark / oversaturated | E9 → colour shim + A/B vs reference |
| World looks "empty / hazy", raycasts hit nothing, every gate green | E10 → index winding |
| Controls feel wrong, or `act()` seems to do nothing | E11 → drive it from outside, `botplay` |
| A form is mathematically there and invisible in the render | E12 → feature size ÷ quad size |
| A painted texture turns to soup when the camera gets close | E12 → texels per metre ÷ pixels per metre |
| An image is technically fine and reads as the wrong object | E12b → it was composed for another place; draw it twice |
| A caption / toast / flash sits over every capture and the cover | E13 → expire on `dt`, and pair the fade with `visibility` |
| A mirror reflects the sky but nothing standing on it; a light aims nowhere | E14 → the primitive reads the OBJECT's transform, don't bake it into the geometry |
| One small edit re-rolls a whole procedural world | E15 → named `rng.stream(...)`, never one sequence |
| A repeated row renders as one solid band, and no gate objects | E16 → the row's pitch bounds it in one direction only; `probe --rows` |
| A world reports "controls could not be driven", or a device call stalls a run | E17 → nothing a capture cannot hear or see should cost it anything |
| A window/doorway shows only its own reveal; an interior is invisible | E12 → `depth × tan(angle)` vs aperture; and a hole in a solid is a tunnel |
| A world that was fine months ago now fails its own declared key | run `node harness/sweep.mjs` — nothing else re-measures the library |
| A metal renders black and no amount of light fixes it | E18 -> it has nothing to reflect; give the scene an `environment` |
| A shader patch has NO effect and the injection looks right | E19 -> a shared `customProgramCacheKey` shares the uniforms; bake the numbers in |
| New game feels like a "tech demo" not a game | Game design Step 0 fail — re-read fantasy-test.md |

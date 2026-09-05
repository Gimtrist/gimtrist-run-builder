# assembly — the failures that only exist once the parts are together

A part can be perfect and the object still wrong, because three whole classes of defect are
**properties of the assembly** and no part owns any of them:

| the class | why no part can see it | what looks at it |
|---|---|---|
| two parts in the same place | `inspect` reviews each part alone | `probe --rows`, and the pitch arithmetic below |
| a joint that reads as glue | each side is correct; the seam is not | two angles, per joint |
| nothing can see the inside | the parts are not the problem; the sight line is | `probe --scout`, `probe --look/--at` |

This is where the time actually goes on anything with an interior, and it is the step the
loop is most tempted to rush, because by then every sheet is clean and the object *looks*
finished.

## Assemble rough, and early

The gate in `SKILL.md` still holds — `main.js` does not import a part until that part's sheet
is clean — but it is a rule about *quality*, not about *order*. Nothing stops you standing all
the parts up in their real positions the moment they exist, and you should: every defect on
this page is present from the moment the layout is, and each one is cheaper to fix before
anything downstream is built on top of it.

The checks below cost seconds. Run them the first time there is an assembly at all, not at the
end when they become a rebuild.

## 1. Two parts in the same place

The most expensive version of this is silent, and it comes from **one dimension used for two
different measurements**. Anything repeated at a pitch — keys, teeth, blades, posts, windows,
slats, louvres — is bounded by that pitch in the direction the row runs, and bounded by nothing
in the other two. Almost every published dimension of a real part is the *other* one, because
that is the dimension the thing is famous for. Put the famous number in the bounded place and
the whole row is inside itself (docs/principles.md E16).

It does not look like a geometry bug. A row of overlapping objects renders as one continuous
mass, which reads as a *material* problem — and you can spend an afternoon lighting it.

```bash
node harness/probe.mjs <world> --rows
```

Fires on evenly spaced runs only, because scattered instances are supposed to overlap. Then
put the relationship where it cannot come back: `params.js` is the only place that knows both
the pitch and the size, so it is the only place that can throw.

```js
const inItsSlot = (what, w) => {
  if (w > PITCH - CLEARANCE) throw new Error(`params: ${what} is ${mm(w)} on a ${mm(PITCH)} pitch`);
};
```

Non-repeated parts are the harder half and nothing checks them automatically: a mast through a
sail, a lever through a housing, a handle through the body it is bolted to. What catches those
is the full-size frame (`capture --hero`) and knowing which pairs are close enough to be
suspicious. **A pair that is *meant* to interpenetrate is not a bug** — a spigot inside a
socket, a screw in a boss — which is exactly why this cannot be a gate.

## 2. Joints

Two pieces that are each correct still read as glued primitives if they meet badly. The three
fixes, in order of how often they are the answer:

- **Match the tangent.** A swept tube entering a lathe must exit along the lathe's axis, or the
  `top` view shows a visible cusp.
- **Run one past the other.** End the tube ~30mm *inside* the flare so the seam sits where
  nothing looks at it. Butt joints are visible; buried joints are not.
- **Share the radius.** The tube radius and the lathe's first profile radius must be the same
  number, from `params.js` — not two numbers that happen to be close.

Check every seam from **at least two angles**. A joint that holds from one and collapses from
the other is the single most common failure of procedural modelling.

## 3. Sight lines — the part of this that is not about the object at all

The moment an object has an inside — a cutaway, a housing, a cabin, a case with the lid off —
finding a viewpoint stops being a matter of taste and becomes a geometry question. And it is
a question a screenshot cannot answer: **a camera inside a wall and a camera looking at a wall
render the same rectangle.** Hunting a viewpoint by moving the camera and re-rendering is a
slot machine, and it is very easy to lose an afternoon to it.

Ask with rays instead. A whole sphere of candidate viewpoints costs less than one screenshot:

```bash
node harness/probe.mjs <world> --scout x,y,z --dist 0.28    # where CAN this point be seen from?
node harness/probe.mjs <world> --look a,b,c --at x,y,z      # what is standing in this line?
node harness/probe.mjs <world> --shot out.png --look ... --at ... --fov 20
```

`--scout` returns azimuth/elevation pairs that are clear, as numbers you can paste into a
params file. `--look/--at` names what blocks a line, so "it is dark" becomes "the near flange
is 40mm in front of the lens".

Two consequences worth knowing before you go looking:

- **A mechanism at rest is a different shape from a mechanism working.** The sight line you
  care about is usually the working one, so scout it in the state you will photograph:
  `--at-time 0.5` or `--play 12`.
- **When nothing is clear, the answer is often the object, not the camera.** If every
  direction into a space is blocked, the cut is in the wrong place or is not deep enough —
  and moving the cut is a legitimate design decision, not a cheat, as long as it is one cut
  with one reason rather than a hole punched wherever a lens happened to want one.

## 4. Then look at it full size

```bash
node harness/capture.mjs <world> --hero
```

Every check on this page can pass while the object is still wrong at 1920. Interpenetration
between non-repeated parts and thin-surface shadow artifacts both live under the size of a
review-sheet cell — a clipper reached this step with six clean part sheets and every gate
green while its masts were passing straight through the canvas of six sails.

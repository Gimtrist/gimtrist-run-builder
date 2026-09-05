# Framing — how big the subject lands, and what angle it needs

> `hairlines.md` does this arithmetic for things too *thin* to survive the trip to the
> screen. This page does it for the subject itself. Both exist for the same reason: a
> composition you can compute is a composition you do not spend four capture rounds
> discovering.

Do these divisions **before** you place the camera, and write the answers into the file as
constants with the derivation next to them. `seatrain` spent three rounds on a four-car
train that read as one blurry car, and the fix was a number, not taste.

## 1. How big will it be?

three's `PerspectiveCamera.fov` is **vertical**, in degrees. For a full-frame equivalent:

| lens | vertical fov | horizontal fov at 16:9 |
|---|---|---|
| 24 mm | 53° | 82° |
| 35 mm | 38° | 62° |
| 50 mm | 27° | 45° |
| 85 mm | 16° | 28° |
| 135 mm | 10° | 18° |

```
fraction of frame height = (size / distance) / fov_radians
pixels                   = frame_height_px × that
```

A 3.6 m carriage at 100 m through an 85 mm lens: `0.036 / 0.271 = 13%` of frame height —
140 px on a 1080 frame. That is the number to decide on, not "looks about right".

## 2. A long subject: the projection is `sin`, not `cos`

This is the one that costs rounds. For a subject of length `L` seen from beside its axis,
with `α` = the angle between the line of sight and that axis, the width it projects is

```
projected width = L · sin(α)          ← NOT cos
```

because the rest of `L` is running away from you in depth. Which gives the only number
that actually matters for a train, a ship, a wall of shops, a bridge:

```
on-screen aspect ratio = (L / height) · sin(α)
```

A four-car train is `L/h ≈ 20`, so:

| α | aspect | reads as |
|---|---|---|
| 3° | 1.0 : 1 | a blob. Could be one car |
| 8° | 2.8 : 1 | a short train |
| 13° | 4.5 : 1 | four cars, clearly |
| 30° | 10 : 1 | a long horizontal line |

**Note what does not appear on the right-hand side: distance.** Moving the camera back
does not make a train read as a train; it makes a small blob. Only `α` does — which means
the lever is the camera's **offset from the subject's axis**, and you should pick that
before you pick the distance:

```
offset = distance × sin(α)
```

## 3. On a long lens you cannot have both the vanishing point and the whole subject

Widen `α` to make the length read, and the near end of the subject swings toward the frame
edge fast, because it is much closer than the far end. There is a window, and outside it
one of the two leaves:

```
bearing of a point = atan2(lateral offset, distance along)
```

Work both ends of the subject and the vanishing direction into bearings, check the spread
against your horizontal fov, and slide the lens axis until all three fit — or decide, on
purpose, which one you are giving up. `seatrain` fits a 72 m consist and the rails'
vanishing point inside 28° with 22 m of offset and the axis 9.8° off the rails. At 12 m of
offset the train was a blob; at 28 m its rear ran off the left edge.

## 4. Horizon, and where the frame's weight sits

```
camera pitch = (0.5 − horizon_fraction_from_top) × fov
```

Sky at two thirds on an 85 mm lens is a 2.7° tilt — and on a long lens that is the whole
budget: the visible sky is *ten degrees tall*. Anything you author above that (a gradient
stop, a cloud deck, an aurora) is not in the picture. `seatrain` had the cyan of its
"pink–cyan–gold" sky sitting at 12.8° elevation for three rounds, one and a half degrees
above the top edge, and the frame read gold-to-mauve.

Same trap for a low camera: at eye height `y` above a plane, the bottom edge of frame lands
at `y / tan(pitch + fov/2)` — 7 m for a camera 0.62 m up. Everything nearer than that is
not in shot, however carefully it is modelled.

## 5. Then shoot it and measure

The arithmetic gets you a first frame worth judging; it does not replace looking.

```bash
node harness/capture.mjs <name> --hero          # full size — a contact sheet cannot verify
```

Measure the subject in the frame against what you predicted. If they disagree, one of the
inputs is wrong (usually `α`, occasionally that `fov` is vertical), and finding that is a
minute. Tuning the camera by hand until it looks right is an afternoon, and it leaves the
next subject in this world to be discovered from scratch.

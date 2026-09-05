# sound — synthesised from the same model as the form

D4 covers sound exactly as it covers geometry: **no samples.** A recording is an external asset,
and it is also a recording of a *different* object from the one on screen. What you build
instead is a small synthesiser whose inputs are the numbers the world is already made of.

That last part is the whole idea, and it is not a purity argument — it is where the quality
comes from. A world that makes a noise almost always contains the reason for the noise:

| the world has | the sound falls out of |
|---|---|
| a string, a bar, a plate | its length, thickness and stiffness → the partials, and how far from harmonic they are |
| a struck or plucked thing | **where** it is struck: a mode with a node at the strike point cannot be excited at all |
| a rotating thing | rev × blade or tooth count → the fundamental; the rest is the load on it |
| an enclosure | its size → the resonance it adds to whatever happens inside it |
| a damper, a brake, a mute | how fast it takes the energy back out |

Reach for the geometry before you reach for a filter. Anything you can derive stays correct
when you change the object, and anything you tune by ear has to be re-tuned every time the
object moves — the same argument `params.js` makes about reach and clearance.

## Three things every world that makes noise has to get right

**1. Nothing until a gesture.** No browser starts an audio context without one, so build the
context lazily inside the first key press, pointer press or button click. Not at load.

**2. Silence under the harness — and it is not free to skip this.** A headless Chromium has no
audio device and asks for one anyway: `new AudioContext()` takes about **2.6 seconds** there
against ~20ms on a real machine, which is long enough to time out the checks queued behind it.
A capture run cannot hear anything, so it must not pay for anything (docs/principles.md E17):

```js
if (new URLSearchParams(location.search).get('capture') === '1') return false;   // no device here
```

**3. Two clocks, and do not confuse them.** Audio schedules against the AudioContext's own
clock, in real seconds, and that is correct — `ctx.currentTime + 0.05` is how you place an
event precisely. But **everything visible stays on `dt`** (E13). The harness burns eight
simulated seconds in a couple of hundred real ones; a world that drives a moving part off the
audio clock will animate at the wrong speed under capture, or not at all. The rule is: the
simulation decides *that* a thing happened, the audio clock decides *when it is heard*.

## The shape that works

One synth object for the world, with a voice per sounding thing:

- **A voice is a few oscillators plus one gain**, and the gain is what you stop. Ramp to a small
  positive value, never to zero — `exponentialRampToValueAtTime` cannot reach 0, and a hard
  `setValueAtTime(0)` clicks.
- **Cap the voices** and steal the oldest. Ten fingers, a pedal and a decay tail add up faster
  than you expect.
- **One compressor for the whole instrument.** Many simultaneous voices must not clip, and most
  real instruments do their own version of this anyway.
- **Attack is where the identity is.** A note without its onset — the knock of felt, the scrape
  of a bow, the click of a mechanism — reads as an organ whatever you do to the sustain. A short
  filtered noise burst is usually enough.
- **Velocity is not volume.** Harder does not only mean louder, it means *brighter*: more
  partials survive. If velocity only scales gain, everything sounds the same size.

## The honesty rule

**You cannot hear it, and you must say so.** Everything a headless run can check about sound is
structural — event counts, timing, that nothing is left ringing when the piece ends, that the
context was never created under capture. Timbre, balance and whether it is pleasant are outside
every gate in this repo. Report what you verified and report that the listening is the user's.

That also makes the parameters worth keeping separate and named — partial count, decay per
register, inharmonicity, onset brightness, release time — because the review note you will
get back is "too bright" or "the bass is muddy", and you want one number to move for each.

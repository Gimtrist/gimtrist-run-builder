# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
make serve    # Start dev server at http://localhost:8804
make kill     # Stop the server

# ES modules require a server — file:// will not work
python3 -m http.server 8804
```

No build step, no npm install, no tests.

## Architecture

Modular ES module app. `js/app.js` is the entry point; it imports from all other modules and exposes functions on `window.*` for inline HTML `onclick` handlers.

**Module responsibilities:**

- `js/state.js`: Shared mutable `state` object (`config`, `currentRotation`, `spinning`, `settingsOpen`, `helpOpen`), `TEMPLATES`, `DEFAULT_CONFIG`, `PALETTE`, and all serialization logic (localStorage key: `wheelConfig`).
- `js/wheel.js`: Canvas rendering (`drawWheel`), spin animation (`spin`, `spinToTarget`), winner calculation (`getWinnerIndex`), and result overlay (`showResult`/`closeResult`).
- `js/settings.js`: Settings drawer open/close, segment row DOM builder, `applySettings` (persist + update URL hash), `loadTemplate`, `resetToDefault`, `copyShareLink`.
- `js/events.js`: `bindEvents` wires canvas click, keyboard shortcuts (Space/Enter = spin, letter keys = rigged spin to target, `?` = help menu, `8` = explosion easter egg), and help menu.
- `js/utils.js`: `escHtml`, `deepClone`, `segmentKey`, `toast`, `spawnConfetti`.

## Config serialization

Config is serialized as: `btoa(encodeURIComponent(JSON.stringify(cfg)))` and stored in the URL hash as `#c=<encoded>`. Load priority on init: **URL hash → localStorage (version must match) → DEFAULT_CONFIG**.

`applySettings()` calls `history.replaceState` to keep the URL hash current after every save. `copyShareLink` encodes the current (possibly unsaved) config at call time.

## Segment data model

```js
{
  id: Number,        // unique, auto-incremented from state.nextId
  emoji: String,     // shown before text; optional
  text: String,
  color: String,     // hex
  message: String,   // result message; pipe-separated (|) strings render as "excuse cards"
  key: String,       // optional override for keyboard rig shortcut (defaults to text[0])
}
```

Config root fields: `title`, `icon`, `winMessage` (template: `{result}`, `{emoji}`), `segments[]`, `version`.

## Winner calculation

```js
// Pointer is fixed at top (−π/2). Segments are indexed from 0 starting at top.
const norm = ((-rotation) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
return Math.floor(norm / segAngle) % N;
```

`spinToTarget(idx)` computes the exact delta rotation needed to land the pointer in the center of segment `idx`, then adds 5 full rotations for visual effect.

## Settings drawer

Toggled by `.closed` CSS class on `#settings-drawer`. Becomes full-screen on mobile. Segment rows are rebuilt from scratch each time the drawer opens (`renderSettingsForm`). Live `input` events on each row update `state.config.segments` and re-draw the canvas immediately. No Apply needed for live preview.

## Preset templates

Defined in `state.js` as `TEMPLATES` (`blameGame`, `pizza`). `DEFAULT_CONFIG` is a deep clone of `blameGame`. `loadTemplate(name)` replaces `state.config`, redraws, saves to localStorage, and clears the URL hash.

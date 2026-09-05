---
name: Ping vs Pong
description: "Classic Pong reimagined with clean, minimalist design. Black, white, and cyan — no neon, no glow."
version: 1.0
---

## 1. Color System

**Palette: black, white, cyan only.**

| Token | Value | Usage |
|-------|-------|-------|
| `--pp-bg` | `#000000` | Page background |
| `--pp-surface` | `#111111` | Cards, panels, button backgrounds |
| `--pp-text` | `#ffffff` | Primary text |
| `--pp-text-dim` | `#888888` | Secondary/muted text |
| `--pp-accent` | `#00d4ff` | Links, accents, player paddle |
| `--pp-border` | `#2a2a2a` | Card/panel borders |

No gradients. No shadows. No glow. No neon.

## 2. Typography

**Font:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

| Style | Size | Weight | Line-height | Letter-spacing |
|-------|------|--------|-------------|----------------|
| Display (page title) | 36px | 700 | 1.2 | -0.96px |
| Heading (section) | 25px | 700 | 1.2 | -0.54px |
| Body | 16px | 400 | 1.5 | 0 |
| Small | 14px | 400 | 1.5 | 0 |

## 3. Spacing Scale (base: 4px)

| Step | Value |
|------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 36px |
| xxl | 48px |

## 4. Border Radius

| Token | Value |
|-------|-------|
| sm | 4px |
| md | 8px |
| lg | 12px |

## 5. Motion

| Token | Value | Usage |
|-------|-------|-------|
| fast | 200ms | Button hover, micro-interactions |
| base | 500ms | Overlay fade |
| slow | 700ms | Countdown transitions |

Easing: `ease-out` for all transitions.

## 6. Components

### Buttons
- `.game-btn`: surface bg, accent border, white text
- Hover: accent bg, black text
- Focus: 2px accent outline, 2px offset
- No shadow, no glow
- Min 44x44px touch target

### Canvas
- Black background
- 4px solid accent border
- 8px border-radius
- Centered in page

### Score
- White, bold, large (25px on game screen)
- Separator: cyan
- Animated state: cyan color, slight scale

### Overlay
- Black semi-transparent background (rgba(0,0,0,0.9))
- Centered content
- Title: white, display size
- Message: white, body size, dimmed secondary text
- Button: accent bg on primary actions

## 7. Layout

### Landing page
- Centered content, max-width 600px
- Title at top
- Description card (surface, border)
- CTA button below
- How-to section below CTA
- Footer at bottom

### Game page
- Back link top-left
- Title centered
- Score centered above canvas
- Canvas centered, responsive
- Controls (restart, pause, mute) centered below canvas
- Full-screen overlay for menus

## 8. Responsive

- Mobile first: 100% viewport width
- Canvas: max 820px wide, min 150px
- Breakpoints: 600px, 900px
- Font sizes scale down on mobile (25px heading → 20px, 36px title → 28px)

## 9. Accessibility

- All interactive elements: min 44x44px
- Focus indicators: 2px accent outline
- Semantic HTML: `<main>`, `<section>`, `<footer>`, `<button>`
- Color contrast: white on black = 21:1 (AAA)
- Cyan on black = 7.5:1 (AAA)

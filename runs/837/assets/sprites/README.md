# Sprite Assets

## Current Character Sheet

- `student-sprites.png` is a local original placeholder sheet for the lab students.
- The sheet uses 8 front-facing 32x32 pixel characters and is rendered through CSS with nearest-neighbor scaling.
- It is used instead of CSS-built block people so future character packs can be swapped by replacing the sheet and frame offsets.

## Researched References

- [Kenney Tiny Town](https://kenney.nl/assets/tiny-town): CC0. Safe as an environment/reference pack; useful for props and tiny top-down visual language, but its people are too small and town-like for the current lab students.
- [Free 16x16 Puny Character Sprites by Shade](https://merchant-shade.itch.io/16x16-puny-characters): CC0. Better direction for cute small characters; not imported yet because the itch download flow needs a second confirmed file download step.
- [Sprout Lands Asset Pack](https://cupnooble.itch.io/sprout-lands-asset-pack): visually close to cozy life-sim pixel art, but the free/premium redistribution terms are not as clean for a public repo, so it should only be used after a license check and likely as purchased project art.

## Integration Notes

- Main lab sprites use `.student-sprite .sprite-frame`.
- Student list and detail avatars use `.mini-face`.
- `game.js` maps each student to a stable sprite frame through `studentSpriteOffset`.

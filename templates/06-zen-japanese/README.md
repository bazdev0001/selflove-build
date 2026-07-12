# Lumière Yoga — Zen / Japanese "Ma" template

A single-page marketing site for a premium self-love yoga brand, built as a portfolio-grade
showcase of the **Zen / Japanese "Ma" (negative space)** aesthetic.

## Style

The design is organised entirely around *ma* (間) — the meaningful emptiness between things.
Every choice serves calm:

- **Vast whitespace** and generous vertical rhythm; content is allowed to breathe.
- **Washi-paper palette** — warm off-whites (`#f4f1ea`, `#ece7dc`) rather than clinical white.
- **A single sumi-ink accent** (`#23201b`) — no second colour, ever. Restraint is the brand.
- **Hairline dividers** (1px, softly faded gradients) instead of boxes and cards.
- **Deliberate asymmetry** — the hero, philosophy split, and offering rows are intentionally
  off-balance, the way a tokonoma alcove is.
- **Hand-drawn enso circle** (inline SVG) that slowly draws itself in on load.
- Japanese numerals (壱 弐 参), kanji motifs (灯 lamp, 間 ma), used sparingly as texture.

## Fonts (Google Fonts, via `<link>`)

- **Cormorant Garamond** — a refined, high-contrast serif for display and long-form voice.
- **Zen Kaku Gothic New** — a quiet Japanese-designed sans for UI, labels, and body support.

Both load with `preconnect` for performance and `display=swap` for resilience.

## Why this is $10k-tier

- **Real brand copy** throughout — hero, philosophy, three priced offerings, teacher bio,
  three testimonials, newsletter CTA, and a full footer. No lorem ipsum.
- **Sophisticated CSS**: custom properties, a fluid `clamp()` type scale, fluid spacing,
  `color-mix()` glass header, asymmetric CSS grid, and a coherent motion language.
- **Subtle, slow motion**: IntersectionObserver fade/rise reveals with a gentle stagger, a
  self-drawing enso, and a hairline that appears on the header only once you scroll.
- **Accessible & semantic**: skip link, visible focus rings, semantic landmarks, alt text,
  reduced-motion support, and AA-contrast ink on paper.
- **Fully responsive** from 320px up, with images used *very* sparingly (two Unsplash photos,
  desaturated to sit inside the palette) so the whitespace stays the hero.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Semantic HTML5 markup + inline SVG (logo, enso). |
| `styles.css` | All styling. No frameworks, no preprocessor. |
| `script.js`  | ~60 lines: scroll reveals, header hairline, newsletter confirmation. |
| `README.md`  | This file. |

## Preview

No build step. Just open the file:

```bash
# from this folder
open index.html          # macOS
xdg-open index.html      # Linux
```

Or serve it locally for correct font/asset caching:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Notes

- The newsletter form is front-end only (submission is intercepted and confirmed in-page);
  wire the `action` to your ESP when going live.
- Images are hot-linked from Unsplash for the demo. For production, download, optimise, and
  self-host them, and confirm licensing.

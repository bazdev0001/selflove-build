# Lumière Yoga — Organic Botanical Wellness

A hand-crafted, single-page marketing site for a premium self-love yoga studio.
Style **#2 — Organic Botanical Wellness**: nature-led, warm and earthy, soft
organic blob shapes, botanical SVG motifs, and generously rounded forms. Think
high-end spa/wellness brand.

## Style at a glance
- **Palette:** sage & deep moss greens, terracotta / clay, warm cream & sand,
  with a soft gold accent. Cohesive, low-contrast-where-calm, accessible-contrast
  where it counts (dark text on cream, cream text on moss/terracotta).
- **Shapes:** morphing CSS blobs (`border-radius` animation), organic SVG wave
  section dividers, asymmetric leaf-cut image masks, pill buttons.
- **Motifs:** inline SVG sprite (leaf, sprig, sun) reused via `<use>`, plus an
  inline SVG logo mark (a leaf inside a circle).
- **Imagery:** live Unsplash yoga/nature photography with sizing params
  (`auto=format&fit=crop&w=…&q=…`), all with descriptive `alt` text.

## Fonts (Google Fonts, via `<link>`)
- **Fraunces** — a soft, high-contrast humanist serif for headings, quotes and
  prices (opsz axis gives it that warm editorial feel).
- **Mulish** — a rounded, friendly humanist sans for body and UI.

## Why it's $10k-tier
- Real, cohesive brand copy end to end — hero, philosophy, three priced
  offerings, teacher bio, testimonials, newsletter, full footer. No lorem ipsum.
- Sophisticated CSS: custom-property design tokens, `clamp()` fluid type &
  spacing scales, real responsive CSS grid/flex, `color-mix()`, tasteful hover
  and scroll-reveal motion, animated organic blobs, SVG wave dividers.
- Semantic HTML5 (`header`/`main`/`section`/`article`/`figure`/`nav`/`footer`),
  labelled landmarks, `sr-only` labels, focus-visible states, and full
  `prefers-reduced-motion` support.
- Fully responsive from wide desktop down to small phones (nav, grids and the
  featured card all adapt).
- Progressive enhancement: `script.js` only adds polish (staggered reveals +
  inline newsletter confirmation); with JS off, all content stays visible.

## Files
- `index.html` — markup + inline SVG sprite/logo
- `styles.css` — all styling (design tokens, layout, motion, responsive)
- `script.js` — IntersectionObserver scroll-reveal + newsletter UX (optional)

## Preview
No build step. Either open the file directly:

```
open index.html      # macOS
xdg-open index.html  # Linux
```

or serve it locally (recommended, so fonts/images load cleanly):

```
cd 02-organic-botanical
python3 -m http.server 8080
# then visit http://localhost:8080
```

Requires an internet connection for the Google Fonts and Unsplash imagery.

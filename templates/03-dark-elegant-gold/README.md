# Lumière Yoga — Style 03: Dark Elegant / Gold

A single-page marketing site for a premium self-love yoga brand, built in the
**Dark Elegant / Gold** aesthetic: deep charcoal / near-black backgrounds, warm
champagne-to-antique-gold accents, a high-contrast refined serif display, film
grain, glowing gradients and cinematic restraint — the feel of a luxury hotel or
private retreat brand.

## Files
- `index.html` — semantic HTML5, hand-authored copy, inline SVG monogram + icons
- `styles.css` — all styling (design tokens, fluid type, responsive grids, motion)
- `script.js` — scroll-reveal, sticky-header state, newsletter confirmation (no libs)
- `README.md` — this file

## Fonts (Google Fonts, loaded via `<link>`)
- **Cormorant Garamond** — display serif for headlines, prices and pull-quotes.
  Elegant, high-contrast, editorial; carries the "luxury" register.
- **Jost** — geometric humanist sans for body, navigation and eyebrows. Clean and
  quiet so the serif can lead.

## Sections
Fixed nav · cinematic hero (zoom-in image, gold scrim, stat bar) · animated ethos
marquee · philosophy/story with three "pillars" · three priced offerings
(Membership £48/mo · Golden Hour Series £390 · Provence Retreat £2,850) with a
featured card · three testimonials · founder bio (Isabelle Moreau) with credential
badge · newsletter CTA · rich footer.

All copy is bespoke — no lorem ipsum.

## Why this is $10k-tier
- **Cohesive design system**: CSS custom properties for palette, a modular spacing
  scale, and a `clamp()`-based fluid type scale — everything scales in proportion.
- **Considered detailing**: gold gradient text/borders, layered radial glows, a
  subtle SVG film-grain overlay, a slow hero Ken-Burns zoom, and an infinite ethos
  marquee — the small touches that read as "expensive."
- **Motion with taste**: IntersectionObserver scroll-reveals with a gentle stagger,
  refined easing (`cubic-bezier(.22,1,.36,1)`), hover lift on cards/buttons — all
  disabled under `prefers-reduced-motion`.
- **Accessible on dark**: cream text tuned for WCAG contrast on charcoal, visible
  focus rings, semantic landmarks, `alt` text on every image, and a visually-hidden
  form label.
- **Responsive**: real CSS grid/flex layouts collapse cleanly from 3-up to 1-up
  across breakpoints; hero uses `svh` for correct mobile sizing.
- **Performance-minded**: hero image `fetchpriority=high`, all others lazy-loaded;
  zero frameworks, ~one small vanilla JS file.

## Preview
No build step. Either:

```bash
# open directly
xdg-open index.html        # Linux
open index.html            # macOS

# or serve locally (recommended, for fonts/relative paths)
python3 -m http.server 8080
# then visit http://localhost:8080
```

Images load live from Unsplash, so an internet connection is needed for the
photography to appear.

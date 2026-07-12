# Lumière Yoga — Cinematic Full-Bleed Immersive (Template #8)

A $10,000-tier single-page website for a premium self-love yoga brand. Hand-crafted
HTML/CSS/JS with **no frameworks** — everything below is authored by hand.

## The style
**Cinematic Full-Bleed Immersive.** The page reads like a luxury-travel film:

- Edge-to-edge, full-viewport imagery in every major section (hero, story, teacher,
  testimonials, newsletter).
- Bold typography overlaid directly on imagery, with refined multi-stop overlay gradients
  ("scrims") that guarantee legible, accessible contrast over photos.
- Scroll-driven **parallax** on background layers and a **scroll-reveal** system that fades
  and lifts content as it enters the viewport.
- A sticky-feeling pinned story section, a dark stat band for rhythm, and a full-bleed
  split teacher portrait — dramatic, emotive, retreat-brand mood throughout.
- Animated scroll cue, glassy translucent nav that solidifies on scroll, hover micro-motion
  on cards and links.

## Fonts (Google Fonts via `<link>`)
- **Cormorant Garamond** — display serif for headlines, prices, and pull-quotes (the
  editorial, luminous voice of the brand).
- **Jost** — geometric sans for body, nav, eyebrows, and UI (clean, calm counterpoint).

## Why this is $10k-tier, not generic
- **Real brand copy** end to end — hero, philosophy story, three priced offerings
  (£680 / £2,950 / £39·mo), teacher bio with a signature quote, three testimonials, a
  newsletter CTA, and a full footer. Evocative, on-brand, zero lorem ipsum.
- **Sophisticated CSS**: custom properties, a full `clamp()` fluid type scale, fluid
  spacing, full-bleed layout, layered gradient scrims tuned per image, cohesive
  warm-luminous palette, and consistent easing.
- **Motion done right**: `IntersectionObserver` reveals + `requestAnimationFrame`-throttled
  parallax, and a full `prefers-reduced-motion` fallback that disables all of it.
- **Accessible & semantic**: HTML5 landmarks, descriptive `alt` text on every image,
  visually-hidden form label, keyboard-focus states, contrast-safe overlays.
- **Fully responsive**: full-bleed sections collapse gracefully — 3-up card grids and
  testimonial columns stack, the teacher split becomes vertical, nav condenses on mobile.
- **Progressive enhancement**: the site is complete and readable with JavaScript disabled;
  JS only adds polish.

## Images
All photography loads from real `https://images.unsplash.com/` URLs at large sizes with
`auto=format&fit=crop&w=…&q=80` params (yoga / retreat / nature themes). Swap the URLs to
rebrand. Inline SVG is used for the logo/wordmark and the scroll-cue icon (no icon fonts).

## Preview
No build step. Either:

```bash
# open directly
open index.html            # macOS
xdg-open index.html        # Linux

# or serve locally (recommended, avoids any file:// quirks)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files
- `index.html` — semantic markup + inline SVG
- `styles.css` — all styling (custom properties, fluid type, full-bleed, reveals)
- `script.js` — nav state, scroll-reveal, parallax, newsletter enhancement
- `README.md` — this file

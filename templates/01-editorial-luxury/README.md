# Lumière Yoga — Editorial Luxury Minimalism

A single-page marketing site for a premium self-love yoga brand: restorative
classes, private practice, and women's wellness retreats.

## Style

**Editorial Luxury Minimalism** — the visual language of Aesop, Kinfolk and
high-end fashion editorials. Elegant serif display type against a clean
grotesque sans, generous whitespace, an asymmetric editorial grid, a muted
bone-and-ink palette lifted by a single restrained accent (terracotta clay),
and refined micro-interactions.

## Fonts (Google Fonts, loaded via `<link>`)

- **Fraunces** — serif display for headlines, prices, pull-quotes (optical
  sizing, light italics for accent words).
- **Inter** — grotesque sans for body copy, navigation and UI.

## Palette

| Token | Hex | Use |
|-------|-----|-----|
| Bone | `#f4efe6` | page background |
| Paper | `#fbf8f2` | cards / inputs |
| Ink | `#201d18` | text, dark sections |
| Accent (clay) | `#b1552f` | single restrained accent |

## What makes it $10k-tier

- **Real, brand-specific copy** throughout — hero, philosophy, three priced
  offerings, a founder bio, three testimonials, newsletter, footer. No lorem.
- **Sophisticated CSS**: custom properties, fully fluid typography with
  `clamp()`, a modular spacing scale, CSS grid/flex asymmetric layout,
  `color-mix()`, an editorial running marquee, and tasteful hover/scroll motion.
- **Refined micro-interactions**: IntersectionObserver scroll-reveal with
  stagger, image zoom on card hover, animated underlines, sticky header that
  gains a hairline border on scroll.
- **Accessible & semantic**: HTML5 landmarks, skip link, visible focus states,
  descriptive `alt` text, `prefers-reduced-motion` support, live-region form
  feedback, AA-contrast palette.
- **Fully responsive** from mobile to wide desktop with intentional breakpoints
  (the feature retreat card spans full width on tablet).
- Real Unsplash CDN imagery with sizing params + inline SVG logo mark.

## Preview

No build step, no dependencies. Just open the file:

```bash
open index.html        # macOS
xdg-open index.html    # Linux
```

Or serve it: `python3 -m http.server` then visit `http://localhost:8000`.

## Files

- `index.html` — markup & copy
- `styles.css` — full design system
- `script.js` — scroll-reveal, header state, newsletter validation (vanilla JS)

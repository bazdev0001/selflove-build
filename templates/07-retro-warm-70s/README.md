# Lumière Yoga — Retro-Warm 70s Revival

A single-page marketing site for a fictional boutique self-love yoga studio with 1970s soul.
Hand-crafted HTML5 + CSS, one small progressive-enhancement JS file. No frameworks, no build step.

## Style

**Retro-Warm 70s Revival.** A nostalgic earth palette — mustard, rust, avocado and cream — paired
with groovy rounded display serifs, arch and pill shapes, thick ink outlines with hard offset
shadows, a warm film-grain texture and a rotating sun badge. Modern and tasteful rather than kitsch:
a wellness brand that feels like a honeyed 4pm daydream.

Signature retro touches:
- **Arch-topped image masks** (`border-radius: 50% 50% 0 0 / 90% 90% 0 0`) on hero and teacher.
- **Tilted marquee** ribbon of class names scrolling across the page.
- **Film-grain overlay** via an inline SVG turbulence filter (`.grain`).
- **Rotating circular sun badges** with curved `textPath` typography.
- **Sticker / hard-shadow buttons** (offset ink shadows that shift on hover).
- Warm `sepia()` + `saturate()` photo treatment so every Unsplash image reads golden.

## Fonts (Google Fonts via `<link>`)

- **Fraunces** — the groovy, high-contrast display serif (headlines, prices, quotes).
- **Bricolage Grotesque** — a warm humanist grotesque for body and UI.

## Why this is $10k-tier

- **Real brand copy** throughout — hero, about, three priced offerings (£18 / £145 / £20),
  teacher bio, three testimonials, newsletter CTA and a full footer. No lorem ipsum, consistent
  warm and characterful voice.
- **Sophisticated CSS**: custom-property design tokens, `clamp()` fluid type and spacing, layered
  radial background glows, retro shape masks, cohesive spacing rhythm and a considered hover/scroll
  motion language.
- **Accessible**: semantic landmarks, alt text on every image, visible focus rings, sufficient
  contrast, `prefers-reduced-motion` support, and a form that works and confirms without a backend.
- **Fully responsive** from wide desktop down to small phones via two breakpoints.

## Preview

No build required. Either:

```bash
# option A — just open it
open index.html            # macOS
xdg-open index.html        # Linux

# option B — serve locally (recommended, for fonts/caching)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files

- `index.html` — semantic markup + inline SVG logo/icons.
- `styles.css` — all styling, design tokens and responsive rules.
- `script.js` — IntersectionObserver scroll reveals + newsletter confirmation (progressive enhancement; the page is fully usable without JS).

Images are hot-linked from Unsplash. Replace with licensed/owned photography before any production use.

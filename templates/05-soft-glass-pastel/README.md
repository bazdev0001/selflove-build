# Lumière Yoga — Soft Glass / Pastel Glassmorphism

A $10k-tier single-page marketing site for a premium self-love yoga brand.
Hand-crafted HTML + CSS + a touch of vanilla JS. No frameworks, no build step.

## Style
**Soft Pastel Gradient / Glassmorphism.** Dreamy multi-stop pastel mesh gradient
(blush · lilac · sky · peach) with slowly drifting blurred colour orbs, frosted-glass
cards (`backdrop-filter: blur()`), soft plum-tinted shadows, generous rounded geometry,
gentle floating + scroll-reveal motion. Serene, contemporary, aspirational.

## Fonts (via Google Fonts `<link>`)
- **Fraunces** — display / headings (soft optical serif, italic accents)
- **Plus Jakarta Sans** — body / UI (friendly modern geometric sans)

## Why it reads $10k-tier
- **Real brand copy** throughout — hero, philosophy, three priced offerings, teacher bio,
  five-star testimonials, newsletter CTA, full footer. No lorem ipsum.
- **Sophisticated CSS** — custom properties design system, animated multi-radial mesh
  gradient + `mix-blend-mode` drifting orbs, genuine glassmorphism with a `@supports`
  opacity fallback, `clamp()` fluid typography, responsive CSS grid/flex, tasteful
  float and IntersectionObserver reveal motion.
- **Accessibility** — deep-plum ink chosen for contrast over light frosted glass,
  semantic HTML5 landmarks, descriptive `alt` text, visible focus states, `sr-only`
  labels, and full `prefers-reduced-motion` support.
- **Detail craft** — inline SVG logo/blobs, floating info chips, live-class badge,
  marquee, gradient-text, hover micro-interactions.

## Imagery
Live yoga/wellness photography from `images.unsplash.com`; decorative blobs and the
lotus-inspired logo are inline SVG with pastel gradients.

## Preview
No build required — just open the file:

```bash
open index.html          # macOS
xdg-open index.html      # Linux
# or serve it:
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Files
- `index.html` — semantic markup + inline SVG
- `styles.css` — full design system, glass, gradients, responsive
- `script.js` — scroll reveal, blob parallax, newsletter confirmation
- `README.md` — this file

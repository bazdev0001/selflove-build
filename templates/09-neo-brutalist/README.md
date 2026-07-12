# Lumière Yoga — Template 09: Refined Neo-Brutalist

A $10k-tier, single-page marketing site for a premium self-love yoga brand.
Hand-crafted HTML5 + CSS, with a small progressive-enhancement `script.js`.
**No frameworks. No build step.**

---

## The style

**Refined Neo-Brutalism** — raw structural aesthetic done tastefully.

- **Exposed grid & structure** — visible 3–4px black borders everywhere; blocks read as physical objects.
- **Hard offset shadows** — chunky `6–14px 0` drop shadows (no blur) that snap on hover.
- **One punchy accent** — a single sunburnt orange (`#ff5a2c`) against bone/ink. High contrast, restrained.
- **Grotesque + mono + editorial serif type** — Space Grotesk (UI), Space Mono (labels/meta), Fraunces (display italics) for a gallery/fashion-brand feel rather than "ugly brutalism."
- **Confident motion** — an infinite mono marquee, hover lift on cards, subtle image zoom, tilt-to-straighten photo frames, and IntersectionObserver scroll reveals.
- Edge, but usable — generous spacing, readable line lengths, and wellness warmth keep it inviting.

## Fonts (Google Fonts, via `<link>`)

- **Fraunces** — display / editorial headlines (9..144 optical, italic 900)
- **Space Grotesk** — body & interface
- **Space Mono** — labels, prices, eyebrows, marquee

## Why it's $10k-tier

- **Real brand copy** throughout — hero, manifesto + three tenets, three priced offerings
  (Foundations Flow €18, Self-Love Series €240, Radiance Retreat €690), founder bio,
  three testimonials, newsletter CTA, and a full footer. Zero lorem ipsum.
- **A designed system, not ad-hoc CSS** — custom properties for palette, border weights,
  and a coherent shadow scale; `clamp()` fluid type & spacing top to bottom.
- **Distinct sections with alternating ink/paper/accent blocks** so the page has rhythm and never feels like a template.
- **Accessible** — semantic HTML5 landmarks, skip link, `sr-only` labels, visible focus rings,
  AA-contrast pairings, `prefers-reduced-motion` honored, meaningful `alt` text, and a real
  (client-side validated) newsletter form.
- **Responsive** — single-column reflow at each breakpoint; nothing overflows on mobile.
- **Custom inline SVG** mono logo/mark and iconography — no image icons, no icon fonts.
- **Progressive enhancement** — everything works with JS disabled; `script.js` only adds reveal
  motion and form feedback.

## Preview

It's static — just open it:

```bash
# simplest
open index.html            # macOS
xdg-open index.html        # Linux

# or serve locally (recommended, for correct font/asset loading)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files

| File         | Purpose                                             |
|--------------|-----------------------------------------------------|
| `index.html` | Semantic markup, content, inline SVG logo/icons     |
| `styles.css` | Full design system (tokens, layout, motion, a11y)   |
| `script.js`  | Scroll reveals + newsletter validation (optional)   |
| `README.md`  | This file                                           |

Images are hot-linked from Unsplash (`images.unsplash.com`) with sizing params;
swap the URLs for owned assets before production.

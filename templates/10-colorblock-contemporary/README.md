# Lumière Yoga — Bold Color-Block Contemporary

A $10k-tier single-page marketing site for a premium, body-positive **self-love yoga brand**.
Hand-crafted HTML5 + CSS with a sprinkle of vanilla JS. No frameworks, no build step.

## Style — #10 Bold Color-Block Contemporary
Confident, saturated color blocking in the spirit of modern DTC wellness brands
(Recess / Ritual energy). Full-bleed color sections, hard 3px outlines, offset "hard shadows,"
geometric stickers and blobs, a scrolling marquee band, and playful-yet-premium sectioning.

**Brand palette:** Tangerine `#ff5c39` · Violet `#6c4bf4` · Lemon `#ffd23f` (+ Sky `#7ad0e6` accent),
grounded on warm cream `#fff6ee` and near-black plum ink `#17131f`.

## Fonts (Google Fonts, via `<link>`)
- **Fraunces** — display serif for expressive, high-contrast headlines (the "premium" note).
- **Space Grotesk** — geometric sans for UI, body and labels (the "contemporary" note).

## Why it reads as $10k-tier
- Real, on-brand copy end to end — hero, manifesto, 3 priced offerings, teacher bio, 4 testimonials,
  newsletter CTA, full footer. No lorem ipsum.
- Sophisticated CSS: design-token custom properties, `clamp()` fluid type scale, a reusable
  color-block section system, geometric shapes (blobs, spinning sticker, chips), and cohesive
  spacing rhythm.
- Tasteful motion: hover lifts, animated blob, infinite marquee, IntersectionObserver scroll-reveal —
  all disabled under `prefers-reduced-motion`.
- Accessible: semantic HTML5 landmarks, skip link, visible focus states, alt text on every image,
  high-contrast color pairings.
- Fully responsive from large desktop down to small mobile.

## Images
Live yoga photography from `https://images.unsplash.com/`, framed inside color-blocked cards.
Logo and all icons are inline SVG (no icon fonts / external assets).

## Preview
No build required — it's static. Either:
- Open `index.html` directly in a browser, **or**
- Serve the folder (nicer for fonts/caching):
  ```bash
  cd 10-colorblock-contemporary
  python3 -m http.server 8080
  # visit http://localhost:8080
  ```

## Files
- `index.html` — semantic markup & content
- `styles.css` — all styling (tokens, color-block system, responsive)
- `script.js` — scroll-reveal + newsletter feedback (progressive enhancement)

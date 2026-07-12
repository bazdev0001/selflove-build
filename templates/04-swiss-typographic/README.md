# Lumière Yoga — Swiss / International Typographic

A $10,000-tier single-page website for a premium self-love yoga brand, built in
pure hand-crafted HTML + CSS (with a small progressive-enhancement JS layer). No
frameworks, no build step.

---

## The style — Swiss / International Typographic

This design is a deliberate homage to the **International Typographic Style**
(Swiss design, c. 1950s–70s — Müller-Brockmann, Hofmann, the Basel/Zürich
schools):

- **Strict 12-column modular grid.** Every element snaps to it. The grid is not
  decorative — it is the structure. Column spans are visible in the rhythm of the
  page (`grid-column: 1 / span 8`, `7 / span 6`, etc.).
- **Bold, neutral grotesque type.** Large, confident, tightly-tracked sans-serif
  headlines set in uppercase with negative letter-spacing — the Neue-Haas /
  Helvetica idiom.
- **Red / black / off-white.** One bold accent (`--red: #e5231b`) on a warm paper
  white, with true black for contrast blocks. No gradients, no soft shadows.
- **Baseline rhythm & precise alignment.** An 8px-based spacing scale, hairline
  rules, mono-set captions, figure labels ("Fig. 01"), and running section
  numbers (01–05) — the editorial, print-derived detailing.
- **Design-forward motion, used sparingly.** A single running marquee, a
  masthead headline reveal, and quiet scroll-in transitions. Motion respects
  `prefers-reduced-motion`.

The result reads like a design-studio's own site or a printed brand book brought
to the screen — not a generic template.

## Fonts

Loaded via Google Fonts `<link>` (only two families, many weights — very Swiss):

- **Inter** — the neo-grotesque workhorse (a Helvetica Neue / Neue Haas Grotesk
  stand-in), weights 400–900. Headlines, body, everything structural.
- **Space Mono** — for labels, captions, figure numbers and metadata. The
  "technical" typographic voice that offsets the grotesque.

System fallbacks: `"Helvetica Neue", Helvetica, Arial, sans-serif`.

## Why this is $10k-tier (not generic)

- **Real brand copy throughout** — hero, a written manifesto, three named
  offerings with real prices (€89 course / €140-mo membership / €690 retreat),
  four testimonials, a full teacher bio, a newsletter CTA and a structured
  footer. Zero lorem ipsum.
- **Sophisticated CSS** — CSS custom properties for the whole system, a genuine
  visible 12-col grid, `clamp()` fluid type across every heading, an explicit
  spacing scale, hairline rules, and a considered black/red/paper section rhythm.
- **Deliberate, sparing imagery** — two Unsplash yoga photographs, served with
  sizing params and rendered in duotone-grayscale so photography never fights the
  typography. Inline SVG wordmark + arrow icons.
- **Accessible & responsive** — semantic HTML5 landmarks, skip link, visible
  focus states, alt text on every image, AA-contrast pairings, and a grid that
  collapses elegantly at 900 / 860 / 820 / 780 / 720px breakpoints.
- **Graceful enhancement** — the page is fully functional with JavaScript off;
  JS only adds scroll reveals and an inline newsletter success state.

## How to preview

No build tools required. Either:

```bash
# Option A — just open the file
open index.html            # macOS
xdg-open index.html        # Linux

# Option B — serve it locally (nicer for fonts/caching)
cd 04-swiss-typographic
python3 -m http.server 8080
# then visit http://localhost:8080
```

An internet connection is needed for the Google Fonts and the two Unsplash
images; the layout and type still hold with fallback fonts offline.

## Files

| File         | Purpose                                             |
|--------------|-----------------------------------------------------|
| `index.html` | Semantic markup, inline SVG wordmark/icons, copy    |
| `styles.css` | Full design system: grid, tokens, type, motion      |
| `script.js`  | Scroll reveal + newsletter enhancement (optional)   |
| `README.md`  | This file                                           |

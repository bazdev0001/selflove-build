# Lumière Yoga — Mobile App UI Templates

A set of four premium, hand-crafted mobile app screen mockups for **Lumière Yoga**, a
self-love yoga & meditation brand. Each screen is a static, phone-framed UI rendered with
pure HTML + CSS (a touch of decorative inline SVG, no JavaScript required). They share one
cohesive design system so they read as a single, polished product.

Peer directory to `../templates/` (the marketing website templates).

## The four screens

| # | Folder | Screen | Highlights |
|---|--------|--------|-----------|
| 01 | `01-onboarding/` | Welcome / onboarding | SVG sunrise-meditation hero, value props, page dots, primary CTA + sign-in |
| 02 | `02-class-booking/` | Browse & book classes | Search + filter chips, live featured class, class cards (time / teacher / level / price), sticky "Book now" bar, tab bar |
| 03 | `03-meditation-player/` | Audio / meditation player | Album art with animated glow ring, ambient orb background, CSS waveform + progress, transport controls, ambience toggle |
| 04 | `04-progress-dashboard/` | Wellness dashboard | 18-day streak banner, stat cards, inline-SVG activity rings (82% of goal) + weekly bar chart, recent sessions, daily quote |

Realistic content throughout — real class names (Golden Hour Vinyasa, Midday Reset · Yin),
teachers (Sofia Marchetti, Priya Nair, Maya Lindqvist), times, levels and GBP pricing. No
lorem ipsum.

## Shared design system

Defined once as CSS custom properties at the top of every `styles.css` (identical block, so
each screen is self-contained and portable).

**Palette — calm, warm, self-love**
- Backgrounds: `--cream #F7F1EA`, `--sand #EFE5D9`, `--surface #FFFFFF`
- Text: `--ink #33272B`, `--ink-soft #6C5B60`, `--muted #9A8C8F`
- Brand: `--plum #6D4B5C`, `--rose #C48A82`, `--terracotta #C6765A`
- Accents: `--sage #8FA68E`, `--gold #C9A24B`
- Signature gradients: `--grad-brand` (plum → rose) and `--grad-warm` (amber → terracotta),
  used for the CTA button, the meditation play button and chart fills.

**Typography**
- Display / headings: **Fraunces** (a warm, high-contrast serif — italics used for emphasis)
- UI / body: **Manrope** (clean geometric sans)
- Loaded from Google Fonts via `<link>`; graceful serif/sans fallbacks are declared.

**Shared components** (same across screens)
- Device frame: rounded titanium bezel, dynamic-island, status bar (9:41 · signal · wi-fi ·
  battery) and a home indicator.
- Rounded cards (`--r-lg/md/sm`), soft layered shadows (`--shadow-card/float/btn`), pill
  buttons, tab bar, and inline monochrome SVG icons.
- Consistent 390 px viewport, centred on a soft radial backdrop.

## Preview

No build step. Open any screen's `index.html` directly in a browser:

```bash
# from this folder
xdg-open 01-onboarding/index.html      # Linux
open 01-onboarding/index.html          # macOS
```

Or serve the whole set and click between them:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080/01-onboarding/ (…/02-class-booking/, etc.)
```

An internet connection is used only to fetch the Google Fonts; everything else is local.
Best viewed in a Chromium/WebKit browser (uses `color-mix()`, `backdrop-filter` and CSS
`conic-gradient`). For a true-to-life look, view at 100% zoom — each frame is a 390×844
phone.

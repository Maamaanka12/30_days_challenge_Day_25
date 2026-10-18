# Wanderlog Tours

A responsive, single-page travel tour website showcasing guided journeys, hand-picked destinations, and tour packages. Built as **Day 25** of a 30-day coding challenge.

## Preview

![Wanderlog Tours Screenshot](https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1900&q=85)

## Features

- **Responsive design** — mobile-first layout with a collapsible hamburger navigation and smooth scroll behavior.
- **Hero section** — full-screen cinematic landing with a layered photo overlay and call-to-action buttons.
- **Why choose section** — four benefit cards highlighting local guides, small groups, honest pricing, and friendly planning.
- **Interactive destination showcase** — a filterable grid (Coast / Mountain / Culture) of six scenic destinations with live price tags.
- **Tour packages** — three featured offerings (day walk, 7-day traverse, custom expedition) with pricing and booking links.
- **Accessibility ready** — semantic HTML, ARIA labels, `aria-expanded` state management, and `:focus-visible` outlines.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, CSS Grid, Flexbox, media queries) |
| Interactivity | Vanilla JavaScript (ES6 modules-free, `defer`) |
| Fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces) (Google Fonts) |
| Imagery | Unsplash (remote URLs) |

No build tools, no frameworks — just three static files.

## Project Structure

```
day 25/
├── index.html   # Markup, page sections, and content
├── styles.css   # All styles, from :root tokens to mobile breakpoints
├── script.js    # DOM logic: nav toggle, destination filter, scroll spy
└── README.md
```

## Getting Started

This is a static site with no build step.

**Clone & open in a browser:**

```bash
git clone <repo-url>
cd day-25
```

Open `index.html` in your favorite browser — no live server required. To serve locally:

```bash
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000` (or the port your tool exposes).

## Configuration

All theming lives in the `:root` block of `styles.css` — colors, fonts, and spacing tokens are defined as CSS custom properties:

```css
:root {
  --navy:    #2B2118;
  --gold:    #D9A441;
  --accent:  #D9A441;
  --blue:    #6B7250;
  --ivory:   #F3EDE2;
}
```

The destination data in `script.js` is a plain array of objects — add, remove, or edit entries to change what appears in the showcase grid.

## Customization

### Adding a destination
Edit the `destinations` array in `script.js`:

```js
{
  name: "Patagonia",
  tag: "FOR PEAKS & GLACIERS",
  cat: "mountain",      // must match a filter chip
  price: "$980",
  img: "https://...",
  blurb: "Torres del Paine and glacial lagoons."
}
```

### Changing colors
Update the variables in the `:root` selector in `styles.css`. Every component references these tokens, so a single edit theme-swaps the entire site.

### Adding a tour package
Duplicate a `.service-card` block inside the `service-list-section` in `index.html` and update the icon, title, description, price, and booking link.

## Responsive Breakpoints

| Max-width | Targets |
|-----------|---------|
| **920px** | Two-column benefit grid collapses, showcase grid narrows, footer restructures |
| **650px** | Hamburger menu activates, single-column layout, hero re-proportions |

## Scripts Overview

`script.js` contains three behaviors, each kept lightweight:

1. **Mobile menu toggle** — opens/closes the nav drawer and syncs `aria-expanded`.
2. **Destination filter** — click a chip (`.chip[data-filter]`) to filter showcase cards by category.
3. **Scroll spy** — highlights the active nav link as the user scrolls through sections.

All event listeners are registered after DOM content is parsed (the script uses `defer`).

## Browser Support

Modern browsers only (CSS custom properties, `clamp()`, `backdrop-filter`-free). Gracefully degrades on older browsers — layout will fall back to standard block flow.

---

Part of the **30 Days Coding Challenge**.

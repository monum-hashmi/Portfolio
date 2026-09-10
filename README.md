# Monum Hashmi — Portfolio

Personal site for **Monum Hashmi**, AI research engineer.
Live: <https://monum-hashmi-portfolio.netlify.app>

A premium, motion-forward dark portfolio: full-bleed photo hero, warm accent,
scroll-reveal animation, and card-based sections. Research-first — it reads as a
researcher who ships. Semantic HTML with a real heading hierarchy, Open Graph
tags, and no browser storage.

## Stack

- **Vite + TypeScript** build.
- `index.html` (content + meta/OG/JSON-LD) + `src/style.css` + a tiny
  `src/main.ts` (scroll-reveal, nav state, hero parallax — all behind a
  `prefers-reduced-motion` guard, no storage).
- Fonts: **Space Grotesk** (display) + **Inter** (body) via Google Fonts, with
  system fallbacks.
- Deployed on **Netlify** (`npm run build` → `dist/`, pinned in `netlify.toml`).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Files

```
index.html            # all content + meta / Open Graph / JSON-LD
src/style.css         # design system + animation
src/main.ts           # progressive-enhancement JS (reveal, nav, parallax)
public/
  favicon.svg
  og.png              # 1200×630 social preview
  monum-hashmi-cv.pdf # linked from "Download CV"
  monum-hero.jpg      # (add this) full-bleed hero photo
netlify.toml
```

## Adding the hero photo

The hero is wired for a full-bleed background photo with a legibility scrim, so
it drops in with **one line** — no broken image if the file is absent.

1. Add the image to `public/` as `public/monum-hero.jpg` (landscape or
   portrait; a clean, well-lit shot works best). It's referenced via CSS
   `background-image`, so a missing file simply falls back to the gradient hero.
2. In `src/style.css`, in `:root`, set:
   ```css
   --hero-photo: url("/monum-hero.jpg");
   ```
3. Tune `background-position` on `.hero__media` if the crop needs nudging, and
   raise the left/bottom scrim opacity in `.hero__scrim` if the photo is bright.

## Editing content

All copy lives in `index.html`. Each research paper is an `<article class="paper">`
and each project a `<article class="card">` — duplicate a block to add an item.

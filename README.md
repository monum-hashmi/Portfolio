# Monum Hashmi — Portfolio

An AI Engineer / Researcher portfolio landing page for **Monum Hashmi**, built with
React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

Dark theme (`#0C0C0C`), Kanit typeface, fluid `clamp()` typography, and a set of
scroll-driven animations (magnetic hero portrait, scroll-linked marquee,
character-by-character reveal, and sticky-stacking project cards).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Sections

1. **Hero** — navbar, gradient headline, tagline, contact CTA, magnetic portrait.
2. **Marquee** — two rows of tiles that slide horizontally with scroll.
3. **About** — gradient heading, scroll-reveal bio, decorative corner icons.
4. **Focus Areas** — five numbered focus areas on a light panel.
5. **Projects** — three sticky-stacking cards (Groundline, MSAFE-GC, SecureIDS).

## ⚠️ Image placeholders — swap before shipping

Every image in the **marquee** and **project cards**, plus the **hero portrait**,
is currently a generated placeholder clearly marked `TEMP`. Replace them with real
assets:

- **Hero portrait** — drop a transparent-background cutout into `src/assets/`
  (e.g. `monum-portrait.png`) and update the import in
  `src/sections/HeroSection.tsx`:
  ```ts
  import portrait from '../assets/monum-portrait.png';
  ```
- **Marquee tiles** — the labeled placeholders are generated in
  `src/assets/placeholders.ts` (`marqueePlaceholders`). Replace that array with
  imports of the real screenshots/GIFs.
- **Project screenshots** — each project in `src/sections/ProjectsSection.tsx`
  uses `placeholder({ ... })` for its three image slots. Swap those calls for
  imports of the real images (Groundline UI, MSAFE-GC Grad-CAM, SecureIDS
  dashboard, etc.).

The four **About-section corner icons** are hand-made SVGs in `src/assets/`
(`icon-neural.svg`, `icon-circuit.svg`, `icon-chip.svg`, `icon-dataflow.svg`) and
can stay as-is or be replaced.

## Content

All copy (bio, focus areas, project descriptions, links) is sourced from the
verified content brief — no invented facts, metrics, or publication claims.

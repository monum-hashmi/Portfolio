# Monum Hashmi — Portfolio

Personal site for **Monum Hashmi**, AI research engineer.
Live: <https://monum-hashmi-portfolio.netlify.app>

A deliberately lean, typographic single page: dark theme, one warm accent,
semantic HTML with a real heading hierarchy, and **no client-side JavaScript**.
It reads as a researcher who ships — research first, then projects and work.

## Stack

- **Vite + TypeScript** build (config only; the page itself ships zero JS).
- Hand-authored `index.html` + one stylesheet (`src/style.css`).
- System font stacks (serif headings, system sans body) — no web-font requests.
- Deployed on **Netlify** (`npm run build` → `dist/`, pinned in `netlify.toml`).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html            # all content + meta / Open Graph / JSON-LD
src/style.css         # the single stylesheet
public/
  favicon.svg         # monogram favicon
  og.png              # 1200×630 social preview image
  monum-hashmi-cv.pdf # linked from "Download CV"
netlify.toml          # build command + publish dir + asset caching
```

## Editing content

All copy lives directly in `index.html` — each research paper and project is a
`<li class="entry">`. To change wording, edit the text in place; to add an item,
copy an existing `<li>` block.

## Adding the headshot (optional)

The site is intentionally text-forward, but a small portrait can sit in the
hero. To add one:

1. Put the image in `public/` (e.g. `public/monum.jpg`), ideally a square-ish
   head-and-shoulders crop, ~480px.
2. In `index.html`, inside `<section class="hero">`, add near the top:
   ```html
   <img class="portrait" src="/monum.jpg" width="120" height="120"
        alt="Monum Hashmi" />
   ```
3. In `src/style.css` add:
   ```css
   .portrait { width: 120px; height: 120px; border-radius: 999px;
     object-fit: cover; margin-bottom: 1.5rem; }
   ```

## Regenerating the OG image

`public/og.png` is a static render. To change it, edit the source markup and
re-render at 1200×630 (any HTML-to-PNG method works), then replace the file.

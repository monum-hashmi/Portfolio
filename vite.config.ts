import { defineConfig } from 'vite';

// Static, JS-free build. `index.html` is the entry; the linked stylesheet is
// the only processed asset. Output goes to `dist/` for Netlify.
export default defineConfig({
  build: {
    target: 'es2020',
    cssMinify: true,
    assetsInlineLimit: 0,
  },
});

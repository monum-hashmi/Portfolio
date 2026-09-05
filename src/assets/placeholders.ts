/**
 * Temporary placeholder tiles.
 *
 * These generate labeled gradient SVGs (as data URIs) so every image slot in the
 * marquee and project sections renders something clearly marked "TEMP" until real
 * screenshots are supplied. Replace usages with real assets (drop files in
 * `src/assets` or `public/` and import them) — none of these are meant to ship.
 */

interface PlaceholderOptions {
  label: string;
  sub?: string;
  from?: string;
  to?: string;
  width?: number;
  height?: number;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Build a labeled gradient tile as a data-URI SVG. */
export function placeholder({
  label,
  sub = 'TEMP — replace with real asset',
  from = '#1a1d24',
  to = '#0c0c0c',
  width = 420,
  height = 270,
}: PlaceholderOptions): string {
  const id = Math.random().toString(36).slice(2, 8);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g${id})"/>
  <rect x="10" y="10" width="${width - 20}" height="${height - 20}" rx="14"
        fill="none" stroke="#D7E2EA" stroke-opacity="0.18" stroke-dasharray="6 8"/>
  <text x="50%" y="47%" font-family="Kanit, sans-serif" font-size="26" font-weight="700"
        text-anchor="middle" fill="#D7E2EA" fill-opacity="0.85">${escapeXml(label)}</text>
  <text x="50%" y="60%" font-family="Kanit, sans-serif" font-size="13" font-weight="400"
        letter-spacing="2" text-anchor="middle" fill="#8A93A0">${escapeXml(sub)}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** Gradient variants cycled through the marquee so tiles look distinct. */
const MARQUEE_VARIANTS: Array<[string, string]> = [
  ['#241a2e', '#0c0c0c'],
  ['#1a2430', '#0c0c0c'],
  ['#2e1a24', '#0c0c0c'],
  ['#1a2e28', '#0c0c0c'],
  ['#2e2a1a', '#0c0c0c'],
];

/** Short captions hinting at the real screenshots the marquee will hold. */
const MARQUEE_LABELS = [
  'Groundline UI',
  'Multi-Agent Review',
  'SecureIDS Dashboard',
  'MSAFE-GC Grad-CAM',
  'Sentinel Tracking',
  'Toxic Comment · SHAP',
  'Fitness Coach',
  'n8n Pipeline',
  'RAG Pipeline',
  'Grad-CAM Heatmap',
  'Attack Dashboard',
  'Agent Graph',
  'EEG–ECG Fusion',
  'Threat Breakdown',
  'YOLOv8 · DeepSORT',
  'ChromaDB Isolation',
  'FastAPI Service',
  'Violence Detection',
  'Prompt Pipeline',
  'Contribution Graph',
  'Architecture Diagram',
];

/** 21 labeled marquee placeholder tiles. */
export const marqueePlaceholders: string[] = MARQUEE_LABELS.map((label, i) => {
  const [from, to] = MARQUEE_VARIANTS[i % MARQUEE_VARIANTS.length];
  return placeholder({ label, sub: 'screenshot — TEMP', from, to });
});

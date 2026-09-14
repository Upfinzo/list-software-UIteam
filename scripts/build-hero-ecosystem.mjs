/**
 * Rebuilds the hero ecosystem diagram from the raw Figma export.
 *
 *   node scripts/build-hero-ecosystem.mjs
 *
 * Reads   public/images/Homepage_sideasset.svg               source of truth, never hand-edited
 * Writes  public/images/common/hero-ecosystem-backdrop.svg   static art only
 *         components/Home/heroEcosystem.data.ts       geometry for the interactive layer
 *
 * The export bakes every module pill, connector and label into one 408KB file.
 * This splits it: the static card stays an image, while the pills and wires
 * become real SVG nodes so they can be hovered and animated.
 *
 * Needs sharp (already present via next) to recompress the card texture.
 */
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const SRC = "public/images/Homepage_sideasset.svg";
const BACKDROP = "public/images/common/hero-ecosystem-backdrop.svg";
const DATA = "components/Home/heroEcosystem.data.ts";

const HUB = { x: 361.047, y: 289.938 };
const HUB_RADIUS = 60; // the Custodian CORE disc
const HUB_GAP = 2; // clear the disc so round caps do not poke over its label
const WIRE_GAP = 2.5; // stop each wire this far outside its pill
const TEXTURE = { width: 480, quality: 58 };

// Module identity keyed by the Figma filter id, confirmed by matching each
// icon-circle centre to the connector endpoint it sits on.
const MODULES = {
  3: { label: "Operations", end: [361.047, 122.575] },
  4: { label: "Digital Banking", end: [483.826, 171.612] },
  5: { label: "Data & Reporting", end: [534.673, 289.938] },
  6: { label: "Lending", end: [483.826, 408.263] },
  7: { label: "Customer Experience", end: [361.047, 457.3] },
  8: { label: "Compliance", end: [238.268, 408.263] },
  9: { label: "APIs & Middleware", end: [187.421, 289.938] },
  10: { label: "Payments", end: [238.268, 171.612] },
};

const src = readFileSync(SRC, "utf8");

// Absolute-only path bbox. Figma emits M/C/H/V/L/Z with absolute coords.
function bbox(d) {
  const t = d.match(/[MCHVLZ]|-?\d*\.?\d+/gi) ?? [];
  let i = 0, cx = 0, cy = 0, cmd = "";
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const put = (x, y) => {
    x0 = Math.min(x0, x); x1 = Math.max(x1, x);
    y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  };
  while (i < t.length) {
    if (/^[MCHVLZ]$/i.test(t[i])) { cmd = t[i++].toUpperCase(); if (cmd === "Z") continue; }
    if (cmd === "M" || cmd === "L") { cx = +t[i++]; cy = +t[i++]; put(cx, cy); }
    else if (cmd === "C") { for (let k = 0; k < 3; k++) { const x = +t[i++], y = +t[i++]; put(x, y); cx = x; cy = y; } }
    else if (cmd === "H") { cx = +t[i++]; put(cx, cy); }
    else if (cmd === "V") { cy = +t[i++]; put(cx, cy); }
    else i++;
  }
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
}

// Span of a <g> element, honouring nesting.
function groupSpan(str, open) {
  const re = /<g\b[^>]*>|<\/g>/g;
  re.lastIndex = open;
  let depth = 0, m;
  while ((m = re.exec(str))) {
    if (m[0] === "</g>") { if (--depth === 0) return [open, m.index + 4]; }
    else depth++;
  }
  throw new Error("unbalanced <g> at " + open);
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// ------------------------------------------------------------- parse the pills
const nodes = [];
for (const m of src.matchAll(/<g filter="url\(#filter(\d+)_d_140_201\)">/g)) {
  const mod = MODULES[+m[1]];
  if (!mod) continue;

  const [a, b] = groupSpan(src, m.index);
  const body = src.slice(a, b);

  const shape = body.match(/<path d="(M[^"]+)" fill="white" fill-opacity="0\.08"/)?.[1];
  const circ = body.match(/<path d="(M[^"]+)" fill="white" fill-opacity="0\.14"/)?.[1];
  const label = body.match(/<path d="([^"]+)" fill="white"\/>/)?.[1];
  const icon = [...body.matchAll(/<path d="([^"]+)"\s+stroke="#DBEEFF"/g)].map((x) => x[1]);
  if (!shape || !circ || !label) throw new Error("pill " + m[1] + " is missing parts");

  const r = bbox(shape), c = bbox(circ), t = bbox(label);

  // Figma draws each wire from the dead centre of the hub to inside the pill,
  // relying on both being painted over it. Our wires sit on top instead, so we
  // trim them to the visible gap: outside the CORE disc, outside the pill.
  const dx = mod.end[0] - HUB.x, dy = mod.end[1] - HUB.y;
  const len = Math.hypot(dx, dy);
  const slab = (lo, hi, p, d) =>
    d === 0 ? [-Infinity, Infinity] : [(lo - p) / d, (hi - p) / d].sort((u, v) => u - v);
  const [ax] = slab(r.x, r.x + r.w, HUB.x, dx);
  const [ay] = slab(r.y, r.y + r.h, HUB.y, dy);

  const from = (HUB_RADIUS + HUB_GAP) / len; // leaves the disc
  const to = Math.max(from, Math.max(ax, ay) - WIRE_GAP / len); // reaches the pill
  const start = { x: +(HUB.x + dx * from).toFixed(2), y: +(HUB.y + dy * from).toFixed(2) };
  const end = {
    x: +(HUB.x + dx * to).toFixed(2),
    y: +(HUB.y + dy * to).toFixed(2),
    len: +(len * (to - from)).toFixed(2),
  };

  nodes.push({
    order: +m[1],
    id: slug(mod.label),
    label: mod.label,
    pill: { x: +r.x.toFixed(2), y: +r.y.toFixed(2), w: +r.w.toFixed(2), h: +r.h.toFixed(2) },
    circle: { cx: +(c.x + c.w / 2).toFixed(2), cy: +(c.y + c.h / 2).toFixed(2), r: +(c.w / 2).toFixed(2) },
    text: { x: +t.x.toFixed(2), w: +t.w.toFixed(2) },
    line: "M" + start.x + " " + start.y + "L" + end.x + " " + end.y,
    lineLength: end.len,
    icon,
  });
}
nodes.sort((p, q) => p.order - q.order);
if (nodes.length !== 8) throw new Error("expected 8 modules, found " + nodes.length);

// ---------------------------------------------------------- build the backdrop
const cuts = [];
for (const m of src.matchAll(/<g filter="url\(#filter(\d+)_d_140_201\)">/g)) {
  if (MODULES[+m[1]]) cuts.push(groupSpan(src, m.index));
}

// The dotted ring ships as ~54KB of individual tick marks. A dashed circle
// renders the same thing.
const maskM = src.match(/<mask id="path-20-inside-2_140_201"[\s\S]*?<\/mask>/);
cuts.push([maskM.index, maskM.index + maskM[0].length]);
const ringM = src.match(/<path d="[^"]{20000,}"[^>]*mask="url\(#path-20-inside-2_140_201\)"\/>/);
cuts.push([
  ringM.index,
  ringM.index + ringM[0].length,
  '<circle cx="' + HUB.x + '" cy="' + HUB.y + '" r="75.85" fill="none" ' +
    'stroke="#5EAFE6" stroke-opacity="0.4" stroke-width="1.2" stroke-dasharray="1.6 5.4"/>',
]);

for (const m of src.matchAll(/<path opacity="0\.(45|9)" d="M361\.047 289\.93[78][^"]*"[^>]*\/>/g)) {
  cuts.push([m.index, m.index + m[0].length]);
}
for (const m of src.matchAll(/<filter id="filter(\d+)_d_140_201"[\s\S]*?<\/filter>/g)) {
  if (MODULES[+m[1]]) cuts.push([m.index, m.index + m[0].length]);
}

let backdrop = src;
cuts.sort((p, q) => q[0] - p[0]);
for (const [a, b, replacement] of cuts) {
  backdrop = backdrop.slice(0, a) + (replacement ?? "") + backdrop.slice(b);
}

// Drop the card's baked-in shadow. It decodes to exactly
// `0 40px 90px -40px rgba(3,38,131,0.75)`, but as an SVG filter it scales with
// the artwork (so it thins out on narrow viewports) and is boxed in by the
// viewBox. The component re-applies it as a CSS box-shadow instead.
backdrop = backdrop.replace('<g filter="url(#filter0_d_140_201)">', "<g>");
const cardShadow = backdrop.match(/<filter id="filter0_d_140_201"[\s\S]*?<\/filter>/);
if (cardShadow) backdrop = backdrop.replace(cardShadow[0], "");
if (backdrop.includes("filter0_d_140_201")) {
  throw new Error("card shadow filter is still referenced");
}

// Recompress the card texture. It renders at opacity 0.3, so it can be small.
// The width/height attributes stay 800x1422 so the pattern transform still works.
const raw = Buffer.from(backdrop.match(/base64,([A-Za-z0-9+/=]+)/)[1], "base64");
const small = await sharp(raw)
  .resize({ width: TEXTURE.width })
  .jpeg({ quality: TEXTURE.quality, mozjpeg: true })
  .toBuffer();
backdrop = backdrop.replace(/(base64,)[A-Za-z0-9+/=]+/, (_, p) => p + small.toString("base64"));

const opens = (backdrop.match(/<g\b/g) ?? []).length;
const closes = (backdrop.match(/<\/g>/g) ?? []).length;
if (opens !== closes) throw new Error("backdrop has unbalanced <g>: " + opens + "/" + closes);
writeFileSync(BACKDROP, backdrop);

// -------------------------------------------------------- build the data module
const body = nodes
  .map((n) => `  {
    id: ${JSON.stringify(n.id)},
    label: ${JSON.stringify(n.label)},
    pill: { x: ${n.pill.x}, y: ${n.pill.y}, w: ${n.pill.w}, h: ${n.pill.h} },
    circle: { cx: ${n.circle.cx}, cy: ${n.circle.cy}, r: ${n.circle.r} },
    text: { x: ${n.text.x}, w: ${n.text.w} },
    line: ${JSON.stringify(n.line)},
    lineLength: ${n.lineLength},
    icon: [
${n.icon.map((d) => "      " + JSON.stringify(d) + ",").join("\n")}
    ],
  }`)
  .join(",\n");

writeFileSync(
  DATA,
  `// Generated by scripts/build-hero-ecosystem.mjs from ${SRC}.
// Wires are trimmed at both ends - clear of the CORE disc and clear of each
// pill - so they never cross the artwork underneath. Re-run the script rather
// than hand-editing this file.

export interface HeroNode {
  id: string;
  label: string;
  pill: { x: number; y: number; w: number; h: number };
  circle: { cx: number; cy: number; r: number };
  text: { x: number; w: number };
  line: string;
  lineLength: number;
  icon: string[];
}

export const HERO_VIEWBOX = "0 0 723 660";

export const HERO_NODES: HeroNode[] = [
${body},
];
`
);

const kb = (n) => (n / 1024).toFixed(1) + "KB";
console.log("source   " + kb(src.length));
console.log("backdrop " + kb(backdrop.length) + "  ->  " + BACKDROP);
console.log("data     " + nodes.length + " modules  ->  " + DATA);

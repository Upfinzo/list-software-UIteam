/**
 * Rebuilds the hero ecosystem diagram from the raw Figma export.
 *
 *   node scripts/build-hero-ecosystem.mjs [source.svg]
 *
 * Reads   public/images/hero-ecosystem-source.svg          the export, never hand-edited
 * Writes  public/images/common/hero-ecosystem-backdrop.svg static art only
 *         components/Home/heroEcosystem.data.ts            geometry for the interactive layer
 *
 * The export is the card on its own: frame, texture, glow, dotted ring and the
 * CORE hub. The eight module chips are not in it, so they are authored in
 * MODULES below and laid out here using the chip metrics the export's own
 * typography implies. Keeping the chips out of the image is the point — they
 * have to be real SVG nodes to be hoverable and animated.
 *
 * Needs sharp (already present via next) to recompress the card texture.
 */
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const SRC = process.argv[2] ?? "public/images/hero-ecosystem-source.svg";
const BACKDROP = "public/images/common/hero-ecosystem-backdrop.svg";
const DATA = "components/Home/heroEcosystem.data.ts";
const METRICS = "scripts/sora-500-metrics.json";

const HUB = { x: 361.047, y: 289.938 };
const HUB_RADIUS = 60; // the Custodian CORE disc
const HUB_GAP = 2; // clear the disc so round caps do not poke over its label
const WIRE_GAP = 2.5; // stop each wire this far outside its pill
const TEXTURE = { width: 480, quality: 58 };

/**
 * Chip layout, measured off the previous export (which did bake the chips in)
 * and consistent across all eight of them to within a rounding step:
 *
 *   pill        46 tall, width = TEXT_INSET + label advance + TEXT_PAD
 *   icon disc   r 14, centred TEXT_INSET-less DISC_INSET from the pill's left
 *   icon        a 14-unit box on a 24-unit grid, so lucide drops straight in
 *   label       Sora 500, 11.5px, -2.5% tracking, anchored 47 from the left
 *
 * The 11.5px/-2.5% pair was recovered by fitting the export's glyph outlines:
 * heights pin the size to 11.500 exactly, and the leftover horizontal squeeze
 * is a flat -0.0287px per character. Both are reproduced in .hero-node__label.
 */
const PILL_H = 46;
const DISC_INSET = 23;
const DISC_R = 14;
const ICON_BOX = 14;
const ICON_GRID = 24; // lucide's viewBox
const ICON_STROKE = 0.991667; // in diagram units, as the export drew it
const TEXT_INSET = 47;
const TEXT_PAD = 15;
const FONT_SIZE = 11.5;
const TRACKING = -0.025; // em

/**
 * Seat centres and wire endpoints are the export's own — the ring is slightly
 * irregular because it was placed by hand, and copying it keeps the chips
 * sitting where the design puts them. `icon` is a lucide-react export name.
 */
const MODULES = [
  { id: "payments", label: "Payments", icon: "CreditCard", seat: [361.05, 122.37], end: [361.047, 122.575] },
  { id: "automation", label: "Automation", icon: "Cog", seat: [483.81, 168.47], end: [483.826, 171.612] },
  { id: "digital-banking", label: "Digital Banking", icon: "MonitorSmartphone", seat: [534.67, 282.85], end: [534.673, 289.938] },
  { id: "compliance", label: "Compliance", icon: "ShieldCheck", seat: [483.81, 398.88], end: [483.826, 408.263] },
  { id: "technology", label: "Technology", icon: "Cpu", seat: [361.05, 451.56], end: [361.047, 457.3] },
  { id: "operations", label: "Operations", icon: "Workflow", seat: [238.27, 399.16], end: [238.268, 408.263] },
  { id: "core-banking", label: "Core Banking", icon: "Landmark", seat: [187.41, 279.94], end: [187.421, 289.938] },
  { id: "integration", label: "Integration", icon: "Blocks", seat: [238.27, 162.11], end: [238.268, 171.612] },
];

const src = readFileSync(SRC, "utf8");
const metrics = JSON.parse(readFileSync(METRICS, "utf8"));

const round = (v) => Math.round(v * 100) / 100;

/** Advance width of `s` at FONT_SIZE, tracking included, as the browser lays it out. */
function advance(s) {
  let units = 0;
  for (const ch of s) {
    const a = metrics.advances[ch];
    if (a === undefined) throw new Error(`no metrics for ${JSON.stringify(ch)} in ${METRICS}`);
    units += a;
  }
  return (units * FONT_SIZE) / metrics.unitsPerEm + TRACKING * FONT_SIZE * s.length;
}

// ------------------------------------------------------------- lay out the chips
const nodes = MODULES.map(({ id, label, icon, seat, end }) => {
  const w = Math.round(TEXT_INSET + advance(label) + TEXT_PAD);
  const pill = { x: round(seat[0] - w / 2), y: round(seat[1] - PILL_H / 2), w, h: PILL_H };
  const circle = { cx: round(pill.x + DISC_INSET), cy: round(pill.y + DISC_INSET), r: DISC_R };

  // Figma draws each wire from the dead centre of the hub to inside the pill,
  // relying on both being painted over it. Our wires sit on top instead, so we
  // trim them to the visible gap: outside the CORE disc, outside the pill.
  const dx = end[0] - HUB.x;
  const dy = end[1] - HUB.y;
  const len = Math.hypot(dx, dy);
  const slab = (lo, hi, p, d) =>
    d === 0 ? [-Infinity, Infinity] : [(lo - p) / d, (hi - p) / d].sort((u, v) => u - v);
  const [ax] = slab(pill.x, pill.x + pill.w, HUB.x, dx);
  const [ay] = slab(pill.y, pill.y + pill.h, HUB.y, dy);

  const from = (HUB_RADIUS + HUB_GAP) / len; // leaves the disc
  const to = Math.max(from, Math.max(ax, ay) - WIRE_GAP / len); // reaches the pill
  const start = { x: round(HUB.x + dx * from), y: round(HUB.y + dy * from) };
  const stop = { x: round(HUB.x + dx * to), y: round(HUB.y + dy * to) };

  return {
    id,
    label,
    icon,
    pill,
    circle,
    iconBox: { x: round(circle.cx - ICON_BOX / 2), y: round(circle.cy - ICON_BOX / 2), size: ICON_BOX },
    text: { x: round(pill.x + TEXT_INSET), w: round(advance(label)) },
    line: `M${start.x} ${start.y}L${stop.x} ${stop.y}`,
    lineLength: round(len * (to - from)),
  };
});

for (const n of nodes) {
  if (n.lineLength <= 0) throw new Error(`${n.id}: wire has no visible length`);
  if (n.text.x + n.text.w > n.pill.x + n.pill.w) throw new Error(`${n.id}: label overflows its pill`);
}

// ---------------------------------------------------------- build the backdrop
// Figma renumbers every node on each export, so find the suffix rather than
// hard-coding it.
const suffix = src.match(/<filter id="filter0_d_(\d+_\d+)"/)?.[1];
if (!suffix) throw new Error("cannot find the card shadow filter - is this the card export?");

let backdrop = src;
const cuts = [];

// The dotted ring ships as one path per dot (312 of them, ~53KB). A dashed
// circle draws the same band: r and the dash period are measured off the path
// so the replacement lands on the same pixels.
const ringPath = backdrop.match(/<path d="[^"]{20000,}"[^>]*mask="url\(#(path-\d+-inside-\d+_[\d_]+)\)"\/>/);
if (ringPath) {
  const maskRe = new RegExp(`<mask id="${ringPath[1]}"[\\s\\S]*?<\\/mask>`);
  const mask = backdrop.match(maskRe);
  const dots = (ringPath[0].match(/M/g) ?? []).length;
  const rs = [...ringPath[0].matchAll(/(-?\d*\.?\d+) (-?\d*\.?\d+)/g)].map((m) =>
    Math.hypot(+m[1] - HUB.x, +m[2] - HUB.y)
  );
  const r = (Math.min(...rs) + Math.max(...rs)) / 2;
  const band = Math.max(...rs) - Math.min(...rs);
  const period = (2 * Math.PI * r) / dots;

  // One dot's angular span sets the dash; the rest of the period is the gap.
  const angles = [...ringPath[0].split("M")[1].matchAll(/(-?\d*\.?\d+) (-?\d*\.?\d+)/g)].map((m) =>
    Math.atan2(+m[1] - HUB.x, -(+m[2] - HUB.y))
  );
  const dash = r * (Math.max(...angles) - Math.min(...angles));
  cuts.push([
    ringPath.index,
    ringPath.index + ringPath[0].length,
    `<circle cx="${HUB.x}" cy="${HUB.y}" r="${round(r)}" fill="none" stroke="#5EAFE6" ` +
      `stroke-opacity="0.4" stroke-width="${round(band)}" ` +
      `stroke-dasharray="${round(dash)} ${round(period - dash)}"/>`,
  ]);
  if (mask) cuts.push([mask.index, mask.index + mask[0].length]);
}

cuts.sort((p, q) => q[0] - p[0]);
for (const [a, b, replacement] of cuts) {
  backdrop = backdrop.slice(0, a) + (replacement ?? "") + backdrop.slice(b);
}

// Drop the card's baked-in shadow. It decodes to exactly
// `0 40px 90px -40px rgba(3,38,131,0.75)`, but as an SVG filter it scales with
// the artwork (so it thins out on narrow viewports) and is boxed in by the
// viewBox. The component re-applies it as a CSS box-shadow instead.
backdrop = backdrop.replace(`<g filter="url(#filter0_d_${suffix})">`, "<g>");
const cardShadow = backdrop.match(new RegExp(`<filter id="filter0_d_${suffix}"[\\s\\S]*?<\\/filter>`));
if (cardShadow) backdrop = backdrop.replace(cardShadow[0], "");
if (backdrop.includes(`filter0_d_${suffix}`)) {
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
  .map(
    (n) => `  {
    id: ${JSON.stringify(n.id)},
    label: ${JSON.stringify(n.label)},
    icon: ${JSON.stringify(n.icon)},
    pill: { x: ${n.pill.x}, y: ${n.pill.y}, w: ${n.pill.w}, h: ${n.pill.h} },
    circle: { cx: ${n.circle.cx}, cy: ${n.circle.cy}, r: ${n.circle.r} },
    iconBox: { x: ${n.iconBox.x}, y: ${n.iconBox.y}, size: ${n.iconBox.size} },
    text: { x: ${n.text.x}, w: ${n.text.w} },
    line: ${JSON.stringify(n.line)},
    lineLength: ${n.lineLength},
  }`
  )
  .join(",\n");

writeFileSync(
  DATA,
  `// Generated by scripts/build-hero-ecosystem.mjs from ${SRC}.
// Wires are trimmed at both ends - clear of the CORE disc and clear of each
// pill - so they never cross the artwork underneath. Re-run the script rather
// than hand-editing this file; the module list lives in the script.

export interface HeroNode {
  id: string;
  label: string;
  /** A lucide-react export name; HERO_ICONS in HeroEcosystem.tsx resolves it. */
  icon: string;
  pill: { x: number; y: number; w: number; h: number };
  circle: { cx: number; cy: number; r: number };
  iconBox: { x: number; y: number; size: number };
  /** x is the text anchor, w the advance width the label is set to. */
  text: { x: number; w: number };
  line: string;
  lineLength: number;
}

export const HERO_VIEWBOX = "0 0 723 660";

/** Stroke width for a ${ICON_GRID}-unit lucide icon drawn in a ${ICON_BOX}-unit box. */
export const HERO_ICON_STROKE = ${round((ICON_STROKE * ICON_GRID) / ICON_BOX)};

export const HERO_NODES: HeroNode[] = [
${body},
];
`
);

const kb = (n) => (n / 1024).toFixed(1) + "KB";
console.log("source   " + kb(src.length) + "  <-  " + SRC);
console.log("backdrop " + kb(backdrop.length) + "  ->  " + BACKDROP);
console.log("data     " + nodes.length + " modules  ->  " + DATA);
for (const n of nodes) {
  console.log(
    `  ${n.label.padEnd(16)} pill ${String(n.pill.w).padStart(3)}x${n.pill.h}` +
      ` @ ${String(n.pill.x).padStart(6)},${String(n.pill.y).padStart(6)}` +
      `  wire ${String(n.lineLength).padStart(6)}  ${n.icon}`
  );
}

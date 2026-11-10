"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- shared art helpers ---------- */

type Palette = {
  id: string;
  bg: [string, string, string];
  blobA: string;
  blobB: string;
  g: [string, string];
};

function ArtBackground({ p }: { p: Palette }) {
  return (
    <svg
      className="sc-layer"
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${p.id}bg`} x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stopColor={p.bg[0]} />
          <stop offset=".55" stopColor={p.bg[1]} />
          <stop offset="1" stopColor={p.bg[2]} />
        </linearGradient>
        <filter id={`${p.id}bl`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>
      <rect width="300" height="400" fill={`url(#${p.id}bg)`} />
      <circle className="art-pulse" cx="70" cy="70" r="80" fill="#FFFFFF" opacity=".75" filter={`url(#${p.id}bl)`} />
      <circle cx="250" cy="300" r="90" fill={p.blobA} opacity=".35" filter={`url(#${p.id}bl)`} />
      <circle cx="230" cy="120" r="50" fill={p.blobB} opacity=".5" filter={`url(#${p.id}bl)`} />
    </svg>
  );
}

function ArtDefs({ p }: { p: Palette }) {
  return (
    <defs>
      <linearGradient id={`${p.id}g`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={p.g[0]} />
        <stop offset="1" stopColor={p.g[1]} />
      </linearGradient>
      <linearGradient id={`${p.id}w`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity=".55" />
      </linearGradient>
      <filter id={`${p.id}s`} x="-30%" y="-30%" width="160%" height="180%">
        <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor={p.g[1]} floodOpacity=".28" />
      </filter>
    </defs>
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#FFFFFF",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* ---------- card data ---------- */

type Solution = {
  title: string;
  description: string;
  palette: Palette;
  glass: { left: string; top: string; width: string; height: string };
  icon: ReactNode;
  art: (p: Palette) => ReactNode;
};

const opsTiles: [number, number, string, number][] = [
  [34, 46, "w", 2.18], [94, 46, "w", 2.42], [154, 46, "w", 0.26], [214, 46, "w", 3.35],
  [34, 96, "w", 0.94], [94, 96, "d", 1.88], [154, 96, "g", 1.91], [214, 96, "w", 0.6],
  [34, 146, "w", 3.47], [94, 146, "w", 2.97], [154, 146, "w", 0.26], [214, 146, "g", 2.36],
  [34, 196, "w", 0.12], [94, 196, "d", 1.89], [154, 196, "g", 3.52], [214, 196, "g", 3.68],
  [34, 246, "w", 3.2], [94, 246, "w", 3.74], [154, 246, "d", 0.39], [214, 246, "w", 0.87],
];

const hubSpokes = [
  [72, 100], [228, 92], [64, 250], [236, 256], [150, 290], [150, 62],
];

const solutions: Solution[] = [
  {
    title: "Custodian CBS",
    description:
      "The engine beneath every branch, ledger, and customer record, powering secure banking operations, connected digital experiences, intelligent workflows, payments, compliance, and modern financial infrastructure.",
    palette: { id: "q1", bg: ["#FBFDFF", "#EAF3FC", "#D6E8F8"], blobA: "#56E6BD", blobB: "#9EC3EE", g: ["#52AFE5", "#032E89"] },
    glass: { left: "13%", top: "17%", width: "74%", height: "44%" },
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
      </svg>
    ),
    art: (p) => (
      <g className="art-float" filter={`url(#${p.id}s)`} transform="translate(0 -6)">
        <polygon points="150,250 245,205 150,160 55,205" fill="#032E89" />
        <polygon points="55,205 150,250 150,262 55,217" fill="#021F66" />
        <polygon points="245,205 150,250 150,262 245,217" fill="#03287E" />
        <polygon points="150,212 245,167 150,122 55,167" fill="#0548D5" />
        <polygon points="55,167 150,212 150,224 55,179" fill="#0439A8" />
        <polygon points="245,167 150,212 150,224 245,179" fill="#0441BE" />
        <polygon points="150,174 245,129 150,84 55,129" fill={`url(#${p.id}w)`} />
        <polygon points="55,129 150,174 150,186 55,141" fill="#BFE0F6" />
        <polygon points="245,129 150,174 150,186 245,141" fill="#D7ECFA" />
        <path d="M112 129 L150 111 L188 129 L150 147Z" fill="#52AFE5" opacity=".7" />
      </g>
    ),
  },
  {
    title: "Digital Banking",
    description:
      "Extend the banking experience beyond the branch with mobile banking, internet banking, WhatsApp banking, e-passbook and digital customer services.",
    palette: { id: "q2", bg: ["#FBFEFD", "#E8F8F2", "#D3F1E6"], blobA: "#52AFE5", blobB: "#9AE3C9", g: ["#56E6BD", "#0E8F6E"] },
    glass: { left: "22%", top: "13%", width: "56%", height: "58%" },
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
    art: (p) => (
      <g className="art-float" transform="rotate(-8 150 200) translate(0 -12)" filter={`url(#${p.id}s)`}>
        <rect x="100" y="76" width="100" height="206" rx="22" fill="#FFFFFF" />
        <rect x="132" y="86" width="36" height="7" rx="3.5" fill="#56E6BD" opacity=".5" />
        <circle cx="150" cy="166" r="28" fill={`url(#${p.id}g)`} />
        <path d="M137 166l9 9 17-18" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="118" y="212" width="64" height="8" rx="4" fill="#56E6BD" opacity=".45" />
        <rect x="128" y="228" width="44" height="6" rx="3" fill="#56E6BD" opacity=".3" />
        <rect x="114" y="248" width="72" height="20" rx="10" fill="#0E8F6E" />
      </g>
    ),
  },
  {
    title: "Payments & Transactions",
    description:
      "Connect banking operations to payment rails, clearing systems and transaction networks through solutions supporting RTGS, EFT, NACH, CTS, ATM, IMPS and other payment interfaces.",
    palette: { id: "q3", bg: ["#FCFBFF", "#F0EAFC", "#E2D7F7"], blobA: "#52AFE5", blobB: "#C2AAEE", g: ["#8957E0", "#5B34B8"] },
    glass: { left: "10%", top: "24%", width: "80%", height: "36%" },
    icon: (
      <svg {...iconProps}>
        <path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5" />
      </svg>
    ),
    art: (p) => (
      <>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const y = 130 + i * 20;
          return (
            <path
              key={i}
              className="art-flow"
              d={`M-20 ${y} C 60 ${80 + i * 20}, 120 ${220 + i * 12}, 200 ${150 + i * 16} S 300 ${110 + i * 18}, 330 ${150 + i * 14}`}
              stroke={i % 2 === 0 ? "#FFFFFF" : "#5B34B8"}
              strokeOpacity={0.95 - i * 0.1}
              strokeWidth={3.2 - i * 0.3}
              fill="none"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          );
        })}
        <circle cx="200" cy="152" r="9" fill="#FFFFFF" filter={`url(#${p.id}s)`} />
        <circle cx="200" cy="152" r="4" fill="#5B34B8" />
      </>
    ),
  },
  {
    title: "Lending & Credit",
    description:
      "Support the lending lifecycle with credit appraisal, loan processing, documentation, recovery and NPA management capabilities integrated into banking operations.",
    palette: { id: "q4", bg: ["#FFFDF8", "#FBF3E1", "#F5E5C2"], blobA: "#F2624A", blobB: "#F4D290", g: ["#F2BD4A", "#B57A08"] },
    glass: { left: "16%", top: "18%", width: "68%", height: "50%" },
    icon: (
      <svg {...iconProps}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
    art: (p) => (
      <>
        <g fill="none" stroke="#FFFFFF" strokeOpacity=".5">
          <circle cx="40" cy="330" r="110" />
          <circle cx="40" cy="330" r="170" />
        </g>
        <g className="art-rise" filter={`url(#${p.id}s)`}>
          <rect x="72" y="214" width="30" height="66" rx="8" fill="#FFFFFF" opacity=".8" />
          <rect x="116" y="178" width="30" height="102" rx="8" fill="#FFFFFF" />
          <rect x="160" y="136" width="30" height="144" rx="8" fill={`url(#${p.id}g)`} />
          <rect x="204" y="88" width="30" height="192" rx="8" fill="#B57A08" />
        </g>
        <path d="M72 200 Q144 170 219 76" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="219" cy="76" r="7" fill="#FFFFFF" />
        <circle cx="219" cy="76" r="3" fill="#B57A08" />
      </>
    ),
  },
  {
    title: "Integration & Connectivity",
    description:
      "APIs, banking interfaces, third-party integrations, and connected systems that extend core banking capabilities.",
    palette: { id: "q5", bg: ["#FBFDFF", "#E9F5FC", "#D3EAF8"], blobA: "#8957E0", blobB: "#9CCDEB", g: ["#52AFE5", "#0548D5"] },
    glass: { left: "18%", top: "22%", width: "64%", height: "42%" },
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    art: (p) => (
      <>
        {hubSpokes.map(([x, y]) => (
          <path key={`l${x}-${y}`} className="art-flow2" d={`M150 172L${x} ${y}`} stroke="#FFFFFF" strokeWidth="1.8" />
        ))}
        {hubSpokes.map(([x, y]) => (
          <g key={`n${x}-${y}`}>
            <circle cx={x} cy={y} r="15" fill="#FFFFFF" filter={`url(#${p.id}s)`} />
            <circle cx={x} cy={y} r="5.5" fill="#0548D5" />
          </g>
        ))}
        <circle cx="150" cy="172" r="32" fill={`url(#${p.id}g)`} filter={`url(#${p.id}s)`} />
        <path d="M138 172h24M150 160v24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Banking Operations",
    description:
      "Digitize and streamline everyday banking through solutions for branch operations, customer management, investments, recovery and operational workflows.",
    palette: { id: "q6", bg: ["#FFFCFB", "#FCEDE9", "#F7DAD2"], blobA: "#F2BD4A", blobB: "#F4B2A4", g: ["#F2624A", "#C23A24"] },
    glass: { left: "12%", top: "14%", width: "76%", height: "52%" },
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    art: (p) => (
      <g filter={`url(#${p.id}s)`} transform="rotate(-10 150 170)">
        {opsTiles.map(([x, y, kind, delay]) => (
          <rect
            key={`${x}-${y}`}
            className="art-tile"
            x={x}
            y={y}
            width="50"
            height="40"
            rx="10"
            fill={kind === "w" ? "#FFFFFF" : kind === "d" ? "#C23A24" : `url(#${p.id}g)`}
            opacity={kind === "w" ? 0.92 : 1}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </g>
    ),
  },
  {
    title: "Data & Intelligence",
    description:
      "Turn banking information into actionable insight through business intelligence, reporting and analytics that support better operational and management decisions.",
    palette: { id: "q7", bg: ["#FCFCFF", "#ECEBFC", "#DCDBF6"], blobA: "#56E6BD", blobB: "#B2B6EF", g: ["#8957E0", "#3F35B0"] },
    glass: { left: "17%", top: "15%", width: "66%", height: "50%" },
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v8l6 3" />
      </svg>
    ),
    art: (p) => (
      <g transform="translate(150 166)" fill="none" strokeLinecap="round" filter={`url(#${p.id}s)`}>
        <circle r="88" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="16" />
        <g className="art-spin">
          <circle r="88" stroke="#FFFFFF" strokeWidth="16" strokeDasharray="320 600" />
        </g>
        <circle r="58" stroke="#FFFFFF" strokeOpacity=".3" strokeWidth="12" />
        <g className="art-spin-r">
          <circle r="58" stroke="#3F35B0" strokeWidth="12" strokeDasharray="150 400" />
        </g>
        <circle r="32" stroke="#8957E0" strokeWidth="8" strokeDasharray="90 300" />
      </g>
    ),
  },
  {
    title: "Compliance & Risk",
    description:
      "Strengthen financial controls through AML, CKYC, identity validation, audit, regulatory reporting and credit-bureau integration.",
    palette: { id: "q8", bg: ["#FBFEFD", "#E6F7F2", "#D0EFEA"], blobA: "#8957E0", blobB: "#A0DCE2", g: ["#56E6BD", "#0E7FA6"] },
    glass: { left: "20%", top: "16%", width: "60%", height: "50%" },
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
    art: (p) => (
      <>
        <g fill="none" stroke="#FFFFFF">
          <circle className="art-ring" cx="150" cy="172" r="90" strokeOpacity=".8" />
          <circle className="art-ring" cx="150" cy="172" r="90" strokeOpacity=".8" style={{ animationDelay: "1.5s" }} />
        </g>
        <g className="art-float" filter={`url(#${p.id}s)`} transform="translate(0 -14)">
          <path d="M150 105 L212 128 V182 C212 222 186 250 150 262 C114 250 88 222 88 182 V128Z" fill="#FFFFFF" />
          <path d="M150 118 L200 137 V182 C200 214 179 237 150 247 C121 237 100 214 100 182 V137Z" fill={`url(#${p.id}g)`} />
          <path d="M126 184l17 17 32-34" stroke="#FFFFFF" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </>
    ),
  },
];

/* ---------- styles (ported from the design) ---------- */

const carouselStyles = `
@keyframes scBlurIn{from{opacity:0;filter:blur(14px);transform:translateY(22px)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes scPulse{0%,100%{opacity:.75;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
@keyframes scSpin{to{transform:rotate(360deg)}}
@keyframes artFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes artFlow{to{stroke-dashoffset:-60}}
@keyframes artRise{0%,100%{transform:translateY(4px)}50%{transform:translateY(-6px)}}
@keyframes artTile{0%,100%{opacity:1}50%{opacity:.55}}
@keyframes artRing{0%{r:70;opacity:.7}100%{r:140;opacity:0}}

@supports (animation-timeline: view()) {
  #solutions-carousel .sv{animation:scBlurIn linear both;animation-timeline:view();animation-range:entry 0% cover 28%}
  #solutions-carousel .d1{animation-range:entry 6% cover 31%}
  #solutions-carousel .d2{animation-range:entry 12% cover 34%}
}

.sc-btn{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 18px;border-radius:10px;font-size:15px;font-weight:600;color:#FFFFFF;background:linear-gradient(180deg,#1F7FE0,#032683);box-shadow:0 12px 24px -12px rgba(3,38,131,.8),inset 0 1px 0 rgba(255,255,255,.35);transition:transform .25s ease,box-shadow .25s ease}
.sc-btn:hover{color:#FFFFFF;transform:translateY(-2px);box-shadow:0 16px 30px -12px rgba(3,38,131,.85),inset 0 1px 0 rgba(255,255,255,.35)}

.sc-nav{width:38px;height:38px;border-radius:50%;border:0;display:inline-flex;align-items:center;justify-content:center;transition:background-color .25s ease,color .25s ease;cursor:pointer;background:#E6F1FB;color:#032683}
.sc-nav:disabled{cursor:default;background:#F3F6FA;color:#B5C0D3}
.sc-dot{height:4px;border:0;padding:0;border-radius:4px;cursor:pointer;transition:all .4s ease;width:12px;background:#DCE4F0}
.sc-dot[aria-current="true"]{width:28px;background:#0094D3}

.sc-track{display:flex;gap:20px;transition:transform .9s cubic-bezier(.16,.84,.3,1);will-change:transform}
.sc-card{flex:none;width:270px}
.sc-art{position:relative;display:block;aspect-ratio:3/4;border-radius:16px;overflow:hidden;background:#E3EFFB;box-shadow:0 18px 40px -30px rgba(3,46,137,.35),inset 0 0 0 1px rgba(3,46,137,.06);isolation:isolate}
.sc-layer{position:absolute;inset:0;width:100%;height:100%;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.sc-layer:not(.sc-fg) circle{opacity:.18}
.sc-fg{transform:scale(.72) translateY(-9%);filter:saturate(.8) drop-shadow(0 18px 22px rgba(3,46,137,.14))}
.sc-card:hover .sc-fg{transform:scale(.76) translateY(-11%)}
.sc-card:hover .sc-layer:not(.sc-fg){transform:scale(1.08)}
.sc-glass{position:absolute;border-radius:20px;transform:scale(.8);transform-origin:50% 40%;background:linear-gradient(140deg,rgba(255,255,255,.7),rgba(255,255,255,.25));border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #FFFFFF,0 14px 30px -20px rgba(3,46,137,.25);-webkit-backdrop-filter:blur(14px) saturate(150%);backdrop-filter:blur(14px) saturate(150%);transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.sc-card:hover .sc-glass{transform:scale(.82) translateY(-4px)}
.sc-badge{position:absolute;left:14px;top:14px;z-index:3;min-width:34px;height:28px;padding:0 9px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#032E89;background:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
.sc-bar{position:absolute;left:12px;right:12px;bottom:12px;z-index:3;display:flex;align-items:center;gap:10px;min-height:46px;padding:8px 14px 8px 8px;border-radius:12px;background:rgba(255,255,255,.82);border:1px solid rgba(255,255,255,.85);box-shadow:0 10px 24px -14px rgba(3,46,137,.4);-webkit-backdrop-filter:blur(16px) saturate(160%);backdrop-filter:blur(16px) saturate(160%);font-weight:700;font-size:15px;letter-spacing:-0.015em;color:#06123A;line-height:1.2}
.sc-bar-ic{flex:none;width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.4);filter:saturate(.85)}
.sc-bar-ic svg{width:14px;height:14px}
.sc-link{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:15px;font-weight:600;color:#0072B8}
.sc-link svg{transition:transform .25s ease}
.sc-card:hover .sc-link svg{transform:translateX(3px)}

.art-float{animation:artFloat 6s ease-in-out infinite}
.art-pulse{animation:scPulse 4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
.art-flow{stroke-dasharray:40 20;animation:artFlow 3s linear infinite}
.art-flow2{stroke-dasharray:4 6;animation:artFlow 2.4s linear infinite}
.art-rise{animation:artRise 5s ease-in-out infinite}
.art-spin{animation:scSpin 14s linear infinite}
.art-spin-r{animation:scSpin 20s linear infinite reverse}
.art-tile{animation:artTile 4s ease-in-out infinite}
.art-ring{animation:artRing 3s ease-out infinite}

@media (max-width:900px){
  .sc-viewport{overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}
  .sc-viewport::-webkit-scrollbar{display:none}
  .sc-track{transform:none !important}
  .sc-card{scroll-snap-align:start}
}
@media (min-width:901px){.sc-viewport{overflow:hidden}}

@media (prefers-reduced-motion: reduce){
  .sc-track{transition:none}
  .art-float,.art-pulse,.art-flow,.art-flow2,.art-rise,.art-spin,.art-spin-r,.art-tile,.art-ring{animation:none}
}
`;

const CARD_STEP = 290; // card width (270) + gap (20)
const MOBILE_QUERY = "(max-width: 900px)";

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export default function SolutionsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stops, setStops] = useState<number[]>([0, 290, 580, 870, 1244]);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Work out the slide positions from the real track/viewport widths */
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const styles = getComputedStyle(viewport);
    const inner =
      viewport.clientWidth -
      parseFloat(styles.paddingLeft) -
      parseFloat(styles.paddingRight);
    const max = Math.max(0, track.scrollWidth - inner);

    const next: number[] = [];
    for (let x = 0; x < max - 40; x += CARD_STEP) next.push(x);
    next.push(max);

    setStops(next);
    setIndex((i) => Math.min(i, next.length - 1));
    setIsMobile(window.matchMedia(MOBILE_QUERY).matches);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* On mobile the viewport scrolls natively, so keep the dots in sync */
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !isMobile) return;
    const onScroll = () => {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const pos = viewport.scrollLeft;
      const last = stops.length - 1;
      if (pos >= maxScroll - 4) return setIndex(last);
      setIndex(Math.min(last, Math.round(pos / CARD_STEP)));
    };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [isMobile, stops.length]);

  const goTo = (i: number) => {
    const target = Math.max(0, Math.min(stops.length - 1, i));
    setIndex(target);
    if (isMobile && viewportRef.current) {
      viewportRef.current.scrollTo({ left: target * CARD_STEP, behavior: "smooth" });
    }
  };

  const offset = stops[index] ?? 0;

  return (
    <section
      id="solutions-carousel"
      className="relative bg-white pb-[90px] pt-10 sm:pb-[130px]"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <style>{carouselStyles}</style>

      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div
          className="grid items-start gap-x-16 gap-y-6 border-t border-[#E6ECF4] pt-14 sm:pt-[72px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))" }}
        >
          <div>
            <h2
              className="m-0 max-w-[560px] font-semibold text-[#0A1330]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              Solutions Built Around Banking&rsquo;s Real-World Needs
            </h2>
            <Link href="/contact" className="sc-btn sv d1 mt-[26px]">
              Explore More
            </Link>
          </div>
          <p className="sv d2 m-0 mt-1.5 text-[17px] leading-[1.6] text-[#4A5878]">
            LIST Software brings together purpose-built solutions across the
            banking lifecycle. Enabling financial institutions to modernize
            customer experiences, move money, manage risk, streamline
            operations, and turn banking data into actionable intelligence.
          </p>
        </div>

        <div className="mt-9 flex justify-end gap-2">
          <button
            type="button"
            className="sc-nav"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous solutions"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            type="button"
            className="sc-nav"
            onClick={() => goTo(index + 1)}
            disabled={index >= stops.length - 1}
            aria-label="Next solutions"
          >
            <ChevronIcon dir="right" />
          </button>
        </div>
      </div>

      <div ref={viewportRef} className="sc-viewport mx-auto mt-5 max-w-[1120px] px-4 sm:px-8">
        <div
          ref={trackRef}
          className="sc-track"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {solutions.map((item, i) => (
            <article key={item.title} className="sc-card">
              <Link href="/contact" className="sc-art" aria-label={`Explore ${item.title}`}>
                <ArtBackground p={item.palette} />
                <span className="sc-glass" aria-hidden="true" style={item.glass} />
                <svg
                  className="sc-layer sc-fg"
                  viewBox="0 0 300 400"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <ArtDefs p={item.palette} />
                  {item.art(item.palette)}
                </svg>
                <span className="sc-badge" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="sc-bar">
                  <span
                    className="sc-bar-ic"
                    style={{
                      background: `linear-gradient(145deg, ${item.palette.g[0]}, ${item.palette.g[1]})`,
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </span>
              </Link>
              <p className="m-0 mt-[18px] text-[15px] leading-[1.55] text-[#26324F]">
                {item.description}
              </p>
              <Link className="sc-link" href="/contact">
                Explore More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-7 flex max-w-[1120px] gap-1.5 px-4 sm:px-8">
        {stops.map((_, i) => (
          <button
            key={i}
            type="button"
            className="sc-dot"
            aria-label={`Show solutions from ${i + 1}`}
            aria-current={index === i}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

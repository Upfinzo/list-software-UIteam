"use client";

import Link from "next/link";
import "./SolutionsSection.css";
import { memo, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- shared icon helpers ---------- */

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

/* Soft halo behind the illustration + ground shadow under it */
function Halo({ n, color, shadowY = 136 }: { n: number; color: string; shadowY?: number }) {
  return (
    <>
      <defs>
        <radialGradient id={`d${n}halo`} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor={color} stopOpacity=".22" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`d${n}sh`} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#0A1F5C" stopOpacity=".28" />
          <stop offset="1" stopColor="#0A1F5C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="76" r="70" fill={`url(#d${n}halo)`} className="i3-halo" />
      <ellipse cx="80" cy={shadowY} rx="40" ry="7" fill={`url(#d${n}sh)`} className="i3-shadow" />
    </>
  );
}

function Ico({ children }: { children: ReactNode }) {
  return (
    <svg className="sc-ico" viewBox="0 0 160 160" aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}

/* ---------- 3D illustrations ---------- */

function CbsArt() {
  const discs = [
    { y: 96, d: 0, seam: 0, led: 0 },
    { y: 76, d: 0.25, seam: 0.4, led: 0.3 },
    { y: 56, d: 0.5, seam: 0.8, led: 0.6 },
  ];
  return (
    <Ico>
      <defs>
        <linearGradient id="g1t" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7FC0F5" />
          <stop offset="1" stopColor="#2A63D6" />
        </linearGradient>
        <linearGradient id="g1s" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0A2E8A" />
          <stop offset=".35" stopColor="#2F6BE0" />
          <stop offset=".6" stopColor="#4A86EC" />
          <stop offset="1" stopColor="#0A2E8A" />
        </linearGradient>
        <linearGradient id="g1c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#BFE0F6" />
        </linearGradient>
      </defs>
      <Halo n={1} color="#52AFE5" />
      <g className="i3-float">
        {discs.map(({ y, d, seam, led }) => (
          <g key={y} className="g-disc" style={{ animationDelay: `${d}s` }}>
            <path d={`M50 ${y} V${y + 14} A30 12 0 0 0 110 ${y + 14} V${y}Z`} fill="url(#g1s)" />
            <ellipse cx="80" cy={y} rx="30" ry="12" fill="url(#g1t)" />
            <ellipse cx="80" cy={y} rx="23" ry="9" fill="none" stroke="#FFFFFF" strokeOpacity=".45" />
            <path
              d={`M50 ${y + 14} A30 12 0 0 0 110 ${y + 14}`}
              stroke="#7FE3FF"
              strokeWidth="2"
              className="g-seam"
              style={{ animationDelay: `${seam}s` }}
            />
            <circle cx="100" cy={y + 11} r="1.8" fill="#56E6BD" className="f-led" style={{ animationDelay: `${led}s` }} />
          </g>
        ))}
        <path d="M54 64 Q52 58 58 54" stroke="#FFFFFF" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round" />
        <g className="g-cube" style={{ animationDelay: "0s" }}>
          <polygon points="111.9,40.8 124.0,47.8 124.0,59.0 111.9,52.0" fill="#7FB5EC" />
          <polygon points="136.1,40.8 124.0,47.8 124.0,59.0 136.1,52.0" fill="#A8CCF0" />
          <polygon points="124.0,33.8 136.1,40.8 124.0,47.8 111.9,40.8" fill="url(#g1c)" />
        </g>
        <g className="g-cube" style={{ animationDelay: "0.7s" }}>
          <polygon points="25.6,52.4 36.0,58.4 36.0,68.0 25.6,62.0" fill="#7FB5EC" />
          <polygon points="46.4,52.4 36.0,58.4 36.0,68.0 46.4,62.0" fill="#A8CCF0" />
          <polygon points="36.0,46.4 46.4,52.4 36.0,58.4 25.6,52.4" fill="url(#g1c)" />
        </g>
        <g className="g-cube" style={{ animationDelay: "1.4s" }}>
          <polygon points="117.3,88.0 126.0,93.0 126.0,101.0 117.3,96.0" fill="#7FB5EC" />
          <polygon points="134.7,88.0 126.0,93.0 126.0,101.0 134.7,96.0" fill="#A8CCF0" />
          <polygon points="126.0,83.0 134.7,88.0 126.0,93.0 117.3,88.0" fill="url(#g1c)" />
        </g>
      </g>
    </Ico>
  );
}

function DigitalArt() {
  const bars: [string, string][] = [
    ["71.8,64.1 76.2,66.6 76.2,76.6 71.8,74.1", "#8ED9BF"],
    ["79.6,60.6 84.0,63.1 84.0,81.1 79.6,78.6", "#8ED9BF"],
    ["87.4,70.1 91.7,72.6 91.7,85.6 87.4,83.1", "#8ED9BF"],
    ["95.2,65.6 99.5,68.1 99.5,90.1 95.2,87.6", "#0E8F6E"],
    ["103.0,76.1 107.3,78.6 107.3,94.6 103.0,92.1", "#8ED9BF"],
  ];
  return (
    <Ico>
      <defs>
        <linearGradient id="g2s" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9FBF5" />
          <stop offset="1" stopColor="#BDEBDA" />
        </linearGradient>
        <linearGradient id="g2b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7F9FC" />
          <stop offset="1" stopColor="#D5DEEA" />
        </linearGradient>
        <linearGradient id="g2g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DF2CF" />
          <stop offset="1" stopColor="#0E8F6E" />
        </linearGradient>
        <linearGradient id="g2p" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2B4C91" />
          <stop offset="1" stopColor="#071848" />
        </linearGradient>
      </defs>
      <Halo n={2} color="#56E6BD" />
      <g className="i3-float">
        <polygon points="63.3,33.0 115.3,63.0 115.3,107.0 63.3,77.0" fill="#0A1F5C" />
        <polygon points="117.9,61.5 115.3,63.0 115.3,107.0 117.9,105.5" fill="#16336E" />
        <polygon points="65.9,31.5 117.9,61.5 115.3,63.0 63.3,33.0" fill="#3A4F7A" />
        <polygon points="65.9,37.5 112.6,64.5 112.6,101.5 65.9,74.5" fill="url(#g2s)" />
        <polygon points="69.2,43.6 109.1,66.6 109.1,71.6 69.2,48.6" fill="url(#g2g)" />
        {bars.map(([points, fill], i) => (
          <polygon key={points} points={points} fill={fill} className="g-sbar" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
        <polygon points="65.7,37.7 83.9,48.2 65.7,60.7" fill="#FFFFFF" opacity=".35" />
        <polygon points="25.2,97.0 80.7,129.0 80.7,133.0 25.2,101.0" fill="#AEBBD0" />
        <polygon points="118.8,107.0 80.7,129.0 80.7,133.0 118.8,111.0" fill="#C4CFDF" />
        <polygon points="63.3,75.0 118.8,107.0 80.7,129.0 25.2,97.0" fill="url(#g2b)" />
        <polygon points="63.3,80.9 108.4,106.9 91.1,116.9 46.0,90.9" fill="#C9D4E4" />
        <polygon points="58.1,101.9 72.0,109.9 63.3,114.9 49.5,106.9" fill="#DCE4EF" />
        <g className="g-ph">
          <rect x="112" y="80" width="22" height="42" rx="6" fill="#04103A" transform="translate(3 2)" />
          <rect x="112" y="80" width="22" height="42" rx="6" fill="url(#g2p)" />
          <rect x="114.5" y="84" width="17" height="34" rx="3.5" fill="url(#g2s)" />
          <circle cx="123" cy="96" r="5" fill="url(#g2g)" />
          <path d="M120.6 96l1.8 1.8 3.4-3.6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="117" y="106" width="12" height="2.4" rx="1.2" fill="#8ED9BF" />
        </g>
        <g stroke="#0E8F6E" strokeWidth="2.6" strokeLinecap="round" fill="none">
          <path d="M117 66a9 9 0 0 1 12 0" className="ic-sig ic-sig1" />
          <path d="M112 60a16 16 0 0 1 22 0" className="ic-sig ic-sig2" />
        </g>
        <circle cx="123" cy="71" r="2.2" fill="#0E8F6E" />
      </g>
    </Ico>
  );
}

function PaymentsArt() {
  return (
    <Ico>
      <defs>
        <linearGradient id="e3a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A47BF0" />
          <stop offset="1" stopColor="#5B34B8" />
        </linearGradient>
        <linearGradient id="e3f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B696F5" />
          <stop offset="1" stopColor="#6E45CF" />
        </linearGradient>
        <linearGradient id="e3c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DF2CF" />
          <stop offset="1" stopColor="#0E8F6E" />
        </linearGradient>
        <linearGradient id="e3k" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE29A" />
          <stop offset="1" stopColor="#D99A16" />
        </linearGradient>
      </defs>
      <Halo n={3} color="#8957E0" />
      <g className="i3-float">
        <rect x="46" y="58" width="72" height="56" rx="12" fill="#3A1F86" transform="translate(4 5)" />
        <rect x="46" y="58" width="72" height="56" rx="12" fill="url(#e3a)" />
        <g className="e-card">
          <rect x="56" y="42" width="50" height="32" rx="5" fill="url(#e3c)" />
          <rect x="62" y="50" width="10" height="7" rx="1.5" fill="url(#e3k)" />
          <rect x="62" y="62" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity=".6" />
        </g>
        <rect x="46" y="70" width="72" height="44" rx="12" fill="url(#e3f)" />
        <path d="M50 74 Q50 70 56 70 L112 70" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" />
        <rect x="96" y="82" width="28" height="18" rx="7" fill="#4A2AA0" transform="translate(1.5 2)" />
        <rect x="96" y="82" width="28" height="18" rx="7" fill="#F4EEFF" />
        <circle cx="106" cy="91" r="3.6" fill="url(#e3a)" />
        <g className="i3-coin">
          <ellipse cx="124" cy="48" rx="10" ry="4.6" fill="#A86F05" />
          <rect x="114" y="43.5" width="20" height="4.5" fill="#B57A08" />
          <ellipse cx="124" cy="43.5" rx="10" ry="4.6" fill="url(#e3k)" />
          <text x="124" y="46" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#8A5A00">
            ₹
          </text>
        </g>
      </g>
    </Ico>
  );
}

/* Stack of gold coins; `count` coins resting on y=118 */
function CoinStack({ cx, count, delay }: { cx: number; count: number; delay: number }) {
  const bases = Array.from({ length: count }, (_, i) => 118 - i * 6);
  const top = bases[bases.length - 1] - 5;
  return (
    <g className="i3-bar" style={{ animationDelay: `${delay}s` }}>
      {bases.map((b) => (
        <g key={b}>
          <ellipse cx={cx} cy={b} rx="12" ry="5" fill="#A86F05" />
          <rect x={cx - 12} y={b - 5} width="24" height="5" fill="#C58B12" />
          <ellipse cx={cx} cy={b - 5} rx="12" ry="5" fill="url(#e4c)" />
        </g>
      ))}
      <ellipse cx={cx} cy={top} rx="7.5" ry="3" fill="none" stroke="#FFFFFF" strokeOpacity=".7" />
    </g>
  );
}

function LendingArt() {
  const arrow = "M40 84 L66 66 L82 74 L112 44";
  return (
    <Ico>
      <defs>
        <linearGradient id="e4c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE7A8" />
          <stop offset="1" stopColor="#E2A21C" />
        </linearGradient>
        <linearGradient id="e4a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5BA8F0" />
          <stop offset="1" stopColor="#0548D5" />
        </linearGradient>
      </defs>
      <Halo n={4} color="#F2BD4A" shadowY={128} />
      <g className="i3-float">
        <CoinStack cx={52} count={2} delay={0} />
        <CoinStack cx={80} count={4} delay={0.2} />
        <CoinStack cx={108} count={6} delay={0.4} />
        <path
          d={arrow}
          stroke="#032E89"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(2 3)"
          pathLength={1}
          className="e-arrow"
        />
        <path d={arrow} stroke="url(#e4a)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="e-arrow" />
        <g className="e-head">
          <path d="M104 38 L120 36 L118 52Z" fill="#032E89" transform="translate(2 3)" />
          <path d="M104 38 L120 36 L118 52Z" fill="#0548D5" stroke="#0548D5" strokeWidth="2" strokeLinejoin="round" />
        </g>
      </g>
    </Ico>
  );
}

function IntegrationArt() {
  return (
    <Ico>
      <defs>
        <radialGradient id="d5s" cx=".5" cy=".5" r=".6" fx=".35" fy=".3">
          <stop offset="0" stopColor="#9FD6FA" />
          <stop offset="1" stopColor="#0548D5" />
        </radialGradient>
        <radialGradient id="d5m" cx=".5" cy=".5" r=".6" fx=".35" fy=".3">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#52AFE5" />
        </radialGradient>
      </defs>
      <Halo n={5} color="#52AFE5" shadowY={132} />
      <g className="i3-float">
        <path d="M34 80 A46 15 0 0 1 126 80" stroke="#A8CCF0" strokeWidth="2" />
        <circle cx="80" cy="76" r="26" fill="url(#d5s)" />
        <ellipse cx="72" cy="66" rx="10" ry="6" fill="#FFFFFF" opacity=".45" />
        <path d="M34 80 A46 15 0 0 0 126 80" stroke="#7FB5EC" strokeWidth="2.2" />
        {[0, -2, -4].map((d) => (
          <g key={d} className="i3-ox" style={{ animationDelay: `${d}s` }}>
            <g className="i3-oy" style={{ animationDelay: `${d - 1.5}s` }}>
              <circle cx="80" cy="80" r="5.5" fill="url(#d5m)" stroke="#FFFFFF" strokeWidth="1.2" />
            </g>
          </g>
        ))}
      </g>
    </Ico>
  );
}

function OperationsArt() {
  const rows = [
    { y: 53, d: 0, w: 22 },
    { y: 71, d: 0.5, w: 16 },
    { y: 89, d: 1, w: 22 },
  ];
  return (
    <Ico>
      <defs>
        <linearGradient id="e6b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF8A70" />
          <stop offset="1" stopColor="#C23A24" />
        </linearGradient>
        <linearGradient id="e6m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4F7FB" />
          <stop offset="1" stopColor="#C9D4E3" />
        </linearGradient>
      </defs>
      <Halo n={6} color="#F2624A" />
      <g className="i3-float">
        <g className="e-tilt2">
          <rect x="50" y="34" width="60" height="86" rx="10" fill="#7E1D0F" transform="translate(5 5)" />
          <rect x="50" y="34" width="60" height="86" rx="10" fill="url(#e6b)" />
          <rect x="57" y="45" width="46" height="68" rx="5" fill="#FFFFFF" />
          <rect x="67" y="28" width="26" height="13" rx="4" fill="#8A9AB6" transform="translate(1.5 2)" />
          <rect x="67" y="28" width="26" height="13" rx="4" fill="url(#e6m)" />
          <circle cx="80" cy="33" r="2.5" fill="#8A9AB6" />
          {rows.map(({ y, d, w }) => (
            <g key={y}>
              <rect x="62" y={y} width="10" height="10" rx="3" fill="#FDEAE6" stroke="#F2A493" />
              <path
                d={`M64 ${y + 5}l2.5 2.5 4.5-5`}
                stroke="#C23A24"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                className="e-check"
                style={{ animationDelay: `${d}s` }}
              />
              <rect x="76" y={y + 2} width={w} height="3" rx="1.5" fill="#CBD6E6" />
              <rect x="76" y={y + 7} width="12" height="2.4" rx="1.2" fill="#E3EAF4" />
            </g>
          ))}
        </g>
        <g className="i3-pop">
          <circle cx="118" cy="104" r="12" fill="#0E8F6E" transform="translate(1.5 2)" />
          <circle cx="118" cy="104" r="12" fill="#56E6BD" />
          <path d="M112.5 104l3.8 3.8 7-7.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </Ico>
  );
}

function DataArt() {
  return (
    <Ico>
      <defs>
        <linearGradient id="e7a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A47BF0" />
          <stop offset="1" stopColor="#3F35B0" />
        </linearGradient>
        <linearGradient id="e7l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E5DCFF" />
          <stop offset="1" stopColor="#B9A6F5" />
        </linearGradient>
        <linearGradient id="e7g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DF2CF" />
          <stop offset="1" stopColor="#0E8F6E" />
        </linearGradient>
      </defs>
      <Halo n={7} color="#8957E0" shadowY={132} />
      <g className="i3-float">
        <path d="M76.0 86.0 L43.1 75.0 L43.1 87.0 L76.0 98.0Z" fill="#2A2380" />
        <path d="M76.0 86.0 L95.0 66.9 L95.0 78.9 L76.0 98.0Z" fill="#33298F" />
        <path d="M114.0 86.0 A38 22 0 0 1 76.0 108.0 L76.0 120.0 A38 22 0 0 0 114.0 98.0Z" fill="#33298F" />
        <path d="M76.0 108.0 A38 22 0 0 1 38.0 86.0 L38.0 98.0 A38 22 0 0 0 76.0 120.0Z" fill="#8F7BE0" />
        <path d="M76.0 86.0 L95.0 66.9 A38 22 0 0 1 76.0 108.0Z" fill="url(#e7a)" />
        <path d="M76.0 86.0 L76.0 108.0 A38 22 0 0 1 43.1 75.0Z" fill="url(#e7l)" />
        <path d="M76.0 86.0 L95.0 66.9 A38 22 0 0 1 113.4 89.8Z" fill="#FFFFFF" opacity=".14" />
        <g className="e-wedge">
          <path d="M82.0 70.0 L49.1 59.0 L49.1 71.0 L82.0 82.0Z" fill="#0A6B53" />
          <path d="M82.0 70.0 L101.0 50.9 L101.0 62.9 L82.0 82.0Z" fill="#0B7A5E" />
          <path d="M82.0 70.0 L49.1 59.0 A38 22 0 0 1 101.0 50.9Z" fill="url(#e7g)" />
        </g>
        <path d="M124 46 L127 54 L135 57 L127 60 L124 68 L121 60 L113 57 L121 54Z" fill="#B9A6F5" className="i3-spark" />
        <path
          d="M120 100 L122 104 L126 106 L122 108 L120 112 L118 108 L114 106 L118 104Z"
          fill="#56E6BD"
          className="i3-spark"
          style={{ animationDelay: "1.2s" }}
        />
      </g>
    </Ico>
  );
}

function ComplianceArt() {
  const shackle = "M62 78 V58 a18 18 0 0 1 36 0 V78";
  return (
    <Ico>
      <defs>
        <linearGradient id="e8b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DF2CF" />
          <stop offset="1" stopColor="#0E7FA6" />
        </linearGradient>
        <linearGradient id="e8s" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F4F7FB" />
          <stop offset="1" stopColor="#A9B8CF" />
        </linearGradient>
        <clipPath id="e8c">
          <rect x="48" y="72" width="64" height="50" rx="11" />
        </clipPath>
        <linearGradient id="e8w" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset=".5" stopColor="#FFFFFF" stopOpacity=".5" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <Halo n={8} color="#56E6BD" />
      <g className="i3-float">
        <g className="e-shackle">
          <path d={shackle} stroke="#7F8FAD" strokeWidth="10" strokeLinecap="round" transform="translate(2 2)" />
          <path d={shackle} stroke="url(#e8s)" strokeWidth="10" strokeLinecap="round" />
        </g>
        <rect x="48" y="72" width="64" height="50" rx="11" fill="#085A78" transform="translate(5 5)" />
        <rect x="48" y="72" width="64" height="50" rx="11" fill="url(#e8b)" />
        <path d="M52 80 Q52 76 58 76 L104 76" stroke="#FFFFFF" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round" />
        <g clipPath="url(#e8c)">
          <rect x="20" y="66" width="22" height="64" fill="url(#e8w)" className="i3-shine" />
        </g>
        <circle cx="80" cy="93" r="7" fill="#06405A" />
        <rect x="77" y="96" width="6" height="12" rx="3" fill="#06405A" />
        <circle cx="80" cy="93" r="7" fill="#56E6BD" className="e-key" />
      </g>
    </Ico>
  );
}

/* ---------- card data ---------- */

type Solution = {
  title: string;
  description: string;
  g: [string, string];
  icon: ReactNode;
  Art: () => ReactNode;
};

const solutions: Solution[] = [
  {
    title: "Custodian CBS",
    description:
      "The engine beneath every branch, ledger, and customer record, powering secure banking operations, connected digital experiences, intelligent workflows, payments, compliance, and modern financial infrastructure.",
    g: ["#52AFE5", "#032E89"],
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
      </svg>
    ),
    Art: CbsArt,
  },
  {
    title: "Digital Banking",
    description:
      "Extend the banking experience beyond the branch with mobile banking, internet banking, WhatsApp banking, e-passbook and digital customer services.",
    g: ["#56E6BD", "#0E8F6E"],
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
    Art: DigitalArt,
  },
  {
    title: "Payments & Transactions",
    description:
      "Connect banking operations to payment rails, clearing systems and transaction networks through solutions supporting RTGS, EFT, NACH, CTS, ATM, IMPS and other payment interfaces.",
    g: ["#8957E0", "#5B34B8"],
    icon: (
      <svg {...iconProps}>
        <path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5" />
      </svg>
    ),
    Art: PaymentsArt,
  },
  {
    title: "Lending & Credit",
    description:
      "Support the lending lifecycle with credit appraisal, loan processing, documentation, recovery and NPA management capabilities integrated into banking operations.",
    g: ["#F2BD4A", "#B57A08"],
    icon: (
      <svg {...iconProps}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
    Art: LendingArt,
  },
  {
    title: "Integration & Connectivity",
    description:
      "APIs, banking interfaces, third-party integrations, and connected systems that extend core banking capabilities.",
    g: ["#52AFE5", "#0548D5"],
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    Art: IntegrationArt,
  },
  {
    title: "Banking Operations",
    description:
      "Digitize and streamline everyday banking through solutions for branch operations, customer management, investments, recovery and operational workflows.",
    g: ["#F2624A", "#C23A24"],
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    Art: OperationsArt,
  },
  {
    title: "Data & Intelligence",
    description:
      "Turn banking information into actionable insight through business intelligence, reporting and analytics that support better operational and management decisions.",
    g: ["#8957E0", "#3F35B0"],
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v8l6 3" />
      </svg>
    ),
    Art: DataArt,
  },
  {
    title: "Compliance & Risk",
    description:
      "Strengthen financial controls through AML, CKYC, identity validation, audit, regulatory reporting and credit-bureau integration.",
    g: ["#56E6BD", "#0E7FA6"],
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
    Art: ComplianceArt,
  },
];

/* Cards never change, so keep them out of scroll-driven re-renders */
const SolutionCards = memo(function SolutionCards() {
  return (
    <>
      {solutions.map(({ title, description, g, icon, Art }, i) => (
        <article key={title} className="sc-card">
          <Link href="/contact" className="sc-art">
            <Art />
            <span className="sc-badge" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="sc-panel">
              <span className="sc-bar">
                <span className="sc-bar-ic" style={{ background: `linear-gradient(145deg, ${g[0]}, ${g[1]})` }}>
                  {icon}
                </span>
                {title}
              </span>
              <span className="sc-desc">
                <span>{description}</span>
              </span>
            </span>
          </Link>
        </article>
      ))}
    </>
  );
});

/* ---------- carousel ---------- */

const PER_PAGE = 4;
const PAGES = Math.ceil(solutions.length / PER_PAGE);
const DESKTOP_QUERY = "(min-width: 901px)";

/* Scroll progress through the pinned section → stage.
   0: heading only · 1: cards 1–4 rise in · 2: slide to cards 5–8 */
const STAGE_1_AT = 0.28;
const STAGE_2_AT = 0.64;
/* Where the nav buttons/dots scroll to for each page (middle of that stage) */
const PAGE_TARGETS = [0.46, 0.82];

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [desktop, setDesktop] = useState(false);
  const [stage, setStage] = useState(1);
  const [mobilePage, setMobilePage] = useState(0);

  const page = desktop ? (stage === 2 ? 1 : 0) : mobilePage;

  /* Pinned geometry: sticky top is pulled up when the stage is taller than the screen */
  const geometry = useCallback(() => {
    const section = sectionRef.current!;
    const h = stickyRef.current!.offsetHeight;
    const top = Math.min(0, window.innerHeight - h);
    const rect = section.getBoundingClientRect();
    return { rect, top, range: rect.height - h };
  }, []);

  /* Desktop: pin the section and map scroll progress to a stage */
  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;
    const mq = window.matchMedia(DESKTOP_QUERY);

    let frame = 0;
    const apply = () => {
      frame = 0;
      if (!mq.matches) return;
      const { rect, top, range } = geometry();
      const p = range > 0 ? (top - rect.top) / range : 0;
      setStage(p < STAGE_1_AT ? 0 : p < STAGE_2_AT ? 1 : 2);
    };
    const measure = () => {
      setDesktop(mq.matches);
      if (!mq.matches) {
        setStage(1);
        return;
      }
      const h = sticky.offsetHeight;
      section.style.setProperty("--sch", `${h}px`);
      section.style.setProperty("--sct", `${Math.min(0, window.innerHeight - h)}px`);
      apply();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    measure();
    const late = window.setTimeout(measure, 300); // after fonts/layout settle
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(late);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [geometry]);

  /* Mobile: the viewport scrolls natively, so keep the dots in sync */
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || desktop) return;
    const onScroll = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      setMobilePage(max > 0 && viewport.scrollLeft >= max / 2 ? 1 : 0);
    };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [desktop]);

  const goTo = (target: number) => {
    const pg = Math.max(0, Math.min(PAGES - 1, target));
    if (desktop) {
      const { rect, top, range } = geometry();
      window.scrollTo({ top: window.scrollY + rect.top - top + range * PAGE_TARGETS[pg], behavior: "smooth" });
      return;
    }
    const viewport = viewportRef.current;
    if (viewport) {
      const max = viewport.scrollWidth - viewport.clientWidth;
      viewport.scrollTo({ left: pg ? max : 0, behavior: "smooth" });
    }
    setMobilePage(pg);
  };

  return (
    <section
      ref={sectionRef}
      id="solutions-carousel"
      className={`sc-pin relative bg-white sc-s${desktop ? stage : 1}`}
    >
      <div ref={stickyRef} id="sc-sticky" className="sc-sticky">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div
            className="sc-head grid items-center gap-x-16 gap-y-6 border-t border-[#E6ECF4] pt-14 sm:pt-[72px]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))" }}
          >
            <div>
              <h2
                id="sc-h"
                className="m-0 font-semibold text-[#0A1330]"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.035em" }}
              >
                Solutions Built Around Banking&rsquo;s Real-World Needs
              </h2>
            </div>
            <p id="sc-p" className="sv d2 m-0 text-[17px] leading-[1.65] text-[#4A5878] sm:text-[19px]">
              LIST Software brings together purpose-built solutions across the banking lifecycle. Enabling
              financial institutions to modernize customer experiences, move money, manage risk, streamline
              operations, and turn banking data into actionable intelligence.
            </p>
          </div>

          <div className="sc-navs mt-9 flex justify-end gap-2">
            <button
              type="button"
              className="sc-nav"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous solutions"
            >
              <ChevronIcon dir="left" />
            </button>
            <button
              type="button"
              className="sc-nav"
              onClick={() => goTo(page + 1)}
              disabled={page >= PAGES - 1}
              aria-label="Next solutions"
            >
              <ChevronIcon dir="right" />
            </button>
          </div>
        </div>

        <div ref={viewportRef} className="sc-viewport mx-auto mt-5 max-w-[1120px] px-5 sm:px-8">
          <div
            className="sc-track"
            style={desktop ? { transform: `translateX(calc(${-page * 100}% - ${page * 20}px))` } : undefined}
          >
            <SolutionCards />
          </div>
        </div>

        <div className="sc-dots mx-auto mt-7 flex max-w-[1120px] gap-1.5 px-5 sm:px-8">
          {Array.from({ length: PAGES }, (_, i) => (
            <button
              key={i}
              type="button"
              className="sc-dot"
              aria-label={`Show solutions ${i * PER_PAGE + 1} to ${Math.min(solutions.length, (i + 1) * PER_PAGE)}`}
              aria-current={page === i}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

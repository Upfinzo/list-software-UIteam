"use client";

import React from "react";
import "./CapabilityConnected.css";

/* ─────────────────────────────────────────────
   Shared micro-components
───────────────────────────────────────────── */

const IconExpand = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </svg>
);

const IconChevron = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const IconCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5 9-10" />
  </svg>
);

interface CardHeaderProps {
  title: string;
  desc: string;
  ariaLabel: string;
}
const CardHeader = ({ title, desc, ariaLabel }: CardHeaderProps) => (
  <>
    <div className="cp-head">
      <h3 className="cp-title">
        {title}
        <span className="cp-desc"> {desc}</span>
      </h3>
      <a className="cp-plus" href="#contact" aria-label={ariaLabel}>
        <IconExpand />
      </a>
    </div>
    <a className="cp-more" href="#contact">
      Explore More <IconChevron />
    </a>
  </>
);

/* ─────────────────────────────────────────────
   Dot-field SVG  (card 1 background)
   Seeded pseudo-random so it's deterministic
   but generates many varied dots.
───────────────────────────────────────────── */
const DOT_COLORS = ["#52AFE5", "#0548D5", "#8957E0"];
const TW_COLORS  = ["#52AFE5", "#0548D5", "#8957E0"];

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function DotField() {
  const rand = mulberry32(42);
  const dots: React.ReactNode[] = [];

  // 200 background dots
  for (let i = 0; i < 200; i++) {
    const cx = (rand() * 300 + 50).toFixed(1);
    const cy = (rand() * 240 + 30).toFixed(1);
    const r  = (rand() * 1.3 + 0.5).toFixed(1);
    const fill = DOT_COLORS[Math.floor(rand() * 3)];
    const opacity = (rand() * 0.65 + 0.25).toFixed(2);
    dots.push(
      <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity={opacity} />
    );
  }

  // 14 twinkling highlight dots
  const twData = [
    [113.8, 84.0, "0.62s", "#52AFE5"], [315.3, 170.5, "0.83s", "#0548D5"],
    [85.7, 125.8, "1.39s", "#8957E0"], [228.6, 56.1, "0.22s", "#0548D5"],
    [224.4, 244.7, "1.05s", "#8957E0"], [315.0, 171.6, "1.49s", "#8957E0"],
    [165.9, 242.6, "2.99s", "#8957E0"], [135.6, 231.1, "0.03s", "#8957E0"],
    [82.0, 147.2, "2.28s", "#0548D5"], [279.0, 78.2, "2.37s", "#0548D5"],
    [83.1, 163.0, "2.09s", "#0548D5"], [204.0, 246.7, "0.66s", "#0548D5"],
    [151.7, 61.7, "0.18s", "#52AFE5"], [200.3, 246.8, "0.27s", "#52AFE5"],
  ] as const;

  const twDots = twData.map(([cx, cy, delay, fill], i) => (
    <circle key={`tw-${i}`} className="cpx-tw" cx={cx} cy={cy} r={2.4}
      fill={fill} style={{ animationDelay: delay }} />
  ));

  return (
    <svg className="cpx-svg cpx-halo" viewBox="0 0 400 300" aria-hidden="true">
      <g className="cpx-rot">
        {dots}
        {twDots}
      </g>
    </svg>
  );
}

/* Globe dot-field for "Connected Core" card */
function GlobeDots() {
  // Concentric latitude rows of a hemisphere — structured data
  const rows: Array<{ y: number; xs: number[]; r: number; op: number; fills: string[] }> = [
    { y: 397.7, xs: [221.1,222.6,223.8,224.8,225.5,225.9,226.0],               r: 0.65, op: 0.29, fills: ["#56E6BD","#52AFE5","#56E6BD","#52AFE5","#56E6BD","#56E6BD","#52AFE5"] },
    { y: 397.7, xs: [156.4,157.1,158.3,159.9,162.0,238.0,240.1,241.7,242.9,243.6,243.9], r: 0.68, op: 0.30, fills: Array(11).fill("#032E89") },
    { y: 393.4, xs: [139.0,139.3,140.3,142.0,144.3,147.2,150.6,252.8,255.7,258.0,259.7,260.7,261.0], r: 0.75, op: 0.32, fills: ["#032E89","#032E89","#032E89","#032E89","#52AFE5","#52AFE5","#52AFE5","#032E89","#52AFE5","#52AFE5","#56E6BD","#56E6BD","#032E89"] },
    { y: 387.0, xs: [122.7,123.2,124.4,126.5,129.4,133.1,137.5,270.6,273.5,275.6,276.8,277.3], r: 0.80, op: 0.35, fills: ["#52AFE5","#52AFE5","#032E89","#52AFE5","#032E89","#52AFE5","#52AFE5","#52AFE5","#52AFE5","#52AFE5","#52AFE5","#52AFE5"] },
    { y: 378.6, xs: [107.7,108.2,109.7,112.2,115.6,120.0,125.3,131.4,284.4,287.8,290.3,291.8,292.3], r: 0.85, op: 0.38, fills: ["#56E6BD","#56E6BD","#52AFE5","#52AFE5","#52AFE5","#032E89","#52AFE5","#56E6BD","#52AFE5","#56E6BD","#032E89","#56E6BD","#56E6BD"] },
    { y: 368.2, xs: [93.9,94.5,96.3,99.1,103.1,108.1,114.2,121.2,303.7,305.5], r: 0.9, op: 0.41, fills: ["#52AFE5","#52AFE5","#032E89","#56E6BD","#032E89","#52AFE5","#032E89","#56E6BD","#52AFE5","#52AFE5"] },
    { y: 356.1, xs: [81.8,82.4,84.4,87.6,92.0,97.6,104.4,112.2], r: 1.0, op: 0.47, fills: ["#52AFE5","#56E6BD","#032E89","#032E89","#032E89","#52AFE5","#52AFE5","#52AFE5"] },
    { y: 342.3, xs: [71.4,72.1,74.2,77.7,82.5,88.7,96.0,104.5,114.0], r: 1.1, op: 0.53, fills: ["#56E6BD","#032E89","#032E89","#032E89","#56E6BD","#032E89","#032E89","#52AFE5","#56E6BD"] },
    { y: 327.3, xs: [63.0,63.7,66.0,69.7,74.8,81.3,89.1,98.2,108.3,268.5,280.5,291.7,301.8,310.9,318.7], r: 1.2, op: 0.59, fills: ["#52AFE5","#032E89","#032E89","#032E89","#52AFE5","#032E89","#032E89","#032E89","#032E89","#032E89","#032E89","#032E89","#56E6BD","#52AFE5","#52AFE5"] },
    { y: 311.0, xs: [56.6,57.3,59.7,63.6,69.0,75.8,83.9,93.4,104.0,200.0,215.0,229.8,244.3,258.3,271.7,284.3,296.0,306.6,316.1,324.2,331.0], r: 1.3, op: 0.65, fills: ["#032E89","#56E6BD","#56E6BD","#56E6BD","#56E6BD","#56E6BD","#56E6BD","#032E89","#52AFE5","#56E6BD","#032E89","#032E89","#52AFE5","#56E6BD","#032E89","#56E6BD","#56E6BD","#56E6BD","#56E6BD","#032E89","#032E89"] },
    { y: 293.9, xs: [52.3,53.1,55.5,59.5,65.1,72.1,80.5,169.3,184.6,200.0,215.4,230.7,245.6,260.1,273.9,286.8,298.8,309.8,319.5,327.9,334.9,340.5], r: 1.4, op: 0.71, fills: ["#52AFE5","#032E89","#56E6BD","#52AFE5","#032E89","#56E6BD","#52AFE5","#56E6BD","#56E6BD","#52AFE5","#56E6BD","#52AFE5","#52AFE5","#032E89","#032E89","#56E6BD","#52AFE5","#52AFE5","#56E6BD","#52AFE5","#56E6BD","#032E89"] },
    { y: 276.0, xs: [153.7,168.9,184.3,200.0,215.7,231.1,246.3,260.9,274.9,288.0,300.2,311.3,321.2,329.7,336.8,342.5,346.4], r: 1.6, op: 0.80, fills: ["#52AFE5","#56E6BD","#032E89","#032E89","#032E89","#032E89","#032E89","#032E89","#52AFE5","#56E6BD","#032E89","#032E89","#52AFE5","#52AFE5","#56E6BD","#56E6BD","#032E89"] },
    { y: 257.9, xs: [153.8,168.9,184.4,200.0,215.6,231.1,246.2,260.9,274.8,288.0,300.1,311.2,321.1,329.6,336.7,342.3,346.4], r: 1.65, op: 0.83, fills: ["#032E89","#56E6BD","#52AFE5","#56E6BD","#52AFE5","#52AFE5","#56E6BD","#56E6BD","#56E6BD","#56E6BD","#032E89","#56E6BD","#52AFE5","#52AFE5","#032E89","#52AFE5","#032E89"] },
    { y: 239.5, xs: [154.5,169.4,184.6,200.0,215.4,230.6,245.5,259.9,273.6,286.5,298.5,309.4,319.1,327.5,334.5,340.0,344.0], r: 1.65, op: 0.85, fills: ["#56E6BD","#56E6BD","#032E89","#52AFE5","#52AFE5","#52AFE5","#032E89","#56E6BD","#032E89","#032E89","#56E6BD","#032E89","#56E6BD","#56E6BD","#56E6BD","#52AFE5","#56E6BD"] },
    { y: 221.4, xs: [170.3,185.1,200.0,214.9,229.7,244.1,258.0,271.3,283.9,295.5,306.0,315.4,323.5,330.3,335.7,339.5], r: 1.6, op: 0.84, fills: ["#56E6BD","#032E89","#52AFE5","#52AFE5","#56E6BD","#52AFE5","#56E6BD","#56E6BD","#032E89","#52AFE5","#56E6BD","#52AFE5","#52AFE5","#56E6BD","#032E89","#56E6BD"] },
    { y: 203.6, xs: [171.7,185.8,200.0,214.2,228.3,242.0,255.3,268.0,279.9,291.0,301.0,310.0,317.7,324.2,329.3,333.0], r: 1.6, op: 0.82, fills: ["#56E6BD","#032E89","#52AFE5","#56E6BD","#52AFE5","#52AFE5","#52AFE5","#52AFE5","#52AFE5","#032E89","#52AFE5","#032E89","#56E6BD","#032E89","#56E6BD","#56E6BD"] },
    { y: 186.6, xs: [173.6,186.7,200.0,213.3,226.4,239.3,251.7,263.6,274.8,285.1,294.5,302.9,310.2,316.2,321.0,324.4], r: 1.5, op: 0.80, fills: ["#52AFE5","#52AFE5","#56E6BD","#56E6BD","#032E89","#032E89","#032E89","#032E89","#56E6BD","#032E89","#032E89","#52AFE5","#032E89","#52AFE5","#52AFE5","#56E6BD"] },
    { y: 170.5, xs: [187.8,200.0,212.2,224.2,236.0,247.4,258.3,268.5,278.0,286.6,294.3,301.0], r: 1.5, op: 0.75, fills: ["#52AFE5","#56E6BD","#032E89","#56E6BD","#56E6BD","#032E89","#56E6BD","#52AFE5","#032E89","#032E89","#56E6BD","#56E6BD"] },
    { y: 155.6, xs: [200.0,210.9,221.7,232.2,242.4,252.1,261.2], r: 1.4, op: 0.70, fills: ["#52AFE5","#56E6BD","#032E89","#032E89","#52AFE5","#032E89","#56E6BD"] },
    { y: 142.1, xs: [200.0,210.9,221.7,232.2,242.4,252.1,261.2], r: 1.4, op: 0.68, fills: ["#52AFE5","#56E6BD","#032E89","#032E89","#52AFE5","#032E89","#56E6BD"] },
    { y: 105.8, xs: [169.3,172.3,175.7,179.3,183.2,187.2,191.4,195.7], r: 0.9, op: 0.40, fills: Array(8).fill("#032E89").map((f, i) => i > 3 ? "#52AFE5" : i > 5 ? "#56E6BD" : f) },
  ];

  return (
    <>
      {rows.map((row, ri) =>
        row.xs.map((cx, ci) => (
          <circle
            key={`${ri}-${ci}`}
            cx={cx} cy={row.y}
            r={row.r}
            fill={row.fills[ci] || row.fills[0]}
            opacity={(row.op + ci * 0.005).toFixed(2)}
          />
        ))
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function CapabilityConnected() {
  return (
    <section
      id="capabilities"
      style={{
        position: "relative",
        background: "#F6F9FC",
        padding: "100px 0 110px",
        borderTop: "1px solid #E6ECF4",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 28px" }}>
        <h2
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "#0A1330",
          }}
        >
          Every Capability Connected.
        </h2>

        <div className="cp-grid" style={{ marginTop: "40px" }}>

          {/* ── ROW 1 ── */}
          <div className="cp-row">

            {/* Card 1 – Customer & Account Management (wide) */}
            <article className="cp-card cp-wide">
              <CardHeader
                title="Customer & Account Management"
                desc="Manage customer profiles, relationships, and account operations across the complete banking lifecycle."
                ariaLabel="Explore Customer & Account Management"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <span
                    className="cpx-glow"
                    style={{ background: "radial-gradient(closest-side, #0548D555, transparent)" }}
                  />
                  <DotField />
                </span>

                {/* Customer profile overlay */}
                <div className="cp-ui" style={{ left: "6%", bottom: "14%", width: "46%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                      width: 34, height: 34, borderRadius: "50%",
                      background: "linear-gradient(145deg, #52AFE5, #032E89)",
                      color: "#FFFFFF", fontSize: 12, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>AK</span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: "block", fontWeight: 600, fontSize: 13 }}>Anita Kulkarni</span>
                      <span style={{ display: "block", fontSize: 11, color: "#6A789A" }}>Customer since 2014</span>
                    </span>
                    <span className="cp-ok"><IconCheck /> KYC</span>
                  </div>
                  <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="cp-chip">Customers</span>
                    <span className="cp-chip">Relationships</span>
                    <span className="cp-chip">Accounts</span>
                  </div>
                </div>

                {/* Linked accounts overlay */}
                <div className="cp-ui cp-ui-2" style={{ right: "6%", top: "12%", width: "38%" }}>
                  <p className="cp-ui-k">Linked accounts</p>
                  <div className="cp-row"><span>Savings</span><b>₹1,42,295</b></div>
                  <div className="cp-row"><span>Term deposit</span><b>₹3,00,000</b></div>
                  <div className="cp-row" style={{ border: 0 }}><span>Current</span><b>₹68,410</b></div>
                </div>
              </div>
            </article>

            {/* Card 2 – Deposits & Transaction Processing */}
            <article className="cp-card">
              <CardHeader
                title="Deposits & Transaction Processing"
                desc="Manage deposits, withdrawals, transfers, and everyday transactions across branches and connected banking channels."
                ariaLabel="Explore Deposits & Transaction Processing"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <span
                    className="cpx-glow"
                    style={{ background: "radial-gradient(closest-side, #0548D566, transparent)", top: "6%" }}
                  />
                  <span
                    className="cpx-card"
                    style={{
                      backgroundImage:
                        "linear-gradient(115deg,#56E6BD 0%,#52AFE5 22%,#FFFFFF 38%,#0548D5 55%,#56E6BD 75%,#52AFE5 100%)",
                    }}
                  >
                    <span className="cpx-chip" />
                    <span className="cpx-sheen" />
                  </span>
                </span>
                <div className="cp-ui" style={{ left: "8%", right: "8%", bottom: "12%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "#6A789A" }}>Transfer</span>
                    <span className="cp-ok"><IconCheck /> Posted</span>
                  </div>
                  <p style={{ margin: "4px 0 8px", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
                    ₹25,000.00
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="cp-chip">Deposits</span>
                    <span className="cp-chip">Transfers</span>
                    <span className="cp-chip">Transactions</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3 – Accounting & Financial Controls */}
            <article className="cp-card">
              <CardHeader
                title="Accounting & Financial Controls"
                desc="Maintain accounting, financial records, and operational controls across core banking activities."
                ariaLabel="Explore Accounting & Financial Controls"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <svg className="cpx-svg" viewBox="0 0 400 300"
                    preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="cpxs2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#8957E0" />
                        <stop offset=".45" stopColor="#52AFE5" />
                        <stop offset=".7" stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#56E6BD" />
                      </linearGradient>
                    </defs>
                    <g className="cpx-silkwave">
                      {[210, 228, 246, 264, 282].map((base, i) => (
                        <path key={i}
                          d={`M-40 ${base} C 80 ${base-90}, 160 ${base+90}, 260 ${base-40} S 400 ${base-120}, 460 ${base-70} L 460 ${base-40} C 400 ${base-80}, 330 ${base}, 260 ${base} S 80 ${base-60}, -40 ${base+30} Z`}
                          fill="url(#cpxs2)"
                          opacity={(0.90 - i * 0.14).toFixed(2)}
                        />
                      ))}
                    </g>
                  </svg>
                </span>
                <div className="cp-ui" style={{ left: "8%", right: "8%", bottom: "12%" }}>
                  <div className="cp-row"><span>Debit</span><b>₹4,80,000</b></div>
                  <div className="cp-row"><span>Credit</span><b>₹4,80,000</b></div>
                  <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                    <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <span className="cp-chip">Accounting</span>
                      <span className="cp-chip">Financial controls</span>
                    </span>
                    <span className="cp-ok"><IconCheck /></span>
                  </div>
                </div>
              </div>
            </article>

          </div>{/* end row 1 */}

          {/* ── ROW 2 ── */}
          <div className="cp-row">

            {/* Card 4 – Lending & Credit Operations */}
            <article className="cp-card">
              <CardHeader
                title="Lending & Credit Operations"
                desc="Support loan origination and servicing with connected capabilities for credit appraisal, documentation, recovery, and NPA management."
                ariaLabel="Explore Lending & Credit Operations"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <span
                    className="cpx-wedge"
                    style={{ "--c1": "#F2BD4A", "--c2": "#F2624A", "--c3": "#8957E0" } as React.CSSProperties}
                  />
                </span>
                <div className="cp-bars" aria-hidden="true">
                  <span style={{ height: "30%" }} />
                  <span style={{ height: "46%" }} />
                  <span style={{ height: "62%" }} />
                  <span style={{ height: "82%" }} />
                </div>
                <div className="cp-ui" style={{ left: "8%", right: "8%", bottom: "12%" }}>
                  <div className="cp-steps">
                    <span className="on">Origination</span>
                    <span className="on">Servicing</span>
                    <span className="cur">Recovery</span>
                  </div>
                  <div style={{ marginTop: 8, height: 6, borderRadius: 6, background: "#F1F4F9", overflow: "hidden" }}>
                    <span className="cp-prog" style={{
                      display: "block", height: "100%", width: "72%",
                      borderRadius: 6,
                      background: "linear-gradient(90deg, #F2BD4A, #F2624A)",
                    }} />
                  </div>
                </div>
              </div>
            </article>

            {/* Card 5 – Branch & Day-to-Day Operations */}
            <article className="cp-card">
              <CardHeader
                title="Branch & Day-to-Day Operations"
                desc="Equip banking teams with the workflows and controls needed to manage routine branch operations efficiently."
                ariaLabel="Explore Branch & Day-to-Day Operations"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <span
                    className="cpx-glow"
                    style={{
                      background: "radial-gradient(closest-side, #56E6BD55, transparent)",
                      left: "auto", right: "-20%", top: "30%",
                    }}
                  />
                  <svg className="cpx-svg" viewBox="0 0 400 300"
                    preserveAspectRatio="xMaxYMax slice" aria-hidden="true"
                    fill="none" strokeWidth="2.2" strokeDasharray="1.5 7" strokeLinecap="round">
                    {([
                      [60, "#52AFE5", "0.0s"], [115, "#56E6BD", "0.5s"],
                      [170, "#0548D5", "1.0s"], [225, "#52AFE5", "1.5s"],
                      [280, "#56E6BD", "2.0s"], [335, "#0548D5", "2.5s"],
                    ] as const).map(([r, stroke, delay]) => (
                      <circle key={r} className="cpx-ring" cx="360" cy="300" r={r}
                        stroke={stroke} style={{ animationDelay: delay }} />
                    ))}
                  </svg>
                </span>
                <div className="cp-ui" style={{ left: "8%", right: "8%", bottom: "12%" }}>
                  {[
                    ["Branches", "on", false],
                    ["Workflows", "on", false],
                    ["Operations", "on d", true],
                  ].map(([label, cls, noBorder]) => (
                    <div key={label as string} className="cp-task" style={noBorder ? { border: 0 } : {}}>
                      <span>{label}</span>
                      <span className={`cp-tg ${cls}`}><i /></span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Card 6 – Compliance & Control */}
            <article className="cp-card">
              <CardHeader
                title="Compliance & Control"
                desc="Strengthen operational governance with structured processes, controls, and oversight across banking activities."
                ariaLabel="Explore Compliance & Control"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <span
                    className="cpx-orb"
                    style={{ background: "radial-gradient(circle at 32% 28%, #FFFFFF 0%, #52AFE5 22%, #8957E0 55%, #0548D5 100%)" }}
                  />
                  <svg className="cpx-svg" viewBox="0 0 400 300" aria-hidden="true" fill="none">
                    <g className="cpx-orbit">
                      <ellipse cx="200" cy="120" rx="150" ry="44"
                        stroke="#8957E0" strokeWidth="1.6" strokeDasharray="2 6" strokeLinecap="round" />
                      <circle cx="350" cy="120" r="6" fill="#52AFE5" />
                      <circle cx="50"  cy="120" r="4" fill="#0548D5" />
                    </g>
                  </svg>
                </span>
                <div className="cp-ui" style={{ left: "8%", right: "8%", bottom: "12%", display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="34" height="38" viewBox="0 0 48 54" aria-hidden="true" style={{ flex: "none" }}>
                    <defs>
                      <linearGradient id="cpSh" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#8957E0" />
                        <stop offset="1" stopColor="#032E89" />
                      </linearGradient>
                    </defs>
                    <path d="M24 2 L44 9 V26 C44 39 35 48 24 52 C13 48 4 39 4 26 V9 Z" fill="url(#cpSh)" />
                    <path d="M15 27 L21 33 L33 20" stroke="#FFFFFF" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="cp-chip">Governance</span>
                    <span className="cp-chip">Oversight</span>
                  </span>
                </div>
              </div>
            </article>

            {/* Card 7 – Connected Core */}
            <article className="cp-card">
              <CardHeader
                title="Connected Core"
                desc="Extend Custodian through digital banking, payment interfaces, ATM, onboarding, reporting, APIs, and integrated banking solutions."
                ariaLabel="Explore Connected Core"
              />
              <div className="cp-vis">
                <span className="cpx-bg" aria-hidden="true">
                  <svg className="cpx-svg cpx-globe2" viewBox="0 0 400 300"
                    preserveAspectRatio="xMidYMax slice" aria-hidden="true"
                    fill="none" strokeLinecap="round">
                    <g className="cpx-globe-dots">
                      <GlobeDots />
                    </g>
                    {/* network paths */}
                    {([
                      ["M120 200 Q205.0 80 290 150", "0.0s"],
                      ["M150 300 Q225.0 170 300 240", "1.1s"],
                      ["M240 130 Q175.0 60 110 260", "2.2s"],
                    ] as const).map(([d, delay]) => (
                      <React.Fragment key={d}>
                        <path d={d} stroke="#032E89" strokeWidth="1.4" opacity=".8" />
                        <path className="cpx-pkt" pathLength="1" d={d}
                          stroke="#FFFFFF" strokeWidth="3" style={{ animationDelay: delay }} />
                      </React.Fragment>
                    ))}
                    {/* endpoint dots */}
                    {([[120,200],[290,150],[150,300],[300,240],[240,130],[110,260]] as const).map(([cx,cy]) => (
                      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.5} fill="#56E6BD" />
                    ))}
                  </svg>
                </span>
                <span className="cp-orb" style={{ left: "10%", top: "26%" }}>Digital banking</span>
                <span className="cp-orb" style={{ right: "8%", top: "40%", animationDelay: "1s" }}>Payments</span>
                <span className="cp-orb" style={{ left: "22%", bottom: "14%", animationDelay: "2s" }}>APIs</span>
              </div>
            </article>

          </div>{/* end row 2 */}
        </div>
      </div>
    </section>
  );
}

export { CapabilityConnected };

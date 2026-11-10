import type React from "react";
import Link from "next/link";
import { Images } from "@/assets/images/images";
import "./Hero.css";

/* word-by-word blur-in for the headline */
const headline: { word: string; accent?: boolean; br?: boolean }[] = [
  { word: "Build" },
  { word: "For" },
  { word: "Core" },
  { word: "Banking", br: true },
  { word: "Connected" },
  { word: "to" },
  { word: "Modern", accent: true },
  { word: "Finance", accent: true },
];

const subLines = [
  "LIST Software builds core banking technology for modern financial institutions,",
  "connecting the core to digital banking, payments, APIs, compliance and intelligent automation",
  "through a single evolving technology platform.",
];

const sideNav = ["Customers", "Accounts", "Transactions", "Lending", "Compliance", "Branches"];

/* [deposit height, deposit delay, withdraw height, withdraw delay, highlight] */
const bars: [number, number, number, number, boolean?][] = [
  [70, 0, 40, 0.3],
  [55, 0.5, 62, 0.2],
  [90, 0.9, 45, 0.6],
  [64, 0.1, 30, 1.1],
  [100, 0.7, 58, 0.4, true],
  [48, 1.3, 26, 0.8],
  [76, 0.35, 50, 1],
];

const txRows = [
  { label: "Deposit · Sangli", amount: "+₹2,500", credit: true },
  { label: "Withdraw · Teller 03", amount: "−₹850", credit: false },
  { label: "Bulk disbursement", amount: "+₹5,400", credit: true },
  { label: "Loan EMI received", amount: "+₹18,450", credit: true },
];

const glassChip: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: "rgba(255,255,255,.78)",
  border: "1px solid #FFFFFF",
  boxShadow: "0 20px 40px -20px rgba(3,38,131,.45)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  fontWeight: 600,
  fontSize: 15,
  color: "#0A1330",
};

const card: React.CSSProperties = {
  padding: 10,
  borderRadius: 11,
  background: "#FFFFFF",
  border: "1px solid #E8EEF6",
};

export default function Hero() {
  return (
    <section className="hb-section relative overflow-hidden bg-white">
      <div className="hb-glow" aria-hidden="true" />

      <div className="relative z-[2] mx-auto max-w-[1200px] px-6 pt-[120px] text-center sm:px-8 sm:pt-[150px]">
        <h1
          className="mx-auto mt-[26px] max-w-[1000px] font-bold text-[#06123A]"
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
          }}
        >
          {headline.map((w, i) => (
            <span key={w.word}>
              <span
                className="hb-lw"
                style={{
                  animationDelay: `${(0.15 + i * 0.07).toFixed(2)}s`,
                  color: w.accent ? "#0094D3" : undefined,
                }}
              >
                {w.word}
              </span>
              {w.br ? <br /> : " "}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.6] text-[#4A5878] sm:text-lg">
          {subLines.map((line, i) => (
            <span key={i}>
              <span className="hb-lw" style={{ animationDelay: `${0.7 + i * 0.15}s` }}>
                {line}
              </span>{" "}
            </span>
          ))}
        </p>

        <div
          className="hb-lw mt-8 flex flex-wrap justify-center gap-7"
          style={{ animationDelay: "1.1s", display: "flex", columnGap: 28, rowGap: 14 }}
        >
          <Link href="/contact" className="hb-btn hb-btn-p">
            Request a Demo
          </Link>
          <a href="#solutions-carousel" className="hb-btn hb-btn-o">
            Get Started
          </a>
        </div>

        {/* tablet + floating chips */}
        <div id="platform" className="relative mx-auto mt-[70px] max-w-[1040px] pb-[110px]">
          <div
            className="relative mx-auto"
            style={{ width: "min(740px, 90%)", perspective: 1800, perspectiveOrigin: "50% -10%" }}
          >
            <div className="hb-laptop" style={{ transformStyle: "preserve-3d" }}>
              <div className="hb-sway relative" style={{ transformStyle: "preserve-3d" }}>
                {/* metallic edge thickness layers */}
                {[2, 4, 6, 8, 10, 12, 14, 16].map((z) => (
                  <span
                    key={z}
                    aria-hidden="true"
                    className="hb-edge"
                    style={{ transform: `translateZ(-${z}px)` }}
                  />
                ))}
                <span aria-hidden="true" className="hb-key" style={{ right: "14%", width: 56 }} />
                <span
                  aria-hidden="true"
                  className="hb-key"
                  style={{ right: "calc(14% + 66px)", width: 30 }}
                />

                {/* aluminium frame */}
                <div className="hb-frame relative">
                  <div
                    className="relative rounded-[31px] bg-[#05070D] p-3 sm:p-5"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06)" }}
                  >
                    <span aria-hidden="true" className="hb-cam" />
                    <div
                      className="relative overflow-hidden rounded-xl bg-[#F5F8FD] text-left text-[#0A1330]"
                      style={{ aspectRatio: "16 / 10.6" }}
                    >
                      <span aria-hidden="true" className="hb-glare" />

                      {/* live toast */}
                      <div className="hb-toast">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E3F5EC] text-[#0A6B4B]">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                            <path d="M5 12l5 5 9-10" />
                          </svg>
                        </span>
                        RTGS ₹2,50,000 settled
                      </div>

                      <div className="absolute inset-0 flex">
                        {/* sidebar */}
                        <div className="hb-hide-sm w-[22%] flex-none flex-col gap-0.5 border-r border-[#E8EEF6] bg-white px-2.5 py-[26px] text-[11px] text-[#4A5878]">
                          <img
                            src={Images.common.logo}
                            alt=""
                            aria-hidden="true"
                            className="mx-1.5 mb-3.5 h-[22px] w-auto self-start"
                          />
                          <span className="relative overflow-hidden rounded-[7px] px-[9px] py-[7px] font-semibold text-white">
                            <span className="hb-navsel" />
                            <span className="relative">Dashboard</span>
                          </span>
                          {sideNav.map((item) => (
                            <span key={item} className="px-[9px] py-[7px]">
                              {item}
                            </span>
                          ))}
                        </div>

                        {/* main dashboard */}
                        <div className="flex min-w-0 flex-1 flex-col gap-2.5 px-3 pb-3 pt-5 sm:px-[18px] sm:pb-4 sm:pt-6">
                          <div className="flex items-center justify-between gap-2.5">
                            <p className="m-0 text-base font-bold tracking-[-0.02em]">Overview</p>
                            <span className="flex items-center gap-1.5 rounded-full border border-[#E3EAF4] bg-white px-2.5 py-1 text-[10px] text-[#4A5878]">
                              <span className="hb-live h-1.5 w-1.5 rounded-full bg-[#0A9B6A]" />
                              Live
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div style={card}>
                              <p className="m-0 text-[10px] text-[#6A789A]">Total users</p>
                              <p className="mb-0.5 mt-1 text-[13px] font-bold sm:text-[17px]">
                                3,56
                                <span className="hb-roll">
                                  <span className="hb-roll-in hb-r-slow">8901234567</span>
                                </span>
                              </p>
                              <p className="m-0 text-[9px] font-semibold text-[#0A7A55]">+8.5% today</p>
                            </div>
                            <div style={card}>
                              <p className="m-0 text-[10px] text-[#6A789A]">Transactions today</p>
                              <p className="mb-0.5 mt-1 text-[13px] font-bold sm:text-[17px]">
                                18,2
                                <span className="hb-roll">
                                  <span className="hb-roll-in hb-r-mid">4567890123</span>
                                </span>
                                <span className="hb-roll">
                                  <span className="hb-roll-in hb-r-fast">0123456789</span>
                                </span>
                              </p>
                              <p className="m-0 text-[9px] font-semibold text-[#0A7A55]">RTGS · NEFT · IMPS</p>
                            </div>
                            <div
                              className="hb-sheen relative overflow-hidden text-white"
                              style={{
                                padding: 10,
                                borderRadius: 11,
                                background: "linear-gradient(135deg, #032683, #0094D3)",
                              }}
                            >
                              <p className="m-0 text-[10px] text-[#CFE6FA]">Total deposit</p>
                              <p className="mb-0.5 mt-1 text-[13px] font-bold sm:text-[17px]">₹56,345.98</p>
                              <p className="m-0 text-[9px] text-[#DCEFFC]">800+ branches</p>
                            </div>
                          </div>

                          <div className="grid min-h-0 flex-1 gap-2" style={{ gridTemplateColumns: "minmax(0,1.45fr) minmax(0,1fr)" }}>
                            <div className="flex flex-col" style={card}>
                              <div className="flex justify-between text-[11px]">
                                <span className="font-semibold">Weekly activity</span>
                                <span className="hb-hide-sm gap-2 text-[9px] text-[#6A789A]">
                                  <span>■ Deposit</span>
                                  <span className="text-[#9FD6F7]">■ Withdraw</span>
                                </span>
                              </div>
                              <div className="relative mt-2 flex min-h-[50px] flex-1 items-end gap-1.5 sm:min-h-[70px]">
                                {bars.map(([dh, dd, wh, wd, hi], i) => (
                                  <span key={i} className="flex h-full flex-1 items-end gap-0.5">
                                    <span
                                      className="hb-bl"
                                      style={{ height: `${dh}%`, background: hi ? "#0094D3" : "#032683", animationDelay: `${dd}s` }}
                                    />
                                    <span
                                      className="hb-bl"
                                      style={{ height: `${wh}%`, background: "#9FD6F7", animationDelay: `${wd}s` }}
                                    />
                                  </span>
                                ))}
                                <span className="hb-scan" aria-hidden="true" />
                              </div>
                            </div>

                            <div className="flex flex-col" style={card}>
                              <span className="text-[11px] font-semibold">Recent transactions</span>
                              <div className="hb-tx-mask mt-1.5 h-24 overflow-hidden">
                                <div className="hb-tx text-[10px]">
                                  {[...txRows, ...txRows.slice(0, 3)].map((tx, i) => (
                                    <div
                                      key={i}
                                      className="flex h-8 items-center justify-between gap-2 border-b border-[#F0F4FA]"
                                    >
                                      <span className="truncate">{tx.label}</span>
                                      <span
                                        className="font-semibold"
                                        style={{ color: tx.credit ? "#0A7A55" : "#C2410C" }}
                                      >
                                        {tx.amount}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="hb-hide-sm grid gap-2" style={{ gridTemplateColumns: "minmax(0,1.45fr) minmax(0,1fr)" }}>
                            <div style={{ ...card, padding: "8px 10px" }}>
                              <svg viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true" className="block h-[38px] w-full">
                                <path
                                  className="hb-area"
                                  d="M0 50 C60 46 100 40 150 42 S240 30 290 30 S380 18 430 20 S530 8 600 6 L600 60 L0 60 Z"
                                  fill="#E6F2FC"
                                />
                                <path
                                  className="hb-lineloop"
                                  d="M0 50 C60 46 100 40 150 42 S240 30 290 30 S380 18 430 20 S530 8 600 6"
                                  fill="none"
                                  stroke="#0094D3"
                                  strokeWidth="3"
                                />
                              </svg>
                            </div>
                            <div className="flex items-center gap-2.5" style={{ ...card, padding: "8px 10px" }}>
                              <svg width="40" height="40" viewBox="0 0 42 42" aria-hidden="true" className="flex-none" style={{ transform: "rotate(-90deg)" }}>
                                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#E3EEFB" strokeWidth="7" />
                                <circle className="hb-donut" cx="21" cy="21" r="15.9" fill="none" stroke="#0094D3" strokeWidth="7" strokeDasharray="50 50" />
                                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#032683" strokeWidth="7" strokeDasharray="20 80" strokeDashoffset="-70" />
                              </svg>
                              <span className="text-[10px] leading-[1.4] text-[#4A5878]">
                                <span className="block font-semibold text-[#0A1330]">Bulk disbursement</span>
                                50% salaries
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating chips with glossy icons */}
          <div className="hb-side-chip hb-chip-pop" style={{ left: -10, top: 70, animationDelay: "1.4s" }}>
            <span className="hb-fl" style={{ ...glassChip, gap: 12, padding: "10px 18px 10px 10px", borderRadius: 16 }}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "radial-gradient(circle at 32% 28%, #BFE6FF, #0094D3 48%, #032683)",
                  boxShadow: "inset 0 -4px 8px rgba(0,0,0,.25), 0 8px 16px -6px rgba(3,38,131,.6)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" aria-hidden="true">
                  <path d="M3 10l9-6 9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18" />
                </svg>
              </span>
              Custodian CBS
            </span>
          </div>

          <div className="hb-side-chip hb-chip-pop" style={{ left: -40, top: 210, animationDelay: "1.55s" }}>
            <span
              className="hb-fl2"
              style={{ ...glassChip, gap: 12, padding: "18px 22px", borderRadius: 18, lineHeight: 1.25, textAlign: "left" }}
            >
              Digital
              <br />
              Banking
              <span
                className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px]"
                style={{
                  background: "linear-gradient(145deg, #9FD6F7, #0094D3 55%, #032683)",
                  boxShadow: "inset 0 -5px 10px rgba(0,0,0,.25), 0 10px 20px -8px rgba(3,38,131,.6)",
                  transform: "rotate(10deg)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" aria-hidden="true">
                  <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                  <path d="M11 18h2" />
                </svg>
              </span>
            </span>
          </div>

          <div className="hb-side-chip hb-chip-pop" style={{ right: -10, top: 60, animationDelay: "1.65s" }}>
            <span className="hb-fl2" style={{ ...glassChip, gap: 12, padding: "10px 18px 10px 10px", borderRadius: 16 }}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "radial-gradient(circle at 32% 28%, #FFFFFF, #9FD6F7 40%, #0094D3)",
                  boxShadow: "inset 0 -4px 8px rgba(3,38,131,.3), 0 8px 16px -6px rgba(0,148,211,.6)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#032683" strokeWidth="2.2" aria-hidden="true">
                  <path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5" />
                </svg>
              </span>
              Payments &amp; Transactions
            </span>
          </div>

          <div className="hb-side-chip hb-chip-pop" style={{ right: -40, top: 190, animationDelay: "1.8s" }}>
            <span
              className="hb-fl"
              style={{ ...glassChip, gap: 14, padding: "18px 22px", borderRadius: 18, lineHeight: 1.25, textAlign: "left" }}
            >
              Compliance
              <br />
              &amp; Risk
              <svg
                width="48"
                height="54"
                viewBox="0 0 48 54"
                aria-hidden="true"
                style={{ transform: "rotate(-8deg)", filter: "drop-shadow(0 10px 12px rgba(3,38,131,.45))" }}
              >
                <defs>
                  <linearGradient id="hb-shield" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#9FD6F7" />
                    <stop offset=".55" stopColor="#0094D3" />
                    <stop offset="1" stopColor="#032683" />
                  </linearGradient>
                </defs>
                <path d="M24 2 L44 9 V26 C44 39 35 48 24 52 C13 48 4 39 4 26 V9 Z" fill="url(#hb-shield)" />
                <path d="M15 27 L21 33 L33 20" stroke="#FFFFFF" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

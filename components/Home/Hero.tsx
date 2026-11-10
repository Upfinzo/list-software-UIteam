import Link from "next/link";

const typedText = "Connected to Modern Finance";

const sideTags = [
  { label: "INTEGRATION-READY", style: { left: 66, top: 513, animationDelay: "2.6s" } },
  { label: "SECURE", style: { left: 82, top: 713, animationDelay: "2.8s" } },
  { label: "SCALABLE", style: { right: 66, top: 493, animationDelay: "2.7s" } },
  { label: "EVOLVING", style: { right: 82, top: 713, animationDelay: "2.9s" } },
];

const nodeIconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#FFFFFF",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const nodes = [
  {
    label: "Customers",
    left: "17.86%",
    top: "20.67%",
    delay: "2.7s",
    icon: (
      <svg {...nodeIconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.6c2 .8 3.2 2.6 3.6 5.4" />
      </svg>
    ),
  },
  {
    label: "Accounts",
    left: "50%",
    top: "30.67%",
    delay: "2.85s",
    icon: (
      <svg {...nodeIconProps}>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M16 14.5h2" />
      </svg>
    ),
  },
  {
    label: "Branches",
    left: "82.14%",
    top: "20.67%",
    delay: "3s",
    icon: (
      <svg {...nodeIconProps}>
        <path d="M3 10l9-6 9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18" />
      </svg>
    ),
  },
  {
    label: "Lending",
    left: "16.07%",
    top: "66.67%",
    delay: "3.15s",
    icon: (
      <svg {...nodeIconProps}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    label: "Transactions",
    left: "83.93%",
    top: "66.67%",
    delay: "3.3s",
    icon: (
      <svg {...nodeIconProps}>
        <path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5" />
      </svg>
    ),
  },
];

/* Typewriter keyframes: each character appears 0.75% later and disappears 0.35% earlier */
const typeKeyframes = typedText
  .split("")
  .map((_, i) => {
    const inStart = (5 + i * 0.75).toFixed(2);
    const inEnd = (5.3 + i * 0.75).toFixed(2);
    const outStart = (78.1 - i * 0.35).toFixed(2);
    const outEnd = (78.4 - i * 0.35).toFixed(2);
    return `@keyframes hbTc${i}{0%,${inStart}%{max-width:0;opacity:0}${inEnd}%,${outStart}%{max-width:1.2em;opacity:1}${outEnd}%,100%{max-width:0;opacity:0}}`;
  })
  .join("\n");

const heroStyles = `
@keyframes hbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes hbCaret{0%,49%{opacity:1}50%,100%{opacity:0}}
@keyframes hbSelbox{0%,61%{opacity:0;transform:scale(.98)}63%,79%{opacity:1;transform:none}80.5%,100%{opacity:0}}
@keyframes hbCurs{0%,58%{opacity:0;transform:translate(60px,40px)}61%,79%{opacity:1;transform:translate(0,0)}82%,100%{opacity:0;transform:translate(40px,30px)}}
@keyframes hbBtnPop{0%{opacity:0;transform:scale(.4)}70%{transform:scale(1.06)}100%{opacity:1;transform:none}}
@keyframes hbVline{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes hbHline{from{transform:scaleX(0);opacity:1}70%{opacity:1}to{transform:scaleX(1);opacity:0}}
@keyframes hbCardOpen{from{clip-path:inset(0 50% 100% 50% round 18px);opacity:.4}to{clip-path:inset(0 0 0 0 round 18px);opacity:1}}
@keyframes hbHeadDrop{from{opacity:0;transform:translateY(-14px) scale(.96)}to{opacity:1;transform:none}}
@keyframes hbNodePop{from{opacity:0;transform:translate(-50%,-50%) scale(.6)}to{opacity:1;transform:translate(-50%,-50%)}}
@keyframes hbDashFlow{to{stroke-dashoffset:-20}}
@keyframes hbArcSpin{to{transform:rotate(360deg)}}
@keyframes hbTagIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
${typeKeyframes}

.hb-tch{display:inline-block;overflow:visible;vertical-align:baseline;white-space:pre;max-width:0;opacity:0;animation-duration:10s;animation-iteration-count:infinite;animation-timing-function:linear}
.hb-tsp{width:.28em;height:1px}
.hb-caret{display:inline-block;width:3px;height:.9em;margin-left:10px;vertical-align:-0.06em;background:#032683;border-radius:2px;animation:hbCaret 1s steps(1) infinite}
.hb-selbox{position:absolute;inset:-4px -14px -2px -14px;border:1.5px dashed #0094D3;border-radius:10px;background:rgba(0,148,211,.05);opacity:0;animation:hbSelbox 10s linear infinite;pointer-events:none}
.hb-curs{position:absolute;right:-30px;bottom:-26px;animation:hbCurs 10s ease-in-out infinite}
.hb-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

.hb-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 28px;border-radius:10px;font-weight:600;font-size:15px;transition:transform .25s ease,box-shadow .25s ease,background-color .25s ease;animation:hbBtnPop .7s cubic-bezier(.2,.7,.2,1) both .7s}
.hb-btn:hover{transform:translateY(-2px)}
.hb-btn-p{background:linear-gradient(180deg,#1F7FE0,#032683);color:#FFFFFF;box-shadow:0 12px 24px -12px rgba(3,38,131,.8),inset 0 1px 0 rgba(255,255,255,.35)}
.hb-btn-p:hover{color:#FFFFFF;box-shadow:0 16px 30px -12px rgba(3,38,131,.85),inset 0 1px 0 rgba(255,255,255,.35)}
.hb-btn-s{background:#FFFFFF;border:1px solid #CFDCEE;color:#032683;box-shadow:0 10px 22px -16px rgba(3,46,137,.45);animation-delay:.85s}
.hb-btn-s:hover{background:#F2F7FD}

.hb-cross-v{transform-origin:top;animation:hbVline .6s ease-out both 1.1s}
.hb-cross-h{transform-origin:center;animation:hbHline .9s ease-out both 1.5s}
.hb-card-open{animation:hbCardOpen 1s cubic-bezier(.2,.7,.2,1) both 1.8s}
.hb-head-drop{animation:hbHeadDrop .8s cubic-bezier(.2,.7,.2,1) both 2.4s}
.hb-np{animation:hbNodePop .6s cubic-bezier(.2,.7,.2,1) both}
.hb-dflow{stroke-dasharray:5 5;animation:hbDashFlow 1.6s linear infinite}
.hb-arc-s{transform-box:view-box;transform-origin:50% 50%;animation:hbArcSpin 3.2s linear infinite}
.hb-arc-r{transform-box:view-box;transform-origin:50% 50%;animation:hbArcSpin 5s linear infinite reverse}

.hb-tag{position:absolute;display:inline-flex;align-items:center;justify-content:center;min-width:170px;height:44px;padding:0 22px;border-radius:10px;background:#FFFFFF;border:1px solid #E3EBF6;box-shadow:0 10px 24px -16px rgba(3,38,131,.35);font-size:12.5px;font-weight:600;letter-spacing:.14em;color:#1F3F8F;animation:hbTagIn .7s ease both}
.hb-tag > span{animation:hbFloat 7s ease-in-out infinite}
.hb-lines{display:block}
@media (max-width:1000px){.hb-lines,.hb-tag{display:none !important}}
@media (max-width:640px){.hb-head-drop{left:-8px !important;right:-8px !important;padding:14px 16px !important}}

@media (prefers-reduced-motion: reduce){
  .hb-tch{animation:none;max-width:none;opacity:1}
  .hb-caret,.hb-selbox,.hb-curs,.hb-dflow,.hb-arc-s,.hb-arc-r,.hb-tag > span{animation:none}
  .hb-selbox,.hb-curs{display:none}
}
`;

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        background:
          "linear-gradient(180deg, #EEF4FD 0%, #F6F9FE 45%, #FFFFFF 100%)",
      }}
    >
      <style>{heroStyles}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[600px] w-[1200px] -ml-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(86,176,230,.18), rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* guide lines + dashed connectors */}
        <svg
          className="hb-lines pointer-events-none absolute left-0 top-0 h-[900px] w-full"
          aria-hidden="true"
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMin meet"
          fill="none"
        >
          <path d="M262 0V520" stroke="#DCE6F4" />
          <path d="M938 0V520" stroke="#DCE6F4" />
          <g stroke="#C9D8EE" strokeWidth="1.2" className="hb-dflow">
            <path d="M0 470H120Q136 470 136 486V650Q136 666 120 666H0" />
            <path d="M1200 450H1080Q1064 450 1064 466V640Q1064 656 1080 656H1200" />
            <path d="M236 535H300V600H350" />
            <path d="M252 735H300V680H350" />
            <path d="M964 515H905V600H850" />
            <path d="M948 735H905V690H850" />
          </g>
          <g fill="#FFFFFF" stroke="#C9D8EE">
            <rect x="296" y="596" width="8" height="8" rx="1.5" />
            <rect x="901" y="596" width="8" height="8" rx="1.5" />
            <rect x="296" y="676" width="8" height="8" rx="1.5" />
            <rect x="901" y="686" width="8" height="8" rx="1.5" />
            <rect x="132" y="562" width="8" height="8" rx="1.5" />
            <rect x="1060" y="548" width="8" height="8" rx="1.5" />
          </g>
        </svg>

        {sideTags.map((tag) => (
          <span key={tag.label} className="hb-tag" style={tag.style}>
            <span>{tag.label}</span>
          </span>
        ))}

        <div className="relative px-6 pt-14 text-center sm:pt-[78px]">
          <h1
            className="m-0 font-semibold text-[#0A1330]"
            style={{
              fontSize: "clamp(40px, 6vw, 76px)",
              lineHeight: 1.08,
              letterSpacing: "-0.045em",
            }}
          >
            Build For Core Banking
            <br />
            <span
              className="relative mt-1 inline-block italic font-normal text-[#032683]"
              style={{ letterSpacing: "-0.04em", minHeight: "1.1em" }}
            >
              <span className="hb-selbox" aria-hidden="true" />
              <span className="hb-sr">{typedText}</span>
              <span aria-hidden="true">
                {typedText.split("").map((ch, i) => (
                  <span
                    key={i}
                    className={ch === " " ? "hb-tch hb-tsp" : "hb-tch"}
                    style={{ animationName: `hbTc${i}` }}
                  >
                    {ch === " " ? "" : ch}
                  </span>
                ))}
              </span>
              <span className="hb-caret" aria-hidden="true" />
              <svg
                className="hb-curs"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M4 3l7 17 2.5-7.5L21 10z"
                  fill="#06123A"
                  stroke="#FFFFFF"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-[26px] max-w-[620px] text-[17px] leading-[1.6] text-[#5B6785]">
            LIST Software builds core banking technology for modern financial
            institutions, connecting the core to digital banking, payments,
            APIs, compliance and intelligent automation through a single
            evolving technology platform.
          </p>

          <div className="relative mt-[30px] flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="hb-btn hb-btn-p">
              Request a Demo
            </Link>
            <a href="#solutions-carousel" className="hb-btn hb-btn-s">
              Get Started
            </a>
          </div>

          {/* crosshair that opens into the card */}
          <div aria-hidden="true" className="relative mt-1 h-10">
            <span className="hb-cross-v absolute left-1/2 top-0 h-full w-px bg-[#9FC3E8]" />
          </div>

          <div className="relative mx-auto max-w-[600px] pb-[70px]">
            <span
              aria-hidden="true"
              className="hb-cross-h absolute left-[-60px] right-[-60px] top-0 h-px bg-[#9FC3E8]"
            />
            <div
              className="hb-card-open relative rounded-[20px] p-2"
              style={{
                background: "rgba(255,255,255,.6)",
                border: "1px solid #E3EBF6",
                boxShadow: "0 30px 60px -36px rgba(3,38,131,.4)",
              }}
            >
              <div className="relative rounded-[14px] border border-[#EDF2F9] bg-white pt-[72px]">
                <div className="relative" style={{ aspectRatio: "560 / 300" }}>
                  <svg
                    viewBox="0 0 560 300"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <g stroke="#CFDDEE" strokeWidth="1.2" className="hb-dflow">
                      <path d="M125 62H186Q196 62 196 72V92H255" />
                      <path d="M435 62H374Q364 62 364 72V92H305" />
                      <path d="M100 86V176" />
                      <path d="M460 86V176" />
                      <path d="M115 200H205Q215 200 215 210V250" />
                      <path d="M445 200H355Q345 200 345 210V250" />
                      <path d="M280 122V200" />
                    </g>
                    <g fill="#FFFFFF" stroke="#CFDDEE">
                      <rect x="192" y="88" width="8" height="8" rx="1.5" />
                      <rect x="360" y="88" width="8" height="8" rx="1.5" />
                      <rect x="211" y="226" width="8" height="8" rx="1.5" />
                      <rect x="341" y="226" width="8" height="8" rx="1.5" />
                      <rect x="96" y="127" width="8" height="8" rx="1.5" />
                      <rect x="456" y="127" width="8" height="8" rx="1.5" />
                    </g>
                  </svg>

                  {nodes.map((node) => (
                    <div
                      key={node.label}
                      className="hb-np absolute z-[2] flex flex-col items-center gap-1.5"
                      style={{
                        left: node.left,
                        top: node.top,
                        transform: "translate(-50%, -50%)",
                        animationDelay: node.delay,
                      }}
                    >
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle at 32% 28%, #9FD6F7, #0094D3 50%, #032683)",
                          boxShadow:
                            "0 0 0 3px #FFFFFF, 0 8px 18px -8px rgba(3,38,131,.6)",
                        }}
                      >
                        {node.icon}
                      </span>
                      <span
                        className="whitespace-nowrap rounded-md border border-[#E6EDF7] bg-white px-2.5 py-1 text-[11px] font-medium text-[#1B2440] sm:text-xs"
                        style={{ boxShadow: "0 4px 10px -6px rgba(3,38,131,.3)" }}
                      >
                        {node.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* round arrow button with spinning arcs */}
                <a
                  href="#solutions-carousel"
                  aria-label="Explore the platform"
                  className="absolute bottom-[-36px] left-1/2 z-[3] -ml-9 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[#032683]"
                  style={{
                    boxShadow:
                      "0 14px 30px -12px rgba(3,38,131,.45), 0 0 0 1px #E6EDF7",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 200"
                  className="pointer-events-none absolute bottom-[-100px] left-1/2 z-[2] -ml-[100px] h-[200px] w-[200px]"
                  fill="none"
                  strokeLinecap="round"
                >
                  <g className="hb-arc-s">
                    <path d="M100 22 A78 78 0 0 1 172 72" stroke="#56B0E6" strokeWidth="2" />
                  </g>
                  <g className="hb-arc-r">
                    <path d="M44 70 A62 62 0 0 1 100 38" stroke="#0094D3" strokeWidth="2" />
                  </g>
                </svg>
              </div>

              {/* header pill wider than the card */}
              <div
                className="hb-head-drop absolute left-[-44px] right-[-44px] top-[22px] flex items-center justify-center gap-3.5 rounded-[14px] border border-[#E6EDF7] bg-white px-6 py-[18px] text-[#26324F]"
                style={{
                  boxShadow: "0 18px 40px -22px rgba(3,38,131,.45)",
                  fontSize: "clamp(15px, 1.9vw, 22px)",
                  letterSpacing: "-0.01em",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                  <path d="M9 2l1.6 5.4L16 9l-5.4 1.6L9 16l-1.6-5.4L2 9l5.4-1.6z" fill="#032683" />
                  <path d="M18 13l.9 2.6 2.6.9-2.6.9L18 20l-.9-2.6-2.6-.9 2.6-.9z" fill="#0094D3" />
                </svg>
                <span>
                  Every <strong className="text-[#06123A]">capability</strong>{" "}
                  connected, on one{" "}
                  <strong className="text-[#06123A]">foundation</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Container from "@/components/common/Container";

const solutions = [
  "Digital Banking",
  "Payments & Transactions",
  "Lending & Recovery",
  "Compliance & Risk",
  "Operations",
  "Data & Intelligence",
];

const solutionData = [
  {
    title: "Digital Banking",
    description:
      "Deliver seamless digital experiences with secure account access, instant transfers, mobile-first journeys, and smart service layers built for modern banking customers.",
  },
  {
    title: "Payments & Transactions",
    description:
      "Modernise payment rails with real-time processing, transaction orchestration, channel connectivity, and smart controls across every payment flow.",
  },
  {
    title: "Lending & Recovery",
    description:
      "Accelerate lending decisions, streamline collections, and manage recovery workflows with data-driven controls across the loan lifecycle.",
  },
  {
    title: "Compliance & Risk",
    description:
      "Strengthen governance and reduce operational risk through automated checks, identity validation, audit controls, and regulatory reporting built into your core.",
  },
  {
    title: "Operations",
    description:
      "LIST Software brings together purpose-built solutions across the banking lifecycle. Enabling financial institutions to modernise customer experiences, move money, manage risk, streamline operations, and turn banking data into actionable intelligence.",
  },
  {
    title: "Data & Intelligence",
    description:
      "Turn large volumes of banking data into practical insights with reporting, forecasting, operational intelligence, and decision support across teams.",
  },
];

const graphBars = [
  18, 42, 27, 62, 14, 48, 34, 72, 20, 54, 31, 67, 16, 46, 29, 60, 22, 50, 35,
  64, 18, 43, 28, 57,
];

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(4);

  const activeSolution = solutionData[activeIndex];

  return (
    <section className="w-full bg-white">
      {/* Local scoped styles — global.css ko touch nahi kiya */}
      <style>{`
        @keyframes solSlideFromLeft {
          0% { opacity: 0; transform: translateX(-24px); filter: blur(4px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes solGlowPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(23,72,197,0); }
          50% { box-shadow: 0 8px 24px rgba(23,72,197,0.18); }
        }
        @keyframes solShine {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .sol-slide-in-title {
          animation: solSlideFromLeft 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sol-slide-in-desc {
          animation: solSlideFromLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;
        }
        .sol-card-glow {
          animation: solGlowPulse 2.5s ease-in-out infinite;
        }
        .sol-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.55),
            transparent
          );
          animation: solShine 2.8s ease-in-out infinite;
          pointer-events: none;
        }
        .sol-indicator {
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.3s ease;
        }
      `}</style>

      <Container className="py-[60px] sm:py-[70px] lg:py-[80px]">
        <p
          className="
            m-0 mb-[14px] font-sora text-[9px] font-semibold uppercase
            leading-[14px] tracking-[0.25em] text-[#1748c5]
          "
        >
          Solutions
        </p>

        <h2
          className="
            m-0 max-w-[671.59375px] font-sora text-[45.6px] font-semibold
            not-italic leading-[50.16px] tracking-[-1.14px] text-[#14213d]
            max-md:text-[36px] max-md:leading-[41px] max-md:tracking-[-0.9px]
          "
        >
          Technology Built Around
          <br />
          Banking&apos;s Real-World Needs
        </h2>

        <div
          className="
            mt-[48px] grid grid-cols-1 gap-[40px]
            lg:grid-cols-[671.59375px_1fr] lg:items-start lg:gap-[70px]
          "
        >
          {/* ===================== LEFT CARD ===================== */}
          <div
            className="
              sol-card-glow relative h-[354.609375px] w-full overflow-hidden
              rounded-[20px] border border-[#d6e4ee]
              bg-[linear-gradient(135deg,#f9fcfe_0%,#eef7fc_58%,#dceef9_100%)]
              px-[32px] py-[30px] transition-all duration-500
            "
          >
            <p
              className="
                m-0 mb-[18px] font-sora text-[9px] font-semibold uppercase
                leading-[14px] tracking-[0.22em] text-[#1748c5]
              "
            >
              Operational Discipline
            </p>

            {/* key badalte hi left-se-slide animation fresh trigger hoti hai */}
            <div key={activeIndex}>
              <h3
                className="
                  sol-slide-in-title
                  m-0 mb-[13px] max-w-[560px] font-sora text-[36.8px]
                  font-semibold not-italic leading-[46px] tracking-[-0.92px]
                  text-[#17243e]
                "
              >
                {activeSolution.title}
              </h3>

              <p
                className="
                  sol-slide-in-desc
                  m-0 max-w-[570px] text-[15px] font-normal not-italic
                  leading-[24.38px] tracking-[0px] text-[#62728a]
                "
              >
                {activeSolution.description}
              </p>
            </div>

            {/* ZIG-ZAG GRAPH */}
            <div
              className="
                absolute bottom-[28px] left-[32px] flex h-[78px] items-end
                gap-[7px] overflow-hidden
              "
              aria-hidden="true"
            >
              {graphBars.map((height, index) => {
                const isHighlighted = index % 4 === 0;
                return (
                  <span
                    key={index}
                    className={`
                      block w-[6px] shrink-0 rounded-full transition-all
                      duration-500 ease-out
                      ${
                        isHighlighted
                          ? "bg-gradient-to-b from-[#06358f] via-[#1475c7] to-[#48b9ee]"
                          : "bg-[#d3e0ef]"
                      }
                    `}
                    style={{
                      height: `${height}px`,
                      transitionDelay: `${index * 12}ms`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* ===================== RIGHT SIDE ===================== */}
          <div className="relative w-full lg:pt-[4px]">
            {solutions.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    sol-shine group relative flex h-[54px] w-full
                    items-center justify-between overflow-hidden
                    border-t border-[#dce3eb] px-[16px] text-left
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#eaf1ff] to-transparent"
                        : "bg-transparent hover:bg-[#f7faff]"
                    }
                  `}
                >
                  {/* sliding left bar indicator */}
                  <span
                    className={`
                      sol-indicator absolute left-0 top-1/2 h-[22px] w-[3px]
                      -translate-y-1/2 rounded-full bg-[#1748c5]
                      ${isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
                    `}
                    aria-hidden="true"
                  />

                  <span
                    className={`
                      font-sora text-[16px] leading-[24px] tracking-[-0.4px]
                      transition-all duration-300 ease-out

                      ${
                        isActive
                          ? "translate-x-[8px] font-semibold text-[#1748c5]"
                          : "font-normal text-[#52627a] group-hover:translate-x-[4px] group-hover:text-[#1748c5]"
                      }
                    `}
                  >
                    {item}
                  </span>

                  {/* simple arrow — no dark blue circle badge */}
                  <span
                    className={`
                      font-sora text-[16px] leading-[24px] tracking-[-0.4px]
                      transition-all duration-300 ease-out

                      ${
                        isActive
                          ? "translate-x-[2px] text-[#1748c5]"
                          : "text-[#65758b] group-hover:translate-x-[2px] group-hover:text-[#1748c5]"
                      }
                    `}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              );
            })}

            <div className="h-px w-full bg-[#dce3eb]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
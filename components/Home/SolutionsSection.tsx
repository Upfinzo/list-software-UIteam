"use client";

import { useState } from "react";
import Container from "@/components/common/Container";

const solutions = [
  "Digital Banking",
  "Payments & Transaction Banking",
  "Lending & Credit",
  "Compliance & Risk",
  "Banking Operations",
  "Data & Intelligence",
];

const solutionData = [
  {
    title: "Digital Banking",
    description:
      "Extend the banking experience beyond the branch with mobile banking, internet banking, WhatsApp banking, e-passbook and digital customer services.",
  },
  {
    title: "Payments & Transaction Banking",
    description:
      "Connect banking operations to payment rails, clearing systems and transaction networks through solutions supporting RTGS, EFT, NACH, CTS, ATM, IMPS and other payment interfaces.",
  },
  {
    title: "Lending & Credit",
    description:
      "Support the lending lifecycle with credit appraisal, loan processing, documentation, recovery and NPA management capabilities integrated into banking operations.",
  },
  {
    title: "Compliance & Risk",
    description:
      "Strengthen financial controls through AML, CKYC, identity validation, audit, regulatory reporting and credit-bureau integration.",
  },
  {
    title: "Banking Operations",
    description:
      "Digitise and streamline everyday banking through solutions for branch operations, customer management, investments, recovery and operational workflows.",
  },
  {
    title: "Data & Intelligence",
    description:
      "Turn banking information into actionable insight through business intelligence, reporting and analytics that support better operational and management decisions.",
  },
];

const graphBars = [
  18, 42, 27, 62, 14, 48, 34, 72, 20, 54, 31, 67, 16, 46, 29, 60, 22, 50,
  35, 64, 18, 43, 28, 57,
];

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(4);

  const activeSolution = solutionData[activeIndex];

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* =========================================
          LOCAL ANIMATIONS
      ========================================= */}
      <style>{`
        @keyframes solSlideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-24px);
            filter: blur(4px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes solGlowPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(23,72,197,0);
          }

          50% {
            box-shadow: 0 8px 24px rgba(23,72,197,0.18);
          }
        }

        @keyframes solShine {
          0% {
            transform: translateX(-120%) skewX(-15deg);
          }

          100% {
            transform: translateX(220%) skewX(-15deg);
          }
        }

        .sol-slide-in-title {
          animation: solSlideFromLeft
            0.5s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sol-slide-in-desc {
          animation: solSlideFromLeft
            0.6s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.08s
            both;
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
            rgba(255,255,255,0.55),
            transparent
          );

          animation: solShine 2.8s ease-in-out infinite;
          pointer-events: none;
        }

        .sol-indicator {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .sol-slide-in-title,
          .sol-slide-in-desc,
          .sol-card-glow,
          .sol-shine::after {
            animation: none !important;
          }
        }
      `}</style>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <Container
        className="
          py-[50px]
          sm:py-[60px]
          md:py-[70px]
          lg:py-[80px]
        "
      >
        {/* =========================================
            SECTION LABEL
        ========================================= */}
        <p
          className="
            m-0
            mb-[14px]
            font-sora
            text-[9px]
            font-semibold
            uppercase
            leading-[14px]
            tracking-[0.25em]
            text-[#1748c5]
          "
        >
          Solutions
        </p>

        {/* =========================================
            HEADING
        ========================================= */}
        <h2
          className="
            m-0
            w-full
            max-w-[671.59375px]
            font-sora
            text-[32px]
            font-semibold
            not-italic
            leading-[38px]
            tracking-[-0.8px]
            text-[#14213d]

            sm:text-[36px]
            sm:leading-[41px]
            sm:tracking-[-0.9px]

            md:text-[40px]
            md:leading-[45px]
            md:tracking-[-1px]

            lg:text-[45.6px]
            lg:leading-[50.16px]
            lg:tracking-[-1.14px]
          "
        >
          Technology Built Around
          <br />
          Banking&apos;s Real-World Needs
        </h2>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div
          className="
            mt-[36px]
            grid
            w-full
            grid-cols-1
            gap-[32px]

            sm:mt-[40px]
            sm:gap-[40px]

            lg:mt-[48px]
            lg:grid-cols-[minmax(0,671.59375px)_minmax(0,1fr)]
            lg:items-start
            lg:gap-[50px]

            xl:gap-[70px]
          "
        >
          {/* =========================================
              LEFT CARD
          ========================================= */}
          <div
            className="
              sol-card-glow
              relative
              min-h-[330px]
              w-full
              overflow-hidden
              rounded-[20px]
              border
              border-[#d6e4ee]
              bg-[linear-gradient(135deg,#f9fcfe_0%,#eef7fc_58%,#dceef9_100%)]
              px-[22px]
              py-[24px]
              transition-all
              duration-500

              sm:min-h-[340px]
              sm:px-[26px]
              sm:py-[27px]

              md:min-h-[354px]
              md:px-[30px]
              md:py-[30px]

              lg:min-h-[354.609375px]
              lg:px-[32px]
            "
          >
            {/* =========================================
                CARD LABEL
            ========================================= */}
            <p
              className="
                m-0
                mb-[14px]
                font-sora
                text-[8px]
                font-semibold
                uppercase
                leading-[14px]
                tracking-[0.22em]
                text-[#1748c5]

                sm:mb-[16px]
                sm:text-[9px]

                md:mb-[18px]
              "
            >
              Operational Discipline
            </p>

            {/* =========================================
                ACTIVE CONTENT
            ========================================= */}
            <div key={activeIndex}>
              <h3
                className="
                  sol-slide-in-title
                  m-0
                  mb-[12px]
                  max-w-[560px]
                  font-sora
                  text-[28px]
                  font-semibold
                  not-italic
                  leading-[35px]
                  tracking-[-0.7px]
                  text-[#17243e]

                  sm:text-[31px]
                  sm:leading-[39px]
                  sm:tracking-[-0.78px]

                  md:text-[34px]
                  md:leading-[43px]
                  md:tracking-[-0.85px]

                  lg:text-[36.8px]
                  lg:leading-[46px]
                  lg:tracking-[-0.92px]
                "
              >
                {activeSolution.title}
              </h3>

              <p
                className="
                  sol-slide-in-desc
                  m-0
                  w-full
                  max-w-[570px]
                  text-[13px]
                  font-normal
                  not-italic
                  leading-[21px]
                  tracking-[0px]
                  text-[#62728a]

                  sm:text-[14px]
                  sm:leading-[22px]

                  md:text-[15px]
                  md:leading-[24.38px]
                "
              >
                {activeSolution.description}
              </p>
            </div>

            {/* =========================================
                GRAPH
            ========================================= */}
            <div
              className="
                absolute
                bottom-[20px]
                left-[22px]
                flex
                h-[65px]
                items-end
                gap-[5px]
                overflow-hidden

                sm:bottom-[24px]
                sm:left-[26px]
                sm:h-[72px]
                sm:gap-[6px]

                md:bottom-[28px]
                md:left-[32px]
                md:h-[78px]
                md:gap-[7px]
              "
              aria-hidden="true"
            >
              {graphBars.map((height, index) => {
                const isHighlighted = index % 4 === 0;

                return (
                  <span
                    key={index}
                    className={`
                      block
                      w-[5px]
                      shrink-0
                      rounded-full
                      transition-all
                      duration-500
                      ease-out

                      sm:w-[6px]

                      ${
                        isHighlighted
                          ? "bg-gradient-to-b from-[#06358f] via-[#1475c7] to-[#48b9ee]"
                          : "bg-[#d3e0ef]"
                      }
                    `}
                    style={{
                      height: `${Math.min(height, 72)}px`,
                      transitionDelay: `${index * 12}ms`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div
            className="
              relative
              w-full

              lg:pt-[4px]
            "
          >
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
                    sol-shine
                    group
                    relative
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-between
                    overflow-hidden
                    border-t
                    border-[#dce3eb]
                    px-[12px]
                    text-left
                    transition-all
                    duration-300
                    ease-out

                    sm:min-h-[54px]
                    sm:px-[16px]

                    hover:bg-[#f7faff]

                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#eaf1ff] to-transparent"
                        : "bg-transparent"
                    }
                  `}
                >
                  {/* LEFT ACTIVE INDICATOR */}
                  <span
                    className={`
                      sol-indicator
                      absolute
                      left-0
                      top-1/2
                      h-[20px]
                      w-[3px]
                      -translate-y-1/2
                      rounded-full
                      bg-[#1748c5]

                      sm:h-[22px]

                      ${
                        isActive
                          ? "scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0"
                      }
                    `}
                    aria-hidden="true"
                  />

                  {/* TEXT */}
                  <span
                    className={`
                      font-sora
                      text-[14px]
                      leading-[21px]
                      tracking-[-0.3px]
                      transition-all
                      duration-300
                      ease-out

                      sm:text-[15px]
                      sm:leading-[23px]

                      md:text-[16px]
                      md:leading-[24px]
                      md:tracking-[-0.4px]

                      ${
                        isActive
                          ? "translate-x-[6px] font-semibold text-[#1748c5]"
                          : "font-normal text-[#52627a] group-hover:translate-x-[4px] group-hover:text-[#1748c5]"
                      }
                    `}
                  >
                    {item}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`
                      shrink-0
                      pl-[12px]
                      font-sora
                      text-[15px]
                      leading-[24px]
                      transition-all
                      duration-300
                      ease-out

                      md:text-[16px]

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

            {/* BOTTOM BORDER */}
            <div className="h-px w-full bg-[#dce3eb]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
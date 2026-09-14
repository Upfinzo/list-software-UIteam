"use client";

import { useState } from "react";

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

/* Zig-zag graph */
const graphBars = [
  18, 42, 27, 62,
  14, 48, 34, 72,
  20, 54, 31, 67,
  16, 46, 29, 60,
  22, 50, 35, 64,
  18, 43, 28, 57,
];

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(4);

  const activeSolution = solutionData[activeIndex];

  return (
    <section
      className="
        w-full
        bg-white
        px-[20px]
        py-[60px]

        sm:px-[32px]
        sm:py-[70px]

        lg:px-[80px]
        lg:py-[80px]
      "
    >
      {/* =========================================
          1280px MAIN CONTAINER
      ========================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
        "
      >
        {/* =========================================
            SOLUTIONS LABEL
        ========================================== */}
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
            MAIN HEADING
        ========================================== */}
        <h2
          className="
            m-0
            max-w-[671.59375px]
            font-sora
            text-[45.6px]
            font-semibold
            not-italic
            leading-[50.16px]
            tracking-[-1.14px]
            text-[#14213d]

            max-md:text-[36px]
            max-md:leading-[41px]
            max-md:tracking-[-0.9px]
          "
        >
          Technology Built Around
          <br />
          Banking&apos;s Real-World Needs
        </h2>

        {/* =========================================
            CONTENT AREA
        ========================================== */}
        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            gap-[40px]

            lg:grid-cols-[671.59375px_1fr]
            lg:items-start
            lg:gap-[70px]
          "
        >
          {/* =========================================
              LEFT CARD
          ========================================== */}
          <div
            className="
              relative
              h-[354.609375px]
              w-full
              overflow-hidden
              rounded-[20px]
              border
              border-[#d6e4ee]
              bg-[linear-gradient(135deg,#f9fcfe_0%,#eef7fc_58%,#dceef9_100%)]
              px-[32px]
              py-[30px]
            "
          >
            {/* =========================================
                CARD LABEL
            ========================================== */}
            <p
              className="
                m-0
                mb-[18px]
                font-sora
                text-[9px]
                font-semibold
                uppercase
                leading-[14px]
                tracking-[0.22em]
                text-[#1748c5]
              "
            >
              Operational Discipline
            </p>

            {/* =========================================
                ACTIVE TITLE
            ========================================== */}
            <h3
              className="
                m-0
                mb-[13px]
                max-w-[560px]
                font-sora
                text-[36.8px]
                font-semibold
                not-italic
                leading-[46px]
                tracking-[-0.92px]
                text-[#17243e]
              "
            >
              {activeSolution.title}
            </h3>

            {/* =========================================
                DESCRIPTION
            ========================================== */}
            <p
              className="
                m-0
                max-w-[570px]
                text-[15px]
                font-normal
                not-italic
                leading-[24.38px]
                tracking-[0px]
                text-[#62728a]
              "
            >
              {activeSolution.description}
            </p>

            {/* =========================================
                ZIG-ZAG GRAPH
            ========================================== */}
            <div
              className="
                absolute
                bottom-[28px]
                left-[32px]
                flex
                h-[78px]
                items-end
                gap-[7px]
                overflow-hidden
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
                      w-[6px]
                      shrink-0
                      rounded-full

                      ${
                        isHighlighted
                          ? "bg-gradient-to-b from-[#06358f] via-[#1475c7] to-[#48b9ee]"
                          : "bg-[#d3e0ef]"
                      }
                    `}
                    style={{
                      height: `${height}px`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE SOLUTIONS
          ========================================== */}
          <div
            className="
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
                  className="
                    flex
                    h-[54px]
                    w-full
                    items-center
                    justify-between
                    border-t
                    border-[#dce3eb]
                    p-0
                    text-left
                  "
                >
                  {/* Solution name */}
                  <span
                    className={`
                      font-sora
                      text-[16px]
                      font-normal
                      not-italic
                      leading-[24px]
                      tracking-[-0.4px]
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "text-[#1748c5]"
                          : "text-[#52627a]"
                      }
                    `}
                  >
                    {item}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`
                      font-sora
                      text-[16px]
                      font-normal
                      leading-[24px]
                      tracking-[-0.4px]
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "translate-x-[2px] text-[#1748c5]"
                          : "text-[#65758b]"
                      }
                    `}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              );
            })}

            {/* Bottom border */}
            <div className="h-px w-full bg-[#dce3eb]" />
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Fragment, useState } from "react";
import backgroundImage from "@/assets/images/backgound-page.jpg";
import iconFour from "@/assets/images/Icon (4).svg";

import iconSix from "@/assets/images/Icon (6).svg";
import iconSeven from "@/assets/images/Icon (7).svg";
import iconEight from "@/assets/images/Icon (8).svg";
import Container from "@/components/common/Container";

const capabilities = [
  {
    number: "01",
    title: "OPERATE",
    text: "Run the full banking lifecycle from one core. Custodian Core Banking supports deposits, accounts, loans, accounting, clearing, remittances, branch operations, NPA management and day-to-day banking workflows",
    icon: iconFour,
  },
 
  {
    number: "02",
    title: "CONTROL",
    text: "Automate regulatory reporting and strengthen banking controls through AML, CKYC, audit, identity validation, credit appraisal, statutory reporting and business intelligence.",
    icon: iconSix,
  },
  {
    number: "03",
    title: "TRANSACT",
    text: "Connect core banking operations with payment and transaction infrastructure including RTGS, EFT, NACH, CTS, ATM, IMPS and e-commerce interfaces, enabling connected transaction processing across channels",
    icon: iconSeven,
  },
  {
    number: "04",
    title: "DIGITAL ACCESS",
    text: "Connect every customer touchpoint—from mobile and internet banking to WhatsApp, e-passbook, POS, kiosks, and communications—through a unified banking experience.",
    icon: iconEight,
  },
];

const productTags = [
  "Deposits",
  "Accounting",
  "Remittances",
  "Loans",
  "Clearing",
  "Branch operations",
  "NPA management",
];

export default function ProductStack() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section
      className="
        relative
        flex
        w-full
        items-center
        overflow-hidden
        bg-[#061b61]
        text-[#f7f9ff]

        min-[1200px]:min-h-[760px]
      "
      aria-labelledby="home-products-title"
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <img
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-45
        "
        src={backgroundImage.src}
        alt=""
        aria-hidden="true"
      />

      {/* =========================================
          BACKGROUND OVERLAY
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_77%_68%,rgba(27,100,230,0.65),transparent_35%),linear-gradient(90deg,rgba(6,27,97,0.98),rgba(6,27,97,0.52))]
        "
        aria-hidden="true"
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <Container className="relative z-10 py-8 md:py-12">
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-6

            md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]
            md:gap-4

            min-[1200px]:grid-cols-[430px_minmax(0,1fr)]
            min-[1200px]:gap-10
          "
        >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div
          className="
            mx-auto
            w-full
            md:max-w-[430px]
            md:mx-0

            min-[1200px]:mx-0
            min-[1200px]:w-[430px]
            min-[1200px]:max-w-[430px]
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-[15px]
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.27em]
              text-[#c5d5ff]
            "
          >
            Product stack
          </p>

          {/* =========================================
              MAIN HEADING
          ========================================= */}
          <h2
            id="home-products-title"
            className="
              m-0
              w-full
              max-w-[430px]
              font-sora
              text-[43px]
              font-semibold
              not-italic
              leading-[50.16px]
              tracking-[-1.14px]

              max-md:text-[34px]
              max-md:leading-[38px]
              max-md:tracking-[-0.8px]
              md:text-[34px]
              md:leading-[1.15]
              md:tracking-[-0.8px]
            "
          >
            Everything Your Banking Technology Needs — Around the Core.
          </h2>

          {/* =========================================
              DESCRIPTION
          ========================================= */}
          <p
            className="
              m-0
              mt-[22px]
              w-full
              max-w-[390px]
              text-[14px]
              font-normal
              leading-[24.38px]
              tracking-[0px]
              text-[#adbee8]
            "
          >
            A powerful banking core connects accounts, transactions, digital banking, payments, and essential operations through one unified platform—built for flexibility, stability, and future-ready growth.
          </p>

          {/* =========================================
              PRODUCT TAGS
          ========================================= */}
   <div
  className="
    mt-[22px]
    flex
    w-full
    flex-wrap
    gap-[5px]

    /* Mobile + Tablet */
    max-md:justify-center
  "
  aria-label="Product capabilities"
>
  {productTags.map((tag) => (
    <span
      key={tag}
      className="
        flex
        min-h-[30px]
        items-center
        justify-center
        rounded-full
        border
        border-[rgba(160,190,255,0.24)]
        px-[11px]
        pt-[2px]
        flex
        items-center
        font-sora
        md:text-[10px]
        text-[7px]
        font-semibold
        uppercase
        leading-[14px]
        tracking-[1px]
        text-[#c1d0f3]
        text-center
        whitespace-nowrap
      "
    >
      {tag}
    </span>
  ))}
</div>
        </div>

        {/* =========================================
            RIGHT CAPABILITIES
        ========================================= */}
        <div
          className="
            relative
            w-full
            grid
            grid-cols-1
            gap-[16px]
            md:gap-4
            min-[1200px]:gap-[16px]
          "
        >
          {/* =========================================
              VERTICAL CONNECTOR LINE
          ========================================= */}
         <span
  className="
    pointer-events-none
    absolute
    left-[28px]
    top-[48.5px]
    bottom-[132px]
    z-[999]
    w-[1px]
  "
  style={{
    background:
      "linear-gradient(to bottom, rgba(140,180,255,0.45) 0%, rgba(140,180,255,0.30) 35%, rgba(140,180,255,0.18) 70%, rgba(140,180,255,0.08) 100%)",
  }}
  aria-hidden="true"
/>

          {/* =========================================
              CAPABILITY CARDS
          ========================================= */}
          {capabilities.map((capability, index) => {
            return (
              <article
                key={capability.number}
                tabIndex={0}
                role="button"
                onClick={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
                className={`
                  group
                  relative
                  z-10
                  flex
                  min-h-[132px]
                  w-full
                  shrink-0
                  gap-[16px]
                  rounded-[20px]
                  border
                  border-[rgba(127,176,255,0.27)]
                  bg-[rgba(38,81,166,0.3)]
                  p-[16px]
                  md:gap-3
                  md:p-[12px]
                  min-[1200px]:gap-[16px]
                  min-[1200px]:p-[16px]
                  text-white
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  backdrop-blur-[4px]
                  transition-all
                  duration-200

                  cursor-pointer
                  outline-none
                  hover:!border-[#4f8cdb]
                  hover:!bg-[#0d3a87]
                  hover:!text-white
                  focus-visible:!border-[#4f8cdb]
                  focus-visible:!bg-[#0d3a87]
                  focus-visible:!text-white
                  group-hover:bg-[linear-gradient(100deg,rgba(33,104,208,0.58),rgba(31,65,144,0.46))]
                  group-hover:shadow-[0_0_24px_rgba(40,129,255,0.18)]
                  ${
                    activeCapability === index
                      ? "border-[#4f8cdb] bg-[#0d3a87] text-white shadow-[0_0_24px_rgba(40,129,255,0.18)]"
                      : ""
                  }
                `}
              >
                {/* =========================================
                    CARD ICON
                ========================================= */}
                <span
                  className={`
                    relative
                    z-10
                    grid
                    h-[40px]
                    w-[40px]
                    shrink-0
                    place-items-center
                    rounded-[10px]
                    bg-[rgba(103,146,224,0.18)]
                    p-2
                    text-[#d8e5ff]
                    transition-all
                    duration-200
                    md:h-[36px]
                    md:w-[36px]
                    min-[1200px]:h-[40px]
                    min-[1200px]:w-[40px]
                    group-hover:bg-[linear-gradient(145deg,#73c5ff,#1267cd)]
                    group-hover:shadow-[0_0_22px_rgba(87,182,255,0.52)]
                    focus-within:bg-[linear-gradient(145deg,#73c5ff,#1267cd)]
                    focus-within:shadow-[0_0_22px_rgba(87,182,255,0.52)]
                    ${
                      activeCapability === index
                        ? "bg-[linear-gradient(145deg,#73c5ff,#1267cd)] shadow-[0_0_22px_rgba(87,182,255,0.52)]"
                        : ""
                    }
                  `}
                  aria-hidden="true"
                >
                  <img
                    className="
                      h-full
                      w-full
                      object-contain
                      transition-[filter]
                      duration-200
                      group-hover:[filter:brightness(0)_saturate(100%)_invert(1)_drop-shadow(0_0_3px_rgba(137,200,255,0.8))]
                    "
                    src={capability.icon.src}
                    alt=""
                  />
                </span>

                {/* =========================================
                    CARD CONTENT
                ========================================= */}
                <div className="min-w-0 flex-1">
                  {/* Number + Title */}
                  <div className="flex items-baseline gap-[9px]">
                    <span
                      className={`
                        text-[8px]
                        tracking-[0.2em]
                        text-[#77a7ee]
                        transition-colors
                        duration-200

                        group-hover:text-[#b9d2ff]
                        ${
                          activeCapability === index ? "text-[#b9d2ff]" : ""
                        }
                      `}
                    >
                      {capability.number}
                    </span>

                    <h3
                      className="
                        m-0
                        text-[17px]
                        font-medium
                        leading-normal
                        tracking-[0.06em]
                        md:text-[14px]
                        min-[1200px]:text-[17px]
                      "
                    >
                      {capability.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p
                    className={`
                      m-0
                      mt-[10px]
                      max-w-[550px]
                      text-[14px]
                      font-normal
                      leading-[1.5]
                      text-[#d9e4ff]
                      transition-colors
                      duration-200

                      group-hover:text-[#e4edff]
                      ${
                        activeCapability === index ? "text-[#e4edff]" : ""
                      }

                      max-[480px]:text-[12px]
                      md:text-[12px]
                      min-[1200px]:text-[14px]
                    `}
                  >
                    {capability.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        </div>
      </Container>
    </section>
  );
}

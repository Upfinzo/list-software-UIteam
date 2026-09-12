import { Fragment } from "react";
import backgroundImage from "@/assets/images/backgound-page.jpg";
import iconFour from "@/assets/images/Icon (4).svg";
import iconFive from "@/assets/images/Icon (5).svg";
import iconSix from "@/assets/images/Icon (6).svg";
import iconSeven from "@/assets/images/Icon (7).svg";
import iconEight from "@/assets/images/Icon (8).svg";

const capabilities = [
  {
    number: "01",
    title: "OPERATE",
    text: "Run the full banking lifecycle from one core. Custodian Core Banking supports deposits, accounts, loans, accounting, clearing, remittances, branch operations, NPA management and day-to-day banking workflows",
    icon: iconFour,
  },
  {
    number: "02",
    title: "CONNECT",
    text: "Enable mobile banking, internet banking, WhatsApp banking, e-passbook, POS, kiosk and other digital delivery channels while keeping them connected to the banking core",
    icon: iconFive,
  },
  {
    number: "03",
    title: "CONTROL",
    text: "Automate regulatory reporting and strengthen banking controls through AML, CKYC, audit, identity validation, credit appraisal, statutory reporting and business intelligence.",
    icon: iconSix,
  },
  {
    number: "04",
    title: "TRANSACT",
    text: "Connect core banking operations with payment and transaction infrastructure including RTGS, EFT, NACH, CTS, ATM, IMPS and e-commerce interfaces, enabling connected transaction processing across channels",
    icon: iconSeven,
  },
  {
    number: "05",
    title: "DIGITAL ACCESS",
    text: "Deliver consistent banking experiences across the channels customers use every day.",
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
  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#061b61] text-[#f7f9ff] min-[801px]:min-h-[929px]"
      aria-labelledby="home-products-title"
    >
      {/* Background Image */}
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        src={backgroundImage.src}
        alt=""
        aria-hidden="true"
      />

      {/* Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_77%_68%,rgba(27,100,230,0.65),transparent_35%),linear-gradient(90deg,rgba(6,27,97,0.98),rgba(6,27,97,0.52))]"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto grid w-full max-w-[1160px]
          grid-cols-1 items-center
          gap-[42px]
          px-[22px] py-[60px]

          min-[801px]:grid-cols-[minmax(280px,0.82fr)_minmax(420px,1.18fr)]
          min-[801px]:gap-[8vw]
          min-[801px]:px-10
          min-[801px]:py-10
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div
          className="
            mx-auto w-full max-w-[305px]

            min-[801px]:mx-0
            min-[801px]:max-w-[430px]
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-[15px]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.27em]
              text-[#c5d5ff]
            "
          >
            Product stack
          </p>

          {/* Main Heading */}
          <h2
            id="home-products-title"
            className="
              m-0
              max-w-[560px]
              font-sora
              text-[45.6px]
              font-semibold
              leading-[50.16px]
              tracking-[-1.14px]

              min-[801px]:max-w-[430px]

              max-[800px]:text-[34px]
              max-[800px]:leading-[38px]
            "
          >
            Everything Your Banking Technology Needs — Around the Core.
          </h2>

          {/* Description */}
          <p
            className="
              my-[22px]
              mb-5
              max-w-[560px]
              text-[11px]
              leading-[1.5]
              text-[#adbee8]

              min-[801px]:max-w-[390px]
            "
          >
            Run the full banking lifecycle from one core. Custodian Core
            Banking supports deposits, accounts, loans, accounting, clearing,
            remittances, branch operations, NPA management and day-to-day
            banking workflows
          </p>

          {/* Product Tags */}
          <div
            className="
              flex
              max-w-[410px]
              flex-wrap
              gap-[6px]
            "
            aria-label="Product capabilities"
          >
            {productTags.map((tag, index) => (
              <Fragment key={tag}>
                {/* Force second row after Clearing */}
                {index === 4 && (
                  <span
                    className="h-0 basis-full"
                    aria-hidden="true"
                  />
                )}

                <span
                  className="
                    rounded-full
                    border
                    border-[rgba(160,190,255,0.24)]
                    px-[10px]
                    py-[5px]
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-[#c1d0f3]
                  "
                >
                  {tag}
                </span>
              </Fragment>
            ))}
          </div>

          {/* Optional Explore Link */}
          {/*
          <a
            className="
              mt-7
              inline-flex
              items-center
              gap-[10px]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white
            "
            href="/products"
          >
            Explore all products
            <span
              className="text-[18px] leading-none"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
          */}
        </div>

        {/* =========================================
            RIGHT CAPABILITIES
        ========================================= */}
        <div
          className="
            relative
            hidden
            gap-[15px]

            min-[801px]:grid
          "
        >
          {/* Vertical Connector Line */}
          <span
            className="
              pointer-events-none
              absolute
              z-0
            "
            style={{
              left: "34px",
              top: "50px",
              bottom: "50px",
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, rgba(140,180,255,0.35), transparent)",
              border: "none",
              boxShadow: "none",
            }}
            aria-hidden="true"
          />

          {/* Capability Cards */}
          {capabilities.map((capability, index) => {
            const isLastCard = index === capabilities.length - 1;

            return (
              <article
                key={capability.number}
                className={`
                  group
                  relative
                  z-10
                  flex
                  min-h-[99px]
                  w-full
                  max-w-[667px]
                  gap-[14px]
                  rounded-[14px]
                  border
                  border-[rgba(127,176,255,0.27)]
                  bg-[rgba(38,81,166,0.3)]
                  px-[14px]
                  py-[13px]
                  text-white
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  backdrop-blur-[4px]
                  transition-all
                  duration-200

                  hover:!border-[#4f8cdb]
                  hover:!bg-[#0d3a87]
                  hover:!text-white

                  ${
                    isLastCard
                      ? `
                        group-hover:bg-[linear-gradient(100deg,rgba(33,104,208,0.58),rgba(31,65,144,0.46))]
                        group-hover:shadow-[0_0_24px_rgba(40,129,255,0.18)]
                      `
                      : ""
                  }
                `}
              >
                {/* Card Icon */}
                <span
                  className={`
                    relative
                    z-10
                    grid
                    h-10
                    w-10
                    flex-[0_0_40px]
                    place-items-center
                    rounded-[10px]
                    bg-[rgba(103,146,224,0.18)]
                    p-2
                    text-[#d8e5ff]
                    transition-all
                    duration-200

                    group-hover:!bg-[#6fa8ec]

                    ${
                      isLastCard
                        ? `
                          group-hover:bg-[linear-gradient(145deg,#73c5ff,#1267cd)]
                          group-hover:shadow-[0_0_22px_rgba(87,182,255,0.52)]
                        `
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

                      group-hover:[filter:brightness(0)_saturate(100%)_invert(14%)_sepia(45%)_saturate(2771%)_hue-rotate(201deg)_brightness(120%)_contrast(110%)_drop-shadow(0_0_3px_rgba(137,200,255,0.8))]
                    "
                    src={capability.icon.src}
                    alt=""
                  />
                </span>

                {/* Card Content */}
                <div className="min-w-0">
                  {/* Number + Title */}
                  <div className="flex items-baseline gap-[9px]">
                    <span
                      className="
                        text-[8px]
                        tracking-[0.2em]
                        text-[#77a7ee]
                        transition-colors
                        duration-200

                        group-hover:text-[#b9d2ff]
                      "
                    >
                      {capability.number}
                    </span>

                    <h3
                      className="
                        m-0
                        text-[12px]
                        tracking-[0.06em]
                      "
                    >
                      {capability.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.5]
                      text-[#d9e4ff]
                      transition-colors
                      duration-200

                      group-hover:text-[#e4edff]

                      max-[480px]:text-[9px]
                    "
                  >
                    {capability.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
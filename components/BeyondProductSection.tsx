"use client";

import React, { useState } from "react";
import {
  Rocket,
  Plug,
  Server,
  Settings,
  Headset,
  Crosshair,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/common/Container";
import backgroundImage from "@/assets/images/backgound-page.jpg";

export interface BeyondProductItem {
  id: string;
  number: string;
  title: string;
  orbitLabel: string;
  description: string;
  icon: LucideIcon;
  orbitIcon?: LucideIcon;
  /**
   * Angle in degrees around the circle circumference where 0deg is top (PLAN)
   * Clockwise: Top (0°), Right (72°), Bottom-Right (144°), Bottom-Left (216°), Left (288°)
   */
  angle: number;
}

export const beyondProductItems: BeyondProductItem[] = [
  {
    id: "cbs-implementation",
    number: "01",
    title: "CBS Implementation",
    orbitLabel: "PLAN",
    description:
      "Support implementation of the core banking environment around the institution's operating model.",
    icon: Rocket,
    angle: 0,
  },
  {
    id: "integration-connectivity",
    number: "02",
    title: "Integration & Connectivity",
    orbitLabel: "INTEGRATE",
    description:
      "Connect the core with payment systems, digital channels and external applications.",
    icon: Plug,
    angle: 72,
  },
  {
    id: "infrastructure-support",
    number: "03",
    title: "Infrastructure Support",
    orbitLabel: "RUN",
    description:
      "Support banking technology infrastructure, including data-centre and disaster-recovery requirements where applicable.",
    icon: Server,
    angle: 144,
  },
  {
    id: "product-deployment",
    number: "04",
    title: "Product Deployment",
    orbitLabel: "DEPLOY",
    description:
      "Configure and deploy selected banking modules according to institutional requirements.",
    icon: Settings,
    orbitIcon: Crosshair,
    angle: 216,
  },
  {
    id: "ongoing-support",
    number: "05",
    title: "Ongoing Support",
    orbitLabel: "SUPPORT",
    description:
      "Support institutions as their technology, operational and regulatory requirements evolve.",
    icon: Headset,
    angle: 288,
  },
];

export interface BeyondProductSectionProps {
  items?: BeyondProductItem[];
  className?: string;
}

export default function BeyondProductSection({
  items = beyondProductItems,
  className = "",
}: BeyondProductSectionProps) {
  // Default to index 1 (Integration & Connectivity) matching the reference design image
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const activeItem = items[activeIndex] || items[0];

  // Circle radius and center for 500x500 viewBox
  const radius = 175;
  const circumference = 2 * Math.PI * radius; // ~1099.55
  const arcLength = 170; // highlight arc segment spanning ~55 degrees

  // Rotation for the glowing active arc
  const activeArcRotation =
    activeItem.angle - 90 - (arcLength / circumference) * 180;

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#020716] py-20 lg:py-28 text-white ${className}`}
      aria-labelledby="beyond-product-heading"
    >
      {/* Background Texture Image with Sapphire Mesh Wave */}
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_right] opacity-75"
        src={backgroundImage.src}
        alt=""
        aria-hidden="true"
      />

      {/* Deep Navy/Sapphire Ambient Vignette & Gradients */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020716] via-[#02091e]/85 to-[#041235]/35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020716] via-transparent to-[#020716]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(25,90,225,0.22)_0%,rgba(5,30,110,0.08)_50%,transparent_75%)] blur-[90px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ============================================================ */}
        {/* TOP: Section Header (Eyebrow, Main Heading, Subtitle)       */}
        {/* ============================================================ */}
        <div className="max-w-2xl text-left">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">
            SERVICES &amp; IMPLEMENTATION
          </span>

          <h2
            id="beyond-product-heading"
            className="mt-3.5 text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.14]"
          >
            A Banking Technology Partner
            <br className="hidden sm:inline" /> Beyond the Product.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300/80 leading-relaxed max-w-xl">
            Plan → Implement → Integrate → Deploy → Support. A continuous loop,
            not a one-time handover.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MAIN CONTENT: Orbit Diagram on Left, Cards on Right          */}
        {/* ============================================================ */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* ============================================================ */}
          {/* LEFT: Radial Orbit Diagram                                   */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[440px] aspect-square mx-auto lg:mx-0">
              {/* SVG Orbit Track with Glow Effects */}
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <filter
                    id="arc-glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="5" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="active-arc-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Base Faint Track Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.2"
                />

                {/* Decorative Static Cyan Arc on Left (Under SUPPORT, exactly as in image) */}
                <path
                  d="M 91.4 323.9 A 175 175 0 0 1 98.5 162.5"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.75)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  filter="url(#arc-glow)"
                />

                {/* Decorative Static White Dash at Bottom (Between DEPLOY and RUN, as in image) */}
                <path
                  d="M 274.3 423.3 A 175 175 0 0 1 225.6 423.3"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Glowing Arc Highlight Near Active Node */}
                <circle
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="url(#active-arc-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={`${arcLength} ${circumference - arcLength}`}
                  filter="url(#arc-glow)"
                  style={{
                    transform: `rotate(${activeArcRotation}deg)`,
                    transformOrigin: "250px 250px",
                    transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </svg>

              {/* Center Hub: Cross-fading Content */}
              <div
                className="absolute inset-[22%] flex items-center justify-center pointer-events-none"
                aria-live="polite"
              >
                {items.map((item, index) => {
                  const isCurrent = activeIndex === index;
                  const HubIcon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-out ${
                        isCurrent
                          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                          : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                      }`}
                    >
                      {/* Hub Icon Badge */}
                      <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-[#071330]/80 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)] mb-2">
                        <HubIcon className="w-5 h-5 text-[#38bdf8] stroke-[1.8]" />
                      </div>

                      {/* Hub Title (Kept on one line for Integration & Connectivity) */}
                      <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-tight text-center px-2 max-w-[260px] whitespace-normal sm:whitespace-nowrap">
                        {item.title}
                      </h3>

                      {/* Hub Description */}
                      <p className="mt-1.5 text-[11px] sm:text-xs text-slate-300/80 leading-relaxed text-center px-3 max-w-[240px]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* 5 Radial Orbit Node Squircles (Clockwise: Plan, Integrate, Run, Deploy, Support) */}
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                const NodeIcon = item.orbitIcon || item.icon;

                // Position calculation in percentage where (50%, 50%) is center
                const rad = (item.angle * Math.PI) / 180;
                const leftPercent = 50 + 35 * Math.sin(rad);
                const topPercent = 50 - 35 * Math.cos(rad);

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`orbit-node-${item.id}`}
                    aria-controls={`tab-card-${item.id}`}
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] rounded-2xl cursor-pointer transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] ${
                      isActive
                        ? "bg-gradient-to-b from-[#38bdf8] via-[#2070e6] to-[#124cb4] border border-[#7dd3fc]/80 shadow-[0_0_35px_rgba(56,189,248,0.7),0_0_12px_rgba(56,189,248,0.45)] scale-105 z-20"
                        : "bg-[#091838]/80 hover:bg-[#112654]/85 border border-white/10 hover:border-white/20 backdrop-blur-md z-10"
                    }`}
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                    }}
                  >
                    <NodeIcon
                      className={`w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        isActive
                          ? "text-white stroke-[2.2]"
                          : "text-slate-300 group-hover:text-white stroke-[1.8]"
                      }`}
                    />
                    <span
                      className={`mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider transition-colors duration-300 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-slate-300/90 group-hover:text-white font-semibold"
                      }`}
                    >
                      {item.orbitLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT: 5 Vertically Stacked Cards                            */}
          {/* ============================================================ */}
          <div
            className="lg:col-span-7 xl:col-span-7 flex flex-col space-y-3 sm:space-y-3.5 w-full lg:pt-2"
            role="tablist"
            aria-label="Services & Implementation tabs"
          >
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              const CardIcon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-card-${item.id}`}
                  aria-controls={`orbit-node-${item.id}`}
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group w-full text-left rounded-2xl px-5 sm:px-6 py-4 sm:py-5 transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] ${
                    isActive
                      ? "bg-[rgba(23,49,95,0.85)] border border-[#3b82f6]/40 shadow-[0_8px_30px_rgba(2,12,38,0.5),0_0_20px_rgba(56,189,248,0.12)] backdrop-blur-md"
                      : "bg-[#06122d]/45 hover:bg-[#0c1f48]/55 border border-white/[0.08] hover:border-white/20 backdrop-blur-sm"
                  }`}
                >
                  {/* Top Row: Number, Icon, Title */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-[13px] sm:text-sm font-mono font-medium text-[#38bdf8]">
                      {item.number}
                    </span>
                    <CardIcon className="w-4 h-4 text-[#38bdf8] shrink-0 stroke-[1.8]" />
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Bottom Row: Description (starts under number, spans across card) */}
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-300/80 group-hover:text-slate-200/90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

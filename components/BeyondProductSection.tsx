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
  const radius = 190;
  const innerRadius = 140;
  const circumference = 2 * Math.PI * radius;
  const arcLength = 160;

  // Rotation for the glowing active arc
  const activeArcRotation =
    activeItem.angle - 90 - (arcLength / circumference) * 180;

  return (
    <section
      className={`relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white ${className}`}
      style={{ backgroundColor: "#061060" }}
      aria-labelledby="beyond-product-heading"
    >
      {/* Background Texture Image — prominent on the right side */}
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-80"
        src={backgroundImage.src}
        alt=""
        aria-hidden="true"
      />

      {/* Left-side dark gradient — fades from dark to transparent to show texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,14,80,0.92) 0%, rgba(7,20,100,0.70) 38%, rgba(9,28,120,0.25) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      {/* Top & bottom fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,14,80,0.65) 0%, transparent 18%, transparent 82%, rgba(5,14,80,0.65) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle blue radial glow on the right-center (matching reference) */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "55%",
          height: "80%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(30,80,220,0.30) 0%, rgba(15,50,180,0.10) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ============================================================ */}
        {/* TOP LEFT: Header                                             */}
        {/* ============================================================ */}
        <div className="max-w-[520px] text-left">
          {/* Eyebrow — very small, light tracking, white/faint */}
          <span
            className="block uppercase tracking-[0.22em] text-white/60"
            style={{ fontSize: "11px", fontWeight: 500 }}
          >
            SERVICES &amp; IMPLEMENTATION
          </span>

          {/* Main Heading */}
          <h2
            id="beyond-product-heading"
            className="mt-3 font-semibold text-white leading-[1.12] text-[22px] sm:text-[24px] md:text-[36px] lg:text-[46px]"
            style={{
              //  fontSize: "clamp(26px, 4vw, 42px)",
              letterSpacing: "-0.5px",
              fontWeight: 600,
            }}
          >
            A Banking Technology Partner{" "}
            <span className="block">Beyond the Product.</span>
          </h2>

          {/* Subheading */}
          <p
            className="mt-3 text-white/60 leading-relaxed"
            style={{ fontSize: "13.5px" }}
          >
            Plan → Implement → Integrate → Deploy → Support. A continuous loop,
            not a one-time handover.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MAIN: Orbit Diagram (left) + Cards (right)                  */}
        {/* ============================================================ */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* ============================================================ */}
          {/* LEFT: Radial Orbit Diagram                                   */}
          {/* ============================================================ */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] aspect-square mx-auto">
              {/* SVG Orbit Track */}
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <filter
                    id="bp-arc-glow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feGaussianBlur stdDeviation="6" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="bp-arc-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Base faint track ring */}
                <circle
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />

                {/* Inner decorative ring */}
                <circle
                  cx="250"
                  cy="250"
                  r={innerRadius}
                  fill="rgba(10,25,80,0.35)"
                  stroke="rgba(96,165,250,0.18)"
                  strokeWidth="1"
                />

                {/* Static accent arc on the LEFT side (between SUPPORT and PLAN) — matches image */}
                <path
                  d="M 73 320 A 190 190 0 0 1 82 168"
                  fill="none"
                  stroke="rgba(96,165,250,0.8)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  filter="url(#bp-arc-glow)"
                />

                {/* Static short white dash at bottom (between DEPLOY and RUN) — matches image */}
                <path
                  d="M 275 438 A 190 190 0 0 1 225 438"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Animated glowing arc near active node */}
                <circle
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="url(#bp-arc-grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${arcLength} ${circumference - arcLength}`}
                  filter="url(#bp-arc-glow)"
                  style={{
                    transform: `rotate(${activeArcRotation}deg)`,
                    transformOrigin: "250px 250px",
                    transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </svg>

              {/* Center Hub: Cross-fading active item content */}
              <div
                className="absolute inset-[24%] flex items-center justify-center pointer-events-none"
                aria-live="polite"
              >
                {items.map((item, index) => {
                  const isCurrent = activeIndex === index;
                  const HubIcon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ease-out ${
                        isCurrent
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          background: "rgba(77, 125, 216, 0.32)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(151, 188, 255, 0.42)",
                          boxShadow:
                            "inset 0 1px 1px rgba(190, 215, 255, 0.12)",
                          flexShrink: 0,
                        }}
                      >
                        <HubIcon
                          style={{
                            width: "18px",
                            height: "18px",
                            color: "#63c6f3",
                            strokeWidth: 1.6,
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="font-bold text-white text-center"
                        style={{
                          fontSize: "13px",
                          letterSpacing: "-0.2px",
                          lineHeight: 1.25,
                          marginTop: "2px",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-white/60 text-center"
                        style={{
                          fontSize: "10.5px",
                          lineHeight: 1.5,
                          maxWidth: "155px",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* 5 Radial Orbit Node Squircles */}
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                const NodeIcon = item.orbitIcon || item.icon;

                const rad = (item.angle * Math.PI) / 180;
                const leftPercent = 50 + 38 * Math.sin(rad);
                const topPercent = 50 - 38 * Math.cos(rad);

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
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 ease-out focus:outline-none ${
                      isActive ? "z-20 scale-105" : "z-10 hover:scale-105"
                    }`}
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                      width: isActive ? "62px" : "56px",
                      height: isActive ? "62px" : "56px",
                      background: isActive
                        ? "linear-gradient(160deg, #60d0ff 0%, #2b7cf7 45%, #1050c8 100%)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(140,210,255,0.7)"
                        : "1px solid rgba(255,255,255,0.12)",
                      boxShadow: isActive
                        ? "0 0 28px rgba(80,180,255,0.65), 0 0 8px rgba(80,180,255,0.4)"
                        : "none",
                      backdropFilter: isActive ? "blur(12px)" : "none",
                    }}
                  >
                    <NodeIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        color: isActive ? "white" : "rgba(200,220,255,0.85)",
                        strokeWidth: isActive ? 2.2 : 1.7,
                      }}
                    />
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 500,
                        color: isActive ? "white" : "rgba(200,220,255,0.80)",
                      }}
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
            className="flex flex-col w-full"
            role="tablist"
            aria-label="Services & Implementation tabs"
            style={{ gap: "4px" }}
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
                  className={`group w-full text-left transition-all duration-300 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400`}
                  style={{
                    padding: "14px 18px 14px 16px",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                    borderRadius: "12px",
                    background: isActive
                      ? "rgba(20,50,120,0.60)"
                      : "transparent",

                    backdropFilter: isActive ? "blur(16px)" : "none",
                  }}
                >
                  {/* Top Row: Number + Icon + Title */}
                  <div className="flex items-center" style={{ gap: "8px" }}>
                    {/* Number — very small, muted */}
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(150,210,255,0.95)",
                        fontFamily: "monospace",
                        minWidth: "18px",
                      }}
                    >
                      {item.number}
                    </span>

                    {/* Icon — small, slightly brighter than number */}
                    <CardIcon
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "rgba(150,210,255,0.95)",
                        strokeWidth: 1.8,
                        flexShrink: 0,
                      }}
                    />

                    {/* Title */}
                    <span
                      style={{
                        fontSize: "14.5px",
                        fontWeight: 400,
                        color: isActive
                          ? "rgba(255,255,255,1)"
                          : "rgba(255,255,255,0.88)",
                        letterSpacing: "-0.2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      marginTop: "6px",
                      fontSize: "12.5px",
                      lineHeight: 1.55,
                      fontWeight: 400,
                      color: isActive
                        ? "rgba(200,220,255,0.72)"
                        : "rgba(200,220,255,0.55)",
                      paddingLeft:
                        "26px" /* align under icon/title, past the number */,
                    }}
                  >
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

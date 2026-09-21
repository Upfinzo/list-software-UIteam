"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Landmark,
  CreditCard,
  Smartphone,
  SlidersHorizontal,
} from "lucide-react";

import Container from "@/components/common/Container";

export type CapabilityTab = {
  id: string;
  label: string; // tab bar label
  title: string; // left column heading
  description: string;
  icon: React.ReactNode; // lucide-react icon
  badges: string[];
  items: string[]; // right-panel row labels (5 items)
};

export interface CapabilitiesSectionProps {
  tabs?: CapabilityTab[];
  autoRotate?: boolean;
  autoRotateInterval?: number;
  className?: string;
}

export const defaultCapabilityTabs: CapabilityTab[] = [
  {
    id: "integration-ready",
    label: "Integration-Ready",
    title: "Integration-Ready",
    description:
      "Middleware, banking APIs, interfaces, and open integrations enable seamless connectivity between banking applications and third-party systems.",
    icon: <Landmark />,
    badges: [
      "API-First Connectivity ",
      "Open Integrations",
      "Connected Ecosystem",
      "Built to Extend",
    ],
    items: [
      "API-First Connectivity ",
      "Open Integrations",
      "Connected Ecosystem",
      "Built to Extend",
    ],
  },
  {
    id: "secure",
    label: "Secure",
    title: "Secure",
    description:
      "Authentication, validation, controlled access and transaction-level safeguards support secure banking operations and trusted financial transactions.",
    icon: <CreditCard />,
    badges: [
      "Protected Operations",
      "Controlled Access",
      "Secure Connectivity",
      "Built-In Resilience",
    ],
    items: [
      "Protected Operations",
      "Controlled Access",
      "Secure Connectivity",
      "Built-In Resilience",
    ],
  },
  {
    id: "scalable",
    label: "Scalable",
    title: "Scalable",
    description:
      "Built to support evolving banking requirements with scalable infrastructure and expanding multi-tenant capabilities.",
    icon: <Smartphone />,
    badges: [
      "Multi-Tenant",
      "Flexible",
      "Expandable",
      "Resilient",
      "Adaptable",
    ],
    items: ["Multi-Tenant", "Flexible", "Expandable", "Resilient", "Adaptable"],
  },
  {
    id: "evolving",
    label: "Evolving",
    title: "Evolving",
    description:
      "Modernise established banking capabilities while creating new possibilities for digital operations and financial services. ",
    icon: <SlidersHorizontal />,
    badges: ["Modern", "Intelligent", "Connected", "Automated", "Innovative"],
    items: ["Modern", "Intelligent", "Connected", "Automated", "Innovative"],
  },
];

export default function CapabilitiesSection({
  tabs = defaultCapabilityTabs,
  autoRotate = false,
  autoRotateInterval = 4000,
  className = "",
}: Readonly<CapabilitiesSectionProps>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    top: number;
    height: number;
  }>({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeTab = tabs[activeIndex] || tabs[0];

  // Calculate position & width of active tab indicator bar
  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const currentTab = tabRefs.current[activeIndex];
    if (container && currentTab) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = currentTab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
        top: tabRect.top - containerRect.top,
        height: tabRect.height,
      });
    }
  }, [activeIndex]);

  // Update indicator on active tab change or container resize
  useEffect(() => {
    updateIndicator();

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });

    resizeObserver.observe(container);
    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex, updateIndicator]);

  // Auto-rotate tabs if enabled
  useEffect(() => {
    if (!autoRotate || isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, autoRotateInterval);

    return () => clearInterval(timer);
  }, [autoRotate, autoRotateInterval, isPaused, tabs.length]);

  // Keyboard navigation for accessible tablist
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      className={`py-12 md:py-20 ${className}`}
      aria-label="Capabilities"
    >
      <Container>
        {/* Header Block */}
        <div className="mb-8 md:mb-12 max-w-3xl">
          <span className="font-bold uppercase tracking-[0.2em] text-[#111E89] mb-3 block text-[11px] ">
            CAPABILITIES
          </span>
          <h2 className=" font-semibold tracking-tight text-[#121F37] leading-[1.15] text-[32px] sm:text-[38px]  lg:text-[45.6px]">
            Everything Banking Needs.
            <br />
            Connected.
          </h2>
        </div>

        {/* Outer Card Container */}
        <div
          className="rounded-[24px] border border-slate-200/70 shadow-sm bg-white overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Tab Bar Header */}
          <div
            className="relative border-b border-slate-200/80 bg-slate-50/40"
            ref={containerRef}
          >
            {/* Sliding Active Indicator (Background Fill + Animated Left-to-Right Bottom Accent Line) */}
            <div
              className="absolute pointer-events-none transition-all duration-300 ease-out z-0 motion-reduce:transition-none overflow-hidden"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                top: `${indicatorStyle.top}px`,
                height: `${indicatorStyle.height}px`,
              }}
            >
              {/* Light background gradient fill: expands width 0% -> 100% on click */}
              <div
                key={`bg-fill-${activeIndex}`}
                className="absolute inset-0 animate-[borderWidthExpand_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(86,176,230,0.1) 0%, rgba(86,176,230,0) 100%)",
                }}
              />

              {/* Bottom 2.5px gradient indicator line: expands width 0% -> 100% left-to-right on click */}
              <div
                key={`border-line-${activeIndex}`}
                className="absolute bottom-0 left-0 h-[2.5px] rounded-full animate-[borderWidthExpand_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{
                  background:
                    "linear-gradient(90deg, #111E89 0%, #5EAFE6 100%)",
                }}
              />
            </div>

            {/* Tab Buttons Row */}
            <div
              role="tablist"
              aria-label="Banking Capabilities Tabs"
              className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-slate-200/80 md:divide-y-0"
            >
              {tabs.map((tab, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabClick(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`flex-1 py-4 sm:py-5 px-4 sm:px-6 text-left md:text-base font-semibold transition-colors duration-200 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#111E89]/40 cursor-pointer text-[14px] ${
                      isActive
                        ? "text-[#121F37] font-bold"
                        : "text-[#121F37]/60 hover:text-[#121F37]/90 font-medium"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Panel Content */}
          <div
            role="tabpanel"
            id={`panel-${activeTab.id}`}
            aria-labelledby={`tab-${activeTab.id}`}
            className="p-6 sm:p-8 md:p-10 lg:p-12"
          >
            <div
              key={activeTab.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-[contentFadeIn_0.2s_ease-out] motion-reduce:animate-none"
            >
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                {/* Icon Chip */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden shadow-xs border-t border-[#5EAFE6]/40"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(17,30,137,0.08) 0%, rgba(67,125,198,0.115) 50%, rgba(94,175,230,0.15) 100%)",
                  }}
                >
                  {React.isValidElement(activeTab.icon)
                    ? React.cloneElement(
                        activeTab.icon as React.ReactElement<any>,
                        {
                          className: "w-7 h-7 text-[#111E89]",
                          strokeWidth: 2,
                        },
                      )
                    : activeTab.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#121F37] tracking-tight text-[26px] ">
                  {activeTab.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#647183] leading-relaxed max-w-xl">
                  {activeTab.description}
                </p>

                {/* Badge Row */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {activeTab.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3.5 py-1.5 rounded-full border border-[#DCE4EC] bg-[rgba(248,250,253,1)] text-xs text-[#121F37] shadow-2xs transition-colors hover:border-[#111E89]/40 select-none"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Stacked Rows with Animated Traveling Dots */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl border border-slate-200/70 bg-[#F6F9FC] p-6 sm:p-8 overflow-hidden shadow-2xs min-h-[340px] flex flex-col justify-center">
                  {/* Background Soft Blue Radial Glow Blob */}
                  <div
                    className="absolute -right-16 -top-16 w-72 h-72 rounded-full pointer-events-none z-0 opacity-70 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(86,176,230,0.35) 0%, rgba(86,176,230,0) 70%)",
                    }}
                  />
                  <div
                    className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full pointer-events-none z-0 opacity-50 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(17,30,137,0.15) 0%, rgba(17,30,137,0) 70%)",
                    }}
                  />

                  {/* 5 Stacked Connector Rows */}
                  <div className="relative z-10 space-y-6">
                    {activeTab.items.map((item, index) => (
                      <div
                        key={`${activeTab.id}-${item}-${index}`}
                        className="flex flex-col"
                      >
                        {/* Label text */}
                        <span className="text-xs sm:text-sm text-[#647183] mb-1.5">
                          {item}
                        </span>

                        {/* Dashed connector line track - perfectly centered vertically */}
                        <div className="relative flex items-center w-full h-4">
                          {/* Static dark dot at the start (left) */}
                          <span className="w-2 h-2 rounded-full bg-[#111E89] shrink-0 z-10" />

                          {/* Dashed line track */}
                          <div className="flex-1 h-0 border-t-2 border-dashed border-slate-300/90 relative -ml-0.5" />

                          {/* Animated light-blue traveling dot - dead center vertically on the line */}
                          <span
                            className="w-2.5 h-2.5 rounded-full bg-[#5EAFE6] shadow-[0_0_8px_#5EAFE6] absolute  -translate-y-1/2 z-20 pointer-events-none motion-reduce:hidden"
                            style={{
                              animation: "travelDot 2.8s linear infinite",
                              animationDelay: `${-index * 0.56}s`,
                              top: "71%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

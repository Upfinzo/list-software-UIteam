"use client";
import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import type { StaticImageData } from "next/image";

import evolving from "@/public/images/home/CAPABILITIES/Vector.svg";
import inntegration from "@/public/images/home/CAPABILITIES/inntegration.svg";
import scalable from "@/public/images/home/CAPABILITIES/scalable.svg";
import secure from "@/public/images/home/CAPABILITIES/secure.svg";

type CapabilityVisualItem = {
  code: string;
  title: string;
  subtitle: string;
  color: string;
};

export type CapabilityTab = {
  id: string;
  label: string; // tab bar label
  title: string; // left column heading
  description: string;
  /** Imported SVG — the artwork already carries the brand #111E89. */
  icon: StaticImageData;
  badges: string[];
  items: string[]; // right-panel row labels
  visualTitle: string;
  visualStatus: string;
  visualItems: CapabilityVisualItem[];
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
      "Middleware, banking APIs, interfaces, and open integrations enable seamless connectivity between banking applications and third-party systems",
    icon: inntegration,
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
    visualTitle: "Open integrations",
    visualStatus: "Connected ecosystem",
    visualItems: [
      {
        code: "API",
        title: "Banking APIs",
        subtitle: "API-first connectivity",
        color: "bg-[#E5F3FC] text-[#0789C5]",
      },
      {
        code: "INT",
        title: "Open integrations",
        subtitle: "Third-party connectivity",
        color: "bg-[#EAF5EF] text-[#238B58]",
      },
    ],
  },
  {
    id: "secure",
    label: "Secure",
    title: "Secure",
    description:
      "Authentication, validation, controlled access, and transaction-level safeguards support secure banking operations and trusted financial transactions.",
    icon: secure,
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
    visualTitle: "Role-based access",
    visualStatus: "Controlled access",
    visualItems: [
      {
        code: "ACL",
        title: "Controlled access",
        subtitle: "Role-based permissions",
        color: "bg-[#E8F3FC] text-[#087DBB]",
      },
      {
        code: "TXN",
        title: "Transaction safeguards",
        subtitle: "Secure transactions",
        color: "bg-[#EAF5EF] text-[#238B58]",
      },
    ],
  },
  {
    id: "scalable",
    label: "Scalable",
    title: "Scalable",
    description:
      "Built to support evolving banking requirements with scalable infrastructure and expanding multi-tenant capabilities.",
    icon: scalable,
    badges: [
      "Multi-Tenant",
      "Flexible",
      "Expandable",
      "Resilient",
      "Adaptable",
    ],
    items: ["Multi-Tenant", "Flexible", "Expandable", "Resilient", "Adaptable"],
    visualTitle: "Multi-tenant capability",
    visualStatus: "Expanding",
    visualItems: [
      {
        code: "MT",
        title: "Multi-tenant capability",
        subtitle: "Expanding",
        color: "bg-[#E8F3FC] text-[#087DBB]",
      },
      {
        code: "BR",
        title: "New branch onboarding",
        subtitle: "Flexible rollout",
        color: "bg-[#FFF3D9] text-[#B47C16]",
      },
    ],
  },
  {
    id: "evolving",
    label: "Evolving",
    title: "Evolving",
    description:
      "Modernize established banking capabilities while creating new possibilities for digital operations and financial services.",
    icon: evolving,
    badges: ["Modern", "Intelligent", "Connected", "Automated", "Innovative"],
    items: ["Modern", "Intelligent", "Connected", "Automated", "Innovative"],
    visualTitle: "Intelligent workflows",
    visualStatus: "Automation active",
    visualItems: [
      {
        code: "AI",
        title: "AI capabilities",
        subtitle: "Intelligent operations",
        color: "bg-[#FDEBE7] text-[#D95345]",
      },
      {
        code: "DX",
        title: "Digital services",
        subtitle: "New possibilities",
        color: "bg-[#FFF3D9] text-[#B47C16]",
      },
    ],
  },
];

function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  readonly text: string;
  readonly className?: string;
  readonly delay?: number;
}) {
  return (
    <span className={`capabilities-text-reveal ${className}`}>
      <span aria-hidden="true" className="capabilities-text-reveal-base">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="capabilities-text-reveal-overlay"
        style={{ animationDelay: `${delay}ms` }}
      >
        {text}
      </span>
    </span>
  );
}

export default function CapabilitiesSection({
  tabs = defaultCapabilityTabs,
  autoRotate = true,
  autoRotateInterval = 4000,
  className = "",
}: Readonly<CapabilitiesSectionProps>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex] || tabs[0];

  useEffect(() => {
    if (!autoRotate || tabs.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, autoRotateInterval);

    return () => window.clearInterval(timer);
  }, [autoRotate, autoRotateInterval, tabs.length]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    const nextIndex =
      event.key === "ArrowRight"
        ? (index + 1) % tabs.length
        : event.key === "ArrowLeft"
          ? (index - 1 + tabs.length) % tabs.length
          : event.key === "Home"
            ? 0
            : tabs.length - 1;

    setActiveIndex(nextIndex);
    document.getElementById(`technology-tab-${tabs[nextIndex].id}`)?.focus();
  };

  return (
    <section
      className={`bg-white py-12 sm:py-16 lg:py-[52px] ${className}`}
      aria-labelledby="technology-foundation-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <header className="mx-auto max-w-[1120px] text-center">
          <h2
            id="technology-foundation-heading"
            className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#101A3B]"
          >
            The Technology Foundation for Modern Banking
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-[1.7] text-[#64738F] sm:text-base">
            A modern, secure and scalable platform designed to connect your banking
            ecosystem today and for what’s next.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-[1136px] sm:mt-11">
          <div
            role="tablist"
            aria-label="Banking technology foundations"
            className="grid grid-cols-2 overflow-hidden rounded-t-[4px] bg-[#F2F5FA] sm:grid-cols-4"
          >
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`technology-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`technology-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`relative min-h-[52px] cursor-pointer px-3 py-3 text-center text-sm font-medium transition-[background-color,color] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0789D0] sm:min-h-[54px] sm:text-[15px] ${
                    isActive
                      ? "bg-[#E3F0FC] font-semibold text-[#0789D0]"
                      : "text-[#73829F] hover:bg-[#E9F1FA] hover:text-[#123D95]"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden bg-[#D8E9F7]"
                    >
                      <span
                        key={`${tab.id}-${activeIndex}`}
                        className="capability-tab-progress block h-full origin-left bg-gradient-to-r from-[#032683] to-[#00A9E8]"
                        style={{
                          animationDuration: `${autoRotateInterval}ms`,
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            key={activeTab.id}
            id={`technology-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`technology-tab-${activeTab.id}`}
            className="capabilities-panel-transition grid items-center gap-10 pt-10 sm:pt-12 lg:grid-cols-2 lg:gap-16 lg:pt-[68px]"
          >
            <div className="relative mx-auto h-[310px] w-full max-w-[520px] sm:h-[350px]">
              <div className="absolute bottom-5 left-0 h-[250px] w-[66%] rounded-[17px] border border-[#E1EAF5] bg-white shadow-[0_18px_38px_-30px_rgba(3,38,131,.45)] sm:bottom-7 sm:h-[270px]">
                <div className="absolute inset-x-5 top-6 flex justify-center sm:top-8">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 260 132"
                    className="w-full max-w-[260px]"
                    fill="none"
                  >
                    <path
                      d="M12 128a118 118 0 0 1 236 0h-43a75 75 0 0 0-150 0H12Z"
                      fill="#E8EEF6"
                    />
                    <path
                      d="M12 128a118 118 0 0 1 191-91l-25 36a75 75 0 0 0-123 55H12Z"
                      fill="#089DD4"
                      className="capabilities-gauge-draw"
                    />
                    <path
                      d="M12 128a118 118 0 0 1 191-91l-25 36a75 75 0 0 0-123 55H12Z"
                      fill="url(#foundation-gauge-dots)"
                      className="capabilities-gauge-draw"
                    />
                    <defs>
                      <pattern
                        id="foundation-gauge-dots"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1" fill="white" fillOpacity=".42" />
                      </pattern>
                    </defs>
                  </svg>
                </div>
                <div className="absolute right-0 bottom-[43px] left-0 border-t border-[#EEF2F7] px-5 pt-3 sm:bottom-[46px] sm:px-6">
                  <p className="text-[11px] text-[#73829F]">{activeTab.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-[15px] font-semibold leading-tight tracking-[-0.05em] text-[#101A3B] sm:text-lg">
                    {activeTab.visualTitle}
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 left-0 rounded-b-[17px] bg-[#F4F8FD] px-5 py-2.5 text-xs font-semibold text-[#0798CF] sm:px-6">
                  {activeTab.visualStatus}
                </div>
              </div>

              <div
                key={`${activeTab.id}-visual-highlight`}
                className="capabilities-details-in absolute top-0 right-0 z-10 flex w-[58%] items-center gap-3 rounded-[16px] border border-[#E4EBF5] bg-white px-4 py-4 shadow-[0_18px_38px_-25px_rgba(3,38,131,.35)] sm:right-0 sm:w-[57%] sm:px-5 sm:py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F3FC] text-[#009CDF]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3 19 6v5c0 4.7-3 8-7 10-4-2-7-5.3-7-10V6l7-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[13px] font-semibold leading-tight text-[#101A3B] sm:text-sm">
                    {activeTab.visualTitle}
                  </span>
                  <span className="mt-1 block text-[11px] text-[#73829F] sm:text-xs">
                    {activeTab.visualStatus}
                  </span>
                </span>
              </div>

              <div className="absolute right-0 bottom-0 z-20 w-[72%] overflow-hidden rounded-[16px] border border-[#E4EBF5] bg-white shadow-[0_18px_38px_-25px_rgba(3,38,131,.38)] sm:right-0 sm:w-[72%]">
                {activeTab.visualItems.map((item, index) => (
                  <div
                    key={item.code}
                    className="flex items-center gap-3 border-b border-[#EDF1F6] px-3.5 py-3 last:border-b-0 sm:gap-4 sm:px-5 sm:py-3.5"
                  >
                    <span className={`flex h-8 w-10 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${item.color}`}>
                      {item.code}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold text-[#101A3B] sm:text-sm">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[10px] text-[#73829F] sm:text-xs">
                        {item.subtitle}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="capabilities-toggle-track relative h-5 w-9 shrink-0 rounded-full"
                      style={{ animationDelay: `${index * 350}ms` }}
                    >
                      <span
                        className="capabilities-toggle-knob absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm"
                        style={{ animationDelay: `${250 + index * 350}ms` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="capabilities-details-in mx-auto w-full max-w-[500px] lg:mx-0">
              <div className="overflow-hidden">
                <h3
                    aria-label={activeTab.title}
                    key={`${activeTab.id}-heading`}
                    className="text-[32px] font-semibold leading-tight tracking-[-0.05em] text-[#101A3B] sm:text-[38px]"
                >
                    <TextReveal text={activeTab.title} />
                </h3>
              </div>
              <div className="mt-4 max-w-[470px] overflow-hidden">
                <p
                    aria-label={activeTab.description}
                    key={`${activeTab.id}-description`}
                    className="text-[15px] leading-[1.75] text-[#64738F] sm:text-base"
                >
                    <TextReveal text={activeTab.description} delay={120} />
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-[15px] text-[#52627E]">
                {activeTab.items.map((item) => (
                  <li key={`${activeTab.id}-${item}`} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#009CDA]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#1988E3] to-[#032D91] px-5 text-sm font-semibold text-white shadow-[0_10px_18px_-10px_rgba(3,38,131,.75)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0789D0]"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

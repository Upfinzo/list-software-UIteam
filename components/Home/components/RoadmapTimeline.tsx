"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    number: "01",
    title: "A Common API Platform",
    description:
      "A flexible technology foundation that enables faster integration, smoother operations, and scalable banking experiences",
  },
  {
    number: "02",
    title: "AI Enabled Banking Technology",
    description:
      "Introducing AI capabilities across newer modules to support intelligent operations, faster issue analysis and more informed banking workflows",
  },
  {
    number: "03",
    title: "Modernized Architecture",
    description:
      "Modernising legacy modules into a consistent, modular technology foundation",
  },
  {
    number: "04",
    title: "Expanding Multi - Tenant Architecture",
    description:
      "Extending multi-tenant capabilities across the portfolio to support scalable deployments, simplified management and more efficient technology operations",
  },
  {
    number: "05",
    title: "Smarter Digital Experiences",
    description:
      "Evolving mobile and digital banking capabilities with richer customer engagement, integrated services and emerging opportunities such as BBPS",
  },
  {
    number: "06",
    title: "Technology Partnerships",
    description:
      "Working with strategic technology partners to extend capabilities, accelerate innovation and bring new banking services to institutions faster",
  },
];

const TimelineItem = ({
  step,
}: {
  step: TimelineStep;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative flex gap-6 pb-14 last:pb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number Badge */}
      <div
        className={`
          relative
          z-10
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-white
          text-sm
          font-bold
          text-[#142E8C]
          shadow-[0_2px_10px_rgba(15,23,42,0.08)]
          transition-all
          duration-700
          ease-out
          border border-[#DCE4EC]

          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }
        `}
      >
        {/* Gradient border - ONLY on hover */}
        <span
          className={`
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            p-px
            transition-opacity
            duration-300
            opacity-25
            ${
              isHovered
                ? "opacity-100"
                : "opacity-0"
            }
          `}
          style={{
            background:
              "linear-gradient(180deg, #111E8966 0%, #5EAFE666 50%, #5EAFE600 100%)",
          }}
        >
          <span className="block h-full w-full rounded-[15px] bg-white" />
        </span>

        {/* Number */}
        <span className="relative z-10">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div
        className={`
          pt-3
          transition-all
          duration-700
          ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }
        `}
      >
        <h3
          className={`
            text-lg
            font-semibold
            transition-colors
            duration-300
            ${
              isHovered
                ? "text-[#1F3B8C]"
                : "text-[#101828]"
            }
          `}
        >
          {step.title}
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-[#667085]">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const RoadmapTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  /*
   * Reveal the complete timeline line smoothly
   * when the timeline enters the viewport.
   */
  useEffect(() => {
    const element = timelineRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="rounded-3xl px-6 py-16 sm:px-12">
      <div
        ref={timelineRef}
        className="relative mx-auto max-w-2xl"
      >
        {/* 
          ONE CONTINUOUS GRADIENT LINE
          
          It runs from the bottom of 01
          all the way to the center/bottom area of 06.
        */}
        <span
          className={`
            pointer-events-none
            absolute
            left-[27px]
            top-14
            bottom-7
            w-px
            origin-top
            bg-[linear-gradient(to_bottom,#111E8966,#5EAFE666,#5EAFE600)]
            transition-transform
            duration-[1800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            opacity-50
            ${
              lineVisible
                ? "scale-y-100"
                : "scale-y-0"
            }
          `}
        />

        {/* Timeline Items */}
        {steps.map((step) => (
          <TimelineItem
            key={step.number}
            step={step}
          />
        ))}
      </div>
    </section>
  );
};

export default RoadmapTimeline;
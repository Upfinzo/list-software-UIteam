'use client';

import { useEffect, useState } from "react";

interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    numericValue: 20,
    suffix: '+',
    label: 'Years in banking\ntechnology',
  },
  {
    numericValue: 100,
    suffix: '+',
    label: 'Financial\ninstitutions',
  },
  {
    numericValue: 800,
    suffix: '+',
    label: 'Connected\nbranches',
  },
];

// Number animation timing
const BASE_DURATION = 2400;
const CARD_STAGGER = 250;
const DIGIT_STAGGER = 150;

// Underline timing (auto-switch interval = SHOW_DURATION + SHRINK_DURATION)
const SHOW_DURATION = 1400;
const SHRINK_DURATION = 350;

// Underline slide speed
const SLIDE_DURATION = 600;

const LINE_GRADIENT =
  "linear-gradient(90deg, #032683 0%, #087BD8 55%, #00A9E8 100%)";

// Lucky Draw / Slot Machine Number Animation
function AnimatedStatValue({
  value,
  suffix,
  delay,
  duration,
}: {
  value: number;
  suffix: string;
  delay: number;
  duration: number;
}) {
  const [started, setStarted] = useState(false);

  const digits = String(value).split("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setStarted(true);
      return;
    }

    const timeout = window.setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [delay]);

  return (
    <span
      aria-label={`${value}${suffix}`}
      className="inline-flex items-center tabular-nums"
    >
      {digits.map((digit, index) => {
        const targetDigit = Number(digit);
        const finalPosition = 30 + targetDigit;

        // Rightmost digit stops first
        const digitDelay = (digits.length - index - 1) * DIGIT_STAGGER;

        return (
          <span
            key={`${index}-${digit}`}
            className="inline-flex h-[1em] shrink-0 overflow-hidden leading-none"
          >
            <span
              className="flex flex-col shrink-0 will-change-transform"
              style={{
                transform: `translateY(-${started ? finalPosition : 0}em)`,
                transition: started
                  ? `transform ${duration}ms cubic-bezier(0.12, 0.75, 0.18, 1) ${digitDelay}ms`
                  : "none",
              }}
            >
              {Array.from({ length: finalPosition + 1 }, (_, i) => (
                <span
                  key={i}
                  className="flex h-[1em] shrink-0 items-center justify-center leading-none"
                >
                  {i % 10}
                </span>
              ))}
            </span>
          </span>
        );
      })}

      <span className="shrink-0 leading-none">{suffix}</span>
    </span>
  );
}

export interface ProvenFoundationSectionProps {
  readonly className?: string;
}

export default function ProvenFoundationSection({
  className = "",
}: ProvenFoundationSectionProps) {
  const [autoIndex, setAutoIndex] = useState(0);

  // Manual hover / keyboard interaction
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Auto cycle: 0 -> 1 -> 2 -> 0 ...
  useEffect(() => {
    const id = window.setInterval(() => {
      setAutoIndex((i) => (i + 1) % stats.length);
    }, SHOW_DURATION + SHRINK_DURATION);

    return () => window.clearInterval(id);
  }, []);

  // Hover takes priority over automatic animation
  const activeIndex = hoverIndex ?? autoIndex;

  return (
    <section
      className={`
        relative isolate overflow-hidden
        bg-white pt-36 pb-10
        sm:pt-40 lg:pt-44
        ${className}
      `.trim()}
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(213, 224, 239, 0.32) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(213, 224, 239, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "300px 260px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-8 text-center">
        {/* Heading Section */}
        <div className="text-center">
          <h2
            className="
              font-[var(--font-inter-tight)]
              text-[clamp(2.25rem,3vw,3.35rem)]
              font-semibold
              leading-[0.98]
              tracking-[-0.06em]
              text-[#101A3B]
            "
          >
            Proven in Banking
            <span className="mt-2 block">Built to Evolve</span>
          </h2>

          <p
            className="
              mx-auto mt-8 max-w-[680px]
              text-[clamp(0.95rem,1.1vw,1.1rem)]
              leading-[1.6]
              text-[#536687]
            "
          >
            A banking technology foundation built over decades, with the
            <br className="hidden sm:block" />
            experience to support what comes next.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 border-y border-[#D9E3F0] sm:mt-24">
          <div className="relative grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={stat.label} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onFocus={() => setHoverIndex(index)}
                    onBlur={() => setHoverIndex(null)}
                    onClick={() => setHoverIndex(index)}
                    aria-pressed={isActive}
                    className={`
                      group block h-full w-full cursor-pointer
                      px-5 pt-10 pb-12
                      text-center
                      focus-visible:outline-2
                      focus-visible:outline-offset-[-4px]
                      focus-visible:outline-[#0B6ED8]
                      sm:px-8 sm:pt-12
                      lg:px-10 lg:pt-11 lg:pb-12
                      ${
                        index < stats.length - 1
                          ? 'md:border-r md:border-[#D9E3F0]'
                          : ''
                      }
                    `}
                  >
                    {/* Animated Number - Always Black */}
                    <div
                      className="
                        font-[var(--font-inter-tight)]
                        text-[clamp(3.25rem,4.5vw,5.25rem)]
                        font-semibold
                        leading-none
                        tracking-[-0.065em]
                        text-[#111827]
                      "
                    >
                      <AnimatedStatValue
                        value={stat.numericValue}
                        suffix={stat.suffix}
                        delay={index * CARD_STAGGER}
                        duration={BASE_DURATION - index * CARD_STAGGER}
                      />
                    </div>

                    {/* Description */}
                    <div
                      className="
                        mx-auto mt-5 max-w-[170px]
                        whitespace-pre-line
                        text-[clamp(0.9rem,0.95vw,1rem)]
                        leading-[1.45]
                        text-[#647183]
                      "
                    >
                      {stat.label}
                    </div>
                  </button>

                  {/* Mobile only: har card ki apni line (cards stack hote hain) */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-1/2 z-20 block h-[3px] w-[138px] -translate-x-1/2 rounded-full md:hidden"
                    style={{
                      background: LINE_GRADIENT,
                      boxShadow: "0 0 8px rgba(0, 169, 232, 0.25)",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 300ms ease-in-out",
                    }}
                  />
                </div>
              );
            })}

            {/* Desktop: ek hi line jo cards ke beech slide karti hai */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 z-20 hidden h-[3px] w-[138px] rounded-full md:block"
              style={{
                left: `calc(${activeIndex} * (100% / ${stats.length}) + (100% / ${stats.length}) / 2)`,
                transform: "translateX(-50%)",
                background: LINE_GRADIENT,
                boxShadow: "0 0 8px rgba(0, 169, 232, 0.25)",
                transition: `left ${SLIDE_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
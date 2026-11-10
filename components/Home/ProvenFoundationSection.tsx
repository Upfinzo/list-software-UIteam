
'use client';

import { useState } from "react";

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

export interface ProvenFoundationSectionProps {
  readonly className?: string;
}

export default function ProvenFoundationSection({
  className = "",
}: ProvenFoundationSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className={`relative isolate overflow-hidden bg-white pt-36 pb-10 sm:pt-40 lg:pt-44 ${className}`.trim()}
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
            <h2 className="font-['Sora'] text-[clamp(2.25rem,3vw,3.35rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#101A3B]">
              Proven in Banking
              <span className="mt-2 block">
                Built to Evolve
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[680px] text-[clamp(0.95rem,1.1vw,1.1rem)] leading-[1.6] text-[#536687]">
              A banking technology foundation built over decades, with the
              <br className="hidden sm:block" />
              experience to support what comes next.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="mt-20 border-y border-[#D9E3F0] sm:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {stats.map((stat, index) => (
                <button
                  key={stat.label}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group relative cursor-pointer px-5 pt-10 pb-12
                    text-center transition-all duration-300
                    focus-visible:outline-2
                    focus-visible:outline-offset-[-4px]
                    focus-visible:outline-[#0B6ED8]
                    sm:px-8 sm:pt-12
                    lg:px-10 lg:pt-11 lg:pb-12
                    ${index < stats.length - 1
                      ? 'md:border-r md:border-[#D9E3F0]'
                      : ''
                    }
                  `}
                >

                  {/* Number */}
                  <div
                    className={`
                      font-['Sora']
                      text-[clamp(3.25rem,4.5vw,5.25rem)]
                      font-generic
                      leading-none
                      tracking-[-0.065em]
                      transition-colors duration-300
                      ${
                        activeIndex === index
                          ? 'text-[#032683]'
                          : 'text-[#A5B4CE]'
                      }
                    `}
                  >
                    {stat.numericValue}{stat.suffix}
                  </div>

                  {/* Description */}
                  <div
                    className={`
                      mx-auto mt-5 max-w-[170px]
                      whitespace-pre-line
                      text-[clamp(0.9rem,0.95vw,1rem)]
                      leading-[1.45]
                      transition-colors duration-300
                      ${activeIndex === index ? 'text-black' : 'text-[#A5B4CE]'}
                    `}
                  >
                    {stat.label}
                  </div>

                  {/* Active Gradient Underline */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute bottom-[-1px] left-1/2
                      h-[3px] w-[138px]
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-[#102C83] to-[#00A9E8]
                      transition-opacity duration-300
                      group-hover:opacity-100
                      ${
                        activeIndex === index
                          ? 'opacity-100'
                          : 'opacity-0'
                      }
                    `}
                  />

                </button>
              ))}

            </div>
          </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import InfrastructurePanel from "@/components/Home/components/InfrastructurePanels";
import { infrastructureItems } from "@/data/infrastructure";

/** How long each item stays open before the next one takes over. */
const ROTATE_MS = 6000;

export default function InfrastructureSection() {
  const [active, setActive] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  /** Nothing plays, and the timer stays idle, until the section is on screen. */
  const inView = useInView(gridRef, { once: true, amount: 0.3 });

  const total = infrastructureItems.length;

  // Restarts on every change, so picking an item gives it its full 6 seconds.
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setActive((i) => (i + 1) % total), ROTATE_MS);
    return () => clearTimeout(timer);
  }, [inView, active, total]);

  return (
    <section
      id="infrastructure"
      className="relative bg-white py-16 sm:py-24 lg:pt-[120px] lg:pb-[130px]"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-7">
        <h2 className="section-title mx-auto max-w-[760px] text-center leading-[1.1] tracking-[-0.035em] text-ink">
          Infrastructure That Evolves Without Losing the Foundation
        </h2>
        <p className="running-text mx-auto mt-[18px] max-w-[620px] text-center text-base! leading-[1.6] sm:text-[17px]!">
          LIST Software provides core banking capabilities that support the
          operational, transaction, lending, and compliance needs of financial
          institutions.
        </p>

        <div
          ref={gridRef}
          className="mt-12 grid items-center gap-8 sm:mt-16 min-[961px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[961px]:gap-14"
        >
          {/* Illustration panel */}
          <div
            className="relative h-[400px] overflow-hidden rounded-3xl bg-[linear-gradient(150deg,#DCEEFB_0%,#C8E2F8_55%,#B9D9F5_100%)] min-[961px]:h-[440px]"
            aria-hidden="true"
          >
            <span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.28)_0_1px,transparent_1px_64px)]" />
            <span className="absolute top-1/2 left-1/2 -mt-[280px] -ml-[280px] h-[560px] w-[560px] rounded-full border border-white/55 shadow-[0_0_0_70px_rgba(255,255,255,0.08),0_0_0_140px_rgba(255,255,255,0.06)]" />
            {inView && <InfrastructurePanel key={active} index={active} />}
          </div>

          {/* Item list */}
          <div
            role="tablist"
            aria-label="Infrastructure capabilities"
            className="flex flex-col"
          >
            {infrastructureItems.map((item, i) => {
              const on = i === active;
              return (
                <div
                  key={item.id}
                  className="relative border-b border-[#E6ECF4] py-5"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className="group/btn flex w-full cursor-pointer items-center gap-3.5 border-0 bg-transparent p-0 text-left"
                  >
                    <span
                      className={`flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] transition-colors duration-300 ${
                        on
                          ? "bg-[linear-gradient(145deg,#0548D5,#032E89)] text-white"
                          : "bg-[#EEF2F8] text-[#7584A6]"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={item.iconPath} />
                      </svg>
                    </span>
                    <span
                      className={`text-[19px] font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                        on
                          ? "text-[#06123A]"
                          : "text-[#7584A6] group-hover/btn:text-[#33405F]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {on && (
                    <>
                      <p className="mt-2.5 ml-12 animate-[infraRiseSoft_0.5s_ease_both] text-[15px] leading-[1.6] text-[#4A5878] motion-reduce:animate-none">
                        {item.description}
                      </p>
                      {inView && (
                        <span
                          aria-hidden="true"
                          className="absolute right-0 -bottom-px left-0 h-0.5 overflow-hidden"
                        >
                          <span
                            key={active}
                            className="absolute inset-0 origin-left animate-[infraBar_6s_linear_both] bg-[linear-gradient(90deg,#0548D5,#52AFE5)] motion-reduce:animate-none"
                          />
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

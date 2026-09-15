"use client";

import { Fragment, useEffect, useState } from "react";

import AudienceRing from "@/components/Home/AudienceRing";
import Container from "@/components/common/Container";
import { audienceCategories, audiences } from "@/data/audiences";

/** Wheel order, so the highlight walks round the ring rather than jumping. */
const RING_ORDER = [...audiences].sort(
  (a, b) => a.ringPosition - b.ringPosition
);

/** Opens on the wedge left of twelve o'clock, as the export shows it. */
const DEFAULT_ID = RING_ORDER[0].id;

const CYCLE_MS = 3600;

export default function WhoWeServeSection() {
  const [activeId, setActiveId] = useState(DEFAULT_ID);
  const [paused, setPaused] = useState(false);

  // Walks the highlight round the wheel on its own; any pointer or keyboard
  // interaction takes over and holds until it leaves again.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const index = RING_ORDER.findIndex((item) => item.id === current);
        return RING_ORDER[(index + 1) % RING_ORDER.length].id;
      });
    }, CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden bg-[#F6F8FC] py-20 lg:py-28"
      aria-labelledby="who-we-serve-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/WhoWeServe_BG.svg')] bg-cover bg-center bg-no-repeat"
      />

      <Container className="relative">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#111E89] uppercase">
            Who We Serve
          </span>

          <h2
            id="who-we-serve-title"
            className="section-title mt-5 max-w-[640px] leading-[1.15] font-bold tracking-tight text-[#121F37]"
          >
            Technology That Fits the Institution You are Building
          </h2>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.14em] text-[#111E89] uppercase">
            {audienceCategories.map((category, index) => (
              <Fragment key={category}>
                {index > 0 && (
                  <span aria-hidden="true" className="text-[#111E89]/30">
                    |
                  </span>
                )}
                <span>{category}</span>
              </Fragment>
            ))}
          </p>

          <p className="running-text mt-5 max-w-[680px] leading-7 text-[#647183]">
            LIST Software provides core banking capabilities that support the
            operational, transaction, lending, and compliance needs of financial
            institutions.
          </p>
        </div>

        <div
          className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <AudienceRing
            items={audiences}
            activeId={activeId}
            onActivate={setActiveId}
            className="mx-auto max-w-[400px]"
          />

          {/*
            Same frame trick as the trust grid: the panel draws all four edges
            and each cell draws its own right and bottom hairline, with the
            grid pulled 1px past the frame so the trailing column and row clip
            instead of doubling the border.
          */}
          <div className="overflow-hidden rounded-2xl border border-[#E4EAF2] bg-white">
            <ul className="-mr-px -mb-px grid grid-cols-1 sm:grid-cols-2">
              {audiences.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeId;

                return (
                  <li key={item.id} className="border-r border-b border-[#E4EAF2]">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(item.id)}
                      onFocus={() => setActiveId(item.id)}
                      onClick={() => setActiveId(item.id)}
                      aria-pressed={isActive}
                      className={`h-full w-full cursor-pointer p-5 text-left transition-colors duration-500 ease-out focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#032683] ${
                        isActive
                          ? "bg-[linear-gradient(160deg,#FFFFFF_8.49%,#E7F1FD_91.51%)]"
                          : "hover:bg-[#F7F9FC]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ease-out ${
                            isActive ? "bg-[#032683]" : "bg-transparent"
                          }`}
                        >
                          <Icon
                            className={`h-[18px] w-[18px] transition-colors duration-500 ease-out ${
                              isActive ? "text-white" : "text-[#032683]"
                            }`}
                            strokeWidth={1.5}
                          />
                        </span>

                        <span className="text-[14px] font-semibold text-[#121F37]">
                          {item.label}
                        </span>
                      </span>

                      {/*
                        0fr -> 1fr animates the height without needing a fixed
                        value, so the row can grow to whatever the copy needs.
                      */}
                      <span
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-2 block text-[13px] leading-5 text-[#647183]">
                            {item.description}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

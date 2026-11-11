"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useInView } from "framer-motion";

import { Images } from "@/assets/images/images";
import { provenChips, provenStats } from "@/data/proven";
import type { ProvenChip, ProvenStat } from "@/types/proven";

/** Seconds between one digit wheel starting and the next. */
const DIGIT_STAGGER = 0.18;

interface OdometerProps {
  readonly value: string;
  readonly startDelay: number;
  readonly play: boolean;
}

/**
 * One rolling wheel per digit. Each wheel is a tall strip of 0-9 twice over,
 * clipped to a single line; rolling it up by (10 + digit) ems lands on the digit.
 */
function Odometer({ value, startDelay, play }: OdometerProps) {
  return (
    <span aria-hidden="true">
      {[...value].map((digit, i) => (
        <span
          key={`${value}-${i}-${digit}`}
          className="inline-block h-[1em] overflow-hidden align-top tabular-nums"
        >
          <span
            className={`block w-[0.62em] text-center leading-none break-all motion-reduce:animate-none motion-reduce:[transform:translateY(var(--odometer-end))] ${
              play
                ? "animate-[odometerRoll_1.8s_cubic-bezier(0.25,0.1,0.15,1)_both]"
                : ""
            }`}
            style={
              {
                "--odometer-end": `-${10 + Number(digit)}em`,
                animationDelay: `${startDelay + i * DIGIT_STAGGER}s`,
              } as CSSProperties
            }
          >
            01234567890123456789
          </span>
        </span>
      ))}
    </span>
  );
}

interface StatProps {
  readonly stat: ProvenStat;
  readonly index: number;
  readonly play: boolean;
  readonly isActive: boolean;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
}

function Stat({
  stat,
  index,
  play,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: StatProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group/stat relative cursor-default px-5 pt-[38px] pb-10 outline-none ${
        index > 0
          ? "before:absolute before:top-0 before:right-[30%] before:left-[30%] before:h-px before:bg-[#E1E9F4] before:content-[''] min-[701px]:before:top-[28%] min-[701px]:before:right-auto min-[701px]:before:bottom-[28%] min-[701px]:before:left-0 min-[701px]:before:h-auto min-[701px]:before:w-px"
          : ""
      }`}
    >
      <p
        aria-label={`${stat.value}${stat.suffix}`}
        className={`m-0 text-[clamp(48px,5.4vw,72px)] leading-none font-medium tracking-[-0.03em] transition-colors duration-300 ${
          isActive ? "text-brand" : "text-[#A3B0C9]"
        }`}
      >
        <Odometer
          value={stat.value}
          startDelay={stat.rollDelay}
          play={play}
        />
        <span aria-hidden="true">{stat.suffix}</span>
      </p>
      <p
        className={`mt-[14px] text-[15px] leading-[1.45] transition-colors duration-300 ${
          isActive ? "text-[#06123A]" : "text-[#A3B0C9]"
        }`}
      >
        {stat.label[0]}
        <br />
        {stat.label[1]}
      </p>
      <span
        aria-hidden="true"
        className={`absolute right-[30%] -bottom-px left-[30%] h-0.5 origin-center rounded-sm bg-[linear-gradient(90deg,#032683,#0094D3)] transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

function Chip({ chip }: { readonly chip: ProvenChip }) {
  return (
    <div
      className="animate-[chipIn_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] motion-reduce:animate-none max-[520px]:even:justify-self-end min-[901px]:absolute min-[901px]:top-(--chip-top) min-[901px]:right-(--chip-right) min-[901px]:left-(--chip-left)"
      style={
        {
          "--chip-top": chip.position.top,
          "--chip-left": chip.position.left,
          "--chip-right": chip.position.right,
          animationDelay: `${chip.enterDelay}s`,
        } as CSSProperties
      }
    >
      <span
        className="flex w-fit max-w-full animate-[chipFloat_7s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-white bg-white/80 py-3 pr-[18px] pl-3 text-left shadow-[0_22px_44px_-22px_rgba(3,38,131,0.45),0_2px_6px_rgba(3,38,131,0.06)] backdrop-blur-[10px] max-[900px]:animate-none motion-reduce:animate-none min-[901px]:whitespace-nowrap"
        style={{
          animationDuration: `${chip.floatDuration}s`,
          animationDelay: `${chip.floatDelay}s`,
        }}
      >
        <span
          className="flex h-10 w-10 flex-none items-center justify-center rounded-xl shadow-[inset_0_-3px_6px_rgba(0,0,0,0.15),0_8px_14px_-8px_rgba(3,38,131,0.45)]"
          style={{ background: chip.iconGradient }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {chip.iconPaths.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
        </span>
        <span className="block">
          <span className="block text-[13.4px] leading-[1.3] font-bold text-[#06123A]">
            {chip.title}
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[10.75px] leading-[1.3] text-[#5B6B8E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0094D3]" />
            {chip.caption}
          </span>
        </span>
      </span>
    </div>
  );
}

export default function ProvenInBankingSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, amount: 0.5 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % provenStats.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [inView]);

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F8FD_55%,#FFFFFF_100%)] pt-16 sm:pt-24 lg:pt-[120px]"
    >
      {/* faint vertical rules, fading in and out down the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(90deg,rgba(3,38,131,0.05)_1px,transparent_1px)] [background-position:center_top] [background-size:240px_100%] [mask-image:linear-gradient(180deg,transparent,#000_20%,#000_70%,transparent)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
        <h2 className="section-title leading-[1.1] tracking-[-0.035em] text-ink">
          Proven in Banking
          <br />
          Built to Evolve
        </h2>
        <p className="running-text reveal-blur mx-auto mt-[22px] max-w-[520px] text-base! leading-[1.6] sm:text-[17px]!">
          A banking technology foundation built over decades, with the
          experience to support what comes next.
        </p>

        <div
          ref={statsRef}
          className="relative mx-auto mt-12 max-w-[960px] sm:mt-[72px]"
        >
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 left-0 h-px bg-[linear-gradient(90deg,transparent,#CFDDEE_20%,#CFDDEE_80%,transparent)]"
          />
          <span
            aria-hidden="true"
            className="absolute right-0 bottom-0 left-0 h-px bg-[linear-gradient(90deg,transparent,#CFDDEE_20%,#CFDDEE_80%,transparent)]"
          />
          <div className="grid grid-cols-1 min-[701px]:grid-cols-3">
            {provenStats.map((stat, index) => (
              <Stat
                key={stat.id}
                stat={stat}
                index={index}
                play={inView}
                isActive={
                  hoveredIndex === index ||
                  (hoveredIndex === null && activeIndex === index)
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Chips and dome. Desktop: chips float over the dome. Below 901px they
          drop into a list above it, so every one stays visible. */}
      <div
        aria-hidden="true"
        className="relative mt-10 min-[901px]:mt-20 min-[901px]:h-[470px]"
      >
        <div className="relative z-[2] mx-auto grid max-w-[680px] grid-cols-1 gap-3 px-4 min-[521px]:grid-cols-2 min-[901px]:absolute min-[901px]:inset-y-0 min-[901px]:left-1/2 min-[901px]:block min-[901px]:max-w-[1440px] min-[901px]:w-full min-[901px]:-translate-x-1/2 min-[901px]:px-0">
          {provenChips.map((chip) => (
            <Chip key={chip.id} chip={chip} />
          ))}
        </div>

        <div className="absolute inset-0 max-[900px]:relative max-[900px]:inset-auto max-[900px]:h-[410px] max-[640px]:h-[280px]">
          <div className="absolute bottom-[-200px] left-1/2 -ml-[500px] h-[480px] w-[1000px] animate-[burstGlow_6s_ease-in-out_infinite] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(191,230,255,0.9)_0%,rgba(86,176,230,0.35)_35%,rgba(0,148,211,0.1)_58%,rgba(255,255,255,0)_72%)] motion-reduce:animate-none" />

          {/* Drawn larger than the band and anchored to its floor, so the dome
              reads big while the empty sky above it spills harmlessly upward. */}
          <div className="absolute bottom-0 left-1/2 h-[470px] w-[1200px] -translate-x-1/2 max-[900px]:h-[458px] max-[900px]:w-[1170px] max-[640px]:h-[305px] max-[640px]:w-[780px]">
            <div className="h-full w-full animate-[domeSway_9s_ease-in-out_infinite] motion-reduce:animate-none">
              <Image
                src={Images.home.proven.dome}
                alt=""
                fill
                draggable={false}
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 h-[70px] bg-[linear-gradient(180deg,rgba(255,255,255,0),#FFFFFF)]" />
        </div>
      </div>
    </section>
  );
}

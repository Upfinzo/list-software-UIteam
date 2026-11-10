"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { clientsRowOne, clientsRowTwo } from "@/data/clients";
import type { ClientLogo } from "@/types/client";

interface LogoTileProps {
  readonly logo: ClientLogo;
  /** The duplicate group is decorative — screen readers get one pass only. */
  readonly decorative?: boolean;
}

function LogoTile({ logo, decorative = false }: LogoTileProps) {
  return (
    <li className="group/tile relative inline-flex h-[76px] flex-none items-center gap-[14px] rounded-2xl border border-[#E5ECF5] bg-white px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_26px_-22px_rgba(3,46,137,0.35)] will-change-transform transition-[translate,border-color] duration-[500ms] ease-[cubic-bezier(0.3,0.1,0.25,1)] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:shadow-[0_22px_40px_-26px_rgba(3,46,137,0.45)] after:transition-opacity after:duration-[500ms] after:ease-[cubic-bezier(0.3,0.1,0.25,1)] after:content-[''] hover:-translate-y-1 hover:border-[#BFD8F2] hover:after:opacity-100 min-[901px]:h-[92px] min-[901px]:px-[30px]">
      <Image
        src={logo.src}
        alt={decorative ? "" : logo.name}
        width={logo.width}
        height={logo.height}
        sizes={`${Math.ceil(logo.width)}px`}
        draggable={false}
        className="block flex-none select-none transition-[filter] duration-[500ms] [filter:saturate(0.92)_contrast(1.02)] group-hover/tile:[filter:saturate(1.1)_contrast(1.05)]"
        style={{ width: logo.width, height: logo.height }}
      />
      {logo.showName && (
        <span
          aria-hidden="true"
          className="max-w-[170px] text-sm font-semibold leading-tight tracking-[-0.01em] text-content-heading"
        >
          {/* "Co-op" never splits at its hyphen — wrap only at the spaces. */}
          {logo.name.split(/(Co-op)/).map((part, i) =>
            part === "Co-op" ? (
              <span key={i} className="whitespace-nowrap">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </span>
      )}
    </li>
  );
}

interface LogoMarqueeProps {
  readonly logos: ClientLogo[];
  readonly label: string;
  readonly reverse?: boolean;
  readonly durationSeconds: number;
}

/** How quickly the row eases to a stop / back up to speed (higher = snappier). */
const EASE_RATE = 4;

function LogoMarquee({
  logos,
  label,
  reverse = false,
  durationSeconds,
}: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  /** 1 = full speed, 0 = stopped. Hover moves the target; the loop eases toward it. */
  const targetRef = useRef(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Two identical groups, so -50% lands exactly on the start of the second.
    const animation = track.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: durationSeconds * 1000,
        iterations: Infinity,
        easing: "linear",
        direction: reverse ? "reverse" : "normal",
      },
    );

    let rate = 1;
    let last = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      // Frame-rate independent ease toward the target speed.
      rate += (targetRef.current - rate) * (1 - Math.exp(-EASE_RATE * dt));
      if (Math.abs(targetRef.current - rate) < 0.002) rate = targetRef.current;
      animation.playbackRate = rate;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      animation.cancel();
    };
  }, [durationSeconds, reverse]);

  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
      role="group"
      aria-label={label}
      onMouseEnter={() => {
        targetRef.current = 0;
      }}
      onMouseLeave={() => {
        targetRef.current = 1;
      }}
    >
      <div ref={trackRef} className="flex w-max py-2 pb-[14px]">
        {/* Two identical groups: the trailing padding keeps the -50% loop seamless. */}
        <ul className="flex flex-none gap-[14px] pr-[14px]">
          {logos.map((logo) => (
            <LogoTile key={logo.id} logo={logo} />
          ))}
        </ul>
        <ul className="flex flex-none gap-[14px] pr-[14px]" aria-hidden="true">
          {logos.map((logo) => (
            <LogoTile key={logo.id} logo={logo} decorative />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F8FD_100%)] py-16 sm:py-24 lg:py-[110px]"
    >
      {/* soft sky glow behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[40%] left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(82,175,229,0.14),rgba(255,255,255,0)_70%)]"
      />

      <h2 className="section-title relative mx-auto max-w-[900px] px-5 text-center leading-[1.1] sm:px-7 tracking-[-0.035em] text-ink">
        Running Everyday Operations on
        <br className="hidden sm:block" /> LIST
      </h2>
      <p className="running-text relative mx-auto mt-[18px] max-w-[620px] px-5 text-center text-base! leading-[1.6] sm:px-7 sm:text-[17px]!">
        Co-operative banks, credit societies and financial institutions.
      </p>

      <div className="relative mt-10 flex sm:mt-16 flex-col gap-[14px]">
        <LogoMarquee
          logos={clientsRowOne}
          label="Institutions running on LIST, first row"
          durationSeconds={60}
        />
        <LogoMarquee
          logos={clientsRowTwo}
          label="Institutions running on LIST, second row"
          durationSeconds={70}
          reverse
        />
      </div>
    </section>
  );
}

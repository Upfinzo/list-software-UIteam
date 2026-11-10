"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { useInView } from "framer-motion";

import { awardsList } from "@/data/awards";
import type { Award } from "@/types/award";

/** Four-point star used for the twinkles over each trophy. */
const SPARKLE_CLIP =
  "[clip-path:polygon(50%_0,62%_38%,100%_50%,62%_62%,50%_100%,38%_62%,0_50%,38%_38%)]";

/** Position and delay of the three twinkles — identical on every card. */
const sparkles: CSSProperties[] = [
  { left: "22%", top: "24%" },
  { right: "20%", top: "40%", animationDelay: "1.1s" },
  { left: "30%", bottom: "18%", animationDelay: "2s" },
];

interface AwardCardProps {
  readonly award: Award;
  readonly index: number;
  readonly inView: boolean;
}

function AwardCard({ award, index, inView }: AwardCardProps) {
  return (
    <div
      className={`origin-bottom [transform-style:preserve-3d] ${
        award.low ? "min-[901px]:mt-14" : ""
      } ${
        inView
          ? "animate-[awardTilt_1.4s_cubic-bezier(0.16,0.84,0.3,1)_both] motion-reduce:animate-none"
          : "opacity-0 motion-reduce:opacity-100"
      }`}
      style={
        {
          "--tilt-y": `${award.tiltY}deg`,
          "--tilt-z": `${award.tiltZ}deg`,
        } as CSSProperties
      }
    >
      <article
        className="animate-[awardFloat_6s_ease-in-out_infinite] overflow-hidden rounded-[20px] border border-[#E6EDF7] bg-white shadow-[0_22px_44px_-34px_rgba(3,46,137,0.4)] transition-[translate,box-shadow] duration-[450ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-2 hover:shadow-[0_36px_60px_-34px_rgba(3,46,137,0.5)] motion-reduce:animate-none"
        style={{ animationDelay: `${-1.5 * index}s` }}
      >
        <div
          className="relative flex h-[210px] items-center justify-center overflow-hidden"
          style={{ background: award.topWash }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(rgba(3,46,137,0.12)_1px,transparent_1.4px)] bg-[length:12px_12px] [mask-image:linear-gradient(180deg,#000_10%,transparent_90%)]"
          />
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -mt-20 -ml-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(247,207,106,0.45),rgba(247,207,106,0)_65%)]"
          />

          <div
            aria-hidden="true"
            className="relative h-[130px] w-[120px] [perspective:600px]"
          >
            <div
              className="relative h-full w-full animate-[awardSwing_5.5s_ease-in-out_infinite] overflow-hidden rounded-xl [transform-style:preserve-3d] motion-reduce:animate-none"
              style={{ animationDelay: `${award.swingDelay}s` }}
            >
              <Image
                src={award.image}
                alt=""
                width={120}
                height={130}
                draggable={false}
                className="h-full w-full [filter:drop-shadow(0_14px_16px_rgba(181,122,8,0.35))]"
              />
              <span className="absolute -top-[20%] -bottom-[20%] left-[-40%] w-[30%] -skew-x-[18deg] animate-[awardShine_4.5s_ease-in-out_infinite] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.75),transparent)] mix-blend-soft-light motion-reduce:animate-none" />
            </div>

            {sparkles.map((style, i) => (
              <i
                key={i}
                className={`absolute h-2 w-2 animate-[awardTwinkle_2.6s_ease-in-out_infinite] bg-white [filter:drop-shadow(0_0_4px_rgba(247,207,106,0.9))] motion-reduce:animate-none ${SPARKLE_CLIP}`}
                style={style}
              />
            ))}

            <span className="absolute bottom-[-14px] left-1/2 -ml-10 h-3 w-20 animate-[awardShadow_5.5s_ease-in-out_infinite] rounded-full bg-[radial-gradient(closest-side,rgba(3,46,137,0.25),transparent)] motion-reduce:animate-none" />
          </div>
        </div>

        <div className="px-[22px] pt-1 pb-6">
          <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.015em] text-ink">
            {award.title}
          </h3>
          <p
            className="mt-2 text-xs font-bold tracking-[0.12em] uppercase"
            style={{ color: award.accent }}
          >
            {award.issuer}
          </p>
        </div>
      </article>
    </div>
  );
}

export default function AwardsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.25 });

  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FAFE_0%,#FFFFFF_100%)] py-16 sm:py-24 lg:pt-[120px] lg:pb-[130px]"
    >
      {/* faint blueprint grid, faded out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(3,46,137,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(3,46,137,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_50%_55%,#000_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-7">
        <div className="flex items-center justify-center gap-[22px]">
          <span
            aria-hidden="true"
            className="h-px flex-[0_1_120px] bg-[linear-gradient(90deg,transparent,#52AFE5)] max-[520px]:hidden"
          />
          <h2 className="section-title text-center leading-[1.1] tracking-[-0.035em] text-ink">
            Recognized for Fintech Excellence
          </h2>
          <span
            aria-hidden="true"
            className="h-px flex-[0_1_120px] bg-[linear-gradient(90deg,#52AFE5,transparent)] max-[520px]:hidden"
          />
        </div>
        <p className="running-text mx-auto mt-[18px] max-w-[640px] text-center text-base! leading-[1.6] sm:text-[17px]!">
          Our commitment to innovation, security, and seamless banking
          experiences has earned recognition across the fintech ecosystem.
        </p>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 items-start gap-5 [perspective-origin:50%_0%] [perspective:1400px] sm:mt-16 min-[521px]:grid-cols-2 min-[901px]:grid-cols-4"
        >
          {awardsList.map((award, index) => (
            <AwardCard
              key={award.id}
              award={award}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

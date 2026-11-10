"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useInView } from "framer-motion";

import { Images } from "@/assets/images/images";
import { floatingFaces, testimonials } from "@/data/testimonials";

const ROTATE_MS = 8000;

/** Maharashtra marker on the dot map, in the map's own 1000x420 viewBox. */
const MARKER = { x: 705.6, y: 186 };

function ChevronIcon({ direction }: { readonly direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const bandRef = useRef<HTMLDivElement>(null);
  /** The faces burst out the first time the band scrolls into view. */
  const inView = useInView(bandRef, { once: true, amount: 0.35 });

  const total = testimonials.length;
  const current = testimonials[active];

  // Restarts on every change, so a manual click gets a full 8s before the next auto-advance.
  useEffect(() => {
    if (!inView || total < 2) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % total),
      ROTATE_MS,
    );
    return () => clearInterval(timer);
  }, [inView, active, total]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-[120px] lg:pb-[130px]"
    >
      <div className="mx-auto max-w-[1120px] px-5 text-center sm:px-7">
        <h2 className="section-title mx-auto max-w-[720px] leading-[1.1] tracking-[-0.035em] text-ink">
          What Our Clients Say
        </h2>
        <p className="running-text mx-auto mt-[18px] max-w-[620px] text-base! leading-[1.6] sm:text-[17px]!">
          How our clients transform growth with advanced solutions. And
          here&rsquo;s exactly how they did it.
        </p>
      </div>

      {/* Dot map with the faces floating over it */}
      <div
        ref={bandRef}
        className="relative mx-auto mt-10 h-[260px] max-w-[1060px] sm:mt-12 min-[901px]:h-[400px]"
      >
        <svg
          className="absolute top-0 left-0 h-full w-full"
          viewBox="0 0 1000 420"
          aria-hidden="true"
        >
          <image
            href={Images.home.testimonials.map}
            width="1000"
            height="420"
          />
          <circle
            cx={MARKER.x}
            cy={MARKER.y}
            r="6"
            fill="none"
            stroke="#0548D5"
            strokeWidth="2"
            className="origin-center animate-[testimonialPing_2.4s_ease-out_infinite] [transform-box:fill-box] motion-reduce:animate-none"
          />
          <circle cx={MARKER.x} cy={MARKER.y} r="5" fill="#0548D5" />
        </svg>

        {floatingFaces.map((face) => (
          <span
            key={face.id}
            className={`absolute z-[1] ${
              inView
                ? "animate-[testimonialBurst_1s_cubic-bezier(0.2,0.75,0.25,1)_both] motion-reduce:animate-none"
                : "scale-0 opacity-0 motion-reduce:scale-100 motion-reduce:opacity-100"
            }`}
            style={
              {
                ...face.position,
                animationDelay: `${face.burstDelay}s`,
                "--from-x": `${face.fromX}px`,
                "--from-y": `${face.fromY}px`,
              } as CSSProperties
            }
          >
            <span className="relative block rounded-full bg-white p-1 shadow-[0_16px_30px_-16px_rgba(3,46,137,0.45),0_0_0_1px_#E6EDF7]"
            >
              <Image
                src={face.src}
                alt=""
                width={face.size}
                height={face.size}
                draggable={false}
                className="block rounded-full bg-white max-[900px]:scale-75"
              />
            </span>
          </span>
        ))}

        {/* Centre face — remounts on each slide so it springs in again */}
        <span
          key={current.id}
          className={`absolute top-1/2 left-1/2 z-[2] -mt-[58px] -ml-[58px] block rounded-full bg-white p-1.5 shadow-[0_0_0_1px_#E1EAF6,0_0_0_10px_rgba(82,175,229,0.12),0_24px_40px_-18px_rgba(3,46,137,0.5)] ${
            inView
              ? "animate-[testimonialMain_0.7s_cubic-bezier(0.2,0.7,0.2,1)_both] motion-reduce:animate-none"
              : "scale-0 opacity-0 motion-reduce:scale-100 motion-reduce:opacity-100"
          }`}
        >
          <Image
            src={current.face}
            alt={current.name}
            width={104}
            height={104}
            draggable={false}
            className="block rounded-full bg-white"
          />
        </span>
      </div>

      {/* Quote */}
      <div className="relative z-[2] mx-auto mt-7 max-w-[760px] px-5 text-center sm:px-7">
        <div
          key={current.id}
          className="flex flex-col items-center"
          aria-live="polite"
        >
          <blockquote className="relative mt-0 animate-[testimonialQuote_0.8s_cubic-bezier(0.2,0.7,0.2,1)_0.12s_both] px-7 text-[clamp(18px,2.3vw,27px)] leading-[1.45] font-medium tracking-[-0.02em] text-ink motion-reduce:animate-none sm:px-[34px]">
            <span
              aria-hidden="true"
              className="absolute top-[-10px] left-0 bg-[linear-gradient(145deg,#52AFE5,#032E89)] bg-clip-text font-[Georgia,serif] text-5xl leading-none font-bold text-transparent sm:text-[64px]"
            >
              &ldquo;
            </span>
            {current.quote}
            <span
              aria-hidden="true"
              className="absolute right-0 bottom-[-34px] bg-[linear-gradient(145deg,#52AFE5,#032E89)] bg-clip-text font-[Georgia,serif] text-5xl leading-none font-bold text-transparent sm:text-[64px]"
            >
              &rdquo;
            </span>
          </blockquote>
          <p className="mt-6 animate-[testimonialQuote_0.8s_ease_0.25s_both] text-lg font-semibold text-ink motion-reduce:animate-none">
            {current.name}
          </p>
          <p className="mt-1 animate-[testimonialQuote_0.8s_ease_0.32s_both] text-sm text-ink-muted motion-reduce:animate-none">
            {current.place}
          </p>
        </div>

        <div className="mt-[26px] flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setActive((i) => (i - 1 + total) % total)}
            className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-xl border border-[#DCE4F0] bg-white text-[#06123A] transition-[transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-12px_rgba(3,46,137,0.5)]"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setActive((i) => (i + 1) % total)}
            className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-xl bg-[linear-gradient(145deg,#52AFE5,#0548D5)] text-white shadow-[0_12px_22px_-12px_rgba(5,72,213,0.7)] transition-[transform,box-shadow] duration-250 hover:-translate-y-0.5"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

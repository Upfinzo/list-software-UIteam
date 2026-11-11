"use client";

import { useEffect, useState, type AnimationEvent, type CSSProperties } from "react";
import Image from "next/image";
import { Images } from "@/assets/images/images";

const COLORS = [
  "#159fd5", "#2c78c8", "#98d9f4", "#9edcf5", "#a4d8f1", "#7d8ec5", "#b0def3",
  "#a8d9f2", "#9fd8f3", "#36b4e8", "#008ed0", "#5875b4", "#66b9e8", "#8dd0f0",
];
const SIZES = [7, 3, 4, 6, 8, 8, 6, 7, 9, 6, 5, 7, 9, 6];
const TOTAL = 1400; // ms: every particle reaches the centre at exactly this time
const STEP = 65; // ms between each particle's start
// Particles spread evenly in a ring around the centre (deterministic for SSR).
// Compact ring around the centre (deterministic for SSR).
const particles = COLORS.map((color, i) => {
  const angle = i * 2.399963; // consecutive particles come from very different directions
  const radius = 150 + ((i * 53) % 90);
  const delay = i * STEP;
  return {
    color,
    size: SIZES[i],
    x: Math.round(Math.cos(angle) * radius * 1.5),
    y: Math.round(Math.sin(angle) * radius * 0.95),
    delay,
    dur: TOTAL - delay,
  };
});



const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Safety net in case the animationend event never fires.
  useEffect(() => {
    const t = window.setTimeout(() => setIsVisible(false), 5000);
    return () => window.clearTimeout(t);
  }, []);

  if (!isVisible) return null;

  return (
    <output
      className="site-preloader"
      aria-label="Loading ListSoftware"
      onAnimationEnd={(e: AnimationEvent<HTMLOutputElement>) => {
        if (e.animationName === "preloader-exit") setIsVisible(false);
      }}
    >
      <div className="site-preloader__animation" aria-hidden="true">
      {particles.map(({ x, y, color, size, delay, dur }, i) => (
  <span
    className="site-preloader__particle"
    key={i}
    style={
      {
        "--px": `${x}px`,
        "--py": `${y}px`,
        "--particle-color": color,
        "--particle-size": `${size}px`,
        "--delay": `${delay}ms`,
        "--dur": `${dur}ms`,
      } as CSSProperties
    }
  />
))}
        <Image
          className="site-preloader__logo"
          src={Images.common.logo}
          alt=""
          width={360}
          height={199}
          preload
        />
      </div>
    </output>
  );
};

export default Preloader;
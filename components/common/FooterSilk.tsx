"use client";

import { useEffect, useRef } from "react";

/** The silk is rendered on a tiny canvas and scaled up, which keeps it soft and cheap. */
const SILK_W = 200;
const SILK_H = 110;
/** Redraw cap. The motion is slow, so 30fps looks identical and costs half. */
const FRAME_MS = 33;

/** Colour ramp: [stop, r, g, b] — deep navy through royal blue and violet to sky. */
const RAMP: ReadonlyArray<readonly [number, number, number, number]> = [
  [0, 4, 14, 42],
  [0.38, 6, 24, 78],
  [0.56, 3, 46, 137],
  [0.7, 5, 72, 213],
  [0.82, 96, 78, 214],
  [0.92, 82, 175, 229],
  [1, 170, 220, 245],
];

function rampColor(c: number): [number, number, number] {
  for (let i = 1; i < RAMP.length; i++) {
    if (c <= RAMP[i][0]) {
      const a = RAMP[i - 1];
      const b = RAMP[i];
      const q = (c - a[0]) / (b[0] - a[0]);
      return [
        a[1] + (b[1] - a[1]) * q,
        a[2] + (b[2] - a[2]) * q,
        a[3] + (b[3] - a[3]) * q,
      ];
    }
  }
  return [225, 242, 252];
}

/**
 * Liquid silk gradient: domain-warped bands of colour that drift and fold,
 * drawn behind the footer. Pauses while off screen.
 */
export default function FooterSilk({ className }: { readonly className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const off = document.createElement("canvas");
    off.width = SILK_W;
    off.height = SILK_H;
    const offCtx = off.getContext("2d");
    if (!ctx || !offCtx) return;

    const image = offCtx.createImageData(SILK_W, SILK_H);
    const data = image.data;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const draw = (t: number) => {
      let p = 0;
      for (let y = 0; y < SILK_H; y++) {
        const ny = (y / SILK_H) * 2.2;
        for (let x = 0; x < SILK_W; x++) {
          const nx = (x / SILK_W) * 3.4;
          const q =
            ny +
            0.65 * Math.sin(nx * 1.5 + t * 0.9) +
            0.32 * Math.sin(nx * 3.2 - t * 1.25 + ny);
          const v = Math.sin(nx * 2.1 + q * 2.8 + t * 0.6);
          const fold = Math.sin(q * 4.6 - t * 0.55 + nx * 0.8);
          const c = Math.max(0, Math.min(1, (0.5 + 0.5 * v) * 0.92 + 0.08 * fold));
          const [r, g, b] = rampColor(c);
          const highlight = Math.pow(Math.max(0, fold), 6) * 70;
          data[p++] = Math.min(255, r + highlight);
          data[p++] = Math.min(255, g + highlight);
          data[p++] = Math.min(255, b + highlight);
          data[p++] = 255;
        }
      }
      offCtx.putImageData(image, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(off, 0, 0, canvas.width, canvas.height);
    };

    const start = performance.now();
    let frame = 0;
    let last = 0;
    let visible = true;

    const render = () => draw(reduceMotion ? 2 : ((performance.now() - start) / 1000) * 0.85);

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (now - last < FRAME_MS) return;
      last = now;
      render();
    };

    const play = () => {
      if (reduceMotion || frame) return;
      frame = requestAnimationFrame(tick);
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      render(); // resizing clears the canvas
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    visibility.observe(canvas);
    play();

    return () => {
      pause();
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

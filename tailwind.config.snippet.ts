// tailwind.config.ts configuration snippet for CapabilitiesSection

import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "tab-heading": "rgba(18,31,55,1)",
        "icon-color": "rgba(17,30,137,1)",
        "content-heading": "rgba(18,31,55,1)",
        "content-paragraph": "rgba(100,113,131,1)",
        "badge-border": "rgba(220,228,236,1)",
      },
      keyframes: {
        travelDot: {
          "0%": { left: "0%", opacity: "0", transform: "translateY(-50%) scale(0.6)" },
          "10%": { opacity: "1", transform: "translateY(-50%) scale(1)" },
          "90%": { opacity: "1", transform: "translateY(-50%) scale(1)" },
          "100%": { left: "calc(100% - 10px)", opacity: "0", transform: "translateY(-50%) scale(0.6)" },
        },
        contentFadeIn: {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        travelDot: "travelDot 2.8s linear infinite",
        contentFadeIn: "contentFadeIn 0.2s ease-out",
      },
    },
  },
};

export default config;

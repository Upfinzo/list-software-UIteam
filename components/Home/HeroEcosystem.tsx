import type { CSSProperties } from "react";
import Image from "next/image";
import {
  Blocks,
  Cog,
  Cpu,
  CreditCard,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Images } from "@/assets/images/images";
import {
  HERO_ICON_STROKE,
  HERO_NODES,
  HERO_VIEWBOX,
} from "./heroEcosystem.data";

/** Resolves the lucide name each module carries in heroEcosystem.data.ts. */
const HERO_ICONS: Record<string, LucideIcon | undefined> = {
  Blocks,
  Cog,
  Cpu,
  CreditCard,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
};

/** Longest the travelling capsule gets, in viewBox units. */
const FLOW_DASH = 16;

/** Seconds for one capsule to travel from the core out to a module. */
const FLOW_CYCLE = 3.2;
const pulseLength = (wire: number) =>
  Math.round(Math.min(FLOW_DASH, wire * 0.4) * 100) / 100;
const CARD_ASPECT = "622.094 / 559.875";

const BLEED: CSSProperties = {
  left: "-8.0374%", // 50 / 622.094
  top: "-1.7861%", // 10 / 559.875
  width: "116.2204%", // 723 / 622.094
  height: "117.8835%", // 660 / 559.875
};
const CARD_RADIUS = "5.4654% / 6.0728%"; // 34 / 622.094 and 34 / 559.875
const CARD_SHADOW = "0px 40px 90px -40px rgba(3, 38, 131, 0.75)";
export default function HeroEcosystem({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        aspectRatio: CARD_ASPECT,
        borderRadius: CARD_RADIUS,
        boxShadow: CARD_SHADOW,
      }}
    >
      <div className="absolute" style={BLEED}>
        {/* Card, texture, glow, dashed ring and the Custodian CORE hub. */}
        <Image
          src={Images.common.heroEcosystemBackdrop}
          alt=""
          priority
          fill
          sizes="100vw"
          className="block object-fill"
        />

        {/* Connectors and modules — same viewBox, so it lines up at any size. */}
        <svg
          viewBox={HERO_VIEWBOX}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby="hero-eco-title hero-eco-desc"
        >
          <title id="hero-eco-title">Custodian CBS connected ecosystem</title>
          <desc id="hero-eco-desc">
            {`Custodian CBS at the centre, connected to ${HERO_NODES.map(
              (node) => node.label,
            ).join(", ")}.`}
          </desc>

          {HERO_NODES.map((node, index) => {
            const Icon = HERO_ICONS[node.icon];

            return (
              <g key={node.id} className="hero-node">
                <g className="hero-node__wire">
                  <path d={node.line} className="hero-node__line" />
                  <path
                    d={node.line}
                    className="hero-node__flow"
                    style={
                      {
                        "--flow-dash": pulseLength(node.lineLength),
                        "--flow-len": node.lineLength,
                        "--flow-end":
                          Math.round(
                            (node.lineLength + pulseLength(node.lineLength)) *
                              100,
                          ) / 100,
                        "--flow-delay": `${(
                          (index * FLOW_CYCLE) /
                          HERO_NODES.length
                        ).toFixed(2)}s`,
                      } as CSSProperties
                    }
                  />
                </g>

                <g className="hero-node__chip">
                  <rect
                    x={node.pill.x}
                    y={node.pill.y}
                    width={node.pill.w}
                    height={node.pill.h}
                    rx={node.pill.h / 2}
                    className="hero-node__pill"
                  />

                  <circle
                    cx={node.circle.cx}
                    cy={node.circle.cy}
                    r={node.circle.r}
                    className="hero-node__circle"
                  />

                  {/*
                  A nested <svg> scales lucide's 24-unit grid into the disc,
                  so the icons stay editable instead of being baked paths.
                */}
                  {Icon ? (
                    <Icon
                      x={node.iconBox.x}
                      y={node.iconBox.y}
                      width={node.iconBox.size}
                      height={node.iconBox.size}
                      strokeWidth={HERO_ICON_STROKE}
                      className="hero-node__icon"
                    />
                  ) : null}

                  {/*
                  textLength pins the label to the width the pill was sized
                  for, so a fallback font cannot push it past the pill's edge.
                */}
                  <text
                    x={node.text.x}
                    y={node.circle.cy}
                    textLength={node.text.w}
                    lengthAdjust="spacing"
                    dominantBaseline="central"
                    className="hero-node__label"
                  >
                    {node.label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

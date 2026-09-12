import type { CSSProperties } from "react";
import Image from "next/image";

import { Images } from "@/assets/images/images";
import { HERO_NODES, HERO_VIEWBOX } from "./heroEcosystem.data";

/** Longest the travelling capsule gets, in viewBox units. */
const FLOW_DASH = 16;

/** Seconds for one capsule to travel from the core out to a module. */
const FLOW_CYCLE = 3.2;

/**
 * The horizontal spokes are barely 26 units of visible wire, so a fixed-length
 * capsule would sit there as a static bar. Scale it down on the short ones.
 */
const pulseLength = (wire: number) =>
  Math.round(Math.min(FLOW_DASH, wire * 0.4) * 100) / 100;

/**
 * The export is a 723x660 box but the card inside it is only 622.094x559.875 —
 * the rest is drop-shadow bleed (50px each side, 10px above, 90px below), so
 * the artwork covers just 86% of its own width.
 *
 * Sizing this component to the card and offsetting the artwork by the bleed
 * makes the card fill the box edge to edge, with the shadow spilling outside
 * where a shadow belongs.
 */
const CARD_ASPECT = "622.094 / 559.875";

const BLEED: CSSProperties = {
  left: "-8.0374%", // 50 / 622.094
  top: "-1.7861%", // 10 / 559.875
  width: "116.2204%", // 723 / 622.094
  height: "117.8835%", // 660 / 559.875
};

export default function HeroEcosystem({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: CARD_ASPECT }}
    >
      <div className="absolute" style={BLEED}>
        {/* Card, texture, glow, dashed ring and the Custodian CORE hub. */}
        <Image
          src={Images.common.heroEcosystemBackdrop}
          alt=""
          priority
          className="block h-full w-full"
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
              (node) => node.label
            ).join(", ")}.`}
          </desc>

          {HERO_NODES.map((node, index) => (
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
                          (node.lineLength + pulseLength(node.lineLength)) * 100
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

                <g className="hero-node__icon">
                  {node.icon.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>

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
          ))}
        </svg>
      </div>
    </div>
  );
}

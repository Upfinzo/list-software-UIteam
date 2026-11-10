import type { Audience } from "@/types/audience";
const BOX = 400;
const CENTRE = BOX / 2;
const GUIDE_R = 194;
const HAIRLINE_R = 181;
const OUTER_R = 169;
const INNER_R = 94;
const POP = 7;
const ICON_R = (OUTER_R + INNER_R) / 2;
/** Both edges meet square — the wedges have no corner radius. */
const OUTER_CORNER = 0;
const INNER_CORNER = 0;
const GAP_DEG = 1.1;
const SEAT_DEG = 360 / 8;

/** Long enough to read as a move rather than a flicker. */
const EASE = "transition-opacity duration-500 ease-out";

const DEG = Math.PI / 180;

/** Point `r` from the centre at `deg`, measured clockwise from twelve o'clock. */
function pointAt(deg: number, r: number) {
  return {
    x: CENTRE + r * Math.sin(deg * DEG),
    y: CENTRE - r * Math.cos(deg * DEG),
  };
}

/** Wedge `seat` ends at seat x 45deg, so seat 0 sits left of twelve o'clock. */
function seatAngles(seat: number) {
  const end = seat * SEAT_DEG;
  return { from: end - SEAT_DEG + GAP_DEG, to: end - GAP_DEG };
}

function wedgePath(from: number, to: number, outer: number, inner: number) {
  const outerInset = OUTER_CORNER / outer / DEG;
  const innerInset = INNER_CORNER / inner / DEG;

  const p = [
    pointAt(from, outer - OUTER_CORNER),
    pointAt(from + outerInset, outer),
    pointAt(to - outerInset, outer),
    pointAt(to, outer - OUTER_CORNER),
    pointAt(to, inner + INNER_CORNER),
    pointAt(to - innerInset, inner),
    pointAt(from + innerInset, inner),
    pointAt(from, inner + INNER_CORNER),
  ];

  const n = (v: number) => v.toFixed(2);

  /**
   * A zero radius leaves the corner point sitting on the edge it came from,
   * so there is nothing to draw and the command is dropped.
   */
  const corner = (r: number, at: { x: number; y: number }) =>
    r > 0 ? `A${r} ${r} 0 0 1 ${n(at.x)} ${n(at.y)}` : "";

  return [
    `M${n(p[0].x)} ${n(p[0].y)}`,
    corner(OUTER_CORNER, p[1]),
    `A${outer} ${outer} 0 0 1 ${n(p[2].x)} ${n(p[2].y)}`,
    corner(OUTER_CORNER, p[3]),
    `L${n(p[4].x)} ${n(p[4].y)}`,
    corner(INNER_CORNER, p[5]),
    `A${inner} ${inner} 0 0 0 ${n(p[6].x)} ${n(p[6].y)}`,
    corner(INNER_CORNER, p[7]),
    "Z",
  ]
    .filter(Boolean)
    .join(" ");
}

interface AudienceRingProps {
  readonly items: Audience[];
  readonly activeId: string;
  readonly onActivate: (id: string) => void;
  readonly className?: string;
}

export default function AudienceRing({
  items,
  activeId,
  onActivate,
  className = "",
}: AudienceRingProps) {
  const seated = [...items].sort((a, b) => a.ringPosition - b.ringPosition);

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      {/*
        The wheel mirrors the cards, so it is decorative for assistive tech —
        the cards carry the same labels and are the keyboard-reachable control.
      */}
      <svg
        viewBox={`0 0 ${BOX} ${BOX}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx={CENTRE}
          cy={CENTRE}
          r={HAIRLINE_R}
          fill="none"
          stroke="#032683"
          strokeOpacity={0.1}
        />
        <circle
          cx={CENTRE}
          cy={CENTRE}
          r={GUIDE_R}
          fill="none"
          stroke="#56B0E6"
          strokeOpacity={0.5}
          strokeWidth={1.5}
          strokeDasharray="3 12"
          strokeLinecap="round"
        />

        {seated.map((item) => {
          const { from, to } = seatAngles(item.ringPosition);
          const isActive = item.id === activeId;

          return (
            <g
              key={item.id}
              onMouseEnter={() => onActivate(item.id)}
              className="cursor-pointer"
            >
              <path
                d={wedgePath(from, to, OUTER_R, INNER_R)}
                fill="#032683"
                fillOpacity={0.05}
                stroke="#032683"
                strokeOpacity={0.12}
                strokeWidth={1.05}
                vectorEffect="non-scaling-stroke"
              />

              {/*
                The raised wedge simply fades in over the resting one. A path's
                `d` cannot be transitioned, and because this one is larger at
                both ends over the same angular span it covers the resting
                wedge completely — so the swap reads as the wedge growing.
              */}
              <path
                d={wedgePath(from, to, OUTER_R + POP, INNER_R - POP)}
                fill="#032683"
                fillOpacity={0.92}
                stroke="#56B0E6"
                strokeWidth={1.05}
                /* The wheel scales with its column, so without this the 1.05
                   stroke drops below a device pixel and anti-aliases into a
                   soft edge. Pinned, it stays a crisp hairline at any size. */
                vectorEffect="non-scaling-stroke"
                opacity={isActive ? 1 : 0}
                className={EASE}
              />
            </g>
          );
        })}
      </svg>

      {/* Wedge icons, positioned on the ring's mid radius. */}
      {seated.map((item) => {
        const { from, to } = seatAngles(item.ringPosition);
        const at = pointAt((from + to) / 2, ICON_R);
        const Icon = item.icon;
        const isActive = item.id === activeId;

        return (
          <span
            key={item.id}
            onMouseEnter={() => onActivate(item.id)}
            style={{
                  left: `${((at.x / BOX) * 100).toFixed(4)}%`,
                  top: `${((at.y / BOX) * 100).toFixed(4)}%`,
                  width: "4.8%",
                }}
            className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <Icon
              className={`h-full w-full transition-colors duration-500 ease-out ${
                isActive ? "text-white" : "text-[#032683]/55"
              }`}
              strokeWidth={1.6}
            />
          </span>
        );
      })}

      {/*
        Centre puck — 44.5% of the box, matching the export. Padding stays
        tight because "Banking Institution" needs ~163px of the puck's ~187px
        to hold one line; anything more generous breaks it in two.
      */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 flex aspect-square w-[44.5%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white px-2 text-center shadow-[0_18px_40px_-24px_rgba(3,38,131,0.35)]">
        <span className="text-[10px] font-medium tracking-[0.2em] text-[#5EAFE6] uppercase">
          Custodian
        </span>
        <span className="mt-1.5 text-[15px] font-semibold whitespace-nowrap text-[#121F37]">
          Banking Institution
        </span>
        {/* Held narrow so it breaks over two lines, as the design shows. */}
        <span className="mt-1 max-w-[112px] text-[11px] leading-4 text-[#647183]">
          One connected environment
        </span>
      </div>
    </div>
  );
}

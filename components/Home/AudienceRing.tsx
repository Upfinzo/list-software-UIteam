import type { Audience } from "@/types/audience";

/*
 * Geometry derived from the Figma close-up, normalised to a 400x400 box:
 * dashed guide r=194, wedges 169 -> 94, centre puck r=89.
 */
const BOX = 400;
const CENTRE = BOX / 2;
const GUIDE_R = 194;
const HAIRLINE_R = 181;
const OUTER_R = 169;
const INNER_R = 94;
const ICON_R = (OUTER_R + INNER_R) / 2;
const CORNER = 7;
const GAP_DEG = 1.1;
const SEAT_DEG = 360 / 8;

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

/**
 * Annular sector with all four corners rounded. Each corner is an arc of
 * radius CORNER tangent to the radial edge and to the arc it meets, so the
 * rounding stays even on both the inner and outer edges.
 */
function wedgePath(from: number, to: number) {
  const outerInset = CORNER / OUTER_R / DEG;
  const innerInset = CORNER / INNER_R / DEG;

  const p = [
    pointAt(from, OUTER_R - CORNER),
    pointAt(from + outerInset, OUTER_R),
    pointAt(to - outerInset, OUTER_R),
    pointAt(to, OUTER_R - CORNER),
    pointAt(to, INNER_R + CORNER),
    pointAt(to - innerInset, INNER_R),
    pointAt(from + innerInset, INNER_R),
    pointAt(from, INNER_R + CORNER),
  ];

  const n = (v: number) => v.toFixed(2);

  return [
    `M${n(p[0].x)} ${n(p[0].y)}`,
    `A${CORNER} ${CORNER} 0 0 1 ${n(p[1].x)} ${n(p[1].y)}`,
    `A${OUTER_R} ${OUTER_R} 0 0 1 ${n(p[2].x)} ${n(p[2].y)}`,
    `A${CORNER} ${CORNER} 0 0 1 ${n(p[3].x)} ${n(p[3].y)}`,
    `L${n(p[4].x)} ${n(p[4].y)}`,
    `A${CORNER} ${CORNER} 0 0 1 ${n(p[5].x)} ${n(p[5].y)}`,
    `A${INNER_R} ${INNER_R} 0 0 0 ${n(p[6].x)} ${n(p[6].y)}`,
    `A${CORNER} ${CORNER} 0 0 1 ${n(p[7].x)} ${n(p[7].y)}`,
    "Z",
  ].join(" ");
}

interface AudienceRingProps {
  items: Audience[];
  activeId: string;
  onActivate: (id: string) => void;
  className?: string;
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
            <path
              key={item.id}
              d={wedgePath(from, to)}
              onMouseEnter={() => onActivate(item.id)}
              className="cursor-pointer transition-[fill,stroke] duration-300"
              fill={isActive ? "#032683" : "#032683"}
              fillOpacity={isActive ? 0.92 : 0.05}
              stroke={isActive ? "#56B0E6" : "#032683"}
              strokeOpacity={isActive ? 1 : 0.12}
              strokeWidth={1.05}
            />
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
              left: `${(at.x / BOX) * 100}%`,
              top: `${(at.y / BOX) * 100}%`,
              width: "4.8%",
            }}
            className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <Icon
              className={`h-full w-full transition-colors duration-300 ${
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

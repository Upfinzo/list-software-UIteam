"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

import InstitutionObject, {
  type InstitutionObjectKind,
} from "@/components/Home/components/InstitutionObjects";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface InstitutionCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  /** Which animated 3D object sits on the card. */
  readonly object: InstitutionObjectKind;
  /** Card surface gradient. */
  readonly background: string;
}

const CARDS: readonly InstitutionCard[] = [
  {
    id: "banks",
    title: "Banks",
    description:
      "Build on a dependable core banking foundation with connected solutions for accounts, deposits, lending, transactions, branch operations, digital channels, and regulatory reporting.",
    href: "/products",
    object: "cube",
    background: "linear-gradient(150deg,#E4F1FC,#CFE5F8)",
  },
  {
    id: "financial-institutions",
    title: "Financial Institutions",
    description:
      "Extend financial operations with core banking, credit appraisal, compliance, transaction processing, and operational automation designed around institutional requirements.",
    href: "/products",
    object: "coin",
    background: "linear-gradient(150deg,#FDF7EA,#F7E9C8)",
  },
  {
    id: "digital-banking-business",
    title: "Digital Banking Business",
    description:
      "Extend banking beyond the branch through digital channels, customer services, payment connectivity, and integrated banking experiences.",
    href: "/products",
    object: "phone",
    background: "linear-gradient(150deg,#F1F5FA,#E3EAF3)",
  },
  {
    id: "it-technology-teams",
    title: "IT & Technology Teams",
    description:
      "Empower technology teams with scalable, secure, integrated banking infrastructure solutions.",
    href: "/products",
    object: "plates",
    background: "linear-gradient(150deg,#FEF4F1,#FBE0D9)",
  },
  {
    id: "banking-operations",
    title: "Banking Operations",
    description:
      "Streamline customer service, issue resolution, workflows, and operational control efficiently.",
    href: "/products",
    object: "gyro",
    background: "linear-gradient(150deg,#F4F0FD,#E4DAF8)",
  },
  {
    id: "compliance-risk-teams",
    title: "Compliance & Risk Teams",
    description:
      "Strengthen compliance controls, manage risks, monitor activities, and maintain regulatory readiness.",
    href: "/products",
    object: "shield",
    background: "linear-gradient(150deg,#E6F8F2,#CDEFE4)",
  },
];

/** Three cards a page, two pages — the belt slides between them. */
const PAGE_SIZE = 3;
const PAGES: InstitutionCard[][] = [
  CARDS.slice(0, PAGE_SIZE) as InstitutionCard[],
  CARDS.slice(PAGE_SIZE) as InstitutionCard[],
];

/** Space the fixed site header takes at the top of the pinned stage, in px. */
const HEADER_OFFSET = 80;
/** Gap between the two pages in the sliding track, in px. */
const PAGE_GAP = 28;
/** Seconds between cards entering and bobbing, so the six never move in step. */
const ENTER_STEP = 0.14;
const FLOAT_STEP = 0.7;

/* ------------------------------------------------------------------ */
/* Scroll stages                                                       */
/*                                                                     */
/* The section is 300vh tall with a pinned 100vh stage inside it.      */
/*   0  (0-20%)   heading alone, centred; cards hidden                 */
/*   1  (20-60%)  heading rises, first three cards rise in             */
/*   2  (60-100%) belt slides to the second three; the first dim       */
/* ------------------------------------------------------------------ */

type Stage = 0 | 1 | 2;

const stageFor = (progress: number): Stage =>
  progress < 0.2 ? 0 : progress < 0.6 ? 1 : 2;

/** How a card looks at each stage, by which page it is on. */
function cellState(pageIndex: number, stage: Stage) {
  if (stage === 0) {
    return { opacity: 0, transform: "translateY(70px) scale(0.94)" };
  }
  if (stage === 1 && pageIndex === 1) {
    return { opacity: 0, transform: "translateX(60px)" };
  }
  if (stage === 2 && pageIndex === 0) {
    return { opacity: 0.25, transform: "scale(0.96)" };
  }
  return { opacity: 1, transform: "none" };
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

interface BeltCardProps {
  readonly card: InstitutionCard;
  readonly floatDelay: number;
  /** The hover-grow behaviour only exists while the belt is pinned. */
  readonly pinned: boolean;
}

function BeltCard({ card, floatDelay, pinned }: BeltCardProps) {
  return (
    <article
      style={{ background: card.background, animationDelay: `${floatDelay}s` }}
      className={`relative flex flex-1 animate-[institutionFloat_6.5s_ease-in-out_infinite] flex-col overflow-hidden rounded-[24px] p-7 shadow-[0_24px_48px_-36px_rgba(3,46,137,0.5)] transition-shadow duration-500 motion-reduce:animate-none ${
        pinned
          ? "group-hover/cell:shadow-[0_40px_70px_-36px_rgba(3,46,137,0.55)]"
          : ""
      }`}
    >
      <InstitutionObject kind={card.object} />

      <h3 className="text-[clamp(24px,2.2vw,30px)] leading-[1.1] font-semibold tracking-[-0.035em] text-[#06123A]">
        {card.title}
      </h3>

      <p
        className={`mt-3 mb-[22px] max-w-[420px] shrink-0 line-clamp-5 text-[14px] leading-[1.55] text-[#3E4B6B] ${
          pinned
            ? "group-hover/page:[-webkit-line-clamp:4] group-hover/cell:[-webkit-line-clamp:8]!"
            : ""
        }`}
      >
        {card.description}
      </p>

      <Link
        href={card.href}
        className="mt-auto inline-flex h-11 w-fit shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#1F7FE0,#032683)] px-[22px] text-[14px] font-semibold text-white shadow-[0_12px_24px_-12px_rgba(3,38,131,0.8),inset_0_1px_0_rgba(255,255,255,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(3,38,131,0.85),inset_0_1px_0_rgba(255,255,255,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032683]"
      >
        Learn more
        <span className="sr-only"> about {card.title}</span>
      </Link>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function InstitutionOperatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /**
   * Below 901px wide the section stops pinning and becomes a swipeable row
   * (same breakpoint as the client's HTML — short windows still pin).
   */
  const [desktop, setDesktop] = useState(true);
  const [stage, setStage] = useState<Stage>(0);
  /** A dot click wins over scroll until the scroll moves into a new stage. */
  const [pageOverride, setPageOverride] = useState<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)");
    const sync = () => setDesktop(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const pinned = desktop && !reduceMotion;

  /**
   * On a window too short for heading + cards + dots, the pinned content is
   * scaled down just enough to fit (1 = natural size, so nothing changes on
   * normal heights). Transforms don't affect offsetHeight, so there's no loop.
   */
  const fitRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(1);

  useEffect(() => {
    const el = fitRef.current;
    if (!el || !pinned) {
      setFit(1);
      return;
    }
    const measure = () => {
      const available = window.innerHeight - HEADER_OFFSET - 8;
      const natural = el.offsetHeight;
      setFit(natural > available ? Math.max(0.5, available / natural) : 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !pinned) return;

    let last: Stage = -1 as unknown as Stage;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const progress =
        range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
      const next = stageFor(progress);
      if (next !== last) {
        last = next;
        setStage(next);
        setPageOverride(null);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pinned]);

  const effectiveStage: Stage =
    pageOverride !== null ? ((pageOverride + 1) as Stage) : stage;
  const page = pageOverride ?? (stage === 2 ? 1 : 0);

  const trackStyle: CSSProperties = pinned
    ? { transform: `translateX(calc(${-page} * (100% + ${PAGE_GAP}px)))` }
    : {};

  return (
    <section
      id="institutions"
      ref={sectionRef}
      aria-labelledby="institution-operates-heading"
      className="relative bg-white"
      style={pinned ? { height: "300vh" } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen flex-col justify-center-safe overflow-hidden pt-[80px]"
            : "py-[100px]"
        }
      >
        <div
          ref={fitRef}
          style={
            pinned && fit < 1
              ? { transform: `scale(${fit})`, transformOrigin: "top center" }
              : undefined
          }
        >
          {/* Heading — starts centred on screen, then lifts out of the way */}
          <div
            className="relative px-5 text-center transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.25,1)]"
            style={{
              transform:
                pinned && effectiveStage === 0
                  ? "translateY(min(250px,28vh))"
                  : "none",
            }}
          >
            <h2
              id="institution-operates-heading"
              className="section-title mx-auto max-w-[720px] leading-[1.1] tracking-[-0.035em] text-ink"
            >
              Designed for the Way Your Institution Operates
            </h2>
            <p className="running-text mx-auto mt-[18px] max-w-[620px] text-base! leading-[1.6] sm:text-[17px]!">
              LIST Software provides core banking capabilities that support the
              operational, transaction, lending, and compliance needs of
              financial institutions.
            </p>
            {pinned && (
              <p
                aria-hidden="true"
                className={`absolute inset-x-0 top-full mt-[26px] flex animate-[institutionFloat_2.4s_ease-in-out_infinite] items-center justify-center gap-1.5 text-[13px] font-semibold text-[#0094D3] transition-opacity duration-500 ${
                  effectiveStage === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                Scroll to explore
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </p>
            )}
          </div>

          {/* Belt */}
          <div
            className={
              pinned
                ? "mx-auto mt-3 w-full max-w-[1120px] overflow-hidden px-7 pt-5 pb-3.5"
                : "mx-auto mt-10 max-w-[1120px] snap-x snap-mandatory overflow-x-auto px-5 pt-[26px] pb-[30px]"
            }
          >
            <div
              className={
                pinned
                  ? "flex gap-7 transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.25,1)]"
                  : "flex w-max gap-[18px]"
              }
              style={trackStyle}
            >
              {PAGES.map((pageCards, pageIndex) => (
                <div
                  key={pageIndex}
                  className={
                    pinned
                      ? "group/page flex h-[min(480px,60vh)] flex-[0_0_100%] gap-[18px]"
                      : "contents"
                  }
                >
                  {pageCards.map((card, i) => {
                    const order = pageIndex * PAGE_SIZE + i;
                    const state = pinned
                      ? cellState(pageIndex, effectiveStage)
                      : { opacity: 1, transform: "none" };
                    const delay = `${i * ENTER_STEP}s`;

                    return (
                      <div
                        key={card.id}
                        className={
                          pinned
                            ? "group/cell flex min-w-0 flex-[1_1_0] hover:flex-[1.6_1_0]! group-hover/page:flex-[0.78_1_0]"
                            : "flex h-[440px] w-[min(320px,82vw)] flex-none snap-start"
                        }
                        style={{
                          ...state,
                          transition: `flex 0.7s cubic-bezier(0.2,0.7,0.2,1), opacity 0.8s ease ${delay}, transform 0.9s cubic-bezier(0.2,0.7,0.2,1) ${delay}`,
                        }}
                      >
                        <BeltCard
                          card={card}
                          floatDelay={order * FLOAT_STEP}
                          pinned={pinned}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Page dots */}
          {pinned && (
            <div
              className={`flex justify-center gap-2 transition-opacity duration-500 ${
                effectiveStage === 0 ? "opacity-0" : "opacity-100"
              }`}
            >
              {PAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show cards ${i * PAGE_SIZE + 1} to ${i * PAGE_SIZE + PAGE_SIZE}`}
                  aria-current={page === i}
                  onClick={() => setPageOverride(i)}
                  className={`h-1 cursor-pointer rounded border-0 p-0 transition-all duration-500 ${
                    page === i ? "w-7 bg-[#0094D3]" : "w-3 bg-[#DCE4F0]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

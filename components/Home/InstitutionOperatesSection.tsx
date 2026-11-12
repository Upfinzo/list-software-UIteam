"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type IconKind = "banks" | "coin" | "phone" | "layers" | "orbit" | "shield";

interface InstitutionCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: IconKind;
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
    icon: "banks",
    background: "linear-gradient(160deg,#E8F1FC 0%,#D5E6FA 100%)",
  },
  {
    id: "financial-institutions",
    title: "Financial Institutions",
    description:
      "Extend financial operations with core banking, credit appraisal, compliance, transaction processing, and operational controls built for co-operative societies, NBFCs, and credit institutions.",
    href: "/products",
    icon: "coin",
    background: "linear-gradient(160deg,#FDF5E4 0%,#F9E9C9 100%)",
  },
  {
    id: "digital-banking-business",
    title: "Digital Banking Business",
    description:
      "Extend banking beyond the branch through digital channels, customer services, payment connectivity, and integrated platforms that keep every customer journey connected to the core.",
    href: "/products",
    icon: "phone",
    background: "linear-gradient(160deg,#F1F3F9 0%,#E2E7F3 100%)",
  },
  {
    id: "it-technology-teams",
    title: "IT & Technology Teams",
    description:
      "Empower technology teams with scalable, secure, integrated banking infrastructure solutions.",
    href: "/products",
    icon: "layers",
    background: "linear-gradient(160deg,#FDF0EC 0%,#FBE0D8 100%)",
  },
  {
    id: "banking-operations",
    title: "Banking Operations",
    description:
      "Streamline customer service, issue resolution, workflows, and operational control efficiently.",
    href: "/products",
    icon: "orbit",
    background: "linear-gradient(160deg,#F3EFFD 0%,#E5DCF8 100%)",
  },
  {
    id: "compliance-risk-teams",
    title: "Compliance & Risk Teams",
    description:
      "Strengthen compliance controls, manage risks, monitor activities, and maintain regulatory readiness.",
    href: "/products",
    icon: "shield",
    background: "linear-gradient(160deg,#E8F7F1 0%,#D2EFE3 100%)",
  },
];

/* ------------------------------------------------------------------ */
/* Illustrations (inline so no extra assets are required)              */
/* ------------------------------------------------------------------ */

function IconShadow() {
  return (
    <span
      aria-hidden
      className="absolute bottom-0 left-1/2 h-[10px] w-[88px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(30,50,100,0.28),transparent)]"
    />
  );
}

function CardIllustration({ kind }: { readonly kind: IconKind }) {
  let art: ReactNode;

  switch (kind) {
    case "banks":
      art = (
        <svg viewBox="0 0 90 100" className="h-[92px] w-auto">
          <defs>
            <linearGradient id="io-bank-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#EAF3FF" />
              <stop offset="1" stopColor="#A9C9F2" />
            </linearGradient>
            <linearGradient id="io-bank-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#BFD8F8" />
              <stop offset="1" stopColor="#5E92DA" />
            </linearGradient>
            <linearGradient id="io-bank-c" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8DB3EA" />
              <stop offset="1" stopColor="#3D6EC2" />
            </linearGradient>
          </defs>
          <rect x="10" y="62" width="70" height="30" rx="7" fill="url(#io-bank-c)" />
          <rect x="10" y="34" width="70" height="30" rx="7" fill="url(#io-bank-b)" opacity="0.92" />
          <rect x="10" y="6" width="70" height="30" rx="7" fill="url(#io-bank-a)" opacity="0.95" />
          <rect x="16" y="10" width="58" height="6" rx="3" fill="#FFFFFF" opacity="0.7" />
        </svg>
      );
      break;
    case "coin":
      art = (
        <svg viewBox="0 0 100 100" className="h-[96px] w-auto">
          <defs>
            <radialGradient id="io-coin-a" cx="0.35" cy="0.3" r="0.8">
              <stop offset="0" stopColor="#FFE9A6" />
              <stop offset="0.55" stopColor="#F4C04A" />
              <stop offset="1" stopColor="#D99A16" />
            </radialGradient>
            <linearGradient id="io-coin-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#E9AE2C" />
              <stop offset="1" stopColor="#F9D77A" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="url(#io-coin-b)" />
          <circle cx="50" cy="50" r="39" fill="url(#io-coin-a)" />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="42"
            fontWeight="700"
            fill="#FFFFFF"
            fontFamily="system-ui, sans-serif"
          >
            ₹
          </text>
        </svg>
      );
      break;
    case "phone":
      art = (
        <svg viewBox="0 0 80 120" className="h-[112px] w-auto">
          <defs>
            <linearGradient id="io-phone-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2F6BF0" />
              <stop offset="1" stopColor="#0A2C9A" />
            </linearGradient>
          </defs>
          <g transform="rotate(6 40 60)">
            <rect x="12" y="4" width="58" height="110" rx="12" fill="#0A1B4A" />
            <rect x="16" y="8" width="50" height="102" rx="9" fill="url(#io-phone-a)" />
            <rect x="24" y="22" width="34" height="7" rx="3.5" fill="#8DB7FF" />
            <rect x="24" y="35" width="34" height="7" rx="3.5" fill="#8DB7FF" />
            <rect x="24" y="80" width="34" height="16" rx="4" fill="#FFFFFF" />
          </g>
        </svg>
      );
      break;
    case "layers":
      art = (
        <svg viewBox="0 0 140 110" className="h-[104px] w-auto">
          <defs>
            <linearGradient id="io-layer-a" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F27A5E" />
              <stop offset="1" stopColor="#D6452A" />
            </linearGradient>
            <linearGradient id="io-layer-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#F7D5CC" />
            </linearGradient>
          </defs>
          <path d="M70 102 12 66l58-30 58 30z" fill="url(#io-layer-a)" />
          <path d="M70 84 12 50l58-30 58 30z" fill="#EE6A4C" />
          <rect x="30" y="6" width="80" height="44" rx="10" fill="url(#io-layer-b)" transform="rotate(-3 70 28)" />
        </svg>
      );
      break;
    case "orbit":
      art = (
        <svg viewBox="0 0 120 80" className="h-[80px] w-auto">
          <defs>
            <radialGradient id="io-orbit-a" cx="0.35" cy="0.3" r="0.8">
              <stop offset="0" stopColor="#E6DBFF" />
              <stop offset="0.6" stopColor="#8F6BF0" />
              <stop offset="1" stopColor="#5532C6" />
            </radialGradient>
          </defs>
          <ellipse cx="60" cy="40" rx="50" ry="15" fill="none" stroke="#7C4DEB" strokeWidth="4" />
          <ellipse cx="60" cy="40" rx="6" ry="36" fill="none" stroke="#B9A3F5" strokeWidth="1.5" />
          <line x1="20" y1="44" x2="100" y2="36" stroke="#7FA6F5" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="60" cy="40" r="12" fill="url(#io-orbit-a)" />
        </svg>
      );
      break;
    case "shield":
      art = (
        <svg viewBox="0 0 90 110" className="h-[104px] w-auto">
          <defs>
            <linearGradient id="io-shield-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5CD3A5" />
              <stop offset="1" stopColor="#1F9B6E" />
            </linearGradient>
          </defs>
          <path
            d="M45 4 82 18v32c0 26-16 46-37 56C24 96 8 76 8 50V18z"
            fill="url(#io-shield-a)"
          />
          <path d="M45 4v102C24 96 8 76 8 50V18z" fill="#FFFFFF" opacity="0.12" />
          <path
            d="m28 54 12 12 24-26"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
  }

  return (
    <div className="relative mx-auto flex h-[128px] w-full items-center justify-center pb-4 sm:h-[140px]">
      <div className="drop-shadow-[0_10px_14px_rgba(20,40,90,0.18)]">{art}</div>
      <IconShadow />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

interface CardProps {
  readonly card: InstitutionCard;
  readonly isActive: boolean;
  readonly onActivate: (id: string | null) => void;
}

function BeltCard({ card, isActive, onActivate }: CardProps) {
  return (
    <article
      onMouseEnter={() => onActivate(card.id)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(card.id)}
      onClick={() => onActivate(card.id)}
      data-active={isActive}
      style={{ background: card.background }}
      className={`group relative flex h-full shrink-0 flex-col overflow-hidden rounded-[24px] p-6 shadow-[0_24px_48px_-28px_rgba(20,45,110,0.35)] transition-[width,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7 ${
        isActive
          ? "w-[min(88vw,560px)] -translate-y-1 shadow-[0_30px_60px_-26px_rgba(20,45,110,0.45)] md:w-[clamp(420px,42vw,560px)]"
          : "w-[min(78vw,320px)] md:w-[clamp(280px,24vw,340px)]"
      }`}
    >
      <CardIllustration kind={card.icon} />

      <h3 className="mt-3 text-[26px] leading-[1.12] font-semibold tracking-[-0.03em] text-[#0B1A3D] sm:text-[30px]">
        {card.title}
      </h3>

      {/* Description grows on hover; min-h-0 keeps the button pinned below it. */}
      <div className="mt-4 min-h-0 flex-1 overflow-hidden">
        <p
          className={`max-w-[440px] text-[14px] leading-[23px] text-[#4A556B] sm:text-[15px] ${
            isActive ? "line-clamp-none" : "line-clamp-4"
          }`}
        >
          {card.description}
        </p>
      </div>

      <Link
        href={card.href}
        onClick={(event) => event.stopPropagation()}
        className="mt-5 inline-flex h-[46px] w-fit shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#1150D1_0%,#082E8E_100%)] px-6 text-[15px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_22px_-8px_rgba(3,38,131,0.65)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#032683]"
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

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

interface Dimensions {
  readonly viewportH: number;
  readonly introH: number;
  readonly frameH: number;
  readonly frameW: number;
  readonly trackW: number;
}

const INITIAL_DIMENSIONS: Dimensions = {
  viewportH: 0,
  introH: 0,
  frameH: 0,
  frameW: 0,
  trackW: 0,
};

/** Space between the intro copy and the belt once it has settled. */
const INTRO_GAP = 48;
/** Space below the belt for the pagination dots. */
const DOTS_SPACE = 56;

export default function InstitutionOperatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();
  const [dims, setDims] = useState<Dimensions>(INITIAL_DIMENSIONS);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activePage, setActivePage] = useState(0);

  const measure = useCallback(() => {
    if (!introRef.current || !frameRef.current || !trackRef.current) return;
    setDims({
      viewportH: window.innerHeight,
      introH: introRef.current.offsetHeight,
      frameH: frameRef.current.offsetHeight,
      frameW: frameRef.current.clientWidth,
      trackW: trackRef.current.scrollWidth,
    });
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (introRef.current) observer.observe(introRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const measured = dims.viewportH > 0;
  const maxShift = Math.max(0, dims.trackW - dims.frameW);
  const introScroll = dims.viewportH * 0.6;
  const tailScroll = dims.viewportH * 0.15;
  const totalScroll = introScroll + maxShift + tailScroll;
  const pageCount = Math.max(1, Math.ceil(dims.trackW / Math.max(dims.frameW, 1)));

  // Settled layout: belt sits above the dots, intro sits directly above the belt.
  const beltTop = Math.max(96, dims.viewportH - dims.frameH - DOTS_SPACE);
  const introStartY = (dims.viewportH - dims.introH) / 2;
  const introEndY = beltTop - dims.introH - INTRO_GAP;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  const scrolled = useTransform(progress, (p) => p * totalScroll);
  const introT = useTransform(scrolled, (s) =>
    introScroll ? clamp01(s / introScroll) : 0,
  );
  const beltT = useTransform(scrolled, (s) =>
    maxShift ? clamp01((s - introScroll) / maxShift) : 0,
  );

  const introY = useTransform(
    introT,
    (t) => introStartY + (introEndY - introStartY) * t,
  );
  const cueOpacity = useTransform(introT, [0, 0.35], [1, 0]);
  const beltY = useTransform(introT, [0.15, 1], [dims.viewportH * 0.45, 0]);
  const beltOpacity = useTransform(introT, [0.15, 0.7], [0, 1]);
  const beltX = useTransform(beltT, (t) => -t * maxShift);

  useMotionValueEvent(beltT, "change", (t) => {
    const page = Math.round(t * (pageCount - 1));
    setActivePage((current) => (current === page ? current : page));
  });

  const goToPage = (page: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const ratio = pageCount > 1 ? page / (pageCount - 1) : 0;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY +
      introScroll +
      ratio * maxShift;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const intro = (
    <>
      <h2 id="institution-operates-heading" className="mx-auto max-w-[620px] text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] text-[#0B1A3D] sm:text-[46px] lg:text-[54px]">
        Designed for the Way Your Institution Operates
      </h2>
      <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[28px] text-[#5B6880] sm:text-[18px]">
        LIST Software provides core banking capabilities that support the
        operational, transaction, lending, and compliance needs of financial
        institutions.
      </p>
    </>
  );

  /* Reduced motion: no pinning, a plain swipeable row. */
  if (reduceMotion) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 text-center">{intro}</div>
        <div className="mx-auto mt-12 flex h-[clamp(440px,62svh,500px)] max-w-[1280px] snap-x gap-5 overflow-x-auto px-5 pb-6">
          {CARDS.map((card) => (
            <div key={card.id} className="h-full snap-start">
              <BeltCard
                card={card}
                isActive={activeId === card.id}
                onActivate={setActiveId}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="institution-operates-heading"
      className="relative bg-white"
      style={{ height: measured ? dims.viewportH + totalScroll : "260vh" }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Intro copy */}
        <motion.div
          ref={introRef}
          style={{ y: introY, opacity: measured ? 1 : 0 }}
          className="absolute inset-x-0 top-0 z-10 px-5 text-center"
        >
          {intro}

          <motion.button
            type="button"
            onClick={() => goToPage(0)}
            style={{ opacity: cueOpacity }}
            className="absolute left-1/2 mt-6 -translate-x-1/2 cursor-pointer text-[14px] font-semibold tracking-[-0.01em] text-[#0E8BD8]"
          >
            <motion.span
              className="inline-flex items-center gap-2"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll to explore
              <span aria-hidden className="text-[15px]">
                ↓
              </span>
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Conveyor belt */}
        <motion.div
          style={{ y: beltY, opacity: beltOpacity, top: beltTop }}
          className="absolute inset-x-0"
        >
          <div
            ref={frameRef}
            className="mx-auto h-[clamp(430px,62svh,500px)] max-w-[1200px] overflow-hidden px-4 py-3 sm:px-8 [mask-image:linear-gradient(90deg,transparent,#000_2.5%,#000_97.5%,transparent)]"
          >
            <motion.div
              ref={trackRef}
              style={{ x: beltX }}
              className="flex h-full w-max items-stretch gap-4 will-change-transform sm:gap-5"
            >
              {CARDS.map((card) => (
                <BeltCard
                  key={card.id}
                  card={card}
                  isActive={activeId === card.id}
                  onActivate={setActiveId}
                />
              ))}
            </motion.div>
          </div>

          {pageCount > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {Array.from({ length: pageCount }, (_, page) => (
                <button
                  key={page}
                  type="button"
                  aria-label={`Show slide group ${page + 1}`}
                  aria-current={activePage === page}
                  onClick={() => goToPage(page)}
                  className={`h-[4px] cursor-pointer rounded-full transition-all duration-300 ${
                    activePage === page
                      ? "w-[30px] bg-[#0E8BD8]"
                      : "w-[12px] bg-[#D5DEEA] hover:bg-[#B5C3D6]"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

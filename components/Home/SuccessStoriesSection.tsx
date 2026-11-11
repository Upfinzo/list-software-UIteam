import Image from "next/image";

import { Images } from "@/assets/images/images";

interface SuccessStory {
  bank: string;
  bankLogo: string;
  badge?: string;
  title: string;
  description: string;
  chart: "bars" | "growth";
}

const stories: SuccessStory[] = [
  {
    bank: "Samarth Sahakari Bank",
    bankLogo: Images.home.clients.samarth,
    badge: "Largest among the latest licensed banks",
    title: "Samarth Bank Solapur",
    description:
      "Samarth Sahakari Bank becomes largest amongst the latest licensed banks, using Custodian Core Banking Solution.",
    chart: "bars",
  },
  {
    bank: "Rajapur Urban Bank",
    bankLogo: Images.home.clients.rajapur,
    title: "Rajapur Urban Bank",
    description:
      "“Rajapur Urban Bank did exponential growth using Custodian Core Banking Solution as a core resource.”",
    chart: "growth",
  },
];

function BankBadge({ story }: { readonly story: SuccessStory }) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1 pr-2.5 pl-1 text-white shadow-sm backdrop-blur-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1">
        <Image
          src={story.bankLogo}
          alt=""
          width={28}
          height={28}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="truncate text-[11px] font-semibold tracking-[-0.02em] sm:text-xs">
        {story.bank}
      </span>
    </div>
  );
}

function BarsChart() {
  const bars = [30, 42, 38, 78, 47, 36];

  return (
    <div className="absolute inset-x-5 bottom-0 flex h-[68%] items-end justify-center gap-2.5 sm:inset-x-8 sm:gap-3">
      {bars.map((height, index) => (
        <div
          key={index}
          className={`relative w-full max-w-[74px] rounded-t-[9px] ${
            index === 3
              ? "bg-gradient-to-b from-[#48D9B6] to-[#12A781] shadow-[0_0_30px_rgba(47,218,180,0.28)]"
              : "bg-gradient-to-b from-[#28679B] to-[#163965]"
          }`}
          style={{ height: `${height}%` }}
        >
          {index === 3 && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold leading-none text-[#17315D] shadow-sm">
              Samarth
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function GrowthChart() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 640 300"
      >
        <defs>
          <linearGradient
            id="success-growth-line"
            gradientUnits="userSpaceOnUse"
            x1="30"
            y1="255"
            x2="610"
            y2="60"
          >
            <stop stopColor="#52B8E5" />
            <stop offset="1" stopColor="#4BE0BB" />
          </linearGradient>
          <linearGradient id="success-growth-fill" x1="320" y1="80" x2="320" y2="300">
            <stop stopColor="#48D9B6" stopOpacity=".32" />
            <stop offset="1" stopColor="#48D9B6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 278 C130 278 190 271 276 253 C384 231 463 200 523 147 C565 109 595 69 640 50 V300 H0 Z"
          fill="url(#success-growth-fill)"
        />
        <path
          d="M0 278 C130 278 190 271 276 253 C384 231 463 200 523 147 C565 109 595 69 640 50"
          pathLength="1"
          stroke="url(#success-growth-line)"
          strokeLinecap="round"
          strokeWidth="5"
          className="success-growth-line"
        />
        <circle cx="640" cy="50" r="8" fill="#50E0BB" fillOpacity=".9" />
        <circle cx="640" cy="50" r="15" fill="#50E0BB" fillOpacity=".18" />
      </svg>
      <span className="absolute bottom-[54px] left-6 z-10 inline-flex animate-[success-badge-float_6s_ease-in-out_infinite] items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-[11px] font-semibold text-[#159A78] shadow-md motion-reduce:animate-none sm:left-7">
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 14 8 9l3 3 6-7M12 5h5v5" />
        </svg>
        Exponential growth
      </span>
    </>
  );
}

function StoryCard({ story }: { readonly story: SuccessStory }) {
  return (
    <article className="success-story-card relative overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_-32px_rgba(3,38,131,0.4)]">
      <div className="ss-gridbg relative h-[260px] overflow-hidden sm:h-[300px]">
        <div className="absolute left-5 top-5 z-10 max-w-[48%] sm:left-6 sm:top-6 sm:max-w-[43%]">
          <BankBadge story={story} />
        </div>

        {story.badge && (
          <span className="absolute right-4 top-5 z-10 max-w-[45%] animate-[success-badge-float_6s_ease-in-out_infinite] rounded-lg bg-white px-2.5 py-1.5 text-center text-[10px] font-semibold leading-[1.35] text-[#12367B] shadow-md motion-reduce:animate-none sm:right-6 sm:top-6 sm:max-w-none sm:px-3 sm:text-[11px]">
            {story.badge}
          </span>
        )}

        {story.chart === "bars" ? <BarsChart /> : <GrowthChart />}
      </div>

      <div className="min-h-[192px] px-6 py-6 sm:px-[30px] sm:py-7">
        <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#101A3B] sm:text-[22px]">
          {story.title}
        </h3>
        <p className="mt-2.5 text-[14px] leading-[1.65] text-[#5D6F8D] sm:text-[15px]">
          {story.description}
        </p>
        <a
          href="/contact"
          aria-label={`Read more about ${story.title}`}
          className="group mt-5 inline-flex items-center gap-3 text-[13px] font-bold tracking-[0.08em] text-[#123D95] transition-colors hover:text-[#0789D0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B6ED8]"
        >
          READ MORE
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#0754D8] transition-transform duration-200 group-hover:translate-x-0.5">
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3.5 10h12m-5-5 5 5-5 5" />
            </svg>
          </span>
        </a>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-1/2 z-10 h-0.5 bg-white"
      />
    </article>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section
      id="success-stories"
      aria-labelledby="success-stories-title"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-7">
        <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-2 md:items-center md:gap-12">
          <h2
            id="success-stories-title"
            className="max-w-[600px] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[#101A3B]"
          >
            Success Stories That Speak for Us
          </h2>
          <p className="max-w-[470px] text-[15px] leading-[1.7] text-[#5D6F8D] md:justify-self-end md:text-base">
            Take a closer look at how our technology transforms banking
            operations and delivers measurable value for the financial
            institutions we serve.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {stories.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </div>

      <style>{`
        .success-story-card {
          border: 2px solid transparent;
          background-image:
            linear-gradient(#fff, #fff),
            linear-gradient(135deg, #5bb8e8 0%, #dce7f4 48%, #5ce0c1 100%);
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }
        .ss-gridbg {
          background-color: #071B4A;
          background-image:
            linear-gradient(rgba(121,166,224,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(121,166,224,.08) 1px, transparent 1px),
            linear-gradient(180deg, rgba(6,31,86,.18) 0%, rgba(3,15,48,.84) 100%),
            radial-gradient(ellipse at 78% 0%, rgba(17,92,198,.88) 0%, rgba(17,92,198,0) 58%),
            linear-gradient(145deg, #123E91 0%, #061944 75%);
          background-size: 43px 43px, 43px 43px, 100% 100%, 100% 100%, 100% 100%;
        }
        @keyframes success-badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes success-growth-draw {
          from { stroke-dasharray: 0 1; }
          to { stroke-dasharray: 1 0; }
        }
        .success-growth-line {
          animation: success-growth-draw 2.2s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .success-growth-line { animation: none; }
        }
      `}</style>
    </section>
  );
}

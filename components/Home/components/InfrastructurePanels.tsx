import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { Images } from "@/assets/images/images";

/* ------------------------------------------------------------------
   The four illustrations that sit beside the Infrastructure list.
   Each one replays its entrance when it mounts, so the parent keys it
   by the active item.
------------------------------------------------------------------ */

const EASE = "cubic-bezier(0.2,0.7,0.2,1)";

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

const SHADOW_CARD = "shadow-[0_14px_28px_-18px_rgba(3,46,137,0.5)]";

function CheckIcon({ size = 14, stroke = 2.6 }: { size?: number; stroke?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth={stroke}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

/** The pill at the bottom right of a panel that states the benefit. */
function Tag({
  children,
  className = "right-[6%] bottom-[6%]",
  delaySeconds = 1.6,
}: {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delaySeconds?: number;
}) {
  return (
    <span
      className={`absolute inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#032E89,#0548D5)] py-[9px] pr-3.5 pl-2.5 text-[13px] font-semibold text-white shadow-[0_12px_24px_-12px_rgba(3,46,137,0.7)] motion-reduce:animate-none ${className}`}
      style={{
        animation: `infraRiseSoft 0.6s ${EASE} ${delaySeconds}s both`,
      }}
    >
      <CheckIcon />
      {children}
    </span>
  );
}

/** Dark rounded tile carrying the LIST mark, the centre of two panels. */
function Hub({ large = false, className = "" }: { large?: boolean; className?: string }) {
  return (
    <span
      className={`absolute left-1/2 z-[2] flex -translate-1/2 items-center justify-center bg-[linear-gradient(160deg,#0B1B52,#032E89)] shadow-[0_20px_34px_-16px_rgba(3,46,137,0.7)] motion-reduce:animate-none ${
        large
          ? "h-[88px] w-[88px] rounded-[22px]"
          : "h-[72px] w-[72px] rounded-[18px]"
      } ${className}`}
      style={{ animation: `infraHub 0.6s ${EASE} 0.45s both` }}
    >
      <Image
        src={Images.common.footerlogo}
        alt=""
        width={104}
        height={40}
        draggable={false}
        className="h-auto"
        style={{ width: large ? 68 : 57 }}
      />
    </span>
  );
}

/* ---------- 1. A Common API Platform ---------- */

const apiNodes = [
  { name: "Mobile Banking", left: "19%", delay: 1.05 },
  { name: "Payments", left: "50%", delay: 1.2 },
  { name: "Credit Bureau", left: "81%", delay: 1.35, highlight: true },
];

function ApiPanel() {
  return (
    <div className="absolute inset-0">
      <span
        className="absolute top-[9%] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-[#06123A] shadow-[0_12px_26px_-16px_rgba(3,46,137,0.5)] motion-reduce:animate-none"
        style={{ animation: `infraRise 0.6s ${EASE} both` }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0548D5"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
        API Request
      </span>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 360"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#52AFE5" strokeWidth="1.6" strokeLinecap="round">
          {[
            ["M260 70V128", 0.3],
            ["M260 178V214H100V250", 0.7],
            ["M260 214V250", 0.7],
            ["M260 214H420V250", 0.7],
          ].map(([d, at]) => (
            <path
              key={d}
              d={d as string}
              pathLength={1}
              className="animate-[infraDraw_0.6s_ease-out_forwards] [stroke-dasharray:1] [stroke-dashoffset:1] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
              style={delay(at as number)}
            />
          ))}
        </g>
        <g fill="#52AFE5">
          {[100, 260, 420].map((cx) => (
            <circle
              key={cx}
              cx={cx}
              cy="232"
              r="4"
              className="origin-center animate-[infraPop_0.4s_ease-out_forwards] opacity-0 [transform-box:fill-box] motion-reduce:animate-none motion-reduce:opacity-100"
              style={delay(1)}
            />
          ))}
        </g>
      </svg>

      <Hub className="top-[42%]" />

      {apiNodes.map((node) => (
        <span
          key={node.name}
          className={`absolute top-[70%] flex w-[24%] -translate-x-1/2 flex-col items-center gap-1.5 rounded-[14px] bg-white px-2.5 py-3.5 text-center text-[13px] max-[560px]:w-[30%] max-[560px]:text-[11px] ${SHADOW_CARD} motion-reduce:animate-none ${
            node.highlight
              ? "shadow-[0_0_0_2px_#52AFE5,0_18px_30px_-16px_rgba(3,46,137,0.55)]"
              : ""
          }`}
          style={{
            left: node.left,
            animation: `infraRise 0.6s ${EASE} ${node.delay}s both`,
          }}
        >
          <b className="font-semibold text-[#06123A]">{node.name}</b>
          <i className="rounded-full bg-[#DDF8EF] px-2 py-0.5 text-[11px] font-bold text-[#0E8F6E] not-italic">
            Connected
          </i>
        </span>
      ))}
      <Tag>One API, Every System</Tag>
    </div>
  );
}

/* ---------- 2. AI Enabled Banking Technology ---------- */

const aiSteps = [
  { label: "Transaction Logs Reviewed", at: 1 },
  { label: "Switch Timeout Pattern Found", at: 1.5 },
  { label: "Suggested Fix Sent to IT Team", at: 2, highlight: true },
];

function AiPanel() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute top-1/2 left-1/2 w-[76%] -translate-1/2 rounded-[18px] bg-white p-5 shadow-[0_30px_50px_-28px_rgba(3,46,137,0.55)] motion-reduce:animate-none"
        style={{ animation: `infraWindow 0.6s ${EASE} both` }}
      >
        <div className="flex items-center gap-2.5 text-sm">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[linear-gradient(145deg,#8957E0,#0548D5)]">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 2l1.6 5.4L16 9l-5.4 1.6L9 16l-1.6-5.4L2 9l5.4-1.6z"
                fill="#FFFFFF"
              />
              <path
                d="M18 13l.9 2.6 2.6.9-2.6.9L18 20l-.9-2.6-2.6-.9 2.6-.9z"
                fill="#FFFFFF"
              />
            </svg>
          </span>
          <b className="font-bold text-[#06123A]">AI Assistant</b>
          <i className="ml-auto rounded-full bg-[#EEE7FB] px-[9px] py-[3px] text-[11px] font-bold text-[#6A3BC2] not-italic">
            Analysing
          </i>
        </div>

        <div className="relative my-3.5 h-[3px] overflow-hidden rounded-[3px] bg-[#EEF2F8]">
          <span className="absolute inset-y-0 w-[30%] animate-[infraScan_1.6s_ease-in-out_infinite] rounded-[3px] bg-[linear-gradient(90deg,#8957E0,#52AFE5)] motion-reduce:animate-none" />
        </div>

        <p className="mb-3 rounded-[10px] bg-[#F3F6FB] px-3 py-2.5 text-[13px] text-[#33405F]">
          Why Did IMPS Failures Rise at the Sangli Branch?
        </p>

        {aiSteps.map((step) => (
          <div
            key={step.label}
            className={`flex items-center gap-2.5 py-2 text-[13px] opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 ${
              step.highlight ? "font-semibold text-[#06123A]" : "text-[#33405F]"
            }`}
            style={{ animation: `infraRiseSoft 0.5s ease ${step.at}s both` }}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDF8EF] text-[11px] font-bold text-[#0E8F6E]">
              ✓
            </span>
            {step.label}
          </div>
        ))}
      </div>

      <Tag className="right-[7%] bottom-[10%]" delaySeconds={2.5}>
        Faster Issue Analysis
      </Tag>
    </div>
  );
}

/* ---------- 3. Smarter Digital Experiences ---------- */

function DigitalPanel() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute top-[8%] left-[38%] h-[400px] w-[210px] -translate-x-1/2 rounded-[34px] bg-[#0B1530] p-2.5 shadow-[0_40px_60px_-30px_rgba(3,46,137,0.6)] max-[560px]:left-1/2 motion-reduce:animate-none"
        style={{ animation: `infraRise 0.7s ${EASE} both` }}
      >
        <span className="absolute top-3.5 left-1/2 z-[2] -ml-[31px] h-4 w-[62px] rounded-full bg-[#0B1530]" />
        <div className="flex h-full flex-col gap-2 rounded-[26px] bg-[#F5F8FD] px-3.5 pt-[42px] pb-3.5">
          <p className="mb-1 text-xs font-bold text-[#032E89]">Pay Bills · BBPS</p>
          {[
            { label: "Electricity", amount: "₹1,240", at: 0.6 },
            { label: "Water", amount: "₹380", at: 0.8 },
          ].map((bill) => (
            <div
              key={bill.label}
              className="flex justify-between rounded-[10px] bg-white px-3 py-2.5 text-xs text-[#33405F] opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              style={{ animation: `infraRiseSoft 0.5s ease ${bill.at}s both` }}
            >
              <span>{bill.label}</span>
              <b className="text-[#06123A]">{bill.amount}</b>
            </div>
          ))}
          <div
            className="mt-auto flex flex-col items-center gap-1 rounded-[14px] bg-[linear-gradient(160deg,#0548D5,#032E89)] px-2.5 py-4 text-white opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animation: `infraPaid 0.6s ${EASE} 1.2s both` }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14A37F]">
              <CheckIcon size={18} stroke={3} />
            </span>
            <b className="text-lg">₹1,240</b>
            <i className="text-[11px] opacity-85 not-italic">Paid Successfully</i>
          </div>
        </div>
      </div>

      <Tag className="right-[12%] bottom-[18%]" delaySeconds={1.8}>
        Integrated Services
      </Tag>
    </div>
  );
}

/* ---------- 4. Technology Partnerships ---------- */

const partners = [
  { name: "Payment Network", left: "23%", top: "25%", delay: 0.7, swatch: "linear-gradient(145deg,#9AF0D6,#14A37F)" },
  { name: "Fintech Partner", left: "77%", top: "25%", delay: 0.85, swatch: "linear-gradient(145deg,#C9B2F5,#6A3BC2)" },
  { name: "Technology Partner", left: "23%", top: "78%", delay: 1, swatch: "linear-gradient(145deg,#F8D88F,#C58A12)" },
  { name: "Service Provider", left: "77%", top: "78%", delay: 1.15, swatch: "linear-gradient(145deg,#F9A595,#C23A24)" },
];

function PartnersPanel() {
  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 360"
        fill="none"
        aria-hidden="true"
      >
        <g
          stroke="#52AFE5"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="4 6"
        >
          {["M260 180L120 90", "M260 180L400 90", "M260 180L120 280", "M260 180L400 280"].map(
            (d) => (
              <path
                key={d}
                d={d}
                className="animate-[infraFlow_2.4s_linear_infinite] motion-reduce:animate-none"
              />
            ),
          )}
        </g>
        <circle
          cx="260"
          cy="180"
          r="120"
          stroke="#BFD9F2"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="origin-[260px_180px] animate-[infraOrbit_40s_linear_infinite] motion-reduce:animate-none"
        />
      </svg>

      <Hub large className="top-1/2" />

      {partners.map((partner) => (
        <span
          key={partner.name}
          className={`absolute inline-flex -translate-1/2 items-center gap-2.5 rounded-[14px] bg-white py-2.5 pr-3.5 pl-2.5 text-[13px] font-semibold whitespace-nowrap text-[#06123A] max-[560px]:text-[11px] ${SHADOW_CARD} motion-reduce:animate-none`}
          style={{
            left: partner.left,
            top: partner.top,
            animation: `infraNode 0.6s ${EASE} ${partner.delay}s both`,
          }}
        >
          <span
            className="h-[26px] w-[26px] rounded-lg"
            style={{ background: partner.swatch }}
          />
          {partner.name}
        </span>
      ))}
    </div>
  );
}

const PANELS = [ApiPanel, AiPanel, DigitalPanel, PartnersPanel];

export default function InfrastructurePanel({ index }: { readonly index: number }) {
  const Panel = PANELS[index] ?? ApiPanel;
  return <Panel />;
}

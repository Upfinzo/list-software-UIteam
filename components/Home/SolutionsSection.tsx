const solutions = [
  "Digital Banking",
  "Payments & Transactions",
  "Lending & Recovery",
  "Compliance & Risk",
  "Operations",
  "Data & Intelligence",
];

const bars = [
  14, 18, 22, 28, 18, 20, 26, 14, 16, 26, 20, 22, 18, 12, 10, 16, 20, 14,
  18, 24, 16, 22, 18, 12, 16, 20, 14,
];

export default function SolutionsSection() {
  return (
    <section className="w-full bg-[#f5f6f7] px-4 py-12 md:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1260px]">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2c5ed6]">
          Solutions
        </p>

        <h2 className="max-w-[980px] text-[clamp(2.8rem,4vw,5rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-[#0d1b36]">
          Technology Built Around
          <br />
          Banking&apos;s Real-World Needs
        </h2>

        <div className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="rounded-[18px] border border-[#cbdde8] bg-[#edf5fb] px-5 py-6 shadow-[inset_0_0_0_1px_rgba(108,140,170,0.04)] md:px-7 md:py-8">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#4b6ea7]">
              Operational Discipline
            </p>

            <h3 className="mb-4 text-[clamp(2.1rem,3vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#101d38]">
              Operations
            </h3>

            <p className="max-w-[540px] text-[14px] leading-[1.75] text-[#4d617e] md:text-[15px]">
              LIST Software brings together purpose-built solutions across the
              banking lifecycle. Enabling financial institutions to modernise
              customer experiences, move money, manage risk, streamline
              operations, and turn banking data into actionable intelligence.
            </p>

            <div className="mt-8 flex h-[110px] items-end gap-[6px] overflow-hidden px-1 md:mt-10 md:gap-[7px]">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className={
                    index === 6 || index === 11 || index === 18
                      ? "w-[7px] rounded-t-[4px] bg-[#2860d7] md:w-[8px]"
                      : "w-[7px] rounded-t-[4px] bg-[#c8d9ef] md:w-[8px]"
                  }
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>

          <div>
            {solutions.map((item, index) => (
              <div
                key={item}
                className={
                  index === 0
                    ? "flex items-center justify-between border-t border-[#d7e0eb] py-[18px] text-[18px] font-medium text-[#1a2d4d] md:text-[20px]"
                    : "flex items-center justify-between border-t border-[#d7e0eb] py-[18px] text-[18px] font-medium text-[#1a2d4d] md:text-[20px]"
                }
              >
                <span>{item}</span>
                <span className="text-[24px] leading-none text-[#1d2c45]" aria-hidden="true">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

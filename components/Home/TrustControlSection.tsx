import Container from "@/components/common/Container";
import { trustControls } from "@/data/trustControls";

export default function TrustControlSection() {
  return (
    <section
      className="bg-[linear-gradient(160deg,#05123F_8.49%,#032683_54.15%,#04164D_91.51%)] py-20 lg:py-28"
      aria-labelledby="trust-control-title"
    >
      <Container>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5EAFE6]">
            Trust &amp; Control by Design
          </span>

          <h2
            id="trust-control-title"
            className="section-title mt-5 max-w-[620px] font-bold leading-[1.15] tracking-tight text-white"
          >
            Built for Banking Where Control Matters.
          </h2>

          <p className="running-text-trust mt-5 max-w-[640px] leading-7 text-white/65">
            Banking technology needs more than functionality. It needs security,
            traceability and operational discipline at every step.
          </p>
        </div>

        {/*
          The frame draws all four edges so the rounded corners stay closed.
          Every cell draws its own right and bottom hairline for the internal
          dividers, and the grid is pulled 1px past the frame so the trailing
          column and row get clipped instead of doubling up on the border.
          That holds at every column count, so it survives the reflow.
        */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 sm:mt-14">
          <ul className="-mr-px -mb-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {trustControls.map((item) => (
              <li
                key={item.id}
                className="group relative border-r border-b border-white/10 bg-[#04154A]/85 p-5"
              >
                {/*
                  The card colour is a translucent navy sitting on the section
                  gradient, so the hover lift is its own layer. Swapping
                  background-color instead would discard that colour rather
                  than washing over it.
                */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Accent rule that draws itself in on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#5EAFE6] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Positioned so the copy paints above both overlays. */}
                <div className="relative">
                  <span className="block text-[11px] font-medium tracking-[0.2em] text-[#5EAFE6]/80 transition-colors duration-300 group-hover:text-[#5EAFE6]">
                    {item.id}
                  </span>

                  <h3 className="mt-3 text-[15px]  leading-6 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

import ArrowIcon from "@/components/common/ArrowIcon";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import HeroEcosystem from "@/components/Home/HeroEcosystem";

const focusAreas = ["Core Banking", "Digital Banking", "Payments"];

const capabilities = [
  "API-First",
  "Compliance",
  "Secure",
  "Intelligence",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-12">
          {/* Copy */}
          <div className="max-w-[620px]">
            {/* <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink sm:text-[11px]">
                    {area}
                  </span>
                </li>
              ))}
            </ul> */}

            <h1 className="banner-title mt-5 font-bold leading-[1.1] tracking-tight text-ink sm:mt-6">
              Built for Core Banking.
              <span className="brand-gradient-text mt-4 block sm:mt-8">
                Connected to Modern Finance
              </span>
            </h1>

            <p className="running-text mt-8 max-w-lg leading-7 text-ink-muted sm:mt-12">
              LIST Software builds core banking technology for modern financial
              institutions, connecting the core with digital banking, payments,
              APIs, compliance and intelligent automation through a single evolving
              technology platform
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Button href="/contact" variant="primary">
                Get Started
                <ArrowIcon />
              </Button>

              <Button href="/services" variant="secondary">
                Explore the Platform
                <ArrowIcon />
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="chip-shadow inline-flex h-[34.5px] items-center rounded-full border border-hairline bg-white/80 px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-ink"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          {/* Connected ecosystem visual */}
          <HeroEcosystem className="mx-auto w-full max-w-[760px] lg:max-w-none lg:justify-self-end" />
        </div>
      </Container>
    </section>
  );
}

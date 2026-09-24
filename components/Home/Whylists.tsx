import React from "react";
import Container from "@/components/common/Container";
import RoadmapTimeline from "./components/RoadmapTimeline";
const whylistnew = [
  "Modern Infrastructure",
  "Cleaner Architecture",
  "Better-connected Products", 
];
export default function Whylist() {
  return (
    <section className="relative bg-[#F7F9FC]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-12 items-start gap-6">

          {/* Left - Sticky */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-24">
            <p
              className="
                mb-[15px]
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.27em]
              "
            >
              Why List            </p>

            <h1 className="section-title leading-none">
              Infrastructure That Evolves Without
            </h1>

            <h1 className="section-title brand-gradient-text my-5 leading-none">
              Losing the Foundation
            </h1>

            <p className="running-text">
              LIST Software continues to modernise the technology behind
              banking. It is evolving its core, expanding connectivity, and
              advancing capabilities across APIs, AI, automation, digital
              experiences, and multi-tenant architecture
            </p>
            <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {whylistnew.map((whylistnew) => (
                <li
                  key={whylistnew}
                  className="chip-shadow inline-flex h-[34.5px] items-center rounded-full border border-[#DCE4EC] bg-[#F8FAFD] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#121F37]"
                >
                  {whylistnew}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Scrollable timeline */}
          <div className="col-span-12 md:col-span-7">
            <RoadmapTimeline />
          </div>

        </div>
      </Container>
    </section>
  );
}
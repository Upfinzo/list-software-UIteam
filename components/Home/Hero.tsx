import Link from "next/link";

import Container from "@/components/common/Container";
export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        
        <div className="max-w-3xl mt-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Software Solutions
          </span>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Build better software for your business.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We create reliable, scalable, and modern digital
            solutions that help businesses grow.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/about"
              className="rounded-lg bg-black px-6 py-3 font-semibold text-white"
            >
              Learn More
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
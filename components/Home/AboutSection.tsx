
import Container from "@/components/common/Container";

export default function AboutSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              About Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Technology that solves real business problems.
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-600">
            We combine technology, design, and business
            understanding to create digital products that are
            simple, scalable, and effective.
          </p>
        </div>
      </Container>
    </section>
  );
}
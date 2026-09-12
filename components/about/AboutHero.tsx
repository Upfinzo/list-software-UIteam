import Container from "@/components/common/Container";

export default function AboutHero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            About Us
          </span>

          <h1 className="mt-4 text-5xl font-bold text-gray-950">
            We build technology with purpose.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our goal is to create meaningful digital experiences
            that make businesses more efficient and successful.
          </p>
        </div>
      </Container>
    </section>
  );
}
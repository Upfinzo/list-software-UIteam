import Container from "@/components/common/Container";

export default function ContactHero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Contact
          </span>

          <h1 className="mt-4 text-5xl font-bold text-gray-950">
            Let&apos;s talk about your project.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a project in mind? Send us a message and our
            team will get back to you.
          </p>
        </div>
      </Container>
    </section>
  );
}
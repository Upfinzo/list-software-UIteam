import Container from "@/components/common/Container";

export default function MissionSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-950">
              Our Mission
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              Our mission is to simplify complex business
              challenges through thoughtful technology and
              high-quality software solutions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
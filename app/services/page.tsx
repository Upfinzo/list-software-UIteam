import Container from "@/components/common/Container";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gray-50 py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Services
            </span>
            <h1 className="mt-4 text-5xl font-bold text-gray-950">
              Built for business growth.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help companies build better software, sharper experiences, and
              stronger digital foundations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  0{service.id}
                </span>
                <h2 className="mt-5 text-2xl font-bold text-gray-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

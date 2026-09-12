import Container from "@/components/common/Container";


import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            What We Do
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-950">
            Our Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
import type { Service } from "@/types/service";

type ServiceCardProps = Readonly<{
  service: Service;
}>;

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
        <span className="font-bold text-gray-700">{service.id}</span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-950">
        {service.title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">{service.description}</p>
    </article>
  );
}

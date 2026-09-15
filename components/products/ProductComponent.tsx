import type { Product } from "@/types/product";

type ProductComponentProps = {
  product: Product;
};

export function ProductComponent({ product }: ProductComponentProps) {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Product 
          
        </p>
        <h1 className="mt-4 text-4xl font-bold text-gray-950 md:text-6xl">
          {product.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {product.hero.description}
        </p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-gray-950">
            {product.name} Features
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

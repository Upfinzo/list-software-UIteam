import Link from "next/link";

import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our products
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-950 md:text-6xl">
            Software built for momentum.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.values(products).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                  Product
                </span>
                <span className="text-lg text-gray-400 transition group-hover:text-gray-700">
                  →
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-950">
                {product.name}
              </h2>

              <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
                {product.hero.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="text-sm font-medium text-gray-500">
                  Explore
                </span>
                <span className="rounded-full bg-gray-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  View
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

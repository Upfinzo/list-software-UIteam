import Link from "next/link";

import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-950">
            Our Products
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Explore our range of modern software solutions
            designed to support growing businesses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.values(products).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="flex h-full flex-col">
                <div>
                  <h2 className="text-xl font-semibold text-gray-950">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.hero.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-950">
                    View Product
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
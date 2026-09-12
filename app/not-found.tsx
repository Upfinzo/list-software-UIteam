import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-500">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-950">
          Product Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          The product you are looking for does not exist.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex rounded-lg bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          View All Products
        </Link>
      </div>
    </main>
  );
}
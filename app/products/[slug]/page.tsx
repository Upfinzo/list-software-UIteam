import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { ProductComponent } from "@/components/products/ProductComponent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.values(products).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = Object.values(products).find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Listsoftware",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = Object.values(products).find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductComponent product={product} />;
}
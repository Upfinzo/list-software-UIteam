export interface ProductSEO {
  title: string;
  description: string;
}

export interface ProductHero {
  title: string;
  description: string;
}

export interface Product {
  name: string;
  slug: string;
  seo: ProductSEO;
  hero: ProductHero;
  features: string[];
}
export interface ProductSEO {
  title: string;
  description: string;
}

export interface ProductHero {
  title: string;
  description: string;
}

export interface ProductMenuImage {
  src: string;
  alt: string;
}

export interface ProductMenuConfig {
  /** Include this product in the Products mega-menu. */
  visible: boolean;
  /** Controls its position in the mega-menu. */
  order: number;
  /** Only use when the menu title should differ from the product name. */
  label?: string;
  /** Products or modules included in this product suite. */
  services?: string[];
  /** Image shown when this menu item is hovered or focused. */
  image: ProductMenuImage;
}

export interface Product {
  name: string;
  slug: string;
  seo: ProductSEO;
  hero: ProductHero;
  features: string[];
  menu?: ProductMenuConfig;
}

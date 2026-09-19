import type { Product } from "@/types/product";
import type { MegaMenu, MegaMenuItem, NavigationItem } from "@/types/navigation";

import { products } from "@/data/products";

const productValues: Product[] = Object.values(products);

const productMenuItems: MegaMenuItem[] = productValues
  .flatMap((product) => {
    if (!product.menu?.visible) return [];

    return [
      {
        order: product.menu.order,
        item: {
          label: product.menu.label ?? product.name,
          href: `/products/${product.slug}`,
          // Keep this during the Header migration; remove it once Header uses services.
          desc: product.menu.services?.join(", "),
          services: product.menu.services,
          image: product.menu.image,
        },
      },
    ];
  })
  .sort((first, second) => first.order - second.order)
  .map(({ item }) => item);

const productsMegaMenu: MegaMenu = {
  items: productMenuItems,
  image: {
    src: "/images/mega-menu-products.jpg",
    alt: "LIST Software banking platform",
  },
};

export const navigation: NavigationItem[] = [
  { label: "Platform", href: "/" },
  { label: "Solutions", href: "/about" },
  { label: "Products", href: "/services", megaMenu: productsMegaMenu },
  { label: "Why LIST", href: "/products" },
  { label: "Institutions", href: "/contact" },
];

// Import this into Header instead of declaring a second set in Header.tsx.
export const enabledNavigationLinks = new Set([
  "/",
  "/about",
  "/services",
  "/products",
  "/contact",
  ...productMenuItems.map((item) => item.href),
]);

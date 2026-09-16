import type { Product } from "@/types/product";

export const products = {
  product1: {
    name: "Product 1",
    slug: "core-banking-solutions",

    seo: {
      title: "Product 1 | Listsoftware",
      description:
        "Power your business with Product 1's modern financial infrastructure.",
    },

    hero: {
      title: "Power Your Business With Product 1",
      description:
        "Product 1 provides powerful financial infrastructure for modern businesses.",
    },

    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
  },

  product2: {
    name: "Product 2",
    slug: "product2",

    seo: {
      title: "Product 2 | Listsoftware",
      description:
        "Simplify financial operations with Product 2 from Listsoftware.",
    },

    hero: {
      title: "Build Better Financial Operations With Product 2",
      description:
        "Product 2 helps businesses simplify and manage their financial operations.",
    },

    features: [
      "Feature A",
      "Feature B",
      "Feature C",
    ],
  },

  product3: {
    name: "Product 3",
    slug: "product3",

    seo: {
      title: "Product 3 | Listsoftware",
      description:
        "Connect your financial ecosystem with Product 3.",
    },

    hero: {
      title: "Connect Your Financial Ecosystem",
      description:
        "Product 3 connects financial systems and enables seamless operations.",
    },

    features: [
      "Connectivity",
      "Automation",
      "Scalability",
    ],
  },

  product4: {
    name: "Product 4",
    slug: "product4",

    seo: {
      title: "Product 4 | Listsoftware",
      description:
        "Build scalable financial operations with Product 4.",
    },

    hero: {
      title: "Build Scalable Financial Operations",
      description:
        "Product 4 helps businesses create efficient and scalable financial operations.",
    },

    features: [
      "Scalability",
      "Efficiency",
      "Integration",
    ],
  },

  product5: {
    name: "Product 5",
    slug: "product5",

    seo: {
      title: "Product 5 | Listsoftware",
      description:
        "Discover modern financial infrastructure with Product 5.",
    },

    hero: {
      title: "Modern Infrastructure For Your Business",
      description:
        "Product 5 delivers modern infrastructure designed for growing businesses.",
    },

    features: [
      "Infrastructure",
      "Security",
      "Performance",
    ],
  },

  product6: {
    name: "Product 6",
    slug: "product6",

    seo: {
      title: "Product 6 | Listsoftware",
      description:
        "Simplify and automate financial operations with Product 6.",
    },

    hero: {
      title: "Simplify Your Financial Operations",
      description:
        "Product 6 helps businesses automate repetitive financial processes and improve efficiency.",
    },

    features: [
      "Automation",
      "Workflow Management",
      "Analytics",
    ],
  },

} satisfies Record<string, Product>;
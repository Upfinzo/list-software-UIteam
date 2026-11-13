import type { InfrastructureItem } from "@/types/infrastructure";

/** Order matters: item N drives panel N in the illustration beside the list. */
export const infrastructureItems: InfrastructureItem[] = [
  {
    id: "api-platform",
    title: "A Common API Platform",
    description:
      "A flexible technology foundation that enables faster integration, smoother operations, and scalable banking experiences.",
    iconPath: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  },
  {
    id: "ai-enabled",
    title: "AI Enabled Banking Technology",
    description:
      "Introducing AI capabilities across newer modules to support intelligent operations, faster issue analysis, and more informed banking workflows.",
    iconPath: "M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z",
  },
  {
    id: "digital-experiences",
    title: "Smarter Digital Experiences",
    description:
      "Evolving mobile and digital banking capabilities with richer customer engagement, integrated services, and emerging opportunities such as BBPS.",
    iconPath:
      "M7 2.5h10a2.5 2.5 0 0 1 2.5 2.5v14a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5zM11 18h2",
  },
  {
    id: "partnerships",
    title: "Technology Partnerships",
    description:
      "Working with strategic technology partners to extend capabilities, accelerate innovation, and bring new banking services to institutions faster.",
    iconPath: "M8 12l3 3 5-5M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
  },
];

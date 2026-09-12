// types/navigation.ts
import type { ComponentType, SVGProps } from "react";

export interface MegaMenuItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuColumn[]; // 4 columns
}
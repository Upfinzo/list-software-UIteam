export interface MegaMenuImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  /** Kept temporarily so your existing Header component continues to work. */
  desc?: string;
  /** Use this new field when you render each clubbed service separately. */
  services?: string[];
  badge?: string;
  image?: MegaMenuImage;
}

export interface MegaMenu {
  items: MegaMenuItem[];
  /** Fallback preview when a product has no image. */
  image?: MegaMenuImage;
}

export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: MegaMenu;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  desc?: string;
  badge?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface MegaMenuImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface MegaMenu {
  items: MegaMenuItem[];
  image?: MegaMenuImage;
}

export interface NavigationItem {
  label: string;
  href: string;
  desc?:string;
  megaMenu?: MegaMenu;
}
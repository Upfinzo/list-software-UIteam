// types/navigation.ts
export interface MegaMenuItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MegaMenuPanelColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuPanelNote {
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface MegaMenuPanel {
  panelTitle: string;
  columns: MegaMenuPanelColumn[];
  note?: MegaMenuPanelNote;
}

export interface MegaMenuDirection {
  label: string;
  href: string;
  panel: MegaMenuPanel;
}

export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuDirection[];
}
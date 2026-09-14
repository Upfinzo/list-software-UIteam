// data/navigation.ts
import type { NavigationItem, MegaMenuColumn } from "@/types/navigation";
import {
  Landmark,
  PiggyBank,
  ArrowUpCircle,
  ArrowDownCircle,
  Building2,
  User,
  Trophy,
  Flag,
  Layers,
  Monitor,
  Sparkles,
  Cloud,
  BookOpen,
} from "lucide-react";

const productsMegaMenu: MegaMenuColumn[] = [
  {
    title: "Directions",
    items: [
      { icon: Landmark, label: "Banking", description: "Store, manage and move your funds safely.", href: "/products/banking" },
      { icon: PiggyBank, label: "Collect", description: "Gather payments for dues, donations, events & more.", href: "/products/collect" },
      { icon: ArrowUpCircle, label: "Spend", description: "Control member spending with digital debit cards.", href: "/products/spend" },
      { icon: ArrowDownCircle, label: "Earn", description: "Set up a passive fundraising program for consistent donations.", href: "/products/earn" },
    ],
  },
  {
    title: "Solutions for Banking",
    items: [
      { icon: Building2, label: "Fraternities & Sororities", description: "Manage chapter finances with ease.", href: "/solutions/fraternities" },
      { icon: User, label: "College Clubs", description: "Simple banking for student-run clubs.", href: "/solutions/college-clubs" },
      { icon: Trophy, label: "Sports Club", description: "Handle dues, gear, and travel funds.", href: "/solutions/sports-club" },
      { icon: Flag, label: "Booster Clubs", description: "Fundraise and spend with full visibility.", href: "/solutions/booster-clubs" },
    ],
  },
  {
    title: "More Solutions",
    items: [
      { icon: Layers, label: "Multi-chapter Orgs", description: "Bring every chapter into one view.", href: "/solutions/multi-chapter" },
      { icon: Monitor, label: "PTAs", description: "Keep school finances simple and visible.", href: "/solutions/ptas" },
      { icon: Sparkles, label: "Girl Scouts", description: "Make every fundraiser easier to manage.", href: "/solutions/girl-scouts" },
      { icon: Cloud, label: "Summer Camps", description: "Manage payments and spending in one place.", href: "/solutions/summer-camps" },
    ],
  },
  {
    title: "Need different solutions?",
    items: [
      { icon: BookOpen, label: "Agency Companies", description: "Build a tailored program for your organization.", href: "/solutions/agency-companies" },
      { icon: Cloud, label: "Winter Camps", description: "Stay organized through every season.", href: "/solutions/winter-camps" },
    ],
    description: "For teams of 300+ with advanced security, control, and support.",
    ctaLabel: "Talk to sales",
    ctaHref: "/contact",
    featured: true,
  },
];

export const navigation: NavigationItem[] = [
  { label: "Platform", href: "/" },
  { label: "Solutions", href: "/about" },
  { label: "Products", href: "/services", megaMenu: productsMegaMenu },
  { label: "Why LIST", href: "/products" },
  { label: "Institutions", href: "/contact" },
];
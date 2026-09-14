// data/navigation.ts
import type { NavigationItem, MegaMenuDirection } from "@/types/navigation";

const productsMegaMenu: MegaMenuDirection[] = [
  {
    label: "Banking",
    description: "Store, manage and move your funds safely.",
    href: "/products/banking",
    panel: {
      panelTitle: "Solutions for Banking",
      columns: [
        {
          title: "Organizations",
          items: [
            { label: "Fraternities & Sororities", href: "/solutions/banking/fraternities" },
            { label: "College Clubs", href: "/solutions/banking/college-clubs", badge: "NEW" },
            { label: "Sports Club", href: "/solutions/banking/sports-club" },
          ],
        },
        {
          title: "Groups",
          items: [
            { label: "Booster Clubs", href: "/solutions/banking/booster-clubs" },
            { label: "Agency Companies", href: "/solutions/banking/agency-companies" },
            { label: "Multi-chapter Orgs", href: "/solutions/banking/multi-chapter" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "PTAs", href: "/solutions/banking/ptas" },
            { label: "Girl Scouts", href: "/solutions/banking/girl-scouts" },
          ],
        },
        {
          title: "Camps",
          items: [
            { label: "Summer Camps", href: "/solutions/banking/summer-camps" },
            { label: "Winter Camps", href: "/solutions/banking/winter-camps" },
          ],
        },
      ],
   
    },
  },
  {
    label: "Collect",
    description: "Gather payments for dues, donations, events & more.",
    href: "/products/collect",
    panel: {
      panelTitle: "Solutions for Collecting",
      columns: [
        {
          title: "Organizations",
          items: [
            { label: "Collect for Fraternities & Sororities", href: "/solutions/collect/fraternities" },
            { label: "Collect for College Clubs", href: "/solutions/collect/college-clubs" },
            { label: "Collect for Sports Club", href: "/solutions/collect/sports-club" },
          ],
        },
        {
          title: "Groups",
          items: [
            { label: "Collect for Booster Clubs", href: "/solutions/collect/booster-clubs" },
            { label: "Collect for Agency Companies", href: "/solutions/collect/agency-companies" },
            { label: "Collect for Multi-chapter Orgs", href: "/solutions/collect/multi-chapter" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Collect for PTAs", href: "/solutions/collect/ptas" },
            { label: "Collect for Girl Scouts", href: "/solutions/collect/girl-scouts" },
          ],
        },
        {
          title: "Camps",
          items: [
            { label: "Collect for Summer Camps", href: "/solutions/collect/summer-camps" },
            { label: "Collect for Winter Camps", href: "/solutions/collect/winter-camps" },
          ],
        },
      ],
 
    },
  },
  {
    label: "Spend",
    description: "Control member spending with digital debit cards.",
    href: "/products/spend",
    panel: {
      panelTitle: "Solutions for Spending",
      columns: [
        {
          title: "Organizations",
          items: [
            { label: "Spend for Fraternities & Sororities", href: "/solutions/spend/fraternities" },
            { label: "Spend for College Clubs", href: "/solutions/spend/college-clubs" },
            { label: "Spend for Sports Club", href: "/solutions/spend/sports-club" },
          ],
        },
        {
          title: "Groups",
          items: [
            { label: "Spend for Booster Clubs", href: "/solutions/spend/booster-clubs" },
            { label: "Spend for Agency Companies", href: "/solutions/spend/agency-companies" },
            { label: "Spend for Multi-chapter Orgs", href: "/solutions/spend/multi-chapter" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Spend for PTAs", href: "/solutions/spend/ptas" },
            { label: "Spend for Girl Scouts", href: "/solutions/spend/girl-scouts" },
          ],
        },
        {
          title: "Camps",
          items: [
            { label: "Spend for Summer Camps", href: "/solutions/spend/summer-camps" },
            { label: "Spend for Winter Camps", href: "/solutions/spend/winter-camps" },
          ],
        },
      ],
  
    },
  },
  {
    label: "Earn",
    description: "Set up a passive fundraising program for consistent donations.",
    href: "/products/earn",
    panel: {
      panelTitle: "Solutions for Earning",
      columns: [
        {
          title: "Organizations",
          items: [
            { label: "Earn for Fraternities & Sororities", href: "/solutions/earn/fraternities" },
            { label: "Earn for College Clubs", href: "/solutions/earn/college-clubs" },
            { label: "Earn for Sports Club", href: "/solutions/earn/sports-club" },
          ],
        },
        {
          title: "Groups",
          items: [
            { label: "Earn for Booster Clubs", href: "/solutions/earn/booster-clubs" },
            { label: "Earn for Agency Companies", href: "/solutions/earn/agency-companies" },
            { label: "Earn for Multi-chapter Orgs", href: "/solutions/earn/multi-chapter" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Earn for PTAs", href: "/solutions/earn/ptas" },
            { label: "Earn for Girl Scouts", href: "/solutions/earn/girl-scouts" },
          ],
        },
        {
          title: "Camps",
          items: [
            { label: "Earn for Summer Camps", href: "/solutions/earn/summer-camps" },
            { label: "Earn for Winter Camps", href: "/solutions/earn/winter-camps" },
          ],
        },
      ],
   
    },
  },
];

export const navigation: NavigationItem[] = [
  { label: "Platform", href: "/" },
  { label: "Solutions", href: "/about" },
  { label: "Products", href: "/services", megaMenu: productsMegaMenu },
  { label: "Why LIST", href: "/products" },
  { label: "Institutions", href: "/contact" },
];
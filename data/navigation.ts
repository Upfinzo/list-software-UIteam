import type { NavigationItem, MegaMenu } from "@/types/navigation";

const productsMegaMenu: MegaMenu = {
  items: [
    { label: "Core Banking Solutions", href: "/products/core-banking-solutions" },
    { label: "Agency Banking", href: "/products/agency-banking" },
    { label: "Banking Operations", href: "/products/banking-operations" },
    { label: "Integration & APIs", href: "/products/integration-apis" },
    { label: "Digital Banking Suite", href: "/products/digital-banking-suite" },
    { label: "Conversational & Assisted Banking", href: "/products/conversational-assisted-banking" },
    { label: "Payment Processing & Automation", href: "/products/payment-processing-automation" },
    { label: "Bulk & Recurring Payments", href: "/products/bulk-recurring-payments" },
    { label: "Cheque Processing & Protection", href: "/products/cheque-processing-protection" },
    { label: "Merchant & QR Payments", href: "/products/merchant-qr-payments" },
    { label: "BANL", href: "/products/banl" },
    { label: "ISO 20022", href: "/products/iso-20022" },
    { label: "BBPS", href: "/products/bbps" },
    { label: "KYC, AML & Customer Verification", href: "/products/kyc-aml-customer-verification" },
    { label: "Compliance & Audit Management", href: "/products/compliance-audit-management" },
  ],
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
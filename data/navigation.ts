import type { NavigationItem, MegaMenu } from "@/types/navigation";

const productsMegaMenu: MegaMenu = {
  items: [
    {
      label: "Core Banking Solutions",
      href: "/products/core-banking-solutions",
      image: { src: "/images/common/menu-image.svg", alt: "Core Banking Solutions" },
    },
    {
      label: "Agency Banking",
      href: "/products/agency-banking",
      image: { src: "/images/common/menu-image1.svg", alt: "Agency Banking" },
    },
    {
      label: "Banking Operations",
      href: "/products/banking-operations",
      image: { src: "/images/common/menu-image.svg", alt: "Banking Operations" },
    },
    {
      label: "Integration & APIs",
      href: "/products/integration-apis",
      image: { src: "/images/common/menu-image1.svg", alt: "Integration & APIs" },
    },
    {
      label: "Digital Banking Suite",
      href: "/products/digital-banking-suite",
      desc: "Financial Mobile Banking, Non-Financial Mobile, Banking and Internet Banking",
      image: { src: "/images/common/menu-image.svg", alt: "Digital Banking Suite" },
    },
    {
      label: "Conversational & Assisted Banking",
      href: "/products/conversational-assisted-banking",
      desc: "WhatsApp Chatbot,SMS Mitra and e-Passbook",
      image: { src: "/images/common/menu-image1.svg", alt: "Conversational & Assisted Banking" },
    },
    {
      label: "Payment Processing & Automation",
      href: "/products/payment-processing-automation",
      desc: "RTGS Host-to-Host / EFT Manual and RTGS Host-to-Host / EFT Automation and APS Host-to-Host Automation",
      image: { src: "/images/common/menu-image.svg", alt: "Payment Processing & Automation" },
    },
    {
      label: "Bulk & Recurring Payments",
      href: "/products/bulk-recurring-payments",
      desc: "ABPS, DBTL, ECS, H2H NACH and PFMS Interface",
      image: { src: "/images/common/menu-image1.svg", alt: "Bulk & Recurring Payments" },
    },
    {
      label: "Cheque Processing & Protection",
      href: "/products/cheque-processing-protection",
      desc: "CTS Interface and Positive Pay System",
      image: { src: "/images/common/menu-image.svg", alt: "Cheque Processing & Protection" },
    },
    {
      label: "Merchant & QR Payments",
      href: "/products/merchant-qr-payments",
      desc: "One Stack QR Module and QR Merchant Application",
      image: { src: "/images/common/menu-image1.svg", alt: "Merchant & QR Payments" },
    },
    { label: "BANL(Beneficiary Account Name Lookup)", href: "/products/banl", image: { src: "/images/common/menu-image.svg", alt: "BANL" } },
    { label: "ISO 20022", href: "/products/iso-20022", image: { src: "/images/common/menu-image1.svg", alt: "ISO 20022" } },
    { label: "BBPS(Bharat Bill Payment System)", href: "/products/bbps", image: { src: "/images/common/menu-image.svg", alt: "BBPS" } },
    {
      label: "KYC, AML & Customer Verification",
      href: "/products/kyc-aml-customer-verification",
      desc: "AML, CKYC and LVF",
      image: { src: "/images/common/menu-image1.svg", alt: "KYC, AML & Customer Verification" },
    },
    {
      label: "Compliance & Audit Management",
      href: "/products/compliance-audit-management",
      desc: "Niyamitra and Audit Module",
      image: { src: "/images/common/menu-image.svg", alt: "Compliance & Audit Management" },
    },
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

export const enabledNavigationLinks = new Set(["/"]);
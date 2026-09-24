import { Images } from "@/assets/images/images";
import type { Product } from "@/types/product";

export const products = {
  coreBankingSolutions: {
    name: "Core Banking Solutions",
    slug: "core-banking-solutions",
    menu: {
      visible: true,
      order: 1,
      services: [
        "Custodian Core Banking Solution",
        "Frictionless Customer On-boarding (FCO)",
        "Credit Appraisal System",
        "Loan Document Printing Module",
        "Loan Recovery Management",
        "Investment Module",
        "LIST Report Builder",
        "Statement on Mail (Account & GST)",
        "Secure Printing Application (SPA)",
      ],
      image: { src: "/images/common/menu-image.svg", alt: "Core Banking Solutions" },
    },
    seo: {
      title: "Core Banking Solutions | Listsoftware",
      description: "A secure, scalable core banking platform for modern financial institutions.",
    },
    hero: {
      title: "Run Banking Operations From One Core Platform",
      description: "Manage accounts, deposits, lending, transactions, and customer records through one reliable banking foundation.",
    },
    features: ["Centralised account management", "Real-time transaction processing", "Configurable banking products"],
  },

  agencyBanking: {
    name: "Agency Banking",
    slug: "agency-banking",
    menu: {
      visible: true,
      order: 2,
      services: ["Doorstep (Agency) Banking", "Piggy Collection on Mobile"],
      image: { src: "/images/common/menu-image1.svg", alt: "Agency Banking" },
    },
    seo: {
      title: "Agency Banking | Listsoftware",
      description: "Extend secure banking services through a managed agent network.",
    },
    hero: {
      title: "Extend Banking Services Beyond the Branch",
      description: "Equip authorised agents to serve customers securely with controlled access, transaction tracking, and operational visibility.",
    },
    features: ["Agent onboarding and management", "Role-based access control", "Transaction monitoring"],
  },

  bankingOperations: {
    name: "Banking Operations",
    slug: "banking-operations",
    menu: {
      visible: true,
      order: 3,
      services: ["ATM Interface", "SMS Module", "SMS Mitra", "CMS – Customer Management System"],
      image: { src: "/images/common/menu-image.svg", alt: "Banking Operations" },
    },
    seo: {
      title: "Banking Operations | Listsoftware",
      description: "Streamline daily banking operations with structured workflows and clear controls.",
    },
    hero: {
      title: "Simplify Daily Banking Operations",
      description: "Coordinate operational tasks, approvals, exceptions, and service requests through efficient banking workflows.",
    },
    features: ["Workflow automation", "Operational dashboards", "Approval and exception controls"],
  },

  merchantQrPayments: {
    name: "Merchant & QR Payments",
    slug: "merchant-qr-payments",
    menu: {
      visible: true,
      order: 7,
      services: ["OneStack QR Module", "QR Merchant Application"],
      image: { src: Images.common.MerchantQRPayments, alt: "Merchant and QR Payments" },
    },
    seo: {
      title: "Merchant and QR Payments | Listsoftware",
      description: "Onboard merchants and enable secure QR-based payment acceptance.",
    },
    hero: {
      title: "Build a Connected Merchant QR Ecosystem",
      description: "Support merchant onboarding, QR activation, payment acceptance, and transaction visibility from one platform.",
    },
    features: ["Merchant onboarding", "QR creation and activation", "Payment acceptance monitoring"],
  },

  digitalBankingSuite: {
    name: "Digital Banking Suite",
    slug: "digital-banking-suite",
    menu: {
      visible: true,
      order: 4,
      services: [
        "Mobile Banking – Financial",
        "Mobile Banking – Non-Financial",
        "Internet Banking",
        "WhatsApp Chatbot Interface",
        "e-Passbook",
        "Advertisement Platform",
      ],
      image: { src: "/images/common/menu-image.svg", alt: "Digital Banking Suite" },
    },
    seo: {
      title: "Digital Banking Suite | Listsoftware",
      description: "Provide consistent mobile and internet banking experiences across customer channels.",
    },
    hero: {
      title: "Deliver Banking Experiences Across Every Digital Channel",
      description: "Give customers secure access to financial services, account information, and self-service journeys on mobile and web.",
    },
    features: ["Mobile banking journeys", "Internet banking portal", "Customer self-service tools"],
  },

  // Merged into "Digital Banking Suite" per the mapping table — hidden from the menu,
  // its page still exists at the same slug so nothing links out to a 404.
  conversationalAssistedBanking: {
    name: "Conversational & Assisted Banking",
    slug: "conversational-assisted-banking",
    menu: {
      visible: false,
      order: 6,
      services: ["WhatsApp Chatbot", "SMS Mitra", "e-Passbook"],
      image: { src: "/images/common/menu-image1.svg", alt: "Conversational and Assisted Banking" },
    },
    seo: {
      title: "Conversational and Assisted Banking | Listsoftware",
      description: "Serve customers through familiar messaging, SMS, and digital passbook channels.",
    },
    hero: {
      title: "Make Everyday Banking More Accessible",
      description: "Offer guided banking assistance and account access through messaging, SMS, and digital passbook experiences.",
    },
    features: ["WhatsApp customer journeys", "SMS banking notifications", "Digital passbook access"],
  },

  // Menu label overridden to "Payments" — this entry now represents the whole
  // Payments row from the mapping table, absorbing Bulk & Recurring Payments,
  // BANL, ISO 20022, and BBPS into its services list.
  paymentProcessingAutomation: {
    name: "Payment Processing & Automation",
    slug: "payment-processing-automation",
    menu: {
      visible: true,
      order: 5,
      label: "Payments",
      services: [
        "RTGS Host-to-Host / EFT Manual",
        "RTGS Host-to-Host / EFT Automation",
        "ABPS / DBTL / ECS / H2H NACH Manual",
        "APS Host-to-Host Automation Tool",
        "BANL – Beneficiary Account Name Lookup",
        "Migration to ISO 20022",
        "PFMS Interface",
        "BBPS (Bharat Bill Payment System)",
      ],
      image: {
        src: Images.common.paymentprocessingautomationImage,
        alt: "Payment Processing and Automation",
      },
    },
    seo: {
      title: "Payments | Listsoftware",
      description: "Automate payment processing, file exchange, host-to-host connectivity, and core banking integration.",
    },
    hero: {
      title: "Automate High-Volume Payment Operations",
      description: "Connect payment systems and core banking workflows to process payment files with speed, control, and traceability.",
    },
    features: ["RTGS and EFT workflows", "Host-to-host file exchange", "Automated payment processing"],
  },

  // Merged into "Payments" — hidden from the menu, page kept.
  bulkRecurringPayments: {
    name: "Bulk & Recurring Payments",
    slug: "bulk-recurring-payments",
    menu: {
      visible: false,
      order: 8,
      services: ["ABPS", "DBTL", "ECS", "H2H NACH", "PFMS Interface"],
      image: { src: "/images/common/menu-image1.svg", alt: "Bulk and Recurring Payments" },
    },
    seo: {
      title: "Bulk and Recurring Payments | Listsoftware",
      description: "Manage institutional, recurring, government-linked, and bulk payment workflows.",
    },
    hero: {
      title: "Process Recurring and Institutional Payments Reliably",
      description: "Support bulk payment programs, recurring mandates, and government-linked payment interfaces through integrated workflows.",
    },
    features: ["Bulk payment processing", "Recurring mandate workflows", "Government payment interfaces"],
  },

  chequeProcessingProtection: {
    name: "Cheque Processing & Protection",
    slug: "cheque-processing-protection",
    menu: {
      visible: true,
      order: 6,
      services: ["CTS Interface", "Positive Pay System (PPS)"],
      image: { src: "/images/common/menu-image.svg", alt: "Cheque Processing and Protection" },
    },
    seo: {
      title: "Cheque Processing and Protection | Listsoftware",
      description: "Support cheque clearing and payment verification with integrated protection controls.",
    },
    hero: {
      title: "Protect Every Cheque Payment Journey",
      description: "Combine cheque clearing connectivity with verification controls to reduce fraud risk and improve payment confidence.",
    },
    features: ["CTS connectivity", "Positive Pay verification", "Cheque payment controls"],
  },

  integrationApis: {
    name: "Integration & APIs",
    slug: "integration-apis",
    menu: {
      visible: true,
      order: 9,
      services: ["Interface to Sarvatra Mobile Application", "Common API Platform"],
      image: { src: Images.common.integrationapis, alt: "Integration and APIs" },
    },
    seo: {
      title: "Integration and APIs | Listsoftware",
      description: "Connect banking systems and third-party services through secure, scalable APIs.",
    },
    hero: {
      title: "Connect Your Banking Ecosystem",
      description: "Create reliable integrations between core systems, channels, payment networks, and partner platforms.",
    },
    features: ["API-led integrations", "Secure data exchange", "Third-party connectivity"],
  },

  // Merged into "Payments" — hidden from the menu, page kept.
  banl: {
    name: "BANL (Beneficiary Account Name Lookup)",
    slug: "banl",
    menu: {
      visible: false,
      order: 10,
      image: { src: "/images/common/menu-image.svg", alt: "Beneficiary Account Name Lookup" },
    },
    seo: {
      title: "Beneficiary Account Name Lookup | Listsoftware",
      description: "Validate beneficiary account details before a payment is submitted.",
    },
    hero: {
      title: "Verify Beneficiary Details Before Payment",
      description: "Help customers and operations teams confirm beneficiary account names to support accurate payment initiation.",
    },
    features: ["Beneficiary name lookup", "Pre-payment validation", "Improved payment accuracy"],
  },

  // Merged into "Payments" — hidden from the menu, page kept.
  iso20022: {
    name: "ISO 20022",
    slug: "iso-20022",
    menu: {
      visible: false,
      order: 11,
      image: { src: "/images/common/menu-image1.svg", alt: "ISO 20022" },
    },
    seo: {
      title: "ISO 20022 Migration | Listsoftware",
      description: "Prepare payment and messaging systems for ISO 20022 standards.",
    },
    hero: {
      title: "Move Confidently to ISO 20022",
      description: "Support structured financial messaging and a controlled transition to ISO 20022 standards.",
    },
    features: ["ISO 20022 message mapping", "Migration support", "Structured payment data"],
  },

  // Merged into "Payments" — hidden from the menu, page kept.
  bbps: {
    name: "BBPS (Bharat Bill Payment System)",
    slug: "bbps",
    menu: {
      visible: false,
      order: 12,
      image: { src: Images.common.BBPS, alt: "Bharat Bill Payment System" },
    },
    seo: {
      title: "Bharat Bill Payment System | Listsoftware",
      description: "Enable secure, convenient bill payment experiences through BBPS connectivity.",
    },
    hero: {
      title: "Offer Seamless Bill Payments Through BBPS",
      description: "Connect customers to a dependable bill payment experience with clear transaction tracking and service access.",
    },
    features: ["BBPS connectivity", "Bill payment workflows", "Transaction status visibility"],
  },

  // Merged into "Compliance" — hidden from the menu, page kept.
  kycAmlCustomerVerification: {
    name: "KYC, AML & Customer Verification",
    slug: "kyc-aml-customer-verification",
    menu: {
      visible: false,
      order: 13,
      services: ["AML", "CKYC", "LVF"],
      image: { src: "/images/common/menu-image1.svg", alt: "KYC AML and Customer Verification" },
    },
    seo: {
      title: "KYC AML and Customer Verification | Listsoftware",
      description: "Strengthen identity verification, KYC processing, and compliance controls.",
    },
    hero: {
      title: "Build Stronger Customer Verification Controls",
      description: "Support customer onboarding and ongoing compliance with integrated KYC, AML, and verification capabilities.",
    },
    features: ["KYC processing", "AML screening support", "Customer identity verification"],
  },

  // Menu label overridden to "Compliance" — absorbs KYC/AML & Customer
  // Verification into its services list, per the mapping table.
  complianceAuditManagement: {
    name: "Compliance & Audit Management",
    slug: "compliance-audit-management",
    menu: {
      visible: true,
      order: 8,
      label: "Compliance",
      services: [
        "Anti-Money Laundering (AML)",
        "Central KYC (CKYC)",
        "LIST Validation Framework (LVF)",
        "Niyamitra – Compliance & Audit Management Platform",
        "Audit Module",
        "2FA using Biometrics",
        "2FA using QR Code",
        "CR Rating",
        "LIF – LIST Interceptor Framework",
      ],
      image: { src: "/images/common/menu-image.svg", alt: "Compliance and Audit Management" },
    },
    seo: {
      title: "Compliance | Listsoftware",
      description: "Manage governance, audit observations, corrective actions, and compliance workflows.",
    },
    hero: {
      title: "Turn Compliance Activities Into Managed Workflows",
      description: "Track audits, observations, actions, and governance requirements through one organised management system.",
    },
    features: ["Audit observation tracking", "Corrective action workflows", "Compliance oversight"],
  },
} satisfies Record<string, Product>;

export function getProductBySlug(slug: string) {
  return Object.values(products).find((product) => product.slug === slug);
}
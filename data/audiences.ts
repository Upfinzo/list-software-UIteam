import {
  Banknote,
  Building2,
  CreditCard,
  Network,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

import type { Audience } from "@/types/audience";

/** The category strip that sits between the heading and the intro copy. */
export const audienceCategories = [
  "Banks",
  "Financial Institutions",
  "Credit & Lending",
  "Digital Banking",
];

/**
 * Array order is the card grid's reading order (two columns, top to bottom).
 * `ringPosition` places the same item in the wheel, which runs in a different
 * sequence — see the design.
 */
export const audiences: Audience[] = [
  {
    id: "banks",
    label: "Banks",
    description:
      "Build on a dependable core banking foundation with connected solutions for accounts, deposits, lending, transactions, branch operations, digital channels, and regulatory reporting.",
    icon: Building2,
    ringPosition: 1,
  },
  {
    id: "banking-operations",
    label: "Banking Operations",
    description:
      "Streamline customer service, issue resolution, workflows, and operational control efficiently.",
    icon: Workflow,
    ringPosition: 2,
  },
  {
    id: "financial-institutions",
    label: "Financial Institutions",
    description:
      "Extend financial operations with core banking, credit appraisal, compliance, transaction processing, and operational automation designed around institutional requirements.",
    icon: Banknote,
    ringPosition: 3,
  },
  {
    id: "compliance-risk-teams",
    label: "Compliance & Risk Teams",
    description:
      "Strengthen compliance controls, manage risks, monitor activities, and maintain regulatory readiness.",
    icon: ShieldCheck,
    ringPosition: 4,
  },
  {
    id: "digital-banking-businesses",
    label: "Digital Banking Businesses",
    description:
      "Extend banking beyond the branch through digital channels, customer services, payment connectivity, and integrated banking experiences.",
    icon: Smartphone,
    ringPosition: 5,
  },
  {
    id: "management-business-teams",
    label: "Management & Business Teams",
    description:
      "Enable better decisions with financial visibility, operational insight, and strategic control.",
    icon: Users,
    ringPosition: 0,
  },
  {
    id: "it-technology-teams",
    label: "IT & Technology Teams",
    description:
      "Empower technology teams with scalable, secure, integrated banking infrastructure solutions.",
    icon: Network,
    ringPosition: 7,
  },
  {
    id: "credit-financing-businesses",
    label: "Credit & Financing Businesses",
    description:
      "Drive efficient financing operations with connected processes for credit evaluation, loan administration, documentation, recovery, and risk oversight.",
    icon: CreditCard,
    ringPosition: 6,
  },
];

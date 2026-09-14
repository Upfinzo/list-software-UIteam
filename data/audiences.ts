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
      "Core banking, branch operations and accounting running on one connected platform.",
    icon: Building2,
    ringPosition: 1,
  },
  {
    id: "banking-operations",
    label: "Banking Operations",
    description:
      "Day-to-day processing, clearing and settlement handled through controlled workflows.",
    icon: Workflow,
    ringPosition: 2,
  },
  {
    id: "financial-institutions",
    label: "Financial Institutions",
    description:
      "Deposits, remittances and treasury supported across every operating entity.",
    icon: Banknote,
    ringPosition: 3,
  },
  {
    id: "compliance-risk-teams",
    label: "Compliance & Risk Teams",
    description:
      "AML, CKYC, audit trails and statutory reporting built into the core.",
    icon: ShieldCheck,
    ringPosition: 4,
  },
  {
    id: "digital-banking-business",
    label: "Digital Banking Business",
    description:
      "Mobile, internet and WhatsApp banking delivered from the same banking core.",
    icon: Smartphone,
    ringPosition: 5,
  },
  {
    id: "management-business-teams",
    label: "Management & Business Teams",
    description:
      "Reporting and business intelligence for operational and management oversight.",
    icon: Users,
    ringPosition: 0,
  },
  {
    id: "it-technology-teams",
    label: "IT & Technology Teams",
    description:
      "APIs, middleware and integration tooling that keep connected systems in step.",
    icon: Network,
    ringPosition: 7,
  },
  {
    id: "credit-financing-businesses",
    label: "Credit & Financing Businesses",
    description:
      "LIST Software provides core banking capabilities that support the operational needs of lending and credit.",
    icon: CreditCard,
    ringPosition: 6,
  },
];

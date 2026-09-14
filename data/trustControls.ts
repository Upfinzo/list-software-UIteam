import type { TrustControl } from "@/types/trustControl";

export const trustControls: TrustControl[] = [
  {
    id: "01",
    title: "Role-Based Access",
    description:
      "Control access based on users, responsibilities and banking functions.",
  },
  {
    id: "02",
    title: "Maker-Checker Workflows",
    description:
      "Support controlled authorisation for critical banking activities.",
  },
  {
    id: "03",
    title: "Transaction Audit Trails",
    description:
      "Maintain traceability across supported transactions and workflows.",
  },
  {
    id: "04",
    title: "Configurable Validation",
    description:
      "Apply validation rules to help prevent incorrect processing.",
  },
  {
    id: "05",
    title: "Exception Handling",
    description: "Track and manage exceptions across operational workflows.",
  },
  {
    id: "06",
    title: "Secure Authentication",
    description: "Support QR-based and biometric 2FA mechanisms.",
  },
  {
    id: "07",
    title: "Controlled Document Workflows",
    description:
      "Secure printing and document workflows protect sensitive information.",
  },
  {
    id: "08",
    title: "Reporting & Visibility",
    description:
      "Reporting capabilities for operational and management oversight.",
  },
];

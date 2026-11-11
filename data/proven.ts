import type { ProvenChip, ProvenStat } from "@/types/proven";

export const provenStats: ProvenStat[] = [
  { id: "years", value: "20", suffix: "+", label: ["Years in banking", "technology"], rollDelay: 0, highlightDelay: 0 },
  { id: "institutions", value: "100", suffix: "+", label: ["Financial", "institutions"], rollDelay: 0.5, highlightDelay: 3 },
  { id: "branches", value: "800", suffix: "+", label: ["Connected", "branches"], rollDelay: 1, highlightDelay: 6 },
];

export const provenChips: ProvenChip[] = [
  {
    id: "technology",
    title: "Proven Banking Technology",
    caption: "Custodian CBS in daily use",
    iconPaths: ["M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5"],
    iconGradient: "linear-gradient(145deg,#9AF0D6,#56E6BD 45%,#14A37F)",
    position: { left: "9%", top: "30px" },
    enterDelay: 0.2,
    floatDuration: 7,
    floatDelay: 0,
  },
  {
    id: "domain",
    title: "Deep Domain Expertise",
    caption: "20+ years in banking",
    iconPaths: ["M4 19V9l8-5 8 5v10", "M9 19v-5h6v5"],
    iconGradient: "linear-gradient(145deg,#B79AF0,#8957E0 50%,#5B34B8)",
    position: { right: "8%", top: "10px" },
    enterDelay: 0.4,
    floatDuration: 8.5,
    floatDelay: 1,
  },
  {
    id: "partnerships",
    title: "Long-Term Partnerships",
    caption: "100+ financial institutions",
    iconPaths: ["M8 12l3 3 5-5", "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"],
    iconGradient: "linear-gradient(145deg,#F8D88F,#F2BD4A 50%,#C58A12)",
    position: { left: "17%", top: "200px" },
    enterDelay: 0.6,
    floatDuration: 9,
    floatDelay: 0.5,
  },
  {
    id: "scalable",
    title: "Scalable Business Solutions",
    caption: "800+ branches connected",
    iconPaths: ["M4 20V14M10 20V9M16 20V5M22 20H2"],
    iconGradient: "linear-gradient(145deg,#F9A595,#F2624A 50%,#C23A24)",
    position: { right: "15%", top: "190px" },
    enterDelay: 0.8,
    floatDuration: 7.5,
    floatDelay: 1.6,
  },
];

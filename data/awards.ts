import { Images } from "@/assets/images/images";
import type { Award } from "@/types/award";

const { awards } = Images.home;

export const awardsList: Award[] = [
  {
    id: "financial-management",
    title: "Best Financial Management",
    issuer: "Award by TLC",
    image: awards.trophy,
    accent: "#0548D5",
    topWash: "linear-gradient(180deg,#DCEBFB 0%,rgba(255,255,255,0) 100%)",
    swingDelay: 0,
    tiltY: 16,
    tiltZ: -5,
  },
  {
    id: "hr-practices",
    title: "Best HR Practices Award",
    issuer: "Award by TLC",
    image: awards.star,
    accent: "#C23A24",
    topWash: "linear-gradient(180deg,#FDEBE5 0%,rgba(255,255,255,0) 100%)",
    swingDelay: 0.6,
    tiltY: 6,
    tiltZ: 4,
    low: true,
  },
  {
    id: "business-excellence",
    title: "Business Excellence Award",
    issuer: "Award by TLC",
    image: awards.medal,
    accent: "#6A3BC2",
    topWash: "linear-gradient(180deg,#ECE4FC 0%,rgba(255,255,255,0) 100%)",
    swingDelay: 1.2,
    tiltY: -6,
    tiltZ: -4,
  },
  {
    id: "iso",
    title: "ISO Certification",
    issuer: "ISO",
    image: awards.iso,
    accent: "#0E8F6E",
    topWash: "linear-gradient(180deg,#DDF8EF 0%,rgba(255,255,255,0) 100%)",
    swingDelay: 1.8,
    tiltY: -16,
    tiltZ: 5,
    low: true,
  },
];

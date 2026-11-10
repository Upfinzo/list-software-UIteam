import { Images } from "@/assets/images/images";
import type { FloatingFace, Testimonial } from "@/types/testimonial";

const { faces } = Images.home.testimonials;

export const testimonials: Testimonial[] = [
  {
    id: "samarth",
    quote:
      "We are using Distributed Core Banking System developed and supplied by LIST Software Pvt Ltd Sangli. We also have setup of 6 ATM’s having national connectivity to BANKS network.",
    name: "Samarth Sahakari Bank Ltd",
    place: "Solapur",
    face: faces.face9,
  },
  {
    id: "chinchwad",
    quote:
      "We are pleased to certify that recently we have migrated Software Implemented by AutoSoft to LIST Software Pvt. Ltd. (Custodian – ‘Unique Banking Solution’).",
    name: "Chinchwad Sahakari Bank Maryadit",
    place: "Pimpri",
    face: faces.face7,
  },
];

export const floatingFaces: FloatingFace[] = [
  { id: "f1", src: faces.face1, size: 64, position: { left: "9%", top: "14%" }, burstDelay: 0.55, fromX: 399, fromY: 108 },
  { id: "f2", src: faces.face2, size: 56, position: { left: "22%", top: "62%" }, burstDelay: 0.63, fromX: 265, fromY: -80 },
  { id: "f3", src: faces.face3, size: 52, position: { left: "3%", top: "58%" }, burstDelay: 0.71, fromX: 468, fromY: -62 },
  { id: "f4", src: faces.face4, size: 62, position: { right: "8%", top: "10%" }, burstDelay: 0.79, fromX: -410, fromY: 125 },
  { id: "f5", src: faces.face5, size: 58, position: { right: "22%", top: "60%" }, burstDelay: 0.87, fromX: -264, fromY: -73 },
  { id: "f6", src: faces.face6, size: 50, position: { right: "2%", top: "56%" }, burstDelay: 0.95, fromX: -480, fromY: -53 },
  { id: "f7", src: faces.face8, size: 46, position: { left: "33%", top: "6%" }, burstDelay: 1.03, fromX: 153, fromY: 149 },
];

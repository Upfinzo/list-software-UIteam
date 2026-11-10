import { Images } from "@/assets/images/images";
import type { ClientLogo } from "@/types/client";

const { clients } = Images.home;

/** Top marquee row — drifts right to left. */
export const clientsRowOne: ClientLogo[] = [
  { id: "panchganga", name: "Panchganga Bank", src: clients.panchganga, width: 193.3, height: 40 },
  { id: "ichalkaranji", name: "Ichalkaranji Co-op Bank", src: clients.ichalkaranji, width: 31.8, height: 46, showName: true },
  { id: "lokmangal", name: "Lokmangal Co-operative Bank", src: clients.lokmangal, width: 171, height: 40 },
  { id: "sangli", name: "Sangli Urban Co-op Bank", src: clients.sangli, width: 38.3, height: 46, showName: true },
  { id: "pimpri-chinchwad", name: "Pimpri-Chinchwad Sahakari Bank", src: clients.pimpriChinchwad, width: 240, height: 40 },
  { id: "ajara", name: "The Ajara Urban Co-op Bank", src: clients.ajara, width: 48.3, height: 46, showName: true },
  { id: "samarth", name: "Samarth Sahakari Bank, Solapur", src: clients.samarth, width: 199.3, height: 40 },
];

/** Bottom marquee row — drifts left to right. */
export const clientsRowTwo: ClientLogo[] = [
  { id: "rajapur", name: "Rajapur Urban Co-op Bank", src: clients.rajapur, width: 179, height: 30 },
  { id: "manorama", name: "Manorama Co-op Bank", src: clients.manorama, width: 45.6, height: 46, showName: true },
  { id: "jankalyan", name: "Jankalyan Nagari Sahakari Patsanstha", src: clients.jankalyan, width: 145.3, height: 40 },
  { id: "mayani", name: "The Mayani Urban Co-op Bank", src: clients.mayani, width: 52.5, height: 46, showName: true },
  { id: "shiv-daulat", name: "Shiv Daulat Sahakari Bank", src: clients.shivDaulat, width: 127, height: 40 },
  { id: "sangola", name: "Sangola Urban Co-op Bank", src: clients.sangola, width: 259.2, height: 30 },
];

import type { ComponentType, SVGProps } from "react";

export interface Audience {
  id: string;
  label: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * Seat in the ring: 0-7 clockwise, starting with the wedge immediately
   * anticlockwise of twelve o'clock. Kept separate from array order because
   * the card grid reads in a different sequence to the ring.
   */
  ringPosition: number;
}

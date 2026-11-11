export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  place: string;
  /** Path into the `Images.home.testimonials.faces` asset map. */
  face: string;
}

/** A small face floating over the map; it bursts out from the centre face. */
export interface FloatingFace {
  id: string;
  src: string;
  /** Rendered diameter in px, ring excluded. */
  size: number;
  /** Where it settles inside the band. One of left/right, plus top. */
  position: { left?: string; right?: string; top: string };
  /** Seconds before this face leaves the centre. */
  burstDelay: number;
  /** Starting offset from its final spot, in px — it flies in from the centre. */
  fromX: number;
  fromY: number;
}

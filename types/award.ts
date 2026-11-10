export interface Award {
  id: string;
  title: string;
  /** Who gave it — printed in small caps under the title. */
  issuer: string;
  /** Path into the `Images.home.awards` asset map. */
  image: string;
  /** Colour of the issuer line. */
  accent: string;
  /** Tinted wash behind the trophy, fading to white. */
  topWash: string;
  /** Seconds before the trophy's swing starts, so the four never sway in step. */
  swingDelay: number;
  /** Tilt each card starts from before settling flat (degrees). */
  tiltY: number;
  tiltZ: number;
  /** Cards 2 and 4 sit lower on desktop for the staggered look. */
  low?: boolean;
}

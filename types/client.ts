export interface ClientLogo {
  id: string;
  /** Full institution name — used for alt text and the visible caption. */
  name: string;
  /** Path into the `Images.home.clients` asset map. */
  src: string;
  /** Rendered size in px (the design's display size, not the source size). */
  width: number;
  height: number;
  /**
   * Emblem-only logos carry no wordmark, so the design prints the bank's name
   * beside them. Wordmark logos already read as text and skip the caption.
   */
  showName?: boolean;
}

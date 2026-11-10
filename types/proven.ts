export interface ProvenStat {
  id: string;
  /** Digits only — each one gets its own rolling odometer wheel. */
  value: string;
  suffix: string;
  /** Label lines, broken as the design breaks them. */
  label: [string, string];
  /** Seconds before this stat's digits start rolling. */
  rollDelay: number;
  /** Seconds before this stat first lights up in the highlight cycle. */
  highlightDelay: number;
}

/** A glass chip floating over the dome. */
export interface ProvenChip {
  id: string;
  title: string;
  caption: string;
  /** SVG path data on a 24x24 grid, drawn as a white outline icon. */
  iconPaths: string[];
  iconGradient: string;
  /** Anchored from the left or the right edge, plus a top offset. */
  position: { left?: string; right?: string; top: string };
  /** Seconds before the chip fades in. */
  enterDelay: number;
  /** Idle bob: duration and offset, in seconds. */
  floatDuration: number;
  floatDelay: number;
}

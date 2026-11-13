/* ------------------------------------------------------------------
   The six animated 3D objects on the "Designed for the Way Your
   Institution Operates" cards. Styling lives in globals.css (inst3d-*),
   because every face is positioned in 3D with translateZ.
------------------------------------------------------------------ */

export type InstitutionObjectKind =
  | "cube"
  | "coin"
  | "phone"
  | "plates"
  | "gyro"
  | "shield";

const SHIELD_PATH =
  "M80 8 L148 32 V90 C148 136 118 164 80 174 C42 164 12 136 12 90 V32Z";

const COIN_DEPTHS = [-6, -4, -2, 0, 2, 4, 6];
const PHONE_DEPTHS = [-5, -4, -3, -2, -1];
const SHIELD_DEPTHS = [-8, -6, -4, -2];

function Object3D({ kind }: { readonly kind: InstitutionObjectKind }) {
  switch (kind) {
    case "cube":
      return (
        <div className="inst3d-cube">
          <i className="f1" />
          <i className="f2" />
          <i className="f3" />
          <i className="f4" />
          <i className="f5" />
          <i className="f6" />
        </div>
      );
    case "coin":
      return (
        <div className="inst3d-coin">
          {COIN_DEPTHS.map((z) => (
            <i key={z} style={{ transform: `translateZ(${z}px)` }} />
          ))}
          <b className="front">₹</b>
          <b className="back">₹</b>
        </div>
      );
    case "phone":
      return (
        <div className="inst3d-phone">
          {PHONE_DEPTHS.map((z) => (
            <i key={z} style={{ transform: `translateZ(${z}px)` }} />
          ))}
          <b>
            <span />
            <span />
            <span className="s" />
          </b>
        </div>
      );
    case "plates":
      return (
        <div className="inst3d-plates">
          <i className="p1" />
          <i className="p2" />
          <i className="p3" />
        </div>
      );
    case "gyro":
      return (
        <div className="inst3d-gyro">
          <i className="r1" />
          <i className="r2" />
          <i className="r3" />
          <b />
        </div>
      );
    case "shield":
      return (
        <div className="inst3d-shield">
          {SHIELD_DEPTHS.map((z) => (
            <svg
              key={z}
              viewBox="0 0 160 180"
              style={{ transform: `translateZ(${z}px)` }}
            >
              <path d={SHIELD_PATH} fill="#0E8F6E" />
            </svg>
          ))}
          <svg viewBox="0 0 160 180">
            <defs>
              <linearGradient id="inst3d-shield-face" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#BDF3E2" />
                <stop offset="1" stopColor="#14A37F" />
              </linearGradient>
            </defs>
            <path d={SHIELD_PATH} fill="url(#inst3d-shield-face)" />
            <path
              d="M54 92 L72 110 L108 72"
              stroke="#FFFFFF"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
  }
}

/** Objects that stand on a floor get the soft shadow; the plates float freely. */
const HAS_SHADOW: Record<InstitutionObjectKind, boolean> = {
  cube: true,
  coin: true,
  phone: true,
  plates: false,
  gyro: true,
  shield: true,
};

export default function InstitutionObject({
  kind,
}: {
  readonly kind: InstitutionObjectKind;
}) {
  return (
    <div
      aria-hidden="true"
      className="inst3d-vis relative mb-[18px] flex h-[112px] flex-none items-center justify-center"
    >
      <div className="inst3d-stage">
        <Object3D kind={kind} />
        {HAS_SHADOW[kind] && <span className="inst3d-shadow" />}
      </div>
    </div>
  );
}

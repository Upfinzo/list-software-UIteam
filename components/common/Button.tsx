import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantClass = {
  primary:
    "brand-gradient-bg brand-gradient-shadow text-white hover:brightness-110 focus-visible:outline-brand",
  secondary:
    "border border-hairline bg-white text-brand-ink hover:bg-gray-50 focus-visible:outline-brand-ink",
} as const;

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  onClick,
  disabled,
  className = "",
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className}`.trim();

  if (href) {
    // onClick is forwarded here too, so a link can still run side effects —
    // closing the mobile menu, for one.
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

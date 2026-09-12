import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  onClick,
  disabled
}: ButtonProps) {
  const className = `
    inline-flex items-center justify-center rounded-full px-6 py-3
    text-sm font-semibold transition shadow-[0px_8px_15px_-3px_#3148c0c9] 
    ${
      variant === "primary"
        ? "bg-[linear-gradient(135deg,#032683_0%,#1A5BB8_55%,#56B0E6_100%)] text-white hover:bg-gray-800"
        : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 "
    }
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
  type={type}
  onClick={onClick}
  disabled={disabled}
  className={className}
>
  {children}
</button>
  );
}
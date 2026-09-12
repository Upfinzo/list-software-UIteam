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
    inline-flex items-center justify-center rounded-lg px-6 py-3
    text-sm font-semibold transition
    ${
      variant === "primary"
        ? "bg-black text-white hover:bg-gray-800"
        : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
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
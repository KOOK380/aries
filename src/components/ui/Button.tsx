import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(124,58,237,0.65)]",
  secondary:
    "border border-surface-border bg-white text-surface-heading hover:bg-surface-border/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  ghost:
    "text-surface-heading hover:text-brand-primary dark:text-white dark:hover:text-brand-secondary",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none";

/* ---------- Link button (preferred for navigation) ---------- */
interface ButtonLinkProps extends BaseButtonProps {
  href: string;
  withArrow?: boolean;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = false,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variantMap[variant], sizeMap[size], className)}>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/* ---------- Button with optional trailing arrow ---------- */
interface ButtonProps extends BaseButtonProps {
  withArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = false,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(base, variantMap[variant], sizeMap[size], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}

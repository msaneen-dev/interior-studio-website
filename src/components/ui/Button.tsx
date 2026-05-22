import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-inverse-surface hover:shadow-[0_4px_20px_rgba(28,26,24,0.15)] active:scale-[0.99]",
  secondary:
    "border border-primary/25 text-primary bg-surface/50 hover:bg-accent-soft hover:border-accent/40",
  ghost:
    "border-b border-accent/60 pb-1 text-primary hover:border-accent hover:text-accent !px-0 !py-0",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center font-label-caps tracking-[0.12em] transition-all duration-300 ease-out",
        variant !== "ghost" && "px-9 py-3.5 text-[0.6875rem]",
        variant === "primary" && "md:px-10 md:py-4",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

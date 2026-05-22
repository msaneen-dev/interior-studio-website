import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "elevated" | "inverse";
  fullWidth?: boolean;
}

const toneStyles = {
  default: "bg-surface",
  muted: "tone-muted",
  elevated: "tone-elevated",
  inverse: "tone-inverse text-on-primary",
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  tone = "default",
  fullWidth = false,
}: SectionProps) {
  const content = fullWidth ? (
    children
  ) : (
    <Container className={containerClassName}>{children}</Container>
  );

  return (
    <section
      id={id}
      className={cn(
        "py-section-sm md:py-section-gap",
        toneStyles[tone],
        className
      )}
    >
      {content}
    </section>
  );
}

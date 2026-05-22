import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionGridProps {
  children: ReactNode;
  className?: string;
}

/** Consistent 12-column grid used across all sections */
export function SectionGrid({ children, className }: SectionGridProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-y-block md:gap-gutter", className)}>
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  inverse?: boolean;
}

export function Eyebrow({ children, className, inverse }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-eyebrow block mb-stack",
        inverse ? "text-on-primary/55" : "text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

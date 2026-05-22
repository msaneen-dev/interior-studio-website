import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ProseProps {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
}

export function Prose({ children, className, size = "md" }: ProseProps) {
  return (
    <div
      className={cn(
        "text-prose space-y-stack",
        size === "lg" ? "font-body-lg" : "font-body-md",
        className
      )}
    >
      {children}
    </div>
  );
}

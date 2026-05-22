import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  inverse?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  inverse,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <FadeIn
      className={cn(
        "mb-14 md:mb-16",
        isCenter && "mx-auto max-w-2xl text-center",
        !isCenter && "max-w-xl",
        className
      )}
    >
      <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-headline-lg",
          inverse ? "text-on-primary" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-stack font-body-md text-prose max-w-md leading-relaxed",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}

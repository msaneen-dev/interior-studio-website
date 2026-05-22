import { cn } from "@/lib/cn";
import { brand } from "@/data/content";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  iconClassName?: string;
}

export function Logo({
  className,
  showWordmark = true,
  iconClassName,
}: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3 md:gap-4", className)}>
      <img
        alt={`${brand.name} logo`}
        className={cn("h-7 w-auto md:h-8", iconClassName)}
        src={brand.logoSrc}
      />
      {showWordmark && (
        <span className="font-serif text-lg md:text-xl tracking-tight text-primary">
          {brand.name}
        </span>
      )}
    </span>
  );
}

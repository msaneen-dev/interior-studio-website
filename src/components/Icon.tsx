import React from "react";
import {
  Sofa,
  DraftingCompass,
  Box,
  Building2,
  Key,
  MessageSquare,
  Palette,
  Leaf,
  Award,
  Clock,
  Menu,
  X,
  ArrowRight,
  Globe,
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  LucideProps
} from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

function SocialSvg({
  children,
  size = 24,
  className,
  strokeWidth = 1.5,
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const { className, strokeWidth } = props;
  const size =
    typeof props.size === "number" ? props.size : props.size ? Number(props.size) : 24;
  const sw =
    typeof strokeWidth === "number"
      ? strokeWidth
      : strokeWidth
        ? Number(strokeWidth)
        : 1.5;
  switch (name) {
    case "Sofa":
      return <Sofa {...props} />;
    case "DraftingCompass":
      return <DraftingCompass {...props} />;
    case "Box":
      return <Box {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Key":
      return <Key {...props} />;
    case "MessageSquare":
      return <MessageSquare {...props} />;
    case "Palette":
      return <Palette {...props} />;
    case "Leaf":
      return <Leaf {...props} />;
    case "Award":
      return <Award {...props} />;
    case "Clock":
      return <Clock {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "X":
      return <X {...props} />;
    case "ArrowRight":
      return <ArrowRight {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "Play":
      return <Play {...props} />;
    case "ChevronLeft":
      return <ChevronLeft {...props} />;
    case "ChevronRight":
      return <ChevronRight {...props} />;
    case "ChevronDown":
      return <ChevronDown {...props} />;
    case "Phone":
      return <Phone {...props} />;
    case "Mail":
      return <Mail {...props} />;
    case "MapPin":
      return <MapPin {...props} />;
    case "Instagram":
      return (
        <SocialSvg size={size} className={className} strokeWidth={sw}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </SocialSvg>
      );
    case "Linkedin":
      return (
        <SocialSvg size={size} className={className} strokeWidth={sw}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </SocialSvg>
      );
    case "Pinterest":
      return (
        <SocialSvg size={size} className={className} strokeWidth={sw}>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.87 6.39 9.33-.09-.78-.17-1.98.04-2.83.18-.77 1.17-4.92 1.17-4.92s-.3-.6-.3-1.49c0-1.39.81-2.43 1.81-2.43.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.82 1.48 1.82 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.18-4.08-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.78.74 2.28a.3.3 0 0 1-.07.28l-.27 1.05c-.04.17-.13.21-.3.13-1.12-.52-1.82-2.15-1.82-3.47 0-2.82 2.05-5.41 5.92-5.41 3.11 0 5.52 2.21 5.52 5.17 0 3.09-1.95 5.58-4.66 5.58-.91 0-1.77-.47-2.06-1.03l-.56 2.14c-.2.78-.75 1.75-1.12 2.35.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </SocialSvg>
      );
    default:
      return null;
  }
};

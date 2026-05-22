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
  LucideProps
} from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
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
    default:
      return null;
  }
};

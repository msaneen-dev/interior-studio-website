"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  animateOnMount?: boolean;
  /** Reduced motion for subtle elements */
  subtle?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.65,
  variants,
  animateOnMount = false,
  subtle = false,
}: FadeInProps) {
  const defaultVariants: Variants = subtle
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateOnMount ? "visible" : undefined}
      whileInView={animateOnMount ? undefined : "visible"}
      viewport={
        animateOnMount ? undefined : { once: true, margin: "-48px" }
      }
      variants={variants ?? defaultVariants}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

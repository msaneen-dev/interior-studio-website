"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOut, scaleIn } from "@/lib/motion";

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  objectPosition?: string;
  priority?: boolean;
}

export function ImageFrame({
  src,
  alt,
  className,
  aspectClass = "aspect-[4/5]",
  objectPosition = "center center",
}: ImageFrameProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={scaleIn}
      transition={{ duration: 0.9, ease: easeOut }}
      className={cn(
        "relative overflow-hidden bg-surface-container canvas-shadow interactive-lift group",
        aspectClass,
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="image-reveal absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
    </motion.div>
  );
}

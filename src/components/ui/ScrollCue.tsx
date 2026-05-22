"use client";

import { motion } from "framer-motion";
import { studioTheme } from "@/lib/studio-theme";

interface ScrollCueProps {
  href: string;
  label?: string;
  className?: string;
}

export function ScrollCue({
  href,
  label = "Scroll Down",
  className = "hidden lg:flex",
}: ScrollCueProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative z-20 flex-col items-center ${className}`}
      aria-label={`Scroll to ${href.replace("#", "")}`}
    >
      <div
        className="relative flex flex-col items-center px-10 pt-6"
        style={{ borderTop: `1px solid ${studioTheme.border}` }}
      >
        <div
          className="absolute -top-px left-1/2 h-8 w-24 -translate-x-1/2 border-l border-r"
          style={{ borderColor: studioTheme.border }}
          aria-hidden
        />
        <span
          className="mb-3 font-label-caps text-[0.625rem] tracking-[0.2em]"
          style={{ color: studioTheme.goldMuted }}
        >
          {label}
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border pt-1.5"
          style={{ borderColor: studioTheme.gold }}
        >
          <span
            className="block h-1.5 w-0.5 rounded-full"
            style={{ backgroundColor: studioTheme.gold }}
          />
        </motion.div>
      </div>
    </motion.a>
  );
}

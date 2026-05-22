"use client";

import { motion } from "framer-motion";
import { ScrollCue } from "@/components/ui/ScrollCue";

export function HeroScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="absolute bottom-0 left-1/2 z-20 hidden -translate-x-1/2 lg:block"
    >
      <ScrollCue href="#about" className="flex" />
    </motion.div>
  );
}

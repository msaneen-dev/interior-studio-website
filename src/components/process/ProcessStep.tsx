"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
}

export function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeLuxury }}
      className="relative space-y-3 sm:space-y-4"
    >
      <span
        className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl"
        style={{ color: "rgba(201, 169, 98, 0.15)" }}
      >
        {step.stepNumber}
      </span>
      <h3
        className="font-serif text-xl font-medium tracking-tight sm:text-[1.35rem]"
        style={{ color: studioTheme.text }}
      >
        {step.title}
      </h3>
      <p
        className="font-sans text-[0.8125rem] leading-[1.7] sm:text-sm"
        style={{ color: studioTheme.textMuted }}
      >
        {step.description}
      </p>
    </motion.article>
  );
}

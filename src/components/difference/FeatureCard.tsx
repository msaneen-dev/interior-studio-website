"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Icon } from "@/components/Icon";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easeLuxury }}
      className="group flex flex-col gap-4 border p-6 transition-all duration-500 hover:border-[rgba(201,169,98,0.35)] sm:p-7 lg:p-8"
      style={{
        backgroundColor: "rgba(18, 17, 16, 0.6)",
        borderColor: studioTheme.borderSubtle,
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 group-hover:border-[rgba(201,169,98,0.5)]"
        style={{ borderColor: studioTheme.border }}
      >
        <Icon
          name={feature.iconName}
          className="h-5 w-5"
          style={{ color: studioTheme.gold }}
          strokeWidth={1.25}
        />
      </div>
      <div className="space-y-3">
        <h3
          className="font-serif text-xl font-medium tracking-tight sm:text-[1.35rem]"
          style={{ color: studioTheme.gold }}
        >
          {feature.title}
        </h3>
        <p
          className="font-sans text-[0.8125rem] leading-[1.7] sm:text-sm"
          style={{ color: studioTheme.textMuted }}
        >
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}

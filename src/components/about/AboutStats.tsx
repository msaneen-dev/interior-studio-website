"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Icon } from "@/components/Icon";
import { useCountUp } from "@/components/hero/useCountUp";

function StatCell({
  label,
  display,
  iconName,
  delay,
  showDivider,
}: {
  label: string;
  display: string;
  iconName: string;
  delay: number;
  showDivider: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: easeLuxury }}
      className="relative flex flex-col gap-2 px-3 py-2 sm:gap-3 sm:px-4 first:pl-0"
    >
      {showDivider && (
        <div
          className="absolute left-0 top-2 bottom-2 hidden w-px sm:block"
          style={{ backgroundColor: studioTheme.borderSubtle }}
          aria-hidden
        />
      )}
      <Icon
        name={iconName}
        className="h-4 w-4"
        style={{ color: studioTheme.gold }}
        strokeWidth={1.25}
      />
      <p
        className="font-serif text-2xl font-medium tabular-nums tracking-tight sm:text-[1.75rem]"
        style={{ color: studioTheme.text }}
      >
        {display}
      </p>
      <p
        className="font-label-caps text-[0.58rem] leading-snug tracking-[0.12em] sm:text-[0.625rem]"
        style={{ color: studioTheme.textMuted }}
      >
        {label}
      </p>
    </motion.div>
  );
}

function CounterCell({
  label,
  target,
  suffix,
  iconName,
  delay,
  showDivider,
}: {
  label: string;
  target: number;
  suffix: string;
  iconName: string;
  delay: number;
  showDivider: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(target, 2200, isInView);

  return (
    <div ref={ref}>
      <StatCell
        label={label}
        display={`${count}${suffix}`}
        iconName={iconName}
        delay={delay}
        showDivider={showDivider}
      />
    </div>
  );
}

export function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
      {aboutData.stats.map((stat, i) => (
        <CounterCell
          key={stat.label}
          label={stat.label}
          target={stat.value}
          suffix={stat.suffix}
          iconName={stat.iconName}
          delay={0.1 + i * 0.08}
          showDivider={i > 0}
        />
      ))}
    </div>
  );
}

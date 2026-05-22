"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { Icon } from "@/components/Icon";
import { heroTheme } from "./hero-theme";
import { useCountUp } from "./useCountUp";

function StatItem({
  label,
  display,
  iconName,
  delay,
}: {
  label: string;
  display: string;
  iconName: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: easeLuxury }}
      className="flex flex-col gap-2 sm:gap-3"
    >
      <Icon
        name={iconName}
        className="h-4 w-4 sm:h-5 sm:w-5"
        style={{ color: heroTheme.gold }}
        strokeWidth={1.25}
      />
      <p
        className="font-serif text-xl font-medium tabular-nums tracking-tight sm:text-2xl lg:text-[1.65rem]"
        style={{ color: heroTheme.text }}
      >
        {display}
      </p>
      <p
        className="font-label-caps text-[0.6rem] tracking-[0.14em] sm:text-[0.625rem]"
        style={{ color: heroTheme.textMuted }}
      >
        {label}
      </p>
    </motion.div>
  );
}

function CounterStat({
  label,
  target,
  suffix,
  iconName,
  delay,
}: {
  label: string;
  target: number;
  suffix: string;
  iconName: string;
  delay: number;
}) {
  const count = useCountUp(target, 2400, true);
  return (
    <StatItem
      label={label}
      display={`${count}${suffix}`}
      iconName={iconName}
      delay={delay}
    />
  );
}

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: easeLuxury }}
      className="grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4 sm:gap-4 sm:pt-8 lg:gap-6"
      style={{ borderColor: heroTheme.borderSubtle }}
    >
      {heroData.stats.map((stat, i) =>
        stat.animate ? (
          <CounterStat
            key={stat.label}
            label={stat.label}
            target={stat.value}
            suffix={stat.suffix ?? ""}
            iconName={stat.iconName}
            delay={0.55 + i * 0.08}
          />
        ) : null
      )}
    </motion.div>
  );
}

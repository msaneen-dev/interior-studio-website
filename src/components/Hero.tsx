"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";
import { HeroStats } from "@/components/hero/HeroStats";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { HeroScrollCue } from "@/components/hero/HeroScrollCue";
import { heroTheme } from "@/components/hero/hero-theme";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeLuxury },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden lg:h-screen lg:min-h-screen"
      style={{ backgroundColor: heroTheme.bg }}
    >
      {/* Ambient gold curves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <svg
          className="absolute -left-[20%] top-[10%] h-[80%] w-[70%] opacity-[0.07]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke={heroTheme.gold} strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke={heroTheme.gold} strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke={heroTheme.gold} strokeWidth="0.5" />
        </svg>
        <div
          className="absolute right-0 top-1/4 h-[50%] w-[40%] opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, ${heroTheme.gold}15 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[20%] h-px w-32"
          style={{ backgroundColor: heroTheme.gold }}
        />
      </div>

      <Container className="relative z-10 flex min-h-svh flex-col justify-center pb-8 pt-24 sm:pt-28 lg:min-h-screen lg:pb-16 lg:pt-28">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 sm:gap-6 lg:max-w-[540px] lg:py-4"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
              style={{ color: heroTheme.gold }}
            >
              <span className="h-px w-10" style={{ backgroundColor: heroTheme.gold }} />
              {heroData.eyebrow}
            </motion.span>

            <motion.h1
              variants={item}
              className="font-serif font-medium leading-[1.05] tracking-[-0.03em] text-[clamp(2.125rem,7vw,3.5rem)] lg:text-[clamp(2.75rem,4vw,4.25rem)]"
              style={{ color: heroTheme.text }}
            >
              <span className="block">{heroData.headline[0]}</span>
              <span
                className="mt-1 block font-normal italic lg:mt-2"
                style={{ color: heroTheme.gold }}
              >
                {heroData.headline[1]}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-md font-sans text-[0.9375rem] leading-[1.75] sm:text-base lg:text-[1.0625rem]"
              style={{ color: heroTheme.textMuted }}
            >
              {heroData.description}
            </motion.p>

            <motion.div
              variants={item}
              className="flex w-full flex-col gap-3 sm:max-w-lg sm:flex-row sm:gap-4"
            >
              <Link
                href={heroData.primaryCta.href}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-8 font-label-caps text-[0.6875rem] tracking-[0.14em] transition-all duration-300 hover:brightness-110 sm:flex-1"
                style={{
                  backgroundColor: heroTheme.gold,
                  color: heroTheme.bg,
                }}
              >
                {heroData.primaryCta.label}
                <Icon
                  name="ArrowRight"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href={heroData.secondaryCta.href}
                className="inline-flex min-h-[48px] w-full items-center justify-center border px-8 font-label-caps text-[0.6875rem] tracking-[0.14em] transition-all duration-300 hover:bg-white/5 sm:flex-1"
                style={{
                  borderColor: heroTheme.border,
                  color: heroTheme.text,
                }}
              >
                {heroData.secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <HeroStats />
            </motion.div>
          </motion.div>

          {/* Right — visual */}
          <div className="relative w-full lg:h-full lg:min-h-[520px]">
            <HeroVisual />
          </div>
        </div>
      </Container>

      <HeroScrollCue />

      {/* Bottom gold line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-px lg:block"
        style={{ backgroundColor: heroTheme.border }}
        aria-hidden
      />
    </section>
  );
}

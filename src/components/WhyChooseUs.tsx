"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { differenceSectionData, featuresData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/difference/FeatureCard";

export function WhyChooseUs() {
  return (
    <section
      id="difference"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: studioTheme.bg }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold arcs — bottom left */}
        <svg
          className="absolute -bottom-[20%] -left-[10%] h-[55%] w-[45%] opacity-[0.06]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="160" stroke={studioTheme.gold} strokeWidth="0.75" />
          <circle cx="200" cy="200" r="120" stroke={studioTheme.gold} strokeWidth="0.5" />
          <circle cx="200" cy="200" r="80" stroke={studioTheme.gold} strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeLuxury }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <span
              className="mb-5 inline-flex items-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
              style={{ color: studioTheme.gold }}
            >
              <span className="h-px w-10" style={{ backgroundColor: studioTheme.gold }} />
              {differenceSectionData.eyebrow}
              <span className="opacity-60">—</span>
            </span>
            <h2
              className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,5vw,3rem)]"
              style={{ color: studioTheme.text }}
            >
              {differenceSectionData.headline[0]}{" "}
              <span className="italic" style={{ color: studioTheme.gold }}>
                {differenceSectionData.headline[1]}
              </span>
            </h2>
            <p
              className="mt-6 max-w-sm font-sans text-[0.9375rem] leading-[1.75] sm:text-base"
              style={{ color: studioTheme.textMuted }}
            >
              {differenceSectionData.description}
            </p>
            <Link
              href={differenceSectionData.cta.href}
              className="mt-8 inline-flex min-h-[48px] items-center justify-center border px-8 font-label-caps text-[0.6875rem] tracking-[0.14em] transition-all duration-300 hover:bg-white/5"
              style={{
                borderColor: studioTheme.border,
                color: studioTheme.gold,
              }}
            >
              {differenceSectionData.cta.label}
            </Link>
          </motion.div>

          {/* Right — 2×2 feature grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-8 lg:gap-6">
            {featuresData.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

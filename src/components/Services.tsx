"use client";

import { motion } from "framer-motion";
import { servicesData, servicesSectionData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { ServiceCard } from "@/components/services/ServiceCard";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: studioTheme.bg }}
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -left-[10%] top-[8%] h-[40%] w-[50%] rotate-[-12deg] opacity-[0.04]"
          style={{
            border: `1px solid ${studioTheme.gold}`,
            borderRadius: "50%",
          }}
        />
        <svg
          className="absolute -right-[20%] top-[15%] h-[70%] w-[60%] opacity-[0.05]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="200" stroke={studioTheme.gold} strokeWidth="0.75" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeLuxury }}
            className="max-w-xl"
          >
            <span
              className="mb-5 inline-flex items-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
              style={{ color: studioTheme.gold }}
            >
              <span className="h-px w-10" style={{ backgroundColor: studioTheme.gold }} />
              {servicesSectionData.eyebrow}
            </span>
            <h2
              className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,5vw,3rem)] lg:text-[clamp(2.25rem,3.5vw,3.25rem)]"
              style={{ color: studioTheme.text }}
            >
              {servicesSectionData.headline[0]}{" "}
              <span className="italic" style={{ color: studioTheme.gold }}>
                {servicesSectionData.headline[1]}
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeLuxury }}
            className="max-w-sm font-sans text-[0.9375rem] leading-[1.75] lg:pb-1 lg:text-base"
            style={{ color: studioTheme.textMuted }}
          >
            {servicesSectionData.intro}
          </motion.p>
        </div>

        {/* 3×2 service grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>

      {/* Bottom scroll cue */}
      <div className="relative z-10 mt-14 flex justify-center sm:mt-16 lg:mt-20">
        <ScrollCue href="#projects" className="flex" />
      </div>

      {/* Converging gold lines */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-16 lg:block" aria-hidden>
        <div
          className="absolute bottom-8 left-[15%] right-1/2 h-px origin-right -rotate-[8deg]"
          style={{ backgroundColor: studioTheme.border }}
        />
        <div
          className="absolute bottom-8 left-1/2 right-[15%] h-px origin-left rotate-[8deg]"
          style={{ backgroundColor: studioTheme.border }}
        />
      </div>
    </section>
  );
}

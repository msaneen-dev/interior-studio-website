"use client";

import { motion } from "framer-motion";
import { processSectionData, processStepsData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { ProcessStepCard } from "@/components/process/ProcessStep";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: studioTheme.bg }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeLuxury }}
          className="mb-14 text-center sm:mb-16"
        >
          <span
            className="mb-5 inline-flex items-center justify-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
            style={{ color: studioTheme.gold }}
          >
            <span className="h-px w-8" style={{ backgroundColor: studioTheme.gold }} />
            {processSectionData.eyebrow}
            <span className="h-px w-8" style={{ backgroundColor: studioTheme.gold }} />
          </span>
          <h2
            className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,5vw,3rem)] lg:text-[clamp(2.25rem,3.5vw,3.25rem)]"
            style={{ color: studioTheme.text }}
          >
            {processSectionData.headline[0]}{" "}
            <span className="italic" style={{ color: studioTheme.gold }}>
              {processSectionData.headline[1]}
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute top-10 left-[6%] right-[6%] hidden h-px md:block"
            style={{ backgroundColor: studioTheme.borderSubtle }}
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-8">
            {processStepsData.map((step, index) => (
              <ProcessStepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </Container>

      <div className="relative z-10 mt-14 flex justify-center sm:mt-16 lg:mt-20">
        <ScrollCue href="#contact" className="flex" />
      </div>
    </section>
  );
}

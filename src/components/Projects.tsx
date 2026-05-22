"use client";

import { motion } from "framer-motion";
import { projectsData, projectsSectionData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
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
        <svg
          className="absolute -left-[15%] bottom-[10%] h-[50%] w-[45%] opacity-[0.04]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke={studioTheme.gold} strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeLuxury }}
          className="mb-12 text-center lg:mb-16"
        >
          <span
            className="mb-5 inline-flex items-center justify-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
            style={{ color: studioTheme.gold }}
          >
            <span className="h-px w-8" style={{ backgroundColor: studioTheme.gold }} />
            {projectsSectionData.eyebrow}
            <span className="opacity-60">—</span>
          </span>
          <h2
            className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,5vw,3rem)] lg:text-[clamp(2.25rem,3.5vw,3.25rem)]"
            style={{ color: studioTheme.text }}
          >
            {projectsSectionData.headline[0]}{" "}
            <span className="italic" style={{ color: studioTheme.gold }}>
              {projectsSectionData.headline[1]}
            </span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-md font-sans text-[0.9375rem] leading-[1.75] sm:text-base"
            style={{ color: studioTheme.textMuted }}
          >
            {projectsSectionData.description}
          </p>
        </motion.div>

        {/* Asymmetric portfolio grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>

      <div className="relative z-10 mt-14 flex justify-center sm:mt-16 lg:mt-20">
        <ScrollCue href="#testimonials" className="flex" />
      </div>
    </section>
  );
}

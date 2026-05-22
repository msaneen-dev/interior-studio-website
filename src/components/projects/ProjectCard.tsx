"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

const heightMap: Record<string, string> = {
  "h-[500px]": "min-h-[240px] sm:min-h-[320px] lg:min-h-[420px] xl:min-h-[480px]",
  "h-[400px]": "min-h-[280px] sm:min-h-[360px] lg:min-h-[400px]",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: easeLuxury }}
      className={cn(
        "group relative block h-full min-h-[240px] cursor-pointer overflow-hidden border transition-all duration-500 hover:border-[rgba(201,169,98,0.35)]",
        project.widthClass,
        project.mtClass
      )}
      style={{
        borderColor: studioTheme.borderSubtle,
        borderRadius: "2px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.imageUrl}
        alt={project.altText}
        className={cn(
          "image-reveal h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]",
          heightMap[project.heightClass] ?? "min-h-[280px]"
        )}
        loading="lazy"
      />

      {/* Overlay gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908]/95 via-[#0a0908]/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#0a0908]/0 transition-colors duration-500 group-hover:bg-[#0a0908]/10"
        aria-hidden
      />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 lg:p-7">
        <div>
          <p
            className="mb-1.5 font-label-caps text-[0.6rem] tracking-[0.16em] sm:text-[0.625rem]"
            style={{ color: studioTheme.gold }}
          >
            {project.location}
          </p>
          <h3
            className="font-serif text-xl font-medium tracking-tight sm:text-2xl lg:text-[1.65rem]"
            style={{ color: studioTheme.text }}
          >
            {project.title}
          </h3>
        </div>
        <span
          className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500 group-hover:border-[rgba(201,169,98,0.6)] group-hover:bg-[rgba(201,169,98,0.1)]"
          style={{ borderColor: studioTheme.border }}
        >
          <Icon
            name="ArrowRight"
            className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5"
            style={{ color: studioTheme.gold }}
            strokeWidth={1.5}
          />
        </span>
      </div>
    </motion.a>
  );
}

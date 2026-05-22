"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";

export function AboutImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.02]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: easeLuxury }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* Vertical gold line — left */}
      <div
        className="absolute -left-3 top-8 bottom-8 hidden w-px sm:block lg:-left-5"
        style={{ backgroundColor: studioTheme.border }}
        aria-hidden
      />

      {/* Offset gold frame */}
      <div
        className="pointer-events-none absolute -right-3 -top-3 bottom-6 left-3 border sm:-right-4 sm:-top-4 sm:left-4"
        style={{ borderColor: studioTheme.border }}
        aria-hidden
      />

      {/* L-corner accent */}
      <div
        className="absolute -left-1 -top-1 z-10 h-10 w-10 border-l-2 border-t-2 sm:h-12 sm:w-12"
        style={{ borderColor: studioTheme.gold }}
        aria-hidden
      />

      {/* Dot grid accent */}
      <div className="absolute -bottom-2 -left-2 z-10 hidden grid grid-cols-3 gap-1.5 sm:grid" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full"
            style={{ backgroundColor: studioTheme.gold, opacity: 0.5 + (i % 3) * 0.15 }}
          />
        ))}
      </div>

      <motion.div style={{ scale }} className="relative ml-2 mt-2 overflow-hidden sm:ml-3 sm:mt-3">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden"
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,98,0.15)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={aboutData.image.src}
            alt={aboutData.image.alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: aboutData.image.objectPosition }}
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908]/50 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

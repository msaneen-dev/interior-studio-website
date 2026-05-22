"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { heroData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { Icon } from "@/components/Icon";
import { heroTheme } from "./hero-theme";

const SLIDES = 3;

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div ref={ref} className="relative h-full w-full">
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: easeLuxury, delay: 0.3 }}
        className="relative mx-auto h-full w-full lg:mx-0"
      >
        {/* Main image — centered crop */}
        <div
          className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] lg:aspect-auto lg:h-[min(72vh,680px)] lg:min-h-[480px]"
          style={{
            boxShadow: "0 24px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,169,98,0.12)",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroData.image.src}
              alt={heroData.image.alt}
              className="h-full w-full object-cover object-center"
              style={{ objectPosition: heroData.image.objectPosition }}
              fetchPriority="high"
            />
          </motion.div>

          {/* Depth gradient */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0a0908]/60 via-transparent to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908]/40 via-transparent to-transparent lg:hidden"
            aria-hidden
          />

          {/* Play badge */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: easeLuxury }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-4 top-4 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full text-center sm:right-6 sm:top-6 sm:h-24 sm:w-24"
            style={{
              backgroundColor: "rgba(10, 9, 8, 0.75)",
              border: `1px solid ${heroTheme.border}`,
            }}
          >
            <Icon
              name="Play"
              className="mb-1 h-4 w-4"
              style={{ color: heroTheme.gold }}
              fill={heroTheme.gold}
            />
            <span
              className="font-label-caps text-[0.5rem] leading-tight tracking-[0.12em] sm:text-[0.55rem]"
              style={{ color: heroTheme.goldLight }}
            >
              See Our
              <br />
              Space
            </span>
          </motion.a>
        </div>

        {/* Slider dots — desktop right edge */}
        <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:-right-6">
          {Array.from({ length: SLIDES }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-2 w-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  i === activeSlide ? heroTheme.gold : "rgba(201,169,98,0.25)",
                transform: i === activeSlide ? "scale(1.25)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

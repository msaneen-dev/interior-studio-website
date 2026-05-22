"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: easeLuxury }}
      className="group flex h-full min-h-[320px] flex-col overflow-hidden border sm:min-h-[360px] md:flex-row"
      style={{
        backgroundColor: "rgba(18, 17, 16, 0.75)",
        borderColor: studioTheme.borderSubtle,
      }}
    >
      {/* Quote panel */}
      <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
        <span
          className="font-serif text-5xl leading-none sm:text-6xl"
          style={{ color: studioTheme.gold }}
          aria-hidden
        >
          &ldquo;
        </span>
        <p
          className="my-6 font-serif text-lg italic leading-relaxed sm:text-xl lg:text-[1.35rem] lg:leading-snug"
          style={{ color: studioTheme.text }}
        >
          {testimonial.quote}
        </p>
        <footer
          className="space-y-1 border-t pt-5"
          style={{ borderColor: studioTheme.borderSubtle }}
        >
          <cite
            className="not-italic font-label-caps text-[0.625rem] tracking-[0.14em]"
            style={{ color: studioTheme.gold }}
          >
            {testimonial.author}
          </cite>
          <p
            className="font-sans text-sm"
            style={{ color: studioTheme.textMuted }}
          >
            {testimonial.role}
          </p>
        </footer>
      </div>

      {/* Image panel */}
      <div className="relative h-48 w-full shrink-0 md:h-auto md:w-[40%] lg:w-[38%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={testimonial.imageUrl}
          alt={testimonial.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121110] via-[#121110]/40 to-transparent md:from-[#121110] md:via-transparent"
          aria-hidden
        />
      </div>
    </motion.blockquote>
  );
}

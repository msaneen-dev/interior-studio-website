"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonialsData, testimonialsSectionData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export function Testimonials() {
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: studioTheme.bg }}
    >
      {/* Ambient gold streaks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -right-[20%] top-[20%] h-[60%] w-[50%] rotate-12 opacity-[0.04]"
          style={{
            background: `linear-gradient(135deg, transparent, ${studioTheme.gold}, transparent)`,
          }}
        />
        <svg
          className="absolute -left-[10%] bottom-[15%] h-[40%] w-[35%] opacity-[0.05]"
          viewBox="0 0 400 200"
          fill="none"
        >
          <path
            d="M0 100 Q200 0 400 100"
            stroke={studioTheme.gold}
            strokeWidth="0.75"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeLuxury }}
          className="mb-10 text-center sm:mb-14"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 sm:w-16" style={{ backgroundColor: studioTheme.border }} />
            <span
              className="font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
              style={{ color: studioTheme.gold }}
            >
              {testimonialsSectionData.eyebrow}
            </span>
            <span className="h-px w-12 sm:w-16" style={{ backgroundColor: studioTheme.border }} />
          </div>
          <span
            className="font-serif text-6xl leading-none sm:text-7xl"
            style={{ color: studioTheme.gold }}
            aria-hidden
          >
            &ldquo;
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Pagination controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-6 sm:mt-12"
        >
          <button
            type="button"
            onClick={() => setActiveDot((d) => Math.max(0, d - 1))}
            className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
            style={{ color: studioTheme.gold }}
            aria-label="Previous"
          >
            <Icon name="ChevronLeft" className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <div className="flex gap-2.5">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setActiveDot(dot)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: activeDot === dot ? "1.25rem" : "0.5rem",
                  backgroundColor:
                    activeDot === dot ? studioTheme.gold : "rgba(201,169,98,0.35)",
                }}
                aria-label={`Slide ${dot + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActiveDot((d) => Math.min(2, d + 1))}
            className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
            style={{ color: studioTheme.gold }}
            aria-label="Next"
          >
            <Icon name="ChevronRight" className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}

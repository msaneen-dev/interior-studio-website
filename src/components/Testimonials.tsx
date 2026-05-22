"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/content";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-on-primary"
    >
      <div className="max-w-container-max mx-auto">
        {/* Header indicator */}
        <div className="flex justify-center mb-20">
          <span className="font-label-caps text-label-caps tracking-widest uppercase opacity-60">
            Voices of Vision
          </span>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-20">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="space-y-8 flex flex-col justify-between"
            >
              {/* Quote block */}
              <p className="font-serif text-headline-lg leading-snug italic text-surface-container-lowest">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author metadata */}
              <div className="not-italic space-y-1 pt-4 border-t border-outline/30">
                <p className="font-label-caps text-label-caps tracking-wider text-surface-container-low">
                  {testimonial.author}
                </p>
                <p className="font-sans text-body-md opacity-60 text-surface-dim">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

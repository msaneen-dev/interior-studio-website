"use client";

import React from "react";
import { motion } from "framer-motion";
import { processStepsData } from "@/data/content";

export const Process: React.FC = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      {/* Header section */}
      <div className="text-center mb-24">
        <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block mb-4">
          WORKFLOW
        </span>
        <h2 className="font-serif text-headline-lg text-primary leading-tight">
          The Journey to Perfection
        </h2>
      </div>

      {/* Step workflow node container */}
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        {processStepsData.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative z-10 w-full md:w-1/4 space-y-6 bg-surface"
          >
            {/* Step count indicator */}
            <span className="text-6xl font-serif font-light text-primary opacity-15 block">
              {step.stepNumber}
            </span>

            {/* Step information details */}
            <h4 className="font-serif text-[24px] leading-tight text-primary">
              {step.title}
            </h4>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}

        {/* Decorative connecting line across desktop nodes */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-outline-variant/30 z-0"></div>
      </div>
    </section>
  );
};

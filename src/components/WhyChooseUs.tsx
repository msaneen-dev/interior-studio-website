"use client";

import React from "react";
import { motion } from "framer-motion";
import { featuresData } from "@/data/content";
import { Icon } from "./Icon";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-12 gap-y-12 md:gap-gutter">
        {/* Core title wrapper */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block">
            THE DIFFERENCE
          </span>
          <h2 className="font-serif text-headline-lg text-primary leading-tight">
            Why Studio Verse?
          </h2>
        </div>

        {/* Feature grid wrapper */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              {/* Feature Header */}
              <div className="flex items-center gap-4 text-primary">
                <Icon name={feature.iconName} className="h-8 w-8 stroke-[1.25]" />
                <h4 className="font-serif text-[24px] leading-tight text-primary">
                  {feature.title}
                </h4>
              </div>

              {/* Feature description */}
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

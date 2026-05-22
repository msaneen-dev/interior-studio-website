"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/content";
import { Icon } from "./Icon";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      {/* Header section with asymmetry */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block mb-4">
            EXPERTISE
          </span>
          <h2 className="font-serif text-headline-lg text-primary leading-tight">
            Holistic Design Solutions.
          </h2>
        </div>
        <p className="font-sans text-body-md text-on-surface-variant max-w-xs pb-2 leading-relaxed">
          Tailored services that guide you from the first sketch to the final
          placement of furniture.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group p-10 border border-outline-variant/30 bg-transparent hover:bg-primary transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-lg"
          >
            <div>
              {/* Icon with hover color inversion */}
              <div className="text-primary group-hover:text-on-primary transition-colors duration-500 mb-8 inline-block">
                <Icon name={service.iconName} className="h-10 w-10 stroke-[1.25]" />
              </div>

              {/* Title with hover color inversion */}
              <h3 className="font-serif text-headline-md mb-4 text-primary group-hover:text-on-primary transition-colors duration-500">
                {service.title}
              </h3>
            </div>

            {/* Description with hover color inversion */}
            <p className="font-sans text-body-md text-on-surface-variant group-hover:text-surface-dim transition-colors duration-500 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

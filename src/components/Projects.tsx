"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/content";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container overflow-hidden"
    >
      <div className="max-w-container-max mx-auto">
        {/* Centered section title */}
        <div className="text-center mb-24">
          <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-serif text-headline-lg text-primary leading-tight">
            Selected Projects
          </h2>
        </div>

        {/* Asymmetric lookbook grid */}
        <div className="grid grid-cols-12 gap-y-16 md:gap-gutter">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${project.widthClass} ${project.mtClass} flex flex-col`}
            >
              {/* Image Frame with hover transitions */}
              <div className="relative group overflow-hidden canvas-shadow bg-surface-dim cursor-pointer">
                <img
                  className={`w-full ${project.heightClass} object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105`}
                  alt={project.altText}
                  src={project.imageUrl}
                />
                
                {/* Action Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-surface px-8 py-3 font-label-caps text-label-caps text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary">
                    VIEW PROJECT
                  </button>
                </div>
              </div>

              {/* Text description details */}
              <div className="mt-6">
                <p className="font-label-caps text-[11px] text-on-tertiary-container tracking-wider mb-2">
                  {project.location}
                </p>
                <h3 className="font-serif text-headline-md text-primary leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-y-12 md:gap-gutter items-center">
        {/* Architect sketch image wrapper */}
        <div className="col-span-12 md:col-span-5 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden canvas-shadow group"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              alt="Architect drafting blueprints"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5M7v_gbTsvjyd_V_23ZvlYKqxTHq4t3svzCMkaOvFLIFvKIOafj2ibT_TNcBjg_I-fTcvH9kZNlHPsL4fJgMFtUofaNmVzYR_ieNLS2ESBrLnKzkfXaTcFsVjOZoz6QWqV2vSZYWf5m6WqQGXsj2t2wA0X-BzjeNuXVK30wRYOpR8nRyBpxqlgkvBGBh-H4Tggw0z-X737cZHTrsD1_3_L3uC0I-k8vbmzJZ3r2H0F2IOZdfbrjM9FHnS_J5xEzGEFS-iCGvCuQJ"
            />
          </motion.div>
        </div>

        {/* Narrative text wrapper */}
        <div className="col-span-12 md:col-span-6 md:col-start-8 order-1 md:order-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block">
              THE STUDIO
            </span>
            <h2 className="font-serif text-headline-lg text-primary leading-tight">
              Craftsmanship meeting Vision.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 font-sans text-body-lg text-on-surface-variant leading-relaxed"
          >
            <p>
              At STUDIO VERSE, we believe that architecture is the silent
              language of a life well-lived. Our practice is rooted in the belief
              that every line drawn must serve a purpose, and every material
              chosen must age with grace.
            </p>
            <p>
              For two decades, we have partnered with discerning clients to
              transform their aspirations into permanent landmarks of design. Our
              approach is holistic, bridging the gap between external structure
              and internal soul.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <a
              className="inline-block border-b border-primary pb-2 font-label-caps text-label-caps text-primary hover:opacity-75 transition-all tracking-wider"
              href="#projects"
            >
              READ OUR STORY
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen flex items-center"
    >
      <div className="grid grid-cols-12 gap-y-12 md:gap-gutter w-full items-center">
        {/* Editorial Text Column */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-headline-display text-primary leading-[1.1] tracking-tighter">
              Redefining the
              <br />
              Art of Living
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-body-lg text-on-surface-variant max-w-md"
          >
            We blend structural precision with domestic warmth to create spaces
            that are as functional as they are poetic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#contact"
              className="bg-primary text-center text-on-primary px-10 py-4 font-label-caps text-label-caps hover:bg-on-primary-container transition-all"
            >
              START A PROJECT
            </a>
            <a
              href="#projects"
              className="border border-primary text-center text-primary px-10 py-4 font-label-caps text-label-caps hover:bg-surface-container transition-all"
            >
              OUR WORK
            </a>
          </motion.div>
        </div>

        {/* Visual Focus Column */}
        <div className="col-span-12 md:col-span-6 relative h-[450px] md:h-[600px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-surface-container overflow-hidden group cursor-crosshair"
          >
            {/* Overlay showing hover space for 3D elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-40" />
            
            <img
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              alt="A sophisticated architectural interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMBZj1QJhhJYPqTYdV1jJnfJDoo1goRPjzGwOhNjQ_SigYL8PyNLguLh3LEeG37YPF25UXX1_yKfu3RFkYASV-rbs4jWpIUnRo9EM3pUJ-QRv-a5hUHipM8KAyQJ9o6p0jwt82p3DzhkRKdw5ZDFbGyWgHQRrs-WpMarKlXuNRA6qnCGRXe1hwqgLk-GQCDluMAthI26ca1sc-8ma8msnSwfczrpmZpUMOWrwG7-IEFKr0flPY-c4uP2GLZrQ6YjvkrWTKSKhNVh3O"
            />
          </motion.div>

          {/* ESTABLISHED MCMXCVIII Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary p-6 flex items-center justify-center text-on-primary text-center hidden lg:flex canvas-shadow"
          >
            <p className="font-label-caps text-[10px] leading-relaxed tracking-widest">
              ESTABLISHED
              <br />
              MCMXCVIII
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

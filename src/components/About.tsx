"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { AboutImage } from "@/components/about/AboutImage";
import { AboutStats } from "@/components/about/AboutStats";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: easeLuxury },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: studioTheme.bg }}
    >
      {/* Grain + ambient arc */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <svg
          className="absolute -right-[25%] top-[5%] h-[90%] w-[80%] opacity-[0.06]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="220" stroke={studioTheme.gold} strokeWidth="0.75" />
          <circle cx="250" cy="250" r="180" stroke={studioTheme.gold} strokeWidth="0.5" />
        </svg>
        <div
          className="absolute left-0 top-0 h-px w-full opacity-20"
          style={{ backgroundColor: studioTheme.border }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image — first on mobile */}
          <div className="order-1 lg:order-1">
            <AboutImage />
          </div>

          {/* Content */}
          <div className="order-2 flex flex-col gap-8 sm:gap-10 lg:order-2">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <span
                className="mb-5 inline-flex items-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
                style={{ color: studioTheme.gold }}
              >
                <span className="h-px w-10" style={{ backgroundColor: studioTheme.gold }} />
                {aboutData.eyebrow}
              </span>
              <h2
                className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,5vw,3rem)] lg:text-[clamp(2.25rem,3.5vw,3.25rem)]"
                style={{ color: studioTheme.text }}
              >
                {aboutData.headline[0]}{" "}
                <span className="italic" style={{ color: studioTheme.gold }}>
                  {aboutData.headline[1]}
                </span>
              </h2>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="flex flex-col gap-5 sm:gap-6"
            >
              {aboutData.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="font-sans text-[0.9375rem] leading-[1.8] sm:text-base"
                  style={{ color: studioTheme.textMuted }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="border-t pt-8 sm:pt-10"
              style={{ borderColor: studioTheme.borderSubtle }}
            >
              <AboutStats />
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="font-serif text-2xl italic sm:text-3xl"
              style={{ color: studioTheme.gold }}
            >
              {aboutData.signature}
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}

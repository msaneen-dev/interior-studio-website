"use client";

import { motion } from "framer-motion";
import { contactData, contactSectionData } from "@/data/content";
import { easeLuxury, stagger } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/contact/ContactForm";

const contactItems = [
  { label: "Phone", value: contactData.phone, iconName: "Phone" },
  { label: "Email", value: contactData.email, iconName: "Mail" },
  { label: "Location", value: contactData.address, iconName: "MapPin" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: studioTheme.bg }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <svg
          className="absolute -left-[15%] top-[20%] h-[60%] w-[50%] opacity-[0.05]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="170" stroke={studioTheme.gold} strokeWidth="0.5" />
          <circle cx="200" cy="200" r="130" stroke={studioTheme.gold} strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeLuxury }}
            className="flex flex-col gap-8 lg:col-span-4"
          >
            <div>
              <span
                className="mb-5 inline-flex items-center gap-3 font-label-caps text-[0.65rem] tracking-[0.22em] sm:text-xs"
                style={{ color: studioTheme.gold }}
              >
                <span className="h-px w-10" style={{ backgroundColor: studioTheme.gold }} />
                {contactSectionData.eyebrow}
                <span className="opacity-60">—</span>
              </span>
              <h2
                className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(1.75rem,4vw,2.75rem)]"
                style={{ color: studioTheme.text }}
              >
                {contactSectionData.headline[0]}{" "}
                <span className="italic" style={{ color: studioTheme.gold }}>
                  {contactSectionData.headline[1]}
                </span>
              </h2>
              <p
                className="mt-5 font-sans text-[0.9375rem] leading-[1.75] sm:text-base"
                style={{ color: studioTheme.textMuted }}
              >
                {contactSectionData.description}
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stagger(i, 0.08), ease: easeLuxury }}
                  className="flex gap-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: studioTheme.border }}
                  >
                    <Icon
                      name={item.iconName}
                      className="h-4 w-4"
                      style={{ color: studioTheme.gold }}
                      strokeWidth={1.25}
                    />
                  </div>
                  <div>
                    <p
                      className="mb-1 font-label-caps text-[0.625rem] tracking-[0.14em]"
                      style={{ color: studioTheme.gold }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-sans text-sm sm:text-base"
                      style={{ color: studioTheme.text }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeLuxury }}
            className="lg:col-span-4"
          >
            <ContactForm />
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeLuxury }}
            className="relative min-h-[280px] overflow-hidden lg:col-span-4 lg:min-h-full"
            style={{
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              border: `1px solid ${studioTheme.borderSubtle}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={contactSectionData.image.src}
              alt={contactSectionData.image.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0a0908]/40 via-transparent to-transparent lg:from-[#0a0908]/60"
              aria-hidden
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

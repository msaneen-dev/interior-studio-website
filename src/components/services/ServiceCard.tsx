"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/content";
import { easeLuxury } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Icon } from "@/components/Icon";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay: index * 0.06, ease: easeLuxury }}
      className="group flex h-full min-h-[200px] flex-col overflow-hidden border transition-all duration-500 hover:border-[rgba(201,169,98,0.4)] sm:min-h-[220px] sm:flex-row"
      style={{
        backgroundColor: "rgba(18, 17, 16, 0.85)",
        borderColor: studioTheme.borderSubtle,
      }}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:p-7 lg:p-8">
        <Icon
          name={service.iconName}
          className="h-5 w-5 shrink-0"
          style={{ color: studioTheme.gold }}
          strokeWidth={1.25}
        />
        <div>
          <h3
            className="font-serif text-xl font-medium tracking-tight sm:text-[1.35rem]"
            style={{ color: studioTheme.text }}
          >
            {service.title}
          </h3>
          <div
            className="mt-3 h-px w-10 transition-all duration-500 group-hover:w-16"
            style={{ backgroundColor: studioTheme.gold }}
          />
        </div>
        <p
          className="font-sans text-[0.8125rem] leading-[1.65] sm:text-sm"
          style={{ color: studioTheme.textMuted }}
        >
          {service.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[42%] lg:w-[44%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.imageUrl}
          alt={service.imageAlt}
          className="image-reveal h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121110] via-transparent to-transparent sm:from-[#121110]/80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908]/50 via-transparent to-transparent sm:hidden"
          aria-hidden
        />
      </div>
    </motion.article>
  );
}

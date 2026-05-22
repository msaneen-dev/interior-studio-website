"use client";

import { useState, type ReactNode } from "react";
import { brand, contactData, footerSocialLinks, navLinks, servicesData } from "@/data/content";
import { studioTheme } from "@/lib/studio-theme";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2
        className="font-label-caps text-[0.625rem] tracking-[0.14em]"
        style={{ color: studioTheme.gold }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      id="footer"
      className="border-t"
      style={{
        backgroundColor: studioTheme.bg,
        borderColor: studioTheme.borderSubtle,
      }}
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 space-y-5 md:col-span-3 lg:col-span-1">
            <a href="#home" className="font-serif text-xl tracking-wide" style={{ color: studioTheme.gold }}>
              {brand.name}
            </a>
            <p
              className="max-w-xs font-sans text-[0.8125rem] leading-[1.7] sm:text-sm"
              style={{ color: studioTheme.textMuted }}
            >
              {brand.footerTagline}
            </p>
            <div className="flex gap-3">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:border-[rgba(201,169,98,0.5)] hover:bg-white/5"
                  style={{ borderColor: studioTheme.border }}
                >
                  <Icon
                    name={social.iconName}
                    className="h-4 w-4"
                    style={{ color: studioTheme.gold }}
                    strokeWidth={1.25}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <FooterColumn title="Quick Links">
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[0.8125rem] transition-colors duration-300 hover:text-[#c9a962] sm:text-sm"
                  style={{ color: studioTheme.textMuted }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <nav className="flex flex-col gap-2.5">
              {servicesData.map((service) => (
                <a
                  key={service.id}
                  href="#services"
                  className="font-sans text-[0.8125rem] transition-colors duration-300 hover:text-[#c9a962] sm:text-sm"
                  style={{ color: studioTheme.textMuted }}
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contactData.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-sans text-[0.8125rem] sm:text-sm"
                style={{ color: studioTheme.textMuted }}
              >
                <Icon name="Phone" className="h-3.5 w-3.5 shrink-0" style={{ color: studioTheme.gold }} />
                {contactData.phone}
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2 font-sans text-[0.8125rem] sm:text-sm"
                style={{ color: studioTheme.textMuted }}
              >
                <Icon name="Mail" className="h-3.5 w-3.5 shrink-0" style={{ color: studioTheme.gold }} />
                {contactData.email}
              </a>
              <span
                className="flex items-start gap-2 font-sans text-[0.8125rem] sm:text-sm"
                style={{ color: studioTheme.textMuted }}
              >
                <Icon name="MapPin" className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: studioTheme.gold }} />
                {contactData.address}
              </span>
            </div>
          </FooterColumn>

          {/* Newsletter */}
          <FooterColumn title="Newsletter">
            <p
              className="font-sans text-[0.8125rem] leading-relaxed sm:text-sm"
              style={{ color: studioTheme.textMuted }}
            >
              Stay inspired with our latest projects and insights.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 border bg-transparent px-3 py-2.5 font-sans text-xs outline-none sm:text-sm"
                style={{
                  borderColor: studioTheme.borderSubtle,
                  color: studioTheme.text,
                }}
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center px-3 transition-all hover:brightness-110"
                style={{ backgroundColor: studioTheme.gold, color: studioTheme.bg }}
                aria-label="Subscribe"
              >
                <Icon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </FooterColumn>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: studioTheme.borderSubtle }}>
        <Container className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p
            className="font-sans text-xs"
            style={{ color: studioTheme.goldMuted }}
          >
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-4 font-sans text-xs" style={{ color: studioTheme.goldMuted }}>
            <a href="#" className="transition-colors hover:text-[#c9a962]">
              Privacy Policy
            </a>
            <span className="opacity-40">/</span>
            <a href="#" className="transition-colors hover:text-[#c9a962]">
              Terms of Service
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

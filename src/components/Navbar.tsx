"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/cn";
import { DARK_SECTION_IDS, studioTheme } from "@/lib/studio-theme";
import { Icon } from "./Icon";

export function Navbar() {
  const [isDarkNav, setIsDarkNav] = useState(true);
  const [activeHash, setActiveHash] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveHash(`#${visible[0].target.id}`);
        }

        const darkVisible = entries.some(
          (e) =>
            e.isIntersecting &&
            DARK_SECTION_IDS.includes(e.target.id as (typeof DARK_SECTION_IDS)[number])
        );
        setIsDarkNav(darkVisible);
      },
      { threshold: [0.15, 0.35], rootMargin: "-72px 0px -45% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isDarkNav
            ? "border-b border-white/5 bg-[#0a0908]/85 py-4 backdrop-blur-md md:py-5"
            : "border-b border-outline-variant/20 bg-surface/94 py-3 shadow-sm backdrop-blur-md"
        )}
      >
        <div className="mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
          <nav className="flex items-center justify-between" aria-label="Main">
            <a href="#home" className="group">
              <span
                className={cn(
                  "font-serif text-lg tracking-wide transition-colors md:text-xl",
                  isDarkNav ? "text-[#c9a962]" : "text-primary"
                )}
              >
                STUDIO VERSE
              </span>
            </a>

            <div className="hidden items-center gap-6 xl:gap-10 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "relative py-1 font-label-caps text-[0.65rem] tracking-[0.12em] transition-colors duration-300",
                      isDarkNav
                        ? isActive
                          ? "text-[#c9a962]"
                          : "text-white/70 hover:text-white"
                        : isActive
                          ? "text-primary"
                          : "text-on-surface-variant hover:text-primary"
                    )}
                  >
                    {isActive && isDarkNav && (
                      <span
                        className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                        style={{ backgroundColor: studioTheme.gold }}
                      />
                    )}
                    <span
                      className={cn(
                        isActive &&
                          isDarkNav &&
                          "border-b border-[#c9a962] pb-0.5"
                      )}
                    >
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center gap-1.5 px-7 py-3 font-label-caps text-[0.65rem] tracking-[0.12em] transition-all duration-300",
                  isDarkNav
                    ? "hover:brightness-110"
                    : "bg-primary text-on-primary hover:bg-inverse-surface"
                )}
                style={
                  isDarkNav
                    ? { backgroundColor: studioTheme.gold, color: studioTheme.bg }
                    : undefined
                }
              >
                Inquire
                {isDarkNav && (
                  <Icon name="ArrowRight" className="h-3 w-3" strokeWidth={2} />
                )}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className={cn(
                "-mr-2 p-2 focus:outline-none lg:hidden",
                isDarkNav ? "text-[#c9a962]" : "text-primary"
              )}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-500 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col justify-center px-margin-mobile shadow-2xl transition-transform duration-500 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            isDarkNav ? "bg-[#0a0908]" : "bg-surface"
          )}
        >
          <nav className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-serif text-2xl transition-colors",
                  isDarkNav
                    ? activeHash === link.href
                      ? "text-[#c9a962]"
                      : "text-[#f5f2ec] hover:text-[#c9a962]"
                    : "text-primary hover:text-accent"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "mx-auto inline-flex w-full max-w-xs items-center justify-center px-8 py-4 font-label-caps text-[0.65rem] tracking-[0.14em]",
                  !isDarkNav && "bg-primary text-on-primary"
                )}
                style={
                  isDarkNav
                    ? { backgroundColor: studioTheme.gold, color: studioTheme.bg }
                    : undefined
                }
              >
                Inquire
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

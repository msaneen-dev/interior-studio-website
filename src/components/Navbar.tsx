"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/data/content";
import { Icon } from "./Icon";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAQAElEQVR4Aez9Bdx2TRuQ9T5uAxULcxvb7sAExcbuVuwNJiqIioqFSCiIqIiKhQ2KhYVBWCAGgoWNhd2B3c7/+d55v3mv9+q6rzju35p71po1a+KYOuecWev6/3zqLwIRiEAEIhCBCEQgAhGIQAQiEIFXJ/ApBcDLF3EZjEAEIhCBCEQgAhGIQAQiEIEIfEoBUCWIQAQiEIEIRCACEYhABCIQgQi8PIGRwXYADAgdEYhABCIQgQhEIAIRiEAEIhCBVyYgbykAUMhEIAIRiEAEIhCBCEQgAhGIQARel8DnnKUA+IyhfxGIQAQiEIEIRCACEYhABCIQgVcl8I18pQD4Bof+RyACEYhABCIQgQhEIAIRiEAEXpPAF7lKAfAFiKwIRCACEYhABCIQgQhEIAIRiMArEph5SgEwSWRHIAIRiEAEIhCBCEQgAhGIQARej8CXOUoB8CWKTiIQgQhEIAIRiEAEIhCBCEQgAq9G4Jv5SQHwTRadRSACEYhABCIQgQhEIAIRiEAEXovAkpsUAAuMTiMQgQhEIAIRiEAEIhCBCEQgAq9EYM1LCoCVRucRiEAEIhCBCEQgAhGIQAQiEIHXIfCVnKQA+AqOLiIQgQhEIAIRiEAEIhCBCEQgAq9C4Kv5SAHwVR5dRSACEYhABCIQgQhEIAIRiEAEXoPARi5SAGwA6TICEYhABCIQgQhEIAIRiEAEIvAKBDbzkAJgk0jXEYhABCIQgQhEIAIRiEAEIhCB5yfwtRykAPgakhwiEIEIRCACEYhABCIQgQhEIALPTuDr6U8B8HUmuUQgAhGIQAQiEIEIRCACEYhABJ6bwJbUpwDYAiWnCEQgAhGIQAQiEIEIRCACEYjAMxPYlvYUANuo5BaBCEQgAhGIQAQiEIEIRCACEXheAltTngJgK5YcIxCBCEQgAhGIQAQiEIEIRCACz0pge7pTAGznkmsEIhCBCEQgAhGIQAQiEIEIROA5CexIdQqAHWByjkAEIhCBCEQgAhGIQAQiEIEIPCOBXWlOAbCLTO4RiEAEIhCBCEQgAhGIQAQiEIHnI7AzxSkAdqLpRgQiEIEIRCACEYhABCIQgQhE4NkI7E5vCoDdbLoTgQhEIAIRiEAEIhCBCEQgAhF4LgJ7UpsCYA+cbkUgAhGIQAQiEIEIRCACEYhABJ6JwL60pgDYR6d7EYhABCIQgQhEIAIRiEAEIhCB5yGwN6UpAPbi6WYEIhCBCEQgAhGIQAQiEIEIROBZCOxPZwqA/Xy6G4EIRCACEYhABCIQgQhEIAIReA4CB1KZAuAAoG5HIAIRiEAEIhCBCEQgAhGIQASegcChNKYAOESo+xGIQAQiEIEIRCACEYhABCIQgccncDCFKQAOIspDBCIQgQhEIAIRiEAEIhCBCEQgAp8+fYrB3QkbALg78iKMQAQiEIEIRCACEYhABCIQgQcTSAFwfwbFGIEIRCACEYhABCIQgQhE4N0JfED+UwB8APaijEAEIhCBCEQgAhGIQAQiEIEPvH7PvfexTQEAPwAAAABJRU5ErkJggg==";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 py-4 shadow-sm"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <img
              alt="STUDIO VERSE Logo"
              className="h-8 w-auto transition-transform duration-500 group-hover:rotate-90"
              src={logoBase64}
            />
            <span className="font-serif text-headline-md tracking-tighter text-primary">
              STUDIO VERSE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Trigger */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps hover:bg-on-primary-container transition-all cursor-pointer inline-block"
            >
              INQUIRE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-surface transition-transform duration-500 md:hidden flex flex-col justify-center px-margin-mobile ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-primary hover:text-on-tertiary-container transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps hover:bg-on-primary-container transition-all inline-block w-full max-w-xs"
            >
              INQUIRE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

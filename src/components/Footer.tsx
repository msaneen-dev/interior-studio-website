"use client";

import React from "react";
import { navLinks } from "@/data/content";

export const Footer: React.FC = () => {
  const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAQAElEQVR4Aez9Bdx2TRuQ9T5uAxULcxvb7sAExcbuVuwNJiqIioqFSCiIqIiKhQ2KhYVBWCAGgoWNhd2B3c7/+d55v3mv9+q6rzju35p71po1a+KYOuecWev6/3zqLwIRiEAEIhCBCEQgAhGIQAQiEIFXJ/ApBcDLF3EZjEAEIhCBCEQgAhGIQAQiEIEIfEoBUCWIQAQiEIEIRCACEYhABCIQgQi8PIGRwXYADAgdEYhABCIQgQhEIAIRiEAEIhCBVyYgbykAUMhEIAIRiEAEIhCBCEQgAhGIQARel8DnnKUA+IyhfxGIQAQiEIEIRCACEYhABCIQgVcl8I18pQD4Bof+RyACEYhABCIQgQhEIAIRiEAEXpPAF7lKAfAFiKwIRCACEYhABCIQgQhEIAIRiMArEph5SgEwSWRHIAIRiEAEIhCBCEQgAhGIQARej8CXOUoB8CWKTiIQgQhEIAIRiEAEIhCBCEQgAq9G4Jv5SQHwTRadRSACEYhABCIQgQhEIAIRiEAEXovAkpsUAAuMTiMQgQhEIAIRiEAEIhCBCEQgAq9EYM1LCoCVRucRiEAEIhCBCEQgAhGIQAQiEIHXIfCVnKQA+AqOLiIQgQhEIAIRiEAEIhCBCEQgAq9C4Kv5SAHwVR5dRSACEYhABCIQgQhEIAIRiEAEXoPARi5SAGwA6TICEYhABCIQgQhEIAIRiEAEIvAKBDbzkAJgk0jXEYhABCIQgQhEIAIRiEAEIhCB5yfwtRykAPgakhwiEIEIRCACEYhABCIQgQhEIALPTuDr6U8B8HUmuUQgAhGIQAQiEIEIRCACEYhABJ6bwJbUpwDYAiWnCEQgAhGIQAQiEIEIRCACEYjAMxPYlvYUANuo5BaBCEQgAhGIQAQiEIEIRCACEXheAltTngJgK5YcIxCBCEQgAhGIQAQiEIEIRCACz0pge7pTAGznkmsEIhCBCEQgAhGIQAQiEIEIROA5CexIdQqAHWByjkAEIhCBCEQgAhGIQAQiEIEIPCOBXWlOAbCLTO4RiEAEIhCBCEQgAhGIQAQiEIHnI7AzxSkAdqLpRgQiEIEIRCACEYhABCIQgQhE4NkI7E5vCoDdbLoTgQhEIAIRiEAEIhCBCEQgAhF4LgJ7UpsCYA+cbkUgAhGIQAQiEIEIRCACEYhABJ6JwL60pgDYR6d7EYhABCIQgQhEIAIRiEAEIhCB5yGwN6UpAPbi6WYEIhCBCEQgAhGIQAQiEIEIROBZCOxPZwqA/Xy6G4EIRCACEYhABCIQgQhEIAIReA4CB1KZAuAAoG5HIAIRiEAEIhCBCEQgAhGIQASegcChNKYAOESo+xGIQAQiEIEIRCACEYhABCIQgccncDCFKQAOIspDBCIQgQhEIAIRiEAEIhCBCEQgAp8+fYrB3QkbALg78iKMQAQiEIEIRCACEYhABCIQgQcTSAFwfwbFGIEIRCACEYhABCIQgQhE4N0JfED+UwB8APaijEAEIhCBCEQgAhGIQAQiEIEPvH7PvfexTQEAPwAAAABJRU5ErkJggg==";

  return (
    <footer className="bg-surface-container-highest">
      {/* Footer Top Directory */}
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto gap-12 md:gap-gutter">
        
        {/* Brand details */}
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-4">
            <img
              alt="STUDIO VERSE Logo"
              className="h-10 w-auto"
              src={logoBase64}
            />
            <span className="font-serif text-headline-md tracking-tighter text-primary">
              STUDIO VERSE
            </span>
          </div>
          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
            Timeless spaces designed with architectural precision and warm materiality.
          </p>
        </div>

        {/* Directory grids */}
        <div className="flex flex-wrap gap-x-24 gap-y-12">
          {/* Quick links */}
          <div className="space-y-4">
            <h5 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              STUDIO
            </h5>
            <div className="flex flex-col gap-2 font-sans text-body-md text-on-surface-variant">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.label}
                  className="hover:text-primary transition-colors inline-block"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="space-y-4">
            <h5 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              SOCIAL
            </h5>
            <div className="flex flex-col gap-2 font-sans text-body-md text-on-surface-variant">
              <a
                className="hover:text-primary transition-colors inline-block"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:text-primary transition-colors inline-block"
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
              >
                Pinterest
              </a>
              <a
                className="hover:text-primary transition-colors inline-block"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer bar */}
      <div className="border-t border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center font-label-caps text-[10px] text-on-surface-variant tracking-widest">
        &copy; {new Date().getFullYear()} STUDIO VERSE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

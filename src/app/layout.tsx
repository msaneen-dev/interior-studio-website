import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STUDIO VERSE | Premium Interior Design & Architecture",
  description:
    "We blend structural precision with domestic warmth to create spaces that are as functional as they are poetic.",
  keywords:
    "interior design, architecture, premium interior design, luxury architecture, minimalist interior",
  authors: [{ name: "Studio Verse" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-surface text-on-surface font-sans antialiased overflow-x-hidden selection:bg-accent/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

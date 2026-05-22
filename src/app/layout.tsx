import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STUDIO VERSE | Premium Interior Design & Architecture",
  description: "We blend structural precision with domestic warmth to create spaces that are as functional as they are poetic. Elegant minimal interior design and luxury architecture studio website.",
  keywords: "interior design, architecture, premium interior design, luxury architecture, minimalist interior, modern house, architectural studio",
  authors: [{ name: "Studio Verse" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${hankenGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-surface text-on-surface font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

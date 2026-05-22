import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />
    </>
  );
}

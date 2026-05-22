"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactData } from "@/data/content";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate premium API call transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section
      id="contact"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-high"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-y-12 md:gap-gutter">
        {/* Contact information details */}
        <div className="col-span-12 md:col-span-5 space-y-12 pr-0 md:pr-12">
          <div>
            <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block mb-4">
              INQUIRE
            </span>
            <h2 className="font-serif text-headline-lg text-primary leading-tight">
              Let's create something timeless.
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant tracking-wider mb-2">
                EMAIL US
              </p>
              <p className="font-serif text-[24px] text-primary">{contactData.email}</p>
            </div>
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant tracking-wider mb-2">
                VISIT US
              </p>
              <p className="font-serif text-[24px] text-primary">
                {contactData.address}
              </p>
            </div>
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant tracking-wider mb-2">
                CALL US
              </p>
              <p className="font-serif text-[24px] text-primary">{contactData.phone}</p>
            </div>
          </div>
        </div>

        {/* Contact form panel */}
        <div className="col-span-12 md:col-span-7 bg-surface p-8 md:p-12 canvas-shadow relative min-h-[460px] flex items-center">
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-10 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      required
                      className="underlined-input bg-transparent py-2 px-0 border-0 rounded-none focus:ring-0 text-primary font-sans placeholder:text-outline-variant"
                      id="name"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      className="underlined-input bg-transparent py-2 px-0 border-0 rounded-none focus:ring-0 text-primary font-sans placeholder:text-outline-variant"
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider"
                    htmlFor="message"
                  >
                    Project Details
                  </label>
                  <textarea
                    required
                    className="underlined-input bg-transparent py-2 px-0 border-0 rounded-none focus:ring-0 text-primary font-sans placeholder:text-outline-variant resize-none"
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-widest hover:bg-on-primary-container transition-all active:opacity-70 disabled:opacity-50 flex items-center justify-center cursor-pointer"
                  type="submit"
                >
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 space-y-6 w-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-container text-on-secondary-container mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-primary">Inquiry Sent.</h3>
                <p className="font-sans text-body-md text-on-surface-variant max-w-sm mx-auto">
                  Thank you for reaching out. A design consultant will review
                  your project details and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="inline-block border-b border-primary pb-1 font-label-caps text-label-caps text-primary hover:opacity-75 transition-all mt-4"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

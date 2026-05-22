"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactSectionData } from "@/data/content";
import { easeOut } from "@/lib/motion";
import { studioTheme } from "@/lib/studio-theme";
import { Icon } from "@/components/Icon";

const inputClass =
  "w-full border bg-transparent px-4 py-3 font-sans text-sm outline-none transition-colors duration-300 focus:border-[rgba(201,169,98,0.5)] placeholder:text-white/30";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const fieldStyle = {
    borderColor: studioTheme.borderSubtle,
    color: studioTheme.text,
  };

  return (
    <div
      className="h-full border p-6 sm:p-8"
      style={{
        backgroundColor: "rgba(18, 17, 16, 0.75)",
        borderColor: studioTheme.borderSubtle,
      }}
    >
      <AnimatePresence mode="wait">
        {!submitSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                required
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                style={fieldStyle}
              />
              <input
                required
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                style={fieldStyle}
              />
            </div>

            <div className="relative">
              <select
                id="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`${inputClass} appearance-none pr-10`}
                style={{ ...fieldStyle, color: formData.projectType ? studioTheme.text : undefined }}
              >
                <option value="" className="bg-[#121110]">
                  Project Type
                </option>
                {contactSectionData.projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#121110]">
                    {type}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDown"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
                style={{ color: studioTheme.goldMuted }}
              />
            </div>

            <textarea
              required
              id="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              style={fieldStyle}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 px-8 font-label-caps text-[0.6875rem] tracking-[0.14em] transition-all duration-300 hover:brightness-110 disabled:opacity-50"
              style={{ backgroundColor: studioTheme.gold, color: studioTheme.bg }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Icon name="ArrowRight" className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex min-h-[320px] flex-col items-center justify-center py-8 text-center"
          >
            <div
              className="mb-4 flex h-14 w-14 items-center justify-center border"
              style={{ borderColor: studioTheme.gold, color: studioTheme.gold }}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl" style={{ color: studioTheme.text }}>
              Message Sent.
            </h3>
            <p className="mt-3 max-w-xs text-sm" style={{ color: studioTheme.textMuted }}>
              Thank you for reaching out. We will respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setSubmitSuccess(false)}
              className="mt-6 font-label-caps text-[0.65rem] tracking-[0.12em]"
              style={{ color: studioTheme.gold }}
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

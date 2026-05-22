/** Shared dark premium palette (hero, about, etc.) */
export const studioTheme = {
  bg: "#0a0908",
  bgElevated: "#121110",
  text: "#f5f2ec",
  textMuted: "rgba(245, 242, 236, 0.65)",
  gold: "#c9a962",
  goldLight: "#e8d5a8",
  goldMuted: "#8a7348",
  border: "rgba(201, 169, 98, 0.25)",
  borderSubtle: "rgba(255, 255, 255, 0.08)",
} as const;

export const DARK_SECTION_IDS = [
  "home",
  "about",
  "services",
  "projects",
  "difference",
  "testimonials",
  "process",
  "contact",
  "footer",
] as const;

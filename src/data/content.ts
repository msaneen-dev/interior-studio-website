export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  altText: string;
  widthClass: string;
  heightClass: string;
  mtClass: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const servicesData: Service[] = [
  {
    id: "interior-design",
    title: "Interior Design",
    description: "Curated spaces that reflect personal identity through a lens of timeless sophistication.",
    iconName: "Sofa",
  },
  {
    id: "space-planning",
    title: "Space Planning",
    description: "Optimizing flow and functionality without compromising the aesthetic integrity of the home.",
    iconName: "DraftingCompass",
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    description: "Photorealistic renderings that allow you to step into your future space before construction begins.",
    iconName: "Box",
  },
  {
    id: "renovation",
    title: "Renovation",
    description: "Breathing new life into heritage structures through sensitive and structural modernization.",
    iconName: "Building2",
  },
  {
    id: "turnkey-execution",
    title: "Turnkey Execution",
    description: "Full-service management from concept to completion, ensuring an effortless client journey.",
    iconName: "Key",
  },
  {
    id: "consultation",
    title: "Consultation",
    description: "Professional advisory on material selection, lighting design, and art curation.",
    iconName: "MessageSquare",
  },
];

export const projectsData: Project[] = [
  {
    id: "obsidian-villa",
    title: "The Obsidian Villa",
    location: "MALIBU, CALIFORNIA",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQmy7bnLHE2vh4BvwgD4-P00JCbkIYYWXqm501Le1j2UnBypEGYgH55lOoh3NNM8TJnXghYowNz6oPE2lDVLUCrcfPxV_1BQyoaLxcg9CDUsQ0g9KOFIyIx2_6lkOm79kNXLXekXRn2sRQEWuVm8he_H0bBQSq8A5RPMYqbSJNRNkiF5d_5T85KYSgUd5qPiH7dz8cwPZLLg_sS5YD_MVOsrwHt2r7rScAhlAmaDlLhZCBn0ZB_Fc9mYOVnYKLW-HGAOc_zgMjgKcN",
    altText: "A panoramic view of a modern living room in a coastal villa. The design features a sunken seating area with charcoal upholstery, a monolithic stone fireplace, and a backdrop of the ocean visible through huge glass walls. The lighting is atmospheric and soft, capturing a sense of tranquil luxury.",
    widthClass: "col-span-12 md:col-span-8",
    heightClass: "h-[500px]",
    mtClass: "mb-12",
  },
  {
    id: "chelsea-loft",
    title: "Chelsea Loft",
    location: "NEW YORK CITY",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3bt91S5YCPc_kIcG9xy9-N3JweIWtweJgDYyU0tp9vbghL1CTK1MuUVEVAIq-A7K6-5oHAN8dDlngp2HAO7i4F-3abg17lX3z5rlbI20eqNklM3fc62gJ9VSpYWZkNa-i-s4bWvgSK0mR41cBYiQE2t1A635ZIYDt0-zQ31ftpYgpMtzNoYxPiwV0fOJxGep0FUogA34PWT_jbYTgx5s0Tm78aojmT3lqrAy4L-leSqf2n0BnwCBl8B1OYSBqywzWFE4haj3bGYWO",
    altText: "An editorial-style photograph of a minimalist kitchen with a focus on a single, massive island made of dark honed granite. The cabinetry is matte black, and the floor is a light, seamless concrete. One dramatic spotlight illuminates the island, creating a moody and sophisticated architectural scene.",
    widthClass: "col-span-12 md:col-span-4",
    heightClass: "h-[400px]",
    mtClass: "mt-24 mb-12",
  },
  {
    id: "belgravia-suite",
    title: "The Belgravia Suite",
    location: "LONDON, UK",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4KYXgGMUDoqi25lHx1lw6tYLZzGQnHszBKZ9yv9R4o24Oo5RZc-jw_E65oogJfYpvDNZF8RfwvPO-yBGV4yhHPepydZUX_11QXDQOcbHBOVHHS6M1W_OVbZkTTT7DwW08tX94dHYxf29Ss7TeHDNdAfPkqnEcSVzSjNoN5oRawaPjVCpNmlPZ4UTP7urxOtnSqIcWZYkXvxB5oiXgh3_pnvjpHodhxELrpmNKLuh5WD9BynZuKZmOxf_ZmfhNohw0cnWgIeWnsY0-",
    altText: "A serene master bedroom design characterized by soft linen textures in cream and beige. A large abstract artwork in charcoal and white hangs above the bed. The room is flooded with morning light, highlighting the natural grain of the light oak bedside tables and the soft pile of a handmade wool rug.",
    widthClass: "col-span-12 md:col-span-4",
    heightClass: "h-[400px]",
    mtClass: "mb-12",
  },
  {
    id: "zen-residence",
    title: "Zen Residence",
    location: "KYOTO, JAPAN",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrFZFAMUWW7aezaWTFkgIuOC-LYEkcQxLNszwcw4ddrWdrO7WrSEeo0kZk1t4Sme_ELQ5laPFVVySeEEyvLj3LNJuGI7pJCXOHR8GXa0Rf6_JEuk-Sk24dxuVyZ2kWVmf2OmqFjGYGUEeHF4vN5kQCsK-8kn2JXSTT6CvvBDUWsOR4ZM9xMBoRrtRHHtDFuheTrGhZpk-xQXHaAhX-b9q0bYEHC71WAcg2EGFEeD2p-MuRAlxhe9PpPk95n4mh1Mb1VxYE_l6m4QHA",
    altText: "A dramatic exterior shot of a modern architectural home at twilight. The structure is composed of cantilevered concrete volumes and warm cedar wood slats. Soft interior lights glow through large windows, reflecting on the surface of a sleek infinity pool in the foreground. The overall mood is luxurious, private, and contemporary.",
    widthClass: "col-span-12 md:col-span-8",
    heightClass: "h-[500px]",
    mtClass: "mb-12 md:-mt-12",
  },
];

export const featuresData: Feature[] = [
  {
    id: "bespoke-design",
    title: "Bespoke Design",
    description: "Every project is a unique response to its environment and owner. We reject the template, choosing instead the tailored path.",
    iconName: "Palette",
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Materials",
    description: "Luxury shouldn't cost the earth. We source responsibly, prioritizing natural, long-lasting materials with low environmental impact.",
    iconName: "Leaf",
  },
  {
    id: "expert-craftsmanship",
    title: "Expert Craftsmanship",
    description: "We partner with the world's finest artisans to ensure that every joint, stitch, and finish is executed to perfection.",
    iconName: "Award",
  },
  {
    id: "timeless-results",
    title: "Timeless Results",
    description: "Our designs are not subject to the whims of trends. We create spaces that remain relevant and beautiful for generations.",
    iconName: "Clock",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "eleanor-vance",
    quote: "Studio Verse transformed our house into a home that speaks to our souls. Their attention to light and texture is unmatched in the industry.",
    author: "ELEANOR VANCE",
    role: "CEO, Vantage International",
  },
  {
    id: "julian-marx",
    quote: "The most professional and creative team we have ever worked with. They managed the complexity of our project with effortless grace.",
    author: "JULIAN MARX",
    role: "Architectural Collector",
  },
];

export const processStepsData: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Consultation",
    description: "We begin by listening. Understanding your lifestyle, needs, and the unique challenges of your site.",
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Concept",
    description: "We translate our insights into a visual narrative through sketches, mood boards, and materiality.",
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Development",
    description: "Technical precision meets creative flair. We produce detailed drawings and 3D realizations.",
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Realization",
    description: "The physical manifestation of the vision. On-site management ensures every detail is perfect.",
  },
];

export const contactData = {
  email: "studio@verse.design",
  address: "1245 Design District, London, UK",
  phone: "+44 20 7946 0123",
};

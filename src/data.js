// import expense from "/src/assets/favicon.svg";
// ============================================================
//  DATA.JS — Edit everything about the site's content here.
//  Components read from this file, so you rarely need to
//  touch any .jsx files to update copy, links, or images.
// ============================================================

export const siteInfo = {
  logoText: "PORTFOLIO",
  logoMark: "©",
  email: "ekey6343@gmail.com",
  hireLabel: "Work With Me",
};

export const navItems = [
  { id: "hero", icon: "House" },
  { id: "work", icon: "Layers" },
  { id: "blog", icon: "Files" },
  { id: "contact", icon: "Send" },
];

export const hero = {
  badge: "Available for Projects",
  titlePrefix: "Creating",
  titleHighlight: "Digital",
  titleSuffix: "Mastery.",
  subtext:
    "Senior UI/UX Designer specializing in high-conversion products and emotional design.",
  scrollLabel: "Scroll",
};

export const skills = [
  { id: "html", label: "HTML5", icon: "HTML", color: "#e34c26" },
  { id: "css", label: "CSS3", icon: "CSS", color: "#264de4" },
  { id: "js", label: "JavaScript", icon: "JS", color: "#f7df1e" },
  { id: "react", label: "React", icon: "RT", color: "#61dbfb" },
  { id: "ts", label: "TypeScript", icon: "TS", color: "#3178c6" },
  { id: "tailwind", label: "Tailwind", icon: "TW", color: "#38bdf8" },
];

export const skillsSection = {
  title: "Technical",
  titleHighlight: "Expertise",
  subtitle: "Crafting digital experiences with precision and code.",
};

export const workSection = {
  title: "Selected Works",
  subtitle: "(2024—2026)",
};

export const projects = [
  {
    id: "nexa",
    number: "01",
    name: "Expense Tracker",
    category: "HTML, CSS ,JavaScript",

    github: "https://github.com/Harshking001/Expence",
    preview: "https://harshking001.github.io/Expence/",
    image: '',
  },
  // {
  //   id: "aura",
  //   number: "02",
  //   name: "Aura AI",
  //   category: "SaaS Dashboard",

  //   github: "",
  //   preview: "",
  //   image: "",
  // },
];

export const testimonialsSection = {
  title: "Client Love",
  subtitle:
    "Don't just take my word for it. Here is what global partners say.",
};

export const testimonials = [
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "CEO, FinTech Global",
    text: "The UI/UX work provided by StudioX transformed our conversion rates by 40%. Their attention to micro-interactions is world-class.",
    image: "people-2",
    featured: false,
  },
  {
    id: "marcus",
    name: "Marcus Aurelius",
    role: "Product Lead, Nexa",
    text: "Rarely do you find a designer who understands both business goals and aesthetic beauty. A true partner in our product's success.",
    image: "people-3",
    featured: true,
  },
  {
    id: "elena",
    name: "Elena Rodriguez",
    role: "Founder, Aura AI",
    text: "Super fast delivery and incredible communication. The Bento-style dashboard they designed for us is a masterpiece.",
    image: "people-1",
    featured: false,
  },
];

export const blogPosts = [
  {
    id: "spatial-ui",
    featured: true,
    badge: "Featured",
    date: "March 2026",
    title: "The Psychology of Spatial UI in AR/VR",
    description:
      "How depth perception changes the way we design interfaces for the next generation of headsets.",
    linkLabel: "Read Case Study →",
    href: "#",
  },
  {
    id: "micro-interactions",
    featured: false,
    category: "Trend",
    title: "Micro-interactions: The Secret to High Retention",
    linkLabel: "Read More",
    href: "#",
  },
  {
    id: "accessible-color",
    featured: false,
    category: "UI/UX",
    title: "Accessible Color Palettes for Enterprise SaaS",
    linkLabel: "Read More",
    href: "#",
  },
];

export const contactSection = {
  titlePrefix: "Let's",
  titleHighlight: "Connect",
  description: "Have a project in mind? Let's turn your ideas into reality.",
  fields: {
    name: "Your Name",
    email: "Email Address",
    message: "How can I help?",
  },
  submitLabel: "Send Message",
};

export const footer = {
  brand: "PortfolioWeb",
  tagline: "Crafting digital experiences with precision and passion.",
  copyright: "© 2026 . Built with love and Code.",
  socials: [
    { id: "whatsapp", icon: "MessageCircle", href: "https://wa.me/0758319497?Need a website=Your%20URL%20encoded%20text", label: "WhatsApp" },
    { id: "github", icon: "Github", href: "https://github.com/Harshking001", label: "GitHub" },
    { id: "instagram", icon: "Instagram", href: "https://www.instagram.com/harshkey931/", label: "Instagram" },
  ],
};

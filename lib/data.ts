export interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  accent: string;
  link: string;
  repo: string;
}

export interface Skill {
  name: string;
  value: number;
  group: string;
}

export interface Article {
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Synalyzer",
    type: "SaaS / Log Intelligence",
    description:
      "A cloud-based Synology log analysis platform that turns NAS activity into searchable, actionable reports for administrators.",
    tags: ["Next.js", "PHP", "MySQL", "Prisma"],
    accent: "navy",
    link: "#",
    repo: "https://github.com/",
  },
  {
    number: "02",
    title: "AnyPart.lk",
    type: "Marketplace",
    description:
      "A Sri Lankan spare-parts marketplace concept connecting vehicle and machine part buyers with sellers.",
    tags: ["React Native", "Expo", "Firebase", "NativeWind"],
    accent: "orange",
    link: "#",
    repo: "https://github.com/",
  },
  {
    number: "03",
    title: "Syslog Console",
    type: "DevOps / Analytics",
    description:
      "A secure admin dashboard for collecting, filtering and visualizing high-volume infrastructure logs from distributed devices.",
    tags: ["Next.js", "Node.js", "MySQL", "Docker"],
    accent: "slate",
    link: "#",
    repo: "https://github.com/",
  },
  {
    number: "04",
    title: "Venture Roots",
    type: "Business Website",
    description:
      "A polished accounting and advisory web presence focused on credibility, clarity and conversion.",
    tags: ["Next.js", "MongoDB", "UI/UX", "SEO"],
    accent: "ink",
    link: "#",
    repo: "https://github.com/",
  },
];

export const skills: Skill[] = [
  { name: "Next.js / React", value: 94, group: "Frontend" },
  { name: "TypeScript / JavaScript", value: 91, group: "Frontend" },
  { name: "Node.js / APIs", value: 88, group: "Backend" },
  { name: "PHP / REST", value: 84, group: "Backend" },
  { name: "MySQL / Prisma", value: 90, group: "Data" },
  { name: "Firebase", value: 82, group: "Data" },
  { name: "Docker / Linux", value: 86, group: "DevOps" },
  { name: "Git / GitHub", value: 93, group: "DevOps" },
];

export const articles: Article[] = [
  {
    date: "OCT 02, 2026",
    category: "ARCHITECTURE",
    title: "Designing a reliable log pipeline from NAS to cloud",
    excerpt: "The practical pieces behind collection, normalization, processing and delivery when infrastructure logs cannot be lost.",
  },
  {
    date: "SEP 18, 2026",
    category: "NEXT.JS",
    title: "Keeping animated dashboards fast on small VPS machines",
    excerpt: "How to balance motion, rendering cost and server resources without sacrificing the interface.",
  },
  {
    date: "AUG 29, 2026",
    category: "DATABASE",
    title: "Practical retention strategies for high-volume event data",
    excerpt: "A simple approach to device-level retention, indexes and scheduled cleanup for operational databases.",
  },
];

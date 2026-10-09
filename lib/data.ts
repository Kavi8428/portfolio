export interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  longDescription?: string;
  role?: string;
  year?: string;
  keyFeatures?: string[];
  tags: string[];
  accent: string;
  link: string;
  repo: string;
  video?: string;
  poster?: string;
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
    longDescription:
      "Synalyzer is engineered to aggregate syslog data from remote Synology NAS units into an intuitive, real-time diagnostic dashboard. Administrators get automatic security anomaly alerts, automated log categorization, and instant search across millions of events.",
    role: "Full-Stack Architecture & UI Design",
    year: "2026",
    keyFeatures: [
      "Real-time log stream processing with PHP & WebSockets",
      "Interactive threat pattern analysis dashboard",
      "Custom retention rules and automated database partitioning",
      "Exportable compliance reporting (PDF & CSV)",
    ],
    tags: ["Next.js", "PHP", "MySQL", "Prisma"],
    accent: "navy",
    link: "https://synalyze.net/",
    repo: "https://github.com/Active-Solutions-Lk/syslog-client",
    video: "/videos/synalyzers.mp4",
  },
  {
    number: "02",
    title: "AnyPart.lk",
    type: "Marketplace",
    description:
      "A Sri Lankan spare-parts marketplace concept connecting vehicle and machine part buyers with sellers.",
    longDescription:
      "AnyPart.lk solves spare part discovery by connecting industrial machinery, auto part vendors, and mechanics across Sri Lanka through localized geometric location search and direct real-time vendor chat.",
    role: "Mobile Lead & Frontend Developer",
    year: "2025",
    keyFeatures: [
      "Cross-platform iOS & Android app built with React Native & Expo",
      "Instant category filtering and OEM part number lookup",
      "Real-time buyer to vendor messaging with Firebase",
      "Location-based store locator and direct quote requests",
    ],
    tags: ["React Native", "Expo", "Firebase", "NativeWind"],
    accent: "orange",
    link: "https://anypart.lk/",
    repo: "https://github.com/Kavi8428/anypart",
    video: "/videos/anypart.mp4",
  },
  {
    number: "03",
    title: "VaultNX",
    type: "DevOps / Security",
    description:
      "VaultNX is built for IT administrators and security-conscious organisations that require strong, auditable, local-first file encryption.",
    longDescription:
      "VaultNX delivers high-speed, local-first zero-trust file encryption and audit logging for sensitive organization infrastructure. It eliminates third-party key dependency while providing an intuitive web interface for admin operations.",
    role: "Lead Security Architect",
    year: "2025",
    keyFeatures: [
      "Client-side AES-256-GCM encryption before data transfer",
      "Tamper-evident administrative audit logs",
      "Role-based permission keys and timed access grants",
      "Low-overhead MySQL & Tailwind administrative dashboard",
    ],
    tags: ["PHP", "Tailwind", "MySQL", "Payment"],
    accent: "slate",
    link: "https://vaultnx.com/",
    repo: "https://github.com/Active-Solutions-Lk/vaultnx.git",
    video: "/videos/vaultnx.mp4",
  },
  {
    number: "04",
    title: "Venture Roots",
    type: "Business Website",
    description:
      "A polished accounting and advisory web presence focused on credibility, clarity and conversion.",
    longDescription:
      "Venture Roots is a modern corporate web platform designed to establish high digital credibility for advisory and financial service professionals. Built with SSR for lightning-fast page loads and maximum search engine discoverability.",
    role: "Full-Stack Web Developer",
    year: "2024",
    keyFeatures: [
      "Server-rendered Next.js architecture optimized for sub-second LCP",
      "Dynamic client case study showcase & booking funnel",
      "Headless CMS integration for dynamic news and insight articles",
      "Fully accessible responsive layout with smooth micro-animations",
    ],
    tags: ["Next.js", "MongoDB", "UI/UX", "SEO"],
    accent: "ink",
    link: "https://ventureroots.lk/",
    repo: "https://github.com/Kavi8428/ventureroots",
    video: "/videos/venture.mp4",
  },
];

export const skills: Skill[] = [
  { name: "Next.js / React", value: 94, group: "Frontend" },
  { name: "TypeScript / JavaScript", value: 91, group: "Frontend" },
  { name: "Node.js / APIs", value: 88, group: "Backend" },
  { name: "PHP / .NET", value: 84, group: "Backend" },
  { name: "MySQL / Prisma", value: 90, group: "Data" },
  { name: "Firebase / MongoDB", value: 82, group: "Data" },
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

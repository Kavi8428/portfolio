export const bio = {
  name: "M D L U Kavishka",
  fullName: "Malitha Dhanuka Lakshan Udara Kavishka",
  location: "Sri Lanka 🇱🇰",
  availability: "Open to freelance & product collaborations",
  languages: ["Sinhala (Native)", "English (Professional)"],
  headline: "I build things that work — from interface to infrastructure.",
  about: [
    "I'm a full-stack developer based in Sri Lanka with a passion for building robust and scalable applications.",
    "My work sits at the intersection of engineering rigour and intuitive user experiences, focusing on clean code and maintainable architectures.",
  ],
  personalDetails: [
    { label: "Date of Birth", value: "30 May 2000" }, // User can update this
    { label: "Nationality", value: "Sri Lankan" },
    { label: "Location", value: "Nugegoda, Sri Lanka" },
    { label: "Email", value: "lakshanudara987@gmail.com" },
    { label: "Phone", value: "+94 70 49 73 144" },
    { label: "Availability", value: "Full Site, Hybrid & Remote Works" },
  ],
  interests: [
    {
      icon: "⬡",
      title: "Systems Thinking",
      body: "Engineering robust, maintainable architectures that scale with confidence.",
    },
    {
      icon: "◈",
      title: "Clean Engineering",
      body: "Writing code that is readable, tested, and built to be understood six months later.",
    },
  ],
};

export interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field?: string;
  grade?: string;
  type: "degree" | "hnd" | "diploma" | "school";
}

export const education: EducationItem[] = [
  {
    year: "2026 — Present",
    institution: "University of Moratuwa",
    degree: "Bachelor of Information Technology",
    field: "Information Technology",
    // grade: "GPA: 3.x / 4.0",
    type: "degree",
  },
   {
    year: "2020 — 2025",
    institution: "Hardy Advanced Technological Institute",
    degree: "Higher National Diploma in Information Technology",
    field: "Software Engineering",
    grade: "Distinction",
    type: "hnd",
  }
]

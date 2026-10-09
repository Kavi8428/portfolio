"use client";

import { useRef, useState } from "react";
import { useAnimations } from "@/hooks/useAnimations";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/case-study/ProjectsSection";
import SkillsSection from "@/components/capability/SkillsSection";
import WritingSection from "@/components/notes/WritingSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useAnimations(root, cursor, cursorDot);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <main ref={root} className="site">
      <div className="loader">
        <div className="loader-inner">
          <span>MDLU</span>
          <span>KAVISHKA</span>
          <div className="loader-line" />
        </div>
      </div>

      <div ref={cursor} className="cursor-ring" />
      <div ref={cursorDot} className="cursor-dot" />

      <Header />
      <Hero />
      <AboutSection />

      <div className="marquee">
        <div className="marquee-track">
          <span>CODE</span><b>✦</b><span>CREATE</span><b>✦</b><span>DEPLOY</span><b>✦</b>
          <span>OPEN SOURCE</span><b>✦</b><span>CODE</span><b>✦</b><span>CREATE</span><b>✦</b>
          <span>DEPLOY</span><b>✦</b><span>OPEN SOURCE</span><b>✦</b>
        </div>
      </div>

      <ProjectsSection />
      <SkillsSection />
      <WritingSection />
      <Footer sent={sent} handleSubmit={handleSubmit} />
    </main>
  );
}

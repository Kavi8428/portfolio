"use client";

import { useEffect, useState } from "react";
import { Github, Home, User, Briefcase, Zap, FileText, Mail } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const NAV_ITEMS = [
  { id: "top", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "writing", label: "Writing", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1. Sticky Top Navbar (Desktop) */}
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="brand">
          M.D.L.U. KAVISHKA<span>.</span>
        </a>
        <nav className="nav-links">
          {NAV_ITEMS.filter((item) => item.id !== "top").map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <Magnetic>
            <a
              className="github-pill"
              href="https://github.com/Kavi8428"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} /> GitHub
            </a>
          </Magnetic>
        </div>
      </header>

      {/* 2. Right-Side Dot Nav (Tablet) */}
      <nav className="dot-nav" aria-label="Section dots navigation">
        <div className="dot-nav-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`dot-item ${isActive ? "active" : ""}`}
                aria-label={item.label}
              >
                <span className="dot-tooltip">[ {item.label} ]</span>
                <span className="dot-circle" />
              </a>
            );
          })}
        </div>
      </nav>

      {/* 3. Bottom Tab Bar (Mobile) */}
      <nav className="bottom-nav" aria-label="Mobile navigation">
        <div className="bottom-nav-inner">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`tab-item ${isActive ? "active" : ""}`}
              >
                <div className="tab-icon-box">
                  <Icon size={18} />
                </div>
                <span className="tab-label">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}

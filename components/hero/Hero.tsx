"use client";

import { ArrowDownRight, Github, Code2, Terminal, Database, Cloud } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow reveal-item">
            <span className="status-dot" /> AVAILABLE FOR SELECTED PROJECTS
          </div>
          <h1>
            <span className="word-mask"><span className="hero-word">FULL-STACK</span></span>
            <span className="word-mask"><span className="hero-word accent-word">DEVELOPER</span></span>
          </h1>
          <p className="hero-description reveal-item">
            I&apos;m <strong>M D L U KAVISHKA</strong> — I design and engineer fast,
            reliable digital products from interface to infrastructure.
          </p>
          <div className="hero-cta reveal-item">
            <Magnetic>
              <a href="#work" className="primary-btn">
                Explore my work <ArrowDownRight size={18} />
              </a>
            </Magnetic>
            <a href="https://github.com/Kavi8428" className="text-link" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb" />
          <div className="photo-frame">
            <img
              className="hero-photo"
              src="/images/hero-dp.png"
              alt="M D L U Kavishka — Full-Stack Developer"
            />
          </div>
          <div className="stack-card reveal-item">
            <span className="stack-label">CURRENT STACK</span>
            <div className="stack-icons">
              <div><Code2 size={19} /><small>React</small></div>
              <div><Terminal size={19} /><small>Next</small></div>
              <div><Database size={19} /><small>DB</small></div>
              <div><Cloud size={19} /><small>Cloud</small></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom reveal-item">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"><i /></div>
        <span>2026 / SRI LANKA</span>
      </div>
    </section>
  );
}

"use client";

import { Code2, Database, GitBranch, Cpu } from "lucide-react";
import { skills } from "@/lib/data";
import SkillRow from "./SkillRow";

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-head" data-reveal>
        <div>
          <span className="section-kicker">CAPABILITIES / 08</span>
          <h2>Tools I <em>think with.</em></h2>
        </div>
        <p>My strongest work happens where product thinking, clean code and infrastructure reliability overlap.</p>
      </div>

      <div className="skills-layout">
        <div className="skills-intro" data-reveal>
          <div className="big-number">08</div>
          <p>core technologies</p>
          <div className="skill-icons">
            <Code2 />
            <Database />
            <GitBranch />
            <Cpu />
          </div>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

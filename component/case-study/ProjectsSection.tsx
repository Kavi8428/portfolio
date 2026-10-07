"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="work" className="section projects-section">
      <div className="section-head" data-reveal>
        <div>
          <span className="section-kicker">SELECTED WORK / 04</span>
          <h2>Things I&apos;ve <em>built.</em></h2>
        </div>
        <p>Products, platforms and experiments where engineering meets thoughtful interface design.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

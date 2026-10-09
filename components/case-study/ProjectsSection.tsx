"use client";

import { useState } from "react";
import { projects, Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <ProjectCard
            key={project.number}
            project={project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

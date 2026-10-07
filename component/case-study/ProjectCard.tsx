"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-top">
        <span>{project.number}</span>
        <span>{project.type}</span>
      </div>
      <div className="project-art">
        <div className="art-window">
          <div className="art-bar"><i /><i /><i /></div>
          <div className="art-lines"><b /><b /><b /><b /></div>
          <div className="art-block" />
        </div>
        <span className="art-label">CASE / STUDY</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.link}>Live demo <ArrowUpRight size={16} /></a>
          <a href={project.repo} target="_blank" rel="noreferrer">
            Repository <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

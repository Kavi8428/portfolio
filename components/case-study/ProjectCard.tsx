"use client";

import { ArrowUpRight, Github, Eye } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    // If clicking directly on an anchor or button inside project-links, let default navigation happen
    const target = e.target as HTMLElement;
    if (target.closest("a")) {
      return;
    }
    if (onSelect) {
      onSelect(project);
    }
  };

  return (
    <article
      className={`project-card ${project.accent} interactive-card`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (onSelect) onSelect(project);
        }
      }}
    >
      <div className="project-top">
        <span>{project.number}</span>
        <span>{project.type}</span>
      </div>
      <div className="project-art">
        {project.video ? (
          <div className="project-video-full">
            <video
              src={project.video}
              poster={project.poster}
              autoPlay
              muted
              loop
              playsInline
              className="art-video-full"
            />
          </div>
        ) : (
          <div className="art-window">
            <div className="art-bar"><i /><i /><i /></div>
            <div className="art-lines"><b /><b /><b /><b /></div>
            <div className="art-block" />
          </div>
        )}
        <span className="art-label">
          VIEW CASE STUDY <Eye size={12} className="art-label-icon" />
        </span>
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
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Live demo <ArrowUpRight size={16} />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Repository <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

"use client";

import { useEffect } from "react";
import { ArrowUpRight, Github, X, CheckCircle2, Calendar, UserCheck } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Video Banner Header */}
        <div className="modal-header">
          {project.video ? (
            <video
              src={project.video}
              poster={project.poster}
              autoPlay
              muted
              loop
              playsInline
              className="modal-video"
            />
          ) : (
            <div className={`modal-fallback ${project.accent}`}>
              <span>{project.type}</span>
            </div>
          )}
          <div className="modal-header-overlay" />
          <div className="modal-header-meta">
            <span className="modal-badge">{project.type}</span>
            <h2>{project.title}</h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          <div className="modal-info-grid">
            <div className="modal-info-item">
              <span className="info-label"><UserCheck size={14} /> ROLE</span>
              <span className="info-value">{project.role || "Full-Stack Engineer"}</span>
            </div>
            <div className="modal-info-item">
              <span className="info-label"><Calendar size={14} /> YEAR</span>
              <span className="info-value">{project.year || "2026"}</span>
            </div>
          </div>

          <div className="modal-section">
            <h4>Overview & Architecture</h4>
            <p>{project.longDescription || project.description}</p>
          </div>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="modal-section">
              <h4>Key Engineering Features</h4>
              <ul className="modal-features">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="feature-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h4>Technologies Used</h4>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="modal-footer">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="primary-btn modal-btn"
            >
              Visit Live Site <ArrowUpRight size={17} />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn modal-btn"
            >
              <Github size={17} /> Repository <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

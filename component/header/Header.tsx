"use client";

import { Github, Menu, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="nav">
      <a href="#top" className="brand">M.D.L.U<span>.</span></a>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#writing" onClick={() => setMenuOpen(false)}>Writing</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="nav-actions">
        <Magnetic>
          <a className="github-pill" href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
        </Magnetic>
        <button className="menu-button" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

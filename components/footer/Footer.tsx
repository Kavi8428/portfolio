"use client";

import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Send,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import Magnetic from "@/components/Magnetic";

interface FooterProps {
  sent: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Footer({ sent, handleSubmit }: FooterProps) {
  return (
    <footer id="contact" className="footer">
      <section className="statement-section">
        <div className="statement-bg">BUILD BETTER</div>
        <div className="statement-content" data-reveal>
          <Sparkles size={23} />
          <h2>Good software should feel <em>inevitable.</em></h2>
          <p>Simple on the surface. Thoughtful underneath.</p>
        </div>
      </section>

      <div className="footer-top" data-reveal>
        <div>
          <span className="section-kicker">GET IN TOUCH</span>
          <h2>Let&apos;s build<br /><em>something useful.</em></h2>
        </div>
        <a className="email-link" href="mailto:lakshanudara987@gmail.com">
          lakshanudara987@gmail.com <ArrowUpRight size={20} />
        </a>
      </div>

      <div className="contact-grid">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
          <label>Message<textarea required name="message" rows={5} placeholder="Tell me a little about the project..." /></label>
          <Magnetic>
            <button type="submit" className="primary-btn submit-btn">
              {sent ? (
                <>Message queued <CheckCircle2 size={17} /></>
              ) : (
                <>Send message <Send size={17} /></>
              )}
            </button>
          </Magnetic>
        </form>

        <div className="footer-side">
          <div className="availability">
            <span className="status-dot" />
            <div><b>Currently available</b><small>for freelance & product work</small></div>
          </div>
          <div className="socials">
            <a href="https://github.com/Kavi8428" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a href="https://www.linkedin.com/in/m-d-l-u-kavishka" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
            </a>
            <a href="mailto:lakshanudara987@gmail.com">
              <Mail size={17} /> Email <ArrowUpRight size={15} />
            </a>
          </div>
          <a href="/resume.pdf" download className="resume-btn">
            <Download size={17} /> Download résumé
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 M D L U KAVISHKA</span>
        <span>DESIGNED + ENGINEERED WITH INTENT</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

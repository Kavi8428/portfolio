import { bio, education } from "@/lib/bio";

export default function AboutSection() {
  return (
    <section id="about" className="section bio-section">
      <div className="section-head">
        <div>
          <div className="eyebrow" data-reveal>
            <span className="status-dot"></span>
            ABOUT / WHO I AM
          </div>
          <h2 className="bio-headline" data-reveal>
            Building with clarity &amp; <em>intent.</em>
          </h2>
        </div>
      </div>

      {/* Tier 1: Visual Showcase Stage & Bio Narrative */}
      <div className="bio-top-grid">
        {/* Left Column: Architectural Portrait Card */}
        <div className="bio-portrait-card" data-reveal-card>
          <div className="card-header-tag">[ 01 // LEAD DEVELOPER ]</div>
          <div className="bio-portrait-img-box">
            <img
              src="/images/i'm2.jpg"
              alt="M D L U Kavishka"
              className="bio-photo"
            />
          </div>
          <div className="bio-card-footer">
            <div className="card-name">M.D.L.U. KAVISHKA</div>
            <div className="card-title">Full-Stack Software Engineer</div>
            <div className="card-status">
              <span className="status-dot" /> Available for high-impact roles &amp; projects
            </div>
            <div className="card-actions">
              <a href="https://linkedin.com/in/kavishka-malith -66988a256/" target="_blank" rel="noreferrer" className="card-btn">LinkedIn</a>
              <a href="https://github.com/Kavi8428" target="_blank" rel="noreferrer" className="card-btn">GitHub</a>
              <a href="#" className="card-btn">CV</a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Prose & Quick Stats */}
        <div className="bio-content-col">
          <div className="bio-body">
            {bio.about.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bio-personal-info">
            {bio.personalDetails.map((detail, i) => (
              <div key={i} className="bio-fact-item">
                <div className="bio-fact-label">{detail.label}</div>
                <div className="bio-fact-value">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tier 2: Credentials & Philosophy Split */}
      <div className="bio-bottom-grid">
        {/* Left: Education Timeline */}
        <div className="bio-education-pane">
          <div className="edu-label" data-reveal>
            EDUCATION &amp; BACKGROUND
          </div>
          <div className="edu-list">
            {education.map((item, i) => (
              <div key={i} className={`edu-item ${item.type}`}>
                <div className="edu-dot" />
                <div className="edu-content">
                  <div className="edu-year">{item.year}</div>
                  <div className="edu-inst">{item.institution}</div>
                  <div className="edu-deg">{item.degree}</div>
                  {item.field && <div className="edu-field">{item.field}</div>}
                  {item.grade && <div className="edu-grade">{item.grade}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Engineering Philosophy Pillars */}
        <div className="bio-pillars-pane">
          <div className="edu-label" data-reveal>
            PHILOSOPHY &amp; APPROACH
          </div>
          <div className="bio-interests">
            {bio.interests.map((interest, i) => (
              <div key={i} className="bio-pillar">
                <span className="bio-pillar-icon">{interest.icon}</span>
                <h3 className="bio-pillar-title">{interest.title}</h3>
                <p className="bio-pillar-body">{interest.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Skill } from "@/lib/data";

interface SkillRowProps {
  skill: Skill;
}

export default function SkillRow({ skill }: SkillRowProps) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <div>
          <span>{skill.name}</span>
          <small>{skill.group}</small>
        </div>
        <b>{skill.value}%</b>
      </div>
      <div className="skill-track">
        <span className="skill-fill" style={{ width: `${skill.value}%` }} />
      </div>
    </div>
  );
}

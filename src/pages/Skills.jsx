import FadeInSection from "../components/ui/FadeInSection.jsx";
import TechBadge from "../components/ui/TechBadge.jsx";
import { skillsData } from "../data/skills.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <section id="skills" className="skills-container">
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <FadeInSection key={index}>
            <section className="intro-section">
              
              {/* Category Header */}
              <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FontAwesomeIcon icon={category.icon} />
                {category.category}
              </h2>

              {/* Skill List */}
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-row">
                    <TechBadge name={skill.name} />
                    <span
                      className={`level ${skill.level.toLowerCase()}`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>

            </section>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
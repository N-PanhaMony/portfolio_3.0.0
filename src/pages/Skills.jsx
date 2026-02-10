import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "../components/ui/FadeInSection.jsx";
import { skillsData } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="skills-container">
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <FadeInSection key={index}>
            <section className="intro-section">
              <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: category.color }}>
                <FontAwesomeIcon icon={category.icon} />
                {category.category}
              </h2>
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    {skill.name}  <span className={`level ${skill.level.toLowerCase()}`}>{skill.level}</span>
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
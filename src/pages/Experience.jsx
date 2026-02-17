import FadeInSection from "../components/ui/FadeInSection.jsx";
import { experienceData } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="experience-container">
      <h1 className="section-title">Experience</h1>

      <FadeInSection>
        {experienceData.map((exp, idx) => (
          <div key={idx} className="intro-section">
            <span className="experience-type">{exp.type}</span> 
            <div className="experience-item">
              <img src={exp.logo} alt={`${exp.name} Logo`} className="experience-logo" />
              <div className="experience-info">
                <h3>{exp.name}</h3>
                <p className="experience-position">{exp.position}</p>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-duration">{exp.duration}</p>
                <ul className="experience-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                {exp.referenceUrl && (
                  <div className="experience-reference">
                    <a
                      href={exp.referenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Reference
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </FadeInSection>

    </section>
  );
}

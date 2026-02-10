// src/pages/Experience.jsx
import FadeInSection from "../components/ui/FadeInSection.jsx";
import { educationData, workData } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="experience-container">
      <h1 className="section-title">Experience</h1>

      {/* Education Section */}
      <FadeInSection>
        <section className="intro-section">
          <h2>Education</h2>
          {educationData.map((edu, idx) => (
            <div className="experience-item" key={idx}>
              <img src={edu.logo} alt={`${edu.name} Logo`} className="experience-logo" />
              <div className="experience-info">
                <h3>{edu.name}</h3>
                <p className="experience-position">{edu.degree}</p>
                <p className="experience-location">{edu.location}</p>
                <p className="experience-duration">{edu.duration}</p>
                <ul className="experience-details">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </FadeInSection>

      {/* Work Experience Section */}
      <FadeInSection>
        <section className="intro-section">
          <h2>Work Experience</h2>
          {workData.map((job, idx) => (
            <div className="experience-item" key={idx}>
              <img src={job.logo} alt={`${job.name} Logo`} className="experience-logo" />
              <div className="experience-info">
                <h3>{job.name}</h3>
                <p className="experience-position">{job.position}</p>
                <p className="experience-location">{job.location}</p>
                <p className="experience-duration">{job.duration}</p>
                <ul className="experience-details">
                  {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                {job.referenceUrl && (
                  <div className="experience-reference">
                    <a
                      href={job.referenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Reference
                      <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: "0.4rem" }}></i>
                    </a>
                  </div>)}
              </div>
            </div>
          ))}
        </section>
      </FadeInSection>
    </section>
  );
}
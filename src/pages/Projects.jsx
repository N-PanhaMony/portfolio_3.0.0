import FadeInSection from "../components/ui/FadeInSection.jsx";
import TechBadge from "../components/ui/TechBadge.jsx";
import { projectsData } from "../data/projects.js";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <FadeInSection key={idx}>
            <section className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-info">
                <h3>{project.name}</h3>
                <span className="project-status">{project.status}</span>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <TechBadge key={i} name={tech} />
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl}>Website</a>}
                  {project.githubUrl && <a href={project.githubUrl}>Source</a>}
                </div>
              </div>
            </section>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
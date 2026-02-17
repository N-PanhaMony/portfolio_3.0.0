import FadeInSection from "../components/ui/FadeInSection.jsx";
import "../styles/about.css";
import ProfileImage from "../assets/icons/Profile_noBG.png";

export default function About() {
  return (
    <section id="about" className="about-container">
      <h1 className="section-title">Let Me Introduce Myself</h1>

      <div className="about-grid">

        {/* LEFT SIDE */}
        <FadeInSection>
          <div className="intro-section about-left">
            {/* Profile Image */}
            <div className="about-image">
              <img 
                src={ProfileImage} 
                alt="Your Name" 
              />
            </div>

            {/* Core Strengths */}
            <div className="about-highlights">
              <h3 className="subtitle">Core Strengths</h3>
              <ul className="experience-details">
                <li>⚙️ Backend-oriented architecture mindset</li>
                <li>📦 Clean and scalable project structure</li>
                <li>🚀 REST API design & system integration</li>
                <li>🧠 Strategic problem-solving approach</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        {/* RIGHT SIDE */}
        <FadeInSection>
          <div className="intro-section about-right">
            {/* About Description */}
            <h2 className="subtitle">About Me</h2>
            <div className="about-description">
              <p className="about-intro">
                Full-stack developer in progress with a strong focus on backend architecture, 
                scalable systems, and clean user experience. I approach software development 
                strategically into structured, maintainable solutions.
              </p>

              <p>
                Currently working as an IT Support / Data Entry, I developed strong attention 
                to detail, system organization, and operational reliability. Alongside my full-time 
                role, I am actively building real-world projects using modern technologies such as 
                React, Node.js, Express, and PostgreSQL.
              </p>

              <p>
                My learning path is structured and project-driven. Rather than just studying theory, 
                I focus on building complete systems — from RESTful APIs and database design to 
                frontend interfaces and deployment workflows.
              </p>
            </div>

           {/* Mini Stats */}
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">Full-Stack</span>
                  <span className="stat-label">Development Focus</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">Continuous</span>
                  <span className="stat-label">Learning & Improvement</span>
                </div>
              </div>

            {/* Download CV Button */}
            <div className="experience-reference about-actions">
              <a href="/cv.pdf" download className="btn-download">
                Download CV
              </a>
            </div>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
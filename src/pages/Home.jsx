// src/pages/Home.jsx
import FadeInSection from "../components/ui/FadeInSection.jsx";
import SocialLinks from "../components/ui/SocialLinks.jsx";

export default function Home() {
  return (
    <>
      {/* Intro / Hero Section */}
      <FadeInSection>
        <section className="intro-section">
          <h1>SurSdey! I'm MoNi</h1>
          <p className="title">Software Developer</p>
          <p className="intro-description">
            I build powerful backend systems and automation scripts that optimize workflows 
            and solve complex problems. Clean, scalable code is my craft.
          </p>
          <div className="links-container">
            <a className="btn-primary" href="mailto:youremail@example.com">
              Contact Me
            </a>
            <SocialLinks />
          </div>
        </section>
      </FadeInSection>

      {/* Quick Highlights Section */}
      <FadeInSection>
        <section className="highlights">
          <h2>What I Do</h2>
          <ul>
            <li>💻 Frontend Development: React, NextJS</li>
            <li>⚡ Backend Development: NodeJS, ExpressJS, PostgreSQL</li>
            <li>🚀 DevOps & Deployment: Docker, AWS, CI/CD</li>
          </ul>
        </section>
      </FadeInSection>
    </>
  );
}
import FadeInSection from "../components/ui/FadeInSection.jsx";
import SocialLinks from "../components/ui/SocialLinks.jsx";

export default function Home() {
  return (
    <section id="home" className="home-container">
      {/* Hero / Intro Section */}
      <FadeInSection>
        <div className="intro-section">
          <h1>
            SurSdey! <span className="highlight-name">I'm MoNi</span>
          </h1>

          <p className="title">Full-Stack Developer</p>

          <p className="intro-description">
            I’m passionate about technology and automation. I build systems and scripts that optimize workflows and solve complex problems. A self-taught developer, I love researching new tools, experimenting with code, and crafting clean, scalable solutions.
          </p>

          <div className="links-container">
            <a className="btn-primary">
              Contact Me :
            </a>
            <SocialLinks />
          </div>
        </div>
      </FadeInSection>

      {/* Quick Highlights Section */}
      <FadeInSection>
        <div className="highlights">
          <h2>What I Do</h2>
          <ul>
            <li>💻 Frontend Development: React, NextJS</li>
            <li>⚡ Backend Development: NodeJS, ExpressJS, PostgreSQL</li>
            <li>🚀 DevOps & Deployment: Docker, AWS, CI/CD</li>
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}

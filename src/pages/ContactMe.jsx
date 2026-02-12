import FadeInSection from "../components/ui/FadeInSection.jsx";
import SocialLinks from "../components/ui/SocialLinks.jsx"; // optional, for icons

export default function ContactMe() {
  return (
    <section id="contact" className="contact-container">
      
      {/* Section Title */}
      <FadeInSection>
        <div className="intro-section contact-intro">
          <h1 className="section-title">Let’s Connect</h1>
          <p className="section-subtitle">
            I’m always open to new opportunities, collaborations, or tech discussions. 
            Feel free to reach out via the platforms below.
          </p>
        </div>
      </FadeInSection>

      {/* Contact Links */}
      <FadeInSection>
        <div className="intro-section contact-links">
          <div className="contact-cards">

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/YOUR_LINKEDIN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/YOUR_GITHUB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/YOUR_TELEGRAM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <i className="fab fa-telegram"></i>
              <span>Telegram</span>
            </a>

          </div>
        </div>
      </FadeInSection>

    </section>
  );
}
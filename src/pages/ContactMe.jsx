import FadeInSection from "../components/ui/FadeInSection.jsx";
import SocialLinks from "../components/ui/SocialLinks.jsx";

export default function ContactMe() {
  return (
    <section id="contact" className="contact-container">

      {/* Page Heading */}
      <FadeInSection>
        <div className="contact-header">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            I’m always open to opportunities, collaborations, or tech discussions. 
            Let’s connect and create something impactful together!
          </p>
        </div>
      </FadeInSection>

      {/* Contact Card / Intro Section */}
      <FadeInSection>
        <div className="intro-section contact-intro">

          {/* Greeting */}
          <h2 className="contact-greeting">Let’s Connect</h2>
          <p className="contact-description">
            Whether you want to discuss a project, share ideas, or just say hi, 
            feel free to reach out. I love collaborating with fellow developers, designers, 
            and creative thinkers.
          </p>

          {/* Social Links */}
          <div className="contact-links">
            <SocialLinks />
          </div>

          {/* Optional small note */}
          <p className="contact-note">
            Looking forward to hearing from you!
          </p>

        </div>
      </FadeInSection>

    </section>
  );
}
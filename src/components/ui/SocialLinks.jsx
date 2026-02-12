// src/components/ui/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links" style={{ display: "flex", gap: "1rem" }}>
      
      {/* GitHub */}
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub size={24} />
        <span className="sr-only">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaLinkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </a>

      {/* Instagram
      <a 
        href="https://instagram.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaInstagram size={24} />
        <span className="sr-only">Instagram</span>
      </a> */}

      {/* Telegram */}
      <a 
        href="https://t.me/yourtelegram" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaTelegram size={24} />
        <span className="sr-only">Telegram</span>
      </a>

    </div>
  );
}
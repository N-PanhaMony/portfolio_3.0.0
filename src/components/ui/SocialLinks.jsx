import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://t.me/yourtelegram"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="Telegram"
      >
        <FaTelegram />
      </a>
    </div>
  );
}
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/N-PanhaMony"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/neang-panhamony"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://t.me/NeangPanhaMony"
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
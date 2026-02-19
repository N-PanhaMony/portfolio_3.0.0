import { useState, useEffect } from "react";
import {
  FaHome,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaMoon,
  FaSun
} from "react-icons/fa";

import logo from "../../assets/icons/logo_v3.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() =>
  document.documentElement.getAttribute("data-theme") === "dark"
);

 useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      setIsDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className={`floating-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt="MoNi logo" />
        </div>

        <div className="nav-links">
          <a href="#home">
            <span className="nav-icon"><FaHome /></span>
            <span className="nav-text">Home</span>
          </a>

          <a href="#experience">
            <span className="nav-icon"><FaBriefcase /></span>
            <span className="nav-text">Experience</span>
          </a>

          <a href="#skills">
            <span className="nav-icon"><FaCode /></span>
            <span className="nav-text">Skills</span>
          </a>

          <a href="#projects">
            <span className="nav-icon"><FaProjectDiagram /></span>
            <span className="nav-text">Projects</span>
          </a>

          <a href="#about">
            <span className="nav-icon"><FaUser /></span>
            <span className="nav-text">About</span>
          </a>

          <a href="#contact">
            <span className="nav-icon"><FaEnvelope /></span>
            <span className="nav-text">Contact</span>
          </a>
        </div>

        {/* separator */}
        <span className="nav-toggle-separator">|</span>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

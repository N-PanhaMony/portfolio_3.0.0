import { useState, useEffect } from "react";
import logo from "../../assets/icons/logo_v3.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

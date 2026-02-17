// src/components/layout/Header.jsx
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo_v3.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      </nav>
    </header>
  );
}
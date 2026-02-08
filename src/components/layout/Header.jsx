// src/components/layout/Header.jsx
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
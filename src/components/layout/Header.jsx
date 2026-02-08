import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <h2>MoNi Portfolio</h2>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>  
          <NavLink to="/contact">Contact Me</NavLink>
        </div>
      </nav>
    </header>
  );
}

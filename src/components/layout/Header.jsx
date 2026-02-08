import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt="Your Name logo" />
        </div>
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

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 400);
    } else {
      doScroll();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/Logo.svg" alt="Logo" className="nav-logo" />
        <span className="nav-name">Hui Zhi</span>
      </div>

      <ul className="nav-links">
        <li className="nav-link" onClick={() => scrollToSection("home")}>
          Home
        </li>
        <li className="nav-link" onClick={() => scrollToSection("about")}>
          About
        </li>
        <li className="nav-link" onClick={() => scrollToSection("skills")}>
          Skills
        </li>
        <li className="nav-link" onClick={() => scrollToSection("projects")}>
          Projects
        </li>
        <li className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

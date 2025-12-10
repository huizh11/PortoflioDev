import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./index.css";
import ProjectsSlider from "./ProjectsSlider";


export default function App() {
  const roles = ["UI/UX Designer", "Frontend Developer", "Creative Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [del, setDel] = useState(false);

  /* TYPING EFFECT */
  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!del) {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setDel(true), 500);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDel(false);
          setIndex((index + 1) % roles.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [text, del, index]);

  /* SCROLL FADE ANIMATION */
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="section hero-section">
        <div className="hero-overlay"></div>

        {/* Sakura petals (non-glitchy, fixed count) */}
        <div className="sakura-container">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="sakura">
              🌸
            </span>
          ))}
        </div>

        <div className="hero-content scroll-fade">
          <div className="hero-img">
            <div className="hero-frame"></div>
            <img src="Portrait.jpeg" className="hero-portrait" alt="portrait" />
          </div>

          <h1 className="hero-title">
            Hello, I'm <span className="rose">Hui Zhi</span>
          </h1>

          <h2 className="hero-role">{text}</h2>

          <p className="hero-desc">
            I create clean, modern, and user-centered digital experiences through
            UI/UX design and frontend development.
          </p>

          <a href="#about" className="hero-btn btn-hover">About Me</a>

          <p className="scroll-hint">↓ scroll</p>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="section scroll-fade">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who I Am</h2>

        <p className="about-text">
          I’m Hui Zhi, a UI/UX design student with a strong interest in creating clear, 
          intuitive, and visually engaging user experiences. I enjoy working across both 
          web and immersive technologies, focusing on thoughtful interaction design and 
          clean, modern interfaces. I love learning new tools, exploring creative 
          problem-solving, and building designs that balance usability with aesthetic appeal.
        </p>

        {/* ⭐ BUTTONS ADDED BELOW (side by side, no disruption) ⭐ */}
        <div style={{ display: "flex", gap: "15px", marginTop: "25px", flexWrap: "wrap" }}>
          
          {/* Download Resume */}
          <a 
            href="/resume.pdf" 
            download 
            className="hero-btn btn-hover"
            style={{ flexShrink: 0 }}
          >
            Download Resume
          </a>

          {/* View Certificates */}
          <a 
            href="/certificates"
            className="hero-btn btn-hover"
          >
            View Certificates
          </a>


        </div>
      </section>




      {/* ---------------- SKILLS SECTION ---------------- */}
      <section id="skills" className="section scroll-fade">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tools & Technologies</h2>

        <div className="skills-grid">
        {[
          { icon: "💻", label: "HTML", level: "Intermediate" },
          { icon: "🎨", label: "CSS", level: "Intermediate" },
          { icon: "⚡", label: "JavaScript", level: "Experienced" },
          { icon: "⚛️", label: "React", level: "Intermediate" },
          { icon: "🐍", label: "Python", level: "Experienced" },
          { icon: "🗄️", label: "SQL", level: "basic" },
          { icon:<img src="Figma-logo.svg" className="skill-img" />, label: "Figma", level: "Intermediate",},
        ].map((s, i) => (
          <div className="skill-item" key={i}>
            {/* Hover tag */}
            <div className="skill-hover-label">{s.level}</div>

            <div className="skill-circle">{s.icon}</div>
            <p className="skill-label">{s.label}</p>
          </div>
        ))}
      </div>

      </section>

      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section id="projects" className="section scroll-fade">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Explore My Work</h2>

        <ProjectsSlider />
      </section>


      {/* ---------------- CONTACT SECTION ---------------- */}
      <section id="contact" className="section scroll-fade">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-intro">
          I’d love to connect! Feel free to reach out through any of my socials below.
        </p>

        <div className="contact-social-box">
          <a 
            href="https://www.linkedin.com/in/hanghuizhi/" 
            target="_blank" 
            className="contact-social-item"
          >
            <img src="Linkedin.png" className="contact-icon" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://www.instagram.com/huizh1/?next=%2F" 
            target="_blank" 
            className="contact-social-item"
          >
            <img src="Instagram.png" className="contact-icon" alt="Instagram" />
            <span>Instagram</span>
          </a>

          <a 
            className="contact-social-item"
          >
            <img src="Email.png" className="contact-icon" alt="Email" />
            <span>hanghuizhi@gmail.com</span>
          </a>

          <a 
            href="https://github.com/huizh11"
            target="_blank"
            className="contact-social-item"
          >
            <img src="Github.png" className="contact-icon" alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </section>


      <footer className="footer">© 2025 Hui Zhi — All Rights Reserved</footer>
    </div>
  );
}


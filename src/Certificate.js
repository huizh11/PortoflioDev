import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./index.css";

export default function Certificate() {

  // Certificate images
  const certificates = [
    { img: "/Cert.png", title: "Software Testing Foundations" },
    { img: "/Scrum.png", title: "What is Scrum?" },
    { img: "/Agile.png", title: "Agile Foundations" }
  ];

  // ⭐ RUN THE SCROLL ANIMATION for this page too
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="project-page">
      <Navbar />

      {/* BACK BUTTON */}
      <button 
        className="back-btn"
        onClick={() => (window.location.href = "/")}
      >
        ← Back to Home
      </button>

      <main className="section project-page-inner">

        <p className="section-label scroll-fade">Certificates</p>
        <h2 className="section-title scroll-fade">My Achievements</h2>

        <p className="about-text scroll-fade" style={{ textAlign: "center" }}>
          Here are some certifications I’ve earned along my learning journey.
          Each one represents growth, dedication, and my passion for UI/UX & development.
        </p>

        {/* ⭐ CERTIFICATE GRID (NO MORE INVISIBLE scroll-fade ON CARDS) */}
        <div className="certificate-grid">
          {certificates.map((cert, i) => (
            <div key={i} className="cert-card scroll-fade">
              <img src={cert.img} className="cert-img" alt={cert.title} />
              <p className="cert-title">{cert.title}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

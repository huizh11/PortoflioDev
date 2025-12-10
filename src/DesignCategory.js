// src/DesignProjects.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";

export default function DesignProjects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Pizza Menu Web Application",
      summary:
        "A responsive restaurant web UI that lets users explore pizzas, filter options, and browse a clean digital menu.",
      tools: "Figma, React (concept), Layout Grids, Typography System",
      details:
        "This project focuses on hierarchy, spacing, and typography to make the menu easy to scan. The layout uses a large hero banner, card-based menu sections, and clear call-to-action buttons.",
      images: ["/pizza-web-1.png", "/pizza-web-2.png"],
      video: "/pizzaWebDemo.mp4",
      demoLink: "",
      github: "",
      design:
        "Soft dark background with pastel accents, card-style sections, and highlighted category titles for fast visual scanning.",
      functions: [
        "Clear category breakdown for pizzas and sides",
        "Search / filter concept for menu browsing",
        "Balance between imagery and text for easy reading"
      ]
    },

    {
      title: "Design Case Study Placeholder",
      summary:
        "A placeholder card for future detailed design case studies.",
      tools: "Figma",
      details:
        "Use this space to add upcoming UI/UX or branding case studies that follow the same layout.",
      images: [],
      video: null,
      design: "",
      functions: []
    }
  ];

  const [index, setIndex] = useState(0);
  const project = projects[index];

  const goPrev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const goNext = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <div className="project-page">
      <Navbar />

      <button className="back-btn" onClick={() => {
        window.location.href = "/#Projects";
      }}>
        ← Back to Home
      </button>

      <main className="section project-page-inner">
        <p className="section-label">Design Works</p>
        <h2 className="section-title">{project.title}</h2>

        {/* Summary */}
        <div className="proj-box">
          <p className="proj-box-text">{project.summary}</p>

          <p className="proj-meta">
            <strong>Tools:</strong> {project.tools}
          </p>

          <p className="proj-box-text">{project.details}</p>
        </div>

        {/* Design Concept */}
        <div className="proj-box">
          <h3 className="proj-box-title">Design Concept</h3>
          <p className="proj-box-text">
            {project.design || "Design concept coming soon."}
          </p>
        </div>

        {/* Key Functions / Focus */}
        <div className="proj-box">
          <h3 className="proj-box-title">Key Focus Areas</h3>
          {project.functions && project.functions.length > 0 ? (
            <ul className="proj-list">
              {project.functions.map((func, i) => (
                <li key={i}>{func}</li>
              ))}
            </ul>
          ) : (
            <p className="proj-box-text">Details coming soon.</p>
          )}
        </div>

        {/* Screens */}
        <div className="proj-box">
          <h3 className="proj-box-title">Project Screens</h3>
          <div className="project-screens-box">
            {project.images.length > 0 ? (
              project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`screen-${i}`}
                  className="proj-screen-img"
                />
              ))
            ) : (
              <p>No images added yet.</p>
            )}
          </div>
        </div>

        {/* Video + Buttons */}
        <div className="proj-box demo-box">
          <h3 className="proj-box-title">Demo Video</h3>

          <div className="video-wrapper">
            {project.video ? (
              <video src={project.video} controls className="project-video" />
            ) : (
              <p>No media added yet.</p>
            )}
          </div>

          <div className="project-btn-row">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-demo-btn"
              >
                🌐 Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-github-btn"
              >
                🔗 GitHub Repo
              </a>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="project-pagination">
          <button className="page-arrow" onClick={goPrev}>
            ◀
          </button>

          {projects.map((_, i) => (
            <button
              key={i}
              className={`page-number ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}

          <button className="page-arrow" onClick={goNext}>
            ▶
          </button>
        </div>
         {/* SCROLL TO TOP BUTTON */}
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      </main>
    </div>
  );
}

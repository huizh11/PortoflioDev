// src/MobileProjects.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";

export default function MobileProjects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Task Manager App",
      summary:
        "A modern task-management mobile interface designed for clarity and ease of use. The layout emphasizes quick task tracking, visual priority indicators, and smooth interaction. Users can view progress, search tasks, add new tasks effortlessly, and navigate between pending and completed sections with clean, color-coded organization.",
      tools: "Android Studio, Webstorm",
      images: ["/Task1.png", "/Task2.png","/Task3.png","/Task4.png"],
      video: "/TaskApp.mp4",
      github: "https://github.com/AY2025-S2-C346/ca1-huizh11.git",                          // leave empty if there’s no repo
      design:
        "The Task Manager app focuses on clear information hierarchy and effortless interaction. A soft, minimal UI supports quick task scanning, while color-coded states (pending, completed, overdue) help users understand status at a glance. Key actions—adding tasks, searching, and viewing summaries—are placed prominently for fast access. Rounded cards, simple icons, and consistent spacing maintain an intuitive flow, reducing cognitive load and supporting a smooth, productive user experience.",
      functions: [
        "Interactive calendar for adding and managing task entries",
        "Fully editable tasks with real-time updates",
        "Smart highlights for signature or recommended items",
        "Mobile-optimized layout designed for effortless, thumb-friendly navigation"
        ]

    },

    {
      title: "Pokemon App",
      summary: "A simple and playful Pokémon collection app that allows users to add Pokémon and view them organised by type. Each category—such as Water or Fairy—is displayed with a bold header and matching colour, making the list easy to scan. The interface focuses on clean layout, large visuals, and quick browsing, giving users an easy way to build and view their Pokémon collection.",
      tools: "Android Studio, Webstorm",
      images: ["/pokemon1.png","/pokemon2.png","/pokemon3.png"],
      video: "/pokemon.mp4",
      design: "The design focuses on clarity, lightness, and ease of use. Soft pastel tones and generous spacing create a calm, welcoming environment, while a structured card-based layout keeps information neatly organized. Interactive elements are intentionally simple and intuitive, ensuring that users can add or edit tasks with minimal friction. The interface is optimized for mobile ergonomics—thumb-friendly controls, readable typography, and smooth visual hierarchy guide users naturally through the experience.",
      functions: ["Fully editable tasks with real-time updates",
        "Able to Add and Delete tasks",
        "Able to Change pictures in real-time updates"
      ]
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

      {/* Back button */}
      <button className="back-btn" onClick={() => {
        window.location.href = "/#Projects";
      }}>
        ← Back to Home
      </button>

      <main className="section project-page-inner">
        {/* Category label */}
        <p className="section-label">Mobile App Design</p>

        {/* Title */}
        <h2 className="section-title">{project.title}</h2>

        {/* Summary box */}
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

        {/* Key Functions */}
        <div className="proj-box">
          <h3 className="proj-box-title">Key Functions</h3>
          {project.functions && project.functions.length > 0 ? (
            <ul className="proj-list">
              {project.functions.map((func, i) => (
                <li key={i}>{func}</li>
              ))}
            </ul>
          ) : (
            <p className="proj-box-text">Feature list coming soon.</p>
          )}
        </div>

        {/* Images */}
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

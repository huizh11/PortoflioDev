// src/ImmersiveProjects.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import "./index.css";

export default function ImmersiveProjects() {
  const projects = [
    {
      title: "VR NameCard",
      summary:
        "VR NameCard is a minimalist virtual calling card that comes to life with a playful twist: when activated, a 3D dog asset pops up from the card.",
      tools: "Unity",

      images: ["/NameCard1.jpg", "/NameCard2.jpg"],
      video: "/NameCardVid.mp4",

      design:
        "The VR NameCard uses a simple, readable layout suited for 3D space. Light, color, and motion subtly guide user attention.",

      functions: [
        "Room-based navigation flow",
        "Hover / gaze-based interactions",
        "Responsive information panels in 3D space"
      ]
    },

    {
      title: "Virtual Reality Escape Room",
      summary:
        "Ancienology is a mysterious puzzle escape room divided into three unique puzzle chambers. Players must solve all puzzles to unlock the final artifact door.",
      tools: "Unity",
      details:
        "This section will later expand into a full case study on puzzle and interaction design.",
      images: ["/EscapeRoom.png"],

    video: "https://drive.google.com/file/d/1EoKhPJTDJdoBIUaYpiNIl-t2uQQmBS6x/preview",


      design:
        "The game’s art style draws inspiration from ancient Central and South American temples. Warm torchlight, stone textures, carvings, and earthy tones build a calm yet mysterious mood. UI is diegetic — all clues exist naturally in the environment.",

      puzzles: [
        "Trial of Order – Tap owl statues in the correct number sequence.",
        "Temple of Symbol – Match pairs of ancient symbols hidden around the room.",
        "Hidden Numerals – Search the environment for scattered numbers and decode the final puzzle."
      ],

      inspirationImages: ["/thombrider.png", "/dungeon.png"]
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

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => (window.location.href = "/#Projects")}
      >
        ← Back to Home
      </button>

      <main className="section project-page-inner">
        <p className="section-label">Immersive Tech</p>
        <h2 className="section-title">{project.title}</h2>

        {/* SUMMARY BOX */}
        <div className="proj-box">
          <p className="proj-box-text">{project.summary}</p>

          <p className="proj-meta">
            <strong>Tools:</strong> {project.tools}
          </p>

          <p className="proj-box-text">{project.details}</p>
        </div>

        {/* DESIGN CONCEPT */}
        <div className="proj-box">
          <h3 className="proj-box-title">Design Concept</h3>
          <p className="proj-box-text">
            {project.design || "Design concept coming soon."}
          </p>

          {/* INSPIRATION ART */}
          {project.inspirationImages && (
            <>
              <h3 className="proj-box-title">Inspiration Art</h3>
              <div className="inspiration-grid">
                {project.inspirationImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`inspiration-${i}`}
                    className="inspiration-img"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* FUNCTIONS OR PUZZLES */}
        <div className="proj-box">
          <h3 className="proj-box-title">
            {project.puzzles ? "Puzzles" : "Key Functions"}
          </h3>

          {project.functions && (
            <ul className="proj-list">
              {project.functions.map((func, i) => (
                <li key={i}>{func}</li>
              ))}
            </ul>
          )}

          {project.puzzles && (
            <ul className="proj-list">
              {project.puzzles.map((puz, i) => (
                <li key={i}>{puz}</li>
              ))}
            </ul>
          )}

          {!project.puzzles && !project.functions && (
            <p className="proj-box-text">No details added yet.</p>
          )}
        </div>

        {/* SCREENS */}
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

        {/* ⭐ UPDATED VIDEO SECTION ⭐ */}
        <div className="proj-box demo-box">
          <h3 className="proj-box-title">Demo Video</h3>

          <div className="video-wrapper">
            {project.video ? (
              <iframe
                src={project.video}
                className="project-video"
                allow="autoplay"
                allowFullScreen
              ></iframe>
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

        {/* PAGINATION */}
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
        <button
          className="scroll-top-btn"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          ↑
        </button>
      </main>
    </div>
  );
}

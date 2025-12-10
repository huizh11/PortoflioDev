import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔙 added
import Navbar from "./Navbar";
import "./index.css";

export default function SoftwareProjects() {
  const navigate = useNavigate(); // 🔙 for navigation

  const projects = [
    {
      title: "Travel List Website",
      summary:
        "A simple, colorful planner designed to help you stay organized for every adventure. Create packing lists, track what’s done, and count down to your travel day — all in one cheerful, easy-to-use space.",
      tools: "React · CSS · JavaScript",
      details:
        "The Travel List App features dynamic list updates, clean UI layouts, and intuitive interactions that make packing and preparation stress-free. It focuses on clarity, usability, and efficient task management for any type of trip.",
      images: ["/travelist.png", "/travlist2.png"],
      video: "/TravelApp.mp4",
      demoLink: "https://travel-list-app-starter-delta.vercel.app/",
      github: "https://github.com/huizh11/travel-list-app-starter.git",
      design:
        "A soft pastel UI designed with balance and clarity in mind. The interface uses smooth shapes, clean spacing, and gentle colors to create a calming and intuitive user experience.",
      functions: [
        "Dynamic item tracking with instant updates",
        "Add, remove, and modify list items easily",
        "Responsive layout for mobile & tablet",
        "Clean structured interface with pastel theme",
      ],
    },

    {
      title: "Pizza App Website",
      summary: "A responsive pizza menu website showcasing dynamic UI components, search functionality, and a smooth user browsing experience.",
      tools: "React · CSS · JavaScript",
      details: "This project demonstrates a fully designed menu interface for a fictional pizza shop. It includes reusable components, a search bar for filtering pizzas, and an interactive design inspired by modern food-ordering apps.",
      images: ["/Pizza1.png","/Pizza2.png","/Pizza3.png"],
      video: "/PizzaApp.mp4",
      demoLink: "https://pizza-app-8v7y.vercel.app/",
      github: "https://github.com/huizh11/PizzaApp.git",
      functions: ["User-friendly layout with clean pizza cards and easy-to-read details",
        "Search bar to quickly find specific pizzas",
        "Clear ordering system that shows quantities (e.g., x2 when adding the same pizza)",
        "Responsive design that looks good on different screen sizes",
        "Consistent visual style with warm colors, rounded elements, and appealing images"
      ]
    },
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

      {/* 🔙 BACK TO PROJECTS BUTTON */}
      <button className="back-btn" onClick={() => {
        window.location.href = "/#Projects";
      }}>
        ← Back to Home
      </button>


      <main className="section project-page-inner">
        {/* Category label */}
        <p className="section-label">Software Development</p>

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

        {/* DESIGN CONCEPT */}
        <div className="proj-box">
          <h3 className="proj-box-title">Design Concept</h3>
          <p className="proj-box-text">
            {project.design || "This pizza website is designed to be simple, user-friendly, and visually appealing. The layout keeps everything easy to read, while clean pizza cards highlight the images, prices, and ingredients. For ordering, the quantity is super clear — if a user adds the same pizza multiple times, it shows as x2, x3, etc., making the order easy to understand at a glance."}
          </p>
        </div>

        {/* KEY FUNCTIONS */}
        <div className="proj-box">
          <h3 className="proj-box-title">Key Functions</h3>
          {project.functions ? (
            <ul className="proj-list">
              {project.functions.map((func, i) => (
                <li key={i}>{func}</li>
              ))}
            </ul>
          ) : (
            <p className="proj-box-text">Feature list coming soon.</p>
          )}
        </div>

        {/* IMAGES */}
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

        {/* VIDEO BOX */}
        <div className="proj-box demo-box">
          <h3 className="proj-box-title">Demo Video</h3>

          <div className="video-wrapper">
            {project.video ? (
              <video src={project.video} controls className="project-video" />
            ) : (
              <p>No media added yet.</p>
            )}
          </div>

          {/* BUTTONS CENTERED */}
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
          <button className="page-arrow" onClick={goPrev}>◀</button>

          {projects.map((_, i) => (
            <button
              key={i}
              className={`page-number ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}

          <button className="page-arrow" onClick={goNext}>▶</button>
        </div>
        {/* SCROLL TO TOP BUTTON */}
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>

      </main>
    </div>
  );
}

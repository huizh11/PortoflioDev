// src/DesignProjects.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";

export default function DesignProjects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Travelly Instagram Banner",
      summary:
        "A set of promotional travel banners designed for social media, combining playful collage visuals and AI-enhanced professional layouts to advertise travel deals and services.",
      tools: "Photoshop, AI Image Enhancement Tools",
      details:
        "This project explores two visual directions: a light, collage-style Instagram grid for promotional posts, and a polished, AI-enhanced travel banner for service marketing. Both designs focus on visual hierarchy, clear messaging, and engaging travel storytelling.",
      images: ["/travel.jpg", "/IG.jpg"],
      design:
        "A combination of pastel collage aesthetics and high-definition AI-enhanced visuals. The first banner uses a playful grid layout and cut-out graphics, while the second presents a refined, agency-style travel advertisement with vibrant scenery and structured typography.",
      functions: [
        "Eye-catching layout variations for social media promotion",
        "Clear messaging to highlight travel deals and services",
        "Use of visual hierarchy and contrasting styles to engage different audiences"
      ]
    },

    {
      title: "Sustainable Clothing Website",
      summary:
        "A sustainable fashion e-commerce website concept built as a hi-fi wireframe, focusing on clean navigation, product browsing, and a smooth shopping experience.",
      tools: "Figma",
      details:
        "This wireframe demonstrates a full shopping flow including homepage browsing, product detail interactions, cart management, and checkout. The design focuses on clean visual hierarchy, intuitive movement between pages, and a modern eco-friendly aesthetic.",
      images: ["/home1.png","/home2.png","/home3.png","/shop.png","/cart.png","/contact.png","/product.png"],
      design:
        "A minimal, Earth-toned interface that highlights product imagery, clean typography, and eco-friendly branding. Soft shadows, rounded components, and simple iconography support an approachable shopping experience.",

      // ⭐ YOUR LAYOUT IMAGES (your pic included)
      layoutImages: ["/lofi.png"],

      layout:
        "The layout follows a classic e-commerce structure with a homepage hero, product grid, category filters, and a detailed product page. Cart and checkout screens use a multi-step layout with clear visibility of quantities, stock status, and order summary.",

      functions: [
        "Add-to-cart interaction with product quantity selection",
        "Stock logic that disables items and displays ‘Out of Stock’ when quantity reaches zero",
        "Multi-page navigation between homepage, product pages, cart, and checkout",
        "Hover interactions on product cards, buttons, and navigation elements",
        "Smooth micro-animations during page transitions and cart updates"
      ],

      video: "/Sustainable.mp4",
      FigmaLink: "https://www.figma.com/design/rITR6OJn9oGFss5lmVZoR7/CA1_SustainableClothingWebsite_24011094?node-id=256-69&t=4CVEE3XnCIyFU4ss-0"
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

      <button
        className="back-btn"
        onClick={() => {
          window.location.href = "/#Projects";
        }}
      >
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

        {/* Key Functions */}
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

        {/* ⭐ Layout Section — ONLY SHOW IF PROJECT HAS LAYOUT OR IMAGES */}
        {(project.layoutImages && project.layoutImages.length > 0) || project.layout ? (
          <div className="proj-box">
            <h3 className="proj-box-title">Layout Structure</h3>

            {project.layoutImages && project.layoutImages.length > 0 ? (
              <div className="project-screens-box">
                {project.layoutImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`layout-${i}`}
                    className="proj-screen-img"
                  />
                ))}
              </div>
            ) : (
              <p className="proj-box-text">{project.layout}</p>
            )}
          </div>
        ) : null}


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

        {/* Demo Video (Only if project.video exists) */}
        {project.video && (
          <div className="proj-box demo-box">
            <h3 className="proj-box-title">Demo Video</h3>

            <div className="video-wrapper">
              <video src={project.video} controls className="project-video" />
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
            </div>
          </div>
        )}

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

        {/* Scroll to top */}
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>
    </div>
  );
}

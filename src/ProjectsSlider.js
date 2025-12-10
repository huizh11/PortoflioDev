import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function ProjectsSlider() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "software",
      title: "Software Development",
      desc: "Clean mobile & web applications built with modern UI and smooth flows.",
      icon: "💻",
      link: "/projects/software",
    },
    {
      id: "mobile",
      title: "Mobile App",
      desc: "Intuitive mobile interfaces designed for smooth interaction and modern usability.",
      icon: "📱",
      link: "/projects/mobile",
    },
    // {
    //   id: "design",
    //   title: "Design",
    //   desc: "Visual design exploring layouts, branding, and user-centered aesthetics.",
    //   icon: "🎨",
    //   link: "/projects/design",
    // },
    {
      id: "vr",
      title: "VR Projects",
      desc: "Immersive 3D experiences blending interaction and storytelling.",
      icon: "🕶️",
      link: "/projects/vr",
    },
  ];

  const pills = [
    { label: "Development Works", category: "software" },
    { label: "Mobile App", category: "mobile" },
    // { label: "Design Works", category: "design" },
    { label: "Immersive Tech", category: "vr" },
  ];

  const [index, setIndex] = useState(0);
  const current = categories[index];

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));

  const goNext = () =>
    setIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));

  const jumpToCategory = (categoryId) => {
    const newIndex = categories.findIndex((c) => c.id === categoryId);
    if (newIndex !== -1) setIndex(newIndex);
  };

  return (
    <>
      {/* FILTER PILLS */}
      <div className="pill-container scroll-fade">
        {pills.map((p, i) => (
          <button
            key={i}
            className="pill-btn"
            onClick={() => jumpToCategory(p.category)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* CARD + ARROWS */}
      <div className="projects-slider-container scroll-fade">
        <button className="proj-arrow" onClick={goPrev}>◀</button>

        <div className="proj-card">
          <div className="proj-icon">{current.icon}</div>
          <h3 className="proj-title">{current.title}</h3>
          <p className="proj-desc">{current.desc}</p>

          <button
            className="proj-btn btn-hover"
            onClick={() => navigate(current.link)}
          >
            View Category
          </button>
        </div>

        <button className="proj-arrow" onClick={goNext}>▶</button>
      </div>
    </>
  );
}

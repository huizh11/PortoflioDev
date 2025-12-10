import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import SoftwareProjects from "./SoftwareProjects";
import DesignCategory from "./DesignCategory";
import VRCategory from "./VRCategory";
import MobileAppCategory from "./MobileAppCategory";
import Certificate from "./Certificate"; // ⭐ add this

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<App />} />

      {/* Category Pages */}
      <Route path="/projects/software" element={<SoftwareProjects />} />
      <Route path="/projects/mobile" element={<MobileAppCategory />} />
      <Route path="/projects/design" element={<DesignCategory />} />
      <Route path="/projects/vr" element={<VRCategory />} />

      {/* ⭐ CERTIFICATE PAGE */}
      <Route path="/certificates" element={<Certificate />} />
    </Routes>
  </BrowserRouter>
);

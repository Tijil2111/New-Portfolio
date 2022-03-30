import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export const All = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

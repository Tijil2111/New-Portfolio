import React from "react";

import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export const All = () => {
  return (
    <div>
      <AnimatedCursor color="81, 70, 238" />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

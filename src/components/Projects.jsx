import React from "react";
import { Fade } from "react-awesome-reveal";
export const Projects = () => {
  return (
    <div className="h-[100vh] pt-40 dark:bg-slate-900" id="projects">
      <Fade delay={500} triggerOnce>
        <h2 className="text-center">
          <span className="text-3xl  text-indigo-600 link link-underline link-underline-black p-2">
            Projects
          </span>
        </h2>
      </Fade>
      <Fade delay={1000} triggerOnce></Fade>
    </div>
  );
};

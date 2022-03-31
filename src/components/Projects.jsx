import React from "react";
import { Fade } from "react-awesome-reveal";
import "../index.css";

//importing all images
import Naruto from "../assets/projects/naruto.png";

export const Projects = () => {
  return (
    <div className="h-[100vh] pt-40 dark:bg-slate-900" id="projects">
      <Fade delay={500} triggerOnce>
        <h2 className="text-center">
          <span className="text-3xl  text-teal-400 link link-underline link-underline-black p-2">
            Projects
          </span>
        </h2>
      </Fade>
      <div className="p-20 flex flex-col gap-20 justify-center md:flex-row">
        <div>
          <Fade delay={500} triggerOnce>
            <div className="max-w-lg rounded-lg overflow-hidden shadow-lg  project">
              <img className="w-auto h-auto" src={Naruto} alt="Naruto"></img>
            </div>
            <div className="px-6 py-4">
              <div className="text-center text-teal-400">
                <a
                  href="https://naruto-fan.netlify.app"
                  className="dark:text-teal-400 link link-underline link-underline-black p-2 text-xl  mb-2 "
                >
                  Naruto Fan Website
                </a>
                <p className="mt-2">
                  A small website to tribute, one of the greatest Manga and
                  Anime of all time. Naruto
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <Fade delay={500} triggerOnce>
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg flex project">
            <img className="w-auto h-auto" src={Naruto} alt="Flutter"></img>
          </div>
        </Fade>
      </div>
    </div>
  );
};

import React from "react";
import { Fade } from "react-awesome-reveal";
import "../index.css";

//importing all images
import Naruto from "../assets/projects/naruto.png";
import Rirakkusu from "../assets/projects/rirakkusu.png";

export const Projects = () => {
  return (
    <div className="pt-40 dark:bg-slate-900" id="projects">
      <Fade delay={500} triggerOnce>
        <h2 className="text-center">
          <span className="text-3xl  text-teal-400 link link-underline link-underline-black p-2">
            Projects
          </span>
        </h2>
      </Fade>
      <div className="p-20 pt-32 flex flex-col gap-20 justify-center md:flex-row ">
        <div>
          <Fade delay={500} triggerOnce>
            <div className="pl-10 project">
              <div className="max-w-lg rounded-lg overflow-hidden shadow-lg ">
                <img
                  className="w-[600px] h-2/3"
                  src={Naruto}
                  alt="Naruto"
                ></img>
              </div>
            </div>
            <div className="py-4">
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
        <div>
          <Fade delay={500} triggerOnce>
            <div className="pl-10 project">
              <div className="max-w-lg rounded-lg overflow-hidden shadow-lg ">
                <img
                  className="w-[600px] h-2/3uto"
                  src={Rirakkusu}
                  alt="Rirakkusu"
                ></img>
              </div>
            </div>
            <div className="py-4">
              <div className="text-center text-teal-400">
                <a
                  href="https://galaxy.store/rirakkusu"
                  className="dark:text-teal-400 link link-underline link-underline-black p-2 text-xl  mb-2 "
                >
                  Rirakkusu
                </a>
                <p className="mt-2">
                  An App that enables you to reduce stress, blog and much more !
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

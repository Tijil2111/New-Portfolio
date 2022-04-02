import React from "react";
import { Fade } from "react-awesome-reveal";
import "../index.css";

//importing all the images for the cards
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwind.png";
import movie from "../assets/movie.jpeg";

export const Skills = () => {
  return (
    <div className="md:h-[200vh] pt-40 dark:bg-slate-900" id="skills">
      <div>
        <Fade triggerOnce>
          <h2 className="text-center">
            <span className="text-3xl  text-teal-400 link link-underline link-underline-black p-2">
              Skills
            </span>
          </h2>
        </Fade>
        <div className="p-20 card-row justify-center">
          <div className="flex flex-row gap-10 card-row">
            <Fade delay={500} triggerOnce>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
                <img className="w-2/3 h-1/2" src={flutter} alt="Flutter"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center dark:text-white">
                    Flutter
                  </div>
                  <p className="text-gray-700 text-base dark:text-white">
                    Building Apps with Flutter for Android is my main field of
                    interest. I have already made a few awesome apps and
                    recently published one on the Galaxy Store -
                    <span className="text-teal-400 p-1 link link-underline link-underline-black">
                      Rirakkusu
                    </span>
                    . I absolutely love Flutter !
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #app-development
                  </span>
                </div>
              </div>
            </Fade>
            <Fade delay={1000} triggerOnce>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
                <img className="w-2/3 h-1/2" src={react} alt="react"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center dark:text-white">
                    React.js
                  </div>
                  <p className="text-gray-700 text-base dark:text-white">
                    Making websites with React.js is my love. I absolutely love
                    this framework. I have already made at least 3 websites with
                    this framework and tend to make more to improve my knowledge
                    of this framework.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #web-development
                  </span>
                </div>
              </div>
            </Fade>
            <Fade delay={1500} triggerOnce>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
                <img
                  className="w-max h-1/2"
                  src={firebase}
                  alt="firebase"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center dark:text-white">
                    Firebase
                  </div>
                  <p className="text-gray-700 text-base dark:text-white">
                    I am making use of this online database as a part of my
                    Flutter projects. I am also learning it with React.js. The
                    auth and the database is awesome. This was the database that
                    made backend easy for me.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #app-development
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #web-development
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="p-20 card-row justify-center">
          <div className="flex flex-row gap-10 card-row">
            <Fade delay={500} triggerOnce>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
                <img
                  className="w-full h-1/2"
                  src={tailwind}
                  alt="Tailwind"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center dark:text-white">
                    Tailwind CSS
                  </div>
                  <p className="text-gray-700 text-base dark:text-white">
                    When i wrote my own css it took days and even months to
                    complete a website and making them responsive was difficult
                    (at least for me). Tailwind is such an awesome library. I
                    love it a lot!
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #web-development
                  </span>
                </div>
              </div>
            </Fade>
            <Fade delay={1000} triggerOnce>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
                <img
                  className="w-auto h-1/2"
                  src={movie}
                  alt="Movie Making"
                ></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center dark:text-white">
                    Movie Making
                  </div>
                  <p className="text-gray-700 text-base dark:text-white">
                    Lights, Camera and Action ! Making videos and movies is a
                    hobby for me.I really love to shoot and then edit. I know
                    softwares like Final Cut Pro, Adobe Premiere Pro, Adobe
                    After Effects and DaVinci Resolve 17.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #movie-making
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #hobby
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

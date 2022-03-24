import React from "react";
import Typewriter from "typewriter-effect";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

//BsGithub, BsLinkedin, BsYoutube

export const Home = () => {
  return (
    <div id="#home">
      <div className="flex flex-col ml-14 mt-32 ">
        <h1 className="text-3xl py-2 flex md:text-5xl">
          <span className="text-indigo-600">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Namaste!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Bonjour!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Hello!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Konnichiwa!")
                  .start();
              }}
            />
          </span>
          I am Tijil Agrawal
        </h1>
        <h2 className="flex md:text-4xl text-2xl">
          I am
          <span className="px-2 text-indigo-600">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("an App Developer")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a Movie Maker")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("an eSpician")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a Besite")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a weeb")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("an Anime Lover")
                  .start();
              }}
            />
          </span>
        </h2>
        <div className="text-indigo-600 text-2xl flex px-2 gap-5 py-10">
          <BsGithub />
          <BsLinkedin />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Typer } from "../Extra/Typer";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import "../index.css";

//BsGithub, BsLinkedin, BsYoutube, FaAngleDown

export const Home = () => {
  return (
    <>
      <div id="home" className="flex">
        <div className="flex flex-col md:ml-14 ml-10 mt-64">
          <h1 className="text-2xl py-2 flex md:text-5xl">
            <span className="text-indigo-600 px-2 link link-underline link-underline-black">
              Konnichiwa!
            </span>
            I am Tijil Agrawal
          </h1>
          <h2 className="flex md:text-4xl text-xl px-2">
            I am
            <span className="px-2 text-indigo-600">
              <Typer />
            </span>
          </h2>
          <div className="text-indigo-600 text-2xl flex px-2 gap-5 py-10 ">
            <a href="https://github.com/">
              <BsGithub className="cursor-pointer " />
            </a>
            <a href="https://www.linkedin.com/in/tijil-agrawal-21165b21a/">
              <BsLinkedin className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/channel/UC-BQdiPl1XQFxdzq63S4v6Q">
              <BsYoutube className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <a href="#about">
          <FaAngleDown className="arrow text-6xl text-indigo-600" />
        </a>
      </div>
    </>
  );
};

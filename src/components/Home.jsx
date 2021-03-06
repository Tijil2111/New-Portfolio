/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Typer } from "../Extra/Typer";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import "../index.css";
import { Outlet, Link } from "react-router-dom";
import { Toast } from "../Extra/Toast";

//BsGithub, BsLinkedin, BsYoutube, FaAngleDown

export const Home = () => {
  const [showToast, setShowToast] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(true);
    }, 4000);
  });

  const onClose = () => {
    setShowToast(true);
  };
  return (
    <div className="dark:bg-slate-900 h-[100vh]">
      <div id="home" className="flex ">
        <div className="flex flex-col md:ml-14 ml-10 mt-64 ">
          <h1 className="text-2xl py-2 flex md:text-5xl dark:text-white">
            <span className="text-teal-400 px-2 link link-underline link-underline-black">
              Konnichiwa!
            </span>
            I am Tijil Agrawal
          </h1>
          <h2 className="flex md:text-4xl text-xl px-2 dark:text-white">
            I am
            <span className="px-2 text-teal-400">
              <Typer />
            </span>
          </h2>
          <div className="text-teal-400 text-2xl flex px-2 gap-5 py-10 ">
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
        <a>
          <Link to="/about">
            <FaAngleRight className="arrow text-6xl text-teal-400" />
          </Link>
        </a>
      </div>
      {/* {!showToast ? <Toast /> : <div></div>} */}
      {!showToast ? <Toast close={onClose} /> : <div></div>}
      <Outlet />
    </div>
  );
};

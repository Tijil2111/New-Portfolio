/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Outlet, Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AnimatedCursor color="81, 70, 238" />
      <div className="bg-zinc-200 h-[80px] flex items-center shadow-md fixed w-[100%] z-40 dark:bg-slate-900">
        <h1 className="text-indigo-600 px-5 text-2xl cursor-pointer hover:text-indigo-700 hover:transition duration-700 ease-[cubic-bezier(.25,1,.25,1)] font-sans  ">
          <a href="" className="link link-underline link-underline-black p-2">
            {" "}
            <Link to="/">Tijil Agrawal</Link>
          </a>
        </h1>

        <ul className=" hidden lg:flex ml-auto font-sans gap-5 px-5">
          <a className="px-8 py-3 link-underline link-underline-black text-black dark:text-white">
            <Link to="/about">About</Link>
          </a>

          <a className="px-8 py-3 link link-underline link-underline-black text-black dark:text-white">
            <Link to="/skills">Skills</Link>
          </a>
          <a className="px-8 py-3 link link-underline link-underline-black text-black dark:text-white">
            <Link to="/projects">Projects</Link>
          </a>
          <a className="px-8 py-3 link link-underline link-underline-black text-black dark:text-white">
            <Link to="/guest">Guest Book</Link>
          </a>
          <button className="px-8 py-3  ">Contact</button>
        </ul>
        <div
          className=" ml-auto px-10 lg:hidden text-indigo-600"
          onClick={handleClick}
        >
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "bg-zinc-200 flex flex-col absolute w-screen top-20 gap-9 px-32 z-20 py-10"
          }
        >
          <a className="px-8 py-3 text-center link link-underline link-underline-black text-black">
            <Link to="/about">About</Link>
          </a>
          <a className="px-8 py-3 text-center link link-underline link-underline-black text-black">
            <Link to="/skills">Skills</Link>
          </a>
          <a className="px-8 py-3 text-center link link-underline link-underline-black text-black">
            <Link to="/projects">Projects</Link>
          </a>{" "}
          <a className="px-8 py-3 text-center link link-underline link-underline-black text-black">
            <Link to="/guest">Guest Book</Link>
          </a>
          <button className="px-10 py-3 text-center">Contact</button>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

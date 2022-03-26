/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-zinc-200 h-[80px] flex items-center shadow-md fixed w-[100%] z-40">
      <h1 className="text-indigo-600 px-5 text-2xl cursor-pointer hover:text-indigo-700 hover:transition duration-700 ease-[cubic-bezier(.25,1,.25,1)] font-sans  ">
        <a
          href="#home "
          className="link link-underline link-underline-black p-2"
        >
          {" "}
          Tijil Agrawal
        </a>
      </h1>

      <ul className=" hidden lg:flex ml-auto font-sans gap-5 px-5">
        <a
          className="px-8 py-3 link-underline link-underline-black text-black"
          href="#about"
        >
          About
        </a>

        <a
          className="px-8 py-3 link link-underline link-underline-black text-black"
          href="#skills"
        >
          Skills
        </a>
        <a className="px-8 py-3 link link-underline link-underline-black text-black">
          Projects
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
        <a
          className="px-8 py-3 text-center link link-underline link-underline-black text-black"
          href="#about"
        >
          About
        </a>

        <a
          className="px-8 py-3 text-center link link-underline link-underline-black text-black"
          href="#skills"
        >
          Skills
        </a>
        <a className="px-8 py-3 text-center link link-underline link-underline-black text-black">
          Projects
        </a>
        <button className="px-10 py-3 text-center">Contact</button>
      </ul>
    </div>
  );
};
// apply these styles for the underline animation
//link link-underline link-underline-black text-black

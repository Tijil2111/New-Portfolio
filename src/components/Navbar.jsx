import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-zinc-200 h-[80px] flex items-center shadow-md">
      <h1
        className="text-indigo-600 px-5 text-2xl cursor-pointer hover:text-indigo-700 hover:transition duration-700 ease-[cubic-bezier(.25,1,.25,1)] font-sans
"
      >
        Tijil Agrawal
      </h1>

      <ul className=" hidden md:flex ml-auto font-sans gap-5">
        <button className="px-8 py-3">About</button>
        <button className="px-8 py-3">Skills</button>
        <button className="px-8 py-3">Projects</button>
        <button className="px-8 py-3">Contact</button>
      </ul>
      <div
        className=" ml-auto px-10 md:hidden text-indigo-600"
        onClick={handleClick}
      >
        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "bg-zinc-200 flex flex-col absolute w-screen top-20 gap-9 px-32 z-10"
        }
      >
        <button className="px-8 py-3 text-center">About</button>
        <button className="px-8 py-3 text-center">Skills</button>
        <button className="px-8 py-3 text-center">Projects</button>
        <button className="px-10 py-3 text-center">Contact</button>
      </ul>
    </div>
  );
};
// {
//   !nav ? "hidden" : "absolute bg-zinc-200 w-screen px-8";
// }

// flex ml-auto font-sans gap-5

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FaAngleLeft } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
export const ErrorPage = () => {
  const ddd = window.location.href;
  console.log(ddd);
  return (
    <div>
      <div className="pt-40 pl-32 text-7xl text-indigo-600">Oops !</div>
      <div className="pt-10 p-32 text-xl text-black">
        We cant find the page you requested !
      </div>
      <div className="pt-10 p-32 text-xl text-indigo-600">
        The url you requested was - {ddd}
      </div>
      <div className="flex justify-center mt-20">
        <a>
          <Link to="/">
            <FaAngleLeft className="arrow text-6xl text-indigo-600" />
          </Link>
        </a>
      </div>
      <Outlet />
    </div>
  );
};

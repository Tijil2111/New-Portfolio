/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../index.css";
import pic from "../assets/pic.png";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div className="pt-40 h-[100vh]" id="about">
      <Fade delay={500} triggerOnce>
        <h2 className="text-center">
          <span className="text-3xl  text-indigo-600 link link-underline link-underline-black p-2">
            About Me
          </span>
        </h2>
      </Fade>
      <Fade delay={1000} triggerOnce>
        <div className="flex flex-col lg:flex-row ">
          <img
            src={pic}
            alt="/"
            className="rounded-lg p-32 drop-shadow-2xl contrast-125 transform hover:transition duration-500 hover:scale-105"
          />
          <div className="flex flex-col lg:mt-36">
            <h2 className="text-3xl text-center">
              I am an
              <span className="text-indigo-600 p-3 link link-underline link-underline-black">
                Indian
              </span>
            </h2>
            <blockquote className="p-10 text-center">
              <p>
                I am a tech enthusiast with knowledge of various programming
                languages and I love Maths and Physics. I was honoured when i
                was admitted to my school's tech club{" "}
                <span className="text-indigo-600 p-1 link link-underline link-underline-black">
                  eSpice
                </span>
                . eSpice is a place full of techies and like-minded people.
                `Life is like a ride enjoy it to the fullest` is my favourite
                quote of all times.
              </p>
            </blockquote>
          </div>
        </div>
      </Fade>
    </div>
  );
};

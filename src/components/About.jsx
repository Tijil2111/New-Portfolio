/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../index.css";
import pic from "../assets/pic.png";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const url = "https://api.quotable.io/random";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuote(json.content);
        setAuthor(json.author);
      } catch (error) {
        setQuote("Error in API request");
        setAuthor("Please Reload the page");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="pt-40 h-[100vh] dark:bg-slate-900" id="about">
      <Fade delay={500} triggerOnce>
        <h2 className="text-center">
          <span className="text-3xl  text-teal-400 link link-underline link-underline-black p-2">
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
            <h2 className="text-3xl text-center dark:text-white">
              I am an
              <span className="text-teal-400 p-3 link link-underline link-underline-black">
                Indian
              </span>
            </h2>
            <blockquote className="p-10 text-center dark:text-white">
              <p>
                I am a tech enthusiast with knowledge of various programming
                languages and I love Maths and Physics. I was honoured when i
                was admitted to my school's tech club{" "}
                <span className="text-teal-400 p-1 link link-underline link-underline-black">
                  eSpice
                </span>
                . eSpice is a place full of techies and like-minded people.
                `Life is like a ride enjoy it to the fullest` is my favourite
                quote of all times.
              </p>
            </blockquote>
            <div className="pt-10 text-center text-teal-400">{quote}</div>
            <div className="p-2 text-center text-teal-400">-{author}</div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

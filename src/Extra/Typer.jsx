import React from "react";
import Typewriter from "typewriter-effect";

export const Typer = () => {
  return (
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
  );
};

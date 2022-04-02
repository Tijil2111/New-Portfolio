import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="dark:bg-slate-900  pt-32">
      <Fade delay={500} triggerOnce>
        <h2 className="text-center">
          <span className="text-3xl  text-teal-400 link link-underline link-underline-black p-2">
            Contact
          </span>
        </h2>
      </Fade>
      <Fade delay={1000} triggerOnce>
        <form
          className="p-32 flex flex-col items-center"
          action="https://formsubmit.co/5b05627afc5a019835022a361b66b26c"
          method="POST"
        >
          <div className="flex flex-col">
            <div className="flex items-center pt-10">
              <div className="md:w-1/3">
                <label className="block text-teal-400 font-bold text-righ]]]]]]]] pr-1">
                  Full Name
                </label>
              </div>
              <div className="w-2/3">
                <input
                  className="bg-teal-100"
                  id="inline-full-name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <div className="flex items-center pt-10">
              <div className="md:w-1/3">
                <label className="block text-teal-400 font-bold text-righ]]]]]]]] pr-1">
                  Email ID
                </label>
              </div>
              <div className="w-2/3">
                <input
                  className="bg-teal-100"
                  id="inline-full-name"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <div className="flex items-center pt-10">
              <div className="md:w-1/3">
                <label className="block text-teal-400 font-bold text-righ]]]]]]]] pr-1">
                  Subject
                </label>
              </div>
              <div className="w-2/3">
                <input
                  className="bg-teal-100"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                  name="subject"
                ></input>
              </div>
            </div>
            <div className="flex items-center pt-10">
              <div className="md:w-1/3">
                <label className="block text-teal-400 font-bold text-righ]]]]]]]] pr-1">
                  Message
                </label>
              </div>
              <div className="w-2/3">
                <textarea
                  className="bg-teal-100"
                  id="inline-full-name"
                  type="textarea"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center pt-5">
            <button className="px-10 py-3 text-center">Submit </button>
          </div>
        </form>
      </Fade>
    </div>
  );
};

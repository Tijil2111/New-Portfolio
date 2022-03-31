/* eslint-disable no-unused-vars */
import axios from "axios";

import React, { useState } from "react";

export const GuestBook = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");

  //handling the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, age, desc, country };
    axios
      .post(
        "https://sheet.best/api/sheets/59fd4902-2ba8-454e-b6d1-443061a0ec0e",
        userData
      )
      .then((response) => {
        console.log(response);
      });
    window.location.reload(false);
  };

  return (
    <div className="pt-40 dark:bg-slate-900 h-[100vh]">
      <form>
        <label>
          Name:
          <input
            type="text"
            placeholder="Name"
            className="bg-slate-500"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            placeholder="Age"
            className="bg-slate-500"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Desc:
          <input
            type="text"
            placeholder="Desc"
            className="bg-slate-500"
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            placeholder="Country"
            className="bg-slate-500"
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

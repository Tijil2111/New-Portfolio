import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { Fade } from "react-awesome-reveal";

export const Toast = (props) => {
  return (
    <Fade>
      <div className="ml-auto pl-10">
        <div className="bg-slate-900 shadow-lg w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3 dark:bg-white">
          <div className="bg-slate-900 flex justify-between items-center py-2 px-3 bg-clip-padding border-b rounded-t-lg dark:bg-white">
            <p className="font-bold text-teal-400 flex items-center">
              <svg
                className="w-4 h-4 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
              This website is theme responsive
            </p>
            <div className="flex items-center">
              <p className="text-teal-400 opacity-90 text-xs">Now</p>
              <button
                type="button"
                class="btn-close btn-close-white box-content w-4 h-4 ml-2 text-teal-400 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-teal-400 hover:opacity-75 hover:no-underline"
                onClick={props.close}
              >
                <XIcon />
              </button>
            </div>
          </div>
          <div className="p-3 text-teal-400 rounded-b-lg break-words text-indigo-60 ">
            This website is responsive to the theme of your OS
          </div>
        </div>
      </div>
    </Fade>
  );
};

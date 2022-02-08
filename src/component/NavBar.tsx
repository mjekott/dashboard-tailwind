/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
      <div className="w-full lg:w-24 bg-blue-800 h-full overflow-hidden relative">
        <a
          href="/#"
          className="hidden  w-14 h-14  absolute  rounded-xl transform -translate-x-1/2 left-1/2 top-10 lg:flex lg:justify-center lg:items-center  text-white hover:bg-white hover:text-blue-800 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </a>
        <div className="flex  items-center justify-center h-full flex-row lg:flex-col space-x-4 lg:space-x-0 py-4 lg:space-y-4">
          <a href="/#" className="group">
            <div
              className="flex lg:w-14 lg:h-14 w-10 h-10  rounded-xl items-center justify-center t  bg-white group-hover:opacity-100
            text-red-500 transform transition-all lg:translate-x-8 -translate-y-6 lg:-translate-y-0 duration-300 group-hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </a>
          <a href="/#" className="group">
            <div
              className="flex lg:w-14 lg:h-14 w-10 h-10  rounded-xl items-center justify-center text-white opacity-50 group-hover:bg-white group-hover:opacity-100
            group-hover:text-blue-800 transform transition-all lg:group-hover:translate-x-8 group-hover:-translate-y-6 lg:group-hover:-translate-y-0 duration-300 group-hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
          </a>
          <a href="/#" className="group">
            <div
              className="flex lg:w-14 lg:h-14 w-10 h-10  rounded-xl items-center justify-center text-white opacity-50 group-hover:bg-white group-hover:opacity-100
            group-hover:text-blue-800 transform transition-all lg:group-hover:translate-x-8 group-hover:-translate-y-6 lg:group-hover:-translate-y-0 duration-300 group-hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a href="/#" className="group">
            <div
              className="flex lg:w-14 lg:h-14 w-10 h-10  rounded-xl items-center justify-center text-white opacity-50 group-hover:bg-white group-hover:opacity-100
            group-hover:text-blue-800 transform transition-all lg:group-hover:translate-x-8 group-hover:-translate-y-6 lg:group-hover:-translate-y-0 duration-300 group-hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

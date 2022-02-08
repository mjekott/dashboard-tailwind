/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import SearchForm from "./SearchForm";

const Toolbar = () => {
  const [openDropdown, setOpenDropDown] = useState(false);
  return (
    <div className="flex -w-full lg:space-x-10">
      <div className="w-1/2 hidden lg:flex">
        <SearchForm />
      </div>
      <div className="w-full lg:w-1/2 flex justify-between items-center ">
        <div className="lg:hidden">
          <a href="/#" className="w-14 h-14 rounded-xl text-blue">
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
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center justify-center space-x-6 text-gray-500  font-semibold">
            <li className="hover:text-blue-800 cursor-pointer">FeedBack</li>
            <li className="hover:text-blue-800 cursor-pointer">Contacts</li>
            <li className="hover:text-blue-800 cursor-pointer">Help</li>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="/#"
            className="hover:text-gray-700 text-gray-400 cursor-pointer relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  fill-current "
              fill="none"
              viewBox="0 0 24 24 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-0 right-1 bg-red-500 border border-white h-2 w-2 rounded-full"></span>
          </a>
          <div className="flex lg:relative">
            <button
              className="w-6 h-6 rounded-full overflow-hidden
            focus:outline focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
            focus:ring-offset-white cursor-pointer"
              onClick={() => setOpenDropDown((prev) => !prev)}
            >
              <img
                src="https://avatars.githubusercontent.com/u/16419577?s=40&amp;v=4"
                className="w-10 h-10 object-cover"
              ></img>
            </button>
            {openDropdown ? (
              <>
                <div
                  className="fixed inset-0 w-full h-full z-10 "
                  onClick={() => setOpenDropDown((prev) => !prev)}
                ></div>
                <div
                  className="absolute  top-12 lg:top-7 mt-2 right-0 bg-white w-full lg:w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-20"
                  onClick={() => setOpenDropDown((prev) => !prev)}
                >
                  <div className="lg:hidden border-b border-gray-200">
                    <div
                      className="px-4"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <SearchForm />
                    </div>
                    <a
                      href="/#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Feedback
                    </a>
                    <a
                      href="/#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Contacts
                    </a>
                    <a
                      href="/#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Help
                    </a>
                  </div>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Setting
                  </a>
                  <a
                    href="/#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

import React, { useState } from "react";
import Toolbar from "./Toolbar";
import Blog from "./Blog";
import Statistics from "./Statistics";
import Sidebar from "./SideBar";

const MainContent = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="w-full lg:rounded-tl-3xl lg:rounded-bl-3xl bg-white p-4 lg:p-10 flex flex-col overflow-y-scroll ">
      <Toolbar />
      {/*    <div className="bg-gray-300 rounded-xl mt-4 lg:hidden">
        <button
          className="block w-32 h-10 bg-blue-600 mx-auto"
          onClick={() => setOpenSideBar((prev) => !prev)}
        >
          Toggle sidebar
        </button>
      </div> */}
      <div className="overflow-x-hidden flex-1 lg:overflow-visible pb-20 ">
        <div
          className={`transform ${
            openSideBar ? "-translate-x-full" : ""
          } transition-all duration-300 lg:transform-none`}
        >
          <div className="flex mt-4 lg:mt-10  lg:space-x-10">
            <div className="w-full flex-shrink-0 flex flex-col lg:flex-shrink  lg:w-3/4  rounded-xl">
              <div className="flex space-x-4 lg:space-x-10">
                <div className="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center justify-center lg:py-5 lg:px-4 px-2 py-3 space-x-0 lg:space-x-4 cursor-auto ">
                  <div className="bg-indigo-50 rounded-lg p-2 text-blue-800 w-full lg:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="uppercase text-xs text-gray-400 tracking-wider font-semibold">
                      Visitors
                    </span>
                    <span className="font-bold text-xl lg:text-2xl">
                      10,320
                    </span>
                  </div>
                </div>
                <div className="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center justify-center lg:py-5 lg:px-4 px-2 py-3 space-x-0 lg:space-x-4 cursor-auto ">
                  <div className="bg-indigo-50 rounded-lg p-2 text-blue-800 w-full lg:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="uppercase text-xs text-gray-400 tracking-wider font-semibold">
                      Customers
                    </span>
                    <span className="font-bold text-xl lg:text-2xl">4,628</span>
                  </div>
                </div>
                <div className="w-1/3 bg-red-500 shadow-lg border border-red-500 rounded-xl flex flex-col lg:flex-row items-center justify-center lg:py-5 lg:px-4 px-2 py-3 space-x-0 lg:space-x-4 cursor-auto ">
                  <div className="bg-red-600 rounded-lg p-2 text-white w-full lg:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="uppercase text-xs text-red-200 tracking-wider font-semibold">
                      Orders
                    </span>
                    <span className="font-bold text-xl text-white lg:text-2xl">
                      2,900
                    </span>
                  </div>
                </div>
              </div>
              <Statistics />
              <div className="flex flex-col lg:flex-row w-full lg:space-x-10  mt-4  lg:mt-10">
                <Blog />
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

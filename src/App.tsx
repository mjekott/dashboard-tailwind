/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
        <div className="w-full lg:w-24 bg-blue-800 h-full overflow-hidden relative">
          <a
            href="/#"
            className="hidden w-14 h-14 lg:block absolute bg-yellow-300 rounded-xl transform -translate-x-1/2 left-1/2 top-10 "
          ></a>
          <div className="flex  items-center justify-center h-full flex-row lg:flex-col space-x-4 lg:space-x-0 py-4 lg:space-y-4">
            <a href="/#" className="block w-14 h-14 bg-white rounded-xl"></a>
            <a href="/#" className="block w-14 h-14 bg-white rounded-xl"></a>
            <a href="/#" className="block w-14 h-14 bg-white rounded-xl"></a>
            <a href="/#" className="block w-14 h-14 bg-white rounded-xl"></a>
          </div>
        </div>
      </div>

      <div className="w-full p-4 lg:p-10 flex flex-col">
        <div className="bg-gray-300 rounded-xl h-14">seacrh</div>
        <div className="bg-gray-300 rounded-xl mt-4 lg:hidden">
          <button
            className="block w-32 h-10 bg-blue-600 mx-auto"
            onClick={() => setOpenSideBar((prev) => !prev)}
          >
            Toggle sidebar
          </button>
        </div>
        <div className="overflow-hidden flex-1 ">
          <div
            className={`transform ${
              openSideBar ? "-translate-x-full" : ""
            } transition-all duration-300 lg:transform-none`}
          >
            <div className="flex mt-4 lg:mt-10 space-x-4 lg:space-x-10">
              <div className="w-full flex-shrink-0 flex flex-col lg:flex-shrink lg lg:w-3/4 h-52 rounded-xl">
                <div className="flex space-x-4 lg:space-x-10">
                  <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                  <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                  <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                </div>
                <div className="bg-gray-300 rounded-xl h-28 mt-4 lg:mt-10 w-full">
                  hello
                </div>
                <div className="flex space-x-4 lg:space-x-10 mt-4  lg:mt-10">
                  <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                  <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                </div>
              </div>
              <div className="lg:w-1/4 w-full bg-gray-300 rounded-xl ">
                sidebar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

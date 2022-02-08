import React, { useState } from "react";

const MainContent = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
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
  );
};

export default MainContent;

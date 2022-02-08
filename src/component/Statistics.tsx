import React from "react";

const Statistics = () => {
  const data = [
    {
      id: 1,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 2,
      thinHeight: "60%",
      thinTop: "15%",
      middleHeight: "80%",
      widthTop: "10%",
    },
    {
      id: 3,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 4,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 5,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 6,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 7,
      thinHeight: "65%",
      thinTop: "20%",
      middleHeight: "50%",
      widthTop: "10%",
    },
    {
      id: 8,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 9,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 10,
      thinHeight: "65%",
      thinTop: "20%",
      middleHeight: "50%",
      widthTop: "10%",
    },
    {
      id: 11,
      thinHeight: "80%",
      thinTop: "10%",
      middleHeight: "50%",
      widthTop: "20%",
    },
    {
      id: 12,
      thinHeight: "65%",
      thinTop: "20%",
      middleHeight: "50%",
      widthTop: "10%",
    },
  ];
  return (
    <div className=" mt-4 lg:mt-10 w-full  ">
      <div className="py-4 bg-indigo-50 rounded-xl p-4 lg:p-10">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-lf font-semibold text-gray-700">Statistics</h3>
          <div>
            <button className="flex bg-white text-blue-600 space-x-3 items-center px-4 py-2 rounded-full font-bold focus:outline-none">
              <span>2021</span>
              <span className="block w-4 pt-1">
                <span className="block w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-72 relative">
          <div className="absolute h-full w-4 left-0 flex flex-col justify-between items-center text-gray-400">
            <span>4k</span>
            <span>3k</span>
            <span>2k</span>
            <span>1k</span>
            <span>0</span>
          </div>
          <div className="relative h-full ml-6  flex justify-between">
            {data.map((candle) => {
              return (
                <div
                  className="relative w-10 h-full inline-block "
                  key={candle.id}
                >
                  <div
                    className="border-indigo-200 border bg-gray-300 inline-block absolute left-1/2"
                    style={{
                      height: `${candle.thinHeight}`,
                      top: `${candle.thinTop}`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div
                        className="w-2 absolute transform -translate-x-1/2 bg-blue-800 rounded-full"
                        style={{
                          height: `${candle.middleHeight}`,
                          top: `${candle.widthTop}`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="absolute bottom-0 flex justify-between w-full text-gray-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

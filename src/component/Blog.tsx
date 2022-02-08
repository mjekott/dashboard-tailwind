/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Blog = () => {
  return (
    <div className="flex space-x-4 lg:space-y-0 mt-4 lg:mt-0 w-full  overflow-x-scroll no-scrollbar lg:w-1/2 relative ">
      <div className="flex flex-col space-y-1 bg-white shadow-lg border border-gray-100 p-5 w-full min-w-full ">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/16419577?s=40&amp;v=4"
              className="w-10 h-10 object-cover"
            ></img>
          </div>
          <div>
            <span className="block  leading-3 mb-1">Mfobobong Ekott</span>
            <span className="block text-xs text-gray-400">
              Software Developer
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold">
          <a href="/#" className="hover:text-blue-400 hover:underline text-sm ">
            How to properly manage your personal budget
          </a>
        </h3>
        <div className="flex  items-center space-x-3 ">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 text-xs">Video</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 text-xs">15 min</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600 fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="text-gray-600 text-xs">112 likes</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 text-sm mt-2 font-semibold">
          <span>5 days ago</span>
          <a
            href="/#"
            className="flex space-x-1 bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-2"
          >
            <span>Connect</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-1 bg-white shadow-lg border border-gray-100 p-5 min-w-full ">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/16419577?s=40&amp;v=4"
              className="w-10 h-10 object-cover"
            ></img>
          </div>
          <div>
            <span className="block  leading-3 mb-1">Mfobobong Ekott</span>
            <span className="block text-xs text-gray-400">
              Software Developer
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold">
          <a href="/#" className="hover:text-blue-400 hover:underline text-sm ">
            How to properly manage your personal budget
          </a>
        </h3>
        <div className="flex  items-center space-x-3 ">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 text-xs">Video</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 text-xs">15 min</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600 fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="text-gray-600 text-xs">112 likes</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 text-sm mt-2 font-semibold">
          <span>5 days ago</span>
          <a
            href="/#"
            className="flex space-x-1 bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-2"
          >
            <span>Connect</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

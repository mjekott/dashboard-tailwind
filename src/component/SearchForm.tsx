import React from "react";

const SearchForm = () => {
  return (
    <form>
      <div className="relative">
        <input
          type="text"
          className="w-full bg-indigo-50 pl-10 pr-4 text-indigo-900 py-2 border rounded-md outline-none border-gray-300  focus:ring-2 focus:ring-blue-600 peer"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute left-1 top-2 text-indigo-400 peer-focus:text-indigo-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
};

export default SearchForm;

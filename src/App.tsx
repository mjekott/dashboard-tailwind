/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./App.css";
import MainContent from "./component/MainContent";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="flex h-screen bg-blue-800">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;

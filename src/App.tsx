/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./App.css";
import MainContent from "./component/MainContent";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="flex h-screen">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;

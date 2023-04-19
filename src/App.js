import { useState } from "react";
import Tesseract from "tesseract.js";
import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import ImageConv from "./ImageConv";
import JmConv from "./JmConv";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<JmConv />} />
        <Route path="/Image2text" element={<ImageConv />} />
      </Routes>
    </div>
  );
}

export default App;

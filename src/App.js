import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import { useState } from "react";
import SearchVideos from "./components/search/SearchVideos";
import ParticularSection from "./components/PartcularSection/Particular_Section";
import './App.css'

const App = () => {
  const [changeslider, setChangeslider] = useState(false);
  return (
    <BrowserRouter>
      <Navbar changeslider={changeslider} setChangeslider={setChangeslider} />

      <div className="main-content">
        <Sidebar changeslider={changeslider} />
        <Routes>
          <Route path="/" element={<Home changeslider={changeslider} />} />
          <Route path="/search/:keyword" element={<SearchVideos />} />
          {/* <Route path="/search/:keyword/video/:id" element={<ParticularSection />} /> */}
          <Route path="/video/:id" element={<ParticularSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

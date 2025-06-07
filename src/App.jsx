import React, { useState } from "react";
import Grid from "./Grid";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("offense"); // State to manage mode
  const [sliderValue, setSliderValue] = useState(50); // State to track slider value (default 50%)

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === "offense" ? "defense" : "offense")); // Toggle mode
  };

  const handleFireOrAnchor = () => {
    alert(mode === "defense" ? "Anchoring..." : "Firing...");
  };

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value); // Update slider value

    // Update CSS variables for dynamic gradients
    document.documentElement.style.setProperty(
      "--button-hover-gradient",
      `linear-gradient(59deg, rgba(58, 111, 180, 1) 0%, rgba(0, 0, 255, 1) ${value}%, rgba(255, 0, 0, 1) 100%)`
    );
    document.documentElement.style.setProperty(
      "--slider-gradient",
      `linear-gradient(90deg, rgba(58, 111, 180, 1) 0%, rgba(0, 0, 255, 1) ${value}%, rgba(255, 0, 0, 1) 100%)`
    );
  };

  return (
    <div className="app-container">
      <Grid mode={mode} />
      <div className="control-panel">
        <div className="flex-container">
          <button className="mode-btn" onClick={handleModeToggle}>
            {mode === "offense" ? "Defense" : "Offense"}
          </button>
          <button className="reset-btn">Reset</button>
        </div>
        <div className="slider-container">
          <button className="rot-btn">Rotate</button>
          <input
            type="range"
            className="slider"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </div>
        <button
          className={`fire-btn ${mode === "defense" ? "anchor-btn" : ""}`}
          onClick={handleFireOrAnchor}
        >
          {mode === "defense" ? "Anchor" : "Fire"}
        </button>
        <div className="info-box-1">Info Block 1</div>
        <div className="info-box-2">Info Block 2</div>
      </div>
    </div>
  );
}

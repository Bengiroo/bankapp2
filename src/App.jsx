import React, { useState } from "react";
import Grid from "./Grid";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("offense"); // State to manage mode

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === "offense" ? "defense" : "offense")); // Toggle mode
  };

  const handleFireOrAnchor = () => {
    alert(mode === "defense" ? "Anchoring..." : "Firing...");
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
          <input type="range" className="slider" />
        </div>
        <button
          className={`fire-btn ${mode === "defense" ? "anchor-btn" : ""}`}
          onClick={handleFireOrAnchor}
        >
          {mode === "defense" ? "Anchor" : "Fire"}
        </button>
      </div>
    </div>
  );
}

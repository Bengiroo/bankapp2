import React from "react";
import "./Grid.css";

export default function Grid({ mode }) {
  const tileImage = mode === "offense" ? "/assets/a.png" : "/assets/b.png";

  return (
    <div className="grid">
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="tile"
          style={{
            backgroundImage: `url(${tileImage})`,
            backgroundSize: "cover", // Ensure the PNG fits perfectly
          }}
        ></div>
      ))}
    </div>
  );
}

import React from "react";
import "./Cartext.css";

function Car() {
  return (
    <div className="hold">
      <svg viewBox="0 0 897 420">
        <text
          className="n1"
          x="100%"
          y="60%"
          fill="transparent"
          textAnchor="middle"
        >
          <tspan fontSize={"3rem"} x="50%" dy="0.1em">
            TESLA
          </tspan>
          <tspan x="50%" dy="1.2em">
            CYPER TRUCK
          </tspan>
        </text>
      </svg>
    </div>
  );
}

export default Car;

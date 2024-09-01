import { useState } from "react";
import Light from "./Light";
import "./Light.css";

function LightGrid() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className="light-grid">
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
        <Light color={color} />
      </div>
    </>
  );
}

// <button
//   style={{ backgroundColor: "#DC0073" }}
//   onClick={() => setColor("red")}
// >
//   Red
// </button>
// <button
//   style={{ backgroundColor: "#00FFCD" }}
//   onClick={() => setColor("blue")}
// >
//   Blue
// </button>
// <button
//   style={{ backgroundColor: "##F5B700" }}
//   onClick={() => setColor("green")}
// >
//   Green
// </button>

export default LightGrid;

import { useState } from "react";
import Light from "./Light";
import "./Light.css";

function LightGrid() {
  const [color, setColor] = useState("");

  return (
    <>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
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
      </div>
    </>
  );
}

export default LightGrid;

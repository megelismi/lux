import { useState } from "react";
import Light from "./Light";
import "./Light.css";

function LightGrid() {
  const [color, setColor] = useState("#80ffdb");

  // color palette

  // 80ffdb
  // 72efdd
  // 64dfdf
  // 56cfe1
  // 48bfe3
  // 4ea8de
  // 5390d9
  // 5e60ce
  // 6930c3
  // 7400b8

  return (
    <>
      <div className="light-grid">
        <Light color={"#80ffdb"} />
        <Light color={"#72efdd"} />
        <Light color={"#64dfdf"} />
        <Light color={"#56cfe1"} />
        <Light color={"#48bfe3"} />
        <Light color={"#4ea8de"} />
        <Light color={"#5390d9"} />
        <Light color={"#5e60ce"} />
        <Light color={"#6930c3"} />
        <Light color={"#7400b8"} />
        <Light color={"#80ffdb"} />
        <Light color={"#72efdd"} />
        <Light color={"#64dfdf"} />
        <Light color={"#56cfe1"} />
        <Light color={"#48bfe3"} />
        <Light color={"#4ea8de"} />
        <Light color={"#5390d9"} />
        <Light color={"#5e60ce"} />
        <Light color={"#6930c3"} />
        <Light color={"#7400b8"} />
        <Light color={"#80ffdb"} />
        <Light color={"#72efdd"} />
        <Light color={"#64dfdf"} />
        <Light color={"#56cfe1"} />
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

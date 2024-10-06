import { useState } from "react";
import "./Cube.css";

function Cube({ color, onHover }: { color: string; onHover: () => void }) {
  const [hovering, setHovering] = useState(false);

  console.log("hovering", hovering);

  console.log("color", color);
  return (
    <div
      onMouseEnter={() => {
        onHover();
        setHovering(true);
      }}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="cube-body">
        <div
          style={
            hovering
              ? { backgroundColor: `${color}` }
              : { backgroundColor: "transparent" }
          }
          className="side top"
        />
        <div
          style={
            hovering
              ? { backgroundColor: `${color}` }
              : { backgroundColor: "transparent" }
          }
          className="side left"
        />
        <div
          style={
            hovering
              ? { backgroundColor: `${color}` }
              : { backgroundColor: "transparent" }
          }
          className="side right"
        />
      </div>
    </div>
  );
}

export default Cube;

import { useState } from "react";
import "./Light.css";

function Light({ color, onHover }: { color: string; onHover: () => void }) {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className="light-container"
        onMouseEnter={() => {
          onHover();
          setHovering(true);
        }}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className="light-body"
          style={
            hovering
              ? { backgroundColor: `${color}` }
              : { backgroundColor: "transparent" }
          }
        ></div>
      </div>
    </>
  );
}

export default Light;

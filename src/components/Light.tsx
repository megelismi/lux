import { useState } from "react";
import "./Light.css";

function Light({ color }: { color: string }) {
  const [hovering, setHovering] = useState(true);

  return (
    <>
      <div
        className="light-container"
        onMouseEnter={() => setHovering(true)}
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

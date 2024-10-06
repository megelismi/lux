import { useState } from "react";
import "./Cube.css";

function CubeSide({
  classNames,
  color,
  onHover,
}: {
  classNames: string;
  color: string;
  onHover: () => void;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        onHover();
        setHovering(true);
      }}
      onMouseLeave={() => setHovering(false)}
      style={
        hovering
          ? { backgroundColor: `${color}` }
          : { backgroundColor: "transparent" }
      }
      className={classNames}
    />
  );
}

function Cube({ color, onHover }: { color: string; onHover: () => void }) {
  return (
    <div>
      <div className="cube-body">
        <CubeSide color={color} classNames="side top" onHover={onHover} />
        <CubeSide color={color} classNames="side left" onHover={onHover} />
        <CubeSide color={color} classNames="side right" onHover={onHover} />
      </div>
    </div>
  );
}

export default Cube;

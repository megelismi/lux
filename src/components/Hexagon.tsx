import { useState } from "react";
import "./Light.css";

// is there a way to indicate that a prop may sometimes not be defined?
function Hexagon({
  fill,
  stroke,
  size,
  xAxisAdjustment,
  yAxisAdjustment,
}: {
  fill: string;
  stroke: string;
  size: number;
  xAxisAdjustment: number; // this is the row adjustment so that we can create a honeycomb pattern
  yAxisAdjustment: number; // this is the column adjustment so that we can create a honeycomb pattern
}) {
  const [isHovered, setIsHovered] = useState(false);

  // set a default width and height if one is not given
  // width and height should be the same value
  const width = size || 100;
  const height = size || 100;
  const fillColor = isHovered ? fill : "transparent";
  const outlineColor = stroke || "#fff";

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "absolute",
        top: `${xAxisAdjustment * 70}px`,
        left: `${yAxisAdjustment * 88 + ((xAxisAdjustment * 44) % 88)}px`,
      }}
    >
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="svg-light-body"
          d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
          fill={fillColor}
          stroke={outlineColor}
        />
      </svg>
    </div>
  );
}

export default Hexagon;

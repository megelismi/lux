import "./Pattern.css";
import "./Hexagon.css";
import { useContext, useState } from "react";
import { Context } from "../Context";
import Hexagon from "./Hexagon";

// const Hexagon = ({ row, column }: { row: number; column: number }) => {
//   const [isHovered, setIsHovered] = useState(false);
//
//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         position: "absolute",
//         top: `${row * 55}px`,
//         left: `${column * 190 + ((row * 95) % 190)}px`,
//         backgroundImage: isHovered
//           ? "linear-gradient(to right, red, yellow)"
//           : "",
//       }}
//       key={`hexagon-${row}-${column}`}
//       className="hexagon"
//     ></div>
//   );
// };

const generateHexagons = () => {
  const hexCollection = [];

  const fixedContainerHeight = window.innerHeight;
  const fixedContainerWidth = window.innerWidth;

  // add extra rows and columns so that we give the illusion of an endless pattern
  const countY = Math.ceil(fixedContainerHeight / 100) + 3;
  const countX = Math.ceil(fixedContainerWidth / 100) + 3;

  for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      const row = i;
      const column = j;
      // adjust the rows and columns so that we create a honeycomb pattern
      hexCollection.push(
        <Hexagon key={`hexagon-${i}-${j}`} row={i} column={j} />
      );
    }
  }

  return hexCollection;
};

function Pattern() {
  const hexagons = generateHexagons();

  return (
    <div className="pattern-container">
      <div className="pattern">{hexagons}</div>
    </div>
  );
}

export default Pattern;

import "./Pattern.css";
import { useContext } from "react";
import { Context } from "../Context";
import Hexagon from "./Hexagon";

// TODO: maybe change this file to "Hexagon Pattern..."

const generateHexagons = () => {
  const { patternColor } = useContext(Context);

  const hexCollection = [];

  // TODO: change this so that height and width are dynamically calculated

  console.log("window.innerHeight", window.innerHeight);
  console.log("window.innerWidth", window.innerWidth);
  const fixedContainerHeight = window.innerHeight;
  const fixedContainerWidth = window.innerWidth;

  // add extra rows and columns so that we give the illusion of an endless pattern
  const countY = Math.ceil(fixedContainerHeight / 100) + 1;
  const countX = Math.ceil(fixedContainerWidth / 100) + 1;

  for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      // adjust the rows and columns so that we create a honeycomb pattern
      hexCollection.push(
        <Hexagon
          key={`hexagon-${i}-${j}`}
          row={i}
          column={j}
          fill={patternColor}
          stroke={patternColor}
        />
      );
    }
  }

  return hexCollection;
};

function Pattern() {
  const hexagons = generateHexagons();

  // TODO: dynamically grab the size of the pattern container
  // so that it scales with screen size

  return (
    <div className="pattern-container">
      <div className="pattern">{hexagons}</div>
    </div>
  );
}

// style={{ position: "absolute" }}

export default Pattern;

import "./Pattern.css";
import { useContext } from "react";
import { Context } from "../Context";
import Hexagon from "./Hexagon";

// TODO: maybe change this file to "Hexagon Pattern..."

const generateHexagons = () => {
  const { patternColor } = useContext(Context);
  console.log(`the pattern color is...${patternColor}`);

  const hexCollection = [];

  // TODO: change this so that height and width are dynamically calculated
  const fixedContainerHeight = 500;
  const fixedContainerWidth = 700;

  // add extra rows and columns so that we give the illusion of an endless pattern
  const countY = Math.ceil(fixedContainerHeight / 100) + 3;
  const countX = Math.ceil(fixedContainerWidth / 100) + 3;

  for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      // adjust the rows and columns so that we create a honeycomb pattern
      hexCollection.push(
        <Hexagon
          key={`hexagon-${i}-${j}`}
          fill={patternColor}
          xAxisAdjustment={i}
          yAxisAdjustment={j}
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
      <div
        className="pattern"
        style={{ position: "absolute", top: "-50px", left: "-55px" }}
      >
        {hexagons}
      </div>
    </div>
  );
}

export default Pattern;

import { useState } from "react";
import Light from "./Light";
import "./Light.css";

const RED = "#ff0000";
const ORANGE = "#ff8700";
const YELLOW = "#ffd300";
const BRIGHT_YELLOW = "#deff0a";
const BRIGHT_GREEN = "#a1ff0a";
const GREEN = "#0aff99";
const BRIGHT_BLUE = "#0aefff";
const BLUE = "#147df5";
const INDIGO = "#580aff";
const VIOLET = "#be0aff";

const RAINBOW = [
  RED,
  ORANGE,
  YELLOW,
  BRIGHT_YELLOW,
  BRIGHT_GREEN,
  GREEN,
  BRIGHT_BLUE,
  BLUE,
  INDIGO,
  VIOLET,
];

function LightGrid() {
  const [color, setColor] = useState(null);
  const [colorIndex, setColorIndex] = useState(null);
  const [gradientDirection, setGradientDirection] = useState(null);

  const initializeGradient = () => {
    setColor(RAINBOW[0]);
    setColorIndex(0);
    setGradientDirection("forwards");
  };

  // TODO: add comment...
  const updateColor = () => {
    // this is the first time through, initialize the gradient state
    if (color === null) {
      initializeGradient();

      return;
    }

    const updatedIndex =
      gradientDirection === "forwards" ? colorIndex + 1 : colorIndex - 1;

    setColorIndex(updatedIndex);
    setColor(RAINBOW[updatedIndex]);

    if (updatedIndex === 0) {
      setGradientDirection("forwards");
    } else if (updatedIndex === RAINBOW.length - 1) {
      setGradientDirection("backwards");
    }
  };

  return (
    <>
      <div className="light-grid">
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
        <Light color={color} onHover={updateColor} />
      </div>
    </>
  );
}

export default LightGrid;

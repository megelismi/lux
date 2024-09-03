import { useState } from "react";
import Light from "./Light";
import "./Light.css";

function LightGrid() {
  const [color, setColor] = useState(null);
  const [colorIndex, setColorIndex] = useState(null);
  const [gradientDirection, setGradientDirection] = useState(null);
  const [gradient, setGradient] = useState(null);

  function generateColorGradient(startColor, endColor, steps) {
    // Function to convert RGB color to an array of numbers
    function rgbToArray(color) {
      const [r, g, b] = color.match(/\d+/g).map(Number);
      return [r, g, b];
    }

    // Function to convert an array of numbers to RGB color string
    function arrayToRgb(arr) {
      return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    }

    // Convert start and end colors to arrays
    const start = rgbToArray(startColor);
    const end = rgbToArray(endColor);

    // Initialize an array to store the gradient colors
    const colorGradient = [];

    for (let i = 0; i < steps; i++) {
      // Calculate the intermediate color values
      const r = Math.round(start[0] + (end[0] - start[0]) * (i / (steps - 1)));
      const g = Math.round(start[1] + (end[1] - start[1]) * (i / (steps - 1)));
      const b = Math.round(start[2] + (end[2] - start[2]) * (i / (steps - 1)));

      // Add the color to the gradient array
      colorGradient.push(arrayToRgb([r, g, b]));
    }

    return colorGradient;
  }

  // TODO: add comment...
  const updateColor = () => {
    // this is the first time through, initialize the gradient state
    if (gradient === null) {
      const startColor = "rgb(255, 0, 0)"; // Red
      const endColor = "rgb(0, 0, 255)"; // Blue
      const steps = 16;

      const generatedGradient = generateColorGradient(
        startColor,
        endColor,
        steps
      );

      setGradient(generatedGradient);
      setColor(generatedGradient[0]);
      setColorIndex(0);
      setGradientDirection("forwards");

      return;
    }

    const updatedIndex =
      gradientDirection === "forwards" ? colorIndex + 1 : colorIndex - 1;

    setColorIndex(updatedIndex);
    setColor(gradient[updatedIndex]);

    if (updatedIndex === 0) {
      setGradientDirection("forwards");
    } else if (updatedIndex === gradient.length - 1) {
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

import "./Layout.css";
import { useEffect, useState } from "react";
import { Context } from "./Context";
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import Pattern from "./components/Pattern";
import Grid from "./components/Grid";
import { COLORS } from "./constants";

// Function to convert RGB color to an array of numbers
function rgbToArray(color) {
  const [r, g, b] = color.match(/\d+/g).map(Number);
  return [r, g, b];
}

// Function to convert an array of numbers to RGB color string
function arrayToRgb(arr) {
  return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

function generateColorGradient(startColor, endColor, steps) {
  console.log("generate color gradient running ");
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

function Layout() {
  const [color, setColor] = useState(null);

  return (
    <Context.Provider value={{ color }}>
      <Pattern />
    </Context.Provider>
  );
}

export default Layout;

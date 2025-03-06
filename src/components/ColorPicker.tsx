import "./ColorPicker.css";
import { useContext } from "react";
import { Context } from "../Context";

// default colors
const COLORS = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
];

function ColorCircle({ color }: { color: string }) {
  const { patternColor, setPatternColor } = useContext(Context);

  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => setPatternColor(color)}
      className={`${
        patternColor === color ? "color-selected" : ""
      } color-circle`}
    ></div>
  );
}

// TODO: think about a way to show that a color is selected
function ColorPicker() {
  return (
    <div className="color-picker">
      {COLORS.map((c) => {
        return <ColorCircle key={`color-circle-${c}`} color={c} />;
      })}
    </div>
  );
}

export default ColorPicker;

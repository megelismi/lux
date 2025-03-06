import "./ColorPicker.css";

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
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => console.log(`${color} clicked!`)}
      className="color-circle"
    ></div>
  );
}

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

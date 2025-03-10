import "./ColorPicker.css";
import { useContext } from "react";
import { Context } from "../Context";
import { COLORS } from "../constants";

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

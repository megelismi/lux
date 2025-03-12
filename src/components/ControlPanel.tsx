import ColorPicker from "./ColorPicker";
import "./ControlPanel.css";

function ControlPanel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ColorPicker />
    </div>
  );
}

export default ControlPanel;

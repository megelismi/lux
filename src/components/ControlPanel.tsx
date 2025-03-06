import ColorPicker from "./ColorPicker";
import "./ControlPanel.css";

function ControlPanel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 12px",
      }}
    >
      <ColorPicker />
    </div>
  );
}

export default ControlPanel;

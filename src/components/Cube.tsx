import "./Cube.css";

function Cube({ color }: { color: string }) {
  return (
    <div className="container">
      <div className="cube">
        <div className="side top" />
        <div className="side left" />
        <div className="side right" />
      </div>
    </div>
  );
}

export default Cube;

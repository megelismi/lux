import "./Light.css";

function Light({ color }: { color: string }) {
  return (
    <>
      <div className="light-container">
        <div className={`${color} light-body`}></div>
      </div>
    </>
  );
}

export default Light;

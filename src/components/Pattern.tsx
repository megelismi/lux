import "./Pattern.css";
import Hexagon from "./Hexagon";

// <div
//   style={{
//     background: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;`,
//     width: `44px`,
//     height: `50px`,
//     backgroundSize: `contain`,
//     position: `absolute`,
// top: `${i * 40}px`,
// left: `${j * 48 + ((i * 24) % 48)}px`,
//     color: `white`,
//   }}
// ></div>

const generateHexagons = () => {
  const hexCollection = [];

  // TODO: change this so that height and width are dynamically calculated
  const fixedContainerHeight = 500;
  const fixedContainerWidth = 700;

  const countY = Math.ceil(fixedContainerHeight / 100) + 3;
  const countX = Math.ceil(fixedContainerWidth / 100) + 3;

  console.log("countY", countY);
  console.log("countX", countX);

  for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      hexCollection.push(<Hexagon i={i} j={j} />);
    }
  }

  return hexCollection;
};

function Pattern() {
  // const pattern = "hexagons";

  const hexagons = generateHexagons();

  // TODO: dynamically grab the size of the pattern container
  // so that it scales with screen size

  return (
    <div className="pattern-container">
      <div className="pattern">{hexagons}</div>
    </div>
  );
}

export default Pattern;

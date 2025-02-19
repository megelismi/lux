import "./Layout.css";
import ControlPanel from "./components/ControlPanel";
// import Grid from "./components/Grid";

function Layout() {
  return (
    <div className="layout">
      <div className="header">HEADER</div>
      <div className="sidebar">
        <ControlPanel />
      </div>
      <div className="main">MAIN</div>
    </div>
  );
}

export default Layout;

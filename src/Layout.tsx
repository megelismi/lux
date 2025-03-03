import "./Layout.css";
import ControlPanel from "./components/ControlPanel";
import Pattern from "./components/Pattern";
import Grid from "./components/Grid";

function Layout() {
  return (
    <div className="layout">
      <div className="header">HEADER</div>
      <div className="sidebar">
        <ControlPanel />
      </div>
      <div className="main">
        <Pattern />
      </div>
    </div>
  );
}

export default Layout;

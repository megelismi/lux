import "./Layout.css";
import ControlPanel from "./components/ControlPanel";
import Pattern from "./components/Pattern";
import Grid from "./components/Grid";

function Layout() {
  return (
    <div className="layout">
      <div className="header">HEADER</div>
      <div>
        <div className="main">
          <div className="sidebar">
            <ControlPanel />
          </div>
          <Pattern />
        </div>
      </div>
    </div>
  );
}

export default Layout;

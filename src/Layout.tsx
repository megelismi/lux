import "./Layout.css";
import { useState } from "react";
import { Context } from "./Context";
import ControlPanel from "./components/ControlPanel";
import Pattern from "./components/Pattern";
import Grid from "./components/Grid";

function Layout() {
  const [patternColor, setPatternColor] = useState("transparent");

  return (
    <Context.Provider value={{ patternColor, setPatternColor }}>
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
    </Context.Provider>
  );
}

export default Layout;

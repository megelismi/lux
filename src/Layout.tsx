import "./Layout.css";
import { useState } from "react";
import { Context } from "./Context";
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import Pattern from "./components/Pattern";
import Grid from "./components/Grid";
import { COLORS } from "./constants";

function Layout() {
  const [patternColor, setPatternColor] = useState(COLORS[0]);

  return (
    <Context.Provider value={{ patternColor, setPatternColor }}>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
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

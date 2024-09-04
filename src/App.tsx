import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Diamond from "./components/Diamond";
import LightGrid from "./components/LightGrid";

function App() {
  return (
    <>
      <Diamond />
      <LightGrid />
    </>
  );
}

export default App;

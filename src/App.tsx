import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Select } from "./Select";
// import "./App.css";

function App() {

  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ]
  return (
    <div className="App">
      <Select />
    </div>
  );
}

// value={"hello", "hvb"} options={"hello"} onChange={() => (3)}

export default App;

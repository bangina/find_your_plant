import React from "react";
import StepBar from "./components/StepBar";
import "./App.css";
import Question1 from "./components/Question1";

function App() {
  return (
    <div>
      <StepBar>
        <Question1 />
      </StepBar>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import StepBar from "./components/StepBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Intro from "./components/Intro";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Result from "./components/Result";
import DATA from "./data";

function App() {
  const [condition, setCondition] = useState({
    space: "",
    light: "",
    humidity: "",
    temperature: "",
    size: "",
    difficulty: "",
  });

  return (
    <Router>
      <div className="app-frame">
        <Switch>
          <Route path="/" exact>
            <Landingpage />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/q1">
            <StepBar step="1" statMsg="시작할게요">
              <Question1
                condition={condition}
                onClick={(name, value) => {
                  setCondition({
                    ...condition,
                    [name]: value,
                  });
                }}
              ></Question1>
            </StepBar>
          </Route>
          <Route path="/q2">
            <StepBar step="2" statMsg="밝기 체크!">
              <Question2
                space={condition.space}
                condition={condition}
                onClick={(name, value) => {
                  setCondition({
                    ...condition,
                    [name]: value,
                  });
                }}
              />
            </StepBar>
          </Route>
          <Route path="/q3">
            <StepBar step="3" statMsg="습도 체크!">
              <Question3
                space={condition.space}
                condition={condition}
                onClick={(name, value) => {
                  setCondition({
                    ...condition,
                    [name]: value,
                  });
                }}
              />
            </StepBar>
          </Route>
          <Route path="/q4">
            <StepBar step="4" statMsg="최저 온도 체크!">
              <Question4
                space={condition.space}
                condition={condition}
                onClick={(name, value) => {
                  setCondition({
                    ...condition,
                    [name]: value,
                  });
                }}
              />
            </StepBar>
          </Route>
          <Route path="/q5">
            <StepBar step="5" statMsg="거의 다 왔어요!">
              <Question5
                space={condition.space}
                condition={condition}
                onClick={(name, value) => {
                  setCondition({
                    ...condition,
                    [name]: value,
                  });
                }}
              />
            </StepBar>
          </Route>
          <Route path="/q6">
            <StepBar step="6" statMsg="마지막 질문이에요 👏">
              <Question6
                space={condition.space}
                condition={condition}
                onClick={(name, value) => {
                  setCondition({
                    ...condition,
                    [name]: value,
                  });
                }}
              />
            </StepBar>
          </Route>
          <Route path="/result">
            <Result
              condition={condition}
              data={DATA}
              onClick={() => {
                setCondition({
                  space: "",
                  light: "",
                  humidity: "",
                  temperature: "",
                  size: "",
                  difficulty: "",
                });
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

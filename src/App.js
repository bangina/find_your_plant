import React from "react";
import QLayout from "./components/QLayout";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Intro from "./components/Intro";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Result from "./components/Result";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router>
      <div className="app-frame">
        {/* switch : 매치되는 주소 하나 찾으면 이제 안 찾도록 함 */}
        <ScrollToTop>
          <Switch>
            <Route path="/" component={Landingpage} exact={true}></Route>
            <Route path="/intro" component={Intro}></Route>
            <Route path="/q1">
              <QLayout>
                <Question1 />
              </QLayout>
            </Route>
            <Route path="/q2">
              <QLayout>
                <Question2 />
              </QLayout>
            </Route>
            <Route path="/q3">
              <QLayout>
                <Question3 />
              </QLayout>
            </Route>
            <Route path="/q4">
              <QLayout>
                <Question4 />
              </QLayout>
            </Route>
            <Route path="/q5">
              <QLayout>
                <Question5 />
              </QLayout>
            </Route>
            <Route path="/q6">
              <QLayout>
                <Question6 />
              </QLayout>
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;

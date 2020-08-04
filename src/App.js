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
              <QLayout step="1" statMsg="시작할게요">
                <Question1 />
              </QLayout>
            </Route>
            <Route path="/q2">
              <QLayout step="2" statMsg="밝기 체크!">
                <Question2 />
              </QLayout>
            </Route>
            <Route path="/q3">
              <QLayout step="3" statMsg="습도 체크!">
                <Question3 />
              </QLayout>
            </Route>
            <Route path="/q4">
              <QLayout step="4" statMsg="최저 온도 체크!">
                <Question4 />
              </QLayout>
            </Route>
            <Route path="/q5">
              <QLayout step="5" statMsg="거의 다 왔어요!">
                <Question5 />
              </QLayout>
            </Route>
            <Route path="/q6">
              <QLayout step="6" statMsg="마지막 질문이에요 👏">
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

import React from "react";
import { Route } from "react-router-dom";

//컴포넌트들을 불러와서 인스턴스 생성.
const Landingpage = React.lazy(() => import("./components/Landingpage"));
const Intro = React.lazy(() => import("./components/Intro"));
const Question1 = React.lazy(() => import("./components/Question1"));
const Question2 = React.lazy(() => import("./components/Question2"));
const Question3 = React.lazy(() => import("./components/Question3"));
const Question4 = React.lazy(() => import("./components/Question4"));
const Question5 = React.lazy(() => import("./components/Question5"));
const Question6 = React.lazy(() => import("./components/Question6"));

//라우팅 주소별 컴포넌트 매칭하기
const routes = [
  { path: "/", component: Landingpage, route: Route, exact: true },
  { path: "/intro", name: "Intro", component: Intro, route: Route },
  { path: "/q1", name: "Question1", component: Question1, route: Route },
  { path: "/q2", name: "Question2", component: Question2, route: Route },
  { path: "/q3", name: "Question3", component: Question3, route: Route },
  { path: "/q4", name: "Question4", component: Question4, route: Route },
  { path: "/q5", name: "Question5", component: Question5, route: Route },
  { path: "/q6", name: "Question6", component: Question6, route: Route },
];
export { routes };

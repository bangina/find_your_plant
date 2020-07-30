import React from "react";
import { Link } from "react-router-dom";
import StepBar from "./StepBar";

const Question1 = (props) => {
  return (
    <div className="container" id="q1">
      {" "}
      <StepBar />
      {/* 최상위 컨테이너 */}
      <form action className="form">
        {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
        <div className="qa-container">
          <p className="q-txt">반려식물을 어떤 공간에 놓을 계획이신가요?</p>
          <div className="a-box">
            <img src={require("../imgs/q_1_1.jpg")} alt="사무실" />
            <input
              type="radio"
              id="q-1-1"
              name="space"
              value="1"
              onClick={(e) => {
                props.onClick(e.target.name, e.target.value);
              }}
            />
            <label htmlFor="q-1-1">
              <span>사무실</span>
            </label>
          </div>
          <div className="a-box">
            <img src={require("../imgs/q_1_2.jpg")} alt="사무실" />
            <input
              type="radio"
              id="q-1-2"
              name="space"
              value="2"
              onClick={(e) => {
                props.onClick(e.target.name, e.target.value);
              }}
            />
            <label htmlFor="q-1-2">
              <span>방</span>
            </label>
          </div>
          <div className="a-box">
            <img src={require("../imgs/q_1_3.jpg")} alt="사무실" />
            <input
              type="radio"
              id="q-1-3"
              name="space"
              value="3"
              onClick={(e) => {
                props.onClick(e.target.name, e.target.value);
              }}
            />
            <label htmlFor="q-1-3">
              <span>거실</span>
            </label>
          </div>
          <div className="a-box">
            <input
              type="radio"
              id="q-1-4"
              name="space"
              value="4"
              onClick={(e) => {
                props.onClick(e.target.name, e.target.value);
              }}
            />
            <label htmlFor="q-1-4">
              <span>기타 /아직 모르겠어요</span>
            </label>
          </div>
        </div>
        <button className="btn" type="button">
          <Link to="/q2">
            다음 질문{" "}
            <span role="img" aria-label="">
              👉
            </span>
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Question1;

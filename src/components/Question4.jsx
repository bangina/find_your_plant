import React from "react";
import { Link } from "react-router-dom";
import StepBar from "./StepBar";

const Question4 = (props) => {
  return (
    <div className="container" id="q1">
      <StepBar />
      <form action className="form">
        {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
        <div className="qa-container normal-radio">
          <p className="q-txt">
            <span>사무실</span>은 겨울에 얼마나 추워지나요?
          </p>
          <input
            type="radio"
            id="q-4-1"
            name="temperature"
            value="1"
            onClick={(e) => {
              props.onClick(e.target.name, e.target.value);
            }}
          />
          <label htmlFor="q-4-1">
            <span>추울 때는 영하로도 떨어져요.</span>
          </label>
          <input
            type="radio"
            id="q-4-2"
            name="temperature"
            value="2"
            onClick={(e) => {
              props.onClick(e.target.name, e.target.value);
            }}
          />
          <label htmlFor="q-4-2">
            <span>영하는 아니지만 10도 이하로 떨어지기도 해요.</span>
          </label>
          <input
            type="radio"
            id="q-4-3"
            name="temperature"
            value="3"
            onClick={(e) => {
              props.onClick(e.target.name, e.target.value);
            }}
          />
          <label htmlFor="q-4-3">
            <span>항상 13도 이상으로 유지돼요.</span>
          </label>
        </div>
        <button className="btn" type="button">
          <Link to="/q5">
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

export default Question4;

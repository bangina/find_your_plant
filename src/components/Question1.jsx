import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Question1 = (props) => {
  return (
    <form action className="form q1">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <strong>어떤 공간에</strong> 반려식물을 놓을 계획이신가요?
        </p>
        <div className="a-box">
          <img src={"./imgs/q_1_1.jpg"} alt="사무실" />
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
          <img src={"./imgs/q_1_2.jpg"} alt="방" />
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
          <img src={"./imgs/q_1_3.jpg"} alt="거실" />
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
          <span className="etc-emoji">🎸</span>
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
            <span>기타/아직 모르겠어요</span>
          </label>
        </div>
      </div>
      <Button input={props.condition.space} linkTo="q2" linkCurr="q1" />
    </form>
  );
};

export default Question1;

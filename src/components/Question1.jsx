import React from "react";
import StepBar from "./StepBar";

const Question1 = () => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">반려식물을 어떤 공간에 놓을 계획이신가요?</p>
        <div className="a-box">
          <img src={require("../imgs/q_1_1.jpg")} alt="사무실" />
          <input type="radio" id="q-1-1" name="q-1" />
          <label htmlFor="q-1-1">
            <span>사무실</span>
          </label>
        </div>
        <div className="a-box">
          <img src={require("../imgs/q_1_2.jpg")} alt="사무실" />
          <input type="radio" id="q-1-2" name="q-1" />
          <label htmlFor="q-1-2">
            <span>방</span>
          </label>
        </div>
        <div className="a-box">
          <img src={require("../imgs/q_1_3.jpg")} alt="사무실" />
          <input type="radio" id="q-1-3" name="q-1" />
          <label htmlFor="q-1-3">
            <span>거실</span>
          </label>
        </div>
        <div className="a-box">
          <input type="radio" id="q-1-4" name="q-1" />
          <label htmlFor="q-1-4">
            <span>기타 /아직 모르겠어요</span>
          </label>
        </div>
      </div>
      <a href="q2.html" title="다음 질문으로">
        <button className="btn" type="button">
          다음 질문{" "}
          <span role="img" aria-label="">
            👉
          </span>
        </button>
      </a>
    </form>
  );
};

export default Question1;

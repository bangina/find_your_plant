import React from "react";
import { Link } from "react-router-dom";

const Question5 = (props) => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">크기가 큰 식물도 함께 추천해드릴까요?</p>
        <div className="a-box">
          <input type="radio" id="q-5-1" name="size" value="1" onClick={(e)=>{
            props.onClick(e.target.name, e.target.value)
          }} />
          <i className="fas fa-tree" />
          <label htmlFor="q-5-1">
            <span>네, 큰 식물도 함께 추천해주세요.</span>
          </label>
        </div>
        <div className="a-box">
          <input type="radio" id="q-5-2" name="size" value="2" onClick={(e)=>{
            props.onClick(e.target.name, e.target.value)
          }} />
          <i className="fab fa-pagelines" />
          <label htmlFor="q-5-2">
            <span>아니요, 크지 않은 식물만 추천해주세요.</span>
          </label>
        </div>
      </div>
      <button className="btn" type="button">
          <Link to="/q6">
          다음 질문 <span role="img" aria-label="">👉</span>
          </Link>
        </button>
    </form>
  );
};

export default Question5;

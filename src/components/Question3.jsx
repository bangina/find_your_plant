import React from "react";
import { Link } from "react-router-dom";

const Question3 = (props) => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <span>사무실</span>에 습도가 어느 정도인가요?
        </p>
        <div className="a-box">
          <input type="radio" id="q-3-1" name="humidity" value="1" onClick={(e)=>{
            props.onClick(e.target.name, e.target.value)
          }} />
          <i className="fas fa-sun" />
          <label htmlFor="q-3-1">
            <span>
              적당해요.
              <br /> 딱히 건조함은 못 느끼고 있어요.
            </span>
          </label>
        </div>
        <div className="a-box">
          <input type="radio" id="q-3-2" name="humidity" value="2" onClick={(e)=>{
            props.onClick(e.target.name, e.target.value)
          }} />
          <i className="fas fa-cloud-sun" />
          <label htmlFor="q-3-2">
            <span>꽤 건조한 편이에요.</span>
          </label>
        </div>
      </div>
      <button className="btn" type="button">
          <Link to="/q4">
          다음 질문 <span role="img" aria-label="">👉</span>
          </Link>
        </button>
    </form>
  );
};

export default Question3;

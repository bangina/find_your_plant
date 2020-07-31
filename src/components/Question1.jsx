import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Question1 = (props) => {
  const alertRef = useRef();
  const onBtnClick = (e) => {
    if (props.condition.space == false) {
      alertRef.current.classList.add("show");
      alertRef.current.classList.remove("alert-msg");
    }
  };
  return (
    <form action className="form q1">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">반려식물을 어떤 공간에 놓을 계획이신가요?</p>
        <div className="a-box">
          <img src={"/imgs/q_1_1.jpg"} alt="사무실" />
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
          <img src={"/imgs/q_1_2.jpg"} alt="방" />
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
          <img src={"/imgs/q_1_3.jpg"} alt="거실" />
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
            <span>기타</span>
          </label>
        </div>
        <p className="alert-msg" ref={alertRef}>
          답변을 선택해주세요.
        </p>
      </div>
      <button className="btn" type="button" onClick={onBtnClick}>
        <Link to={props.condition.space ? "/q2" : "/q1"}>
          다음 질문{" "}
          <span role="img" aria-label="">
            👉
          </span>
        </Link>
      </button>
    </form>
  );
};

export default Question1;

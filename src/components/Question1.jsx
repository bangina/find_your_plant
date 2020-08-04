import React, { useState, useCallback } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { insertInput, insertSpace } from "../redux/condition";

const Question1 = () => {
  const [condition, setCondition] = useState({
    step: 1,
    space: "",
    light: "",
    humidity: "",
    temperature: "",
    size: "",
    difficulty: "",
  });

  const onConditionChange = (e) => {
    setCondition({ ...condition, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const onBtnClick = (e) => {
    e.preventDefault();
    dispatch(insertInput("space", condition.space));
  };
  return (
    <form action className="form q1">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <strong>어떤 공간에</strong> 반려식물을 놓을 계획이신가요?
        </p>
        <div className="a-box">
          <div
            className="img-box"
            style={{
              "background-image": `url(./imgs/q_1_1.jpg)`,
            }}
          ></div>
          <input
            type="radio"
            id="q-1-1"
            name="space"
            value="1"
            onClick={(e) => {
              onConditionChange(e);
            }}
          />
          <label htmlFor="q-1-1">
            <span>사무실</span>
          </label>
        </div>

        <div className="a-box">
          <div
            className="img-box"
            style={{
              "background-image": `url(./imgs/q_1_2.jpg)`,
            }}
          ></div>
          <input
            type="radio"
            id="q-1-2"
            name="space"
            value="2"
            onClick={(e) => {
              onConditionChange(e);
            }}
          />
          <label htmlFor="q-1-2">
            <span>방</span>
          </label>
        </div>

        <div className="a-box">
          <div
            className="img-box"
            style={{
              "background-image": `url(./imgs/q_1_3.jpg)`,
            }}
          ></div>
          <input
            type="radio"
            id="q-1-3"
            name="space"
            value="3"
            onClick={(e) => {
              onConditionChange(e);
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
              onConditionChange(e);
            }}
          />
          <label htmlFor="q-1-4">
            <span>기타/아직 모르겠어요</span>
          </label>
        </div>
      </div>
      <button onClick={onBtnClick}>버튼</button>
      <Button
        input={condition.space} //유효성 검사용
        linkTo="q2"
        linkCurr="q1"
      />
    </form>
  );
};

export default Question1;

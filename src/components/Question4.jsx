import React, { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { insertInput, increaseStep } from "../redux/condition";

const Question4 = () => {
  const [condition, setCondition] = useState({
    step: 1,
    space: "",
    light: "",
    humidity: "",
    temperature: "",
    size: "",
    difficulty: "",
  });

  const globalCondition = useSelector((state) => state.condition);
  const spaceToString = () => {
    switch (globalCondition.space) {
      case "1":
        return "사무실";
      case "2":
        return "방";
      case "3":
        return "거실";
      default:
        return "공간";
    }
  };
  const onConditionChange = (e) => {
    setCondition({ ...condition, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const onBtnClick = (e) => {
    e.preventDefault();
    dispatch(insertInput("temperature", condition.temperature));
    dispatch(increaseStep());
  };
  return (
    <form action className="form q4">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container normal-radio">
        <p className="q-txt">
          <span>{spaceToString(globalCondition.space)}</span>은{" "}
          <strong>겨울</strong>에 얼마나 추워지나요?
        </p>
        <input
          type="radio"
          id="q-4-3"
          name="temperature"
          value="3"
          onClick={onConditionChange}
        />
        <label htmlFor="q-4-3">
          {/* winterLwetTpCodeNm : 3 */}
          <span>항상 13도 이상으로 유지돼요. ☀️</span>
        </label>

        <input
          type="radio"
          id="q-4-2"
          name="temperature"
          value="2"
          onClick={onConditionChange}
        />
        <label htmlFor="q-4-2">
          <span>종종 10도 이하로 떨어져요. 🍦</span>
        </label>
        <input
          type="radio"
          id="q-4-1"
          name="temperature"
          value="1"
          onClick={onConditionChange}
        />
        <label htmlFor="q-4-1">
          <span>추울 때는 영하로도 떨어져요. 🥶</span>
        </label>
      </div>
      <div onClick={onBtnClick}>
        <Button
          input={condition.temperature} //유효성 검사용
          linkTo="q5"
          linkCurr="q4"
        />
      </div>
    </form>
  );
};

export default Question4;

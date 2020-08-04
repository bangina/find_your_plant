import React, { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { insertInput } from "../redux/condition";

const Question6 = () => {
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
    dispatch(insertInput("difficulty", condition.difficulty));
  };
  return (
    <form action className="form q6">
      <div className="qa-container normal-radio">
        <p className="q-txt">
          식물을 <strong>키워본 경험</strong>이 있나요?
        </p>
        <input
          type="radio"
          id="q-6-1"
          name="difficulty"
          value="1"
          onClick={onConditionChange}
        />
        <label htmlFor="q-6-1">
          <span role="img" aria-label="">
            아니요, 이번이 <strong>처음</strong>이에요! 👶
          </span>
        </label>
        <input
          type="radio"
          id="q-6-2"
          name="difficulty"
          value="2"
          onClick={onConditionChange}
        />
        <label htmlFor="q-6-2">
          <span role="img" aria-label="">
            전에 <strong>몇 번</strong> 키워봤어요. 🤓
          </span>
        </label>
        <input
          type="radio"
          id="q-6-3"
          name="difficulty"
          value="3"
          onClick={onConditionChange}
        />
        <label htmlFor="q-6-3">
          <span role="img" aria-label="">
            식물은 <strong>여러 번</strong> 키워봤고, 새로운 반려식물을 찾고
            있어요.😎
          </span>
        </label>
      </div>
      <button onClick={onBtnClick}>다음</button>
      <Button input={condition.difficulty} linkCurr="q6" linkTo="result" />
    </form>
  );
};

export default Question6;

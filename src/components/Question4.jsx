import React from "react";
import Button from "./Button";

const Question4 = (props) => {
  const spaceToString = (space) => {
    switch (space) {
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

  return (
    <form action className="form q4">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container normal-radio">
        <p className="q-txt">
          <span>{spaceToString(props.space)}</span>은 <strong>겨울</strong>에
          얼마나 추워지나요?
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
        {/* winterLwetTpCodeNm : 1 */}
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
          {/* winterLwetTpCodeNm : 2 */}
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
          {/* winterLwetTpCodeNm : 3 */}
          <span>항상 13도 이상으로 유지돼요.</span>
        </label>
      </div>
      <Button input={props.condition.temperature} linkTo="q5" linkCurr="q4" />
    </form>
  );
};

export default Question4;

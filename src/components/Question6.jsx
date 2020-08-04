import React from "react";
import Button from "./Button";

const Question6 = (props) => {
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
          onClick={(e) => {
            props.onClick(e.target.name, e.target.value);
          }}
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
          onClick={(e) => {
            props.onClick(e.target.name, e.target.value);
          }}
        />
        <label htmlFor="q-6-2">
          <span role="img" aria-label="">
            전에 <strong>몇 번</strong> 키워봤어요. 그래도 아직은 익숙치 않아요.
            🤓
          </span>
        </label>
        <input
          type="radio"
          id="q-6-3"
          name="difficulty"
          value="3"
          onClick={(e) => {
            props.onClick(e.target.name, e.target.value);
          }}
        />
        <label htmlFor="q-6-3">
          <span role="img" aria-label="">
            식물은 <strong>여러 번</strong> 키워봤고, 새로운 반려식물을 찾고
            있어요.😎
          </span>
        </label>
      </div>
      <Button
        input={props.condition.difficulty}
        linkCurr="q6"
        linkTo="result"
      />
    </form>
  );
};

export default Question6;

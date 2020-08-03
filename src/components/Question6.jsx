import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Question6 = (props) => {
  const alertRef = useRef();

  const onBtnClick = (e) => {
    if (props.condition.difficulty == false) {
      alertRef.current.classList.add("show");
      alertRef.current.classList.remove("alert-msg");
    }
  };

  useEffect(() => {
    alertRef.current.classList.remove("show");
    alertRef.current.classList.add("alert-msg");
  }, [props.condition.difficulty]);

  return (
    <form action className="form q6">
      <div className="qa-container normal-radio">
        <p className="q-txt">식물을 키워보신 경험이 있나요?</p>
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
            아니요, 이번이 처음이에요! 👶
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
            전에 몇 번 키워봤어요. 그래도 아직은 익숙치 않아요. 🤓
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
            식물은 여러 번 키워봤고, 새로운 반려식물을 찾고 있어요.😎
          </span>
        </label>
        <p className="alert-msg" ref={alertRef}>
          답변을 선택해주세요.
        </p>
      </div>
      <button className="btn" type="button" onClick={onBtnClick}>
        <Link to={props.condition.difficulty ? "/result" : "/q6"}>
          결과 확인하기
        </Link>
      </button>
    </form>
  );
};

export default Question6;

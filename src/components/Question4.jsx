import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const alertRef = useRef();
  const onBtnClick = (e) => {
    if (props.condition.temperature == false) {
      alertRef.current.classList.add("show");
      alertRef.current.classList.remove("alert-msg");
    }
  };

  useEffect(() => {
    alertRef.current.classList.remove("show");
    alertRef.current.classList.add("alert-msg");
  }, [props.condition.temperature]);

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
        <p className="alert-msg" ref={alertRef}>
          답변을 선택해주세요.
        </p>
      </div>
      <button className="btn" type="button" onClick={onBtnClick}>
        <Link to={props.condition.temperature ? "/q5" : "/q4"}>
          다음 질문{" "}
          <span role="img" aria-label="">
            👉
          </span>
        </Link>
      </button>
    </form>
  );
};

export default Question4;

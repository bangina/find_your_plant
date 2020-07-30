import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StepBar from "./StepBar";

const Question2 = (props) => {
  const [space, setSpace] = useState("");

  useEffect(() => {
    switch (props.space) {
      case "1":
        setSpace("사무실");
        break;
      case "2":
        setSpace("방");
        break;
      case "3":
        setSpace("거실");
        break;
      default:
        setSpace("공간");
    }
  }, [props.space]);

  return (
    <div className="container" id="q1">
      <StepBar />
      <form action className="form">
        {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
        <div className="qa-container">
          <p className="q-txt">
            <span>{space}</span>에 햇빛이 잘 드는 편인가요?
          </p>
          <div className="a-box">
            <input
              type="radio"
              id="q-2-1"
              name="light"
              value="1"
              onClick={(e) => {
                props.onClick(e.target.name, e.target.value);
              }}
            />
            <i className="fas fa-sun" />
            <label htmlFor="q-2-1">
              <span>네, 하루에 3시간 이상 들어와요</span>
            </label>
          </div>
          <div className="a-box">
            <input
              type="radio"
              id="q-2-2"
              name="light"
              value="2"
              onClick={(e) => {
                props.onClick(e.target.name, e.target.value);
              }}
            />
            <i className="fas fa-cloud-sun" />
            <label htmlFor="q-2-2">
              <span>
                아니요,
                <br />
                거의 안 들어와요
              </span>
            </label>
          </div>
        </div>
        <button className="btn" type="button">
          <Link to="q3">
            다음 질문{" "}
            <span role="img" aria-label="">
              👉
            </span>
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Question2;

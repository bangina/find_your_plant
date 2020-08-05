import React, { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { insertInput, increaseStep } from "../redux/condition";

const Question2 = () => {
  const [condition, setCondition] = useState({
    step: "",
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
  const onBtnClick = (e) => {
    e.preventDefault();
    dispatch(insertInput("light", condition.light));
    if (condition.light !== "") {
      dispatch(increaseStep());
    }
  };
  const dispatch = useDispatch();
  return (
    <form action className="form q2">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <span>{spaceToString(condition.space)}</span>에 <strong>햇빛</strong>
          이 잘 드는 편인가요?
        </p>
        <div className="a-box">
          <input
            type="radio"
            id="q-2-1"
            name="light"
            value="3"
            onClick={(e) => {
              onConditionChange(e);
            }}
          />
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="sun"
            class="svg-inline--fa fa-sun fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
            ></path>
          </svg>

          {/* lighttdemanddoCodeNm: 3 */}
          <label htmlFor="q-2-1">
            <span>
              네, 해가 <strong>잘 들어와요</strong> ☀️
            </span>
          </label>
        </div>
        <div className="a-box">
          <input
            type="radio"
            id="q-2-2"
            name="light"
            value="2"
            onClick={(e) => {
              onConditionChange(e);
            }}
          />
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="moon"
            class="svg-inline--fa fa-moon fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"
            ></path>
          </svg>

          {/* lighttdemanddoCodeNm: 2 */}
          <label htmlFor="q-2-2">
            <span>
              아니요, 많이 <strong>안 들어와요</strong> ⛅️
            </span>
          </label>
        </div>
      </div>
      <div onClick={onBtnClick}>
        <Button
          input={condition.light} //유효성 검사용
          linkTo="q3"
          linkCurr="q2"
        />
      </div>
    </form>
  );
};

export default Question2;

import React, { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { insertInput } from "../redux/condition";

const Question5 = () => {
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
    dispatch(insertInput("size", condition.size));
  };
  return (
    <form action className="form q5">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <strong>큰 식물</strong>도 함께 추천해드릴까요?
        </p>
        <div className="a-box">
          <input
            type="radio"
            id="q-5-1"
            name="size"
            value="3"
            onClick={onConditionChange}
          />
          <svg
            width="126"
            height="168"
            viewBox="0 0 126 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M125.525 35.85C124.993 35.0753 112.262 16.8683 93.1563 16.1034C92.9955 16.0968 92.8347 16.0962 92.6739 16.0922L103.931 7.64923C104.65 7.1098 105.018 6.22123 104.89 5.33136C104.763 4.44148 104.16 3.69171 103.318 3.37638C91.2049 -1.16619 81.1449 -1.12484 73.4172 3.50041C68.6053 6.38037 65.2935 10.7152 63.0094 15.2995C62.1419 13.5578 61.1752 11.9516 60.1144 10.4957C57.5064 6.91653 54.3138 4.21015 50.626 2.4514C43.1831 -1.09728 33.781 -0.786218 22.6811 3.37638C21.8395 3.69204 21.2367 4.44148 21.1091 5.33136C20.9814 6.22123 21.3493 7.1098 22.0685 7.64923L33.3255 16.0919C33.1648 16.0958 33.0043 16.0965 32.8435 16.1031C13.7384 16.8679 1.00713 35.075 0.474581 35.8497C-0.0432016 36.6027 -0.100952 37.5809 0.324299 38.3897C0.749878 39.1985 1.58857 39.7048 2.5024 39.7048H22.6677C16.6781 44.291 12.2615 50.931 9.69787 59.3195C6.97803 68.2183 7.28942 75.8967 7.30419 76.219C7.34455 77.1144 7.86889 77.917 8.67247 78.314C9.01766 78.4847 9.39041 78.5687 9.76251 78.5687C10.2563 78.5687 10.7482 78.42 11.1682 78.128L55.1833 47.5086L52.7 163.078H44.5875C43.2284 163.078 42.1265 164.18 42.1265 165.539C42.1265 166.898 43.2284 168 44.5875 168H81.412C82.7711 168 83.873 166.898 83.873 165.539C83.873 164.18 82.7711 163.078 81.412 163.078H73.2994L70.8162 47.5086L114.831 78.128C115.251 78.42 115.743 78.5687 116.237 78.5687C116.609 78.5687 116.982 78.4847 117.327 78.314C118.131 77.917 118.655 77.1144 118.695 76.219C118.71 75.8964 119.021 68.2183 116.302 59.3195C113.738 50.932 109.324 44.2917 103.336 39.7048H123.497C124.411 39.7048 125.25 39.1985 125.676 38.3897C126.101 37.5812 126.043 36.6034 125.525 35.85ZM75.9455 7.72372C81.4248 4.44443 88.5661 4.0474 97.2182 6.5323L82.545 17.5373C76.0426 19.5723 69.6881 23.7376 63.5374 29.9998C64.6727 23.1548 67.7305 12.64 75.9455 7.72372ZM28.7826 6.53164C36.6422 4.27446 43.2635 4.39324 48.5079 6.89389C53.8505 9.44113 57.8513 14.4697 60.4136 21.8315C59.8755 23.564 59.4555 25.2486 59.1267 26.8226C54.0204 22.3027 48.7839 19.1986 43.4476 17.5307L28.7826 6.53164ZM7.6812 34.7836C12.2504 29.7396 21.45 21.4856 33.0404 21.0217C42.265 20.6525 51.3921 25.2781 60.2381 34.7836H7.6812ZM12.3977 71.2777C12.6438 68.4598 13.2016 64.6529 14.4475 60.6215C17.6634 50.2157 23.7695 43.1826 32.5958 39.7055H57.783L12.3977 71.2777ZM57.6236 163.078L60.1813 44.0328L63.0002 42.0719L65.8192 44.0328L68.3763 163.078H57.6236ZM89.3038 34.7839V34.7833C87.9447 34.7833 86.8428 35.8851 86.8428 37.2442C86.8428 38.6033 87.9447 39.7051 89.3038 39.7051H93.404C102.231 43.1823 108.336 50.215 111.552 60.6212C112.798 64.6525 113.356 68.4598 113.602 71.2777L68.2165 39.7051H78.7808C80.1399 39.7051 81.2417 38.6033 81.2417 37.2442C81.2417 35.8851 80.1399 34.7833 78.7808 34.7833H65.7621C74.5988 25.2876 83.7194 20.6601 92.9322 21.0204C101.536 21.3557 108.788 26.0636 113.356 29.9539C115.348 31.6503 117.022 33.3464 118.322 34.7836H89.3038V34.7839Z"
              fill="black"
            />
          </svg>

          {/* size : 3 */}
          <label htmlFor="q-5-1">
            <span>
              네, <strong className="point-txt">대형 식물</strong>도 함께
              추천해주세요.
            </span>
          </label>
        </div>
        <div className="a-box">
          <input
            type="radio"
            id="q-5-2"
            name="size"
            value="2"
            onClick={onConditionChange}
          />
          <svg
            height="418pt"
            viewBox="0 -9 418.93516 418"
            width="418pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m208.070312 400.226562c-14.59375 0-29.179687-2.941406-42.6875-8.816406l-64.589843-28.078125c-23.367188-10.164062-48.074219-16.601562-73.433594-19.136719l-21.210937-2.121093c-3.492188-.347657-6.148438-3.285157-6.148438-6.792969v-66.535156c0-1.476563.480469-2.914063 1.367188-4.09375 1.585937-2.121094 39.601562-51.785156 97.671874-38.863282 32.660157 7.257813 58.957032 20.839844 75.265626 30.957032 11.839843 7.34375 25.71875 11.222656 40.136718 11.222656h64.589844c11.132812 0 20.917969 5.890625 26.390625 14.726562l55.628906-64.089843c10.785157-14.402344 28.429688-23.222657 46.902344-23.222657h4.15625c2.308594 0 4.457031 1.164063 5.714844 3.09375 1.261719 1.929688 1.460937 4.371094.535156 6.480469l-50.3125 114.34375c-11 25.007813-33.398437 43.898438-59.910156 50.527344l-8.851563 2.210937-51.492187 20.597657c-12.671875 5.066406-26.199219 7.589843-39.722657 7.589843zm-194.414062-71.125 15.0625 1.507813c26.769531 2.675781 52.851562 9.476563 77.523438 20.203125l64.585937 28.078125c22.710937 9.875 48.902344 10.261719 71.898437 1.0625l51.914063-20.765625c.289063-.113281.582031-.207031.882813-.28125l9.300781-2.328125c22.449219-5.613281 41.414062-21.605469 50.722656-42.777344l45.890625-104.292969c-11.75 1.730469-22.5625 8.0625-29.765625 17.664063l-61.625 71.023437c.007813.265626.011719.527344.011719.796876 0 17.105468-13.917969 31.023437-31.023438 31.023437h-90.117187c-11.714844 0-23.292969 1.878906-34.40625 5.582031l-2.507813-6.367187-2.121094-6.488281.347657-.113282c12.472656-4.15625 25.5-6.269531 38.6875-6.269531h90.117187c9.574219 0 17.371094-7.792969 17.371094-17.371094s-7.792969-17.371093-17.371094-17.371093h-64.589844c-16.964843 0-33.332031-4.589844-47.332031-13.273438-15.40625-9.558594-40.242187-22.382812-71.027343-29.230469-43.976563-9.753906-75.621094 23.996094-82.425782 32.046875v57.941406zm0 0" />
            <path d="m268.867188 193.839844c-10.5 0-22.273438-3.242188-35.234376-9.722656-1.570312-.789063-2.78125-2.15625-3.375-3.808594-.527343-1.480469-12.726562-36.570313 6.660157-62.519532 14.089843-18.863281 40.582031-27.359374 78.785156-25.230468 3.484375.191406 6.261719 2.984375 6.433594 6.476562.136719 2.710938 2.953125 66.699219-29.675781 88.003906-6.9375 4.535157-14.820313 6.800782-23.59375 6.800782zm-26.527344-20.679688c17.933594 8.410156 32.269531 9.234375 42.660156 2.449219 19.347656-12.636719 23.53125-50.148437 23.632812-69.671875-29.933593-.730469-50.3125 6.015625-60.777343 20.019531-12.453125 16.675781-7.613281 39.613281-5.515625 47.203125zm0 0" />
            <path d="m164.460938 104.390625c-12.105469 0-26.070313-2.59375-38.257813-11.519531-20.671875-15.148438-30.171875-43.988282-28.242187-85.714844.164062-3.488281 2.929687-6.292969 6.417968-6.5 2.953125-.167969 72.851563-3.898438 96.371094 31.40625 10.953125 16.433594 10.054688 37.957031-2.660156 63.984375-.773438 1.582031-2.125 2.804687-3.777344 3.410156-.917969.339844-13.734375 4.933594-29.851562 4.933594zm27.496093-11.339844h.066407zm-80.558593-78.960937c-.589844 33.421875 7.09375 56.203125 22.871093 67.765625 18.890625 13.839843 44.683594 7.957031 52.792969 5.59375 9.277344-20.132813 10.0625-36.207031 2.328125-47.816407-14.375-21.578124-56.53125-25.796874-77.992187-25.542968zm0 0" />
            <path d="m217.777344 279.21875c-.214844 0-.429688-.011719-.648438-.03125-3.636718-.34375-6.359375-3.488281-6.175781-7.140625.402344-8.03125 1.089844-15.648437 2.023437-22.867187 2.839844-48.3125 1.375-160.820313-69.757812-191.945313-3.453125-1.511719-5.03125-5.535156-3.519531-8.992187 1.507812-3.449219 5.542969-5.023438 8.992187-3.515626 41.917969 18.339844 68.289063 64 76.246094 132.042969.714844 6.097657 1.25 12.109375 1.648438 17.964844 18.734374-47.339844 47.394531-64.066406 49.101562-65.023437 3.28125-1.855469 7.445312-.675782 9.296875 2.601562 1.839844 3.28125.683594 7.433594-2.585937 9.285156-.722657.421875-44.671876 26.796875-55.703126 108.132813-.839843 13.914062-2.050781 22.785156-2.164062 23.597656-.472656 3.40625-3.382812 5.890625-6.753906 5.890625zm0 0" />
          </svg>
          {/* size : 2 */}
          <label htmlFor="q-5-2">
            <span>
              아니요, <strong className="point-txt">소형/중형 식물</strong>만
              보여주세요.
            </span>
          </label>
        </div>
      </div>
      <button onClick={onBtnClick}>다음</button>
      <Button input={condition.size} linkTo="q6" linkCurr="q5" />
    </form>
  );
};

export default Question5;

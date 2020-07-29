import React from "react";

const Question4 = () => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container normal-radio">
        <p className="q-txt">
          <span>사무실</span>은 겨울에 얼마나 추워지나요?
        </p>
        <input type="radio" id="q-4-1" name="q-4" />
        <label htmlFor="q-4-1">
          <span>추울 때는 영하로도 떨어져요.</span>
        </label>
        <input type="radio" id="q-4-2" name="q-4" />
        <label htmlFor="q-4-2">
          <span>영하는 아니지만 10도 이하로 떨어지기도 해요.</span>
        </label>
        <input type="radio" id="q-4-3" name="q-4" />
        <label htmlFor="q-4-3">
          <span>항상 13도 이상으로 유지돼요.</span>
        </label>
      </div>
      <a href="q5.html" title="다음 질문으로">
        <button className="btn" type="button">
          다음 질문 👉
        </button>
      </a>
    </form>
  );
};

export default Question4;

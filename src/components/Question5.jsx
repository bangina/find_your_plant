import React from "react";

const Question5 = () => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">크기가 큰 식물도 함께 추천해드릴까요?</p>
        <div className="a-box">
          <input type="radio" id="q-5-1" name="q-5" />
          <i className="fas fa-tree" />
          <label htmlFor="q-5-1">
            <span>네, 큰 식물도 함께 추천해주세요.</span>
          </label>
        </div>
        <div className="a-box">
          <input type="radio" id="q-5-2" name="q-5" />
          <i className="fab fa-pagelines" />
          <label htmlFor="q-5-2">
            <span>아니요, 크지 않은 식물만 추천해주세요.</span>
          </label>
        </div>
      </div>
      <a href="q6.html" title="다음 질문으로">
        <button className="btn" type="button">
          다음 질문 👉
        </button>
      </a>
    </form>
  );
};

export default Question5;

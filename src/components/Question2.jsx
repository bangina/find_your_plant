import React from "react";

const Question2 = () => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <span>사무실</span>에 햇빛이 잘 드는 편인가요?
        </p>
        <div className="a-box">
          <input type="radio" id="q-2-1" name="q-2" />
          <i className="fas fa-sun" />
          <label htmlFor="q-2-1">
            <span>네, 하루에 3시간 이상 들어와요</span>
          </label>
        </div>
        <div className="a-box">
          <input type="radio" id="q-2-2" name="q-2" />
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
      <a href="q3.html" title="다음 질문으로">
        <button className="btn" type="button">
          다음 질문 👉
        </button>
      </a>
    </form>
  );
};

export default Question2;

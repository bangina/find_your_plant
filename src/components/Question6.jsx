import React from "react";

const Question6 = () => {
  return (
    <form action className="form">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container normal-radio">
        <p className="q-txt">식물을 키워보신 경험이 있나요?</p>
        <input type="radio" id="q-6-1" name="q-6" />
        <label htmlFor="q-6-1">
          <span>아니요, 이번이 처음이에요! 👶</span>
        </label>
        <input type="radio" id="q-6-2" name="q-6" />
        <label htmlFor="q-6-2">
          <span>전에 몇 번 키워봤어요. 그래도 아직은 익숙치 않아요. 🧐</span>
        </label>
        <input type="radio" id="q-6-3" name="q-6" />
        <label htmlFor="q-6-3">
          <span>식물은 여러 번 키워봤고, 새로운 반려식물을 찾고 있어요.😎</span>
        </label>
      </div>
      <a href="result.html" title="다음 질문으로">
        <button className="btn" type="button">
          결과 확인하기
        </button>
      </a>
    </form>
  );
};

export default Question6;

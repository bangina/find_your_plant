import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="container" id="intro">
      {" "}
      {/* 최상위 컨테이너 */}
      {/* 상단 텍스트  영역 */}
      <div className="txt-container">
        <p className="intro-txt">
          몇 가지 질문에만 답해주시면
          <br />
          <strong> 공간에 딱 맞는 식물🌿</strong>을 추천해드릴게요!
        </p>
      </div>
      {/* 하단 이미지&버튼 영역 */}
      <div className="img-container">
        <img src={"./imgs/main_image_02.svg"} alt="a woman holding plant" />
        <button className="btn" type="button">
          <Link to="/q1">
            테스트 시작하기{" "}
            <span role="img" aria-label="">
              👉
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Intro;

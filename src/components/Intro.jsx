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
          <strong>생존확률이 높은 식물</strong>을 추천해드릴게요!
        </p>
      </div>
      {/* 하단 이미지&버튼 영역 */}
      <div className="img-container">
        <img
          src={require("../imgs/main_image_02.svg")}
          alt="a woman holding plant"
        />
        <a href="q1.html" className="btn-wrapper">
          <button className="btn" type="button">
            <Link to="/q1">
            네! 질문주세요 <span role="img" aria-label="">👌</span>
            </Link>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;

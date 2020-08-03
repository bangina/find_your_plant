import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="container" id="home">
      {" "}
      {/* 최상위 컨테이너 */}
      {/* 상단 이미지 영역 */}
      <div className="img-container">
        <span className="sm-txt" role="img" aria-label="">
          안녕하세요. 솔방울 식물원에 오신 것을 환영합니다.🌞
        </span>
        <img src={"./imgs/main_image_01.svg"} alt="a woman holding plant" />
      </div>
      {/* 하단 텍스트 &버튼 영역 */}
      <div className="txt-container">
        <p className="intro-txt">
          환상의 <strong>식물짝궁</strong> 을 찾아드려요!
        </p>
        <button className="btn" type="button">
          <Link to="/intro">네! 도와주세요</Link>
        </button>
      </div>
    </div>
  );
};

export default Landingpage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  useEffect(() => {
    console.log(props.condition);
  }, [props.condition]);
  return (
    <div className="container result">
      {" "}
      {/* 최상위 컨테이너 */}
      <p className="point-txt">
        <span>솔방울</span>님의 사무실에 딱 맞는 식물은..
      </p>
      {/* 추천식물 카드 */}
      <div className="plant-card">
        <img src={require("../imgs/monstera.jpg")} alt="monstera" />
        <p className="plant-name">몬스테라</p>
        <p className="plant-name-en">Monstera</p>
        <div className="tags">
          <span className="tag">독성조심</span>
          <span className="tag">비료_가끔</span>
          <span className="tag">추천장소_거실_주방</span>
        </div>
      </div>
      {/* 양육 정보 */}
      <h4 className="result-heading">양육 정보</h4>
      <ul className="conditions">
        <li>
          <span className="result-desc">빛</span>
          <div className="step-container step-container-thin">
            <div className="step" />
            <div className="step-bg" />
          </div>
        </li>
        <li>
          <span className="result-desc">습도</span>
          <div className="step-container step-container-thin">
            <div className="step" />
            <div className="step-bg" />
          </div>
        </li>
        <li>
          <span className="result-desc">크기</span>
          <div className="step-container step-container-thin">
            <div className="step" />
            <div className="step-bg" />
          </div>
        </li>
      </ul>
      <div className="div-line" />
      {/* 식물 소개글 */}
      <h4 className="result-heading">
        <span role="img" aria-label="">
          몬스테라
        </span>
        를 소개해드릴게요 ☘️
      </h4>
      <p className="result-desc result-desc-main">
        몬스테라는 생육 난이도가 높지 않아서 초보자도 기를 수 있는 식물이에 빛을
        좋아하고, 적당한 습도가 필요해요. 크기는 중형 사이즈예요. 물주기는
        흙표면이 말랐을 때 넉넉히 주세요. 또한 독성이 있으니 반려동물과 아이가
        있다면 조심해주세요. 비료는 가끔씩 주세요. 추천장소는 거실입니다.
      </p>
      <div className="div-line" />
      {/* 식물 요약*/}
      <h4 className="result-heading">
        <span>몬스테라</span> 요약
      </h4>
      <ul className="sum-card">
        <li>
          <span className="result-desc">난이도</span>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <span className="point-txt">초보자 환영</span>
        </li>
        <li>
          <span className="result-desc">물주기</span>
          <span className="result-desc bold">
            흙 표면이 마를 때 넉넉히 물주기
          </span>
        </li>
        <li>
          <span className="result-desc">생명력</span>
          <span className="result-desc bold">매우 강함</span>
        </li>
      </ul>
      <div className="div-line" />
      {/* 인스타그램 외부 링크 */}
      <a href="#" className="point-txt insta-link">
        <i className="fab fa-instagram" />
        인스타그램 속 <span>몬스테라</span> 보러가기
        <i className="fas fa-external-link-alt" />
      </a>
      <div className="div-line" />
      {/* 다른 식물 후보 */}
      <div className="other-plants">
        <p className="result-heading text-center">식물은 다다익선!</p>
        <h3>
          다른 식물들도 보여주세요{" "}
          <span role="img" aria-label="">
            💁‍♂️
          </span>
        </h3>
        <div className="qa-container pink-chunk">
          <ul className="plant-items">
            <li className="plant-item">
              <img src={require("../imgs/monstera.jpg")} alt="" />
              <span role="img" aria-label="">
                🥈
              </span>
              <p>극락조</p>
            </li>
            <li className="plant-item">
              <img src={require("../imgs/monstera.jpg")} alt="" />
              <span role="img" aria-label="">
                🥉
              </span>
              <p>극락조</p>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn">
        <Link to="/">
          테스트 다시 하기{" "}
          <span role="img" aria-label="">
            ♻️
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Result;

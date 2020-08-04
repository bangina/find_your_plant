import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// 별점 모듈
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
// swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Result = (props) => {
  const [firstPlant, setFirstPlant] = useState({});
  const [secondPlant, setSecondPlant] = useState({});
  const [thirdPlant, setThirdPlant] = useState({});

  const setPlants = (cntntsNo1, cntntsNo2, cntntsNo3) => {
    const nextData1 = props.data.filter((data) => data.cntntsNo === cntntsNo1);
    const nextData2 = props.data.filter((data) => data.cntntsNo === cntntsNo2);
    const nextData3 = props.data.filter((data) => data.cntntsNo === cntntsNo3);

    setFirstPlant(nextData1[0]);
    setSecondPlant(nextData2[0]);
    setThirdPlant(nextData3[0]);
  };

  const spaceToString = (space) => {
    switch (space) {
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

  const difficultyToEmoji = (difficulty) => {
    switch (difficulty) {
      case "1":
        return <span>👶</span>;
      case "2":
        return <span>🤓</span>;
      case "3":
        return <span>😎</span>;
      default:
        return <span>😇</span>;
    }
  };

  useEffect(() => {
    const { light, humidity, temperature, size } = props.condition;

    const answerz = [light, humidity, temperature, size];
    const answerzString = answerz.join();

    if (temperature === "1") {
      setPlants(14663, 13206, 12963);
    } else {
      switch (answerzString) {
        case "2,2,2,2":
          setPlants(14913, 19451, 19714);
          break;
        case "2,2,2,3":
          setPlants(12963, 14689, 19701);
          break;
        case "2,2,3,2":
          setPlants(19716, 18660, 19448);
          break;
        case "2,2,3,3":
          setPlants(14911, 14697, 19465);
          break;
        case "2,3,2,2":
          setPlants(19712, 19451, 19714);
          break;
        case "2,3,2,3":
          setPlants(19712, 19451, 19714);
          break;
        case "2,3,3,2":
          setPlants(16037, 19711, 16449);
          break;
        case "2,3,3,3":
          setPlants(16449, 16037, 19711);
          break;
        case "3,2,2,2":
          setPlants(14913, 13206, 12955);
          break;
        case "3,2,2,3":
          setPlants(13206, 12955, 14913);
          break;
        case "3,2,3,2":
          setPlants(13338, 18660, 19448);
          break;
        case "3,2,3,3":
          setPlants(13214, 14911, 14697);
          break;
        case "3,3,2,2":
          setPlants(13206, 12955, 14913);
          break;
        case "3,3,2,3":
          setPlants(13206, 12955, 14913);
          break;
        case "3,3,3,2":
          setPlants(13214, 14911, 14697);
          break;
        case "3,3,3,3":
          setPlants(13214, 14911, 14697);
          break;
        default:
          break;
      }
    }
  }, []);
  const managelevelCodeNmTxt = (plant) => {
    switch (plant.managelevelCodeNm) {
      case 2:
        return "초보자 환영 🎉";
      case 3:
        return "약간 까다로운 편 🤓";
      case 4:
        return "고난이도 🧐";
      default:
        return "";
    }
  };
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <div className="container result">
          {/* 최상위 컨테이너 */}
          <p className="point-txt">
            <span role="img" aria-label="smiley face">
              {difficultyToEmoji(props.condition.difficulty)} 님의{" "}
            </span>
            <span>{spaceToString(props.condition.space)}</span>과{" "}
            <strong>환상의 짝궁</strong> 🌱
            <span className="medal" role="img" aria-label="medal">
              🥇
            </span>
          </p>
          {/* 추천식물 카드 */}
          <div className="plant-card">
            <div
              className="img-box"
              style={{
                "background-image": `url(./imgs/${firstPlant.cntntsNo}.jpg)`,
              }}
            ></div>
            <p className="plant-name">{firstPlant.contntsName}</p>
            <p className="plant-name-en">{firstPlant.plntzrNm}</p>
            <div className="tags">
              <span className="tag">{firstPlant.toxctyInfo}</span>
              <span className="tag">{firstPlant.frtlzrInfo}</span>
              <span className="tag">
                추천장소_{firstPlant.postngplaceCodeNm}
              </span>
            </div>
          </div>
          {/* 양육 정보 */}
          <h4 className="result-heading">양육 정보</h4>
          <ul className="conditions">
            <li>
              <span className="result-desc">빛</span>
              <div className="step-container step-container-thin">
                <div
                  className="step"
                  style={{ width: firstPlant.light * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
            <li>
              <span className="result-desc">습도</span>
              <div className="step-container step-container-thin">
                {/* step바 width값 = 50 * 각 level값 */}
                <div
                  className="step"
                  style={{ width: firstPlant.humidity * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
            <li>
              <span className="result-desc">크기</span>
              <div className="step-container step-container-thin">
                {/* step바 width값 = 50 * 각 level값 */}
                <div className="step" style={{ width: firstPlant.size * 80 }} />
                <div className="step-bg" />
              </div>
            </li>
          </ul>
          <div className="div-line" />
          <h4 className="result-heading">
            <span role="img" aria-label="">
              {firstPlant.contntsName}
            </span>
            기르기 Tip ☘️
          </h4>
          <p className="result-desc result-desc-main">{firstPlant.tips}</p>
          <div className="div-line" />
          {/* 식물 요약*/}
          <h4 className="result-heading">
            <span>{firstPlant.contntsName}</span> 요약
          </h4>
          <ul className="sum-card">
            <li>
              <span className="result-desc">난이도</span>
              <Rater total={5} rating={firstPlant.managelevelCodeNm} />
              <span className="point-txt">
                {managelevelCodeNmTxt(firstPlant)}
              </span>
            </li>
            <li>
              <span className="result-desc">물주기</span>
              <span className="result-desc bold">
                {firstPlant.watercycleSprngCodeNm}
              </span>
            </li>
            <li>
              <span className="result-desc">생명력</span>
              <span className="result-desc bold">
                {firstPlant.managedemanddoCodeNm}
              </span>
            </li>
          </ul>
          {/* 인스타그램 외부 링크 */}
          <a
            href={`https://www.instagram.com/explore/tags/${firstPlant.contntsName}`}
            className="point-txt insta-link"
            title="인스타그램 가기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9999 6.95686C45.4592 6.95686 46.5795 6.993 50.3155 7.16344C53.7695 7.32108 55.6452 7.89806 56.8937 8.38322C58.4324 8.95114 59.8243 9.85669 60.967 11.0333C62.1436 12.176 63.0492 13.5679 63.6171 15.1066C64.1022 16.355 64.6794 18.2308 64.8369 21.6848C65.0073 25.4205 65.0434 26.5409 65.0434 36.0004C65.0434 45.46 65.0073 46.5801 64.8369 50.3161C64.6792 53.7701 64.1021 55.6457 63.6171 56.8942C63.0277 58.4221 62.125 59.8096 60.967 60.9676C59.8091 62.1255 58.4215 63.0283 56.8937 63.6176C55.6453 64.1028 53.7695 64.6799 50.3155 64.8374C46.5805 65.0078 45.4601 65.044 35.9999 65.044C26.5396 65.044 25.4197 65.0078 21.6843 64.8374C18.2302 64.6798 16.3546 64.1026 15.1061 63.6176C13.5674 63.0497 12.1755 62.1442 11.0328 60.9676C9.85615 59.8248 8.9506 58.4329 8.38267 56.8942C7.89752 55.6459 7.32039 53.7701 7.16289 50.3161C6.99246 46.5805 6.95631 45.46 6.95631 36.0004C6.95631 26.5409 6.99246 25.4208 7.16289 21.6848C7.32053 18.2308 7.89752 16.3551 8.38267 15.1066C8.95065 13.5678 9.8563 12.1759 11.033 11.0332C12.1758 9.85655 13.5676 8.951 15.1064 8.38308C16.3547 7.89792 18.2305 7.3208 21.6845 7.1633C25.4202 6.99286 26.5406 6.95672 36.0002 6.95672L35.9999 6.95686ZM36.0002 0.573608C26.3789 0.573608 25.172 0.61439 21.394 0.786796C17.6231 0.958921 15.048 1.5577 12.7946 2.43351C10.4308 3.32306 8.28949 4.71752 6.51996 6.51966C4.71741 8.28907 3.32256 10.4304 2.43269 12.7943C1.55758 15.0479 0.958799 17.623 0.787377 21.3938C0.614268 25.1719 0.573486 26.3787 0.573486 36C0.573486 45.6213 0.614268 46.8281 0.787377 50.6062C0.959502 54.377 1.55828 56.9521 2.4341 59.2055C3.32364 61.5693 4.7181 63.7107 6.52024 65.4802C8.28976 67.2824 10.4311 68.6768 12.7949 69.5663C15.0484 70.4422 17.6236 71.0409 21.3943 71.2131C25.1729 71.3855 26.3793 71.4263 36.0004 71.4263C45.6216 71.4263 46.8286 71.3855 50.6066 71.2131C54.3775 71.0409 56.9526 70.4422 59.206 69.5663C61.5593 68.6562 63.6965 67.2644 65.4807 65.4802C67.2648 63.6961 68.6566 61.5588 69.5668 59.2055C70.4426 56.952 71.0414 54.3769 71.2135 50.6062C71.3859 46.8276 71.4267 45.6211 71.4267 36C71.4267 26.3789 71.3859 25.1719 71.2135 21.3938C71.0414 17.623 70.4426 15.0479 69.5668 12.7945C68.6772 10.4307 67.2828 8.28932 65.4806 6.5198C63.7111 4.7173 61.5696 3.32254 59.2055 2.43281C56.952 1.5577 54.3769 0.958921 50.606 0.787499C46.828 0.61439 45.6212 0.573608 35.9999 0.573608H36.0002Z"
                fill="black"
              />
              <path
                d="M36.0001 17.8081C32.402 17.8081 28.8848 18.875 25.8932 20.874C22.9015 22.873 20.5698 25.7142 19.1929 29.0383C17.816 32.3624 17.4557 36.0202 18.1577 39.5491C18.8596 43.078 20.5922 46.3195 23.1364 48.8637C25.6806 51.4079 28.9221 53.1405 32.451 53.8425C35.9799 54.5444 39.6377 54.1841 42.9618 52.8072C46.286 51.4303 49.1272 49.0986 51.1261 46.107C53.1251 43.1153 54.192 39.5981 54.192 36.0001C54.192 31.1753 52.2754 26.5481 48.8637 23.1364C45.4521 19.7248 40.8249 17.8081 36.0001 17.8081V17.8081ZM36.0001 47.8088C33.6645 47.8087 31.3815 47.1161 29.4395 45.8186C27.4976 44.521 25.9841 42.6767 25.0903 40.519C24.1966 38.3612 23.9628 35.9869 24.4184 33.6962C24.8741 31.4056 25.9988 29.3015 27.6502 27.65C29.3017 25.9985 31.4058 24.8739 33.6965 24.4182C35.9872 23.9626 38.3615 24.1965 40.5192 25.0903C42.677 25.984 44.5212 27.4976 45.8188 29.4395C47.1163 31.3814 47.8089 33.6645 47.8089 36.0001C47.8089 39.1319 46.5647 42.1355 44.3501 44.3501C42.1355 46.5646 39.1319 47.8088 36.0001 47.8088Z"
                fill="black"
              />
              <path
                d="M54.9108 21.3404C57.2586 21.3404 59.1619 19.4372 59.1619 17.0894C59.1619 14.7415 57.2586 12.8383 54.9108 12.8383C52.5629 12.8383 50.6597 14.7415 50.6597 17.0894C50.6597 19.4372 52.5629 21.3404 54.9108 21.3404Z"
                fill="black"
              />
            </svg>
            인스타그램 속 <span>{firstPlant.contntsName}</span> 보러가기
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.3761 0.240613C44.5882 0.898225 44.1975 1.82352 44.1774 5.29649C44.1774 7.57801 44.2393 7.98882 44.6501 8.79034C45.4926 10.4553 45.7185 10.5164 52.1515 10.6402L57.7412 10.7431L43.232 25.2306C35.2579 33.2048 28.5997 39.9666 28.435 40.2745C28.0651 40.994 28.0651 42.1444 28.435 42.8639C28.5997 43.1718 29.6473 44.323 30.7776 45.4534C32.6475 47.3032 32.8943 47.4881 33.7577 47.5701C34.2714 47.632 34.9499 47.6111 35.2788 47.55C35.6695 47.4471 40.3756 42.8848 50.4456 32.8148C58.4808 24.7989 65.1189 18.2437 65.2009 18.2437C65.2829 18.2437 65.3448 20.7713 65.3448 23.8744C65.3448 29.362 65.3649 29.5051 65.8175 30.1635C66.6809 31.4377 67.3176 31.6226 70.7295 31.5607C74.0175 31.4988 74.3262 31.3967 75.2917 30.0807C75.7234 29.526 75.7234 29.2792 75.7845 16.1262L75.8256 2.72638L75.3737 1.80186C75.0859 1.26726 74.6132 0.712547 74.1815 0.465749C73.4829 0.0750504 73.0922 0.0549322 60.309 0.0139282C49.6642 -0.0270759 47.0136 0.0147041 46.3761 0.240613Z"
                fill="black"
              />
              <path
                d="M6.97978 8.6047C4.67814 8.9954 2.49951 10.4955 1.28718 12.5094C-0.0899351 14.7909 -0.0280422 13.3318 0.0338507 42.7201L0.0957436 69.3131L0.753355 70.6902C1.49298 72.2523 2.9111 73.8963 4.18532 74.6359C6.26105 75.8482 4.84293 75.7863 33.6974 75.7863C57.3931 75.7863 60.2494 75.7453 61.2567 75.4575C64.216 74.574 66.5184 72.0867 67.176 69.0454C67.3408 68.2849 67.4019 62.7153 67.4019 50.8164V33.6566H62.1612H56.9204V49.4811V65.3055H33.6958H10.4729V42.1855V19.0654H26.2973H42.1218V13.7217V8.3788L25.126 8.39968C15.7546 8.4198 7.59561 8.50181 6.97978 8.6047Z"
                fill="black"
              />
            </svg>
          </a>
          {/* 다른 식물 후보 */}
          <button
            className="btn"
            onClick={() => {
              props.onClick();
            }}
          >
            <Link to="/q1">
              테스트 다시 하기
              <span role="img" aria-label="">
                ♻️
              </span>
            </Link>
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container result">
          {/* 최상위 컨테이너 */}
          <p className="point-txt">
            <span role="img" aria-label="smiley face">
              {difficultyToEmoji(props.condition.difficulty)} 님의{" "}
            </span>
            <span>{spaceToString(props.condition.space)}</span>과{" "}
            <strong>환상의 짝궁</strong>
            <span className="medal" role="img" aria-label="medal">
              🥈
            </span>
          </p>
          {/* 추천식물 카드 */}
          <div className="plant-card">
            <div
              className="img-box"
              style={{
                "background-image": `url(./imgs/${secondPlant.cntntsNo}.jpg)`,
              }}
            ></div>
            <p className="plant-name">{secondPlant.contntsName}</p>
            <p className="plant-name-en">{secondPlant.plntzrNm}</p>
            <div className="tags">
              <span className="tag">{secondPlant.toxctyInfo}</span>
              <span className="tag">{secondPlant.frtlzrInfo}</span>
              <span className="tag">
                추천장소_{secondPlant.postngplaceCodeNm}
              </span>
            </div>
          </div>
          {/* 양육 정보 */}
          <h4 className="result-heading">양육 정보</h4>
          <ul className="conditions">
            <li>
              <span className="result-desc">빛</span>
              <div className="step-container step-container-thin">
                <div
                  className="step"
                  style={{ width: secondPlant.light * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
            <li>
              <span className="result-desc">습도</span>
              <div className="step-container step-container-thin">
                {/* step바 width값 = 50 * 각 level값 */}
                <div
                  className="step"
                  style={{ width: secondPlant.humidity * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
            <li>
              <span className="result-desc">크기</span>
              <div className="step-container step-container-thin">
                {/* step바 width값 = 50 * 각 level값 */}
                <div
                  className="step"
                  style={{ width: secondPlant.size * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
          </ul>
          <div className="div-line" />
          <h4 className="result-heading">
            <span role="img" aria-label="">
              {secondPlant.contntsName}
            </span>
            기르기 Tip ☘️
          </h4>
          <p className="result-desc result-desc-main">{secondPlant.tips}</p>
          <div className="div-line" />
          {/* 식물 요약*/}
          <h4 className="result-heading">
            <span>{secondPlant.contntsName}</span> 요약
          </h4>
          <ul className="sum-card">
            <li>
              <span className="result-desc">난이도</span>
              <Rater total={5} rating={secondPlant.managelevelCodeNm} />
              <span className="point-txt">
                {managelevelCodeNmTxt(secondPlant)}
              </span>
            </li>
            <li>
              <span className="result-desc">물주기</span>
              <span className="result-desc bold">
                {secondPlant.watercycleSprngCodeNm}
              </span>
            </li>
            <li>
              <span className="result-desc">생명력</span>
              <span className="result-desc bold">
                {secondPlant.managedemanddoCodeNm}
              </span>
            </li>
          </ul>
          {/* 인스타그램 외부 링크 */}
          <a
            href={`https://www.instagram.com/explore/tags/${secondPlant.contntsName}`}
            className="point-txt insta-link"
            title="인스타그램 가기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9999 6.95686C45.4592 6.95686 46.5795 6.993 50.3155 7.16344C53.7695 7.32108 55.6452 7.89806 56.8937 8.38322C58.4324 8.95114 59.8243 9.85669 60.967 11.0333C62.1436 12.176 63.0492 13.5679 63.6171 15.1066C64.1022 16.355 64.6794 18.2308 64.8369 21.6848C65.0073 25.4205 65.0434 26.5409 65.0434 36.0004C65.0434 45.46 65.0073 46.5801 64.8369 50.3161C64.6792 53.7701 64.1021 55.6457 63.6171 56.8942C63.0277 58.4221 62.125 59.8096 60.967 60.9676C59.8091 62.1255 58.4215 63.0283 56.8937 63.6176C55.6453 64.1028 53.7695 64.6799 50.3155 64.8374C46.5805 65.0078 45.4601 65.044 35.9999 65.044C26.5396 65.044 25.4197 65.0078 21.6843 64.8374C18.2302 64.6798 16.3546 64.1026 15.1061 63.6176C13.5674 63.0497 12.1755 62.1442 11.0328 60.9676C9.85615 59.8248 8.9506 58.4329 8.38267 56.8942C7.89752 55.6459 7.32039 53.7701 7.16289 50.3161C6.99246 46.5805 6.95631 45.46 6.95631 36.0004C6.95631 26.5409 6.99246 25.4208 7.16289 21.6848C7.32053 18.2308 7.89752 16.3551 8.38267 15.1066C8.95065 13.5678 9.8563 12.1759 11.033 11.0332C12.1758 9.85655 13.5676 8.951 15.1064 8.38308C16.3547 7.89792 18.2305 7.3208 21.6845 7.1633C25.4202 6.99286 26.5406 6.95672 36.0002 6.95672L35.9999 6.95686ZM36.0002 0.573608C26.3789 0.573608 25.172 0.61439 21.394 0.786796C17.6231 0.958921 15.048 1.5577 12.7946 2.43351C10.4308 3.32306 8.28949 4.71752 6.51996 6.51966C4.71741 8.28907 3.32256 10.4304 2.43269 12.7943C1.55758 15.0479 0.958799 17.623 0.787377 21.3938C0.614268 25.1719 0.573486 26.3787 0.573486 36C0.573486 45.6213 0.614268 46.8281 0.787377 50.6062C0.959502 54.377 1.55828 56.9521 2.4341 59.2055C3.32364 61.5693 4.7181 63.7107 6.52024 65.4802C8.28976 67.2824 10.4311 68.6768 12.7949 69.5663C15.0484 70.4422 17.6236 71.0409 21.3943 71.2131C25.1729 71.3855 26.3793 71.4263 36.0004 71.4263C45.6216 71.4263 46.8286 71.3855 50.6066 71.2131C54.3775 71.0409 56.9526 70.4422 59.206 69.5663C61.5593 68.6562 63.6965 67.2644 65.4807 65.4802C67.2648 63.6961 68.6566 61.5588 69.5668 59.2055C70.4426 56.952 71.0414 54.3769 71.2135 50.6062C71.3859 46.8276 71.4267 45.6211 71.4267 36C71.4267 26.3789 71.3859 25.1719 71.2135 21.3938C71.0414 17.623 70.4426 15.0479 69.5668 12.7945C68.6772 10.4307 67.2828 8.28932 65.4806 6.5198C63.7111 4.7173 61.5696 3.32254 59.2055 2.43281C56.952 1.5577 54.3769 0.958921 50.606 0.787499C46.828 0.61439 45.6212 0.573608 35.9999 0.573608H36.0002Z"
                fill="black"
              />
              <path
                d="M36.0001 17.8081C32.402 17.8081 28.8848 18.875 25.8932 20.874C22.9015 22.873 20.5698 25.7142 19.1929 29.0383C17.816 32.3624 17.4557 36.0202 18.1577 39.5491C18.8596 43.078 20.5922 46.3195 23.1364 48.8637C25.6806 51.4079 28.9221 53.1405 32.451 53.8425C35.9799 54.5444 39.6377 54.1841 42.9618 52.8072C46.286 51.4303 49.1272 49.0986 51.1261 46.107C53.1251 43.1153 54.192 39.5981 54.192 36.0001C54.192 31.1753 52.2754 26.5481 48.8637 23.1364C45.4521 19.7248 40.8249 17.8081 36.0001 17.8081V17.8081ZM36.0001 47.8088C33.6645 47.8087 31.3815 47.1161 29.4395 45.8186C27.4976 44.521 25.9841 42.6767 25.0903 40.519C24.1966 38.3612 23.9628 35.9869 24.4184 33.6962C24.8741 31.4056 25.9988 29.3015 27.6502 27.65C29.3017 25.9985 31.4058 24.8739 33.6965 24.4182C35.9872 23.9626 38.3615 24.1965 40.5192 25.0903C42.677 25.984 44.5212 27.4976 45.8188 29.4395C47.1163 31.3814 47.8089 33.6645 47.8089 36.0001C47.8089 39.1319 46.5647 42.1355 44.3501 44.3501C42.1355 46.5646 39.1319 47.8088 36.0001 47.8088Z"
                fill="black"
              />
              <path
                d="M54.9108 21.3404C57.2586 21.3404 59.1619 19.4372 59.1619 17.0894C59.1619 14.7415 57.2586 12.8383 54.9108 12.8383C52.5629 12.8383 50.6597 14.7415 50.6597 17.0894C50.6597 19.4372 52.5629 21.3404 54.9108 21.3404Z"
                fill="black"
              />
            </svg>
            인스타그램 속 <span>{secondPlant.contntsName}</span> 보러가기
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.3761 0.240613C44.5882 0.898225 44.1975 1.82352 44.1774 5.29649C44.1774 7.57801 44.2393 7.98882 44.6501 8.79034C45.4926 10.4553 45.7185 10.5164 52.1515 10.6402L57.7412 10.7431L43.232 25.2306C35.2579 33.2048 28.5997 39.9666 28.435 40.2745C28.0651 40.994 28.0651 42.1444 28.435 42.8639C28.5997 43.1718 29.6473 44.323 30.7776 45.4534C32.6475 47.3032 32.8943 47.4881 33.7577 47.5701C34.2714 47.632 34.9499 47.6111 35.2788 47.55C35.6695 47.4471 40.3756 42.8848 50.4456 32.8148C58.4808 24.7989 65.1189 18.2437 65.2009 18.2437C65.2829 18.2437 65.3448 20.7713 65.3448 23.8744C65.3448 29.362 65.3649 29.5051 65.8175 30.1635C66.6809 31.4377 67.3176 31.6226 70.7295 31.5607C74.0175 31.4988 74.3262 31.3967 75.2917 30.0807C75.7234 29.526 75.7234 29.2792 75.7845 16.1262L75.8256 2.72638L75.3737 1.80186C75.0859 1.26726 74.6132 0.712547 74.1815 0.465749C73.4829 0.0750504 73.0922 0.0549322 60.309 0.0139282C49.6642 -0.0270759 47.0136 0.0147041 46.3761 0.240613Z"
                fill="black"
              />
              <path
                d="M6.97978 8.6047C4.67814 8.9954 2.49951 10.4955 1.28718 12.5094C-0.0899351 14.7909 -0.0280422 13.3318 0.0338507 42.7201L0.0957436 69.3131L0.753355 70.6902C1.49298 72.2523 2.9111 73.8963 4.18532 74.6359C6.26105 75.8482 4.84293 75.7863 33.6974 75.7863C57.3931 75.7863 60.2494 75.7453 61.2567 75.4575C64.216 74.574 66.5184 72.0867 67.176 69.0454C67.3408 68.2849 67.4019 62.7153 67.4019 50.8164V33.6566H62.1612H56.9204V49.4811V65.3055H33.6958H10.4729V42.1855V19.0654H26.2973H42.1218V13.7217V8.3788L25.126 8.39968C15.7546 8.4198 7.59561 8.50181 6.97978 8.6047Z"
                fill="black"
              />
            </svg>
          </a>
          {/* 다른 식물 후보 */}
          <button
            className="btn"
            onClick={() => {
              props.onClick();
            }}
          >
            <Link to="/q1">
              테스트 다시 하기
              <span role="img" aria-label="">
                ♻️
              </span>
            </Link>
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container result">
          {/* 최상위 컨테이너 */}
          <p className="point-txt">
            <span role="img" aria-label="smiley face">
              {difficultyToEmoji(props.condition.difficulty)} 님의{" "}
            </span>
            <span>{spaceToString(props.condition.space)}</span>과{" "}
            <strong>환상의 짝궁</strong>
            <span className="medal" role="img" aria-label="medal">
              🥉
            </span>
          </p>
          {/* 추천식물 카드 */}
          <div className="plant-card">
            <div
              className="img-box"
              style={{
                "background-image": `url(./imgs/${thirdPlant.cntntsNo}.jpg)`,
              }}
            ></div>
            <p className="plant-name">{thirdPlant.contntsName}</p>
            <p className="plant-name-en">{thirdPlant.plntzrNm}</p>
            <div className="tags">
              <span className="tag">{thirdPlant.toxctyInfo}</span>
              <span className="tag">{thirdPlant.frtlzrInfo}</span>
              <span className="tag">
                추천장소_{thirdPlant.postngplaceCodeNm}
              </span>
            </div>
          </div>
          {/* 양육 정보 */}
          <h4 className="result-heading">양육 정보</h4>
          <ul className="conditions">
            <li>
              <span className="result-desc">빛</span>
              <div className="step-container step-container-thin">
                <div
                  className="step"
                  style={{ width: thirdPlant.light * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
            <li>
              <span className="result-desc">습도</span>
              <div className="step-container step-container-thin">
                {/* step바 width값 = 50 * 각 level값 */}
                <div
                  className="step"
                  style={{ width: thirdPlant.humidity * 80 }}
                />
                <div className="step-bg" />
              </div>
            </li>
            <li>
              <span className="result-desc">크기</span>
              <div className="step-container step-container-thin">
                {/* step바 width값 = 50 * 각 level값 */}
                <div className="step" style={{ width: thirdPlant.size * 80 }} />
                <div className="step-bg" />
              </div>
            </li>
          </ul>
          <div className="div-line" />
          <h4 className="result-heading">
            <span role="img" aria-label="">
              {thirdPlant.contntsName}
            </span>
            기르기 Tip ☘️
          </h4>
          <p className="result-desc result-desc-main">{thirdPlant.tips}</p>
          <div className="div-line" />
          {/* 식물 요약*/}
          <h4 className="result-heading">
            <span>{thirdPlant.contntsName}</span> 요약
          </h4>
          <ul className="sum-card">
            <li>
              <span className="result-desc">난이도</span>
              <Rater total={5} rating={thirdPlant.managelevelCodeNm} />
              <span className="point-txt">
                {managelevelCodeNmTxt(thirdPlant)}
              </span>
            </li>
            <li>
              <span className="result-desc">물주기</span>
              <span className="result-desc bold">
                {thirdPlant.watercycleSprngCodeNm}
              </span>
            </li>
            <li>
              <span className="result-desc">생명력</span>
              <span className="result-desc bold">
                {thirdPlant.managedemanddoCodeNm}
              </span>
            </li>
          </ul>
          {/* 인스타그램 외부 링크 */}
          <a
            href={`https://www.instagram.com/explore/tags/${thirdPlant.contntsName}`}
            className="point-txt insta-link"
            title="인스타그램 가기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9999 6.95686C45.4592 6.95686 46.5795 6.993 50.3155 7.16344C53.7695 7.32108 55.6452 7.89806 56.8937 8.38322C58.4324 8.95114 59.8243 9.85669 60.967 11.0333C62.1436 12.176 63.0492 13.5679 63.6171 15.1066C64.1022 16.355 64.6794 18.2308 64.8369 21.6848C65.0073 25.4205 65.0434 26.5409 65.0434 36.0004C65.0434 45.46 65.0073 46.5801 64.8369 50.3161C64.6792 53.7701 64.1021 55.6457 63.6171 56.8942C63.0277 58.4221 62.125 59.8096 60.967 60.9676C59.8091 62.1255 58.4215 63.0283 56.8937 63.6176C55.6453 64.1028 53.7695 64.6799 50.3155 64.8374C46.5805 65.0078 45.4601 65.044 35.9999 65.044C26.5396 65.044 25.4197 65.0078 21.6843 64.8374C18.2302 64.6798 16.3546 64.1026 15.1061 63.6176C13.5674 63.0497 12.1755 62.1442 11.0328 60.9676C9.85615 59.8248 8.9506 58.4329 8.38267 56.8942C7.89752 55.6459 7.32039 53.7701 7.16289 50.3161C6.99246 46.5805 6.95631 45.46 6.95631 36.0004C6.95631 26.5409 6.99246 25.4208 7.16289 21.6848C7.32053 18.2308 7.89752 16.3551 8.38267 15.1066C8.95065 13.5678 9.8563 12.1759 11.033 11.0332C12.1758 9.85655 13.5676 8.951 15.1064 8.38308C16.3547 7.89792 18.2305 7.3208 21.6845 7.1633C25.4202 6.99286 26.5406 6.95672 36.0002 6.95672L35.9999 6.95686ZM36.0002 0.573608C26.3789 0.573608 25.172 0.61439 21.394 0.786796C17.6231 0.958921 15.048 1.5577 12.7946 2.43351C10.4308 3.32306 8.28949 4.71752 6.51996 6.51966C4.71741 8.28907 3.32256 10.4304 2.43269 12.7943C1.55758 15.0479 0.958799 17.623 0.787377 21.3938C0.614268 25.1719 0.573486 26.3787 0.573486 36C0.573486 45.6213 0.614268 46.8281 0.787377 50.6062C0.959502 54.377 1.55828 56.9521 2.4341 59.2055C3.32364 61.5693 4.7181 63.7107 6.52024 65.4802C8.28976 67.2824 10.4311 68.6768 12.7949 69.5663C15.0484 70.4422 17.6236 71.0409 21.3943 71.2131C25.1729 71.3855 26.3793 71.4263 36.0004 71.4263C45.6216 71.4263 46.8286 71.3855 50.6066 71.2131C54.3775 71.0409 56.9526 70.4422 59.206 69.5663C61.5593 68.6562 63.6965 67.2644 65.4807 65.4802C67.2648 63.6961 68.6566 61.5588 69.5668 59.2055C70.4426 56.952 71.0414 54.3769 71.2135 50.6062C71.3859 46.8276 71.4267 45.6211 71.4267 36C71.4267 26.3789 71.3859 25.1719 71.2135 21.3938C71.0414 17.623 70.4426 15.0479 69.5668 12.7945C68.6772 10.4307 67.2828 8.28932 65.4806 6.5198C63.7111 4.7173 61.5696 3.32254 59.2055 2.43281C56.952 1.5577 54.3769 0.958921 50.606 0.787499C46.828 0.61439 45.6212 0.573608 35.9999 0.573608H36.0002Z"
                fill="black"
              />
              <path
                d="M36.0001 17.8081C32.402 17.8081 28.8848 18.875 25.8932 20.874C22.9015 22.873 20.5698 25.7142 19.1929 29.0383C17.816 32.3624 17.4557 36.0202 18.1577 39.5491C18.8596 43.078 20.5922 46.3195 23.1364 48.8637C25.6806 51.4079 28.9221 53.1405 32.451 53.8425C35.9799 54.5444 39.6377 54.1841 42.9618 52.8072C46.286 51.4303 49.1272 49.0986 51.1261 46.107C53.1251 43.1153 54.192 39.5981 54.192 36.0001C54.192 31.1753 52.2754 26.5481 48.8637 23.1364C45.4521 19.7248 40.8249 17.8081 36.0001 17.8081V17.8081ZM36.0001 47.8088C33.6645 47.8087 31.3815 47.1161 29.4395 45.8186C27.4976 44.521 25.9841 42.6767 25.0903 40.519C24.1966 38.3612 23.9628 35.9869 24.4184 33.6962C24.8741 31.4056 25.9988 29.3015 27.6502 27.65C29.3017 25.9985 31.4058 24.8739 33.6965 24.4182C35.9872 23.9626 38.3615 24.1965 40.5192 25.0903C42.677 25.984 44.5212 27.4976 45.8188 29.4395C47.1163 31.3814 47.8089 33.6645 47.8089 36.0001C47.8089 39.1319 46.5647 42.1355 44.3501 44.3501C42.1355 46.5646 39.1319 47.8088 36.0001 47.8088Z"
                fill="black"
              />
              <path
                d="M54.9108 21.3404C57.2586 21.3404 59.1619 19.4372 59.1619 17.0894C59.1619 14.7415 57.2586 12.8383 54.9108 12.8383C52.5629 12.8383 50.6597 14.7415 50.6597 17.0894C50.6597 19.4372 52.5629 21.3404 54.9108 21.3404Z"
                fill="black"
              />
            </svg>
            인스타그램 속 <span>{thirdPlant.contntsName}</span> 보러가기
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.3761 0.240613C44.5882 0.898225 44.1975 1.82352 44.1774 5.29649C44.1774 7.57801 44.2393 7.98882 44.6501 8.79034C45.4926 10.4553 45.7185 10.5164 52.1515 10.6402L57.7412 10.7431L43.232 25.2306C35.2579 33.2048 28.5997 39.9666 28.435 40.2745C28.0651 40.994 28.0651 42.1444 28.435 42.8639C28.5997 43.1718 29.6473 44.323 30.7776 45.4534C32.6475 47.3032 32.8943 47.4881 33.7577 47.5701C34.2714 47.632 34.9499 47.6111 35.2788 47.55C35.6695 47.4471 40.3756 42.8848 50.4456 32.8148C58.4808 24.7989 65.1189 18.2437 65.2009 18.2437C65.2829 18.2437 65.3448 20.7713 65.3448 23.8744C65.3448 29.362 65.3649 29.5051 65.8175 30.1635C66.6809 31.4377 67.3176 31.6226 70.7295 31.5607C74.0175 31.4988 74.3262 31.3967 75.2917 30.0807C75.7234 29.526 75.7234 29.2792 75.7845 16.1262L75.8256 2.72638L75.3737 1.80186C75.0859 1.26726 74.6132 0.712547 74.1815 0.465749C73.4829 0.0750504 73.0922 0.0549322 60.309 0.0139282C49.6642 -0.0270759 47.0136 0.0147041 46.3761 0.240613Z"
                fill="black"
              />
              <path
                d="M6.97978 8.6047C4.67814 8.9954 2.49951 10.4955 1.28718 12.5094C-0.0899351 14.7909 -0.0280422 13.3318 0.0338507 42.7201L0.0957436 69.3131L0.753355 70.6902C1.49298 72.2523 2.9111 73.8963 4.18532 74.6359C6.26105 75.8482 4.84293 75.7863 33.6974 75.7863C57.3931 75.7863 60.2494 75.7453 61.2567 75.4575C64.216 74.574 66.5184 72.0867 67.176 69.0454C67.3408 68.2849 67.4019 62.7153 67.4019 50.8164V33.6566H62.1612H56.9204V49.4811V65.3055H33.6958H10.4729V42.1855V19.0654H26.2973H42.1218V13.7217V8.3788L25.126 8.39968C15.7546 8.4198 7.59561 8.50181 6.97978 8.6047Z"
                fill="black"
              />
            </svg>
          </a>
          {/* 다른 식물 후보 */}
          <button
            className="btn"
            onClick={() => {
              props.onClick();
            }}
          >
            <Link to="/q1">
              테스트 다시 하기
              <span role="img" aria-label="">
                ♻️
              </span>
            </Link>
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Result;

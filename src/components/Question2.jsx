import React from "react";
import { Link } from "react-router-dom";

const Question2 = (props) => {
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

  return (
    <form action className="form q2">
      {/* 질문 & 선택지 섹션 - 동그란 하얀 배경 */}
      <div className="qa-container">
        <p className="q-txt">
          <span>{spaceToString(props.space)}</span>에 햇빛이 잘 드는 편인가요?
        </p>
        <div className="a-box">
          <input
            type="radio"
            id="q-2-1"
            name="light"
            value="3"
            onClick={(e) => {
              props.onClick(e.target.name, e.target.value);
            }}
          />
          <svg
            id="sun"
            enable-background="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m121 256c0 74.439 60.561 135 135 135s135-60.561 135-135-60.561-135-135-135-135 60.561-135 135zm135-105c57.897 0 105 47.103 105 105s-47.103 105-105 105-105-47.103-105-105 47.103-105 105-105z" />
              <path d="m372.673 372.673c-5.858 5.858-5.858 15.355 0 21.213l72.426 72.426c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-72.426-72.426c-5.858-5.859-15.356-5.859-21.213 0z" />
              <path d="m66.901 45.688c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l72.426 72.426c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213z" />
              <path d="m45.688 466.312c5.857 5.858 15.355 5.859 21.213 0l72.426-72.426c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-72.426 72.426c-5.858 5.858-5.858 15.355 0 21.213z" />
              <path d="m466.312 45.688c-5.857-5.858-15.355-5.858-21.213 0l-72.426 72.426c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l72.426-72.426c5.858-5.858 5.858-15.355 0-21.213z" />
              <path d="m319.143 408.44c-7.654 3.17-11.288 11.945-8.118 19.599l11.48 27.716c3.166 7.642 11.934 11.293 19.599 8.118 7.654-3.17 11.288-11.945 8.118-19.599l-11.48-27.716c-3.171-7.654-11.945-11.287-19.599-8.118z" />
              <path d="m192.857 103.56c7.654-3.17 11.288-11.945 8.118-19.599l-11.48-27.716c-3.171-7.654-11.945-11.287-19.599-8.118-7.654 3.17-11.288 11.945-8.118 19.599l11.48 27.716c3.167 7.642 11.934 11.293 19.599 8.118z" />
              <path d="m83.961 311.024-27.716 11.48c-7.654 3.17-11.288 11.945-8.118 19.599 3.166 7.642 11.934 11.293 19.599 8.118l27.716-11.48c7.654-3.17 11.288-11.945 8.118-19.599-3.17-7.653-11.944-11.286-19.599-8.118z" />
              <path d="m428.039 200.976 27.716-11.48c7.654-3.17 11.288-11.945 8.118-19.599s-11.944-11.287-19.599-8.118l-27.716 11.48c-7.654 3.17-11.288 11.945-8.118 19.599 3.166 7.642 11.934 11.292 19.599 8.118z" />
              <path d="m173.259 416.558-11.48 27.716c-3.17 7.654.464 16.428 8.118 19.599 7.685 3.182 16.441-.495 19.599-8.118l11.48-27.716c3.17-7.654-.464-16.428-8.118-19.599-7.655-3.169-16.429.464-19.599 8.118z" />
              <path d="m338.741 95.442 11.48-27.716c3.17-7.654-.464-16.428-8.118-19.599-7.654-3.169-16.428.464-19.599 8.118l-11.48 27.716c-3.17 7.654.464 16.428 8.118 19.599 7.685 3.182 16.442-.495 19.599-8.118z" />
              <path d="m95.442 173.259-27.716-11.48c-7.654-3.17-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l27.716 11.48c7.685 3.182 16.441-.495 19.599-8.118 3.17-7.654-.464-16.429-8.118-19.599z" />
              <path d="m455.755 322.505-27.716-11.48c-7.654-3.169-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l27.716 11.48c7.685 3.182 16.441-.495 19.599-8.118 3.17-7.654-.464-16.429-8.118-19.599z" />
              <path d="m241 436v61c0 8.284 6.716 15 15 15s15-6.716 15-15v-61c0-8.284-6.716-15-15-15s-15 6.716-15 15z" />
              <path d="m271 76v-61c0-8.284-6.716-15-15-15s-15 6.716-15 15v61c0 8.284 6.716 15 15 15s15-6.716 15-15z" />
              <path d="m0 256c0 8.284 6.716 15 15 15h61c8.284 0 15-6.716 15-15s-6.716-15-15-15h-61c-8.284 0-15 6.716-15 15z" />
              <path d="m497 241h-61c-8.284 0-15 6.716-15 15s6.716 15 15 15h61c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
            </g>
          </svg>

          {/* lighttdemanddoCodeNm: 3 */}
          <label htmlFor="q-2-1">
            <span>네, 낮에는 항상 해가 들어오는 편이에요.</span>
          </label>
        </div>
        <div className="a-box">
          <svg
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.5001 0C21.3085 0 0 21.3085 0 47.5001C0 73.6917 21.3085 95 47.5001 95C73.6917 95 95 73.6917 95 47.5001C95 21.3085 73.6917 0 47.5001 0ZM4.69083 47.4999C4.69083 23.8943 23.8945 4.69083 47.5001 4.69083V90.3093C23.8952 90.3093 4.69083 71.1057 4.69083 47.4999Z"
              fill="black"
            />
          </svg>

          {/* lighttdemanddoCodeNm: 2 */}
          <label htmlFor="q-2-2">
            <span>
              아니요,
              <br />
              낮에만 한 두 시간 들어와요.
            </span>
          </label>
        </div>
      </div>
      <button className="btn" type="button">
        <Link to="q3">
          다음 질문{" "}
          <span role="img" aria-label="">
            👉
          </span>
        </Link>
      </button>
    </form>
  );
};

export default Question2;

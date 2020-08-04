import React, { useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Button = (props) => {
  const alertRef = useRef();
  // const dispatch = useDispatch();
  const onBtnClick = (e) => {
    if (props.input == false) {
      alertRef.current.classList.add("show");
      alertRef.current.classList.remove("alert-msg");
    }
  };
  useEffect(() => {
    alertRef.current.classList.remove("show");
    alertRef.current.classList.add("alert-msg");
  }, [props.input]);

  return (
    <div className="btn-box">
      <p className="alert-msg" ref={alertRef}>
        답변을 선택해주세요.
      </p>
      <button className="btn" type="button" onClick={onBtnClick}>
        <Link to={props.input ? `/${props.linkTo}` : `/${props.linkCurr}`}>
          다음 질문{" "}
          <span role="img" aria-label="">
            👉
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Button;

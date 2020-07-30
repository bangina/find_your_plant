import React from "react";

const StepBar = (props) => {
  const children = props.children || null;
  return (
    <div className="container" id="q1">
      {" "}
      {/* 최상위 컨테이너 */}
      <div className="step-container">
        <p>시작할게요</p>
        <div className="step" />
        <div className="step-bg" />
      </div>
      {children}
    </div>
  );
};

export default StepBar;

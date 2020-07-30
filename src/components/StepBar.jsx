import React from "react";

const StepBar = (props) => {
  const children = props.children || null;
  return (
    <div className="container question">
      {/* 최상위 컨테이너 */}
      <div className="step-container">
        <p>{props.statMsg}</p>
        <div className="step" style={{ width: props.step * 40 }} />
        <div className="step-bg" />
      </div>
      {children}
    </div>
  );
};

export default StepBar;

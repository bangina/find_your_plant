import React from "react";

const QLayout = (props) => {
  const children = props.children || null;
  return (
    <div className="container question">
      <div className="step-container">
        <p>{props.statMsg}</p>
        <div className="step" style={{ width: props.step * 40 }} />
        <div className="step-bg" />
      </div>
      {children}
    </div>
  );
};

export default QLayout;

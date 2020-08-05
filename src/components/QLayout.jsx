import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const QLayout = (props) => {
  const children = props.children || null;
  const globalCondition = useSelector((state) => state.condition);
  const step = globalCondition.step;
  const [statMsg, setStatMsg] = useState("");
  useEffect(() => {
    switch (step) {
      case 1:
        setStatMsg("시작할게요!");
        break;
      case 2:
        setStatMsg("밝기 체크!");
        break;
      case 3:
        setStatMsg("습도 체크!");
        break;
      case 4:
        setStatMsg("최저 온도 체크!");
        break;
      case 5:
        setStatMsg("거의 다 왔어요!");
        break;
      case 6:
        setStatMsg("마지막질문 이에요! 👏");
        break;
      default:
        setStatMsg("");
        break;
    }
  }, [step]);
  return (
    <div className="container question">
      <div className="step-container">
        <p>{statMsg}</p>
        <div className="step" style={{ width: globalCondition.step * 40 }} />
        <div className="step-bg" />
      </div>
      {children}
    </div>
  );
};

export default QLayout;

//index.js의 목적은 업무별 리덕스 모듈을 통합해서 store에 일괄적용키 위함
import { combineReducers } from "redux";

//리듀서 함수 불러오기
import condition from "./condition";

//여러개이면 추가 참조하면 됨

const rootReducer = combineReducers({ condition });
//루트 리듀서로 싹 포장해놓기
export default rootReducer;

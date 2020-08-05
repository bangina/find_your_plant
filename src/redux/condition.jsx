//액션타입 정의
const INPUT_INSERT = "INPUT_INSERT";
const INCREASE_STEP = "INCREASE_STEP";

//액션 생성함수 정의
export const insertInput = (inputKey, inputValue) => ({
  type: INPUT_INSERT,
  inputKey,
  inputValue,
});

export const increaseStep = () => ({
  type: INCREASE_STEP,
});

const initialState = {
  step: 1,
  space: "",
  light: "",
  humidity: "",
  temperature: "",
  size: "",
  difficulty: "",
};

//리듀서 함수
const condition = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_INSERT:
      return { ...state, [action.inputKey]: action.inputValue };
    case INCREASE_STEP:
      if (state.step == 6) {
        return { ...state, step: 1 };
      }
      return { ...state, step: state.step + 1 };

    default:
      return state;
  }
};

export default condition;

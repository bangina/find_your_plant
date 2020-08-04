//액션타입 정의
const INPUT_INSERT = "INPUT_INSERT";
const SPACE_INSERT = "SPACE_INSERT";
const LIGHT_INSERT = "LIGHT_INSERT";
const HUMIDITY_INSERT = "HUMIDITY_INSERT";
const TEMPERATURE_INSERT = "TEMPERATURE_INSERT";
const SIZE_INSERT = "SIZE_INSERT";
const DIFFICULTY_INSERT = "DIFFICULTY_INSERT";

//액션 생성함수 정의
export const insertInput = (inputKey, inputValue) => ({
  type: INPUT_INSERT,
  inputKey,
  inputValue,
});
export const insertSpace = (input) => ({
  type: SPACE_INSERT,
  input,
});
export const insertLight = (input) => ({
  type: LIGHT_INSERT,
  input,
});
export const insertHumidity = (input) => ({
  type: HUMIDITY_INSERT,
  input,
});
export const insertTemperature = (input) => ({
  type: TEMPERATURE_INSERT,
  input,
});
export const insertSize = (input) => ({
  type: SIZE_INSERT,
  input,
});
export const insertDifficulty = (input) => ({
  type: DIFFICULTY_INSERT,
  input,
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
    case SPACE_INSERT:
      return { ...state, space: action.input.space };
    case LIGHT_INSERT:
      return { ...state, light: action.input.light };
    case HUMIDITY_INSERT:
      return { ...state, humidity: action.input.humidity };
    case TEMPERATURE_INSERT:
      return { ...state, temperature: action.input.temperature };
    case SIZE_INSERT:
      return { ...state, size: action.input.size };
    case DIFFICULTY_INSERT:
      return { ...state, difficulty: action.input.difficulty };
    default:
      return state;
  }
};

export default condition;

import { ActionTypes } from "../contents/ActionTypes";
const intialState = {
  weathers: [],
};

export const weathersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WEATHERDATA:
      return { ...state, weathers: payload };
    default:
      return state;
  }
};

//destructured action = {type, payload} for easeness
export const selectedWeatherReducer = (state = {}, { type, payload }) => {
  // console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_WEATHERCITY:
      return { ...state, ...payload };
    default:
      return state;
  }
};

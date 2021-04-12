import { ActionTypes } from "../contents/ActionTypes";

export const setWeatherData = (weathers) => {
  return {
    type: ActionTypes.SET_WEATHERDATA,
    payload: weathers,
  };
};

export const selectedWeatherCity = (weather) => {
  return {
    type: ActionTypes.SELECTED_WEATHERCITY,
    payload: weather,
  };
};

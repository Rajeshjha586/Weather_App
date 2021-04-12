import { combineReducers } from "redux";

import { weathersReducer, selectedWeatherReducer } from "./weatherReducer";

export const reducers = combineReducers({
  allWeathers: weathersReducer,
  weather: selectedWeatherReducer,
});

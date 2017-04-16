import { combineReducers } from "redux";
import WeatherRducer from "./reducer_weather";

export const rootReducer = combineReducers({
	weather: WeatherRducer
});

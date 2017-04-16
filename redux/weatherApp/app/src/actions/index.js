import axios from "axios";

const API_KEY = "f270f91bc1fc38715a4a0675dc174309";

export const FETCH_WEATHER = "FETCH_WEATHER";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url).then();

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

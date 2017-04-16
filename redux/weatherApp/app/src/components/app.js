import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchBarConnect } from "../conatiners/search_bar";
import { WeatherListConnect } from "../conatiners/weather_list"

export const App = () => {
	return <div>
		<SearchBarConnect></SearchBarConnect>
		<WeatherListConnect></WeatherListConnect>
	</div>;
}

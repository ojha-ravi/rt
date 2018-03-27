import * as React from 'react';
import { connect } from 'react-redux';
import { Chart } from '../components/chart';
import { GoogleMap } from '../components/google_map';

class WeatherList extends React.Component {
  renderWeather(cd) {
    if (!cd) {
      return null;
    }
    const cityName = cd.name;
    const temps = [cd.main.temp];
    const pressures = [cd.main.pressure];
    const humidities = [cd.main.humidity];
    const { lon, lat } = cd.coord;

    console.log(temps, pressures, humidities);

    return (
      <tr key={cityName}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units={'K'} />
        </td>
        <td>
          <Chart data={pressures} color="green" units={'hPa'} />
        </td>
        <td>
          <Chart data={humidities} color="blue" units={'%'} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export const WeatherListConnect = connect(mapStateToProps)(WeatherList);

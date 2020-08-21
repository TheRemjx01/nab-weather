import React from "react";
import round from "lodash/round";
import PropTypes from "prop-types";

import WeatherIcon from "../weather-icon";
import "./WeatherItem.css";

export const getDisplayTemp = (temp) => `${round(temp, 2)}*C`;

export const WeatherItem = ({ weekDay, minTemp, maxTemp, weatherIcon }) => (
  <div className="weatherItem">
    <h4 className="title">{weekDay}</h4>
    <WeatherIcon weather={weatherIcon} className="icon" />
    <ul className="tempContainer">
      <li>Min: {getDisplayTemp(minTemp)}</li>
      <li>Max: {getDisplayTemp(maxTemp)}</li>
    </ul>
  </div>
);

WeatherItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
};

export default WeatherItem;

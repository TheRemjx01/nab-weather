import React from "react";
import get from "lodash/get";
import PropTypes from "prop-types";
import { Row, Col, Spin } from "antd";

import WithFetch from "../with-fetch";
import getUrl from "../../utils/url";
import getDay from "../../utils/date";

import WeatherItem from "../weather-item";
import { Title } from "../document";

import "./WeatherDisplay.css";

export const generateLocationForecastUrl = ({ locationId }) =>
  `/location/${locationId}`;
export const generateTitle = ({ title }) => `${title} Weather`;

export const renderWeatherItem = ({
  id,
  min_temp,
  max_temp,
  applicable_date,
  weather_state_abbr,
}) => (
  <Col key={id}>
    <WeatherItem
      minTemp={min_temp}
      maxTemp={max_temp}
      weekDay={getDay(applicable_date)}
      weatherIcon={weather_state_abbr}
    />
  </Col>
);

export const WeatherDisplayData = ({ data }) => {
  if (!data) {
    return "";
  }
  const consolidatedWeathers = get(data, "consolidated_weather", []);

  return (
    <>
      <Title text={generateTitle({ title: get(data, "title") })} />
      <div className="weatherDisplay">
        <Row>{consolidatedWeathers.map(renderWeatherItem)}</Row>
      </div>
    </>
  );
};

WeatherDisplayData.propTypes = {
  data: PropTypes.object,
};

export const WeatherLoading = () => {
  return (
    <div className="weatherDisplay loading">
      <Spin size="large" />
    </div>
  );
};

export const WeatherError = ({ error }) => error;

WeatherError.propTypes = {
  error: PropTypes.string,
};

export const WeatherDisplay = ({ locationId, locationLabel }) => {
  return (
    <div>
      <h2 className="locationLabel">{locationLabel}</h2>
      <WithFetch
        url={getUrl(generateLocationForecastUrl({ locationId }))}
        Component={<WeatherDisplayData />}
        LoadingComponent={<WeatherLoading />}
        ErrorComponent={<WeatherError />}
      />
    </div>
  );
};

WeatherDisplay.propTypes = {
  locationId: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  locationLabel: PropTypes.string.isRequired,
};

export default WeatherDisplay;

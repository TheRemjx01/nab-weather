import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import {
  generateTitle,
  generateLocationForecastUrl,
  WeatherDisplayData,
  WeatherDisplay,
  WeatherError,
  WeatherLoading,
  renderWeatherItem as WeatherItem,
} from "./WeatherDisplay";

describe("generateTitle", () => {
  it("should be able to generate title", () => {
    expect(generateTitle({ title: "London" })).toBe("London Weather");
  });
});

describe("generateLocationForecastUrl", () => {
  it("should be able to generate correct url", () => {
    expect(generateLocationForecastUrl({ locationId: 1005 })).toBe(
      "/location/1005"
    );
  });
});

describe("renderWeatherItem", () => {
  const Wrapper = shallow(
    <WeatherItem
      id={1}
      min_temp={1}
      max_temp={2}
      applicable_date={"2020-08-11"}
      weather_state_abbr={"sn"}
    />
  );
  expect(toJson(Wrapper)).toMatchSnapshot();
});

describe("<WeatherLoading />", () => {
  it("should be able to render", () => {
    const Wrapper = shallow(<WeatherLoading />);
    expect(toJson(Wrapper)).toMatchSnapshot();
  });
});

describe("<WeatherError />", () => {
  it("should be able to render", () => {
    const Wrapper = shallow(<WeatherError error="mock error" />);
    expect(toJson(Wrapper)).toMatchSnapshot();
  });
});

describe("<WeatherDisplay />", () => {
  it("should be able to render", () => {
    const Wrapper = shallow(
      <WeatherDisplay locationId={1105} locationLabel={"London"} />
    );
    expect(toJson(Wrapper)).toMatchSnapshot();
  });
});

describe("<WeatherDisplayData />", () => {
  it("should be able to render when no data", () => {
    const Wrapper = shallow(<WeatherDisplayData />);
    expect(toJson(Wrapper)).toMatchSnapshot();
  });

  it("should be able to render when has data", () => {
    const weatherData = [
      {
        id: 1,
        min_temp: 25,
        max_temp: 28,
        applicable_date: "2020-08-11",
        weather_state_abbr: "sn",
      },
    ];
    const Wrapper = shallow(<WeatherDisplayData data={weatherData} />);
    expect(toJson(Wrapper)).toMatchSnapshot();
  });
});

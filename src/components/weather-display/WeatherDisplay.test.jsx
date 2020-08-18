import React from 'react';
import {shallow} from 'enzyme';

import {
 generateTitle,
 generateLocationForecastUrl,
 WeatherDisplayData,
 WeatherDisplay,
 WeatherError,
 WeatherLoading,
} from './WeatherDisplay';

describe('generateTitle', () => {
 it('should be able to generate title', () => {
  expect(generateTitle({title: 'London'})).toBe('London Weather')
 })
})

describe('generateLocationForecastUrl', () => {
 it('should be able to generate correct url', () => {
  expect(generateLocationForecastUrl({locationId: 1005})).toBe('/location/1005')
 })
})

describe('<WeatherLoading />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<WeatherLoading />);
  expect(Wrapper).toMatchSnapshot();
 })
})

describe('<WeatherError />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<WeatherError error='mock error'/>);
  expect(Wrapper).toMatchSnapshot();
 })
})

describe('<WeatherDisplay />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<WeatherDisplay locationId={1105} locationLabel={'London'} />);
  expect(Wrapper).toMatchSnapshot();
 })
})

describe('<WeatherDisplayData />', () => {
 it('should be able to render when no data', () => {
  const Wrapper = shallow(<WeatherDisplayData />);
  expect(Wrapper).toMatchSnapshot();
 })

 it('should be able to render when has data', () => {
  const weatherData = [{
   id: 1, min_temp: 25, max_temp: 28, applicable_date: '2020-08-11', weather_state_abbr: 'sn',
  }]
  const Wrapper = shallow(<WeatherDisplayData data={weatherData}/>);
  expect(Wrapper).toMatchSnapshot();
 })
})


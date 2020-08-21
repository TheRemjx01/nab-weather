import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { WeatherItem, getDisplayTemp } from './WeatherItem'

describe('getDisplayTemp', () => {
 it('should be able to get correct temperature', () => {
  const temp = 29.577;
  expect(getDisplayTemp(temp)).toBe('29.58*C')
 })
})

describe('<WeatherItem />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<WeatherItem weekDay='Saturday' minTemp={25.53} maxTemp={28.53} weatherIcon='sn'/>);
  expect(toJson(Wrapper)).toMatchSnapshot();
 })
})


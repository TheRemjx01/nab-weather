import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WeatherIcon from "./WeatherIcon";

describe('<WeatherIcon />', () => {
 it('should be able to render', () => {
  const weather = 'sn';
  const className='mock-class'
  const Wrapper = shallow(<WeatherIcon weather={weather} className={className}/>);
  expect(toJson(Wrapper)).toMatchSnapshot();
 })
})
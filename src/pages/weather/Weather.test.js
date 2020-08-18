import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';

describe('<Weather />', () => {
 it('should be able to work correctly', () => {
  const Wrapper = shallow(<Weather />);
  expect(Wrapper).toMatchSnapshot();
 })
})
import React from 'react'
import { shallow } from 'enzyme'
import Hidden from './Hidden'

const Dumb = () => <p>Dumb</p>

describe('<Hidden />', () => {
 it('should be able to prevent render if match condition', () => {
  const Wrapper = shallow(<Hidden when={true}><Dumb/></Hidden>)
  expect(Wrapper).toMatchSnapshot();
 })

 it('Should be able to render if condition not match', () => {
  const Wrapper = shallow(<Hidden when={false}><Dumb/></Hidden>)
  expect(Wrapper).toMatchSnapshot();
 })
})
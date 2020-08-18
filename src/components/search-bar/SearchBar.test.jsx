import React from 'react'
import { shallow } from 'enzyme'
import {
 SearchBar, SearchBarLoading,
 SearchBarError, generateOptions,
 SearchDataResult, handleOnChange,
 getLocationUrl,
} from "./SearchBar";

const DumbSearchBar = () => <div>Dumb</div>

const data = [
 {woeid: 101, title: 'option 1'},
 {woeid: 102, title: 'option 2'}
]

describe('<SearchBarError />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<SearchBarError SearchBar={<DumbSearchBar />} error={{message: 'mock error'}} />);
  expect(Wrapper).toMatchSnapshot();
 })
})

describe('<SearchBarLoading />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<SearchBarLoading SearchBar={<DumbSearchBar />}/>);
  expect(Wrapper).toMatchSnapshot();
  const props = Wrapper.props();
  expect(props.disabled).toBe(true);
  expect(props.loading).toBe(true);
 })
});

describe('generateOptions', () => {
 it('should be able to generate empty options with not found', () => {
  expect(generateOptions({data: []})).toHaveLength(1)
 })
 it('should be able to render options', () => {
  expect(generateOptions({data})).toHaveLength(2);
 })
})

describe('<SearchDataResult />', () => {
 it('should be able to render', () => {
  const Wrapper = shallow(<SearchDataResult SearchBar={<DumbSearchBar />} data={data}/>);
  expect(Wrapper).toMatchSnapshot();
  const props = Wrapper.props();
  expect(props.options.length).toBeGreaterThan(1);
 })
})

describe('handleOnChange', () => {
 it('should be able to work correctly', () => {
  const onChange = jest.fn();
  const setText = jest.fn();
  const option = 'mock value'
  handleOnChange({onChange, setText})(undefined, option);
  expect(onChange).toHaveBeenCalledWith(option);
  expect(setText).toHaveBeenCalledWith('');
 })
})

describe('getLocationUrl', () => {
 it('should be able to work correctly', () => {
  const text = 'London';
  expect(getLocationUrl(text).length).toBeGreaterThan(0)
 })
})

describe('<SearchBar />', () => {
 it('can render when no search text', () => {
  const onChange = jest.fn();
  const Wrapper = shallow(<SearchBar onChange={onChange}/>);
  expect(Wrapper).toMatchSnapshot();
  const props = Wrapper.props();
  expect(props.onSearch).toBeTruthy();
 })
})
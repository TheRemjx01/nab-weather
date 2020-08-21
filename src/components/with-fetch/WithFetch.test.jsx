import React from 'react';
import { mount } from 'enzyme';
import WithFetch from './WithFetch';

const mockPromise = ({res, error}) => ({
  then: (thenCb) => {
   thenCb({json: () => ({then: jsonCb => {jsonCb(res)}})})
   return mockPromise({res, error})
  },
  catch: (catchCb) => {
   catchCb(error)
   return mockPromise({res, error})
  },
  finally: (finallyCb) => {
   finallyCb()
  }
})

describe('<WithFetch />', () => {
  const componentCall = jest.fn();
  const Component = ({data}) => {
   componentCall(data)
    return 'Component'
  };
  const errorCall = jest.fn();
  const ErrorComponent = ({error}) => {
   errorCall(error)
   return 'Error'
  };
  const loadingCall = jest.fn();
  const LoadingComponent = () => {
   loadingCall();
   return 'Loading'
  };

  const mockData = {
   weathers: [{min_temp: 1, max_temp: 2, id: 1}],
  }

  const mockError = 'mock error'

  const mockUrl = 'http://mock.url'

  it('should be able to render while has error', () => {
   jest.spyOn(global, 'fetch').mockImplementation(() => mockPromise({ error: mockError }))

   mount(<WithFetch
    url={mockUrl}
    Component={<Component/>}
    ErrorComponent={<ErrorComponent />}
    LoadingComponent={<LoadingComponent />}
   />)

   expect(errorCall).toHaveBeenCalledWith(mockError);
   expect(componentCall).not.toHaveBeenCalled();

   global.fetch.mockRestore();
  })

 it('should be able to render while has data', () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => mockPromise({res: mockData}))

  mount(<WithFetch
   url={mockUrl}
   Component={<Component/>}
   ErrorComponent={<ErrorComponent />}
   LoadingComponent={<LoadingComponent />}
  />)
  expect(componentCall).toHaveBeenCalledWith(mockData);
  expect(loadingCall).toHaveBeenCalled();

  global.fetch.mockRestore();
 })
})
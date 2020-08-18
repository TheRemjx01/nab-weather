import { getDay } from './date';

describe('getDay', () => {
 it('should be able to get the weekday', () => {
  expect(getDay('2020-08-18')).toBe('Tuesday');
 });
});
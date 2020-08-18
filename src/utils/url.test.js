import { getUrl } from './url';

describe('getUrl', () => {
 it('should be able to get correct url', () => {
  expect(getUrl('/location')).toBe('/api/location')
 })
})
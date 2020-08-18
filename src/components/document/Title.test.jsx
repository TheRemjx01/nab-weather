import React from 'react'
import {render} from '@testing-library/react'
import Title from './Title'

describe('Title should be work correctly', () => {
 beforeEach(() => {
  document.title = ''
 })

 it('should be able to change document title', () => {
  const mockTitle = 'mock title'
  render(<Title text={mockTitle}/>)
  expect(document.title).toBe(mockTitle)
 })
})
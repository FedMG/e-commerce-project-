import { render } from '@testing-library/react'

import { verifyProps } from './test-validators'
import { linkExample } from './test-values'

import { links } from 'src/components/structure/footerLinks'
import * as footerElem from 'src/components/structure/Footer'
const { createColumns, Footer } = footerElem

it('should renders a footer unchanged', () => {
  const { container } = render(<Footer />)
  expect(container).toMatchSnapshot()
})

describe('verifyProps function', () => {
  const mockFn = jest.fn(verifyProps)
  const result = mockFn(createColumns, links[0])

  it('should be a function', () => {
    expect(typeof mockFn).toBe('function')
  })

  it('should returns a React HTMLElement object', () => {
    // const { container } = render(result)
    // expect(typeof container).toBe('object')
    expect(typeof result).toBe('object')
  })

  it('should have been called with a function and an object as parameter', () => {
    expect(links[0]).toEqual(linkExample)
    expect(mockFn).toHaveBeenCalledWith(createColumns, links[0])
  })

  it('should returns an error if is called without a function or an object as parameter', () => {
    expect(() => mockFn(1 as any, links[0])).toThrowError(
      'Invalid parameter: requires a function'
    )
  })
})

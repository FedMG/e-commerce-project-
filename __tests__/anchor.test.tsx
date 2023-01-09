import { render, screen } from '@testing-library/react'
import { Anchor } from 'src/utils/components'

it('should renders an anchor with a path and route props', () => {
  const { container } = render(<Anchor path='www.instagram.com' route='Instagram' />)
  expect(container).toMatchInlineSnapshot(`
<div>
  <a
    class="text-white hover:text-gray-400"
    href="www.instagram.com"
    rel="noreferrer"
    target="_blank"
  >
    Instagram
  </a>
</div>
`)
})

it('should renders an anchor without a path and route props', () => {
  const { container } = render(<Anchor path='' route='' />)
  expect(container).toMatchInlineSnapshot(`
<div>
  <a
    class="text-white hover:text-gray-400"
    href="#"
    rel="noreferrer"
    target="_blank"
  />
</div>
`)
})

describe('anchor component behavior', () => {
  it('should renders an anchor with a link role and twitter name', () => {
    render(<Anchor path='www.twitter.com' route='Twitter' />)
    const component = screen.getByRole('link', { name: 'Twitter' })
    expect(component).toBeInTheDocument()
  })
})

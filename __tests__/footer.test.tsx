import { render } from '@testing-library/react'
import { Footer } from 'src/components/structure/Footer'

it('should renders a footer unchanged', () => {
  const { container } = render(<Footer />)
  expect(container).toMatchSnapshot()
})

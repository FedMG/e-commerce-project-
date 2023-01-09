import { render } from '@testing-library/react'

import { Header } from 'src/components/structure/Header'

it('should renders an header component unchanged', () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})

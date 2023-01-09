import { render } from '@testing-library/react'

import { Layout } from 'src/components/layout'
import Home from 'src/pages'

it('should renders an home with a layout unchanged', () => {
  const { container } = render(<Layout title='Name - Home'><Home /></Layout>)
  expect(container).toMatchSnapshot()
})

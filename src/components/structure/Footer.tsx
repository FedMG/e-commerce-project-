import { ReactElement } from 'react'
import Link from 'next/link'

import { LinkProps, LinkColumns } from 'additional'
import { Anchor } from 'utils/components'
import { links } from './footerLinks'

const createRows = ({ route, path }: LinkProps): ReactElement => {
  if (!['Instagram', 'Twitter', 'Facebook'].includes(route)) {
    return (
      <Link key={route} href={path} className='text-white hover:text-gray-400'>
        {route}
      </Link>
    )
  }
  return <Anchor key={route} path={path} route={route} />
}

const createColumns = ({ id, title, column }: LinkColumns): ReactElement => (
  <div key={id}>
    <h4>{title}</h4>
    <div className='flex flex-col'>{column.map(createRows)}</div>
  </div>
)

export const Footer = (): ReactElement => {
  return (
    <footer className='fixed bottom-0 w-full bg-gray-900 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
            <p>&copy; 2023 e-commerce</p>
          </div>
          <div className='flex flex-row sm:space-x-6'>
            {links.map(createColumns)}
          </div>
        </div>
      </div>
    </footer>
  )
}

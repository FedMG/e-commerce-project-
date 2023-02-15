import { LinkProps, FooterLinksColumns, FooterProps } from 'additional'
import { ReactElement } from 'react'
import Link from 'next/link'

import { Anchor } from 'src/utils/components'
import { getYear } from 'src/utils/functions'

export const createRows = ({ route, path }: LinkProps): ReactElement => {
  const options = ['Instagram', 'Twitter', 'Facebook']

  if (!options.includes(route)) {
    return (
      <div className='inline' key={route}>
        <Link  href={path} className='text-white hover:text-gray-400 hover:underline'>
          {route}
        </Link>
      </div>
    )
  }
  return (
    <div className='inline' key={route}><Anchor path={path} route={route} /></div>)
}

export const createColumns = ({ id, title, column }: FooterLinksColumns): ReactElement => (
  <div key={id} className='p-2 border sm:p-4 sm:border-none'>
    <h4 className='font-bold text-lg mb-[0.65em] underline underline-offset-4 sm:text-xl'>{title}</h4>
    <div className='flex flex-col'>{column.map(createRows)}</div>
  </div>
)

export const Footer = ({ links }: FooterProps): ReactElement => {
  return (
    <footer className=' w-full bg-[#000000] text-white px-4 pt-4'>
      <div className='w-full grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:justify-evenly sm:gap-2'>
        {links.map(createColumns)}
      </div>

      <div className='flex text-end pt-2'>
        <div className='w-full text-sm'>
          <p>&copy; {getYear()} e-commerce</p>
        </div>
      </div>
    </footer>
  )
}

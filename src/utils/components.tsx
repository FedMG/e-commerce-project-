import { ReactElement } from 'react'
import { LinkProps } from 'additional'

export const Anchor: React.FC<LinkProps> = ({ path, route }): ReactElement => (
  <a
    href={path.length > 0 ? path : '#'}
    className='text-white hover:text-gray-400'
    target='_blank'
    rel='noreferrer'
  >
    {route}
  </a>
)

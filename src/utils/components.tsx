import { LinkProps } from 'additional'

export const Anchor: React.FC<LinkProps> = ({ path, route }) => (
  <a
    href={path}
    className='text-white hover:text-gray-400'
    target='_blank'
    rel='noreferrer'
  >
    {route}
  </a>
)

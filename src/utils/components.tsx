import { ReactElement } from 'react'
import { ListProps, LinkProps, ButtonProps } from 'additional'

export const Anchor: React.FC<LinkProps> = ({ path, route, style }): ReactElement => (
  <a
    href={path.length > 0 ? path : '#'}
    className={`text-white hover:text-gray-400 hover:underline ${style ?? ''}`}
    target='_blank'
    rel='noreferrer'
  >
    {route}
  </a>
)

export const List: React.FC<ListProps> = ({ children, radical }) => (
  <li
    className={`text-gray-900 dark:text-white ${radical ?? ''}`}
    aria-current='page'
  >
    {children}
  </li>
)

export const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button type='button' className={style} onClick={onClick}>
      {children}
    </button>
  )
}

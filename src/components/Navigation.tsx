import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from 'additional'

import { List } from 'src/utils/components'
import { Dropdown } from './Dropdown'
import { Account } from './Account'

const navLinks: NavLinks[] = [
  {
    normal: {
      route: 'Home',
      path: '/'
    }
  },
  {
    normal: {
      route: 'About',
      path: '/about'
    }
  },
  {
    dropdown: {
      route: {
        label: 'Categories',
        options: ['Electronics', 'Clothes', 'Cars']
      },
      path: ['/categories', '/clothes', '/cars']
    }
  },
  {
    account: true
  },
  {
    special: {
      route: 'Add to Cart',
      path: '/cart',
      src: '/cart.svg'
    }
  }
]

export const Navigation = () => {
  return (
    <nav className='sticky top-0 max-w-full px-4 py-3 md:px-6 z-50 bg-[#d2ced5]'>
      <ul className='flex items-center justify-start mt-0 mr-6 space-x-8 text-sm font-medium'>
        {navLinks.map(({ normal, dropdown, account, special }) => {
          if (normal != null) {
            return (
              <List key={normal.route}>
                <Link href={normal.path}>{normal.route}</Link>
              </List>
            )
          }

          if (dropdown != null) {
            return (
              <List key={dropdown.route.label} radical='flex-auto'>
                <Dropdown
                  label={dropdown.route.label}
                  options={dropdown.route.options}
                  path={dropdown.path}
                />
              </List>
            )
          }

          if (account) {
            return <Account key='account' />
          }

          if (special != null) {
            return (
              <List key={special.route}>
                <Link href={special.path}>
                  <Image
                    src={special.src}
                    width={25}
                    height={25}
                    alt={`${special.route} icon`}
                  />
                </Link>
              </List>
            )
          }
        })}
      </ul>
    </nav>
  )
}

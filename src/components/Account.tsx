import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'

import { List } from 'src/utils/components'
import { Dropdown } from './Dropdown'

const signUp = (): void => {}

const sessionButtons = [
  {
    route: 'Sign in',
    onClick: async () => await signIn()
  },
  {
    route: 'Sign up',
    onClick: () => signUp()
  }
]

const temp = {
  options: ['Profile', 'Your purchases', 'Your sales', 'Settings', 'Sign Out'],
  path: ['/profile', '/purchases', '/sales', '/settings', '/signout']
}

export const Account = (): JSX.Element | null => {
  const { data: session, status } = useSession()

  if (status === 'authenticated' && ((session?.user) != null)) {
    const { user } = session

    return (
      <>
        <Dropdown
          label={user.name ?? 'User account'}
          options={temp.options}
          path={temp.path}
        >
          {user.image && <Image src={user?.image} className='rounded-full' width='30' height='30' alt='User image profile' />}
        </Dropdown>
      </>
    )
  }

  if (session == null) {
    return (
      <>
        {sessionButtons.map(({ route, onClick }) => (
          <List key={route}>
            <button onClick={onClick}>{route}</button>
          </List>
        ))}
      </>
    )
  }
  return null
}

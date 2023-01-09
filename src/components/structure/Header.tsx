import { ReactElement } from 'react'
import Image from 'next/image'

export const Header = (): ReactElement => {
  return (
    <header className='flex bg-orange-300 border-gray-200'>
      <div className='flex items-center px-2 py-2'>
        <Image src='/logo.svg' alt='E-commerce logo' className='mr-3' width={35} height={35} />
        <span className='text-xl font-semibold'>
          E-commerce
        </span>
      </div>
    </header>
  )
}

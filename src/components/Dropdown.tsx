'use client'

import Link from 'next/link'
import { useState, ReactElement } from 'react'

import { DropdownProps } from 'additional'
import { Button } from 'src/utils/components'

const DropdownSVG = (): ReactElement => (
  <svg className='-mr-1 ml-2 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
    <path
      fillRule='evenodd'
      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </svg>
)

export const Dropdown: React.FC<DropdownProps> = ({ children, label, options, path }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative inline-block text-left'>
      <Button
        style='inline-flex justify-center w-full text-sm leading-5 font-medium'
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {children ?? <DropdownSVG />}
      </Button>
      {isOpen && (
        <div className='origin-top-left absolute left-0 mt-2 w-48 rounded-md bg-white shadow-xs'>
          {options.map((option, i) => (
            <Link
              key={option}
              href={path[i]}
              className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100'
              onClick={() => setIsOpen(false)}
            >
              {option}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

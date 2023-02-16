import { ReactNode } from 'react'

export type CreateVerifyValues = boolean | ((value: string) => boolean)
export interface HomeStaticProps {
  props: FooterProps
}

// layout
export interface RootLayout {
  children: ReactNode
  title: string
  links: FooterLinksColumns[]
}

// structure
export interface FooterProps {
  links: FooterLinksColumns[]
}

// components
export interface FooterLinksColumns {
  id: number
  title: string
  column: LinkProps[]
}

export interface LinkProps {
  path: string
  route: string
  style?: string
}

export interface NavLinks {
  normal?: {
    special?: boolean
    route: string
    path: string
  }
  dropdown?: {
    route: Route
    path: string[]
  }
  account?: boolean
  special?: {
    route: string
    path: string
    src: string
  }
}

export interface Route {
  label: string
  options: string[]
}

export interface ListProps {
  children: ReactNode
  radical?: string
}

export interface DropdownProps {
  children?: React.ReactNode
  label: string
  options: string[]
  path: string[]
}

interface ButtonProps {
  children: React.ReactNode
  style: string
  onClick: () => void
}

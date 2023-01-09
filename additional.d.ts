export type CreateVerifyValues = boolean | ((value: string) => boolean)

export interface LayoutComponent {
  getLayout?: (page: React.ReactElement) => React.ReactElement
}

export interface RootLayout {
  children: React.ReactNode
  title: string
}

export interface LinkColumns {
  id: number
  title: string
  column: LinkProps[]
}

export interface LinkProps {
  path: string
  route: string
}

export interface LayoutComponent {
  getLayout?: (page: React.ReactElement) => React.ReactElement
}

export interface RootLayout {
  children: React.ReactNode
  title: string
}
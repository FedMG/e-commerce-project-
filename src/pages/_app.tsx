import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutComponent } from '../../additional'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as LayoutComponent).getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

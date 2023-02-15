import { ReactNode } from 'react'
import { AppPropsWithLayout } from '_app-types'
import { SessionProvider } from 'next-auth/react'

import 'styles/globals.css'

export default function App ({
  Component,
  pageProps
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={pageProps.session}>
    {getLayout(<Component {...pageProps} />, pageProps)}
    </SessionProvider>
    )
}

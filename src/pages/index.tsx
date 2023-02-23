import { ReactElement } from 'react'
import { NextPageWithLayout } from '_app-types'
import { HomeStaticProps, FooterLinksColumns } from 'additional'

import { Layout } from 'src/components/layout'
import { links } from 'src/components/structure/footerLinks'

interface HomeProps { links: FooterLinksColumns[] }

const Home: NextPageWithLayout<HomeProps> = (): ReactElement => {
  return <h1 className='text-3xl font-bold'>Home</h1>
}

Home.getLayout = function getLayout (page, pageProps) {
  return <Layout title='Name - Home' links={pageProps.links}>{page}</Layout>
}

export async function getStaticProps (): Promise<HomeStaticProps> {
  return {
    props: { links }
  }
}

export default Home

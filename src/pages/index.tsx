import { ReactElement } from 'react'
import { Layout } from '../components/layout'

export default function Home (): ReactElement {
  return <h1 className='text-3xl font-bold'>Home</h1>
}

Home.getLayout = function getLayout (page: ReactElement) {
  return <Layout title='Name - Home'>{page}</Layout>
}

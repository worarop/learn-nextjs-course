import type { ReactElement } from 'react'
import Layout from '../layouts/Layout'
import type { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return <p>Home Page</p>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default HomePage
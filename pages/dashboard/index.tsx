import type { ReactElement } from 'react'
import DLayout from '../../layouts/DLayout'
import type { NextPageWithLayout } from '../_app'

const DashboardPage: NextPageWithLayout = () => {
  return <p>DashBoard Index Page</p>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DLayout>
      {page}
    </DLayout>
  )
}

export default DashboardPage
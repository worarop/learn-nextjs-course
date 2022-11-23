import type { ReactElement } from 'react'
import DLayout from '../../layouts/DLayout'
import type { NextPageWithLayout } from '../_app'

const UserPage: NextPageWithLayout = () => {
  return <p>User Page</p>
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DLayout>
      {page}
    </DLayout>
  )
}

export default UserPage
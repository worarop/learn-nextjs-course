import { Container, Heading, Text } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import DLayout from '../../layouts/DLayout'
import type { NextPageWithLayout } from '../_app'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Container my={4} maxW={"1200px"}>
        <Heading mb={2}>Dash board</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eum ratione consectetur assumenda reiciendis suscipit quidem mollitia sequi aut? Repudiandae doloremque cum obcaecati culpa laborum nesciunt facere, inventore nam.
        </Text>
      </Container>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DLayout>
      {page}
    </DLayout>
  )
}

export default DashboardPage
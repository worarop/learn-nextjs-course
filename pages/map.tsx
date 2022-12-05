import { Container, Heading, Text } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import Layout from '../layouts/Layout'
import type { NextPageWithLayout } from './_app'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type Province = {
  name: string
  postcode: string
}

export const getStaticProps: GetStaticProps<{ provinces: Province[] }> = async (
  context
) => {
  const provinces : Province[] = [
    { name : "Bankok", postcode : "12000" },
    { name : "Chaingmai", postcode : "11000" },
    { name : "Chon", postcode : "11000" },
  ]

  return {
    props: {
      provinces,
    },
    // revalidate: 10 //ISR
  }
}

const MapPage: NextPageWithLayout= ( { provinces }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
    <>
      <Container my={4} maxW={"1200px"}>
        <Heading mb={2}>Map & Province</Heading>
        {
          provinces.map((item, index) => {
            return <Text key={item.name}>{index+1} - {item.name} {item.postcode}</Text>
          })
        }
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eum ratione consectetur assumenda reiciendis suscipit quidem mollitia sequi aut? Repudiandae doloremque cum obcaecati culpa laborum nesciunt facere, inventore nam.
        </Text>
      </Container>
    </>
  )
}

MapPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default MapPage
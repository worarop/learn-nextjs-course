import { Container, Heading, Text, Divider, SimpleGrid, Card, CardBody, Stack, CardFooter, Image, Button, ButtonGroup } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import Layout from '../layouts/Layout'
import type { NextPageWithLayout } from './_app'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getAPIVersion } from '../services/api.service'
import { Version } from '../types/version.types'
import { getProduct } from '../services/product.service'
import { Product } from '../types/product.types'
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants'

type Data = { 
    message: string
    total: number
 }

export const getServerSideProps: GetServerSideProps<{ data: Data, api: Version, products: Product[] }> = async (context) => {
  
  const response = await getAPIVersion()
  const api: Version = response.data
  
  // get product from backend api
  const responseProduct = await getProduct()
  const products: Product[] = responseProduct.data.data

  const data: Data = {
    message: "Hello SSR",
    total: 100
  }

  return {
    props: {
      data,
      api,
      products
    },
  }
}

const ProductPage: NextPageWithLayout = ({ data, api, products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Container my={4} maxW={"1200px"}>
        <Heading mb={2}>Product {data.message} {data.total} </Heading>
        { api && <Text>{api?.data.version}</Text>}
        <Divider />

        <SimpleGrid columns={3} spacing={10}>
        {
          products.map((item, index) => {
            return(
              <>
                <Card maxW='sm' key={item.id}>
                  <CardBody>
                    <Image
                      src={item.picture}
                      alt={item.detail}
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{item.title}</Heading>
                      <Text>
                        {item.detail}
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                        {item.date}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        Watch now
                      </Button>
                      <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </>
            )
          })
        }
        </SimpleGrid>

      </Container>
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default ProductPage
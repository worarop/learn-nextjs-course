import "reflect-metadata"
import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { http } from "../services/http.service"
import { SWRConfig } from "swr"
import { SessionProvider } from "next-auth/react"

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const fetcher = (url: string) => http.get(url).then(res => res.data)

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher: fetcher, refreshInterval: 0 }}>
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </SWRConfig>
    </SessionProvider>
    

    )
}
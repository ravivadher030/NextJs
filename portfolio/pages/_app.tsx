import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

// export function reportWebVitals(metric) {
//   console.log(metric,"metric")
// }

export default function App({ Component, pageProps }: AppProps) :React.ReactElement {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
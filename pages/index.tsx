import * as React from 'react'

import Head from 'next/head'

import { Layout } from '@gunspace/components'
import { Button } from '@gunspace/components/Button'

const Home = () =>
  <>
    <Head>
      <title>PMG Gunspace</title>
      <meta name='description' content='PMG Gunspace' />
    </Head>
    <Layout.Header>PMG Gunspace</Layout.Header>
    <Layout.Main>
      <Button as='a' href='/ideas'>Gun Ideas Generator</Button>
    </Layout.Main>
  </>

export default Home

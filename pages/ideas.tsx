import * as React from 'react'

import Head from 'next/head'

import { Layout, Opengraph } from '@gunspace/components'
import { IdeasView } from '@gunspace/views'

const Ideas = () =>
  <>
    <Head>
      <title>PMG Gunspace - Ideas generator</title>
      <meta name='description' content='PMG Gunspace ideas generator' />
      <Opengraph.Title>Gunspace Ideas Generator</Opengraph.Title>
      <Opengraph.Description>Generate whacky ideas to build a new gun.</Opengraph.Description>
    </Head>
    <Layout.Header>Gun Ideas Generator</Layout.Header>
    <Layout.Main>
      <IdeasView />
    </Layout.Main>
  </>

export default Ideas

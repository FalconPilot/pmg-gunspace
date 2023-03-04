import * as React from 'react'

import Head from 'next/head'

import { Opengraph } from '@gunspace/components/opengraph'
import { IdeasView } from '@gunspace/views'

const Ideas = () => {
  <>
    <Head>
      <title>PMG Gunspace - Ideas generator</title>
      <meta name='description' content='PMG Gunspace ideas generator' />
      <Opengraph.Title>Gunspace Ideas Generator</Opengraph.Title>
      <Opengraph.Description>Generate whacky ideas to build a new gun.</Opengraph.Description>
    </Head>
    <IdeasView />
  </>
}

export default Ideas

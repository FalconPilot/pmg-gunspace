import * as React from 'react'

import type { AppProps } from 'next/app'

import { Layout } from '@gunspace/components'

const App = ({ Component, pageProps }: AppProps) =>
  <Layout.Wrapper>
    <Component {...pageProps} />
  </Layout.Wrapper>

export default App

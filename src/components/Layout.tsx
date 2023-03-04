import * as React from 'react'

import Head from 'next/head'

import { globalStyles } from '@gunspace/theme'

import { Flex } from './Flex'
import { Headings } from './Headings'
import { styled } from '@stitches/react'

const Wrapper: React.FC<{
  children: React.ReactElement
}> = ({ children }) => {
  React.useEffect(() => {
    globalStyles()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  )
}

const Header: React.FC<{
  children: string
}> = ({ children }) =>
  <Flex.Col as='header' center>
    <Headings.H1>{children}</Headings.H1>
  </Flex.Col>

const Main: React.FC<{
  children: React.ReactElement
}> = ({ children }) =>
  <Flex.Col center as='main' css={{ gap: '$1' }}>
    {children}
  </Flex.Col>

export const Layout = {
  Header,
  Main,
  Wrapper,
}

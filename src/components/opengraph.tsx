import * as React from 'react'

const Title: React.FC<{
  children: string,
}> = ({ children }) =>
  <meta property='og:title' content={children} />

const Description: React.FC<{
  children: string,
}> = ({ children }) =>
  <meta property='og:description' content={children} />

const URL: React.FC<{
  children: string,
}> = ({ children }) =>
  <meta property='og:url' content={children} />

export const Opengraph = {
  Description,
  Title,
  URL,
}

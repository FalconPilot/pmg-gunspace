import * as React from 'react'

import { globalStyles } from '@gunspace/theme'

export const Layout: React.FC<{
  children: React.ReactElement
}> = ({ children }) => {
  React.useEffect(() => {
    globalStyles()
  }, [])

  return children
}

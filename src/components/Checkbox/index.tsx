import * as React from 'react'

import * as Styled from './styled'
import { Flex } from '../Flex'

export const Checkbox: React.FC<{
  checked: boolean,
  label?: string,
  toggle: () => void,
}> = ({ checked, label, toggle }) =>
  <Flex.Row
    as='label' css={{
      backgroundColor: '$grey',
      padding: '$1',
      borderRadius: '$s',
    }
  }>
    <Styled.Input type='checkbox' checked={checked} onChange={toggle} />
    {label && (
      <Styled.Label>{label}</Styled.Label>
    )}
  </Flex.Row>


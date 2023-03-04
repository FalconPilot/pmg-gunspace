import { Flex } from '@gunspace/components'
import { styled } from '@gunspace/theme'

export const PartCard = styled(Flex.Col, {
  padding: '$1',
  gap: '$1',
  border: '2px solid $grey',
  borderRadius: '$s',
})

export const PartTitle = styled('strong', {
  fontVariant: 'small-caps',
  textAlign: 'center',
})

export const PartValue = styled('span', {
  fontStyle: 'italic',
  textAlign: 'center',
})

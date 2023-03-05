import { styled } from '@gunspace/theme'

export const Button = styled('button', {
  display: 'block',
  padding: '$1',
  color: '$white',
  textDecoration: 'none',
  backgroundColor: '$transparent',
  border: '2px solid $grey',
  borderRadius: '$s',
  transition: '0.1s',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$grey',
  },
})

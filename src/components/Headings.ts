import { styled } from '@gunspace/theme'

const H1 = styled('h1', {
  width: '100%',
  textAlign: 'center',
  fontFamily: '$title',
  fontVariant: 'small-caps',

  '&:before': {
    content: '<',
  },

  '&:after': {
    content: '>',
  },
})

export const Headings = {
  H1,
}

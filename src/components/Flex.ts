import { styled } from '@gunspace/theme'

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  variants: {
    reverse: {
      true: { flexDirection: 'row-reverse' }
    },
    center: {
      vertical: { alignItems: 'center' },
      horizontal: { justifyContent: 'center' },
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
})

const Col = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    center: {
      vertical: { justifyContent: 'center' },
      horizontal: { alignItems: 'center' },
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    reverse: {
      true: { flexDirection: 'column-reverse' }
    },
  },
})

export const Flex = {
  Col,
  Row,
}

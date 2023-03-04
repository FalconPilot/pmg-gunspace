import { globalCss } from './core'

export const globalStyles = globalCss({
  '*,*:before,*:after': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    backgroundColor: '$darkGrey',
    color: '$white',
    fontFamily: '$text',
  },
  'button,input,label': {
    '&:hover': {
      cursor: 'pointer',
      '&:disabled': { cursor: 'not-allowed' },
    },
  }
})

import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      darkGrey: '#333',
      grey: '#555',
      white: '#FFF',
    },
    fonts: {
      text: '"Arial", sans-serif',
      title: '"Arial", sans-serif',
    },
    space: {
      0: 0,
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    radii: {
      xs: '2px',
      s: '4px',
      m: '8px',
      l: '12px',
      xl: '16px',
    },
  },
})
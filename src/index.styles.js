import { css } from '@emotion/core'
import theme from 'utils/theme'

const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: ${theme.fontSizes.md};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.body};
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`

export default globalStyles

import styled from '@emotion/styled'
import theme from 'utils/theme'

export const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`

export const Header = styled.h1`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.lg};
  padding: ${theme.space[5]} ${theme.space[0]};
`

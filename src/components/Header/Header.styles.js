import styled from '@emotion/styled'
import theme from 'theme'

export const HeaderContainer = styled.div`
  padding: ${theme.space[5]} ${theme.space[0]};
  display: flex;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.lg};
`

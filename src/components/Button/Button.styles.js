import styled from '@emotion/styled'
import theme from 'theme'

const ButtonStyled = styled.button`
  color: ${theme.colors.text};
  border-radius: ${theme.radii.base};
  transition: all 0.2s;
  border: ${theme.borders.none};
  padding: ${theme.space[0]} ${theme.space[4]};
  background-color: #ddd;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.light};
  }
  font-size: ${theme.fontSizes.sm};
`

export default ButtonStyled

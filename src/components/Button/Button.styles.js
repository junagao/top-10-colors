import styled from '@emotion/styled'
import theme from 'theme'

const ButtonStyled = styled.button`
  color: ${({ reset }) => (reset ? '#FF4D4F' : theme.colors.text)};
  cursor: pointer;
  border-radius: ${theme.radii.base};
  border: 0;
  border: ${({ reset }) =>
    reset ? `1px solid #FF4D4F` : `1px solid ${theme.colors.secondary}`};
  font-size: ${theme.fontSizes.sm};
  margin-left: ${theme.space[4]};
  padding: ${theme.space[4]};
  outline: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  &:hover {
    color: ${({ reset }) => (reset ? '#FF6E70' : theme.colors.light)};
    background-color: ${({ reset }) =>
      reset ? '#fff' : theme.colors.secondary};
    border: ${({ reset }) =>
      reset ? `1px solid #FF6E70` : `1px solid ${theme.colors.primary}`};
  }
`

export default ButtonStyled

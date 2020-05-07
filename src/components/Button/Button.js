import React from 'react'
import { string, bool, func } from 'prop-types'
import ButtonStyled from './Button.styles'

const Button = ({ text, reset, onClick }) => (
  <ButtonStyled type="button" reset={reset} onClick={onClick}>
    {text}
  </ButtonStyled>
)

Button.propTypes = {
  text: string.isRequired,
  reset: bool,
  onClick: func.isRequired,
}

Button.defaultProps = {
  reset: false,
}

export default Button

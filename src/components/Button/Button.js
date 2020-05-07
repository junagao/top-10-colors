import React from 'react'
import { bool, func } from 'prop-types'
import ButtonStyled from './Button.styles'

const Button = ({ isRandomRating, startRandomRating, stopRandomRating }) =>
  isRandomRating ? (
    <ButtonStyled type="button" onClick={stopRandomRating}>
      stop
    </ButtonStyled>
  ) : (
    <ButtonStyled type="button" onClick={startRandomRating}>
      random rate
    </ButtonStyled>
  )

Button.propTypes = {
  isRandomRating: bool.isRequired,
  startRandomRating: func.isRequired,
  stopRandomRating: func.isRequired,
}

export default Button

import React from 'react'
import { bool, func } from 'prop-types'

const Button = ({ isRandomRating, startRandomRating, stopRandomRating }) =>
  isRandomRating ? (
    <button type="button" onClick={stopRandomRating}>
      stop
    </button>
  ) : (
    <button type="button" onClick={startRandomRating}>
      random rate
    </button>
  )

Button.propTypes = {
  isRandomRating: bool.isRequired,
  startRandomRating: func.isRequired,
  stopRandomRating: func.isRequired,
}

export default Button

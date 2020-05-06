import React from 'react'
import { bool, string, number, func } from 'prop-types'
import StarIcon from './Star.styles'

const Star = ({ id, index, full, onRate }) => {
  const ratingValue = index + 1

  return (
    <StarIcon
      size={20}
      color={full ? `#ffc107` : `#e4e5e9`}
      onClick={() => onRate(id, ratingValue)}
    />
  )
}

Star.propTypes = {
  full: bool.isRequired,
  id: string.isRequired,
  index: number.isRequired,
  onRate: func.isRequired,
}

export default Star

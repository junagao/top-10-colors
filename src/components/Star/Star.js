import React, { useState } from 'react'
import { bool, string, number, func } from 'prop-types'
import StarIcon from './Star.styles'

const Star = ({ id, index, full, onRate, setOverride }) => {
  const [hover, setHover] = useState(false)
  const ratingValue = index + 1

  const handleMouseOver = () => setHover(true)
  const handleMouseOut = () => setHover(false)
  const handleMouseEnter = () => setOverride(index + 1)
  const handleMouseLeave = () => setOverride(null)
  const handleClick = () => {
    setOverride(null)
    onRate(id, ratingValue)
  }

  return (
    <StarIcon
      size={hover ? 22 : 20}
      color={full ? `#ffc107` : `#e4e5e9`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
    />
  )
}

Star.propTypes = {
  id: string.isRequired,
  index: number.isRequired,
  full: bool.isRequired,
  onRate: func.isRequired,
  setOverride: func.isRequired,
}

export default Star

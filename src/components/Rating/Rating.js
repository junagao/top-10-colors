import React, { useState } from 'react'
import { string, number, func } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { Star } from 'components'
import RatingContainer from './Rating.styles'

const Rating = ({ id, rating, totalStars, onRate }) => {
  const [override, setOverride] = useState(null)
  return (
    <RatingContainer>
      {[...Array(totalStars)].map((star, index) => (
        <Star
          key={uuidv4()}
          id={id}
          index={index}
          onRate={onRate}
          full={index < (override || rating)}
          setOverride={setOverride}
        />
      ))}
    </RatingContainer>
  )
}

Rating.propTypes = {
  id: string.isRequired,
  rating: number.isRequired,
  totalStars: number.isRequired,
  onRate: func.isRequired,
}

export default Rating

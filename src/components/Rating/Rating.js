import React from 'react'
import { string, number, func } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { Star } from 'components'
import RatingContainer from './Rating.styles'

const Rating = ({ id, rating, totalStars, onRate }) => {
  return (
    <RatingContainer>
      {[...Array(totalStars)].map((star, starIndex) => (
        <Star
          key={uuidv4()}
          id={id}
          index={starIndex}
          onRate={onRate}
          full={starIndex < rating}
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

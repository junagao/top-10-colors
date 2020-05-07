import { colors } from 'data/data.json'
import {
  GET_COLORS,
  RATE_COLOR,
  RANDOM_RATE_COLOR,
  TOGGLE_RANDOM_RATING,
  RESET_RATINGS,
} from './types'

export const getColors = () => ({
  type: GET_COLORS,
  colors,
})

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  id,
  rating,
})

export const randomRateColor = (colorIndex, rating) => ({
  type: RANDOM_RATE_COLOR,
  colorIndex,
  rating,
})

export const toggleRandomRating = () => ({
  type: TOGGLE_RANDOM_RATING,
})

export const resetRatings = (colors) => ({
  type: RESET_RATINGS,
  colors,
})

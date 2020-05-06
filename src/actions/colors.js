import { colors } from 'data/data.json'
import { GET_COLORS, RATE_COLOR } from './types'

export const getColors = () => ({
  type: GET_COLORS,
  colors,
})

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  id,
  rating,
})

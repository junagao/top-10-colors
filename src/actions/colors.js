import { colors } from 'data/data.json'
import GET_COLORS from './types'

const getColors = () => ({
  type: GET_COLORS,
  colors,
})

export default getColors

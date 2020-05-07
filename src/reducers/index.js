import {
  GET_COLORS,
  RATE_COLOR,
  RANDOM_RATE_COLOR,
  TOGGLE_RANDOM_RATING,
  RESET_RATINGS,
} from '../actions/types'

const initialState = {
  colors: [],
  isRandomRating: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COLORS:
      return { ...state, colors: action.colors }
    case RATE_COLOR: {
      const updatedColors = state.colors.map((color) =>
        color.id !== action.id ? color : { ...color, rating: action.rating },
      )
      return { ...state, colors: updatedColors }
    }
    case RANDOM_RATE_COLOR: {
      const updatedColors = state.colors.map((color, index) =>
        index !== action.colorIndex
          ? color
          : { ...color, rating: action.rating },
      )
      return { ...state, colors: updatedColors }
    }
    case TOGGLE_RANDOM_RATING:
      return { ...state, isRandomRating: !state.isRandomRating }
    case RESET_RATINGS: {
      const updatedColors = state.colors.map((color) => ({
        ...color,
        rating: 0,
      }))
      return { ...state, colors: updatedColors }
    }
    default:
      return state
  }
}

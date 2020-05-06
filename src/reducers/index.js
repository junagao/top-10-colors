import { GET_COLORS, RATE_COLOR } from '../actions/types'

const initialState = {
  colors: [],
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
    default:
      return state
  }
}

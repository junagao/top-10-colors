import GET_COLORS from '../actions/types'

const initialState = {
  colors: [],
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COLORS:
      return { ...state, colors: action.colors }
    default:
      return state
  }
}

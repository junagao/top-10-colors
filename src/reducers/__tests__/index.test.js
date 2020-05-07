import reducer from 'reducers'
import {
  GET_COLORS,
  RATE_COLOR,
  RANDOM_RATE_COLOR,
  TOGGLE_RANDOM_RATING,
  RESET_RATINGS,
} from 'actions/types'

describe('colors reducer', () => {
  let initialState

  const colorsMock = [
    {
      id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
      name: 'orange',
      hex: '#FFA500',
      rgb: 'rgb(255, 165, 0)',
      rating: 3,
    },
    {
      id: 'b0e3fab2-0477-4e28-b2e0-c2281a21d09b',
      name: 'purple',
      hex: '#800080',
      rgb: 'RGB(128, 0, 128)',
      rating: 5,
    },
  ]

  beforeEach(() => {
    initialState = {
      colors: [],
      isRandomRating: false,
    }
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_COLORS', () => {
    const action = {
      type: GET_COLORS,
      colors: colorsMock,
    }

    const expectedState = {
      colors: colorsMock,
      isRandomRating: false,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle RATE_COLOR', () => {
    const action = {
      type: RATE_COLOR,
      id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
      rating: 1,
    }

    const expectedColors = [
      {
        id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
        name: 'orange',
        hex: '#FFA500',
        rgb: 'rgb(255, 165, 0)',
        rating: 1,
      },
      {
        id: 'b0e3fab2-0477-4e28-b2e0-c2281a21d09b',
        name: 'purple',
        hex: '#800080',
        rgb: 'RGB(128, 0, 128)',
        rating: 5,
      },
    ]

    const expectedState = {
      colors: expectedColors,
      isRandomRating: false,
    }

    expect(reducer({ ...initialState, colors: colorsMock }, action)).toEqual(
      expectedState,
    )
  })

  it('should handle RANDOM_RATE_COLOR', () => {
    const action = {
      type: RANDOM_RATE_COLOR,
      colorIndex: 1,
      rating: 5,
    }

    const expectedColors = colorsMock.map((color, index) =>
      index !== action.colorIndex ? color : { ...color, rating: action.rating },
    )

    const expectedState = {
      colors: expectedColors,
      isRandomRating: false,
    }

    expect(reducer({ ...initialState, colors: colorsMock }, action)).toEqual(
      expectedState,
    )
  })

  it('should handle TOGGLE_RANDOM_RATING', () => {
    const action = {
      type: TOGGLE_RANDOM_RATING,
    }

    const expectedState = {
      colors: [],
      isRandomRating: true,
    }

    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle RESET_RATINGS', () => {
    const action = {
      type: RESET_RATINGS,
    }

    const expectedColors = [
      {
        id: 'fc352593-c91d-4cf6-b689-7478ee2b61c8',
        name: 'orange',
        hex: '#FFA500',
        rgb: 'rgb(255, 165, 0)',
        rating: 0,
      },
      {
        id: 'b0e3fab2-0477-4e28-b2e0-c2281a21d09b',
        name: 'purple',
        hex: '#800080',
        rgb: 'RGB(128, 0, 128)',
        rating: 0,
      },
    ]

    const expectedState = {
      colors: expectedColors,
      isRandomRating: false,
    }

    expect(reducer({ ...initialState, colors: colorsMock }, action)).toEqual(
      expectedState,
    )
  })
})

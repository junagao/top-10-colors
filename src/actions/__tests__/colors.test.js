import {
  getColors,
  rateColor,
  randomRateColor,
  toggleRandomRating,
  resetRatings,
} from 'actions/colors'
import {
  GET_COLORS,
  RATE_COLOR,
  RANDOM_RATE_COLOR,
  TOGGLE_RANDOM_RATING,
  RESET_RATINGS,
} from 'actions/types'
import { colors } from 'data/data.json'

describe('colors actions', () => {
  const mockColors = colors

  describe('getColors', () => {
    it('has the correct type', () => {
      const action = getColors()
      expect(action.type).toEqual(GET_COLORS)
    })

    it('had the correct payload', () => {
      const action = getColors()
      expect(action.colors).toEqual(mockColors)
    })
  })

  describe('rateColor', () => {
    it('has the correct type', () => {
      const action = rateColor()
      expect(action.type).toEqual(RATE_COLOR)
    })

    it('had the correct payload', () => {
      const action = rateColor('sd3f3-576jl', 4)
      expect(action.id).toEqual('sd3f3-576jl')
      expect(action.rating).toEqual(4)
    })
  })

  describe('randomRateColor', () => {
    it('has the correct type', () => {
      const action = randomRateColor()
      expect(action.type).toEqual(RANDOM_RATE_COLOR)
    })

    it('had the correct payload', () => {
      const action = randomRateColor(8, 1)
      expect(action.colorIndex).toEqual(8)
      expect(action.rating).toEqual(1)
    })
  })

  describe('toggleRandomRating', () => {
    it('has the correct type', () => {
      const action = toggleRandomRating()
      expect(action.type).toEqual(TOGGLE_RANDOM_RATING)
    })
  })

  describe('resetRatings', () => {
    it('has the correct type', () => {
      const action = resetRatings()
      expect(action.type).toEqual(RESET_RATINGS)
    })

    it('had the correct payload', () => {
      const action = resetRatings(mockColors)
      expect(action.colors).toEqual(mockColors)
    })
  })
})

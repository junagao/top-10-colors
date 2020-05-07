import React from 'react'
import { arrayOf, shape, func, bool } from 'prop-types'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import {
  getColors,
  rateColor,
  randomRateColor,
  toggleRandomRating,
} from 'actions/colors'
import { Header, ColorList } from 'components'
import AppContainer from './App.styles'

let ratingTimer = null
class App extends React.Component {
  componentDidMount() {
    const { getColors } = this.props
    getColors()
  }

  handleRating = (id, rating) => {
    const { rateColor } = this.props
    rateColor(id, rating)
  }

  startRandomRating = () => {
    const { randomRateColor, toggleRandomRating } = this.props
    toggleRandomRating()

    const minDelay = 500
    const maxDelay = 1000

    const randomIndex = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    const randomDelay = () => randomIndex(minDelay, maxDelay)

    const randomRating = () => randomIndex(1, 5)
    const randomColorIndex = () => randomIndex(0, 9)

    ratingTimer = setInterval(
      () => randomRateColor(randomColorIndex(), randomRating()),
      randomDelay(),
    )
  }

  stopRandomRating = () => {
    const { toggleRandomRating } = this.props
    clearInterval(ratingTimer)
    toggleRandomRating()
  }

  render() {
    const { colors, isRandomRating } = this.props

    const sortedColors = colors.sort((a, b) => b.rating - a.rating)

    return (
      <AppContainer>
        <Header
          isRandomRating={isRandomRating}
          startRandomRating={this.startRandomRating}
          stopRandomRating={this.stopRandomRating}
        />
        <ColorList
          colors={sortedColors}
          onRate={this.handleRating}
          onHover={this.handleHovering}
        />
      </AppContainer>
    )
  }
}

App.propTypes = {
  colors: arrayOf(shape({})).isRequired,
  getColors: func.isRequired,
  rateColor: func.isRequired,
  isRandomRating: bool.isRequired,
  randomRateColor: func.isRequired,
  toggleRandomRating: func.isRequired,
}

const mapStateToProps = (state) => ({
  colors: state.colors,
  isRandomRating: state.isRandomRating,
})

const mapDispatchToProps = {
  getColors,
  rateColor,
  randomRateColor,
  toggleRandomRating,
}

export default hot(connect(mapStateToProps, mapDispatchToProps)(App))

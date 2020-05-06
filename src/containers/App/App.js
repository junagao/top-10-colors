import React from 'react'
import { arrayOf, shape, func } from 'prop-types'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import { getColors, rateColor } from 'actions/colors'
import { Header, ColorList } from 'components'
import AppContainer from './App.styles'

class App extends React.Component {
  componentDidMount() {
    const { getColors } = this.props
    getColors()
  }

  handleRating = (id, rating) => {
    const { rateColor } = this.props
    rateColor(id, rating)
  }

  render() {
    const { colors } = this.props

    const sortedColors = colors.sort((a, b) => b.rating - a.rating)

    return (
      <AppContainer>
        <Header />
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
}

const mapStateToProps = (state) => ({
  colors: state.colors,
})

const mapDispatchToProps = {
  getColors,
  rateColor,
}

export default hot(connect(mapStateToProps, mapDispatchToProps)(App))

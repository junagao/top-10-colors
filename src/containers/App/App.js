import React from 'react'
import { arrayOf, shape, func } from 'prop-types'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import getColors from 'actions/colors'
import { Header, ColorList } from 'components'
import AppContainer from './App.styles'

class App extends React.Component {
  componentDidMount() {
    const { getColors } = this.props
    getColors()
  }

  render() {
    const { colors } = this.props

    return (
      <AppContainer>
        <Header />
        <ColorList colors={colors} />
      </AppContainer>
    )
  }
}

App.propTypes = {
  colors: arrayOf(shape({})).isRequired,
  getColors: func.isRequired,
}

const mapStateToProps = (state) => ({
  colors: state.colors,
})

const mapDispatchToProps = {
  getColors,
}

export default hot(connect(mapStateToProps, mapDispatchToProps)(App))

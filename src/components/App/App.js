import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ColorList } from 'components'
import { Container, Header } from './App.styles'

const App = () => (
  <Container>
    <Header>Top 10 favorite colors</Header>
    <ColorList />
  </Container>
)

export default hot(App)

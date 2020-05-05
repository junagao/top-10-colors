import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ColorList } from 'components'

const App = () => (
  <div>
    <h1>Top 10 favorite colors</h1>
    <ColorList />
  </div>
)

export default hot(App)

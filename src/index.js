import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'containers'
import store from 'store'
import { Global } from '@emotion/core'
import globalStyles from './index.styles'

render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <App />
  </Provider>,
  document.getElementById('app'),
)

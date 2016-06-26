import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'

let store = createStore(store => store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

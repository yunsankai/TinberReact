 'use strict'

import {
  StatusBar,
  Platform,
  Text,
} from 'react-native'
import React, {
  Component
} from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import logger from './middleware/logger'
import thunk from 'redux-thunk'

import App from './App'


const createStoreWithMW = applyMiddleware(logger, thunk)(createStore)
const store = createStoreWithMW(reducers)

export default class Root extends Component {

  componentDidMount () {
    // if (Platform.OS === 'ios') {
    //   StatusBar.setHidden(true)
    // }
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

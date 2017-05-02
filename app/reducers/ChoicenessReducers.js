'use strict'

import createReducer from '../utils/create-reducer'

import {CHOICENESS} from '../constant'

/* First navigatore of each tab named [tab]Index */
const initialState = {
  data: {
    data: {
      banner:[],
    }

  }
}

const actionHandler = {
  [CHOICENESS.INFO]: (state, action) => {
    return Object.assign({}, state, {
      data: action.data,
    })
  }
}

export default createReducer(initialState, actionHandler)

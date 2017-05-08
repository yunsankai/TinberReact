'use strict'

import createReducer from '../utils/create-reducer'

import {TBGOLBALPLAYER} from '../constant'

/* First navigatore of each tab named [tab]Index */
const initialState = {
  data:{
  	playerState:'stop',//pause, playing, error, other,
    playerInfo:{
	  	//programInfo.
	}
  }
}

const actionHandler = {
  [TBGOLBALPLAYER.PLAY]: (state, action) => {
    return Object.assign({}, state, {
      data: action.data,
    })
  }
}

export default createReducer(initialState, actionHandler)

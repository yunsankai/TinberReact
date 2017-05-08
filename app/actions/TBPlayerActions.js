'use strict'

// import Channel from '../channel'
import { TBGOLBALPLAYER } from '../constant'


/**
 * Get info of game general
 */
const playWithUrl = (url,playerInfo) => {
  return (dispatch, getStore) => {
    return dispatch({
            type: TBGOLBALPLAYER.PLAY,
            data: {playerState:'play',playerInfo:playerInfo}
          })
  }
}
const pausePlayer = () => {
  return (dispatch, getStore) => {
    return dispatch({
            type: TBGOLBALPLAYER.PLAY,
            data: {playerState:'pause'}
          })
  }
}
export default {
  playWithUrl,
  pausePlayer
}


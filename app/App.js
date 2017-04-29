'use strict'

import {
  View,
  Text,
  StyleSheet,
  PropTypes,
  PixelRatio,
} from 'react-native' 
import React, {
  Component,
} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import applicationActions from './actions/application'
import gameActions from './actions/game'
import playerActions from './actions/player'
import teamActions from './actions/team'

import HomeNavigationBar from './components/HomePage/HomeNavigationBar'
import Swiper from 'react-native-swiper';
import HomeActivity from './components/HomePage/HomeActivity'
import {MACROS} from './constant'
import ChoicenessActivity from './components/HomePage/ChoicenessActivity'

// import Game from './Game'
// import Player from './Player'
// import Team from './Team'

// export default class App extends Component {

//   constructor (props) {
//     super(props)
//     this.state = {
//       tab: null
//     }
//   }

//   componentWillReceiveProps (props) {
//     const {application} = props
//     this.setState({
//       tab: application.tab
//     })
//   }

//   render () {
//     const {tab} = this.state
//     const {game, player, team, gameActions, playerActions, teamActions} = this.props

//     return (
//       <View style={styles.container}>
//         {tab === 'game' &&
//           <Game {...game} actions={gameActions} />
//         }
//         {tab === 'players' &&
//           <Player {...player} actions={playerActions} />
//         }
//         {tab === 'teams' &&
//           <Team {...team} actions={teamActions} />
//         }
//       </View>
//     )
//   }
// }

// App.propTypes = {
//   game: PropTypes.object,
//   player: PropTypes.object,
//   team: PropTypes.object,
//   gameActions: PropTypes.object,
//   playerActions: PropTypes.object,
//   teamActions: PropTypes.object
// }

class App extends Component{
    render(){
      return(
        <View>
          <HomeNavigationBar />
          <Swiper style={styles.wrapper} showsButtons={false}>
            <ChoicenessActivity style={styles.slide1}>
            </ChoicenessActivity>
            <HomeActivity style={styles.slide2}>
            </HomeActivity>
            <HomeActivity style={styles.slide3}>
            </HomeActivity>
          </Swiper>
        </View>
      )
    }
}
// var screenHight = 

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper:{
    hegiht:MACROS.ScreenWidth,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})



export default connect(state => {
  return {
    application: state.application,
    game: {
      live: state.live,
      over: state.over,
      unstart: state.unstart,
      standing: state.standing,
      application: state.application
    },
    player: {
      playerList: state.playerList,
      playerLoaded: state.playerLoaded
    },
    team: {
      team: state.team,
      playerLoaded: state.playerLoaded
    }
  }
}, dispatch => {
  return {
    gameActions: bindActionCreators(Object.assign({}, applicationActions, gameActions), dispatch),
    playerActions: bindActionCreators(Object.assign({}, applicationActions, playerActions), dispatch),
    teamActions: bindActionCreators(Object.assign({}, applicationActions, playerActions, teamActions), dispatch)
  }
})(App)

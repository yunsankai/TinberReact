'use strict'

import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Image,
  TouchableHighlight,
  InteractionManager,
  Platform,
  Dimensions,
} from 'react-native'

import React, {
  Component,
} from 'react'


export default class ChoicenessActivity extends Component {
  constructor (props) {
    super(props)
    // const {game, date} = props.route
    
    this.state = {
      selectedIndex: 0,
    }
    // this.date = date
    // this.gameId = game.id
    // this.timeout = null
  }

  componentDidMount () {
    const {actions} = this.props
   
  }

  componentWillReceiveProps (props) {
    const {actions} = props
    
  }


  render () {
    console.log("创建一次了，哈哈");
    return(
        <View style={{backgroundColor:this.props.style.backgroundColor,height:'100%'}}>
          
          <Text style={{paddingTop:100}}>
            首个页面就是这个东西
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  // Navigation
  nav: {
    height: 40,
    paddingTop: 5,
    paddingLeft: 5
  },
  backNav: {
    height: 40,
    position: 'relative',
    left: -8,
    width: 50
  },
  // Sum container
  sumContainer: {
    flex: 5,
    flexDirection: 'row'
  },
  // Team
  team: {
    alignItems: 'center',
    flex: 1
  },
  teamLogo: {
    width: 75,
    height: 75
  },
  teamCity: {
    color: '#fff',
    fontSize: 11,
    marginTop: 2
  },
  teamName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'relative',
    top: 0
  },
  standing: {
    color: '#fff',
    marginTop: 5
  },
  // Info
  gameInfo: {
    alignItems: 'center',
    flex: 1.5,
    flexDirection: 'column'
  },
  infoProcess: {
    color: '#fff',
    fontSize: 13,
    marginTop: 18,
    marginBottom: 3
  },
  processUnstart: {
    fontSize: 19,
    position: 'relative',
    top: 9
  },
  infoScorePanel: {
    flex: 1,
    flexDirection: 'row'
  },
  infoScoreBlock: {
    alignItems: 'center',
    flex: 1,
    width: 60
  },
  infoScore: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '200',
    flex: 9,
    fontSize: 35
  },
  infoSide: {
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    flex: 1,
    marginTop: 6
  },
  infoDivider: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 7,
    marginLeft: 15,
    marginRight: 15,
    width: 2 / PixelRatio.get(),
    height: 55
  },
  // Segment
  segment: {
    height: 35,
    flexDirection: 'row'
  },
  segPanel: {
    flex: 1
  },
  segPanelActive: {
    backgroundColor: '#fff'
  },
  segPanelInactive: {
    backgroundColor: '#EBEBEB'
  },
  segPanelInner: {
    flexDirection: 'column',
    flex: 1
  },
  segTeam: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 12,
    lineHeight: 22
  },
  segTeamActive: {
    color: '#222'
  },
  segTeamInactive: {
    color: '#7F7F7F'
  },
  // Indicator
  indicatorView: {
    flex: 13,
    flexDirection: 'column'
  },
  indicator: {
    alignSelf: 'center',
    height: 36,
    justifyContent: 'center',
    position: 'relative',
    top: 100
  }
})

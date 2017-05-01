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


export default class SearchActivity extends Component {
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
        <View style={{backgroundColor:'#8fe8a8',height:'100%'}}>
          
          <Text style={{paddingTop:100,color:'#ea453b',fontSize:29,backgroundColor:'#888888'}}>
            这他妈是搜索
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
})

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

export default class HomeActivity extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      selectedIndex: 0,
    }

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
        <View>
          
          <Text style={{paddingTop:100}}>
            这是后面的页.
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

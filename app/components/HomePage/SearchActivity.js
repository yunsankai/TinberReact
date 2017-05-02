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


  goBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#ea453b'}}>Hello from Home</Text>
        <TouchableHighlight onPress={ () => this.goBack() } style={ styles.button }>
            <Text>GO TO ABOUT</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => this.navigate('Login', 'This is the login page!') } style={ styles.button }>
            <Text>GO TO Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
  },
  button: {
    height: 50,
    width:100,
    backgroundColor: '#ededed',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
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

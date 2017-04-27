'use strict'

import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Image,
  TouchableHighlight,
  InteractionManager,
  Platform
} from 'react-native'

import React, {
  Component,
} from 'react'

export default class HomeNavigationBar extends Component{


  render(){
    const titlesArray = ["🔍","精选","电台","主播","分类","我的"];
    const titleViews = titlesArray.map(function (title, key) {
      // body...
      return(
        <Text style={styles.titles} key={key} >
          {title}
        </Text>
      )
    })
    return(
      <View style={styles.baseNav}>
        {
          Platform.OS === 'ios'?
          <View style={styles.statusBar}></View>:
          <View></View>
        }
        <View style={styles.nav}>
          {titleViews}
        </View>

      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  // Navigation
    baseNav:{
      backgroundColor:'#ea453b'
    },
    statusBar:{
      height:20,
    },
    nav: {
      height: 44,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },

    titles: {
      color:'#ffffff',
      fontSize:17,
      flex:1,
      alignSelf:'center',
      textAlign:'center',
    },

  })






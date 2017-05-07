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
  constructor (props) {
    super(props)

    // this.state = {
    //   selectedIndex: 1,

    // }

  }

  _onPressText(key){
    //发送action。
      const {selectItemFunc} = this.props;
      selectItemFunc(key);
  }

  //接收state变动后的变化
  // componentWillReceiveProps (props) {
  //   const {application} = props
  //   var selectedIndex = application.tab;
  //   if (selectedIndex != this.state.selectedIndex) {
  //     this.setState({
  //       selectedIndex:selectedIndex
  //     })
  //   }
  // }


  render(){
    const titlesArray = ["🔍","精选","电台","主播","分类","我的"];
    // const {selectItemFunc} = this.props;
    // var selectedIndex = this.state.selectedIndex;
    const {application} = this.props

    const titleViews = titlesArray.map(function (title, key) {
      // body...
      return(
        <TouchableHighlight style={{flex:1,height:'100%',justifyContent:'center',alignItems:'center'}}
        key={key} 
        onPress={()=>this._onPressText(key)}
        >
          <Text 
            style={styles.titles,{color:(application.tab===key)?'#000000':'#ffffff'}}
            >
            {title}
          </Text>
          
        </TouchableHighlight>
      )
    }.bind(this))
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

HomeNavigationBar.propTypes = {
  selectItemFunc: React.PropTypes.func,
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
      height:20,
      alignSelf:'center',
      textAlign:'center',
    },

})






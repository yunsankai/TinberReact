'use strict'

import {
  View,
  Text,
  StyleSheet,
  PropTypes,
  PixelRatio,
  Navigator,
} from 'react-native' 

import React, {
  Component,
} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import applicationActions from './actions/application'

import HomeNavigationBar from './components/HomePage/HomeNavigationBar'
import Swiper from 'react-native-swiper';
import HomeActivity from './components/HomePage/HomeActivity'
import {MACROS} from './constant'
import ChoicenessActivity from './components/HomePage/ChoicenessActivity'
import SearchActivity from './components/HomePage/SearchActivity'

class MainActivity extends Component{

  constructor (props) {
    super(props)
    this.state = {
      selectNavigationItemIndex: 0,
    }

  }
  _onMomentumScrollEnd(){
    applicationActions.changeTab(self.swiper.index)
  }

  _onNavigationSelectItemChange(selectItemIndex){
    
    switch (selectItemIndex) {
      case 0:
        var searchActivity = new SearchActivity;
        this.props.navigator.push(searchActivity);
       break;
      default:
        if (this.swiper && this.swiper.index != selectItemIndex){
         this.swiper.scrollBy(selectItemIndex,true);
         applicationActions.changeTab(self.swiper.index);
        }
      break;
    }
  }

  render(){
      return(
        <View>
          <HomeNavigationBar 
          selectItemFunc={(selectItemIndex)=>this._onNavigationSelectItemChange(selectItemIndex)}/>

          <Swiper style={styles.wrapper}
                  ref={(c)=>this.swiper = c} 
                  showsButtons={false}
                  onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                  loop={false}
                  bounces={true}>
            <ChoicenessActivity style={styles.slide1}>
            </ChoicenessActivity>
            <HomeActivity style={styles.slide2}>
            </HomeActivity>
            <HomeActivity style={styles.slide3}>
            </HomeActivity>
            <HomeActivity style={styles.slide3}>
            </HomeActivity>
            <HomeActivity style={styles.slide3}>
            </HomeActivity>
          </Swiper>
        </View>
      )
    }
}



class App extends Component{
  renderScene (route, navigator) {
    if (route.component) {
      const Component = route.component
      return <Component navigator={navigator} route={route} {...this.props} />

     }
  }
  render () {
    return (
      <Navigator
        initialRoute={{
          name: 'MainActivity',
          component: MainActivity
        }}
        // navigationBar={<NavigatorBar />}
        configureScene={() => ({
          ...Navigator.SceneConfigs.FloatFromRight
        })}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper:{
    // hegiht:MACROS.ScreenWidth,
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
    application: state.application
  }
}, dispatch => {
  return {
    applicationActions: bindActionCreators(Object.assign({}, applicationActions), dispatch)
  }
})(App)




'use strict'

import {
  View,
  Text,
  StyleSheet,
  PropTypes,
  PixelRatio,
  Navigator,
  InteractionManager,
  Dimensions,
  TouchableHighlight,
  StatusBar,
  Platform
} from 'react-native' 

import React, {
  Component,
} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import applicationActions from './actions/application'
import ChoicenessActions from './actions/ChoicenessActions'

import HomeNavigationBar from './components/HomePage/HomeNavigationBar'
import Swiper from 'react-native-swiper';
import HomeActivity from './components/HomePage/HomeActivity'
import ChoicenessActivity from './components/HomePage/ChoicenessActivity'
import SearchActivity from './components/HomePage/SearchActivity'
import macro from './utils/macro'
import ScrollableTabView from 'react-native-scrollable-tab-view';


class MainActivity extends Component{

  constructor (props) {
    super(props)
    // this.state = {
    //   tab: 1,
    // }

  }
  // componentWillReceiveProps (props) {
  //   const {application} = props
  //   this.setState({
  //     tab: application.tab
  //   })
  // }

  _onMomentumScrollEnd(e, state, context){
    const {applicationActions} = this.props;
    applicationActions.changeTab(state.index+1)
  }

  _onNavigationSelectItemChange(selectItemIndex){
    
    switch (selectItemIndex) {
      case 0:
      InteractionManager.runAfterInteractions(() => {
        // ...耗时较长的同步的任务...
        this.props.navigator.push({
          name: 'SearchActivity',
          component: SearchActivity
        });
      });
        
       break;
      default:
        const {applicationActions,application} = this.props;
        if (application.tab != selectItemIndex){
         //计算偏移量，
         var toIndex = selectItemIndex-application.tab;
         this.swiper.scrollBy(toIndex,true);
         applicationActions.changeTab(application.tab)
        }
      break;
    }
  }

  render(){
      return(
        <View>
      {/*//底部播放条*/}
          <HomeNavigationBar 
          selectItemFunc={(selectItemIndex)=>this._onNavigationSelectItemChange(selectItemIndex)}
          {...this.props}/>
      {/* activities */}
          <Swiper style={styles.wrapper}
                  ref={(c)=>this.swiper = c} 
                  showsButtons={false}
                  onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                  loop={false}
                  bounces={true}>
            <ChoicenessActivity style={styles.slide1}  {...this.props}>
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
      const Component = route.component;
      const statusBarH = StatusBar.currentHeight;
      if (Platform.OS === 'ios') {statusBarH=0};
      return  (
        <View>
          <Component navigator={navigator} route={route} 
          style={{width:macro.getScreenWidth(),height:macro.getScreenHeight()}}{...this.props} />
          <View style={{position:'absolute',top:macro.getScreenHeight()-50-statusBarH,
            width:macro.getScreenWidth(),height:50,backgroundColor:'#ea453b',zIndex:9999}}>
            <Text>
              这个是底部播放条。
            </Text>
          </View>
        </View>
      )
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
            ...Navigator.SceneConfigs.PushFromRight
          })}
          renderScene={this.renderScene.bind(this)}
        >
        </Navigator>
    )
  }
//   render() {
//     const routes = [
//       {title: 'First Scene', index: 0},
//       {title: 'Second Scene', index: 1},
//     ];
//     return (
//       <Navigator
//         initialRoute={routes[0]}
        
//         renderScene={(route, navigator) =>
//           <View>
//             <TouchableHighlight style={{width:macro.getScreenWidth(),height:macro.getScreenWidth(),backgroundColor:'#ea453b'}}
//                  onPress={() => {
//                   if (route.index === 0) {
//                     navigator.push(routes[1]);
//                   } else {
//                     navigator.pop();
//                   }
//                  }}>
//               <Text>Hello {route.title}!</Text>
//             </TouchableHighlight>

//           </View>
//         }
//         style={{padding: 100}}
//       />
//     );
// }

    
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
    application: state.application,
    choicenessPageInfo: state.choicenessPageInfo
  }
}, dispatch => {
  return {
    applicationActions: bindActionCreators(Object.assign({}, applicationActions), dispatch),
    ChoicenessActions: bindActionCreators(Object.assign({},ChoicenessActions),dispatch)
  }
})(App)




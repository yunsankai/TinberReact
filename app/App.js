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
import TBPlayerActions from './actions/TBPlayerActions'

import HomeNavigationBar from './components/HomePage/HomeNavigationBar'
import Swiper from 'react-native-swiper';
import HomeActivity from './components/HomePage/HomeActivity'
import ChoicenessActivity from './components/ChoicenessActivity/ChoicenessActivity'
import SearchActivity from './components/SearchActivity/SearchActivity'
import macro from './utils/macro'
import Video from 'react-native-video'

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
      const passProps = route.passProps?route.passProps:{};
      
      return  (
          <Component navigator={navigator} route={route} {...passProps} {...this.props} />
      )
     }
  }
  
  render () {
    var statusBarH = StatusBar.currentHeight;
    if (Platform.OS === 'ios') {statusBarH=0};
    const {playerInfo} = this.props;
    //暂停、播放指令
    const playerState = playerInfo.data.playerState;
    //节目信息。
    const playerDetailInfo = playerInfo.data.playerInfo;

    return (
        <View style={{width:macro.getScreenWidth(),height:macro.getScreenHeight()}}>
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
            style={{width:'100%',height:'100%'}}
          >
          </Navigator>
          <View style={{position:'absolute',top:macro.getScreenHeight()-50-statusBarH,
            width:macro.getScreenWidth(),height:50,backgroundColor:'#ea453b',zIndex:9999}}>
              {playerState === 'play' ? 
                <Video source={{uri: playerDetailInfo.program_file}}   // Can be a URL or a local file.
                   ref={(ref) => {
                     this.player = ref
                   }}                                      // Store reference
                   rate={1.0}                              // 0 is paused, 1 is normal.
                   volume={1.0}                            // 0 is muted, 1 is normal.
                   muted={false}                           // Mutes the audio entirely.
                   paused={false}                          // Pauses playback entirely.
                   resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                   repeat={true}                           // Repeat forever.
                   playInBackground={false}                // Audio continues to play when app entering background.
                   playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                   ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                   progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                   // onLoadStart={this.loadStart}            // Callback when video starts to load
                   // onLoad={this.setDuration}               // Callback when video loads
                   // onProgress={this.setTime}               // Callback every ~250ms with currentTime
                   // onEnd={this.onEnd}                      // Callback when playback finishes
                   // onError={this.videoError}               // Callback when video cannot be loaded
                   // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   // onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                   style={styles.backgroundVideo} />
                   : <View />
              }

              <Text>
                这个是底部播放条。
              </Text>
          </View>
        </View>
    )
  }

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper:{
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    marginBottom:50,
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width:100,
    height:50,
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
    playerInfo:state.playerInfo,
    choicenessPageInfo: state.choicenessPageInfo
  }
}, dispatch => {
  return {
    applicationActions: bindActionCreators(Object.assign({}, applicationActions), dispatch),
    ChoicenessActions: bindActionCreators(Object.assign({},ChoicenessActions),dispatch),
    TBPlayerActions: bindActionCreators(Object.assign({},TBPlayerActions),dispatch)
  }
})(App)




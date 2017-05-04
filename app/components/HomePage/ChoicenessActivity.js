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
  ScrollView,
} from 'react-native'

import React, {
  Component,
} from 'react'
import Swiper from 'react-native-swiper';


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
    const {ChoicenessActions} = this.props
    ChoicenessActions.getFirstPageAction();
  }

  shouldComponentUpdate(nextProps, nextState){
    //防止多次刷新，提高效率。
      const {choicenessPageInfo} = nextProps;

      if (this.currentChoicenessPageInfo != choicenessPageInfo) {
        return true;
      }
      return false;
  }


  render () {
    console.log("创建一次了，哈哈");
    const {choicenessPageInfo} = this.props;
    const data = choicenessPageInfo.data.data;
    const ScreenWidth = Dimensions.get('window').width;
    const screenScale = ScreenWidth/320;
    this.currentChoicenessPageInfo = choicenessPageInfo;
    const swipImageViews = data.banner.map(function (value, index) {
      // body...
        return <Image key={index} source={{uri:value.image_url}} 
        style={{width:ScreenWidth, height:140*screenScale}}/>
    });
    return(
        <View>
          <ScrollView >
            
            {/*banner*/}
            <Swiper ref={(c)=>this.swiper = c} 
                    showsButtons={false}
                    loop={true}
                    width={ScreenWidth}
                    height={140*screenScale}>
              {swipImageViews}
            </Swiper>
            
            {/*banner*/}
            

            <Text style={{paddingTop:100,color:'#ea453b',fontSize:17}}>
              {JSON.stringify(choicenessPageInfo.data.data.banner)}
            </Text>

          </ScrollView>
          
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

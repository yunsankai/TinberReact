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


export default class TBRadioCell extends Component{
	constructor (props) {
    	super(props)
    	
  }
  //radio_id: "JSdIW2Sg42KFNlO",
// live_stream: "http://pili-live-hls.qiniu.tinberfm.com/live-yuanyu/iremember.m3u8",
// radio_name: "蹇溅閬揊M",
// radio_number: "iCar",
// start_time: "20:00",
// end_time: "21:00",
// program_name: "蹇溅閬�",
// program_describe: "瑕嗙洊鍏ㄥ浗鐨勬苯杞﹁妭鐩紝浣犳湁杞︾敓娲荤殑鏈€浣充紮浼�",
// album_id: "hs8OcOsEfMyS9DK",
// program_list_id: "",
// image_url: "http://image.tinberfm.com//uploadnew/499101467048719.jpg",
// radio_img_url: "http://image.tinberfm.com//uploadnew/499101467048719.jpg",
// area_short_name: "鍖椾含",
// ts_diffence: 2201,
// program_type: 1,
// order_num: 1,
// radio_audience: 72990,
// event_tip: ""

  render(){

      const {radio} = this.props;
      if (!radio) {return <View />}
      return(
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={styles.headImage}
            source={{uri:radio.radio_img_url}}/>
            <View style={styles.rightBgView}>
              <Text style={styles.radioTitle}>
                {radio.radio_name}
              </Text>
              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.radioDescribe}>
                {radio.program_describe}
              </Text>
              <View style={styles.radioAudienceNumberView}>
                <Image source={require('../../img/headset_gray.png')}
                style={{width:15,height:15}}/>
                <Text style={styles.radioAudienceNumber}>
                  收听人数：{String(radio.radio_audience)}
                </Text>
              </View>
            </View>
          </View>
        )

    }
}

const styles = StyleSheet.create({
  headImage: {
    height:110,
    width:110,
    marginLeft:15
  },
  rightBgView: {
    marginLeft:15,
    justifyContent:'space-between',
    height:100,
    marginRight:140
  },
  radioTitle: {
    fontSize:18,
    color:'#333333',

  },
  radioDescribe: {
    color:'#999999',
  },
  radioAudienceNumberView:{
    flexDirection:'row'
  },
  radioAudienceNumber: {
    color:'#999999',
  }
})












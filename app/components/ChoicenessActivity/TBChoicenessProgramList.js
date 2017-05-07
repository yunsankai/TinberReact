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


export default class TBChoicenessProgramList extends Component{
	constructor (props) {
    	super(props)
    	
  }
  //     program_recommend: [
// {
// category_id: "hffn8b7oRocxxVQ",
// category_index: "1",
// category_name: "鏈夊０灏忚",
// category_image: "http://image.tinberfm.com//uploadnew/103551488261240_big.png",
// data: [
// {
// program_id: "2390722",
// album_id: "21194",
// program_name: "涓浗鐨勭灏旀懇鏂拰鍗庣敓浼氭摝鍑轰粈涔堢伀鑺憋紵",
// program_describe: "銆愬叏闆嗗畬鏈€戜竴涓槸涓轰簡鐢熻濂旀尝鐨勬姤绀惧皬缂栵紝涓€涓槸涓嶅伐浣滃嵈鍥涘鏃呰鐨勬€汉銆傛湁浜虹О浠栦滑鐨勭粍鍚堟槸涓浗鐨勭灏旀懇鏂拰鍗庣敓锛岃繕鏈変汉璇翠粬浠殑缁忓巻鍫缇庛€婅亰鏂嬪織寮傘€嬨€傝儐璇嗚繃浜虹殑浠栦滑绌胯浜庡彜鑰佺殑涔℃潙鍜屽枾鍤ｇ殑閮藉競涔嬮棿锛屾帰璁垮悇鑹插厜鎬檰绂荤殑璇¤安涓栫晫鈥︹€︺€€銆€婕旀挱锛氫綍鍏�",
// program_host: "",
// program_img: "http://image.tinberfm.com//uploadnew/183001493712303.jpg",
// program_type: "2",
// program_file: "http://od.qingting.fm/vod/00/00/0000000000000000000026122277_24.m4a",
// program_index: "1",
// radio_number: "",
// radio_id: ""
// },

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



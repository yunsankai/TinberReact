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
  FlatList,
  TouchableOpacity,
} from 'react-native'

import React, {
  Component,
} from 'react'

import TBRadioCell from './TBRadioCell'
import AlbumDetailActivity from '../AlbumDetailActivity/AlbumDetailActivity'
import SearchActivity from '../SearchActivity/SearchActivity'

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

  _onPressFastEntry(object){

  }

  _onPressProgramItem(item){
    this.props.navigator.push({
        name: 'AlbumDetailActivity',
        component: AlbumDetailActivity,
        passProps: {
            program: item,
        }
    });
  }
  _onPressCatagory(catagory){

  }

  render () {
    console.log("创建一次了，哈哈");
    const {choicenessPageInfo} = this.props;
    const data = choicenessPageInfo.data.data;
    const ScreenWidth = Dimensions.get('window').width;
    const screenScale = ScreenWidth/320;
    this.currentChoicenessPageInfo = choicenessPageInfo;
    const swipImageViews = data.banner.map(function (value, index) {
      // body...value.image_url
        return (  <Image source={{uri:value.image_url}} 
            style={{width:ScreenWidth, height:140*screenScale,flex:1}}
            key={index}/>
        )
    });
    const iconWidth = 60;
    const fastEntry = data.fast_entry.map(function (value, index) {
      // body...
        return (<TouchableHighlight key={index} onPress={()=>this._onPressFastEntry(value)}
          style={{flex:1}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri:value.icon}} 
                style={{width:iconWidth, height:iconWidth}}
                />
              <Text>
                {value.title}
              </Text>
            </View>
        </TouchableHighlight>)
    }.bind(this));

    const radio = data.local_radio_recommend;

    const programListViews = data.program_recommend.map(function (value, index) {
      // body...
        return (<View key={index}>
            <TouchableOpacity onPress={()=>this._onPressCatagory(value)}
            style={{justifyContent:'center',alignItems:'center',height:50}}>
              <Text style={{color:'#000000'}} fontSize={18} fontWeight='bold'>
              {value.category_name}</Text>
            </TouchableOpacity>
            <FlatList
            style={{marginLeft:15,marginRight:15}}
            data={value.data}
            horizontal={true}
            keyExtractor={ (item, index) => 
              (index.toString())}
            numColumns={1}
            refreshing={false}
            renderItem={(info) => (
              <TouchableOpacity onPress={() => this._onPressProgramItem(info.item)}
              style={{justifyContent:'center',alignItems:'center',width:120,height:140}}
              >
                <Image source={{uri:info.item.program_img}} style={{width:110,height:110}}/>
                <Text style={{color:'#666666'}} numberOfLines={2}>{info.item.program_describe}</Text>
              </TouchableOpacity>
            )}
            shouldItemUpdate={(prev, next) => (
                prev.item !== next.item
            )}
          />
          </View>)
    }.bind(this));



    return(
        <View>
          <ScrollView >
            
            {/*banner*/}
            <ScrollView ref = {(c)=>this.swiper = c}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{width:ScreenWidth, height:140*screenScale}}
            >
              {swipImageViews}

            </ScrollView>
            
            
            {/*四个跳转链接*/}
            <View style={{width:ScreenWidth,height:iconWidth+30,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems:'center',}}>
              {fastEntry}
            </View>
            

          {/*推荐单个电台*/}
            <TBRadioCell radio={radio} style={{width:ScreenWidth,height:130,backgroundColor:'#333333'}}/>


          {/*推荐专辑、电台等列表。*/}
          <View>
            {programListViews}
          </View>




          {/*底部视图，间隔底部使用*/}
          <View style={{height:500}}/>
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

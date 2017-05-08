'use strict';

import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView,
  ListView,
} from 'react-native';
// import { NativeModules } from 'react-native';
import RequestAlbumInfo from './requestAlbumInfo'

// var GiftedListView = require('react-native-gifted-listview');

// var RNMethodReceiver = NativeModules.RNMethodReceiver;
var getAlbumInfoRequest = new RequestAlbumInfo();
var screenScale = Dimensions.get('window').width/375.0;
var screenWidth = Dimensions.get('window').width;
var _pageIndex = 1;
var _listData = Array();

export default class AlbumDetailActivity extends Component {

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      albumModel:null,
      isCollected:false,
      showProgramList:false,
      showSelectSetView:false,
      listSortOrder:1,
      dataSource: ds,

    }
  }

  componentWillMount() {
    var {program} = this.props;
    getAlbumInfoRequest.getAlbumInfo(program.program_id,program.album_id,program.program_type,function(albumData) {
      // body...
      console.log("response data is "+albumData);
      albumData.data.album_type = program.program_type;
      if(albumData.data != null){
        this.setState({
        albumModel:albumData.data
      })
      }
    }.bind(this));
    getAlbumInfoRequest.getAlbumCollectState(program.program_id,program.program_type,program.album_id,function (response) {
      // body...
      var returnCD = response.returnCD;
      if (returnCD == "1") {
        if (response.data.album_state == "true") {
          this.setState({
            isCollected:true
          })
        }
        else{
          this.setState({
            isCollected:false
          })
        }
      }
    }.bind(this))
    getAlbumInfoRequest.getProgramInfo(program.program_id, program.program_type, function (response) {
      // body...
      var returnCD = response.returnCD;
      if (returnCD == "1") {
        const {TBPlayerActions} = this.props;
        TBPlayerActions.playWithUrl('play', response.data);
      }
    }.bind(this));
  }  
  _onPressBackButton() {
      // RNMethodReceiver.addEvent('popToNative', '4 Privet Drive, Surrey', null);
    }
    _onPressShareButton (){
      var {program} = this.props;
      // RNMethodReceiver.addEvent('shareBtnClicked', '4 Privet Drive, Surrey', program);
    }
    _onPressCollectBtn (){

    //没登录，跳转到登录界面。
     // RNMethodReceiver.getCustomIdWithcallBack(function (response) {
          // var customer_id = response;
          // if (customer_id == null || customer_id == "") {
          //   RNMethodReceiver.pushToLoginView();
          // }
          // else{
            var albumInfo = this.state.albumModel;
            getAlbumInfoRequest.updateAlbumCollectState(albumInfo.album_id,albumInfo.album_type,this.state.isCollected?"del":"add",function (responseJson) {
              // body...
              var collectedState = false;
              if (this.state.isCollected) {
                collectedState = false;
              }
              else{
                collectedState = true;
              }
              this.setState({
                isCollected:collectedState
              })
            }.bind(this))
          // }

     // }.bind(this))
    }
    _onPressDownloadBtn() {

    }

    _showProgramList(show){
      this.setState({
        showProgramList:show
      })
    }

  _onFetchProgramList(page,callback) {
    //传入的program
    var {program} = this.props;
    //检索，列表数据
    getAlbumInfoRequest.getProgramList(program.album_id,program.program_type,program.program_id,page,1,function (responseJson) {
      // body...
        if (responseJson.returnCD == "1") {
          var rows = responseJson.data;
          
          callback(true,rows);
        }//no more data
        else if(responseJson.returnCD == "-1"){ 
          // callback(rows, {
          //     allLoaded: true, // the end of the list is reached
          //   });
        }
        else{
          //暂不做处理。
          // callback(null);
        }
    }.bind(this))
    
  }
  _onFetchMoreProgramList(page){
    this._onFetchProgramList(page,function (success,rows) {
      // body...
      if (success) {
        _listData = _listData.concat(rows);
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(_listData)
        })
      }
      else{
        _pageIndex--;
      }
    }.bind(this));
  }
  _onRefreshProgramListWithSet(page){
    this._onFetchProgramList(page,function (success,rows) {
      // body...
      if (success) {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(rows)
          })
      }
    }.bind(this));
  }
  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page, callback, options) {
    //传入的program
    var {program} = this.props;
    //检索，列表数据
    getAlbumInfoRequest.getProgramList(program.album_id,program.program_type,program.program_id,page,1,function (responseJson) {
      // body...
        if (responseJson.returnCD == "1") {
          var rows = responseJson.data;
          callback(rows);
        }//no more data
        else if(responseJson.returnCD == "-1"){ 
          callback(rows, {
              allLoaded: true, // the end of the list is reached
            });
        }
        else{
          //暂不做处理。
          callback(null);
        }
    });
    
  }

  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPressRow(rowData) {
    console.log(rowData+' pressed');
  }

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPressRow(rowData)}
      >
        <Text>{rowData.program_name}</Text>
      </TouchableHighlight>
    );
  }
  _paginationFetchingView() { 
    return (
            <View>
               <Text>Loading...</Text> 
            </View> 
          ); 
  }
  //选集
  _onPressSelectSet(){
    console.log("fuck this state is "+this.state.albumModel.page.keys);
    if (this.state.showSelectSetView) {
      this.setState({
        showSelectSetView:false
      });
    }else{
      this.setState({
        showSelectSetView:true
      });
    }
  }
  _onPressSetWithPage(page){
    this._onRefreshProgramListWithSet(page);
    this.setState({
      showSelectSetView:false
    })
  }
  _onPressListSortOrder(){

  }

  render() {
    
    var {program} = this.props;
    return (
      <View style={{flexDirection:'column',justifyContent:'center'}}>
          {/*导航栏*/}
          <View style={{marginTop:0,backgroundColor:'powderblue',height:64}}>
            {/*去掉电池栏的父视图*/}
              <View style={styles.navigation}>
              {/*返回按钮*/}
                <TouchableHighlight style={styles.navigation_back} onPress={this._onPressBackButton}>
                  {<Image source={{uri: "IconBack"}} style={{width:44,height:44,resizeMode:'center'}}></Image> }
                </TouchableHighlight>
                <Text style={styles.navigation_title} numberOfLines={1}>
                  {program.program_name}
                </Text>
                <TouchableHighlight style={{position:'absolute', right:0, top:0, width:44, height:44}} onPress={this._onPressShareButton.bind(this)}>
                  {<Image source={{uri: "ShareIcon"}} style={{width:44,height:44,resizeMode:'center'}}></Image> }
                </TouchableHighlight>
             </View>             
          </View>
        {/*专辑详情信息，*/}

        {this.state.albumModel && 
        
        <View style={{backgroundColor:'white'}}>
            <View style={styles.program_detail_bgview}>
            <Image style={styles.album_icon} source={{uri:this.state.albumModel.album_logo}}>
            </Image>
            {/*文字模块*/}
            <View style={styles.album_detail_text}>
              <Text style={{fontSize:17,color:'#333333'}} numberOfLines={1}>
              {this.state.albumModel.album_name}

              </Text>
              <Text style={{fontSize:14,color:'#999999',marginTop:6}} numberOfLines={1}>
              {(this.state.albumModel.album_host==null)?"主播：暂无":"主播：" + this.state.albumModel.album_host}
            
              </Text>
              <Text style={{fontSize:14,color:'#999999',marginTop:6}} numberOfLines={1}>
              {"分类：" + this.state.albumModel.category_tip}
            
              </Text>
              </View>
              {/*收藏 和 下载 两个按钮*/}

              <View style={{position:'absolute',bottom:20,left:17,right:17, height:40, justifyContent:'space-between', flexDirection:'row'}}>
                  
                <TouchableHighlight style={this.state.isCollected?styles.collected_style_btn:styles.collect_btn} onPress={this._onPressCollectBtn.bind(this)}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:40}}>
                      <Image
                      style={{width:23,height:23,resizeMode:'center'}}
                      source={{uri:this.state.isCollected?'FavoriteHeard':'FavoriteHeard_Red'}}
                      />
                      <Text style={{color:this.state.isCollected?'#666666':'#ea453b',fontSize:17}}>{this.state.isCollected?"已收藏":"收藏"}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.collect_btn} onPress={this._onPressDownloadBtn.bind(this)}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:40}}>
                        <Image
                          style={{width:23,height:23,resizeMode:'center'}}
                          source={{uri:'batch_dl_red'}}
                        />
                        <Text style={{color:'#ea453b',fontSize:17}}>批量下载</Text>
                     </View>
                </TouchableHighlight>
              </View>
        </View>

        {/*阴影效果*/}
        <View style={{height:20,backgroundColor:'#eeeeee'}} />


        {/*专辑介绍、节目详情模块*/}
        <View style={{height:48,flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
          <Text style={{fontSize:15,flex:1,height:48,color:this.state.showProgramList?'#666666':'#ea453b',textAlign:'center',lineHeight:48}} onPress={()=>this._showProgramList(false)}>
            专辑介绍
          </Text>
          <View style={{width:1,height:18,backgroundColor:"#bbbbbb"}}/>
          <Text style={{fontSize:15,flex:1,height:48,color:this.state.showProgramList?'#ea453b':'#666666',textAlign:'center',lineHeight:48}} onPress={()=>this._showProgramList(true)}>
            节目详情
          </Text>
        </View>
       {/*集数，和选集信息。*/} 

        {(this.state.albumModel.show_episodes == "1") && 
          <View style={{height:40,flexDirection:'column'}}>
          <Text style={{fontSize:15,flex:1,height:40,color:'#666666',textAlign:'left'}}>
            共{this.state.albumModel.total}集
          </Text>
          <TouchableHighlight style={{width:60,position:'absolute',right:75,top:0,height:40}} onPress={this._onPressSelectSet.bind(this)}>
            <View style={{flexDirection:'row'}}>
              <Image source={{uri:'select_set'}} style={{width:14,height:16}}/>
              <Text>选集</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{width:60,position:'absolute',right:15,top:0,height:40}} onPress={this._onPressListSortOrder}>
            <View style={{flexDirection:'row'}}>
              <Text>排序</Text>
              <Image source={{uri:this.state.listSortOrder?'album_down_order':'album_up_order'}} style={{width:14,height:16}}/>
            </View>

          </TouchableHighlight>
          </View>
        }
       {/*节目列表，*/}
          <View style={{backgroundColor:'yellow',height:150}}>
          {/*选集*/}
          
              <ScrollView scrollsToTop={false} style={{flex: 1,position:'absolute',top:0,left:0,zIndex:9999,width:screenWidth,backgroundColor:'yellow',height:this.state.showSelectSetView?120:0}} contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start'}}>
               { Object.keys(this.state.albumModel.page).map((pageValue,index) => <View style={{width:50,height:20,marginRight:5,marginLeft:5,marginTop:5,marginBottom:5}} key={index}>
                    <Text style={{borderWidth:1,borderColor:'#555555',borderRadius:5}} onPress={()=>this._onPressSetWithPage(this.state.albumModel.page[pageValue])}>
                      {pageValue}
                    </Text>
                  </View>
                )}
              </ScrollView>
            

            <View style={{backgroundColor:'powderblue',height:this.state.showProgramList?150:0}}>
            {/*
                <GiftedListView
              rowView={this._renderRowView.bind(this)}
              onFetch={this._onFetch.bind(this)}
              firstLoader={false} // display a loader for the first fetching
              pagination={true} // enable infinite scrolling using touch to load more
              refreshable={false} // enable pull-to-refresh for iOS and touch-to-refresh for Android
              withSections={false} // enable sections
              paginationFetchingView={this._paginationFetchingView}
              customStyles={{
                paginationView: {
                  backgroundColor: '#eee',
                },
              }}
              enableEmptySections={true}
              refreshableTintColor="blue"
            />
            */}
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRowView.bind(this)}
              onEndReached={()=>this._onFetchMoreProgramList(_pageIndex++)}
              onEndReachedThreshold={-10}
              // refreshControl={
              //   <RefreshControl
              //     refreshing={this.state.refreshing}
              //     onRefresh={this._onRefresh.bind(this)}
              //   />
              // }
              // renderHeader={}
            />

          </View>
          <View style={{backgroundColor:'powderblue',height:this.state.showProgramList?0:150}}>
            <Text color='#333333'>
              {this.state.albumModel?this.state.albumModel.album_describe:"暂无"}
            </Text>
          </View>

        </View>

      </View>
          


      }


      

      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    height: 44,
  },
  collect_btn:{
    width:(screenWidth-17*2-15)/2,
    height:40,
    borderColor:'#ea453b',
    borderWidth:1,
    borderRadius:5,
  },
  collected_style_btn:{
    width:(screenWidth-17*2-15)/2,
    height:40,
    borderColor:'#666666',
    borderWidth:1,
    borderRadius:5,
  },
  album_detail_text:{
    position:'absolute',
    left:15+120*screenScale+25,
    marginTop:20,
    width:screenWidth-(15+120*screenScale+25),
  },
  album_icon:{
    position:'absolute',
    top:20,
    left:15,
    width:120*screenScale,
    height:120*screenScale,
    shadowColor:'#000000',
    shadowOffset:{height:10,width:10},
    shadowRadius:100,
    shadowOpacity:1.0,
  },
  program_detail_bgview:{
    height:212,
    backgroundColor:'white',
    flexDirection:'row',
    // justifyContent:'center'

  },
  navigation:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'powderblue',
    marginTop:20,
    height:44,
  },
  navigation_title:{
    fontSize: 17,
    width:screenWidth-44*2,
  },
  navigation_back:{
    position: 'absolute',
    left:0,
    top:0,
    width:44,
    height:44,
  },
  
});

// Module name
// AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
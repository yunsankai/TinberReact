'use strict'
// import React from 'react'
import { NativeModules } from 'react-native';

var RNMethodReceiver = NativeModules.RNMethodReceiver;

var baseUrl = "http://apinew.tinberfm.com/interface/";
var baseUrlNew = "http://apinew2.tinberfm.cn/index.php/";
const address = {
	albumInfoPath:"album/getAlbumInfo",
	programList:"program/getOverProgram",
  getAlbumCollectedState:"customer/getFavoriteProgram",
  updateAlbumCollectedState:"/album/collect-album",
}

export default class RequestAlbumInfo {
  
  getRequestBodyWithParmas(obj){
      let formData = new FormData();
      Object.keys(obj).map(function (value,key) {
          formData.append(value,obj[value]);
      });
    return formData;
  }
	//{/*获取专辑详情接口*/}
	 getAlbumInfo (program_id, album_id, album_type, callBack){
	  console.log("albumInfoPath is " + baseUrl + address.albumInfoPath);

      fetch(baseUrl+address.albumInfoPath, {
  			method: 'POST',
  			body: this.getRequestBodyWithParmas({'program_id':program_id,'album_id':album_id,'album_type':album_type})
	   }).then((response) => response.json())
      .then((responseJson) => {
         callBack(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
	}

 
  getAlbumCollectState(program_id,program_type,album_id, callBack){
    //先获取用户的customId
    // RNMethodReceiver.getCustomIdWithcallBack(function (response) {
      // body...
      var customer_id = "";
          if (customer_id != null || customer_id != "") {
            console.log("getAlbumCollectState is " + baseUrl + address.getAlbumCollectedState);
            fetch(baseUrl + address.getAlbumCollectedState,{
              method: 'POST',
              body:this.getRequestBodyWithParmas({'customer_id':customer_id,'program_id':program_id,'program_type':program_type,'album_id':album_id})
            }).then((response) => response.json())
            .then((responseJson) => {
              callBack(responseJson);
            })
            .catch((error) =>{
              console.error(error);
            });
          }
    // }.bind(this))
  }

  updateAlbumCollectState(album_id,album_type,collect_type,callBack){
      //先获取用户的customId
    // RNMethodReceiver.getCustomIdWithcallBack(function (response) {
      // body...
      var customer_id = "";
          console.log("updateAlbumCollectState is " + baseUrlNew + address.updateAlbumCollectedState);
          fetch(baseUrlNew + address.updateAlbumCollectedState,{
            method: 'POST',
            body:this.getRequestBodyWithParmas({'customer_id':customer_id,'album_type':album_type,'album_id':album_id,'collect_type':collect_type})
          }).then((response) => response.json())
          .then((responseJson) => {
            callBack(responseJson);
          })
          .catch((error) =>{
            console.error(error);
          });
    // }.bind(this))
  }

  getProgramList(program_list_id,program_type,program_id,page,order,callBack){
    console.log("programList is " + baseUrl + address.programList);

      fetch(baseUrl+address.programList, {
        method: 'POST',
        body: this.getRequestBodyWithParmas({'page':page,'order':order,'program_id':program_id,'program_type':program_type,'program_list_id':program_list_id})
     }).then((response) => response.json())
      .then((responseJson) => {
         callBack(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }






}












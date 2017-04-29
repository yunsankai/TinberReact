'use strict'

import {
  Dimensions,
} from 'react-native'

 const ScreenWidth = Dimensions.get('window').width;
 const ScreenHeight = Dimensions.get('window').height;
 const ScreenScale = Dimensions.get('window').scale;



export const MACROS = {
	ScreenWidth:ScreenWidth,
	ScreenHeight:ScreenHeight,
	ScreenScale:ScreenScale
}
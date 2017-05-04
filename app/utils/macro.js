'use strict'

import {
  Dimensions,
} from 'react-native'

const getScreenWidth = () => {
	return Dimensions.get('window').width;
}

const getScreenHeight = () => {
	return Dimensions.get('window').height;
}

const getScreenScale = () => {
	return Dimensions.get('window').scale;
}

export default {
  	getScreenWidth,
	getScreenHeight,
	getScreenScale
}

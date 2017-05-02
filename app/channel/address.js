'use strict'

const baseUrl = "http://apinew.tinberfm.com/interface/";
const newBaseUrl = "http://apinew2.tinberfm.cn/index.php/";

const address = {
  /**
   * 获取首页所有数据
   */
  firstPageGeneral: () => {
    return newBaseUrl + `first-page/get-first-page`
  },
  /**
   * All game of the date
   * @params gameDate: {String} {Format: yearmonthdate}
   * @example gameDate: 20151125
   */
  gameGeneral: (gameDate) => {
    return `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${gameDate}/games.json`
  },
}



export default address

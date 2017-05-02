'use strict'

const producer = {

  gameFirstPageData: (res) => {
    return res
  },
  /*
  {
returnCD: 1,
message: "鎴愬姛!",
data: {

banner: [
{
banner_url: "",
image_url: "http://image.tinberfm.com//banner/201705/364511493692797.jpg",
event_id: "sbZynWIx0FfTFIg",
order: "6",
create_datetime: "2017-05-02 10:40:28",
radio_id: "",
check_login: "0",
banner_name: "鑻变鸡闊充箰鍓嶆部",
type: "2",
album_type: "2"
},
],

fast_entry: [
{
entry_id: "",
type: "1",
title: "涓€鍏冭喘杞�",
icon: "http://image.tinberfm.com//uploadnew/buycar@3x.png",
entry_url: "http://m.tinberfm.com/index.php/oneyuan/index?shop_id=1"
},
],

local_radio_recommend: {
radio_id: "JSdIW2Sg42KFNlO",
live_stream: "http://pili-live-hls.qiniu.tinberfm.com/live-yuanyu/iremember.m3u8",
radio_name: "蹇溅閬揊M",
radio_number: "iCar",
start_time: "20:00",
end_time: "21:00",
program_name: "蹇溅閬�",
program_describe: "瑕嗙洊鍏ㄥ浗鐨勬苯杞﹁妭鐩紝浣犳湁杞︾敓娲荤殑鏈€浣充紮浼�",
album_id: "hs8OcOsEfMyS9DK",
program_list_id: "",
image_url: "http://image.tinberfm.com//uploadnew/499101467048719.jpg",
radio_img_url: "http://image.tinberfm.com//uploadnew/499101467048719.jpg",
area_short_name: "鍖椾含",
ts_diffence: 2201,
program_type: 1,
order_num: 1,
radio_audience: 72990,
event_tip: ""
},

program_recommend: [
{
category_id: "hffn8b7oRocxxVQ",
category_index: "1",
category_name: "鏈夊０灏忚",
category_image: "http://image.tinberfm.com//uploadnew/103551488261240_big.png",
data: [
{
program_id: "2390722",
album_id: "21194",
program_name: "涓浗鐨勭灏旀懇鏂拰鍗庣敓浼氭摝鍑轰粈涔堢伀鑺憋紵",
program_describe: "銆愬叏闆嗗畬鏈€戜竴涓槸涓轰簡鐢熻濂旀尝鐨勬姤绀惧皬缂栵紝涓€涓槸涓嶅伐浣滃嵈鍥涘鏃呰鐨勬€汉銆傛湁浜虹О浠栦滑鐨勭粍鍚堟槸涓浗鐨勭灏旀懇鏂拰鍗庣敓锛岃繕鏈変汉璇翠粬浠殑缁忓巻鍫缇庛€婅亰鏂嬪織寮傘€嬨€傝儐璇嗚繃浜虹殑浠栦滑绌胯浜庡彜鑰佺殑涔℃潙鍜屽枾鍤ｇ殑閮藉競涔嬮棿锛屾帰璁垮悇鑹插厜鎬檰绂荤殑璇¤安涓栫晫鈥︹€︺€€銆€婕旀挱锛氫綍鍏�",
program_host: "",
program_img: "http://image.tinberfm.com//uploadnew/183001493712303.jpg",
program_type: "2",
program_file: "http://od.qingting.fm/vod/00/00/0000000000000000000026122277_24.m4a",
program_index: "1",
radio_number: "",
radio_id: ""
},
]
}
],


recommend_content_list: [
{
h5_url: "http://m.tinberfm.com/interaction/graphic/index?graphic_id=85",
image_url: "http://image.tinberfm.com//uploadnew/896161493697596.jpg",
radio_id: "QyEvAoUoqsyorjX",
title: "缁堜簬绛夊埌浣犫€斺€斿叏鍥界櫨瀹堕煶涔愮數鍙版渶鐑挱姒滃崟鏂伴矞鍑虹倝锛�",
introduction: "浣滀负涓€涓泦浼楀浼樿川鐢靛彴浜庝竴浣撶殑Super App锛屼笉鍒╃敤鐐硅繖鏍风殑浼樺娍鍋氫竴涓嚜宸辩殑姒滃崟宀備笉鏄お娴垂浜嗭紵",
publish_time: "2017-05-02 18:45:46"
},
],

live_radio_random: [
{
radio_id: "dc4n4TO0AYxeZOE",
live_stream: "http://pili-live-hls.qiniu.tinberfm.com/live-yuanyu/bdjjgb.m3u8",
radio_name: "淇濆畾缁忔祹骞挎挱",
radio_number: "FM99.7",
start_time: "",
end_time: "",
program_name: "鏆傛棤鑺傜洰淇℃伅",
program_describe: "鏆傛棤鑺傜洰淇℃伅",
album_id: "111111",
program_list_id: "",
image_url: "http://image.tinberfm.com//uploadnew/193021469589953.jpg",
radio_img_url: "http://image.tinberfm.com//uploadnew/193021469589953.jpg",
area_short_name: "娌冲寳",
ts_diffence: 0,
program_type: 1,
order_num: 1,
radio_audience: 12218
},
],

recommend_radio_list: [
{
radio_id: "Y3jSq3PkuGZj8eg",
live_stream: "http://live53.vojs.cn/4TaHTeL/800/live.m3u8",
radio_name: "姹熻嫃浜ら€氬箍鎾�",
radio_number: "FM101.1",
start_time: "20:00",
end_time: "21:00",
program_name: "浜ゅ箍鏅氱彮杞�",
program_describe: "鏆傛棤鑺傜洰淇℃伅",
album_id: "QHeiz78GEtFGARn",
program_list_id: "",
image_url: "http://image.tinberfm.com//uploadnew/988221493113525.jpg",
radio_img_url: "http://image.tinberfm.com//uploadnew/988221493113525.jpg",
area_short_name: "姹熻嫃",
ts_diffence: 2201,
program_type: 1,
order_num: 2,
radio_audience: 16328
},
],

hot_attention: {
category_id: "YJTOX3yS4WNpN98",
category_index: "8",
category_name: "鑴卞彛绉€",
category_image: "http://image.tinberfm.com//uploadnew/794671488261320_big.png",
data: [
{
program_id: "WrxPib5bnbwOVVe",
album_id: "15756",
program_name: "銆婁汉姘戠殑鍚嶄箟銆嬮噷鍝釜鐢风浣犳渶鐖憋紵",
program_describe: "銆愬彲鍑″€惧惉銆�",
program_host: "",
program_img: "http://image.tinberfm.com//uploadnew/702021493708752.jpg",
program_type: "2",
program_file: "http://od.qingting.fm/m4a/58feb2947cb8917260d77654_7201521_64.m4a?u=382&channelId=82158&programId=6999968",
program_index: "1",
radio_number: "",
radio_id: ""
},
]
},

buy_car: true
}
}
  */
  /**
   * return {live: [], unstart: [], over: []}
   */
  gameGeneral: (res) => {
    let result = {
      unstart: [],
      live: [],
      over: []
    }
    let item

    res['sports_content']['games']['game'].forEach((game, index) => {
      item = {
        id: game.id,
        home: {},
        visitor: {},
        detail: {
          loaded: false,
          data: {}
        }
      }

      const sides = ['home', 'visitor']
      sides.forEach(key => {
        item[key]['id'] = game[key]['id']
        item[key]['team'] = game[key]['team_key']
        item[key]['score'] = game[key]['score']
      })

      const process = game['period_time']
      switch (parseInt(process.game_status, 10)) {
        case 1:
          // Unstart
          item.type = 'unstart'
          item.date = process.period_status
          result.unstart.push(item)
          break
        case 2:
          // Live
          item.type = 'live'
          let game_clock
          if (process.game_clock) {
            game_clock = parseInt(process.game_clock.split(':')[0], 10) < 10 ? '0' + process.game_clock : process.game_clock
          }
          item.process = {
            time: game_clock || 'End',
            quarter: 'Q' + process.period_value
          }
          result.live.push(item)
          break
        case 3:
          // Over
          item.type = 'over'
          result.over.push(item)
          break
        default:
          return
      }
    })

    return result
  },

  /**
   * @return {type, home: {players: {Array}, team, score}, visitor: {<=same}, process: {time, quarter}}
   * @example player
        assists: "1"
        blocks: "1"
        field_goals_attempted: "6"
        field_goals_made: "0"
        first_name: "Garrett"
        fouls: "1"
        free_throws_attempted: "2"
        free_throws_made: "1"
        jersey_number: "17"
        last_name: "Temple"
        minutes: "17"
        on_court: "1"
        person_id: "202066"
        player_code: "garrett_temple"
        plus_minus: "-4"
        points: "1"
        position_full: "Guard"
        position_short: "G"
        rebounds_defensive: "2"
        rebounds_offensive: "0"
        seconds: "12"
        starting_position: ""
        steals: "3"
        team_turnovers: ""
        three_pointers_attempted: "4"
        three_pointers_made: "0"
        turnovers: "0"
   */
  
}

export default producer

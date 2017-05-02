'use strict'

import address from './address'
import producer from './producer'

export default class Channel {

  constructor (options) {
    this.options = options
  }
  getFirstPage (){
    const gen_url = address.firstPageGeneral()
    return window.fetch(gen_url)
      .then(res => res.json())
      .then(data => {
        const allGames = producer.gameFirstPageData(data);
        console.log("choiceness data is "+allGames);
        return allGames
      })
  }
  getGameGeneral (year, month, date) {
    const gen_url = address.gameGeneral(`${year}${month}${date}`)
    return window.fetch(gen_url)
      .then(res => res.json())
      .then(data => {
        const allGames = producer.gameGeneral(data)
        if (allGames.live.length + allGames.unstart.length + allGames.over.length === 0) {
          return this.getGameGeneral(year, month, parseInt(date, 10) + 1)
        }
        allGames.gameDate = `${year}-${month}-${date}`
        return allGames
      })
  }

  
}

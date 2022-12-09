const starter = require('../crawler/starter')
const { addSlider } = require('../sql/bottom-slider')
const dbHandle = require('../utils/db-handle')

class BottomSliderController {

  addSlider() {
    starter({
      file: 'bottom-slider',
      sql: addSlider,
      cb(slider, sql, connection) {
        slider.forEach(item => {
          connection.query(sql(item), (err) => {
            if (err) throw err
          })
        })
        
        connection.end()
      },
      dbHandle
    })
  }
}

module.exports = new BottomSliderController()
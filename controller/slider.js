const starter = require('../crawler/starter')
const { addSlider } = require('../sql/slider')
const dbHandle = require('../utils/db-handle')

class SliderController {

  addSlider() {
    starter({
      file: 'slider',
      sql: addSlider,
      cb(slider, sql, connection) {
        slider.forEach((item) => {
          if (!item.video) item.video = ''

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

module.exports = new SliderController()
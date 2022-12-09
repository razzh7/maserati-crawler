const starter = require('../crawler/starter')
const { addHeader } = require('../sql/header')
const dbHandle = require('../utils/db-handle')

class HeaderController {

  addHeader() {
    starter({
      file: 'header',
      sql: addHeader,
      dbHandle
    })
  }
}

module.exports = new HeaderController()
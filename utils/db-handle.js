const { createConnection } = require('../config/mysql')

async function dbHandle(data, sql, cb) {
  const connection = createConnection()
  connection.connect()

  if (Array.isArray(data)) {
    cb(data, sql, connection)
  } else {
    connection.query(sql(data), (err) => {
      if (err) throw err
    })
    connection.end()
  }
}

module.exports = dbHandle
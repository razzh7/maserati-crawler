const { createConnection } = require('../config/mysql')

async function dbHandle(data, sql) {
  const connection = createConnection()
  connection.connect()

  await connection.query(sql, (err) => {
    if (err) throw err
  })
  
  connection.end()
}

module.exports = dbHandle
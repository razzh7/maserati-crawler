const crawler = require('./crawler')
const { createConnection } = require('../config/mysql')

async function getHeader() {
  const header = await crawler.launch({
    callback() {
      const $ = window.$
      const $el = $('.header-section')
      const model = $el.find('.models').text().trim()
      const brand = $el.find('.maserati-menu-firstlevel-brand').text().trim()
      const ownership = $el.find('.maserati-menu-firstlevel-ownership').text().trim()

      return {
        model,
        brand,
        ownership
      }
    }
  })

  const sql = `
    INSERT INTO header (id, model, brand, ownership)
    VALUES
    (
      ${null},
      '${header.model}',
      '${header.brand}',
      '${header.ownership}'
    );
  `
  const connection = createConnection()
  connection.connect()

  await connection.query(sql, (err) => {
    if (err) throw err
  })
  
  connection.end()
  return header
}

module.exports = getHeader
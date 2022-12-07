const crawler = require('./crawler')
const { createConnection } = require('../config/mysql')

async function bottomSilder() {
  const silder = await crawler.launch({
    callback() {
      const $ = window.$
      const silder = $('.stories-carousel-slider .slide')
      const data = []
      silder.each((index, item) => {
        const el = $(item)
        const info = {
          label: el.find('.textLabel').text().trim(),
          subTitle: el.find('.subtitle').text().trim(),
          imgUrl: el.find('.slide-image-item').prop('src'),
          link: el.find('a').prop('href')
        }

        if (index !== 3) {
          data.push(info)
        }
        else if (index === 3) {
          data.push({
            ...info,
            subTitle: el.find('.slide-content-text .title').text().trim(),
            imgUrl: el.find('.slide-details-image-item').prop('src')
          })
        }
      })

      return data
    }
  })
  console.log('silder', silder)
  const connection = createConnection()
  connection.connect()

  silder.forEach(item => {
    connection.query(sql(item), (err) => {
      if (err) throw err
    })
  })

  connection.end()

  return silder
}

function sql({label, subTitle, imgUrl, link}) {
  return `
  INSERT INTO silder2 
  (id, label, subTitle, imgUrl, link)
  VALUES
  (
    ${null},
    '${label}',
    '${subTitle}',
    '${imgUrl}',
    '${link}'
  )
`
}

module.exports = bottomSilder
const crawler = require('./crawler')
const { createConnection } = require('../config/mysql')

async function bottomSilder() {
  const slider = await crawler.launch({
    callback() {
      const $ = window.$
      const slider = $('.stories-carousel-slider .slide')
      const data = []
      slider.each((index, item) => {
        const el = $(item)
        const info = {
          slideLabel: el.find('.textLabel').text().trim(),
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

  const connection = createConnection()
  connection.connect()

  slider.forEach(item => {
    connection.query(sql(item), (err) => {
      if (err) throw err
    })
  })

  connection.end()

  return slider
}

function sql({slideLabel, subTitle, imgUrl, link}) {
  return `
  INSERT INTO slider2 
  (id, slideLabel, subTitle, imgUrl, link)
  VALUES
  (
    ${null},
    '${slideLabel}',
    '${subTitle}',
    '${imgUrl}',
    '${link}'
  )
`
}

module.exports = bottomSilder
const crawler = require('./crawler')
const { createConnection } = require('../config/mysql')

async function getBanner() {
  const banner = await crawler.launch({
    callback() {
      const $ = window.$
      const $slide = $('.slick-track .slick-slide:not(.slick-cloned)')
      const data = []
  
      $slide.each((index, item) => {
        const el = $(item)
        const videoSrc = el.find('.video-container-image').prop('src')
        data.push({
          sildeLabel: el.find('.slide-wrapper .slideLabel').text(),
          sildeTitle: el.find('.slide-wrapper .slideTitle').text().trim(),
          link: el.find('a').prop('href'),
          img: videoSrc ? videoSrc : el.find('.image-wrapper img').prop('src'),
          video: el.find('.preview-video-wrapper video').prop('src')
        })
  
      });
  
      return data 
    }
  })

  banner.forEach(async (item) => {
    if (!item.video) item.video = ''
    const sql = `
      INSERT INTO slide1 
      (id, sildeLabel, sildeTitle, link, img, video)
      VALUES 
      (
        ${null},
        '${item.sildeLabel}',
        '${item.sildeTitle}',
        '${item.link}',
        '${item.img}',
        '${item.video}'
      );
    `

    const connection = createConnection()
    connection.connect()

    await connection.query(sql, (err, res) => {
      if (err) throw err
    })

    connection.end()
  })

  return banner
}

module.exports = getBanner
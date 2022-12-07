const crawler = require('./crawler')
const { createConnection } = require('../config/mysql')

async function getBanner() {
  const banner = await crawler.launch({
    callback() {
      const $ = window.$
      const $slider = $('.slick-track .slick-slide:not(.slick-cloned)')
      const data = []
  
      $slider.each((index, item) => {
        const el = $(item)
        const videoSrc = el.find('.video-container-image').prop('src')
        data.push({
          slideLabel: el.find('.slide-wrapper .slideLabel').text(),
          slideTitle: el.find('.slide-wrapper .slideTitle').text().trim(),
          link: el.find('a').prop('href'),
          imgUrl: videoSrc ? videoSrc : el.find('.image-wrapper img').prop('src'),
          videoUrl: el.find('.preview-video-wrapper video').prop('src')
        })
  
      });
  
      return data 
    }
  })

  banner.forEach(async (item) => {
    if (!item.video) item.video = ''

    const connection = createConnection()
    connection.connect()

    await connection.query(sql(item), (err) => {
      if (err) throw err
    })

    connection.end()
  })

  return banner
}

function sql({
  slideLabel,
  slideTitle,
  link,
  imgUrl,
  videoUrl
}) {
  return `
  INSERT INTO slider1 
  (id, slideLabel, slideTitle, link, imgUrl, videoUrl)
  VALUES 
  (
    ${null},
    '${slideLabel}',
    '${slideTitle}',
    '${link}',
    '${imgUrl}',
    '${videoUrl}'
  );
`
}

module.exports = getBanner
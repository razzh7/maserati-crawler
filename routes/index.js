const router = require('koa-router')()
const { chromium } = require('playwright')
const { createConnection } = require('../config/mysql')

router.get('/', async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('https://www.maserati.com/cn/zh')

  const res = await page.evaluate(() => {
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
})

  await browser.close();

  res.forEach(async (item) => {
    if (!item.video) item.video = ''
    const sql = `INSERT INTO slide1 (id, sildeLabel, sildeTitle, link, img, video)
    VALUES 
    (
      ${null},
      '${item.sildeLabel}',
      '${item.sildeTitle}',
      '${item.link}',
      '${item.img}',
      '${item.video}'
    );`

    const connection = createConnection()
    connection.connect()

    await connection.query(sql, (err, res) => {
      if (err) throw err
    })

    connection.end()
  })
})


module.exports = router

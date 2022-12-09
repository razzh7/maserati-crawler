const launch = require('../crawler/launch')

launch({
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

    })

    return data
  }
})
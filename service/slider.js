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
        slide_label: el.find('.slide-wrapper .slideLabel').text(),
        slide_title: el.find('.slide-wrapper .slideTitle').text().trim(),
        link: el.find('a').prop('href'),
        img_url: videoSrc ? videoSrc : el.find('.image-wrapper img').prop('src'),
        video_url: el.find('.preview-video-wrapper video').prop('src')
      })

    })

    return data
  }
})
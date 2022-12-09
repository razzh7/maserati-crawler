const launch = require('../crawler/launch')

launch({
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
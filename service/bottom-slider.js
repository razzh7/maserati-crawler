const launch = require('../crawler/launch')

launch({
  callback() {
    const $ = window.$
    const slider = $('.stories-carousel-slider .slide')
    const data = []
    slider.each((index, item) => {
      const el = $(item)
      const info = {
        slide_label: el.find('.textLabel').text().trim(),
        sub_title: el.find('.subtitle').text().trim(),
        img_url: el.find('.slide-image-item').prop('src'),
        link: el.find('a').prop('href')
      }

      if (index !== 3) {
        data.push(info)
      }
      else if (index === 3) {
        data.push({
          ...info,
          sub_title: el.find('.slide-content-text .title').text().trim(),
          img_url: el.find('.slide-details-image-item').prop('src')
        })
      }
    })

    return data
  }
})
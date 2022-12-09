const launch = require('../crawler/launch')

launch({
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
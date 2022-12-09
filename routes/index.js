const router = require('koa-router')()
const HeaderController = require('../controller/header')
const SliderController = require('../controller/slider')

router.get('/', () => {
  HeaderController.addHeader()
  SliderController.addSlider()
})


module.exports = router

const router = require('koa-router')()
const HeaderController = require('../controller/header')
const SliderController = require('../controller/slider')
const BottomSliderController = require('../controller/bottom-slider')

router.get('/', () => {
  HeaderController.addHeader()
  SliderController.addSlider()
  BottomSliderController.addSlider()
})


module.exports = router

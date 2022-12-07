const router = require('koa-router')()
const header = require('../crawler/header')
const home = require('../crawler/index')

router.get('/', async () => {
  await home.getHeader()
  await home.getBanner()
  await home.getBottomSilder()
})


module.exports = router

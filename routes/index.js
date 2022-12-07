const router = require('koa-router')()
const home = require('../crawler/index')

router.get('/', async () => {
  await home.getBanner()
})


module.exports = router

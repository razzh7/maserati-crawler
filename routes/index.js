const router = require('koa-router')()
const HeaderController = require('../controller/header')

router.get('/', async () => {
  HeaderController.addHeader()
})


module.exports = router

const { chromium } = require('playwright')

const DEFAULTURL = 'https://www.maserati.com/cn/zh'

// 子进程脚本
module.exports = async function ({url = DEFAULTURL, callback}) {
  try {
    const browser = await chromium.launch()
    const page = await browser.newPage()
  
    await page.goto(url)
  
    const res = await page.evaluate(callback)

    await browser.close()
  
    process.send(res)
  
    process.nextTick(() => {
      // 退出子进程
      process.exit(0)
    })
  } catch(err) {
    console.log(err)
  }
}
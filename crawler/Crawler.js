const { chromium } = require('playwright')

const DEFAULTURL = 'https://www.maserati.com/cn/zh'

class Crawler {

  async launch({url = DEFAULTURL, callback}) {
    const browser = await chromium.launch()
    const page = await browser.newPage()
  
    await page.goto(url)

    const res = await page.evaluate(callback)

    await browser.close();

    return res
  }
}

module.exports = new Crawler()
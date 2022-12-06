## maserati-crawler
玛莎拉蒂汽车官网爬虫脚本，抓取页面文字、图片、视频、链接等

## TODO

- [x] 首页轮播图
- [ ] Banner 模块
- [ ] 非凡车型系列
- [ ] Fuoriserie 模块
- [ ] 底部轮播图
- [ ] Footer 模块

## 安装
确保安装 `pnpm` 包管理工具:
```js
npm install pnpm -g
```

```js
git clone git@github.com:rzhAvenir/maserati-crawler.git

cd maserati-crawler

pnpm install
```
## 使用
你可以在根目录创建 `config` 目录，并创建 `mysql.js`
```js
const mysql = require('mysql')

function createConnection(sql) {
  return mysql.createConnection({
    host: 'localhost',
    user: '你的数据库用户名',
    password: '你的数据库密码',
    database: '表名'
  })
}

module.exports = {
  createConnection
}
```

之后就可以运行 `pnpm dev` 了


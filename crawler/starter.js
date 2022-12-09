const { resolve } = require('path')
const { fork } = require('child_process')

function starter({ file, dbHandle, sql, cb }) {
  const script = resolve(__dirname, '../service', file)
  const child = fork(script)

  child.on('message', (msg) => {
    dbHandle(msg, sql, cb)
  })
}

module.exports = starter
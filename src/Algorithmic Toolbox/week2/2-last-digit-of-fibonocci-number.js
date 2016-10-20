'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

const lastDigitOfFibonocci = (n) => {
  if (n < 2) {
    return n
  }

  let f = [0, 1]
  for (let i = 2; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % 10
  }

  return f[n]
}

rl.prompt()
rl.on('line', (cmd) => {
  let n = parseInt(cmd.trim())
  console.log(lastDigitOfFibonocci(n))
  process.exit(0)
})

module.exports = lastDigitOfFibonocci

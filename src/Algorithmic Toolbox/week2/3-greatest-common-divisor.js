'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

const gcd = (a, b) => {
  
}

rl.prompt()
rl.on('line', (cmd) => {
  let n = parseInt(cmd.trim())
  console.log(gcd(n))
  process.exit(0)
})

module.exports = gcd

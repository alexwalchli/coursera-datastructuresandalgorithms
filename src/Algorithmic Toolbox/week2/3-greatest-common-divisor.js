'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

// Euclid's algorithm
const gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

rl.prompt()
rl.on('line', (cmd) => {
  const input = cmd.trim().split(' ')
  const a = input[0]
  const b = input[1]
  console.log(gcd(a, b))
  process.exit(0)
})

module.exports = gcd

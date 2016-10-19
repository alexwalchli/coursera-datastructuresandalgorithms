'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

let input = []

// TODO: can probably be done in O(n), for another day.
const maximumPairWiseProduct = (sequence) => {
  let aMax = -1
  let aIndex = -1
  let bMax = -1

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > aMax) {
      aMax = sequence[i]
      aIndex = i
    }
  }
  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] > bMax && j !== aIndex) {
      bMax = sequence[j]
    }
  }

  return aMax * bMax
}

rl.prompt()
rl.on('line', (cmd) => {
  input.push(cmd)

  if (input.length === 2) {
    let sequence = input[1].trim().split(' ').map(i => parseInt(i))
    console.log(maximumPairWiseProduct(sequence))
    process.exit(0)
  }
})

module.exports = maximumPairWiseProduct

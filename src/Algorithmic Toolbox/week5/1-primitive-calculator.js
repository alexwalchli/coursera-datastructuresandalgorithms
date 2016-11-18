'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

const dynamicPrimitiveCalculator = (x) => {
  let numberOfOperations
  let sequence = []

  return [ numberOfOperations, sequence ]
}

const greedyPrimitiveCalculator = (x) => {
  let numberOfOperations
  let sequence = []

  return [ numberOfOperations, sequence ]
}

rl.prompt()
rl.on('line', (cmd) => {
  const x = cmd

  const numberOfOperationsAndSequence = primitiveCalculator(x)
  console.log(numberOfOperationsAndSequence[0])
  console.log(numberOfOperationsAndSequence[1])

  process.exit(0)
})

module.exports = primitiveCalculator

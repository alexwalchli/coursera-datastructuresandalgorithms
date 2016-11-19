// Problem Introduction
// You are given a primitive calculator that can perform the following three operations with the current number
// x: multiply x by 2, multiply x by 3, or add 1 to x. Your goal is given a positive integer n, find the
// minimum number of operations needed to obtain the number n starting from the number 1.

'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

const dynamicPrimitiveCalculator = (n) => {
  let numberOfOperations = 0
  let sequence = [ 1 ]
  let x = 1
  let solutions = [[]]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; i++) {

      solution[i][j]

    }
  }

  


  while (x < n) {
    let lastSolution = sequence[numberOfOperations]
    if (lastSolution * 3 < n) {
      x = (numberOfOperations + 1) * 3
    } else if (lastSolution * 2 < n) {
      x = (numberOfOperations + 1) * 2
    } else {
      x++
    }

    numberOfOperations++
    sequence.push(x)
  }

  return [ numberOfOperations, sequence ]
}

function MinAndMax(m, M, i, j) {
  let min = -Infinity
  let max = Infinity

  for(let k = i; k < j; k++) {
    
  }

  return MinAndMax
}

const greedyPrimitiveCalculator = (x) => {
  let sequence = []

  while (x > 1) {
    if (x % 3 === 0) {
      x = x / 3
    } else if (x % 2 === 0) {
      x = x / 2
    } else {
      x--
    }

    sequence.push(x)
  }

  return [ sequence.length, sequence.reverse() ]
}

rl.prompt()
rl.on('line', (cmd) => {
  const x = cmd

  const numberOfOperationsAndSequence = dynamicPrimitiveCalculator(x)
  console.log(numberOfOperationsAndSequence[0])
  console.log(numberOfOperationsAndSequence[1])

  process.exit(0)
})

module.exports = { dynamicPrimitiveCalculator, greedyPrimitiveCalculator }

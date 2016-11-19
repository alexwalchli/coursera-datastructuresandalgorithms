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

// returns the minimum operations for n and the sequence of numbers leading up to n with the minimum amount of operations
const dynamicPrimitiveCalculator = (n) => {
  let minOp = [0, 0] // min operations for 0 and 1 is 0
  let sequences = [[0], [1]]

  for (let i = 2; i <= n; i++) {
    let a = Infinity
    let b = Infinity
    let c = Infinity
    let an
    let bn
    let cn

    if (i % 3 === 0) {
      an = i / 3
      a = minOp[an] + 1
    }
    if (i % 2 === 0) {
      bn = i / 2
      b = minOp[bn] + 1
    }
    cn = i - 1
    c = minOp[cn] + 1

    // probably can clean this up, for another day
    let minOperations = Math.min(a, b, c)
    switch (minOperations) {
      case a:
        sequences.push([ ...sequences[an], i ])
        break
      case b:
        sequences.push([ ...sequences[bn], i ])
        break
      case c:
        sequences.push([ ...sequences[cn], i ])
        break
    }

    minOp.push(minOperations)
  }

  return [ minOp[n], sequences[n] ]
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

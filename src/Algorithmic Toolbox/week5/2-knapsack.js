// Problem Introduction
// In this problem, you are given a set of bars of gold and your goal is to take as much gold as possible
// into your bag. There is just one copy of each bar and for each bar you can either take it or not (hence
// you cannot take a fraction of a bar).

'use strict'
process.stdin.setEncoding('utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

const knapsackWithoutRepetitions = (W, n, weightOfItems) => {
  // initialize the matrix of solutions
  let solutions = []
  for (let i = 0; i <= W; i++) {
    solutions[i] = []
    for (let j = 0; j <= n; j++) {
      solutions[i][j] = 0
    }
  }

  // for the gold problem, the weights are the values since we want to maximize the weight we can carry
  const valueOfItems = weightOfItems.slice()

  // loop all solutions possible from 0 items and 0 weight up to n items and W weight

  // loop number of items
  for (let i = 1; i <= n; i++) {
    // loop size of knapsack
    for (let w = 1; w <= W; w++) {
      // if the current ith item is greater than the current weight of knapsack
      // then use the last solution of the same weight but 1 less item
      if (weightOfItems[i - 1] > w) {
        solutions[w][i] = solutions[w][i - 1]
      } else {
        // else choose between the maximal value of either
        // a. the solution of the current weight minus the last item's weight with 1 less item allowed
        // , plus the current value of the ith item
        // b. the last solution of the same weight but 1 less item
        let val = solutions[w - weightOfItems[i - 1]][i - 1] + valueOfItems[i - 1]
        solutions[w][i] = Math.max(val, solutions[w][i - 1])
      }
    }
  }

  // the last solution is the maximum weight that can be carried with the items given
  return solutions[W][n]
}

let input = []

rl.prompt()
rl.on('line', (cmd) => {
  input.push(cmd)
  if (input.length === 2) {
    const totalWeight = parseInt(input[0].split(' ')[0])
    const numberOfItems = parseInt(input[0].split(' ')[1])
    const valueOfItems = input[1].split(' ').map(v => parseInt(v))

    console.log(knapsackWithoutRepetitions(totalWeight, numberOfItems, valueOfItems))

    process.exit(0)
  }
})

module.exports = knapsackWithoutRepetitions

const knapsack = require('../../../src/Algorithmic Toolbox/week5/2-knapsack')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('knapsack without repetitions', () => {
  it('test 1', () => {
    const totalWeight = 10
    const numberOfItems = 3
    const valueOfItems = [1, 4, 8]
    expect(knapsack(totalWeight, numberOfItems, valueOfItems)).to.equal(9)
  })

  it('test 2', () => {
    const totalWeight = 10
    const numberOfItems = 1
    const valueOfItems = [10]
    expect(knapsack(totalWeight, numberOfItems, valueOfItems)).to.equal(10)
  })

  it('test 3', () => {
    const totalWeight = 10
    const numberOfItems = 1
    const valueOfItems = [1]
    expect(knapsack(totalWeight, numberOfItems, valueOfItems)).to.equal(1)
  })

  it('test 4', () => {
    const totalWeight = 10
    const numberOfItems = 3
    const valueOfItems = [1, 2, 3]
    expect(knapsack(totalWeight, numberOfItems, valueOfItems)).to.equal(6)
  })

  it('test 5', () => {
    const totalWeight = 12
    const numberOfItems = 3
    const valueOfItems = [1, 2, 11]
    expect(knapsack(totalWeight, numberOfItems, valueOfItems)).to.equal(12)
  })
})

const dynamicPrimitiveCalculator = require('../../../src/Algorithmic Toolbox/week5/1-primitive-calculator').dynamicPrimitiveCalculator
const greedyPrimitiveCalculator = require('../../../src/Algorithmic Toolbox/week5/1-primitive-calculator').greedyPrimitiveCalculator
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('dynamic programming primitive calculator', () => {
  it('should properly calculate when x is 1', () => {
    const x = 1

    const numberOfOperationsAndSequence = dynamicPrimitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(0)
    expect(numberOfOperationsAndSequence[1]).to.deep.equal([1])
  })
  it('should properly calculate when x is 5', () => {
    const x = 5

    const numberOfOperationsAndSequence = dynamicPrimitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(3)
    expect(numberOfOperationsAndSequence[1]).to.deep.equal([1, 2, 4, 5])
  })
  it('should properly calculate when x is 10', () => {
    const x = 10

    const numberOfOperationsAndSequence = dynamicPrimitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(3)
    expect(numberOfOperationsAndSequence[1]).to.deep.equal([1, 3, 9, 10])
  })
  it('should properly calculate when x is 96234', () => {
    const x = 96234

    const numberOfOperationsAndSequence = dynamicPrimitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(14)
    expect(numberOfOperationsAndSequence[1]).to.deep.equal([1, 3, 9, 10, 11, 22, 66, 198, 594, 1782, 5346, 16038, 16039, 32078, 96234])
  })
})

describe('greedy primitive calculator should get it wrong', () => {
  it('should properly calculate when x is 5', () => {
    const x = 5

    const numberOfOperationsAndSequence = greedyPrimitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(3)
    expect(numberOfOperationsAndSequence[1]).to.deep.equal([1, 2, 4])
  })
})

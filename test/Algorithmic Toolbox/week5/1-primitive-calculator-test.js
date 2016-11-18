const primitiveCalculator = require('../../../src/Algorithmic Toolbox/week5/1-primitive-calculator')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('primitive calculator', () => {
  it('should properly calculate when x is 5', () => {
    const x = 5

    const numberOfOperationsAndSequence = primitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(3)
    expect(numberOfOperationsAndSequence[1]).to.equal([1, 2, 4, 5])
  })
  it('should properly calculate when x is 96234', () => {
    const x = 5

    const numberOfOperationsAndSequence = primitiveCalculator(x)
    expect(numberOfOperationsAndSequence[0]).to.equal(14)
    expect(numberOfOperationsAndSequence[1]).to.equal([1, 3, 9, 10, 11, 22, 66, 198, 594, 1782, 5346, 16038, 16039, 32078, 96234])
  })
})

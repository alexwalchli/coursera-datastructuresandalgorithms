const maximumPairWiseProduct = require('../../../src/Algorithmic Toolbox/week1/2-maximum-pairwise-product')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('maximumPairWiseProduct', () => {
  it('should handle simple case', () => {
    expect(maximumPairWiseProduct([1, 2, 3])).to.equal(6)
  })

  it('should handle sequence with duplicates', () => {
    expect(maximumPairWiseProduct([1, 2, 3, 3])).to.equal(9)
  })

  it('should handle sequence with a 0', () => {
    expect(maximumPairWiseProduct([0, 2])).to.equal(0)
  })

  it('should handle larger numbers', () => {
    expect(maximumPairWiseProduct([100000, 400000])).to.equal(40000000000)
  })
})

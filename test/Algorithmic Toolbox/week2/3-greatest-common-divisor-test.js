const gcd = require('../../../src/Algorithmic Toolbox/week2/3-greatest-common-divisor')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('greatest common divisor', () => {
  it('should return a when b is 0', () => {
    expect(gcd(100, 0)).to.equal(100)
  })
  it('should return GCD for small integers', () => {
    expect(gcd(10, 4)).to.equal(2)
  })
  it('should return GCD for large integers', () => {
    expect(gcd(3918848, 1653264)).to.equal(61232)
  })
})

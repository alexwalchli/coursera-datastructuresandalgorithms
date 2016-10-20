const lastDigitOfFibonocciNumber = require('../../../src/Algorithmic Toolbox/week2/2-last-digit-of-fibonocci-number')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('last digit of fibonocci', () => {
  it('should return 2 for the 3rd fibonocci number', () => {
    expect(lastDigitOfFibonocciNumber(3)).to.equal(2)
  })
  it('should return 9 for the 331st fibonocci number', () => {
    expect(lastDigitOfFibonocciNumber(3)).to.equal(2)
  })
  it('should return 5 for a very large fibonocci number, 327305th', () => {
    expect(lastDigitOfFibonocciNumber(327305)).to.equal(5)
  })
})

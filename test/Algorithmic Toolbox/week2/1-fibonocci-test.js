const fibonocci = require('../../../src/Algorithmic Toolbox/week2/1-fibonocci')
const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it

describe('fibonocci', () => {
  it('should generate correct 0th element in the sequence', () => {
    expect(fibonocci(0)).to.equal(0)
  })
  it('should generate correct 1st element in the sequence', () => {
    expect(fibonocci(1)).to.equal(1)
  })
  it('should generate correct 2nd element in the sequence', () => {
    expect(fibonocci(2)).to.equal(1)
  })
  it('should generate correct 3rd element in the sequence', () => {
    expect(fibonocci(3)).to.equal(2)
  })
  it('should generate correct 4th element in the sequence', () => {
    expect(fibonocci(4)).to.equal(3)
  })
  it('should generate correct 5th element in the sequence', () => {
    expect(fibonocci(5)).to.equal(5)
  })
  it('should generate correct 6th element in the sequence', () => {
    expect(fibonocci(6)).to.equal(8)
  })
  it('should generate correct 7th element in the sequence', () => {
    expect(fibonocci(7)).to.equal(13)
  })
  it('should generate correct 20th element in the sequence', () => {
    expect(fibonocci(20)).to.equal(6765)
  })
  it('should generate correct 50th element in the sequence', () => {
    expect(fibonocci(50)).to.equal(12586269025)
  })
})

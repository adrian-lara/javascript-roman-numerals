const assert = require('assert')
const RomanNumeral = require('../lib/roman-numerals')

describe("Old Roman Numeral methods", function() {
  context("given an arabic number with a direct translation to a single roman numeral", function() {
    it("returns the old roman numeral equivalent", function() {
      assert.equal(RomanNumeral.convertToOldRoman(1000),"M")
      assert.equal(RomanNumeral.convertToOldRoman(500),"D")
      assert.equal(RomanNumeral.convertToOldRoman(100),"C")
      assert.equal(RomanNumeral.convertToOldRoman(50),"L")
      assert.equal(RomanNumeral.convertToOldRoman(10),"X")
      assert.equal(RomanNumeral.convertToOldRoman(5),"V")
      assert.equal(RomanNumeral.convertToOldRoman(1),"I")
    })
  })

  context("given an arabic number that does not have a direct single roman numeral translation", function () {
    it("returns the old roman numeral equivalent", function() {
      assert.equal(RomanNumeral.convertToOldRoman(4),"IIII")
      assert.equal(RomanNumeral.convertToOldRoman(9),"VIIII")
      assert.equal(RomanNumeral.convertToOldRoman(99),"LXXXXVIIII")
      assert.equal(RomanNumeral.convertToOldRoman(2990),"MMDCCCCLXXXX")
    })
  })
})

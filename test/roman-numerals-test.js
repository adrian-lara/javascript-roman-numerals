const assert = require('assert')
const OldRomanNumeral = require('../lib/roman-numerals')

describe("Old Roman Numeral methods", function() {
  context("given an arabic number with a direct translation to a single roman numeral", function() {
    it("returns the old roman numeral equivalent", function() {
      assert.equal(OldRomanNumeral.convertToOldRoman(1000),"M")
      assert.equal(OldRomanNumeral.convertToOldRoman(500),"D")
      assert.equal(OldRomanNumeral.convertToOldRoman(100),"C")
      assert.equal(OldRomanNumeral.convertToOldRoman(50),"L")
      assert.equal(OldRomanNumeral.convertToOldRoman(10),"X")
      assert.equal(OldRomanNumeral.convertToOldRoman(5),"V")
      assert.equal(OldRomanNumeral.convertToOldRoman(1),"I")
    })
  })

  context("given an arabic number that does not have a direct single roman numeral translation", function () {
    it("returns the old roman numeral equivalent", function() {
      assert.equal(OldRomanNumeral.convertToOldRoman(4),"IIII")
      assert.equal(OldRomanNumeral.convertToOldRoman(9),"VIIII")
      assert.equal(OldRomanNumeral.convertToOldRoman(99),"LXXXXVIIII")
      assert.equal(OldRomanNumeral.convertToOldRoman(2990),"MMDCCCCLXXXX")
    })
  })
})

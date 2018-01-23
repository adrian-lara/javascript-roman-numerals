function convertToOldRoman(number) {
  let result = ""

  for(let i = number; i > 0; i = decrement(i)) {
    result += concatLargestOld(i)
  }

  return result
}

function decrement(number) {
  if (number >= 1000) {
    return number % 1000
  } else if (500 <= number && number < 1000) {
    return number % 500
  } else if (100 <= number && number < 500) {
    return number % 100
  } else if (50 <= number && number < 100) {
    return number % 50
  } else if (10 <= number && number < 50) {
    return number % 10
  } else if (5 <= number && number < 10) {
    return number % 5
  } else {
    return 0
  }
}

function concatLargestOld(number) {
  if (number >= 1000) {
    return "M".repeat(Math.floor(number/1000))
  } else if (500 <= number && number < 1000) {
    return "D".repeat(Math.floor(number/500))
  } else if (100 <= number && number < 500) {
    return "C".repeat(Math.floor(number/100))
  } else if (50 <= number && number < 100) {
    return "L".repeat(Math.floor(number/50))
  } else if (10 <= number && number < 50) {
    return "X".repeat(Math.floor(number/10))
  } else if (5 <= number && number < 10) {
    return "V".repeat(Math.floor(number/5))
  } else {
    return "I".repeat(number)
  }
}

module.exports = {
  convertToOldRoman
}

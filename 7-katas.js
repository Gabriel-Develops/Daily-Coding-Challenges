/*
  Vowel Count
*/

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  // Split str into array of characters
  // Filter out non vowel characters
  // Return length of filtered array
  return str.split('').filter(c => vowels.includes(c)).length
}



/*
  Square Every Digit
*/

function squareDigits(num){
  return +num.toString().split('').map(element => Math.pow(element, 2)).join('')
}

// First convert to string, split into array of single digits
// For every digit, double it using Math.pow
// Join all elements in array
// Lastly using the unary (+) operator, convert result to a number



/*
  Pull your words together, man!
*/

function sentencify(words) {
  words = words.join(' ').split('')
  words.splice(0, 1, words[0].toUpperCase())
  return words.join('') +'.'
}



/*
  Pull your words together, man!
*/

String.prototype.toJadenCase = function () {
  strArray = this.toString().split(' ')
  
  return strArray.map(element => element[0].toUpperCase() + element.slice(1))
    .join(' ')
}
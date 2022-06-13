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



/*
  Bingo ( Or Not )
*/

function bingo(a) {
  // [ "b", "i", "n", "g", "o" ]
  // corresponds to the numbers 
  // [ 2, 9, 14, 7, 15 ]
  
  return a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15) ? 'WIN' : 'LOSE'
}

// A dynamic solution I encountered
// function bingo(a) {  
//   return ([...'bingo']
//           .map(x => x.charCodeAt(0)-96)
//           .every(o => a.includes(o))) ? "WIN" : "LOSE" ;
//  }



/*
  Disemvowel Trolls
*/

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  return str.split('').filter(character => !vowels.includes(character.toLowerCase())).join('')
}



/*
  Highest and Lowest
*/

function highAndLow(numbers){
  return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
}



/*
  Descending Order
*/

function descendingOrder(n){
  return +n.toString()
    .split('')
    .sort((a,b)=>b-a)
    .join('');
}



/*
  Mumbling
*/

function accum(s) {
  let arr = s.toLowerCase().split('')
  
  let final = arr.map((c, index) => {
    let n = index + 1
    let sect = ''
    
    for (let i = 0; i < n; i++) {
      if (i === 0)
        sect += c.toUpperCase()
      else
        sect += c
    }
    return sect
  }).join('-')
  
  return final
}



/*
  Get the Middle Character
*/

function getMiddle(s){
  return s.substring(Math.floor((s.length - 1) / 2), Math.ceil((s.length - 1) / 2) + 1 );
  }



  /*
    You're a square!
  */
  
  const isSquare = n => Number.isInteger(Math.sqrt(n));
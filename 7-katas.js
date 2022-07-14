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

// A really clever solution I saw was finding if there was a remainder by doing mod 1 and checking it to be equal to zero

// return Math.sqrt(n) % 1 === 0



/*
  You're a square!
*/
  
const filter_list = l => l.filter(element => typeof element !== 'string');



/*
  Isograms
*/
  
function isIsogram(str){
  const string = str.toLowerCase()
  
  for (let letter of string) {
    if (string.indexOf(letter) !== string.lastIndexOf(letter))
      return false
  }
  
  return true
}

// A clever one line solution is to make a Set out of the string and compare the length of the Set to the length of the original string.

// return new Set(str.toLowerCase()).size === str.length



/*
  Exes and Ohs
*/
  
function XO(str) {
  const string = str.toLowerCase()
  const xoCount = {
    'x': 0,
    'o': 0
  }
  
  for (let letter of string) {
    if (letter in xoCount) 
      xoCount[letter]++
  }
  
  return xoCount['x'] === xoCount['o']
}



/*
  Shortest Word
*/
  
function findShort(s){
  return Math.min(...s.split(" ").map(word=>word.length));
}

// I've seen the math.min method used in similar problems and wanted to try my hand
// Pairing the method with the spread operator means I can pass in an entire array as parameters to this method

// I also wanted to try solving this problem using a normal for loop so I used a for...of loop and passed in the lengths of the words and found the min

// function findShort(s){
//   let min = Infinity
  
//   for (let word of s.split(' ')) {
//     if (word.length < min)
//       min = word.length
//   }
  
//   return min
// }



/*
  Complementary DNA
*/
  
function DNAStrand(dna){
  const DNAStrings = new Map([
    ['A', 'T'],
    ['T', 'A'],
    ['C', 'G'],
    ['G', 'C'],
  ])
  
  return dna.split('')
    .map(symbol => DNAStrings.get(symbol))
    .join('')
}



/*
  Sum of two lowest positive integers
*/
  
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};



/*
  Did she say hallo?
*/

function getSum(a, b) {
  let sum = 0
  for (let i = Math.min(a, b), upper = Math.max(a, b); i <= upper; i++) {
    sum += i    
  }
  
  return sum
}

// A simple for loop 
// A mathematical solution would be to use Guass Summation formula which is 
// n * (n + 1) / 2
// That works when going from 1 to n but if you want a custom lower and upper bound then you have to use the variation which is
// (lower + upper) * (upper - lower + 1) / 2
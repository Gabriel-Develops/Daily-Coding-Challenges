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



/*
  Two to One
*/

function longest(s1, s2) {
  return Array.from(new Set(s1.concat(s2).split('').sort())).join('');
}

// A cleaner method is to use the spread operator and array symbol to your advantage
// return [...new Set(s1 + s2)].sort().join('')

// Of course an alternative is to split the steps up into multiple lines for readability



/*
  Growth of a Population
*/

function nbYear(p0, percent, aug, p) {
  let totalYears = 0;
  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100 + aug);
    totalYears++;
  }
  return totalYears;
}



/*
  Categorize New Member
*/

function openOrSenior(data) {
  return data.map(info => {
    if (info[0] >= 55 && info[1] > 7) return 'Senior';
    else return 'Open';
  })
}

// Deconstructing the input into an array of [age, handicap] can lead to an incredibly readable solution

// return data.map([age, handicap] => ...)



/*
  Friend or Foe?
*/

function friend(friends){
  return friends.filter(name => name.length === 4)
}



/*
  Find the next perfect square!
*/

function findNextSquare(sq) {
  return Number.isInteger((Math.sqrt(sq) + 1) ** 2) ? (Math.sqrt(sq) + 1) ** 2 : -1
}



/*
  Printer Errors
*/

function printerError(s) {
  const errors = s.split('')
    .filter(c => c < 'a' || c > 'm')
    .length
  return `${errors}/${s.length}`
}



/*
  Regex validate PIN code
*/

function validatePIN (pin) {
  return pin.split('').every(x => x >= '0' && x <= '9') &&
    (pin.length === 4 || pin.length === 6)
}



/*
  Binary Addition
*/

function addBinary(a,b){
  return (a+b).toString(2)
}



/*
  Is this a triangle?
*/

function isTriangle(a,b,c)
{
  //Triangle Inequality Theorem
  return (a + b > c && a + c > b && b + c > a)
}



/*
  Sum of odd numbers
*/

function rowSumOddNumbers(n) {
  return n**3
}



/*
  Ones and Zeros
*/

const binaryArrayToNumber = arr => {
  return Number.parseInt(arr.join(""),2);
  };



/*
  Number of People in the Bus
*/

const number = busStops => {
  return busStops.reduce((final, stop) => final += stop[0] - stop[1], 0)
}

// Deconstruction the stop array into [on, off] would lead to a more readable answer



/*
  Odd or Even?
*/

function oddOrEven(array) {
  return array.reduce((sum, x) => sum + x, 0) % 2 ? 'odd' : 'even';
}



/*
  Reverse words
*/

function reverseWords(str) {
  return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}



/*
  Sum of the first nth term of Series
*/

function SeriesSum(n) {
  let sum = 0
  
  for (let i = 0; i < n; i++) {
    sum += (3 * i + 1) ** -1
  }
  
  return sum.toFixed(2)
}



/*
  Remove the minimum
*/

function removeSmallest(numbers) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, i) => i !== minIndex);
}



/*
  The highest profit wins!
*/

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}



/*
  Testing 1-2-3
*/

const number2 = array => {
  return array.map((x, i)=> `${i+1}: ${x}`)
}



/*
  Find the stray number
*/

function stray(numbers) {
  return numbers.find(x => numbers.indexOf(x) === numbers.lastIndexOf(x));
}



/*
  Money, Money, Money
*/

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  
  while (principal < desired) {
    principal *= (1 + interest - interest * tax)
    years++
  }
  
  return years
}



/*
  Count the divisors of a number
*/

function getDivisorsCnt(n){
  let divisor = n, total = 0
  
  while (divisor > 0) {
    if (Number.isInteger(n / divisor))
      total++
    
    divisor--
  }
  
  return total
}



/*
  Count the Digit
*/

function nbDig(n, d) {
  let total = 0
  
  for (let i = 0; i <= n; i++) {
    let k = (i ** 2).toString()
    
    for (let x of k) {
      if (x == d) total++
    }
  }
  
  return total
}



/*
  Sort array by string length
*/

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};



/*
  Round up to the next multiple of 5
*/

function roundToNext5(n){
  return n % 5 === 0 ? n : roundToNext5(n+1);
}



/*
  Find the middle element
*/

function gimme (triplet) {
  return triplet.findIndex(x => x !== Math.min(...triplet) && x !==  Math.max(...triplet))
}

// This iteration was my inital solution but the math methods are being evaluated every run of the findIndex method. We could improve this quickly by defining max and min first.

// function gimme (triplet) {
//   const max = Math.max(...triplet), min = Math.min(...triplet)
//   return triplet.findIndex(x => x !== max && x !== min)
// }



/*
  Sum of a sequence
*/

function sequenceSum(begin, end, step) {
  if (begin > end)   return 0
  
  let increment = begin, sum = 0
  
  while (increment <= end) {
    sum += increment
    increment += step
  }
  
  return sum
}



/*
  Find the capitals
*/

var capitals = function (word) {
  let arr = []
  for(let i=0; i<word.length; i++){
    if(word[i]>="A" && word[i]<="Z"){
      arr.push(i)
    }
  } 
  return arr
};



/*
  Anagram Detection
*/

var isAnagram = function(test, original) {
  return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
};



/*
  Remove anchor from URL
*/

function removeUrlAnchor(url){
  return url.split('#')[0];
}



/*
  Alternate capitalization
*/

function capitalize(s){
  return [
    s.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join(''), 
    s.split('').map((x, i) => i % 2 === 0 ? x.toLowerCase() : x.toUpperCase()).join('')
  ]
};



/*
  Make a function that does arithmetic!
*/

function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}



/*
  The Coupon Code
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}



/*
  Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
*/

function countDevelopers(list) {
  return list.filter(x=>x.continent==='Europe' && x.language==='JavaScript').length
}

// I chose to solve this with a filter/length but you could also solve this question with a reduce method

/*
function countDevelopers(list) {
  return list.reduce((c, x) => x.continent === 'Europe' && x.language === 'JavaScript' ? ++c : c, 0)
}
*/



/*
  Alphabet war
*/

function alphabetWar(fight) {
  const leftPower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  }
  const rightPower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  }
  
  const [left, right] = fight.split('')
  .reduce(([left, right], x) => {
    if (x in leftPower)
      return [left += leftPower[x], right]
    else if (x in rightPower)
      return [left, right += rightPower[x]]
    else
      return [left, right]
  }, [0, 0])

  return left > right ? 'Left side wins!' : left < right ? 'Right side wins!' : "Let's fight again!"
}



/*
  Two fighters, one winner.
*/

function declareWinner(fighter1, fighter2, nextAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (fighter1.name === nextAttacker) {
      fighter2.health -= fighter1.damagePerAttack
      nextAttacker = fighter2.name
    } else {
      fighter1.health -= fighter2.damagePerAttack
      nextAttacker = fighter1.name
    }
  }
  
  return fighter1.health > 0 ? fighter1.name : fighter2.name
}



/*
  Sort Numbers
*/

function solution(nums){
  return nums ? nums.sort((a,b)=>a-b) : []
}



/*
  Small enough? - Beginner
*/

function smallEnough(a, limit){
  return a.every(x => x <= limit);
}

// A clever alternate solution would be to find the max in the array and compare that number with the limit

// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }



/*
  Most digits
*/

function findLongest(array){
  const digitCount = array.map(x => x.toString().length)
  const largest = Math.max(...digitCount)
  
  return array.find(x => x.toString().length === largest)
}



/*
  Check the exam
*/

function checkExam(array1, array2) {
  const score = array1.reduce((acc, x, i) => {
    if (x === array2[i]) 
      return acc += 4
    else if (!array2[i])
      return acc
    else
      return acc -= 1
  }, 0)
  
  return Math.max(score, 0)
}



/*
  Maximum Multiple
*/

function maxMultiple(divisor, bound){
  return bound % divisor === 0 && bound > 0 ? bound : maxMultiple(divisor, --bound)
}



/*
  Bumps in the Road
*/

function bump(x){
  return (x.split("n").length - 1 > 15) 
         ? "Car Dead" 
         :"Woohoo!"
}



/*
  Moves in squared strings (I)
*/

function vertMirror(strng) {
  return strng.split('\n').map(x => x.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
  return strng.split('\n').reverse().join(`\n`)
}
function oper(fct, s) {
  return fct(s)
}



/*
  Sum of Minimums!
*/

function sumOfMinimums(arr) {
  return arr.reduce((sum, x) => sum + Math.min(...x), 0)
}



/*
  Row Weights
*/

function rowWeights(array){
  return [
    array.reduce((acc, x, i) => i % 2 === 0 ? acc + x : acc, 0), 
    array.reduce((acc, x, i) => i % 2 !== 0 ? acc + x : acc, 0)
  ]
}

// My first solution was inneficient with two reduce methods, I wondered if I could get it down to one
/*
function rowWeights(array){
  return array.reduce(([even, odd], x, i) => i % 2 === 0 ? [even + x, odd] : [even, odd + x], [0, 0])
}
*/
// Mission success, with the help of deconstruction

// Another method I saw was people using the comma operator ,

/*
function rowWeights(array){
  return array.reduce((a, x, i) => (a[i % 2] += x, a), [0, 0])
}
*/

// Comma Operator evaluates all operands and returns the right most operand



/*
  Flatten and sort an array
*/

"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}



/*
  JavaScript Array Filter
*/

function getEvenNumbers(numbersArray){
  return numbersArray.filter(x => x%2 === 0)
}



/*
  Sorted? yes? no? how?
*/

function isSortedAndHow(array) {
  const asc = array.slice().sort((a, b) => a - b)
  const desc = array.slice().sort((a, b) => b - a)

  if (array.every((x, i) => x === asc[i]))
    return 'yes, ascending'
  else if (array.every((x, i) => x === desc[i]))
    return 'yes, descending'
  else
    return 'no'
}



/*
  No oddities here
*/

function noOdds( values ){
  return values.filter( x => (x % 2) === 0);
}



/*
  Maximum Product 
*/

function adjacentElementsProduct(array) {
  return Math.max( ...array.map((x, i) => x * array[i + 1]).filter(x => !Number.isNaN(x)) )
}



/*
  Even numbers in an array
*/

function evenNumbers(array, number) {
  return array.filter(x=>x%2===0).slice(-number);
}



/*
  Fizz Buzz
*/

function fizzbuzz(n) {
  return Array.from({length: n}).map((_, i) => {
    const num = i + 1
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    else if (num % 3 === 0) return 'Fizz'
    else if (num % 5 === 0) return 'Buzz'
    else return num
  })
}



/*
  Minimize Sum Of Array (Array Series #1) 
*/

function minSum(arr) 
  {
      arr.sort((a,b) => a-b);
    let sum = 0;
      for(let i = 0; i < arr.length/2; i++)
            sum+= arr[i]*arr[arr.length-1-i];
      return sum;
  }



/*
  Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
*/

function isRubyComing(list) {
  return list.some(e => e.language === 'Ruby');
}



/*
  Factorial
*/

function factorial(n){
  if (n < 0 || n > 12) throw new RangeError();
  
  let product = 1;
  for(let i = 1; i <= n; i++) product *= i;
  
  return product;
}



/*
  Coding Meetup #2 - Higher-Order Functions Series - Greet developers
*/

function greetDevelopers(list) {
  return list.map(x => {
    x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?` 
    return x;
  });
}



/*
  Simple Fun #176: Reverse Letter
*/

function reverseLetter(str) {
  return str.split('')
    .reverse()
    .filter(x => x.toLowerCase() !== x.toUpperCase())
    .join('')
}



/*
  Summing a number's digits
*/

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, x) => sum + +x, 0);
}



/*
  Sum of Odd Cubed Numbers
*/

function cubeOdd(arr) {
  if (arr.some(x => typeof x !== 'number'))
    return undefined
  else 
    return arr.reduce((sum, x) => {
    if (x % 2 === 0)
      return sum
    else
      return sum + (x ** 3)
  }, 0)
}



/*
  Convert an array of strings to array of numbers
*/

function toNumberArray(stringarray){
  return stringarray.map(x => +x)
}



/*
  Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
*/

function getFirstPython(list) {
  const pythonIndex = list.findIndex(x => x.language = 'Python')
  return pythonIndex === -1 ? 'There will be no Python developers' : `${list[pythonIndex].firstName}, ${list[pythonIndex].country}`
}

// find method returns the element, leading to no need to use index to reretrieve the object



/*
  Divide and Conquer
*/

function divCon(x){
  return x.reduce((sum, num) => {
    if (typeof num === 'number')
      return sum + num
    else
      return sum - +num
  }, 0)
}

// I realized I could just do the if else statement on one line with a ternary solution

// function divCon(numbers){
//   return numbers.reduce((sum, x) => +x === x ? sum + x : sum - +x, 0)
// }



/*
  Number of Decimal Digits
*/

function digits(n) {
  return n.toString().length;
}



/*
  Greet Me
*/

const greet = name => {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
} 



/*
  Alphabet symmetry
*/

function solve(arr) {
  return arr.map(x => {
    return x.split('').filter((y, i) => {
      return y.toLowerCase().charCodeAt() - 96 === i + 1
    }).length
  })
}



/*
  Switcheroo
*/

function switcheroo(x){
  return x.split('')
    .map(l => {
    switch (l) {
      case 'a':
        return 'b'
      case 'b':
        return 'a'
      default:
        return l
    }
  })
  .join('')
}



/*
  Sort the Gift Code
*/

function sortGiftCode(code){
  return code.split('').sort().join('');
}



/*
  Help the Fruit Guy
*/

function removeRotten(bagOfFruits){
  if (!bagOfFruits) return []
  
  return bagOfFruits.map(x => x.startsWith('rotten') ? x[6].toLowerCase() + x.slice(7) : x)
}

// An improvement to this would be to check for falsiness in a ternary and remove the word rotten by using the replace method

// return bagOfFruits ? bagOfFruits.map(x => x.replace('rotten', '').toLowerCase()) : []



/*
  Spacify
*/

function spacify(str) {
  return str.split('').join(' ')
}



/*
  Form The Minimum
*/

function minValue(values){
  return +values.filter((x, i) => values.indexOf(x) === i)
    .sort((a, b) => a - b)
    .join('')
}



/*
  Tidy Number (Special Numbers Series #9)
*/

function tidyNumber(n){
  const arr = n.toString().split('')
  return arr.slice(0, -1).every((x, i) => +x <= +arr[i + 1])
}



/*
  Char Code Calculation
*/

function stringToSum(string) {
  return string.split('').reduce((total, x) => total + +x, 0)
}

function calc(x){
  const total1 = x.split('').reduce((total, y) => total + y.charCodeAt(), '')
  let total2 = total1.replace('7', '1')
  while(total2.includes('7')) {
    total2 = total2.replace('7', '1')
  }
  
  const sum1 = stringToSum(total1)
  const sum2 = stringToSum(total2)

  return sum1 - sum2
}



/*
  SevenAte9
*/

function sevenAte9(str) {
  return str.split('').filter((x, i) => x !== '9' || (str[i - 1] !== '7' || str[i + 1] !== '7')).join('')
}

// A fun challenge, I wanted to what it would look like if I did it with a for loop
/*
function sevenAte9(str) {
  let final = str
  
  for (let i = 0; i < final.length; i++) {
    if (final[i] !== '9') continue
    
    if (final[i - 1] !== '7' || final[i + 1] !== '7') continue
    
    // Current number is 9 and is surrounded by 7s
    final = final.slice(0, i) + final.slice(i + 1)
  }
  
  return final
}
*/

// Now for something closer to my first answer but actually readable
/*
function sevenAte9(str) {
  return str.split('')
    .filter((x, i) => {
    if (x !== '9')
      return true
    else if (str[i - 1] !== '7' || str[i + 1] !== '7')
      return true
    else
      return false
  }).join('')
}
*/



/*
  Filter the number
*/

var filterString = function(value) {
  return +value.split('')
    .filter(x => +x == x)
    .join('')
}



/*
  Odd-Even String Sort
*/

function sortMyString(S) {
  return S.split('')
    .reduce(([even, odd], x, i) => i % 2 === 0 ? [even + x, odd] : [even, odd + x],['', ''])
    .join(' ')
}



/*
  All Inclusive?
*/

function containAllRots(str, arr) {
  for (let i = 0; i < str.length; i++) {
    const rotationStr = str.slice(i) + str.slice(0, i)
    
    if (!arr.includes(rotationStr)) 
      return false
  }
  
  return true
}



/*
  Sort by Last Char
*/

function last(x){
  return x.split(' ').sort((a, b) => {
    let aLast = a.slice(-1).toLowerCase()
    let bLast = b.slice(-1).toLowerCase()
    
    if (aLast === bLast)
      return 0
    else if (aLast < bLast)
      return -1
    else
      return 1
  })
}



/*
  Digits explosion
*/

function explode(s) {
  return s.split('').map(x => x.repeat(+x)).join('');
}



/*
  Fix string case
*/

function solve(s){
  const [lowerTotal, upperTotal] = s.split('')
    .reduce(([lowerSum, upperSum], x) => x === x.toLowerCase() ? [lowerSum, ++upperSum] : [++lowerSum, upperSum], [0, 0])
  
  return lowerTotal > upperTotal ? s.toUpperCase() : s.toLowerCase()
}



/*
  Are the numbers in order?
*/

function inAscOrder(arr) {
  return arr.every((x, i) => i === 0 ? true : x > arr[i - 1])
}

// Kata didn't specify whether or not the numbers should be strictly ascending or if they could repeat. 
// A solution without using the ternary would be to use the or short circuit evaluation.
// i === 0 || x > arr[i - 1]



/*
  Gauß needs help! (Sums of a lot of numbers).
*/

function f(n){
  return Number.isInteger(n) && n > 0 && n * (n+1) / 2 
};

// Guass Summation, an algorathim for finding the sum of 1 + 2 + 3 + 4..... + n
// The sum = (n + 1) * n / 2



/*
  Sum of array singles
*/

function repeats(arr){
  return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((sum, x) => sum + x, 0);
};

// The filter method has a O(n) and reduce has at lease O(n), it would be nice if we could combine these two into one loop
// We can do that simply through a for loop instead of using arr methods

// function repeats(arr){
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       sum += arr[i]
//     }
//   }
//   return sum
// };



/*
  Nth Smallest Element (Array Series #4)
*/

function nthSmallest(arr, pos){
  return arr.sort((a,b)=>a-b)[pos-1]
}



/*
  Maximum Length Difference
*/

function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) {
    return -1
  }
  
  firstArr = a1.map(x => x.length)
  secondArr = a2.map(x => x.length)
  return Math.max(
    Math.abs(Math.max(...firstArr) - Math.min(...secondArr)),
    Math.abs(Math.max(...secondArr) - Math.min(...firstArr))
  )
}



/*
  Factorial
*/

function factorial(n){
  if(n===0)return 1;
  return n*factorial(n-1)
}



/*
  Largest pair sum in array
*/

function largestPairSum (numbers) {
  const [largest, secondLargest, ...rest] = numbers.sort((a, b) => b - a)
  return largest + secondLargest
}



/*
  Love vs friendship
*/

function wordsToMarks(string){
  let sum = 0;
  for(let char of string) {
    sum += char.charCodeAt() - 96;
  }
  return sum;
}

// Alternatively you could also use methods to solve this problem, specifically split, and reduce

// function wordsToMarks(string){
//   return string.split('').reduce((sum, x) => sum + x.charCodeAt() - 96, 0)
// }



/*
  Predict your age!
*/

function predictAge(...ages){
  let sum = 0;
  for(let age of ages){
    sum += (age * age);
  }
  return Math.floor(Math.sqrt(sum) / 2);
}


// Math.hypot, returns the square root of a sum of inputs that have been squared. Therefore it is a perfect method for this problem
// We only need to implement the division of two and Math.floor

// function predictAge(...ages){
//   return Math.floor( Math.hypot(...ages) / 2 )
// }



/*
  Deodorant Evaporator
*/

function evaporator(content, evap_per_day, threshold){ 
  for (let i = 1; true; i++) {
    if ((((100 - evap_per_day) / 100) ** i) < (threshold / 100))
      return i
  }
}



/*
  Sum of angles
*/

function angle(n) {
  return 180 * (n - 2)
}



/*
  Find the vowels
*/

function vowelIndices(word){
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y']
  const vowelIndex =[]
  for (let i = 0, wordLower = word.toLowerCase(); i < word.length; i++) {
    if (VOWELS.includes(wordLower[i]))
      vowelIndex.push(i + 1)
  }
  return vowelIndex
}



/*
  Reverse a Number
*/

function reverseNumber(n) {
  if (n < 10 && n >= 0)
    return n
  
  return Math.sign(n) * +(+reverseNumber(Math.abs(n).toString().slice(1)) + Math.abs(n).toString().slice(0, 1))
}

// An ugly solution that uses recursion

function reverseNumber(n) {
  if (n < 10 && n > -10)
    return n
  return Math.sign(n) * +(String(Math.abs(n) % 10) + String(reverseNumber(Math.floor(Math.abs(n) / 10))))
}

// Another ugly solution that uses recursion

// A for loop solution

function reverseNumber(n) {
  let reversedNum = ''
  
  for (const num of n.toString()) {
    if (num === '-')
      continue
    reversedNum = num + reversedNum
  }
  
  return +(n < 0 ? '-' + reversedNum : reversedNum)
}



/*
  Sum of Triangular Numbers
*/

function sumTriangularNumbers(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += (i ** 2 + i) / 2
  }
  return sum
}

// This solution provides the summation of all triangular numbers from one to n which is what is asked.
// But this summation is also known as a Tetrahedral number and their is a formula for this

// In other words we can bring our time complexity down from O(n) to O(1)

function sumTriangularNumbers(n) {
  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6
}



/*
  Sum of numbers from 0 to N
*/

class SequenceSum {
  static showSequence(n) {
    if (n < 0) {
      return `${n}<0`
    } else if (n === 0) {
      return '0=0'
    }
    
    let sum = 0, sumArr =[]
    for (let i = 0; i <= n; i++) {
      sumArr.push(i)
      sum += i
    }
    return `${sumArr.join('+')} = ${sum}`
  }
}



/*
  Build a square
*/

const generateShape = (n) => ('+'.repeat(n) + '\n').repeat(Math.max(n - 1, 0)) + '+'.repeat(n)

// Making use of repeat twice is quite clever but how do you get rid of the last \n? Well initially I made it so their wouldn't be one by adding in a third repeat.

// A clever solution is to realize that trim() not only takes care of spaces but also tabs and line breaks. So we can use it here.

// const generateShape = n => ('+'.repeat(n) = '\n').repeat(n).trim()

// Easier to read and way more clever!



/*
  Sort by Last Char - Revisited
*/

// First Attempt
function last(x) {
  return x.split(' ')
    .sort((a, b) => a.slice(-1).charCodeAt() - b.slice(-1).charCodeAt())
}

// Second and Final Attempt
function last(x) {
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

// Old Attempt
function last(x){
  return x.split(' ').sort((a, b) => {
    let aLast = a.slice(-1).toLowerCase()
    let bLast = b.slice(-1).toLowerCase()
    
    if (aLast === bLast)
      return 0
    else if (aLast < bLast)
      return -1
    else
      return 1
  })
}



/*
  Speed Control
*/

function gps(s, x) {
  let maxAvgSpeed = 0
  for (let i = 0; i < x.length - 1; i++) {
    let distance = x[i + 1] - x[i]
    let avgSpeed = Math.floor( distance * 3600 / s  )
    
    maxAvgSpeed = avgSpeed > maxAvgSpeed ? avgSpeed : maxAvgSpeed
  }
  return maxAvgSpeed
}



/*
  Over The Road
*/

function overTheRoad(address, n){
  return n * 2 - address + 1;
}



/*
  Lost number in number sequence
*/

function findDeletedNumber(arr, mixArr) {
  return arr.find(x => !mixArr.includes(x)) || 0
}



/*
  Sum of Cubes
*/

function sumCubes(n) {
  return (n * (n + 1) / 2) ** 2;
}

// Sum of Cubes of n Natural Numbers Formula



/*
  Simple beads count
*/

function countRedBeads(n) {
  return Math.max((n - 1)*2, 0) 
}

// We could have used a ternary but I figured this would be more readable



/*
  Find the nth Digit of a Number
*/

const findDigit = (num, nth) => {
  const numString = Math.abs(num).toString()
  
  if (nth <= 0) {
    return -1
  }
  
  return +numString[numString.length - nth] || 0
}



/*
  Ordered Count of Characters
*/

const orderedCount = function (text) {
  const charMap = new Map()
  for (const letter of text) {
    charMap.set(letter, charMap.get(letter) + 1 || 1)
  }
  return Array.from(charMap)
}



/*
  max diff - easy
*/

function maxDiff(list) {
  return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
}



/*
  Averages of numbers
*/

function averages(numbers) {
  if (!numbers) return []
  return numbers.map((x, i) => (x + numbers[i + 1]) / 2)
    .slice(0, numbers.length - 1)
}

function averages(numbers) {
  if (!numbers) {
    return []
  }
  
  const avgArr = []
  for (let i = 0; i < numbers.length - 1; i++) {
    avgArr.push(
      (numbers[i] + numbers[i + 1]) / 2
    )
  }
  return avgArr
}



/*
  esreveR
*/

const reverse = array => {
  const reversedArr = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i])
  }
  return reversedArr
}



/*
  The average length
*/

function averageLength(arr) { 
  const avgLen = Math.round(arr.reduce((sum, x) => sum + x.length, 0) / arr.length)
  return arr.map(x => x[0].repeat(avgLen))
}



/*
  Automorphic Number (Special Numbers Series #6)
*/

function automorphic(n){
  return n.toString() === (n ** 2).toString().slice(-n.toString().length) ? 'Automorphic' : 'Not!!'
}

// endsWith method is the perfect method for this and allows us to bypass the need of slice and length from the previous answer

function automorphic(n){
  return (n ** 2).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!'
}



/*
  Simple remove duplicates
*/

function solve(arr) {
  return arr.filter((x,i) => i === arr.lastIndexOf(x));
};



/*
  Credit Card Mask
*/

function maskify(cc) {
  return '#'.repeat(Math.max(cc.length - 4, 0)) + cc.slice(-4);
}

// This answer is perfectly fine as it uses Math.max to guarentee no negative input is fed into the repeat method. However if we used the string method padStart we could get a better solution.

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}



/*
  Remove consecutive duplicate words
*/

const removeConsecutiveDuplicates = s => {
  return s.split(' ')
    .filter((x, i, arr) => arr[i - 1] !== x)
    .join(' ')
}



/*
  Alphabetical Addition
*/

function addLetters(...letters) {
  const value = letters.reduce((sum, x) => x.charCodeAt() + sum - 96, 0) % 26
  return value ? String.fromCharCode(value + 96) : 'z'
}

function addLetters(...letters) {
  let sum = 0
  for (const letter of letters) {
    sum += letter.charCodeAt() - 96
  }
  sum = sum % 26
  return sum ? String.fromCharCode(sum + 96) : 'z'
}



/*
  Thinking & Testing: A and B?
*/

const testit = (a,b) => a | b;

// I did not like this kata at all...



/*
  Mathemagics: the 21 Cards Trick
*/

function guessTheCard(audience) {
  const guessOne = [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]]
  const answerOne = audience.getInput(guessOne)
  
  // this array contains the answer
  let arrWithAns = guessOne.splice(answerOne, 1).flat()
  // this array holds the numbers that are not the answer
  let remaining = guessOne.flat()
  
  const guessTwo = [
    arrWithAns.slice(0, 3).concat(remaining.slice(0, 4)),
    arrWithAns.slice(3, 6).concat(remaining.slice(4, 8)),
    arrWithAns.slice(6).concat(remaining.slice(8))
  ]
  const answerTwo = audience.getInput(guessTwo)
  
  arrWithAns = guessTwo[answerTwo].splice(0, 3)
  remaining = guessTwo.flat()
  
  const guessThree = [
    arrWithAns.slice(0, 1).concat(remaining.slice(0, 6)),
    arrWithAns.slice(1, 2).concat(remaining.slice(6, 12)),
    arrWithAns.slice(2, 3).concat(remaining.slice(12))
  ]
  const answerThree = audience.getInput(guessThree)
  
  return guessThree[answerThree][0]
}

// This was a pretty challenging problem



/*
  Next Featured Number Higher than a Given Value
*/

function nextNumb(val) {
  let attempt = val + 1
  while(attempt < 9999999999) {
    if (isOdd(attempt) && multipleOfThree(attempt) && uniqueDigits(attempt)) {
      return attempt
    } else {
      attempt++
    }
  }
  return 'There is no possible number that fulfills those requirements'
}
  
function isOdd(num) {
  return num % 2 === 1
}
  
function multipleOfThree(num) {
  return num % 3 === 0
}
  
function uniqueDigits(num) {
  const numArr = num.toString().split('')
  return numArr.every(x => numArr.indexOf(x) === numArr.lastIndexOf(x))
}



/*
  Largest 5 digit number in a series
*/

function solution(digits){
  const digitArr = []
  while (digits.length > 4) {
    digitArr.push(digits.slice(0, 5))
    digits = digits.slice(1)
  }
  return Math.max(...digitArr)
}

// We could also do this with a for loop without affecting the input str and use the substr method instead of the slice method.

function solution(digits){
  const digitArr = []
  for (let i = 0; i < digits.length - 4; i++) {
    digitArr.push(digits.substr(i, 5))
  }
  return Math.max(...digitArr)
}



/*
  Parts of a list
*/

function partlist(arr) {
  const combinations = []
  for (let i = 0; i < arr.length - 1; i++) {
    combinations.push([
      arr.slice(0, i + 1).join(' '), 
      arr.slice(i + 1).join(' ')
    ])
  }
  return combinations
}



/*
  Strong Number (Special Numbers Series #2)
*/

function strong(n) {
  const string = n.toString()
  let sum = 0
  for (let digit of string) {
    sum += factorial(+digit)
  }
  return n === sum ? 'STRONG!!!!' : 'Not Strong !!'
}
  
function factorial(n) {
  if (n < 2) {
    return 1
  }
  return n * factorial(n - 1)
}



/*
  A Rule of Divisibility by 7
*/

function seven(m) {
  let steps = 0, num = m, string = m.toString()
  while (string.length > 2) {
    num = +string.slice(0, string.length - 1) - +string.slice(-1) * 2
    string = num.toString()
    steps++
  }
  return [num, steps]
}



/*
  Absent vowel
*/

function absentVowel(x) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  return VOWELS.findIndex(vowel => !x.includes(vowel))
}



/*
  Sort Out The Men From Boys 
*/

function menFromBoys(arr){
  const evens = [], odds = []
  for (let number of arr) {
    if (evens.includes(number) || odds.includes(number))
      continue
    
    if (isEven(number))
      evens.push(number)
    else
      odds.push(number)
  }
  evens.sort((a, b) => a - b)
  odds.sort((a, b) => b - a)
  return [...evens, ...odds]
}

function isEven(x) {
  return Math.abs(x) % 2 === 0
}



/*
  Folding your way to the moon
*/

function foldTo(distance) {
  if (distance < 0) return null
  return Math.max(Math.ceil(Math.log(10000 * distance) / Math.log(2)), 0)
}

// The formula I thought of for reaching the amount of folds required is 
// .001 * 2^(total_folds) = distance
// Solving for total_folds we get
// total_folds = Math.log(10000 * distance) / Math.log(2)
// This allows us to reach a constant time solution

// An alternative would be to use a less math heavy, more readable but now linear time complexity solution

function foldTo(distance) {
  if (distance < 0) return null
  let paperThickness = .0001, folds = 0
  while(paperThickness < distance) {
    paperThickness *= 2
    folds++
  }
  return folds
}



/*
  Folding your way to the moon
*/

function squares(x, n) {
  if (n < 1) return []
  
  const arr = [x]
  while (arr.length < n) {
    arr.push( arr.slice(-1) ** 2 )
  }
  return arr
}

// I was very close to the one line answer which would look like this

// return Array.from({length: n}).map((_, i) => Math.pow(x, Math.pow(2, i)))
// I could think of how to do the second Math.pow as I knew that the 2 would have to grow by i and I didn't think of nesting the powers



/*
  Maximum Triplet Sum (Array Series #7) 
*/

function maxTriSum(numbers){
  const uniqueArr = Array.from(new Set(numbers))
  uniqueArr.sort((a, b) => a - b)
  const bigThree = uniqueArr.slice(-3)
  
  return bigThree.reduce((sum, x) => sum + x, 0)
}



/*
  Simple consecutive pairs
*/

function pairs(ar){
  const len = ar.length % 2 ? ar.length - 1 : ar.length
  let total = 0
  for (let i = 0; i < len; i += 2) {
    let [first, second] = [ar[i], ar[i + 1]]
    if (first === second - 1 || first === second + 1)
      total++
  }
  return total
};

// We can instead look at the absolute difference between the two numbers and compare it to 1
// We don't have to worry about undefined if we are going to compare it to one as it will fail the test

function pairs(ar){
  let total = 0
  for (let i = 0; i < ar.length; i += 2) {
    let [first, second] = ar.slice(i, i + 2)
    if (Math.abs(first - second) === 1)
      total++
  }
  return total
};



/*
  V A P O R C O D E
*/

function vaporcode(string) {
  return string.toUpperCase().split('').filter(x => x !== ' ').join('  ');
}



/*
  Alternate case
*/

function alternateCase(s) {
  let final = ''
  for (let i = 0; i < s.length; i++) {
    final += s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase()
  }
  return final
}

// We don't need the counter variable for anything special so we can use a for...of loop instead

function alternateCase(s) {
  let final = ''
  for (let letter of s) {
    final += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
  }
  return final
}



/*
  Incrementer
*/

function incrementer(nums) { 
  return nums.map((x, i) => (x + (i + 1)) % 10); 
}



/*
  Currying functions: multiply all elements in an array
*/

function multiplyAll(array) {
  return (factor) => array.map(x => x * factor)
}



/*
  Functional Addition
*/

const add = a => b => a + b;



/*
  Going to the cinema
*/

function movie(card, ticket, perc) {
  let count = 1
  let aSum = ticket, bSum = card + ticket * perc
  while(aSum <= Math.ceil(bSum)) {
    aSum += ticket
    bSum += ticket * (perc ** (count + 1)) 
    count++
  }
  return count
};



/*
  Product Of Maximums Of Array (Array Series #2) 
*/

function maxProduct(numbers, size){
  return numbers.sort((a, b) => a - b)
    .slice(-size)
    .reduce((product, x) => product * x, 1)
}



/*
  Simple string characters
*/

function solve(s){
  return s.split('')
    .reduce(([upper, lower, num, special], x) => {
    if (!Number.isNaN(+x))
      num++
    else if (x.toLowerCase() === x.toUpperCase())
      special++
    else if (x === x.toLowerCase())
      lower++
    else if (x === x.toUpperCase())
      upper++
    return [upper, lower, num, special]
  }, [0, 0, 0, 0])
}



/*
  The Office I - Outed
*/

function outed(meet, boss) {
  const count = Object.keys(meet).length
  let score = 0
  for (let person in meet) {
    if (person === boss)
      score += meet[person] * 2
    else
      score += meet[person]
  }
  return score / count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
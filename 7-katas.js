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



/*
  Difference Of Squares
*/

function differenceOfSquares(n){
  return (n*(n+1)/2)**2 - n*(n+1)*(2*n+1)/6
}

// This solves the problem in constant time but uses a mathematical formula which may be difficult to understand and modify
// We can solve this problem in linear time by using a for loop, although slower the answer is now more readable and can easily be modified

function differenceOfSquares(n){
  let sum1 = 0, sum2 = 0
  for (let i = 1; i <= n; i++) {
    sum1 += i
    sum2 += i ** 2
  }
  return sum1 ** 2 - sum2
}



/*
  Disarium Number (Special Numbers Series #3)
*/

function disariumNumber(n){
  let disariumSum = 0, str = n.toString()
  for (let i = 0; i < str.length; i++) {
    disariumSum += str[i] ** (i + 1)
  }
  return disariumSum === n ? 'Disarium !!' : 'Not !!'
}



/*
  Smallest value of an array
*/

function min(arr, toReturn) {
  const min = {
    'value': Infinity,
    'index': -1
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min.value) {
      min.value = arr[i]
      min.index = i
    }
  }
  return min[toReturn]  
}



/*
  The Office II - Boredom Score
*/

function boredom(staff){
  const scores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  }
  let total = 0
  for (let person in staff) {
    total += scores[staff[person]]
  }
  return total > 99 ? 'party time!!' : 
         total > 80 ? 'i can handle this' : 'kill me now'
}



/*
  Digital cypher
*/

function encode(str,  n) {
  return str.split('').map((x, i) => x.charCodeAt() - 96 + +n.toString()[i % n.toString().length])
}



/*
  Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
*/

function countLanguages(list) {
  return list.reduce((languageObj, dev) => {
    languageObj[dev.language] = languageObj[dev.language] + 1 || 1
    return languageObj
  }, {})
}



/*
  Return the closest number multiple of 10
*/

const closestMultiple10 = num => {
  const remainder = num % 10
  
  if (remainder < 5) {
    return num - remainder
  } else {
    return num + (10 - remainder)
  }
};



/*
  Debug Sum of Digits of a Number
*/

function getSumOfDigits(integer){
  let sum = 0;
  const digits = integer.toString();
  for(let i = 0; i < digits.length; i++){
    sum += +digits[i];
  }
  return sum;
}



/*
  Indexed capitalization
*/

function capitalize(s,arr){
  let final = s
  for (let pos of arr) {
    if (pos > s.length - 1) continue
    final = final.slice(0, pos) + final[pos].toUpperCase() + final.slice(pos + 1)
  }
  return final
};



/*
  Return the first M multiples of N
*/

const multiples = (m, n) => Array.from({length: m}).map((_, i) => n * (i + 1))



/*
  Word values
*/

const wordValue = a => a.map((word, pos) => word.split('').reduce((sum, letter) => sum + Math.max(letter.charCodeAt() - 96, 0), 0) * ++pos)

// After writing that most unreadable code, I wanted to see if we could do something a bit more readable

function wordValue(a) {
  const finalArr = []
  for (let i = 0; i < a.length; i++) {
    let sum = 0
    for (let letter of a[i]) {
      sum += Math.max(letter.charCodeAt() - 96, 0)
    }
    finalArr.push(sum * (i + 1))
  }
  return finalArr
}



/*
  Recursion #1 - Factorial
*/

const factorial = n => n < 2 ? 1 : n * factorial(--n)

// and a non one liner

const factorial = n => {
  if (n < 2) return 1
  return n * factorial(n - 1)
}



/*
  Jumping Number (Special Numbers Series #4)
*/

function jumpingNumber(n){
  let prevDigit = +n.toString()[0]
  for (let digit of n.toString().slice(1)) {
    if (Math.abs(prevDigit - +digit) !== 1) return 'Not!!'
    prevDigit = +digit
  }
  return 'Jumping!!'
}



/*
  Substituting Variables Into Strings: Padded Numbers
*/

function solution(value){
  return `Value is ${value.toString().padStart(5,'0')}`
}



/*
  Longest vowel chain
*/

function solve(s){
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  const sublengths = []
  let currentLength = 0
  for (let char of s) {
     if (VOWELS.includes(char))
       currentLength++
     else if (currentLength) {
       sublengths.push(currentLength)
       currentLength = 0
     }
   }
   return Math.max(...sublengths, currentLength)
 }



/*
  Basic Sequence Practice
*/

function sumOfN(n) {
  const series = [0]
  for (let i = 1; i <= Math.abs(n); i++) {
    // Guass Summation
    series.push(
      (i * (i+1))/2 * Math.sign(n)
    )
  }
  return series
};



/*
  Numbers to Letters
*/

function switcher(x) {
  const LEGEND = 'zyxwvutsrqponmlkjihgfedcba!? '
  let finalWord = ''
  for (let value of x) {
    finalWord += LEGEND[value - 1]
  }
  return finalWord
}



/*
  Discover The Original Price
*/

function discoverOriginalPrice(discountedPrice, salePercentage){
  return Math.round(discountedPrice / (100 - salePercentage) * 10000) / 100
}

// It'd be a bit easier to read if we converted the salePercentage into a decimal first and then used toFixed to handle the rounding.

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2)
}



/*
  Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
*/

function isSameLanguage(list) {
  return list.every(dev => dev.language === list[0].language);
}



/*
  Cat and Mouse - Easy Version
*/

function catMouse(x){
  return x.length > 5 ? 'Escaped!' : 'Caught!';
}



/*
  The Office IV - Find a Meeting Room
*/

function meeting(x){
  const roomIndex = x.findIndex(room => room === 'O')
  if (roomIndex === -1) 
    return 'None available!'
  return roomIndex
}



/*
  Special Number (Special Numbers Series #5)
*/

function specialNumber(n){
  const special = ['0', '1', '2', '3', '4', '5']
  return n.toString().split('').every(x => special.includes(x)) ? 'Special!!' : 'NOT!!'
}



/*
  Unlucky Days
*/

function unluckyDays(year){
  let total = 0
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5)
      total++
  }
  return total
}



/*
  Last Survivor
*/

function lastSurvivor(letters, coords) {
  for (let coord of coords) {
    letters = letters.slice(0,coord) + letters.slice(coord+1);
  }
    return letters;
  }



/*
  All Star Code Challenge #22
*/

function toTime(seconds) {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor(seconds % (60 * 60) / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

function toTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(seconds % 3600 / 60)
  return `${hours} hour(s) and ${minutes} minute(s)`
}



/*
  ToLeetSpeak
*/

function toLeetSpeak(str) {
  const LEGEND = {
    A: '@',
    B: '8',
    C: '(',
    E: '3',
    G: '6',
    H: '#',
    I: '!',
    L: '1',
    O: '0',
    S: '$',
    T: '7',
    Z: '2'
  }
  let final = ''
  for (let char of str) {
    if (char in LEGEND)
      final += LEGEND[char]
    else
      final += char
  }
  return final
}



/*
  Clean up after your dog
*/

function crap(x, bags, cap){
  let poopCount = 0
  for (let row of x) {
    for (let pos of row) {
      if (pos === 'D') 
        return 'Dog!!'
      if (pos === '@') 
        poopCount++
    }
  }
  return bags * cap < poopCount ? 'Cr@p' : 'Clean'
}



/*
  The old switcheroo
*/

function vowel2index(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  let final = ''
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes( str[i].toLowerCase() ))
      final += i + 1
    else
      final += str[i]
  }
  return final
}



/*
  All Star Code Challenge #3
*/

const removeVowels = str => str.split('').filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x.toLowerCase())).join('')

// Fancy oneliner but let me write a more readable solution

function removeVowels(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  let final = ''
  for (let char of str) {
    if (VOWELS.includes(char))
      continue
    final += char
  }
  return final
}



/*
  Unique string characters
*/

function solve(a,b){
  let aFiltered = ''
  let bFiltered = ''
  for (let i = 0, n = Math.max(a.length, b.length); i < n; i++) {
    if (!b.includes(a[i]) && a[i])
      aFiltered += a[i]
    if (!a.includes(b[i]) && b[i])
      bFiltered += b[i]
  }
  return aFiltered + bFiltered
};

const solve = (a, b) => [...a, ...b].filter(x => a.includes(x) ^ b.includes(x)).join('')



/*
  Building blocks
*/

class Block{

  constructor([width, length, height]){
    this.width = width;
    this.length = length;
    this.height = height;
  }
  
  getWidth() {
    return this.width;
  }
  
  getLength() {
    return this.length;
  }
  
  getHeight() {
    return this.height;
  }
  
  getVolume() {
    return this.width * this.length * this.height;
  }
  
  getSurfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
  }
}



/*
  Product Array (Array Series #5)
*/

function productArray(numbers){
  const newArr = []
  for (let i = 0; i < numbers.length; i++) {
    let product = 1
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue
      product *= numbers[j]
    }
    newArr.push(product)
  }
  return newArr
}

// A thing to realize is that each position can be calculated as the total product divided by the number in that position.
// Knowing that we can find a solution that is O(n)

function productArray(numbers){
  const totalProduct = numbers.reduce((product, x) => product * x, 1)
  return numbers.map(number => totalProduct / number)
}



/*
  Evens and Odds
*/

function evensAndOdds(num){
  return num % 2 ? num.toString(16) : num.toString(2);
}



/*
  String Merge!
*/

function stringMerge(string1, string2, letter) {
  return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
}



/*
  ATM
*/

function solve(n) {
  if (n % 10 !== 0)
    return -1
  
  const banknotes = [500, 200, 100, 50, 20, 10]
  let totalNotes = 0
  for (let note of banknotes) {
    if (n < note) 
      continue
    totalNotes += Math.floor(n / note)
    n = n % note
  }
  return totalNotes
}



/*
  Nth Root of a Number
*/

const root = (x, n) => x ** (1/n);



/*
  Coding Meetup #11 - Higher-Order Functions Series - Find the average age
*/

function getAverageAge(list) {
  const ageSum = list.reduce((total, dev) => total + dev.age, 0)
  return Math.round( ageSum / list.length )
}



/*
  Valid Spacing
*/

function validSpacing(s) {
  return s === s.split(' ').filter(x => x).join(' ')
}



/*
  Remove All The Marked Elements of a List
*/

Array.prototype.remove_ = (integer_list, values_list) => {
  return integer_list.filter(x => !values_list.includes(x))
}



/*
  Split In Parts
*/

const splitInParts = (s, partLength) => {
  const finalArr = []
  for (let i = 0; i < s.length; i += partLength) {
    finalArr.push( s.slice(i, i + partLength) )
  }
  return finalArr.join(' ')
}



/*
  Find the lucky numbers
*/

const filterLucky = list => {
  return list.filter(x => String(x).includes('7'))
}



/*
  Maximum Gap (Array Series #4)
*/

function maxGap (numbers){
  const sorted = [...numbers].sort((a, b) => a - b)
  let maxDifference = -Infinity
  for (let i = 1; i < sorted.length; i++) {
    let currentDifference = sorted[i] - sorted[i - 1]
    if (currentDifference > maxDifference)
      maxDifference = currentDifference
  }
  return maxDifference
}



/*
  Responsible Drinking
*/

function hydrate(s) {
  const total = s.split('')
    .filter(x => x >= '0' && x <= '9')
    .reduce((sum, x) => sum + +x, 0) 
  return `${total} glass${total > 1 ? 'es' : ''} of water`
}



/*
  Consecutive items
*/

function consecutive(arr, a, b) {
  const pos = arr.findIndex(x => x === a)
  return arr[pos - 1] === b || arr[pos + 1] === b
}



/*
  Minimum Steps (Array Series #6)
*/

function minimumSteps(numbers, value){
  const sorted = [...numbers].sort((a, b) => b - a)
  let count = 0, sum = sorted.pop()
  while (sum < value) {
    sum += sorted.pop()
    count++
  }
  return count
}



/*
  Minimum Steps (Array Series #6)
*/

function lostSheep(friday,saturday,total){
  const mostGroups = Math.max(friday.length, saturday.length)
  let sum = 0
  
  for (let i = 0; i < mostGroups; i++) {
    sum += (friday[i] || 0) + (saturday[i] || 0)
  }
  
  return total - sum
}

// This answer is too manual and has low readability. If we were to join the arrays, we can use a reduce method to decrease the total per group of sheep

function lostSheep(friday,saturday,total){
  return [...friday, ...saturday].reduce((remaining, x) => remaining - x, total)
}



/*
  How many arguments
*/

function args_count(...args){
  return args.length
}



/*
  Changing letters
*/

function swap(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  
  return string.split('')
    .map(x => VOWELS.includes(x) ? x.toUpperCase() : x)
    .join('')
}



/*
  Return String of First Characters
*/

function makeString(s){
  return s.split(' ').map(x => x[0]).join('')
}



/*
  Inspiring Strings
*/

function longestWord(stringOfWords){
  let maxLength = 0, maxWord = ''
  for (let word of stringOfWords.split(' ')) {
    if (word.length >= maxLength) {
      maxWord = word
      maxLength = word.length
    }
  }
  return maxWord
}



/*
  Letterbox Paint-Squad
*/

const paintLetterboxes = (start, end) => {
  let string = ''
  for (let i = start; i <= end; i++) {
    string += i
  }
  
  let stringMap = new Map()
  for (let digit of string) {
    stringMap.set(+digit, stringMap.get(+digit) + 1 || 1)
  }
  
  let arr = []
  for (let i = 0; i <= 9; i++) {
    arr.push(stringMap.get(i) || 0)
  }
  return arr
}



/*
  Stanton measure
*/

function stantonMeasure(arr) {
  const count = arr.reduce((total, x) => x === 1 ? ++total : total, 0)
  return arr.reduce((total, x) => x === count ? ++total : total, 0)
}

// Rather inneficient as we have to perform two reduce methods.

function stantonMeasure(arr) {
  const digitMap = new Map()
  for (let x of arr) {
    digitMap.set(x, digitMap.get(x) + 1 || 1)
  }
  return digitMap.get(digitMap.get(1)) || 0
}

// Definitely an improvement as we only have to traverse the array once using a map
// We can probably make it a bit shorter if we use the reduce method.

function stantonMeasure(arr) {
  const digitMap = arr.reduce((map, x) => map.set(x, map.get(x) + 1 || 1), new Map())
  return digitMap.get(digitMap.get(1)) || 0
}



/*
  Find Count of Most Frequent Item in an Array
*/

function mostFrequentItemCount(collection) {
  const digitMap = collection.reduce((map, x) => map.set(x, map.get(x) + 1 || 1), new Map([[0, 0]]))
  return Math.max(...digitMap.values())
}



/*
  Head, Tail, Init and Last
*/

function head(arr) {
  return arr[0]
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

function last(arr) {
  return arr[arr.length - 1];
}



/*
  Nth power rules them all!
*/

function modifiedSum(a, n) {
  let squareSum = 0, sum = 0
  for (let num of a) {
    squareSum += num ** n
    sum += num
  }
  return squareSum - sum
}



/*
  shorter concat [reverse longer]
*/

function shorter_reverse_longer(a,b){
  let shorter, longer
  if (a.length < b.length) {
    shorter = a
    longer = b
  } else {
    shorter = b
    longer = a
  }
  
  return shorter + longer.split('').reverse().join('') + shorter
}

function shorter_reverse_longer(a,b){
  const shorter = a.length < b.length ? a : b
  const longer = a.length < b.length ? b : a
  return shorter + longer.split('').reverse().join('') + shorter
}



/*
  Average Scores
*/

function average(scores) {
  return Math.round(scores.reduce((sum, x) => sum + x, 0) / scores.length);
}



/*
  By 3, or not by 3? That is the question . . .
*/

function divisibleByThree(str){
  const sum = [...str].reduce((sum, x) => sum + +x, 0)
  return sum % 3 === 0
}



/*
  Holiday III - Fire on the boat
*/

function fireFight(s){
  return s.split(' ').map(item => item === 'Fire' ? '~~' : item).join(' ')
}

// We can use the string method replaceAll instead of the map array method

function fireFight(s){
  return s.replaceAll('Fire', '~~')
}



/*
  Number Of Occurrences
*/

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.reduce((count, x) => x === element ? ++count : count, 0)
  }
});

Array.prototype.numberOfOccurrences = function(element) {
  return this.reduce((count, x) => x === element ? ++count : count, 0)
}



/*
  Basic Math (Add or Subtract)
*/

function calculate(str) {
  return eval(str.replaceAll('plus', '+').replaceAll('minus', '-')) + ''
}



/*
  Reverse the bits in an integer
*/

function reverseBits (n) {
  return Number.parseInt(n
      .toString(2)
      .split('')
      .reverse()
      .join('')
      , 2);
}



/*
  Flatten
*/

const flatten = array => array.flat();



/*
  Say hello!
*/

const greet = name =>  name ? `hello ${name}!` : null;



/*
  Arithmetic progression
*/

function arithmeticSequenceElements(a, d, n) {
	const sequence = []
  for (let i = 0; i < n; i++) {
    sequence.push( i * d + a )
  }
  return sequence.join(', ')
}



/*
  Double Sort
*/

function dbSort(a){
  const numbers = [], strings = []
  for (let el of a) {
    typeof el === 'number' ? numbers.push(el) : strings.push(el)
  }
  numbers.sort((a, b) => a - b)
  strings.sort()
  return [...numbers, ...strings]
}



/*
  Check three and two
*/

function checkThreeAndTwo(array) {
  const charMap = array.reduce((map, x) => map.set(x, map.get(x) + 1 || 1), new Map())
  const values = [...charMap.values()]
  return values.includes(2) && values.includes(3)
}



/*
  Looking for a benefactor
*/

function newAvg(arr, newavg) {
  const total = arr.reduce((sum, x) => sum + x, 0)
  const neededDonation = Math.ceil(newavg * (arr.length + 1) - total)
  if (neededDonation < 0) {
    throw new Error('Expected New Average is too low')
  }
  return neededDonation
}



/*
  Add property to every object in array
*/

questions.forEach((question, i) => {
  const newQuestion = {...question, usersAnswer: null}
  questions.splice(i, 1, newQuestion)
})

// A bit overengineered, to add a new property to an object, we can simply use dot notation.

questions.forEach(question => question.usersAnswer = null)



/*
  Find min and max
*/

function getMinMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}



/*
  Especially Joyful Numbers
*/

function numberJoy(n) {
  const digitString = n.toString()
  const digitArr = [...digitString].map(x => +x)
  const digitSum = digitArr.reduce((sum, x) => sum + x, 0)
  const reverseDigitSum = +String(digitSum).split('').reverse().join('')
  return digitSum * reverseDigitSum === n
}



/*
  Interview Question (easy)
*/

function getStrings(city){
  const charArray = city.toLowerCase().split('').filter(x => x !== ' ')
  const charMap = charArray.reduce((map, char) => map.set(char, (map.get(char) || '') + '*'), new Map())
  return [...charMap].map(x => x.join(':')).join(',')
}



/*
  Sum of all arguments
*/

const sum = (...arr) => arr.reduce((sum, x) => sum + x, 0)



/*
  Regexp Basics - is it a vowel?
*/

String.prototype.vowel = function() {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  const string = this.toString().toLowerCase()
  return VOWELS.includes(string)
};



/*
  Nickname Generator
*/

function nicknameGenerator(name){
  if (name.length < 4) 
    return 'Error: Name too short'
  
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  return VOWELS.includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
}



/*
  Nice Array
*/

function isNice(arr) {
  if (!arr.length) 
    return false
  return arr.every(x => {
    return arr.includes(x - 1) || arr.includes(x + 1)
  })
}



/*
  Computer problem series #1: Fill the Hard Disk Drive
*/

function save(sizes, hd) {
  let sum = 0, arr = []
  
  for (let size of sizes) {
    if (sum + size > hd)
      break
    
    sum += size
    arr.push(size)
  }
  return arr.length
}



/*
  makeBackronym
*/

const makeBackronym = string => {
  return string
  	.toUpperCase()
    .split('')
    .map(letter => dict[letter] )
    .join(' ');
};



/*
  Band name generator
*/

function bandNameGenerator(str) {
  let repeat = false
  if (str.at(0) === str.at(-1))
    repeat = true
  
  let uppercased = str[0].toUpperCase() + str.slice(1)
  
  if (repeat)
    return `${uppercased}${uppercased.slice(1)}`
  else
    return `The ${uppercased}`
}



/*
  Largest Elements
*/

function largest(n, array) {
  if (n === 0) return []
  const sorted = [...array].sort((a, b) => a - b)
  return sorted.slice( -n )
}



/*
  Vowel one
*/

function vowelOne(s){
  const VOWELS = 'aeiou'
  return s.split('')
    .map(x => VOWELS.includes(x.toLowerCase()) ? '1' : '0')
    .join('')
}



/*
  Return the Missing Element
*/

function getMissingElement(superImportantArray){
  for(let i=0;i<=9;i++){
    if(!superImportantArray.includes(i)){
      return i;
    }
  }
}

// Our previous solution works as we step through each number and explicitely find the missing one, we can also realize that the sum of the array should be 45 and therefore if we subtract our arrSum from 45 we will arrive at the missing value

function getMissingElement(superImportantArray){
  const arrSum = superImportantArray.reduce((sum, x) => sum + x, 0)
  return 45 - arrSum
}



/*
  Drone Fly-By
*/

function flyBy(lamps, drone){
  const lampsTurnedOn = Math.min(drone.length, lamps.length)
  const lampsLeft = Math.max(0, lamps.length - drone.length)
  return 'o'.repeat(lampsTurnedOn) + 'x'.repeat(lampsLeft)
}

// Of course this kata can be perfectly solved by using the fill method which fills an array with a static value from a starting to ending index.

const flyBy = (lamps, drone) => [...lamps].fill('o', 0, drone.length).join('')



/*
  Insert dashes
*/

function insertDash(num) {
  let dashedNum = '', wasOdd = false
  for (let digit of num.toString()) {
    if (wasOdd && digit % 2 === 1)
      dashedNum += '-' + digit
    else
      dashedNum += digit
    
    if (digit % 2 === 1)
      wasOdd = true
    else
      wasOdd = false
  }
  return dashedNum
}



/*
  L2: Triple X
*/

function tripleX(str){
  return str.indexOf('x') === str.indexOf('xxx') && str.includes('x')
}



/*
  Evens times last
*/

function evenLast(numbers) {
  if (!numbers.length) return 0
  return numbers.reduce((sum, x, i) => i % 2 === 0 ? sum + x : sum, 0) * numbers.at(-1)
}



/*
  Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
*/

function product (string) {
  let exclamSum = 0, questionSum = 0
  for (const char of string) {
    if (char === '!')
      exclamSum++
    else if (char === '?')
      questionSum++
  }
  return exclamSum * questionSum
}



/*
  Filter Long Words
*/

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(x => x.length > n)
}



/*
  lucky number
*/

function isLucky(n) {
  const sumOfDigits = n.toString()
    .split('')
    .reduce((sum, x) => sum + +x, 0)
  return sumOfDigits === 0 || sumOfDigits % 9 === 0
}

// And I thought this was a clever and concise answer, turns out you can just do the modulus of n and it will work because of math
// therfore this is a valid answer

function isLucky(n) {
  return n % 9 === 0 || n === 0
}



/*
  Scaling Squared Strings
*/

function scale(strng, k, n) {
  if (!strng)
    return ''
  
  const strArray = strng.split('\n')
  
  const horizontalScaled = strArray.map(word => {
    let newWord = ''
    for (const letter of word) {
      newWord += letter.repeat(k)
    }
    return newWord
  })
  
  const verticallyScaled = []
  for (const entry of horizontalScaled) {
    for (let i = 0; i < n; i++) {
      verticallyScaled.push(entry)
    }
  }
  
  return verticallyScaled.join('\n')
}



/*
  Building Strings From a Hash
*/

function solution(pairs){
  return Object.entries(pairs).map(([key, value]) => `${key} = ${value}`).join(',');
}



/*
  Initialize my name
*/

function initializeNames(name){
  const nameArray = name.split(' ')
  if (nameArray.length < 3)
    return name
  
  return nameArray.map((x, i) => {
    if (i > 0 && i < nameArray.length - 1)
      return `${x[0]}.`
    else
      return x
  }).join(' ')
}



/*
  Unscrambled eggs
*/

const unscrambleEggs = word => word.split('egg').join('');

// This uses the split and join method, if we wanted to simply use a single method we could use the replaceAll method

const unscrambleEggs = word => word.replaceAll('egg', '')



/*
  Broken sequence
*/

function findMissingNumber(sequence) {
  if (sequence.includes('a')) return 1
  if (!sequence.length) return 0
  
  const numberArr = sequence.split(' ')
  for (let i = 1; i <= numberArr.length; i++) {
    if (!numberArr.includes(i.toString()))
      return i
  }
  return 0
}



/*
  Find all occurrences of an element in an array
*/

const findAll = (array, n) => {
  const finalArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n)
      finalArr.push(i)
  }
  return finalArr
}

// It might look like we could use a map and filter method but it would be a bit convoluted
// A better array method would be to use a reduce

const findAll = (array, n) => {
  return array.reduce((finalArr, x, i) => x === n ? [...finalArr, i] : finalArr, [])
}



/*
  Find the divisors!
*/

function divisors(integer) {
  const divisorsArr = []
  
  for (let i = 2; i<integer; i++) {
    if ((integer % i) === 0) {
      divisorsArr.push(i)
    }
  }
  if (!divisorsArr.length) {
    return `${integer} is prime`
  }
  
  return divisorsArr
};



/*
  String ends with?
*/

const solution = (str, ending) => str.endsWith(ending);



/*
  Don't give me five!
*/

function dontGiveMeFive(start, end) {
  let total = 0
  for (let i = start; i <= end; i++) {
    if (i.toString().includes('5'))
      continue
    total++
  }
  return total
}



/*
  Breaking chocolate problem
*/

const breakChocolate=(n,m)=>Math.max(n*m-1,0)



/*
  Two Oldest Ages
*/

function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}



/*
  Remove duplicate words
*/

function removeDuplicateWords (s) {
  return s.split(' ')
    .filter((x, i, arr) => i === arr.indexOf(x))
    .join(' ')
}

// We can also use the Set class to filter out duplicates

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')



/*
  Triangular Treasure
*/

const triangular = n => n > 0 ? n*(n+1)/2 : 0;



/*
  Palindrome chain length
*/

function isPalindrome(n) {
  const string = n.toString()
  return string === string.split('').reverse().join('')
}

const palindromeChainLength = n => {
  let steps = 0
  while(!isPalindrome(n)) {
    const reversed = +n.toString().split('').reverse().join('')
    n += reversed
    steps++
  }
  return steps
}



/*
  All unique
*/

function hasUniqueChars(str){
  return str === [...new Set(str)].join('');
}



/*
  Sum even numbers
*/

function sumEvenNumbers(input) {
  return input.filter(x => x % 2 === 0).reduce((sum, x) => sum + x, 0);
}



/*
  Halving Sum
*/

function halvingSum(n) {
  let i = 1, sum = 0
  while(Math.floor(n / i) >= 1) {
    sum += Math.floor(n / i)
    i = i * 2
  }
  return sum
}

// Recursion can make this solution a lot easier to read

function halvingSum(n) {
  if (n <= 1)
    return 1
  return n + halvingSum(Math.floor(n / 2))
}



/*
  Boiled Eggs
*/

const cookingTime = eggs => Math.ceil(eggs / 8) * 5;



/*
  Between Extremes
*/

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);



/*
  Formatting decimal places #1
*/

function twoDecimalPlaces(number) {
  return Math.sign(number)*Math.floor(Math.abs(number)*100)/100;
}

// This was my solution without refrencing the docs, after refrencing the docs I realized we can use Math.trunc to truncate the decimals

function twoDecimalPlaces(number) {
  return Math.trunc(number * 100) / 100
}



/*
  Calculate Two People's Individual Ages
*/

function getAges(sum, difference) {
  const age1 = (sum + difference) / 2
  const age2 = (sum - difference) / 2
  
  return Math.min(age1, age2, sum, difference) < 0 ? null : [age1, age2]
}

// The check on the last line is awesome, before I was checking each var individually combining them with an || but this works out best



/*
  Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
*/

function findAdmin(list, lang) {
  return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes');
}



/*
  Who is the killer?
*/

function killer(suspectInfo, dead) {
  for(let suspect in suspectInfo)
    if(dead.every(x=>suspectInfo[suspect].includes(x)))
      return suspect
}



/*
  Dot Calculator
*/

function dotCalculator (equation) {
  const [first, operator, second] = equation.split(' ')
  let length = 0
  switch (operator) {
    case "+": {
      length = first.length + second.length
      break
    }
    case "-": {
      length = first.length - second.length
      break
    }
    case "*": {
      length = first.length * second.length
      break
    }
    case "//": {
      length = first.length / second.length
      break
    }
  }
  return '.'.repeat(length)
}



/*
  Previous multiple of three
*/

const prevMultOfThree = n => {
  if (n === 0) {
    return null;
  } else if (n % 3 === 0) {
    return n;
  } else {
    return prevMultOfThree(+n.toString().slice(0, -1));
  }
}



/*
  Frequency sequence
*/

function freqSeq(str, sep) {
  const arr = str.split('')
  const charMap = arr.reduce((map, x) => map.set(x, map.get(x) + 1 || 1), new Map())
  
  return arr.map(x => charMap.get(x))
    .join(sep)
}



/*
  Help Bob count letters and digits.
*/

function countLettersAndDigits(input) {
  return input.split('') 
    .filter(x => (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z') || (x >= '0' && x <= '9'))
    .length
}



/*
  Find Screen Size
*/

function findScreenHeight(width, ratio) {
  const [x,y] = ratio.split(':')
  return `${width}x${width*y/x}`
}



/*
  Sort arrays - 1
*/

function sortme( names ){
  return names.sort();
}



/*
  Elevator Distance
*/

function elevatorDistance(array) {
  let total = 0;
  
  for (let i = 0; i < array.length - 1; i++) {
    total += Math.abs(array[i] - array[i + 1]);
  }
  
  return total;
}



/*
  Enumerable Magic #5- True for Just One?
*/

function one(arr, fun){
  let total = 0
  for (let number of arr) {
    if (fun(number))
      total++
  }
  return total === 1
}



/*
  How many consecutive numbers are needed?
*/

function consecutive(arr) {
  return arr.length > 0
    ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length
    : 0;
}



/*
  Coding Meetup #14 - Higher-Order Functions Series - Order the food
*/

function orderFood(list) {
  return Object.fromEntries(
    list.reduce((map, dev) => map.set(dev.meal, map.get(dev.meal) + 1 || 1), new Map())
  )
}



/*
  Max-min arrays
*/

function solve(arr) {
  arr.sort((a, b) => a - b)
  const firstHalf = arr.slice(0, Math.min(arr.length / 2))
  const secondHalf = arr.slice(Math.min(arr.length / 2))
  
  const final = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      final.push(secondHalf.pop())
    } else {
      final.push(firstHalf.shift())
    }
  }
  return final
}



/*
  Hells Kitchen
*/

function gordon(a) {
  const map = new Map([
    ['A', '@'],
    ['E', '*'],
    ['I', '*'],
    ['O', '*'],
    ['U', '*'],
  ])
  return a.split('').map(char => map.get(char.toUpperCase()) || char.toUpperCase()).join('')
    .split(' ').map(word => `${word}!!!!`).join(' ')
}



/*
  Extra Perfect Numbers (Special Numbers Series #7)
*/

function extraPerfect(n){
  const arr = [];
  for (let i = 1; i <= n; i += 2){
    arr.push(i);
  }
  return arr;
}

function extraPerfect(n){
  return Array.from({length: Math.floor((n + 1) / 2)}).map((_, i) => i * 2 + 1)
}



/*
  Fun with ES6 Classes #2 - Animals and Inheritance
*/

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}



/*
  Even or Odd - Which is Greater?
*/

function evenOrOdd(str) {
  const [evenSum, oddSum] = str.split('').reduce(([sum1, sum2], x) => x % 2 === 0 ? [sum1 + +x, sum2] : [sum1, sum2 + +x], [0, 0])
  if (evenSum > oddSum)
    return 'Even is greater than Odd'
  else if (evenSum < oddSum)
    return 'Odd is greater than Even'
  else
    return 'Even and Odd are the same'
}



/*
  Move 10
*/

function moveTen(s) {
  return String.fromCharCode(
    ...s.split('')
    .map(x => (x.charCodeAt() - 97 + 10) % 26 + 97)
  )
}



/*
  Correct the time-string
*/

function timeCorrect(timestring) {
  if (timestring === '')
    return ''
  // Checks for null and three valid number inputs
  if (timestring === null || 
      timestring.split(':').length < 3 || 
      timestring.split('').some(x => x.toLowerCase() !== x.toUpperCase()))
    return null

  let [h, m, s] = timestring.split(':')
  if (s >= 60) {
    m = +m + Math.floor(s / 60)
    s = s % 60
  }
  if (m >= 60) {
    h = +h + Math.floor(m / 60)
    m = m % 60
  }
  if (h >= 24) {
    h = h % 24
  }
  
  return [h, m, s].map(x => x.toString().padStart(2, '0')).join(':')
}



/*
  last digits of a number
*/

function lastDigit(n, d) {
  if (d <= 0) return []
  return n.toString().slice(-d).split('').map(Number)
}



/*
  Split The Bill
*/

function splitTheBill(x) {
  const total = Object.values(x).reduce((sum, cost) => sum + cost, 0)
  const n = Object.keys(x).length
  
  const final = {}
  for (let person in x) {
    final[person] = +(x[person] - total / n).toFixed(2)
  }
  return final
}



/*
  Unique Sum
*/

function uniqueSum(lst) {
  return lst.length ? [...new Set(lst)].reduce((sum, x) => sum + x, 0) : null
}



/*
  Well of Ideas - Harder Version
*/

function well(x) {
  const total = x.reduce((sum, subArr) => sum + subArr.filter(y => (y + '').toLowerCase() === 'good').length, 0)
  
  if (total > 2) return 'I smell a series!'
  else if (total > 0) return 'Publish!'
  else return 'Fail!'
}



/*
  Search for letters
*/

function change(string){
  string = string.toLowerCase()
  let finalStr = ''
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(i + 97)
    finalStr += string.includes(letter) ? '1' : '0'
  }
  return finalStr
}



/*
  Javascript filter - 1
*/

const searchNames = logins => logins.filter(([username, email]) => username.endsWith('_'))



/*
  The Office III - Broken Photocopier
*/

function broken(x){
  return x.split('').map(l => l === '1' ? '0' : '1').join('')
}



/*
  "Very Even" Numbers.
*/

function isVeryEvenNumber(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((sum, x) => sum + +x, 0)
  }
  return n % 2 === 0
}



/*
  Debug Basic Calculator
*/

const calculate = (a, o, b) => {
  if(o === "+") { 
    return a + b
  } else if(o === "-") {
    return a - b
  } else if(o === "/" && b !== 0) { 
    return a / b
  } else if(o === "*") {
    return a * b
  } else {
    return null
  }
}



/*
  Interactive Dictionary
*/

class Dictionary {
  constructor() {
    this.memory = new Map()
  }
  
  newEntry(key, value) {
    this.memory.set(key, value)
  }
  
  look(key) {
    return this.memory.has(key) ? this.memory.get(key) : `Can't find entry for ${key}`
  }
}



/*
  We Have Liftoff
*/

function liftoff(instructions){
  instructions.sort((a, b) => b - a );
  instructions.push('liftoff!');
  return instructions.join(' ');
}



/*
  Length and two values.
*/

function alternate(n, firstValue, secondValue){
  return Array.from({ length: n }).map((_, i) => i % 2 ? secondValue : firstValue)
}



/*
  Merge two arrays
*/

function mergeArrays(a, b) {
  const finalArr = []
  for (let i = 0, maxLen = Math.max(a.length, b.length); i < maxLen; i++) {
    if (i < a.length)
      finalArr.push(a[i])
    if (i < b.length)
      finalArr.push(b[i])
  }
  return finalArr
}



/*
  Filter unused digits
*/

function unusedDigits(...args) {
  return [...'0123456789'].filter(x => !args.join('').includes(x)).join('')
}



/*
  Scrolling Text
*/

function scrollingText(text){
  const upperCased = text.toUpperCase()
  return Array.from({length: text.length})
    .map((_, i) => upperCased.slice(i) + upperCased.slice(0, i))
}



/*
  Sum of a Beach
*/

function sumOfABeach(beach) {
  const string = beach.toLowerCase()
  const keywords = ['sand', 'water', 'fish', 'sun']

  return keywords.reduce((total, x) => total += string.split(x).length - 1, 0)
}

function sumOfABeach(beach) {
  let string = beach.toLowerCase()
  const keywords = ['sand', 'water', 'fish', 'sun']
  
  let total = 0
  while(keywords.some(x => string.includes(x))) {
    const word = keywords.find(x => string.includes(x))
    string = string.replace(word, '')
    total++
  }
  return total
}

// The first solve uses splitting as a method of cleverly finding the total of keywords in a string, the second is a more manual solution



/*
  Exclamation marks series #5: Remove all exclamation marks from the end of words
*/

function remove (string) {
  return string.split(' ')
               .map(x => {
                    while (x.endsWith('!')) {
                      x = x.slice(0, -1)
                    }
                    return x
                  })
               .join(' ')
}



/*
  filterEvenLengthWords
*/

function filterEvenLengthWords(words) {
  return words.filter(x => x.length % 2 === 0)
}



/*
  Count consonants
*/

function consonantCount(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  return str.toLowerCase().split('').filter(x => !VOWELS.includes(x) && x >= 'a' && x <= 'z').length
}



/*
  Find Duplicates 
*/

function duplicates(arr) {
  const dupes = []
  const arrayMap = new Map()
  for (let number of arr) {
    if (arrayMap.has(number) && !dupes.includes(number))
      dupes.push(number)
    else
      arrayMap.set(number, true)
  }
  return dupes
}



/*
  Plus - minus - plus - plus - ... - Count 
*/

const catchSignChange = arr => arr.reduce(([total, isPositive], x) => Math.sign(x) >= 0 === isPositive ? [total, isPositive] : [++total, !isPositive], [0, Math.sign(arr[0]) >= 0])[0]

// Your typical codewars one liner that is completely unreadable ... yes
// I decided to try to go for a one liner as the kata was presented as a arrow function and wanted it to stay one line.
// The answer uses a reduce function to return an array composed of two elements, the total amount of changes between pos and neg and the state of the last element. We then return only the first element of this array at the end



/*
  Numbers to Objects
*/

const numObj = s => s.map(x => ({[x.toString()]: String.fromCharCode(x)}))

// the toString method is unnecessary and can be left out



/*
  Multiply Word in String
*/

function modifyMultiply (str,loc,num) {
  const word = str.split(' ')[loc]
  return `${word}-`.repeat(num).slice(0, -1)
} 

// Theres two methods of finding the solution, we can repeat the word n times with a hyphen at the end and slice it off
// or create an array of size n, fill it with the word and join on the hyphen

// return Array.from({length: num}).fill(word).join('-')



/*
  Number-Star ladder
*/

function pattern(n) {
  const output = []
  for (let i = 0; i < n; i++) {
    let string = '1'
    string += '*'.repeat(i)
    
    if (i !== 0) {
      string += `${i + 1}`
    }
    
    output.push(string)
  }
  return output.join('\n')
}



/*
  Is n divisible by (...)?
*/

function isDivisible(...numbers) {
  return numbers.slice(1).every(x => numbers[0] % x === 0)
}

function isDivisible(first, ...numbers){
  return numbers.every(x => first % x === 0)
}



/*
  Consecutive letters
*/

function solve(s) {
  // Checks if all characters are unique
  if (new Set(s).size !== s.length) 
    return false
  
  // Checks that every letter preceding each character is one away on the ascii chart
  const alphabeticalOrder = s.split('').sort()
  return alphabeticalOrder
    .slice(1)
    .every((x, i) => x.charCodeAt() - alphabeticalOrder[i].charCodeAt() === 1)
}



/*
  Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark 
*/

function remove (string) {
  return string
    .split(' ')
    .filter(x => x.indexOf('!') !== x.lastIndexOf('!') || !x.includes('!'))
    .join(' ')
}



/*
  Calculate mean and concatenate string
*/

function mean(lst) {
  const [intSum, charString] = lst.reduce(([intSum, charString], x) => {
    if (x.toLowerCase() === x.toUpperCase())
      intSum += +x
    else
      charString += x
    return [intSum, charString]
  }, [0, ''])
  
  return [intSum / 10, charString]
}



/*
  Password maker
*/

function makePassword(phrase) {
  const charMap = new Map([
    ['i', 1],
    ['o', 0],
    ['s', 5]
  ])
  
  let string = ''
  for (let [char, ...restOfWord] of phrase.split(' ')) {
    string += charMap.has(char.toLowerCase()) ? charMap.get(char.toLowerCase()) : char
  }
  return string
}



/*
  sPoNgEbOb MeMe
*/

function spongeMeme(sentence) {
  return sentence
      .split('')
      .map((x, i) => i % 2 ? x.toLowerCase() : x.toUpperCase())
      .join('')
      ;
}



/*
  Running out of space
*/

function spacey(array) {
  return array.map((x, i) => array.slice(0, i + 1).join(''))
}
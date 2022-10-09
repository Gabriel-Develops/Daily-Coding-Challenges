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
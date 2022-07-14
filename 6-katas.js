/*
  Highest Scoring Word
*/

function high(x){
  let strArray = x.split(' ')
  let highest = {score: 0, word: ''}
  
  for (let word of strArray) {
    let score = 0
    
    for (let c of word) {
      score += c.toLowerCase().charCodeAt() - 96
    }
    
    if (score > highest.score) {
      highest.score = score
      highest.word = word
    }
  }
  
  return highest.word
}



/*
  Find the odd int
*/

function findOdd(A) {
  const sumObj = A.reduce((sumObj, num) => {
    if (!(num in sumObj))
      sumObj[num] = 1
    else
      sumObj[num]++
    
    return sumObj
  }, {})
  
  for (let num in sumObj) {
    if (sumObj[num] % 2 !== 0)
      return +num
  }
}



/*
  Array.diff
*/

function arrayDiff(a, b) {
  return a.filter(element => b.indexOf(element) === -1)
}

// An alternative to indexOf would be the has method and the includes method



/*
  Who likes it?
*/

function likes(names) {
  switch(names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}



/*
  Counting Duplicates
*/

function duplicateCount(text){
  const charCount = text.toLowerCase()
    .split('')
    .reduce((countObj, character) => {
      if (character in countObj)
        countObj[character]++
      else
        countObj[character] = 1
      
      return countObj
    }, {})
  
  let duplicates = 0
  for (let entry in charCount) {
    if (charCount[entry] > 1)
      duplicates++
  }
  
  return duplicates
}



/*
  Duplicate Encoder
*/

function duplicateEncode(word){
  const string = word.toLowerCase()
  
  let encodedString = ''
  for (let character of string) {
    // To determine if a character is a duplicate
    // We can check to see if the first instance of the character's index
    // and the last one match
    if (string.indexOf(character) !== string.lastIndexOf(character))
      encodedString += ')'
    else
      encodedString += '('
  }
  
  return encodedString
}



/*
  Take a Ten Minutes Walk
*/

function isValidWalk(walk) {
  if (walk.length !== 10)
    return false
  
  const directionSum = {
    'n': 0,
    's': 0,
    'w': 0,
    'e': 0
  }
  
  walk.forEach(direction => directionSum[direction]++)
  
  return directionSum['n'] === directionSum['s'] && directionSum['w'] === directionSum['e']
}



/*
  Persistent Bugger.
*/

function persistence(num, count = 0) {
  if (num < 10)
    return count
  
  let newNum = num
    .toString()
    .split('')
    .reduce((total, num) => total *= num, 1)
  
  return persistence(newNum, ++count)
}



/*
  Replace With Alphabet Position
*/

function alphabetPosition(text) {
  const letterArray = text
    .toLowerCase()
    .split('')
    .filter(character => character >= 'a' && character <= 'z')
  
  const numberArray = letterArray
    .map(letter => letter.charCodeAt() - 96)
    .join(' ')
  
  return numberArray
}



/*
  Your order, please
*/

function order(words){
  return words
    .split(' ')
    // Make a new array, where we check each word and
    // find the number that contains index + 1
    .map((word, index, originalArray) => {
      for (let word of originalArray) {
        for (let character of word) {
          if (+character === (index + 1))
            return word
        }
      }
    })
    .join(' ')
}



/*
  Tribonacci Sequence
*/

function tribonacci(signature,n){
  if (signature.length > n)
    return signature.slice(0, n)
  
  for (let i = 0; signature.length !== n; i++) {
    // array made from three previous list items
    // Three could be replaced with initial length of signature to make dynamic
    let sequence = signature.slice(i, i + 3)
    let sequenceSum = sequence.reduce((sum, num) => sum += num, 0)
    
    signature.push(sequenceSum)
  }
  
  return signature
}

// Slice and reduce could have been replaced with a simple addition of three elements, this would reduce the time
// complexity

// function tribonacci(signature,n){  
//   for (var i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }



/*
  Unique In Order
*/

const uniqueInOrder = iterable => {
  if (typeof iterable === 'string') 
    iterable = iterable.split('')
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
      iterable.splice(i, 1)
      i -= 2
    }
  }
  return iterable
}

// My first solution first checks to see if the input is a string and fixes for that
// We then iterate through the array using a for loop. This is a bit hard to read as we have to decrease i by 2 everytime we remove an element from the array.

// Trying this problem again leads us to use the spread operator which forms an array from an iterable object
// We pair this with a filer method that leads to a more readable and pleasent overall function

// const uniqueInOrder = iterable => {
//   return [...iterable].filter((char, index, arr) => char !== arr[index + 1])
// }



/*
  Playing with digits
*/

function digPow(n, p){
  const nArray = n.toString().split('')
  
  const pSum = nArray.reduce((sum, num, index) => num ** (p + index) + sum, 0)
  
  return Number.isInteger(pSum / n) ? pSum / n : -1
}

// Improvements: rename num to digit and maybe add a unaryplus to it so that we dont rely on implicit type conversion



/*
  Equal Sides Of An Array
*/

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((sum, num) => sum + num, 0)
    const rightSum = arr.slice(i + 1).reduce((sum, num) => sum + num, 0)
    
    if (leftSum === rightSum) 
      return i
  }
  return -1
}

// This was a fun and easy problem to tackle. My solution is not the best performant as it runs two reduce methods every iteration.
// A quick solution would be to set up two variables outside of the loop representing leftSum and rightSum and then add or subtract to that sum per iteration. Reducing the reduce methods to just one



/*
  Detect Pangram
*/

function isPangram(string){
  const phrase = string.toLowerCase()

  // In ASCII, 97 = 'a', '122' = 'z'
  for (let i = 97; i <= 122; i++) {
    if (!phrase.includes(String.fromCharCode(i))) 
      return false
  }
  
  return true
}

// I didn't want to type out the alphabet into an array so I used ascii to help me solve this problem.
// A time oriented solution was to type out the alphabet in order of most common usage which I thought was clever
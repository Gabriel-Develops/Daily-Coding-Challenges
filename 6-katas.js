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



/*
  Find the unique number
*/

function findUniq(arr) {
  return arr.find( (x) => arr.indexOf(x) === arr.lastIndexOf(x));
}



/*
  Sort the odd
*/

function sortArray(array) {
  const sortedOdds = array.filter(x => Math.abs(x) % 2 === 1).sort((a,b) => a - b)
  
  for (let i = 0; i < array.length; i++) {
    // Evens are ignored
    if (array[i] % 2 === 0) continue
    
    // odds are replaced by an ordered array of odds in order
    array[i] = sortedOdds.shift()
  }
  
  return array
}



/*
  The Supermarket Queue
*/

function queueTime(customers, n) {
  let totalTime = 0
  
  while (customers.length > 0) {
    totalTime++
    
    // Every iteration decreases queuetime for n customers
    for (let i = 0; i < n; i++) {
      customers[i]--
    }
    
    // Remove 'finished' queues
    customers = customers.filter(x => x > 0)
  }
  return totalTime
}



/*
  Build Tower
*/

function towerBuilder(nFloors) {
  const arr = []
  
  for (let i = 0, j = 1; i < nFloors; i++, j += 2) {
    let floor = ''
    let spaces = ' '.repeat(nFloors - i - 1)

    floor = `${spaces}${'*'.repeat(j)}${spaces}`
    
    arr.push(floor)
  }
  
  return arr
}

// I initialized two variables in the for loop which I have done before but having two end results per turn is something I thought I'd try and worked out perfectly.
// Nevertheless j is technically uneeded as we could just use i to derive it, we would do so by saying something like i * 2 + 1



/*
  Write Number in Expanded Form
*/

function expandedForm(num) {
  let numStr = num.toString()
  let expandedNum = []
  
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === '0') {
      continue
    }
    expandedNum.push( numStr[i] + '0'.repeat(numStr.slice(i).length - 1) )
  }
  
  return expandedNum.join(' + ')
}

// At first I was adding the ' + ' at the end of every loop but that would lead to it being at the end. I could have solved this by slicing the string in the return, ignoring the last three characters. I felt their would be a better way so I transitioned to using an array and solving the issue using a join method. This works perfectly and it looks like most ended up doing similarly.



/*
  Break camelCase
*/

function solution(string) {
  return string.split('')
    .map(x => x.charCodeAt() < 91 && x.charCodeAt() > 64 ? ' ' + x : x)
    .join('')
}



/*
  Mexican Wave
*/

function wave(str){
  // Empty array of size str.length
  return Array.from({length: str.length})
    // We are focusing on a different letter every loop and slicing the before and after
    .map((_, i) => str[i] === ' ' ? '' : str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    // Filter out empty strings 
    .filter(x => x)
}



/*
  Reverse every other word in the string
*/

function reverse(str){
  return str.split(' ')
    .map((x, i) => i % 2 === 0 ? x : x.split('').reverse().join(''))
    .filter(x => x)
    .join(' ')
    .trim()
}



/*
  Halloween: trick or treat!
*/

function trickOrTreat(children, packets) {
  if (packets.length < children) {
    return 'Trick or treat!'
  }
  
  let candyCount = -1
  for (let packet of packets) {
    let candyMap = packet.reduce((map, candy) => map.has(candy) ? map.set(candy, map.get(candy) + 1) : map.set(candy, 1), new Map())
    if (candyMap.get('candy') < 2 || candyMap.get('bomb')) {
      return 'Trick or treat!'
    }
    
    if (candyCount === -1) {
      candyCount = candyMap.get('candy')
    } else if (candyCount !== candyMap.get('candy')) {
      return 'Trick or treat!'
    }
  }
  
  return 'Thank you, strange uncle!'
}



/*
  String transformer
*/

function stringTransformer(str) {
  return str.split(' ')
    .reverse()
    .map(
      word => word.split('')
                  .map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
                  .join('')
    )
    .join(' ')
}



/*
  Array.diff Revisited
*/

function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x))
}



/*
  Delete occurrences of an element if it occurs more than n times
*/

function deleteNth(arr,n){
  const arrMap = new Map()
  const newArr = []
  
  for (let i = 0; i < arr.length; i++) {
    arrMap.set(arr[i], arrMap.get(arr[i]) + 1 || 1)
    
    if (arrMap.get(arr[i]) > n) {
      continue
    }
    
    newArr.push(arr[i])
  }
  
  return newArr
}

// This could also be done by just using the filter method

function deleteNth(arr,n){
  const cache = new Map()
  return arr.filter(x => {
    cache.set(x, cache.get(x) + 1 || 1)
    return cache.get(x) <= n
  })
}



/*
  String array duplicates
*/

function dup(s) {
  return s.map(string => {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[i + 1]) {
        newString += string[i]
      }
    }
    return newString
  })
}

// The last letter is always placed into the newString because string[i + 1] will return undefined when out of range(on the last letter)
// This could alternatively be done using array methods specifically the filter method

function dup(s) {
  return s.map(word => word.split('')
                           .filter((letter, i) => letter !== word[i + 1])
                           .join(''))
};
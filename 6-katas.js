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
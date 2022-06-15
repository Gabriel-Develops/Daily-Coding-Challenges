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
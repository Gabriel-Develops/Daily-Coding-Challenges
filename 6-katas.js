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
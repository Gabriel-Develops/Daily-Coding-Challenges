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
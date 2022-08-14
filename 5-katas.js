/*
  Directions Reduction
*/

function dirReduc(arr){
  const directionMap = new Map([
  ['NORTH', 'SOUTH'],
  ['SOUTH', 'NORTH'],
  ['WEST', 'EAST'],
  ['EAST', 'WEST']
])
  
  // Loops up to but doesn't include last direction
  for (let i = 0; i < (arr.length - 1); i++) {
    if (directionMap.get(arr[i]) === arr[i + 1]) {
      arr.splice(i, 2)
      i -= 2
    }
  }
  
  return arr
}



/*
  Rot13
*/

function rot13(message){
  let cipher = []
  
  for (let i = 0; i < message.length; i++) {
    // Uppercase
    if (message[i] >= 'A' && message[i] <= 'Z')
      cipher.push((message.charCodeAt(i) - 65 + 13) % 26 + 65)
    
    // Lowercase
    else if (message[i] >= 'a' && message[i] <= 'z')
      cipher.push((message.charCodeAt(i) - 97 + 13) % 26 + 97)
    
    // Not a letter
    else
      cipher.push(message.charCodeAt(i))
    
    
  }
  
  return String.fromCharCode(...cipher)
}
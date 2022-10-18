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



/*
  Extract the domain name from a URL
*/

function domainName(url){
  url = url.replace('http://', '')
  url = url.replace('https://', '')
  url = url.replace('www.', '')
  return url.split('.')[0]
}



/*
  Find the unique string
*/

function findUniq(arr) {
  // For every element in the arr, we reducing it to its basic characters
  // BbBb => b
  // silvia && vasili => ailsv
  const simpleArr = arr.map(
    x => x.toLowerCase()
      .split('')
      .filter((x, i, subArr) => subArr.indexOf(x) === i)
      .sort()
      .join('')
  )
  
  // All but one of the elements in the arr will be the same so we find the unique one  
  const uniqueValue = simpleArr.filter((x, i) => i === simpleArr.indexOf(x) && i === simpleArr.lastIndexOf(x))
    .join('')
  
  // Its position in the simpleArr will correlate with the position of the unique string in the primary array
  const pos = simpleArr.findIndex(x => x === uniqueValue)
  
  return arr[pos]
}

// This was a challenge. I decided to simplify the problem into steps. First I cleaned up the input, after cleaning it up the problem was a lot easier.



/*
  Find the unique string
*/

function movingShift(s, shift) {
  const encryptedStr = s.split('')
    .map((x, i) => {
      // Not a letter
      if (x.toLowerCase() === x.toUpperCase())
        return x
      // Lower Cased
      else if (x === x.toLowerCase()) {
        return String.fromCharCode((x.charCodeAt() - 97 + shift + i) % 26 + 97)
      }
      // Upper Cased
      else if (x === x.toUpperCase())
        return String.fromCharCode((x.charCodeAt() - 65 + shift + i) % 26 + 65)
    })
    .join('')
  
  const subLen = Math.ceil(encryptedStr.length / 5)
  return [
    encryptedStr.slice(0, subLen),
    encryptedStr.slice(subLen, subLen * 2),
    encryptedStr.slice(subLen * 2, subLen * 3),
    encryptedStr.slice(subLen * 3, subLen * 4),
    encryptedStr.slice(subLen * 4, subLen * 5),
  ]
}

function demovingShift(arr, shift) {
  return arr.join('')
    .split('')
    .map((x, i) => {
      // Not a letter
      if (x.toLowerCase() === x.toUpperCase())
        return x
      // Lower Cased
      else if (x === x.toLowerCase()) {
        let parShifted = x.charCodeAt() - 97 - shift - i
        while (parShifted < 0) {
          parShifted += 26
        }
        return String.fromCharCode(parShifted % 26 + 97)
      }
      // Upper Cased
      else if (x === x.toUpperCase()) {
        let parShifted = x.charCodeAt() - 65 - shift - i
        while (parShifted < 0) {
          parShifted += 26
        }
        return String.fromCharCode(parShifted % 26 + 65)
      }
    })
    .join('')
}

// This was a fun challenge. I think the code readability can be improved in the areas where we performt the shift by using an external shift function
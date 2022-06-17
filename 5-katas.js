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
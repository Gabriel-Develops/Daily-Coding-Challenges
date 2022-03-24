/*
Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
    let y = ''
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== ' ') y += x[i]
    }
    return y
  }

//  Add all characters that are not a space
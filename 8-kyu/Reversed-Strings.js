/*
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    let reverse = ''
    let n = str.length
    for (let i = n - 1; i >= 0; i--) {
      reverse += str[i]
    }
    return reverse
  }

//  We start our counter at the end of the string and add characters backwords until we get to the zero index
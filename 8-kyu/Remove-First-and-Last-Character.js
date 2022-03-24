/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    //You got this!
     let newString = ''
     
     for (let i = 1, n = str.length; i < n - 1; i++) {
       newString += str[i]
     }
     return newString
   };
   
//  Looping through the string adding a character at a time, skipping the first and last
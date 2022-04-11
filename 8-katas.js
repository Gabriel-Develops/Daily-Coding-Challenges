/*
  Abbreviate a Two Word Name
*/

function abbrevName(name){

    let firstAndLast = name.split(' ')
    
    let initials = ''
    initials += firstAndLast[0][0] + '.'
    initials += firstAndLast[1][0]

    return initials.toUpperCase()
}

//  lines 18-22 can be placed in one line as I saw in the other solutions

// return (firstAndLast[0][0] + '.' firstAndLast[1][0]).toUpperCase()

// It's beatiful, I wish I thought of it



/*
  A Needle in the Haystack
*/

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;



/*
  Basic Mathematical Operations
*/

function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+': 
        return value1 + value2
      case '-':
        return value1 - value2
      case '*':
        return value1 * value2
      case '/':
        return value1 / value2
    }
  }

//  Switch cases can be beautiful, breaks are not needed here, could be done with an if else as well but this is easier to read 



/*
  Beginner - Lost Without a Map
*/

function maps(x) {
    return x.map(x => x * 2)
}



/*
  Beginner Series #2 Clock
*/

function past(h, m, s){
  return s*1000 + m*60000 + h*3600000
}

// Another solution was to convert each to seconds and then multiply by 1000



/*
  Beginner Series #1 School Paperwork
*/

function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m
}



/*
  Calculate-average.js
*/

function find_average(array) {
    if (array.length === 0) return 0
    
    let total = array.reduce((sum, element) => sum + element, 0)
    
    return total / array.length
}



/*
  Convert a Boolean to a String
*/

const booleanToString = b => String(b);



/*
  Convert a Number to a String!
*/

const numberToString = num => String(num)



/*
  Convert a String to a Number!
*/

var stringToNumber = function(str){
    return +str;
  }

// According to the MDN, the unary operator (+) is the fastest way to convert a string into a Number



/*
  Convert boolean values to strings 'Yes' or 'No'.
*/

const boolToWord = (bool) => bool ? 'Yes' : 'No'



/*
  Convert number to reversed array of digits
*/

function digitize(n) {
    // Convert to string
    n = String(n)
    
    // Turn into an array of characters
    // Make each character a number
    // Return the reversed array
    return n.split('').map(element => Number(element)).reverse()
  }

// Surprisingly this is also how other people did it, but they made it one line

// return String(n).split('').map(Number).reverse()



/*
  Counting sheep...
*/

function countSheeps(arrayOfSheep) {
    let total = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]) total++
    }
    return total
  }
/*
  Count of positives / sum of negatives
*/

function countPositivesSumNegatives(input) {
    let positiveCount = 0, negativeTotal = 0
    let totals = []
    
    // Filter out null inputs
    if (!input) return []
    
    // Find the positive Count and the negative sum
    input.forEach(element => element > 0 ? positiveCount++ : negativeTotal += element)
    console.log(positiveCount, negativeTotal)
    
    // Return an empty array if the array was empty to begin with
    if (positiveCount === 0 && negativeTotal === 0) return []
    
    // Else return the new array populated with the information we gathered
    totals.push(positiveCount)
    totals.push(negativeTotal)
     
    return totals
}

  // We could have checked for length === 0 and a falsy input in one line
  // if (!input || input.length === 0)



/*
    Even or Odd
*/

function even_or_odd(number) {
    if (number % 2 === 0) return 'Even'
    else return 'Odd'
  }

// Using the modulus we can check for even numbers (even numbers are divisible by two)
// This treats zero as even



/*
  Fake Binary
*/

function fakeBin(x) {
    return x.split('').map(number => number < 5 ? '0' : '1').join('');
  }



/*
    Find the smallest integer in the array
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let lowest = args[0]
      for (let i = 0; i < args.length; i++) {
        if (args[i] < lowest) lowest = args[i]
      }
      return lowest
    }
  }

//  I suppose I could have set lowest to infinity as well



/*
Function 1 - hello world
*/

const greet = () => 'hello world!'



/*
Grasshopper - Summation
*/

var summation = function (num) {
    let total = 0
    for (let i = 1; i <= num; i++) {
      total += i
    }
    return total
  }



/*
Gravity Flip
*/

const flip=(d, a)=>{
    a.sort((a, b) => a - b)
    
    if (d === 'R') return a
    else return a.reverse()
  }

// Sort the array and return the sorted or the reversed array based on input



/*
Invert values
*/

const invert = array => array.map(x => -x)

// So apparently, if you put 0, you get -0. Not good
// Adding a ternary operator can help us

const invertZero = array => array.map(x => x === 0 ? x : -x)



/*
Jenny's-secret-message.js
*/

const greet = name => name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!"



/*
Keep Hydrated!
*/

const litres = time => Math.floor(time * .5)

// Nathan loves his water



/*
  Multiply
*/

function multiply(a, b){
    return a * b
  }

//  The return keyword was missing, this was my first Javascript kata



/*
    Opposite number
*/

function opposite(number) {
    //your code here
    return -number
  }

// Very easy
// One line can be achieved quite simply as well

// const opposite = number => -number



/*
Powers of 2
*/

function powersOfTwo(n){
    let arr = []
    for (let i = 0; i <= n; i++) {
      arr.push(2 ** i)
    }
    return arr
  }

//  push method comes in handy paired with a simple for loop



/*
Remove First and Last Character
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



/*
Remove String Spaces
*/

function noSpace(x){
    let y = ''
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== ' ') y += x[i]
    }
    return y
  }

//  Add all characters that are not a space



/*
Returning Strings
*/

const greet = name => `Hello, ${name} how are you doing today?`;



/*
  Return Negative
*/

function makeNegative(num) {
    // Code?
    if (num < 0) return num
    else return num * -1
  }

//  We make positive nums negative and leave negative nums alone
// A clever alternative I saw was to make the num positive using the abs function and then return it with a negative sign.

// return -Math.abs(num)



/*
  Reversed sequence 
*/

const reverseSeq = n => {
    let array = [];
    for (let i = 1; i <= n; i++) {
      array.unshift(i);
    }
    return array;
  };



/*
Reversed Strings
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



/*
Square(n) Sum
*/

function squareSum(numbers){
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i] ** 2
    }
    return total
  }

//  Reduce would be a good method to use here



/*
  Sum of positive    
*/

function positiveSum(arr) {
    let sum = 0
    
    for (let i = 0, n = arr.length; i < n; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    
    return sum
  }

//  A simple loop works well enough. Filter and forEach may be used as well



/*
    You only need one - Beginner
*/

function check(a,x){
    return a.includes(x);
  };



/*
  Calculate BMI
*/

function bmi(weight, height) {
  let bmi = weight / height**2;
  switch (true) {
      case (bmi <= 18.5) :
      return "Underweight";
      case (bmi <= 25) :
      return "Normal";
      case (bmi <= 30) :
      return "Overweight";
      case (bmi > 30) :
      return "Obese";
  }
}

// The switch works but forcing the switch felt wrong.
// According to the comments an if else statement would be faster.
// In the future I'll probably avoid forcing switches like this but this was cool to see



/*
  Array plus array
*/

function arrayPlusArray(arr1, arr2) {
  // Join the two arrays and then reduce them into a sum
  return arr1.concat(arr2).reduce((sum, element) => sum + element)
}



/*
  Is he gonna survive?
*/

function hero(bullets, dragons){
  return (bullets/2 >= dragons) ? true : false
}

// A ternary is not needed here quite funnily you could just return the conditional.
// I just had a brainfart and completely forgot that
//return (bullets/2 >= dragons) is enough



/*
  Beginner - Reduce but Grow
*/

function grow(x){
  return x.reduce((product, number) => product * number, 1)
}

// for every number, we return product * number, making sure to start product at one



/*
  MakeUpperCase
*/

function makeUpperCase(str) {
  return str.toUpperCase()
}



/*
  Opposites Attract
*/

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 0 ? false : true
}

// Adding two even numbers or two odd numbers result in an even number, which should result in a false
// Adding one even and one odd will result in an odd number, which should result in a true



/*
  DNA to RNA Conversion
*/

function DNAtoRNA(dna) {
  // Can't use replaceAll for some reason so I will do a map instead
  return dna.split('')
    .map(character => character === 'T' ? 'U' : character)
    .join('')
}

// Another clever solution I saw was using split('T') and then join('U')
// Another was using replace('T', 'U') within a while loop checking for indexOf('T' !== -1)



/*
  Sum without highest and lowest number
*/

function sumArray(array) {
  if (!array || array.length < 3) return 0
  
  array.sort((a, b) => a - b)
  array.pop()
  array.shift()
  return array.reduce((sum, element) => sum + element, 0)
}

// I could have replaced pop and shift with a slice(1, -1) which is pretty clever, I believe this would have allowed me to do it all in one line.
// Using pop and shift prevents one line because the return the value that is being popped and shifted



/*
  Simple multiplication 
*/

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}



/*
  How good are you really?
*/

function betterThanAverage(classPoints, yourPoints) {
  // First line finds sum of array and yourPoints, second divides sum by total scores
  let avg = classPoints.reduce((sum, element) => sum + element, 0) + yourPoints
  avg = avg / (classPoints.length + 1)
  
  return yourPoints > avg
}

// A clever one line solution would be to start the sum in the reduce with the value of yourPoints and to divide by ++classPoints.length
// Allowing a one line solution

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((sum, number) => sum + number, yourPoints) / ++classPoints.length
// }



/*
  Find Maximum and Minimum Values of a List
*/

var min = function(list){
  list.sort((a, b) => a - b)
  return list[0];
}

var max = function(list){
  list.sort((a, b) => b - a)   
  return list[0];
}

// return list[0] was already populated so I figured I would write code around that. Each sort puts its desired number at the beginning of the array
// This mutates the parameter which may be unwanted but the exercise didn't specify that it wasn't allowed



/*
  Count the Monkeys!
*/

function monkeyCount(n) {
  let array = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  return array
}



/*
  Total amount of points
*/

function points(games) {
  return games.reduce((sum, element) => {
    let x = element.split(':')[0]
    let y = element.split(':')[1]
    
    if (x < y) 
      return sum + 0
    else if (x > y) 
      return sum + 3
    else 
      return sum + 1
  }, 0)
}

// I saw a couple of people read the score with bracket notation, grabbing x and y by using element[0] and element[2] respectively.
// I decided not to go with this route because it breaks if the score has double digit results. 
// If you split it into an array of two scores then you don't have to deal with this
// I also saw people handle the conditionals using two ternary's one nested into the other 
// I thought of something like this but I didn't think it was very readable
}



/*
  Sum Arrays
*/

function sum (numbers) {
  "use strict";
  if (numbers.length === 0)
      return 0
  return numbers.reduce((sum, element) => sum + element, 0)    
};

// The conditional seems to be uneeded as noone else included it



/*
  Will you make it?
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft
};

// I've stopped reaching for a ternary operator when wanting a true or false return
// Instead now just returning the result of the conditional



/*
  Are You Playing Banjo?
*/

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}



/*
  If you can't sleep, just count sheep!!
*/

var countSheep = function (num){
  let string = ''
  
  for (let i = 1; i <= num; i++) {
    string += `${i} sheep...`
  }
  
  return string
}



/*
  Sentence Smash
*/

function smash (words) {
  return words.join(' ')
};



/*
  Sum Mixed Array
*/

function sumMix(x){
  return x.reduce((sum, number) => sum + +number, 0)
}

// Use the unary operator on number to convert all array elements into number types



/*
  Rock Paper Scissors!
*/

const rps = (p1, p2) => {
  if (p1 === p2)
    return 'Draw!'
  else if (p1 === 'scissors' && p2 === 'paper')
    return 'Player 1 won!'
  else if (p1 === 'paper' && p2 === 'rock')
    return 'Player 1 won!'
  else if (p1 === 'rock' && p2 === 'scissors')
    return 'Player 1 won!'
  else if (p1 === 'rock' && p2 === 'paper')
    return 'Player 2 won!'
  else if (p1 === 'scissors' && p2 === 'rock')
    return 'Player 2 won!'
  else if (p1 === 'paper' && p2 === 'scissors')
    return 'Player 2 won!'
};

// It's a pretty moutful of a soltion.
// So this OOP solution is really cool

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };

// The rules object creates a sort of map that lets the logic figure out if a scenario is met where player one wins, of course filtering out draws first.

// The reason I didn't just do return 'Player 2 won!' was to check inputs but it doesn't seem to be necessary.



/*
  Convert a string to an array
*/

function stringToArray(string){
  return string.split(' ')
}



/*
  Count by X
*/

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }
  
  return z;
}



/*
  Find the first non-consecutive number
*/

function firstNonConsecutive (arr) {
  if (arr.length < 2)
    return null
  
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1]
    if (diff !== 1)
      return arr[i]
  }
  
  return null
}
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
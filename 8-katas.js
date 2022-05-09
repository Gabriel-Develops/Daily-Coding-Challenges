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



/*
  Can we divide it?
*/

function isDivideBy(number, a, b) {
  return (number % a === 0 && number % b === 0)
}



/*
  Area or Perimeter
*/

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : 2 * (l + w)
};



/*
  You Can't Code Under Pressure #1
*/

function doubleInteger(i) {
  return i * 2;
}



/*
  Transportation on vacation 
*/

function rentalCarCost(d) {
  let total = 40 * d
  
  if (d >= 7)
    return total - 50
  else if (d >= 3)
    return total - 20
  else
    return total
}



/*
  Grasshopper - Personalized Message
*/

function greet (name, owner) {
  return name.toLowerCase() === owner.toLowerCase() ? 'Hello boss' : 'Hello guest'
}

// the toLowerCase method isn't reeally needed in this case but I decided to leave it in



/*
  Remove exclamation marks
*/

function removeExclamationMarks(s) {
  return s.split('!').join('');
}



/*
  The Feast of Many Beasts
*/

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// startsWith/endsWith method could have also worked, and slice could have also worked here
// dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
// beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1)



/*
  Check same case
*/

function sameCase(a, b){
  if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase())
    return -1
  
  let aIsLower = false, bIsLower = false
  
  if (a === a.toLowerCase())
    aIsLower = true
  if (b === b.toLowerCase())
    bIsLower = true
  
  return aIsLower === bIsLower ? 1 : 0
}



/*
  Beginner Series #4 Cockroach
*/

function cockroachSpeed(s) {
  // 1km = 100,000cm
  // 1hr = 3600 seconds
  
  // Multiply by 100,000 then divide by 3,600
  
  // return Math.floor(s * 100000 / 3600)
  
  // or just simplify 100,000 / 3,600 => 250/9
  // or 100,000 / 3,600 => 27.777777...
  
  return Math.floor(s * 250 / 9)
}



/*
  Grasshopper - Grade book
*/

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3
  console.log(avg)
  
  if (avg >= 90)
    return 'A'
  else if (avg >= 80)
    return 'B'
  else if (avg >= 70)
    return 'C'
  else if (avg >= 60)
    return 'D'
  else 
    return 'F'
}



/*
  Double Char
*/

function doubleChar(str) {
  return str.split("").map(element => element + element).join("");
}



/*
  L1: Set Alarm
*/

function setAlarm(employed, vacation){
  return employed && !vacation
}



/*
  Get Planet Name By ID
*/

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }
  
  return name;
}

// Missing breaks and technically missing a default also adding a return could negate the need of the break
// A clever solution uses an object.
// function getPlanetName(id){
//   return {
//     1: 'Mercury',
//     2: 'Venus',
//     3: 'Earth',
//     4: 'Mars',
//     5: 'Jupiter',
//     6: 'Saturn',
//     7: 'Uranus',
//     8: 'Neptune'
//   }[id]
// }



/*
  Will there be enough space?
*/

function enough(cap, on, wait) {
  return cap-on>=wait?0:wait-(cap-on);
}



/*
  Removing Elements
*/

function removeEveryOther(arr){
  return arr.filter((element, index) => index % 2 === 0 ? element : null)
}

// the ternary is unnessary the filter filters out an element if its false and keeps it if its true
// A better solution would be 

// v2
function removeEveryOther(arr){
  return arr.filter((element, index) => index % 2 === 0)
}



/*
  Thinkful - Logic Drills: Traffic light
*/

function updateLight(current) {
  return {
    green: 'yellow',
    yellow: 'red',
    red: 'green'
  }[current]
}

// I saw this type of solution earlier in Get Planet Name By ID figured, this would be the perfect area to implement it in
// Worked perfectly. Of course a switch could be used, if else, maybe even an array that looks at the next element in line looping back to the first if at the end



/*
  Third Angle of a Triangle
*/

function otherAngle(a, b) {
  return 180 - a - b
}



/*
  Twice as old
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld > sonYearsOld * 2 ? dadYearsOld - sonYearsOld * 2 : sonYearsOld * 2 - dadYearsOld
}

// An interesting aproach I saw was finding the difference between the dad's age and the son's age doubled and then just find the abosulte of it. Quite clever



/*
  Correct the mistakes of the character recognition software
*/

function correct(string)
{
	return string.split('').map(c => {
    switch (c) {
      case '5':
        return 'S'
      case '0':
        return 'O'
      case '1':
        return 'I'
      default:
        return c
    }
  }).join('')
}



/*
  altERnaTIng cAsE <=> ALTerNAtiNG CaSe
*/

String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
    .join('')
}



/*
  Quarter of the year
*/

const quarterOf = (month) => {
  return Math.ceil(month / 12 * 4);
}

// I chose to divide by the amount of months and then multiply by number of quarters but alternatively you could have just dividide by the number of months in a quarter or
// return Math.ceil(month / 3)



/*
  Keep up the hoop
*/

function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}



/*
  Welcome!
*/

function greet(language) {
  let db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  if (!db[language])
    return db.english
  
  return db[language]
}



/*
  All Star Code Challenge #18
*/

function strCount(str, letter){  
  return str.split('').filter(element => element === letter).length
}

// A similar solution would be to split on the desired letter and return length - 1



/*
  Switch it Up!
*/

function switchItUp(number){
  switch (number) {
    case 1:
      return 'One'
    case 2:
      return 'Two'
    case 3:
      return 'Three'
    case 4:
      return 'Four'
    case 5:
      return 'Five'
    case 6:
      return 'Six'
    case 7:
      return 'Seven'
    case 8:
      return 'Eight'
    case 9:
      return 'Nine'
    case 0:
      return 'Zero'
  }
}



/*
  Squash the bugs
*/

function findLongest(str) {
  
  let spl = str.split(" ")
  let longest = 0
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest)
      longest = spl[i].length
  }
  return longest
}



/*
  Expressions Matter 
*/

function expressionMatter(a, b, c) {
  // + +
  // * *
  // + *
  // (+) *
  // * + 
  // * (+)
  return [
    a + b + c, 
    a * b * c, 
    a + b * c,
    (a + b) * c,
    a * b + c,
    a * (b + c)].reduce((max, element) => element > max ? max = element : max, 0)
}



/*
  Unfinished Loop - Bug Fixing #1
*/

function createArray(number){
  let newArray = []
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter)
  }
  
  return newArray
}



/*
  Grasshopper - Check for factor
*/

function checkForFactor (base, factor) {
  return base % factor === 0
}



/*
  Difference of Volumes of Cuboids
*/

function findDifference(a, b) {
  let volumeA = a.reduce((volume, element) => volume *= element, 1)
  let volumeB = b.reduce((volume, element) => volume *= element, 1)
  
  //return volumeA > volumeB ? volumeA - volumeB : volumeB - volumeA
  return Math.abs(volumeA - volumeB)
}



/*
  Sort and Star
*/

function twoSort(s) {
  return s.sort()[0].split('').join('***')
}



/*
  Function 3 - multiplying two numbers
*/

const multiply = (x, y) => x * y



/*
  I love you, a little , a lot, passionately ... not at all
*/

function howMuchILoveYou(nbPetals) {
  let passion = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  
  nbPetals--
  return passion[nbPetals % 6]
  
  // One line
  // return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][--nbPetals % 6]
}



/*
  Filter out the geese
*/

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  
  return birds.filter(element => !geese.includes(element))
}



/*
  Sum The Strings
*/

function sumStr(a,b) {
  return `${+a + +b}`; 
}



/*
  Well of Ideas - Easy Version
*/

function well(x){
  let count = x.filter(element => element === 'good').length
  
  if (count > 2)
    return 'I smell a series!'
  if (count > 0)
    return 'Publish!'
  else
    return 'Fail!'
}



/*
  To square(root) or not to square(root)
*/

function squareOrSquareRoot(array) {
  return array.map(element => Math.sqrt(element) === Math.trunc(Math.sqrt(element)) ? Math.sqrt(element) : element ** 2)
}

// Another method to check if the sqrt is a whole number is to mod 1 and check to see if the remainder is equal to zero
// return array.map(element => Math.sqrt(element) % 1 === 0 ? Math.sqrt(element) : element ** 2)



/*
  Student's Final Grade
*/

function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10)
    return 100
  else if (exam > 75 && projects >= 5)
    return 90
  else if (exam > 50 && projects >= 2)
    return 75
  else
    return 0
}



/*
  Cat years, Dog years
*/

const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0, dogYears = 0
  
  for (let i = 0; i < humanYears; i++) {
    switch (i) {
      case 0:
        catYears += 15
        dogYears += 15
        break
      case 1:
        catYears += 9
        dogYears += 9
        break
      default:
        catYears += 4
        dogYears += 5
    }
  }
  
  return Array(humanYears, catYears, dogYears)
}



/*
  Is it a palindrome?
*/

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}



/*
  N-th Power
*/

function index(array, n){
  return array[n] ? array[n] ** n : -1
}

// I wanted to try to solve this problem without using array.length > n as the conditional
// In javascript if you look for an index not present in the array, you get undefined back which is falsey and can be used in a ternary 



/*
  Volume of a Cuboid
*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}



/*
  Grasshopper - Messi goals function
*/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}



/*
  Is it even?
*/

function testEven(n) {
  return n % 2 === 0
}



/*
  Grasshopper - Terminal game move function
*/

function move (position, roll) {
  return position + (roll * 2)
}



/*
  What's the real floor?
*/

function getRealFloor(n) {
  if (n <= 0)
    return n
  else if (n < 13)
    return n - 1
  else
    return n - 2
}



/*
  Is the string uppercase?
*/

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}

// console logging this results in [String: 'c'] being returned, and trying to use three === to compare fails the comparison
// To work around this I used two equal signs but I could have also used .valueOf() or .toString()
// These two methods would have converted the object into a string allowing me to compare with three === signs



/*
  A wolf in sheep's clothing
*/

function warnTheSheep(queue) {
  return queue.indexOf('wolf') === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
}

// Ternary checks to see if position of wolf is at end, if it isn't it finds the position of the sheep in front of it



/*
  Super Duper Easy
*/

function problem(x){
  return typeof x === "number" ? x * 50 + 6 : "Error";
}



/*
  Training JS #7: if..else and ternary operator
*/

function saleHotdogs(n){
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}

// if (n < 5)
//   return n * 100
// else if (n < 10)
//   return n * 95
// else
//   return n * 90



/*
  What is between?
*/

function between(a, b) {
  let array = []
  
  do {
    array.push(a)
    a++
  } while (a <= b)
    
  return array
}

// I wanted to use a do while loop here but it a simple while loop would be sufficient. If a is ever bigger than b, this would fail.



/*
  Grasshopper - Debug sayHello
*/

function sayHello(name) {
  return `Hello, ${name}`
}



/*
  5 without numbers !!
*/

function unusualFive() {
  let array = Math.PI.toString().split('')
  array.shift()
  array.shift()
  array.shift()
  array.shift()
  array.shift()
  return Number(array.shift())
}

// After looking at the answers I feel foolish, I tried really hard trying to solve this using math and it worked but their was a much easier approach and it was ...
// return 'Hello'.length
// ...



/*
  Function 2 - squaring an argument
*/

const square = num => num ** 2



/*
  Filling an array (part 1)
*/

const arr = N => {
  let arr = []
  
  for (let i = 0; i < N; i++) {
    arr.push(i)
  }
  
  return arr
}



/*
  Hello, Name or World!
*/

function hello(name) {
  if (!name)
    return 'Hello, World!'

  let letters = name.toLowerCase().split('')
  letters[0] = letters[0].toUpperCase()
  let capitalized = letters.join('')
  
  return `Hello, ${capitalized}!`
}

// Cleaner solution using slice method and concatenation
// const hello = s =>
// `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;



/*
  Grasshopper - Terminal game combat function
*/

function combat(health, damage) {
  return damage > health ? 0 : health - damage
}

// using math.max is also a clever way to solve this problem
// return Math.max(0, health - damage)



/*
  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
*/

function replace(s){
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  return s.split('').map(element => vowels.includes(element.toLowerCase()) ? '!' : element).join('')
}

// I prefer not to use regex as it takes out all of the fun



/*
  get character from ASCII Value
*/

function getChar(c) {
  return String.fromCharCode(c)
}

// Takes in a character code and returns back the ascii character tied to that integer



/*
  Exclamation marks series #1: Remove an exclamation mark from the end of string
*/

function remove (string) {
  return string.endsWith('!') ? string.slice(0, string.length - 1) : string
}

// return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string
// A cleaner way is to use -1 in the slice method as it accepts negative indexes



/*
  Drink about
*/

function peopleWithAgeDrink(old) {
  if (old < 14)
    return 'drink toddy'
  else if (old < 18)
    return 'drink coke'
  else if (old < 21)
    return 'drink beer'
  else
    return 'drink whisky'
}

// switch (true) {
//     case old < 14:
//       return 'drink toddy'
//     case old < 18:
//       return 'drink coke'
//     case old < 21:
//       return 'drink beer'
//     case old >= 21:
//       return 'drink whisky'
// }

// Forcing a switch case doesn't feel right and so I opted to using an if else statement instead



/*
  Training JS #1: create your first JS function and print "Hello World!"
*/

function helloWorld(){
  var str="Hello World!";
  console.log(str);
}

/*
                                           /
                        _,.------....___,.' ',.-.
                     ,-'          _,.--"        |
                   ,'         _.-'              .
                  /   ,     ,'                   `
                 .   /     /                     ``.
                 |  |     .                       \.\
       ____      |___._.  |       __               \ `.
     .'    `---""       ``"-.--"'`  \               .  \
    .  ,            __               `              |   .
    `,'         ,-"'  .               \             |    L
   ,'          '    _.'                -._          /    |
  ,`-.    ,".   `--'                      >.      ,'     |
 . .'\'   `-'       __    ,  ,-.         /  `.__.-      ,'
 ||:, .           ,'  ;  /  / \ `        `.    .      .'/
 j|:D  \          `--'  ' ,'_  . .         `.__, \   , /
/ L:_  |                 .  "' :_;                `.'.'
.    ""'                  """""'                    V
 `.                                 .    `.   _,..  `
   `,_   .    .                _,-'/    .. `,'   __  `
    ) \`._        ___....----"'  ,'   .'  \ |   '  \  .
   /   `. "`-.--"'         _,' ,'     `---' |    `./  |
  .   _  `""'--.._____..--"   ,             '         |
  | ." `. `-.                /-.           /          ,
  | `._.'    `,_            ;  /         ,'          .
 .'          /| `-.        . ,'         ,           ,
 '-.__ __ _,','    '`-..___;-...__   ,.'\ ____.___.'
 `"^--'..'   '-`-^-'"--    `-^-'`.''"""""`.,^.`.--' 
*/
// Pokemon Break



/*
  Training JS #1: create your first JS function and print "Hello World!"
*/

function pipeFix(numbers){
  let first = numbers[0], last = numbers[numbers.length - 1]
  console.log(first, last)
  
  let arr = []
  
  for (let i = first; i <= last; i++) {
    arr.push(i)
  }
  
  return arr
}



/*
  Hex to Decimal
*/

function hexToDec(hexString){
  // Create a key object to translate letters into numbers
  let hex = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  }
  
  // Check for negative sign and remove it if its there
  let negative = false
  if (hexString[0] === '-') {
    negative = true
    hexString = hexString.slice(1)
  }
  
  // A hex number is base 16, 
  // so A => 16 power of 0 * 10
  // If we reverse the string, the index correlates with the power of each number
  let total = 0
  
  hexString.toLowerCase()
    .split('')
    .reverse()
    .forEach((element, index) => {
    if (hex[element])
      return total += (16 ** index) * hex[element]
    else
      return total += (16 ** index) * element
  })
  
  // Before we exit we convert to negative
  if (negative)
    total *= -1
  
  return total
}

// parseInt(hexString, 16)
// ...



/*
  No zeros for heros
*/

// Solving the problem using String logic
function noBoringZeros(n) {
  n = n.toString().split('')
  
  while(n[n.length - 1] === '0') {
    n.pop()
  }
  
  return +n.join('')
}

// Solving the problem using Number logic
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  
  return n
}



/*
  Capitalization and Mutability
*/

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}



/*
  Exclusive "or" (xor) Logical Operator
*/

function xor(a, b) {
  return (a && !b) || (!a && b)
}



/*
  The Wide-Mouthed frog! 
*/

function mouthSize(animal) {
  switch (animal.toLowerCase()) {
    case 'alligator':
      return 'small'
    default:
      return 'wide'
  }
}

// A ternary would have sufficed



/*
  Reverse List Order
*/

function reverseList(list) {
  return list.reverse()
}



/*
  Vowel remover
*/

function shortcut (string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  
  return string.toLowerCase().split('')
    .filter(element => VOWELS.indexOf(element) === -1)
    .join('')
}



/*
  Enumerable Magic #25 - Take the First N Elements
*/

function take(arr, n) {
  return arr.slice(0, n)
}



/*
  Grasshopper - Basic Function Fixer
*/

function addFive(num) {
  let total = num + 5
  return total
}



/*
  Merge two sorted arrays into one
*/

function mergeArrays(arr1, arr2) {
  // Test Cases
  if (arr1.length === 0 && arr2.length === 0)
    return []
  // Sort the returned array
  else if (arr1.length === 0)
    return arr2.sort((a, b) => a - b)
  else if (arr2.length === 0)
    return arr1.sort((a, b) => a - b)
  
  // If all test cases passed, we concatenate both arrays
  // Sort
  // Filter checks that the elements only pass if they are the first of that element in the array
  return arr1.concat(arr2)
    .sort((a, b) => a - b)
    .filter((element, index, array) => array.indexOf(element) === index)
}

// I wanted to solve this problem without using set, Set would have removed unique values from the array meaning that the filter would be unnecessary
// Someones one line solution
// return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));



/*
  Reversing Words in a String
*/

function reverse(string){
  return string.split(' ').reverse().join(' ')
}



/*
  Multiplication table for number
*/

function multiTable(number) {
  let table = "";
  for(let i = 1; i <= 10; i++){
    table += (`${i} * ${number} = ${number*i}`);
    if(i !== 10){
      table += "\n";
    }
  }
  return table;
}

// An alternative to checking to see if i is 10, is to slice the string from beginning up to but not including the last character '\n'
// return table.slice(0, -1)



/*
  Bin to Decimal
*/

function binToDec(bin){
  return bin.split('').reverse().reduce((total, number, index) => total += 2 ** index * +number, 0)
}

// PARSE INT !!!



/*
  Name Shuffler
*/

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}



/*
  Holiday VIII - Duty Free
*/

function dutyFree (normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)))
}



/*
  Training JS #2: Basic data types--Number
*/

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v6   //set number value to a
  var b=v3   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v2   //set number value to a
  var b=v3   //set number value to b
  return a%b;
}



/*
  Pre-FizzBuzz Workout #1
*/

function preFizz(n) {
  return Array(n).fill(null).map((element, index) => index + 1)
}

// An alternative to the fill method is to use the spread operator,
// [...Array(3)], map would now work directly on this array
// [...Array(3)].map((element, index) => index + 1)

// Another solution is to use the from method on the Array constructor
// Array.from({length: n}, (element, index) => index + 1)



/*
  Convert to Binary
*/

function toBinary(n){
  let binary = []
  
  // Divide by two method,
  // Add remainder after dividing by two to the start of the binary number
  while (n > 0) {
    n % 2 === 0 ? binary.unshift('0') : binary.unshift('1')
    
    n = Math.trunc(n / 2)
  }
  
  return +binary.join('')
}

// Easy Way
// return +n.toString(2)



/*
  Plural
*/

function plural(n) {
  return n !== 1
}



/*
  Find the position!
*/

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  return `Position of alphabet: ${alphabet.indexOf(letter.toLowerCase()) + 1}`
}

// charCodeAt method is another clever way to solve this kata. a is position 97 in ASCII so if you minus 96 from the character code
// you will get the letters position in the alphabet

// return letter.charCodeAt() - 96
// return letter.toLowerCase().charCodeAt() - 96



/*
  Training JS #4: Basic data types--Array
*/

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}



/*
  Grasshopper - Messi Goals
*/

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals



/*
  String cleaning
*/

function stringClean(s){
  return s.split('').filter(element => element.charCodeAt() < 48 || element.charCodeAt() > 57).join('')
}

// My goal was to avoid using regex to solve this solution



/*
  Stringy Strings
*/

function stringy(size) {
  return Array.from({length: size}, (_, index) => index % 2 === 0 ? '1' : '0').join('')
}



/*
  Alan Partridge II - Apple Turnover
*/

function apple(x){
  return x ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}



/*
  Surface Area and Volume of a Box
*/

function getSize(width, height, depth) {
  return [
    // Surface Area
    2 * (height * width) + 2 * (height * depth) + 2 * (width * depth),
    // Volume
    width * height * depth
  ]  
}



/*
  Remove duplicates from list
*/

function distinct(a) {
  return a.filter((element, index) => {
    // First test shows tests for uniquess
    return a.indexOf(element) === a.lastIndexOf(element) || index === a.indexOf(element)
    // Second test passes the element's first appearance in the array
    // If you use lastIndexOf it will pass the last appearance of the element in the array
  })
}

// Best Practice
// return Array.from(new Set(a));



/*
  L1: Bartender, drinks!
*/

function getDrinkByProfession(param){
  switch (param.toLowerCase()) {
    case 'jabroni':
      return 'Patron Tequila'
    case 'school counselor':
      return 'Anything with Alcohol'
    case 'programmer':
      return 'Hipster Craft Beer'
    case 'bike gang member':
      return 'Moonshine'
    case 'politician':
      return 'Your tax dollars'
    case 'rapper':
      return 'Cristal'
    default:
      return 'Beer'
  }
}
// Using a Map
/*
  const drinkMap = new Map()
  drinkMap.set('jabroni', 'Patron Tequila')
  drinkMap.set('school counselor', 'Anything with Alcohol')
  drinkMap.set('programmer', 'Hipster Craft Beer')
  drinkMap.set('bike gang member', 'Moonshine')
  drinkMap.set('politician', 'Your tax dollars')
  drinkMap.set('rapper', 'Cristal')
  
  return drinkMap.get(param.toLowerCase()) ? drinkMap.get(param.toLowerCase()) : 'Beer'
*/
// I wanted to see if I could use the Map Class to solve this problem and my solution works but I think a switch is better practice in this case

// A more elegant solution by someone else who also used a Map
/*
function getDrinkByProfession(param){
  let map = new Map([
      ["jabroni", "Patron Tequila"],
      ["school counselor", "Anything with Alcohol"],
      ["programmer", "Hipster Craft Beer"],
      ["bike gang member", "Moonshine"],
      ["politician", "Your tax dollars"],
      ["rapper", "Cristal"]
      ]);
      
   let normal = param.toLowerCase();
   return map.has(normal) ? map.get(normal) : "Beer";
*/



/*
  Grasshopper - Function syntax debugging
*/

function main (verb, noun) {
  return verb + noun
}



/*
  Multiple of index
*/

function main (verb, noun) {
  return verb + noun
}



/*
  Fix your code before the garden dies! 
*/

function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`
  } else {
    return 'Your plant has had more than enough water for today!'
  }
}



/*
  Enumerable Magic #3 - Does My List Include This?
*/

function include(arr, item){
  return arr.includes(item)
}



/*
  Remove First and Last Character Part Two
*/

function array(arr){
  finalArray = arr.split(',')
  
  if (finalArray.length < 3)
    return null
  
  return finalArray.slice(1, -1).join(' ')
}

//  return arr.split(',').length < 3 ? null : arr.split(',').slice(1, -1).join(' ')



/*
  Add Length
*/

function addLength(str){
  return str.split(" ").map( word => `${word} ${word.length}`)
}



/*
  Exclamation marks series #2: Remove all exclamation marks from the end of sentence
*/

function remove (string) {  
  let filteredString = string
  
  while (filteredString.endsWith('!')) {
    filteredString = filteredString.slice(0, -1)
  }
  
  return filteredString
}



/*
  Palindrome Strings
*/

function isPalindrome(line) {
  return line.toString() === line.toString().split("").reverse().join("");
}



/*
  How old will I be in 2099?
*/

function  calculateAge(year1, year2) {
  if (year1 === year2)
    return 'You were born this very year!'
  
  // plural is 's' if and only if the difference is more than one year
  let plural = Math.abs(year1 - year2) === 1 ? '' : 's'
  
  return year1 < year2 ? `You are ${year2 - year1} year${plural} old.` : `You will be born in ${year1 - year2} year${plural}.`
}



/*
  Take the Derivative
*/

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}



/*
  Grasshopper - Array Mean
*/

var findAverage = function (nums) {
  return nums.reduce((sum, number) => sum += number, 0) / nums.length
}



/*
  Determine offspring sex based on genes XX and XY chromosomes
*/

function chromosomeCheck(sperm) {
  return sperm.includes('Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

// We could reduce the repetition by return son or daughter in the ternary and concatanating with the first part of the sentence.



/*
  Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
*/

function remove(s, n) {
  for (let i = 0; i < n; i++) {
    s = s.replace('!', '')
  }
  
  return s
}



/*
  Training JS #5: Basic data types--Object
*/

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}



/*
  Regular Ball Super Ball
*/

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

// Before JavaScript had classes a class was defined as a function expression
// var Ball = function(ballType) {
//   this.ballType = ballType || 'regular';
// };



/*
  Do you speak "English"?
*/

function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

// The tests for this problem aren't very good



/*
  How many lightsabers do you own?
*/

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}



/*
  simple calculator 
*/

function calculator(a,b,sign){
  // filters out inputs that aren't numbers
  if (Number.isNaN(a * b))
    return 'unknown value'

  switch (sign) {
  case '+':
    return a + b
  case '-':
    return a - b
  case '*':
    return a * b
  case '/':
    return a / b
  default:
    return 'unknown value'
  }
}

// const signs = {
//   '+': a + b,
//   '-': a - b,
//   '*': a * b,
//   '/': a / b
// }
// return sign in signs ? signs[sign] : 'unknown value'

// A better test to see if the input is a number is to compare the input to the input converted to a number like so
// +input === input



/*
  No Loops 2 - You only need one
*/

function check(a,x,i = 0){
  if (i === a.length)
    return false

  return a[i] === x ? true : check(a,x,++i)
};

// return a.includes(x)

// Using the includes method is the obvious answer but I knew this could be solved with recursion and wanted to try it
// Another recursion soltion I saw without adding an extra parameter was popping the array one element per check and 
// having a stop condition checking for the arrays length to be zero



/*
  USD => CNY
*/

function usdcny(usd) {
  return `${(usd*6.75).toFixed(2)} Chinese Yuan`
}
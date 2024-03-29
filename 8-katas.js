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



/*
  Smallest unused ID
*/

function nextId(ids){
  // Sorts ids
  ids.sort((a, b) => a - b)
  
  // Removes duplicates
  let uniqueIds = Array.from(new Set(ids))
  
  let position = uniqueIds.find((element, index) => element !== index)
  
  return position ? uniqueIds.indexOf(position) : uniqueIds.length
}



/*
  Fundamentals: Return
*/

function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a ** b
}
  
function subt(a,b){
  return a - b
}



/*
  Find the Remainder
*/

function remainder(n, m){
  return n > m ? n % m : m % n;
}

// My original solution below, negative inputs don't need to be filter out,
// NaN is automatically returned when trying to mod by zero
// We could use a ternary to figure out the order of the mod
// Knowing how the mod operation works can help us reduce 11 lines of code into one line and it still remains readable.
// Only improvement would be to replace the letters to a and b for readability.

// let number, mod
  
// // Finds number and mod
// if (n > m) {
//   number = n, mod = m
// } else {
//   number = m, mod = n
// }

// // Fixes negative inputs
// number = Math.abs(number)
// mod = Math.abs(mod)

// return m === 0 ? NaN : number % mod

// function remainder(a, b){
//   return a > b ? a % b : b % a;
// }



/*
  Regex count lowercase letters
*/

function lowercaseCount(str){
  return str.split('').reduce((count, c) => (c === c.toLowerCase() && c !== c.toUpperCase()) ? ++count : count, 0)
}

// I also really liked this solution which compares the letter in question to be greater than 'a' and lower than 'z'
// function lowercaseCount(str) {
//   return Array.from(str).reduce((n, c) => n + ("a" <= c && c <= "z" ? 1 : 0), 0)
// }



/*
  Formatting decimal places #0
*/

function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

// Math.round is a more accurate method than number.toFixed as it properly is able to round numbers like 2.675 to 2.68



/*
  Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
*/

function remove (string) {
  return string.split('').filter(character => character !== '!').join('') + '!'
}

// Filter is can be bypassed by using split to its full strength and splitting on '!' !!!
// This means that the solution can be summed up to 
// return string.split('!').join('') + '!'



/*
  Printing Array elements with Comma delimiters
*/

function printArray(array){
  return array.join();
}

// join method by default uses commas as a delimeter



/*
  Simple validation of a username with regex
*/

function validateUsr(username) {
  // Tests for length
  if (username.length < 4 || username.length > 16)
    return false
  
  // Each letters ASCII code is compared againts tests
  for (let letter of username) {
    let letterCode = letter.charCodeAt()
    
    // Test for lowercase, underscore, and number
    if ((letterCode < 'a'.charCodeAt() || letterCode > 'z'.charCodeAt()) &&
       (letterCode !== '_'.charCodeAt()) &&
       (letterCode < '0'.charCodeAt() || letterCode > '9'.charCodeAt())) {
      return false
    }
  }
  return true
}

// I tried to maintain readability while trying to solve this without using Regex



/*
  Thinkful - Number Drills: Pixelart planning
*/

const isDivisible = (wallLength, pixelSize) => wallLength % pixelSize === 0

// Another one line although I'd argue less readable solution is the following. It converts falsey values (0) into true and truthy values (anything else) into false
// const isDivisible = (wallLength, pixelSize) => !(wallLength % pixelSize)



/*
  Swap Values
*/

function swapValues(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

// return arr.reverse()



/*
  Training JS #3: Basic data types--String
*/

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}



/*
  Return the day
*/

function whatday(num) { 
  const days = new Map()

  days.set(1, 'Sunday')
  days.set(2, 'Monday')
  days.set(3, 'Tuesday')
  days.set(4, 'Wednesday')
  days.set(5, 'Thursday')
  days.set(6, 'Friday')
  days.set(7, 'Saturday')

  return days.get(num) || 'Wrong, please enter a number between 1 and 7'
  // return days.has(num) ? days.get(num) : 'Wrong, please enter a number between 1 and 7'
}


// With a Switch
// switch (num) {
//   case 1:
//     return 'Sunday'
//   case 2:
//     return 'Monday'
//   case 3:
//     return 'Tuesday'
//   case 4:
//     return 'Wednesday'
//   case 5:
//     return 'Thursday'
//   case 6:
//     return 'Friday'
//   case 7:
//     return 'Saturday'
//   default:
//     return 'Wrong, please enter a number between 1 and 7'
// }


// With an Object
// const days = {
//   1: 'Sunday',
//   2: 'Monday',
//   3: 'Tuesday',
//   4: 'Wednesday',
//   5: 'Thursday',
//   6: 'Friday',
//   7: 'Saturday',
// }

// return days[num] || 'Wrong, please enter a number between 1 and 7'
// return num in days ? days[num] : 'Wrong, please enter a number between 1 and 7'


// With an Array
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// return days[--num] || 'Wrong, please enter a number between 1 and 7'

// I wanted to try to see how many different ways I could solve this problem.
// I feel like maps are made for this but only one other person used a Map



/*
  repeatIt
*/

const repeatIt = function(str, n) {
  return typeof str === 'string' ? str.repeat(n) : 'Not a string'
}


// if (typeof str !== 'string')
//   return 'Not a string'
  
// return str.repeat(n)

// Alternate return
// return Array.from({length: n}, element => str).join('')



/*
  Training JS #10: loop statement --for
*/

function pickIt(arr) {
  let even = [], odd = []
  
  for (let number of arr) {
    number % 2 === 0 ? even.push(number) : odd.push(number)
  }
  
  return [odd, even]
}


// ONE LINER WITH FILTER METHOD
// const pickIt = arr => [arr.filter(element => element % 2 !== 0), arr.filter(element => element % 2 === 0)]


// FOR LOOP
// function pickIt(arr){
//   let odd=[],even=[];
  
//   //coding here
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0)
//       even.push(arr[i])
//     else
//       odd.push(arr[i])
//   }
  
//   return [odd,even];
// }



/*
  Training JS #8: Conditional statement--switch
*/

function howManydays(month) {
  let days;
  switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
          days = 31;
          break;
      case 4:
      case 6:
      case 9:
      case 11:
          days = 30;
          break;
      case 2:
          days = 28;
          break;
  }
  return days;
}

// You can add cases to one line
// case 1: case 2: case 3:
//    do something
//    break
// Another tip would be to use the default value to represent the months that have 31 days to reduce the size of the switch.



/*
  Sum of Multiples
*/

function sumMul(n,m){ 
  if (n >= m)
    return 'INVALID'
  
  let multiples = []
  
  for (let i = 1; n * i < m; i++) {
    multiples.push(n * i)
  }
  
  return multiples.reduce((sum, number) => sum += number, 0)
}



/*
  Holiday VI - Shark Pontoon
*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  sharkSpeed = dolphin ? sharkSpeed/2 : sharkSpeed;
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}



/*
  How many stairs will Suzuki climb in 20 years?
*/

function stairsIn20(s){
  return s.reduce((weekSum, dayArray) => weekSum += dayArray.reduce((daySum, day) => daySum += day, 0), 0) * 20
}



/*
  BASIC: Making Six Toast.
*/

const sixToast = n => Math.abs(n - 6);



/*
  Price of Mangoes
*/

function mango(quantity, price){
  let freeMangoes = Math.trunc(quantity / 3)
  let leftOver = quantity - freeMangoes
  
  return leftOver * price
}



/*
  Welcome to the City
*/

const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`



/*
  Grasshopper - Variable Assignment Debug
*/

let a = "dev"
let b = "Lab"

let name = a + b



/*
  Sleigh Authentication
*/

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};



/*
  Tip Calculator
*/

function calculateTip(amount, rating) {
  let tipRate;
  
  switch (rating.toLowerCase()) {
    case 'terrible':
      tipRate = 0
      break
    case 'poor':
      tipRate = .05
      break
    case 'good':
      tipRate = .10
      break
    case 'great':
      tipRate = .15
      break
    case 'excellent':
      tipRate = .20
      break
    default:
      return 'Rating not recognised'
  }
  
  return Math.ceil(amount * tipRate)
}

// Solved this 4 different ways using different methods each time



/*
  validate code with simple regex
*/

function validateCode (code) {
  const firstDigit = code.toString()[0]
  const nums = ['1', '2', '3']
  
  return nums.includes(firstDigit)
}



/*
  Man in the west
*/

const checkTheBucket = bucket => bucket.includes('gold');



/*
  Who is going to pay for the wall?
*/

function whoIsPaying(name){
  return name.length > 2 ? [name, name.substring(0, 2)] : [name]
}



/*
  Training JS #6: Basic data types--Boolean and conditional statements if..else
*/

function trueOrFalse(val){
  return (!!val).toString();
}

// My attempt at being one of those clever answers on codewars



/*
  Define a card suit
*/

function defineSuit(card) {
  const suitMap = new Map()
  suitMap.set('♣', 'clubs')
  suitMap.set('♦', 'diamonds')
  suitMap.set('♥', 'hearts')
  suitMap.set('♠', 'spades')
  
  const suit = card.slice(-1)
  
  return suitMap.get(suit)
}



/*
  Remove the time
*/

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}



/*
  Find out whether the shape is a cube
*/

var cubeChecker = function(volume, side) {
  return side ** 3 === volume && side > 0;
};



/*
  Kata Example Twist
*/

const websites = new Array(1000).fill('codewars')



/*
  Sum of differences in array
*/

function sumOfDifferences(arr) {
  if (arr.length <= 1)
    return 0
  
  let descArray = arr.sort((a, b) => b - a)
  
  return descArray[0] - descArray[descArray.length - 1]
}

// I will admit that skipping the arithmetic in the middle of the array was clever but the following solution was able
// to do the arithmetic quite neatly so I would like to show that code here

// const sumOfDifferences = arr => arr
// .sort((a, b) => b - a)
// .map((a, i) => a - arr[i + 1] || 0)
// .reduce((a, b) => a + b, 0);

// The use of the short term evaluation is quite clever and the map and reduce methods are simple and easy to read.

// Another clever solution was to simply find the Max and Min in the array and return the difference



/*
  Is it a number?
*/

function isDigit(s) {
  return Number.parseFloat(s) === +s
}

// At first I attempted to use isNaN by converting the input into a number using the unary plus(+) this works but runs into an issue
// with empty inputs like '', and ' ' etc. It converts them into zeros and essentially fails by returning true.
// I couldn't figure out an alternative but it seems that using both parseFloat and unary plus can account for this.
// + will convert an empty input into 0 and parseFloat will convert it into NaN.
// My initial failed attempt was doing something like this.

// return !Number.isNaN(+s)

// Again empty inputs would be converted to zero and would return true, when they should have returned false.
// Regex could have been used to solve this problem but I am trying to solve my katas without it



/*
  Grasshopper - Combine strings
*/

const combineNames = (...names) => names.join(' ');



/*
  A Strange Trip to the Market
*/

const isLockNessMonster = s => s.includes('tree fiddy') || s.includes('3.50');



/*
  Is there a vowel in there?
*/

function isVow(a){
  // a, e, i, o, u corresponds to 
  // 97, 101, 105, 111, 117
  const VOWELS = new Map([
    [97, "a"], 
    [101, "e"], 
    [105, "i"], 
    [111, "o"], 
    [117, "u"]
  ])
  
  return a.map(number => VOWELS.get(number) || number)
}



/*
  Are arrow functions odd?
*/

const odds = values => values.filter(number => number % 2 != 0)



/*
  Who ate the cookie?
*/

function cookie(x){
  let person = ''
  
  switch(typeof x) {
    case 'string':
      person = 'Zach'
      break
    case 'number':
      person = 'Monica'
      break
    default:
      person = 'the dog'
  }
  
  return `Who ate the last cookie? It was ${person}!`
}



/*
  Regexp Basics - is it a digit?
*/

String.prototype.digit = function() {
  return this.length > 1 ? false : Number.parseInt(this) >= 0 && Number.parseInt(this) <= 9
};

// An easier way to do this is to compare the string to strings '0' and '9', JS allows us to make these types of comparisons as it is comparing their charCodes to each other
// return this.length === 1 && '0' <= this && this <= '9';



/*
  Find Nearest square number
*/

function nearestSq(n){
  if (Number.isInteger(Math.sqrt(n)))
    return n
  
  let i = 1
  while(true) {
    if (Number.isInteger(Math.sqrt(n + i)))
      return n + i
    else if (Number.isInteger(Math.sqrt(n - i)))
      return n - i
    else
      i++
  }
}

// for (let i = 1; true; i++) {
//   if (Number.isInteger(Math.sqrt(n + i)))
//     return n + i
//   else if (Number.isInteger(Math.sqrt(n - i)))
//     return n - i
// }

// A clever mathematical solution was to sqrt the n, round it, and then square it
// Simply doing so gets you the result in one calculation without using loops
// The function looks something like this
// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);



/*
  Get number from string
*/

function getNumberFromString(s) {
  return +s.split('').filter(c => '0' <= c && c <= '9').join('')
}



/*
  get ascii value of character
*/

const getASCII = c => c.charCodeAt();



/*
  Leonardo Dicaprio and Oscars
*/

function leo(oscar){
  if (oscar === 88)
    return 'Leo finally won the oscar! Leo is happy'
  else if (oscar === 86)
    return 'Not even for Wolf of wallstreet?!'
  else if (oscar > 88)
    return 'Leo got one already!'
  else
    return 'When will you give Leo an Oscar?'
}



/*
  Duck Duck Goose
*/

function duckDuckGoose(players, goose) {
  let index

  if (goose === 0)
    index = 0
  else if (goose % players.length === 0)
    index = players.length - 1
  else
    index = (goose % players.length - 1)
  
  return players[index].name
}

// So this problem deals with 1 based arrays but to reset them to 0 based we could have taken goose and immediately subtracted one
// Then doing goose % players.length would have worked perfectly.

// return players[(goose - 1) % players.length].name
// This return would have solved the problem in one line



/*
  For UFC Fans (Total Beginners ): Conor McGregor vs George Saint Pierre
*/

var quote = function(fighter) {
  let fighterResponses = new Map([
    ['george saint pierre', 'I am not impressed by your performance.'],
    ['conor mcgregor', 'I\'d like to take this chance to apologize.. To absolutely NOBODY!']
  ])
  
  return fighterResponses.get(fighter.toLowerCase())
};



/*
  Thinkful - Number Drills: Blue and red marbles
*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blueLeft = blueStart - bluePulled
  const totalMarbles = blueLeft + redStart - redPulled
  
  return blueLeft / totalMarbles
}



/*
  Fix the Bugs (Syntax) - My First Kata
*/

function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}



/*
  Pillars
*/

function pillars(num_pill, dist, width) {
  if (num_pill <= 1)
    return 0
  else if (num_pill === 2)
    return dist * 100
  
  let pillarsTotalWidth = (num_pill - 2) * width
  let distanceBetweenPill = (num_pill - 1) * dist * 100
  
  return pillarsTotalWidth + distanceBetweenPill
}

// Second if statement is completely useless, if num_pill is two we don't want to include pillarsTotalWidth but since we subtract two at the start then it would end up as zero in the end.
// First check is importance for the same reason, if we didn't account for it we would get a negative pillar Width



/*
  UEFA EURO 2016
*/

function uefaEuro2016([team1, team2], [score1, score2]){
  let outcome
  if (score1 > score2)
    outcome = team1 + ' won!'
  else if (score1 < score2)
    outcome = team2 + ' won!'
  else
    outcome = 'teams played draw.'
  
  return `At match ${team1} - ${team2}, ${outcome}`
}

// Replacing the teams paramater and the scores paramater with an array of respective variables makes the solution a lot easier to write and read.



/*
  Parse float
*/

function parseF(s) {
  return Number.isNaN(Number.parseFloat(s)) ? null : Number.parseFloat(s);
}



/*
  NBA full 48 minutes average
*/

function pointsPer48(ppg, mpg) {
  return mpg === 0 ? 0 : +((48/mpg * ppg).toFixed(1))  
}

// A short circuit evaluation can be used to make a really concise solution.
// return +((48 / mpg * ppg).toFixed(1)) || 0
// I will admit its pretty hard to read but it's perfect as a codewars solution



/*
  Enumerable Magic #1 - True for All?
*/

function all( arr, fun ){
  return arr.every( element => fun(element))
}

// Another way to call every would be to simply provide the callback function 
// return arr.every(fun)
// Would have been a valid answer as well.



/*
  Compare within margin
*/

function closeCompare(a, b, margin = 0){
  const trueMargin = Math.abs(a - b)
  
  if (margin >= trueMargin)
    return 0
  else if (a < b)
    return -1
  else if (a > b)
    return 1
}

// Math.sign can be used to cleverly reduce the answer to a one liner.
// Math.sign returns either +/- 1 based on the sign of the number passed in so we could replace lines 3584-3587 with Math.sign(a - b)
// Pairing this up with a ternary operator can lead to a one liner that looks like
// return margin >= Math.abs(a - b) ? 0 : Math.sign(a - b)



/*
  Grasshopper - Order of operations
*/

function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}



/*
  Power
*/

function numberToPower(number, power){
  let total = 1
  for (let i = 0; i < power; i++) {
    total *= number
  }
  return total
}



/*
  ASCII Total
*/

function uniTotal (string) {
  return string.split('')
    .reduce((sum, c) => sum += c.charCodeAt(), 0)
}



/*
  pick a set of first elements
*/

function first(arr, n = 1) {
  let finalArray = []

  for (let i = 0; finalArray.length < n; i++) {
    // Early exit, in case arr is smaller than n
    if (!arr[i])
      return finalArray
    
    finalArray.push(arr[i])
  }
  
  return finalArray
}

// I'm kind of embarressed but the point of the kata was to use slice
// I'd love to say that this was my personal challenge to try not to use slice but I just had a brainfart
// Anyways slice as we know returns a subarray of an array taking in two parameters a starting index that is included
// and an ending index that is not included, you could also use negative indexes eg. -1 to go up to the last element in the array.
// so the return would look like
// return arr.slice(0, n)
// ta da......



/*
  Evil or Odious
*/

function evil(n) {
  let sumOfOnes = 0
  const binaryArr = n.toString(2).split('')

  sumOfOnes = binaryArr.reduce((count, num) => num === '1' ? ++count : count, 0)
  
  return sumOfOnes % 2 === 0 ? "It's Evil!" : "It's Odious!"
}



/*
  Find the Integral
*/

function integrate(coefficient, exponent) {
  return `${coefficient/++exponent}x^${exponent}`
}



/*
  Training JS #11: loop statement --break,continue
*/

function grabDoll(dolls){
  let bag = []
  
  for (let doll of dolls) {
    if (doll !== 'Hello Kitty' && doll !== 'Barbie doll')
      continue
    
    bag.push(doll)
    
    if (bag.length === 3)
      break
  }
  
  return bag;
}



/*
  Fuel Calculator 
*/

function fuelPrice(litres, pricePerLitre) {
  // Finds minimum of discount calculation or .25
  let discount = Math.min(Math.floor(litres / 2) * .05, .25)
  
  return +(litres * (pricePerLitre - discount)).toFixed(2)
}



/*
  Chuck Norris VII - True or False? (Beginner)
*/

function ifChuckSaysSo(){
  return 'Chuck Norris' === 'dork'
}



/*
  Training JS #9: loop statement --while and do..while
*/

function padIt(str,n){
  let initialLength = str.length
  let padded = str.split('')
  
  while(padded.length - initialLength !== n) {
    if ((padded.length - initialLength) % 2 === 0)
      padded.unshift('*')
    else
      padded.push('*')
  }
  
  return padded.join('')
}

// I wanted to solve this kata with my own self imposed restrictions,
// 1, initial parameters were non modifiable
// 2, counter variables weren't allowed
// This led me to using the difference in the size of the strings(initial, and current) compared to n as my way to know if the loop should continue
// Pretty fun challenge



/*
  Contamination #1 -String-
*/

const contamination = (text, char) => !text || !char ? '' : char.repeat(text.length);

// Just when I thought I was being clever I find out that the ternary is completely uneccessary 
// If char is '', we can repeat it 100 times it will still be ''
// If text is '', we repeat char zero times (text.length = 0)
// Therefore we could just return char.repeat(text.length)
// without the ternary



/*
  Basic subclasses - Adam and Eve
*/

class God {
  static create(){
    return [new Man(), new Woman()]
  }
}

class Human {
  
}

class Man extends Human {
  
}

class Woman extends Human {
  
}



/*
  Freudian translator 
*/

function toFreud(string) {
  if (string.length === 0) return ''
  return Array.from({length: string.split(' ').length}, element => 'sex').join(' ');
}



/*
  Template Strings
*/

const TempleStrings = (obj, feature) => `${obj} are ${feature}`;



/*
  Polish alphabet
*/

function correctPolishLetters (string) {
  const polishMap = new Map([
    ['ą', 'a'],
    ['ć', 'c'],
    ['ę', 'e'],
    ['ł', 'l'],
    ['ń', 'n'],
    ['ó', 'o'],
    ['ś', 's'],
    ['ź', 'z'],
    ['ż', 'z']
  ])
  
  return string.split('')
    .map(c => polishMap.has(c) ? polishMap.get(c) : c)
    .join('')
}



/*
  Name on billboard
*/

function billboard(name, price = 30) {
  let total = 0;
  for (let c of name) {
      total += price;
  }
  return total;
}

// A clever mathematical solution was
// return name.length / (1 / price)



/*
  The 'if' function
*/

function _if(bool, func1, func2) {
  bool ? func1() : func2()
}



/*
  Geometry Basics: Distance between points in 2D
*/

function distanceBetweenPoints(a, b) {
  // x^2 + y^2 = z^2
  let x = Math.abs(a.x - b.x)
  let y = Math.abs(a.y - b.y)
  
  let distance = Math.sqrt(x ** 2 + y ** 2)
  
  return +distance.toFixed(6)
}



/*
  Logical calculator
*/

function logicalCalc(array, op){
  if (op === 'AND')
    return array.every(bool => bool)
  
  else if (op === 'OR')
    return array.some(bool => bool)
  
  else if (op === 'XOR') {
    let result = array[0] ^ array[1]
    
    // Skip first and last element in array
    for (let i = 1; i < array.length - 1; i++) {
      result = result ^ array[i + 1]
    }
    
    return !!result
  }
}



/*
  ES6 string addition
*/

function joinStrings(string1, string2){
  return `${string1} ${string2}`
}



/*
  Type of sum
*/

const typeOfSum = (a, b) => typeof(a + b);



/*
  Classy Classes
*/

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
  
}



/*
  Printing Array elements with Comma delimiters II
*/

const printArray = array => {
  if (typeof array[0] !== 'object')
    return array.join()
  
  return JSON.stringify(array)
}

// My first solution was kind of naive because I was only testing the first element checking for an object.
// What if the first element was a number and the rest are objects?
// My use of array.join() and JSON.stringify() were correct

function printArray(array){
  return array.some(element => typeof element === 'object') ? JSON.stringify(array) : array.join()
}

// My second solution removes the issues with my if statement



/*
  Printing Array elements with Comma delimiters II
*/

function giveMeFive(obj){
  const arr = [];
  for (let key in obj){
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}



/*
  Find Multiples of a Number
*/

function findMultiples(integer, limit) {
  const arr = [];
  
  for (let i = 1; integer * i <= limit; i++) {
    arr.push(integer * i);
  }
  return arr;
}



/*
  Multiply the number
*/

function multiply(number){
  let digits = 0, num = number;
  
  while (Math.abs(num) >= 1) {
    num = num / 10;
    digits++;
  }
  
  return number * Math.pow(5, digits);
}

// This kata is a testament to my improvement, the first solution showcases my lack of knowledge of the length property and the fact
// that you could use it for numbers
// It also had errors that needed fixing.
// Like the lack of a Math.abs and the lack of checking if it was >= to 1 instead of just > 1

function multiply(number){
  return number * (5 ** Math.abs(number).toString().length)
}

// The second solution is my current solution to the probelm, showcasing the use of length and **



/*
  Object Oriented Piracy 
*/

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
   
   this.isWorthIt = function () {
     return draft - (crew * 1.5) > 20;
   }
 }

// Best practices dictate that it would be better to use a es6 Class or to add the method to the prototype instead of the constructor as this will prevent copys of the same code being produced every time a new object is created

// Prototype Method
function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
}
 
Ship.prototype.isWorthIt = function() {
  return this.draft - this.crew * 1.5 > 20
}

// Class Method
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20
  }
}



/*
  Basic Training: Add item to an Array
*/

websites.push('codewars')



/*
  Simple Comparison? 
*/

const add = (a, b) => a == b



/*
  Find the Slope
*/

function getMiddle(s){
  return s.substring(Math.floor((s.length - 1) / 2), Math.ceil((s.length - 1) / 2) + 1 );
}



/*
  Collatz Conjecture (3n+1)
*/

const hotpo = (n, acc = 0) => {
  if (n <= 1)
    return acc
  else
    return n % 2 === 0 ? hotpo(n / 2, ++acc) : hotpo(n * 3 + 1, ++acc)
}



/*
  Calculate Price Excluding VAT
*/

const excludingVatPrice = price => price === null ? -1 : +(price / 1.15).toFixed(2)



/*
  Training JS #18: Methods of String object--concat() split() and its good friend join()
*/

function splitAndMerge(string, separator) {
  return string.split(' ').map(word => word.split('').join(separator)).join(' ')
}



/*
  Grader
*/

function grader(score) {
  if (score > 1 || score < .6)
    return 'F';
  else if (score >= .9)
    return 'A';
  else if (score >= .8)
    return 'B';
  else if (score >= .7)
    return 'C';
  else if (score >= .6)
    return 'D';
}



/*
  Color Ghost
*/

class Ghost {
  constructor() {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
  }
}



/*
  Be Concise I - The Ternary Operator
*/

const describeAge = age => `You're a(n) ${age <= 12 ? 'kid' : age <= 17 ? 'teenager' : age <= 64 ? 'adult' : 'elderly'}`;

// Im not a huge fan of nested ternerays but the challenge was to write the ternary using the least amount of characters.
// I ended up using 100
// If you rename the paramater to a, remove spaces, and change the checks to check less than one above instead of less than or equal to
// You can get as low as 69 characters



/*
  Ensure question
*/

const ensureQuestion = s => s.endsWith('?') ? s : s+'?'



/*
  Ensure question
*/

function aliasGen(first, last){
  if (first[0].toUpperCase() < 'A' || first[0].toUpperCase() > 'Z' ||
      last[0].toUpperCase() < 'A' || last[0].toUpperCase() > 'Z')
    return 'Your name must start with a letter from A - Z.'
  else
    return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
}

// The if statement is bulky but works
// A simpler if statement would be to just check if the letter is in the object using the in keyword

// Alternative solution
// function aliasGen(first, last){
//   if ((first[0].toUpperCase() in firstName) && (last[0].toUpperCase() in surname))
//     return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
//   else
//     return 'Your name must start with a letter from A - Z.'
// }



/*
  Age Range Compatibility Equation
*/

function datingRange(age) {
  const min = Math.floor(age > 14 ? age / 2 + 7 : age - 0.10 * age);
  const max = Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  return `${min}-${max}`;
}



/*
  Grasshopper - Terminal Game #1
*/

class Hero {
  constructor(name = 'Hero') {
    this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}



/*
  Grasshopper - Bug Squashing
*/

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}



/*
  Grasshopper - Create the rooms
*/

const rooms = {
  room1: {
    name: 'room1',
    description: 'This is room 1',
    completed: true
  },
  room2: {
    name: 'room2',
    description: 'This is room 2',
    completed: false
  },
  room3: {
    name: 'room3',
    description: 'This is room 3',
    completed: false
  }
  
}

// This kata wasn't very clear but was easy to accomplish



/*
  Classy Extentions
*/

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}



/*
  Training JS #16: Methods of String object--slice(), substring() and substr()
*/

function cutIt(arr){
  let min = Infinity
  for (string of arr) {
    if (string.length < min) min = string.length
  }
  
  return arr.map(string => string.slice(0, min))
}

// Another method would be to use a Math.min method to find the shortest length passing in an array of string lengths from the array
// Math.min(...arr.map(string => string.length))



/*
  Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
*/

function howManySmaller(arr,n){
  let count = 0
  for (let num of arr) {
    if (+num.toFixed(2) < n)
      count++
  }
  return count
}



/*
  Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
*/

function firstToLast(str, c) {
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
  
}



/*
  Is your period late?
*/

function periodIsLate(last, today, cycleLength){
  return (today-last)/(1000*60*60*24) > cycleLength;
}



/*
  Training JS #29: methods of arrayObject---concat() and join()
*/

function bigToSmall(arr){
  return arr.reduce((finalArr, currentArr) => finalArr.concat(currentArr), [])
    .sort((a, b) => b - a)
    .join('>')
}



/*
  Days in the year
*/

function yearDays(year)
{
  if(year % 400 === 0) {
    return `${year} has 366 days`;
  }
  else if(year % 4 === 0 && year % 100 !== 0) { 
    return `${year} has 366 days`;
  }
  else {
    return `${year} has 365 days`;
  }
}



/*
  Coefficients of the Quadratic Equation
*/

const quadratic = (x1, x2) => [1, -x1+(-x2), -x1*-x2]



/*
  isReallyNaN
*/

const isReallyNaN = val => Number.isNaN(val)



/*
  101 Dalmatians - squash the bugs, not the dogs!
*/

function howManyDalmatians(number) {
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  return number < 11 ? dogs[0] : number < 51 ? dogs[1] : number < 101 ? dogs[2] : dogs[3]
}



/*
  Return Two Highest Values in List
*/

function twoHighest(arr) {
  return Array.from(new Set(arr)).sort((a, b) => b - a).slice(0, 2)
}

// The first step is to convert the array into a Set, removing duplicate values then back into an array
// to allow us to use array methods
// We then sort it from largest to smallest, and finally only return the first two elements
// We can replacet he first step with the spread syntax.
// [... new Set(arr)].sort().slice()



/*
  Training JS #14: Methods of Number object--toString() and toLocaleString()
*/

function colorOf(r,g,b){
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}



/*
  Training JS #14: Methods of Number object--toString() and toLocaleString()
*/

function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

// isSafeInteger returns a boolean showing if the number passed in is a safe integer
// A safeInteger is an integer that can be represented using JS's 53bit signed integers
// In other words numbers no bigger than ± 9,007,199,254,740,991 or ± 2^53
// Another solution would be to compare the number to the fixed properties MAX_SAFE_INTEGER AND MIN_SAFE_INTEGER that come with the Number Object



/*
  Training JS #14: Methods of Number object--toString() and toLocaleString()
*/

class Dog {
  constructor(breed) {
    this.breed = breed
  }
  bark() {
    return 'Woof'
  }
}

const snoopy = new Dog("Beagle");
const scoobydoo = new Dog("Great Dane");

// The point of the kata was to get us to assign methods to the prototype of a constructor instead of making one every time
// So Ill include that solution as well

// function Dog (breed) {
//   this.breed = breed;
// }

// var snoopy = new Dog("Beagle");

// Dog.prototype.bark = function() {
//   return "Woof";
// };

// var scoobydoo = new Dog("Great Dane");



/*
  Training JS #14: Methods of Number object--toString() and toLocaleString()
*/

function barTriang(p1, p2, p3){
  return [
    +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4),
    +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)
  ];
}



/*
  Training JS #14: Methods of Number object--toString() and toLocaleString()
*/

const ArrowFunc = arr => arr.map(val => String.fromCharCode(val)).join('');

// When a variable name eludes me, I think I'll just use x, y, z. val as a var name doesn't server any specific purpose
// An alternate method to solve this problem is to use the spread operator and create a string using the from char code method
// return String.fromCharCode(...arr)



/*
  Did she say hallo?
*/

function validateHello(message) {
  const greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']

  for (const greeting of greetings) {
    if (message.toLowerCase().includes(greeting)) return true
  }
  
  return false
}

// Solving regex problems without using regex is always a little awkward as all of the other answers are one liners



/*
  8kyu interpreters: HQ9+
*/

function HQ9(code) {
  switch(code) {
    case 'H':
      return 'Hello World!'
    case 'Q':
      return code
    case '9':
      return `99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    default:
      return undefined
  }
}



/*
  A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
*/

function yourFutureCareer() {
  const career = Math.random()
  if (career <= 0.32) {
      return "FrontEnd Developer";
  } else if (career <= 0.65)  {
      return  "BackEnd Developer";
  } else {
      return 'Full-Stack Developer';
  }
}


yourFutureCareer();



/*
  Are there any arrows left?
*/

function anyArrows(arrows){
  return arrows.some(arrow => !arrow.damaged);
}



/*
  String repeat
*/

function repeatStr (n, s) {
  return s.repeat(n)
}



/*
  Training JS #21: Methods of String object--trim() and the string template
*/

function fiveLine(s){
  let string = ''
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      string += s.trim()
    }
    if (i !== 4)
      string += '\n'
  }
  
  return string
}



/*
  Simple Fun #352: Reagent Formula
*/

function isValid(formula){
  return (formula.includes(1) ? !formula.includes(2) : true) &&
    (formula.includes(3) ? !formula.includes(4) : true) &&
    (formula.includes(5) ? formula.includes(6) : !formula.includes(6)) &&
    (formula.includes(7) || formula.includes(8))
}



/*
  Enumerable Magic #20 - Cascading Subsets
*/

function eachCons(array, n) {
  return array.map((x, i) => array.slice(i, i + n)).filter(x => x.length === n)
}



/*
  Grasshopper - Object syntax debug
*/

const rooms2 = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
};



/*
  Training JS #32: methods of Math---round() ceil() and floor()
*/

function roundIt(n){
  const [left, right] = n.toString().split('.').map(x => x.length)
  
  if (left < right) return Math.ceil(n)
  else if (left > right) return Math.floor(n)
  else return Math.round(n)
}



/*
  Training JS #13: Number object and its properties
*/

function whatNumberIsIt(n){
  if (Number.isNaN(n)) {
    return "Input number is Number.NaN";
  }
  
  switch (n) {
  case Number.MAX_VALUE:
    return "Input number is Number.MAX_VALUE";
  case Number.MIN_VALUE:
    return "Input number is Number.MIN_VALUE";
  case Number.NEGATIVE_INFINITY:
    return "Input number is Number.NEGATIVE_INFINITY";
  case Number.POSITIVE_INFINITY:
    return "Input number is Number.POSITIVE_INFINITY";
  default:
    return `Input number is ${n}`
  }
}



/*
  Geometry Basics: Circle Area in 2D
*/

const circleArea = circle => Math.PI * circle.radius ** 2



/*
  Enumerable Magic #2 - True for Any?
*/

const any = (arr, fun) => arr.some(x=>fun(x));



/*
  Online RPG: player to qualifying stage?
*/

function playerRankUp (points) {
  return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
}



/*
  Count words
*/

function countWords(str) {
  return str.includes('﻿') ? str.split('﻿').filter(x => x.length > 0).length : str.split(' ').filter(x => x.length > 0).length
}

// This kata was regex themed so solving it without using regex was a bit annoying.
// The unicode character is a non breaking space character that some strings had in the test scenarios.



/*
  Parse nice int from char problem
*/

function getAge(inputString){
  return +inputString.split(' ')[0];
}



/*
  Get the mean of an array
*/

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x, 0)/marks.length)
}
/*
    Even or Odd
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    if (number % 2 === 0) return 'Even'
    else return 'Odd'
  }

// Using the modulus we can check for even numbers (even numbers are divisible by two)
// This treats zero as even
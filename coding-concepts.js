// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: Output: 10. My understanding is that the .length property will count each character (including the spaces) and will result in 10 total characters.
// b) Verify and explain: After uncommenting, the result was 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: Output: o. The console will print in the terminal the 5th character in the variable greeting. The index starts with 0 and is actually the 5th character. index[4] = 5
// b) Verify and explain: After uncommenting, the result was o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Output: Ruby. The languages variable is an array and using the console.log function is printing the number 1. Arrays start with 0 and will not print "JavaScript"
// b) Verify and explain: After uncommenting, the result was Ruby.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Output: ["SATURDAY", "SUNDAY"]. The .toUpperCase() function will put all characters to uppercase and still print it within the square brackets of the array.
// b) Verify and explain: Gave me an error: TypeError: weekendDays.toUpperCase is not a function
// I believe it was giving me the error, because weekendDays is not a function and only a variable that contains an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Output: Number. The typeof function is going to show what type of data is being used. The dataTypes.length is a number that will output 3 and 3 is a number.
// b) Verify and explain: After uncommenting, the result was number.

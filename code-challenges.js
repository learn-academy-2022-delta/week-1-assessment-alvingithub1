// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// We want to create a function and call it boilingPoint
// It will take any given number to determine if it is a boiling point so we will set that parameter to temp
// We will want to use if/else-if/else conditional statements to determine if the temp parameter is below/above/or at boiling point
// Lastly, we will want to create the else "catch-all" statement if the input was invalid (example: a string)


const boilingPoint = (temp) => {
	if(temp === 212) {
		return temp + " is at boiling point"
	} else if(temp > 212) {
		return temp + " is above boiling point"
	  } else if(temp < 212) {
		return temp + " is below boiling point"
	  } else {
		return "Try again"
	}
}
// Below 4 lines are the results for all the if/else-if/else statements
console.log(boilingPoint(212)) // 212 is at boiling point
console.log(boilingPoint(500)) // 500 is above boiling point
console.log(boilingPoint(48)) // 48 is below boiling point
console.log(boilingPoint("abcd")) // Try again

const temp1 = 42
const temp2 = 350
const temp3 = 212

console.log(boilingPoint(temp1)) // 42 is below boiling point
console.log(boilingPoint(temp2)) // 350 is above boiling point
console.log(boilingPoint(temp3)) // 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// We will want to use the .concat() built-in method to combine two arrays into one combined array
// Then we will want to use the .length property to return the the length
// Wrap both of these in a console.log to view the result of 10, which is the total numbers in both arrays

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length) // Output is: 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
// We will create a new variable called reverse. This will be empty and will be the string to print at the end.
// We use a for-loop starting at the end of the variable currentCohort. It will start at the letter '2'
// The for loop decrements and goes backwards and places each letter in the reverse variable.
// The loop continues and goes until i is equal to 0. Then it will stop and console.log the final product, which is reverse.

const currentCohort = "Delta 2022"

let reverse = '';
for(let i=currentCohort.length-1; i>=0; i--) {
    reverse += currentCohort[i];
}

console.log(reverse) // Outputs: 2202 atleD

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// We want to test whether each number is even or odd, so we will need to use a conditional check. This will call for if/else-if statements.
// We will want to use a for-loop to go through each number in the array.
// We test each number in the array using the modulo character. If the number modulo to 2 and equals 0, then it is even. If the number modulo to 2 and equals 1, then it is odd.
// Lastly, we print the result using the console.log

const myArray = [13, 34, 5, 10, 27, 42]

for(let i=0; i<myArray.length; i++) {
    if(myArray[i] % 2 === 0) {
        console.log("even") 
    } else if(myArray[i] % 2 === 1) {
        console.log("odd")
    } else {
        console.log("Try again")
    }
}

// const myArray = [13, 34, 5, 10, 27, 42]
// The result is:
// odd
// even
// odd
// even
// odd
// even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// We will create a function called subtractSmallerNumber and set the function to take 2 parameters called one and two.
// We use conditional statements again to see if one is bigger than two or vice-versa.
// We also do an else statement if the numbers are equal


// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtractSmallerNumber = (one, two) => {
    if(one < two) {
        return one + ", " + (two - one)
    } else if(one > two) {
        return one - two + ", " + two
    } else {
        return "Numbers are equal, try again"
    }
}

console.log(subtractSmallerNumber(10, 15)) // Output: 10, 5
console.log(subtractSmallerNumber(15, 10)) // Output: 5, 10
console.log(subtractSmallerNumber(10, 10)) // Output: Numbers are equal


console.log(subtractSmallerNumber(number1, number2)) // Output: 58, 42
console.log(subtractSmallerNumber(number3, number4)) // Output: 3, 24
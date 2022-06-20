# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer: A conditional statement is checking an input is one or the other. It is using if/else-if/else statements to verify a condition. 
  
  An example is if the number 7 is an even or odd number. Checking if a number is even or odd is a conditional statement and using variable inputs of numbers to check it.

  Researched answer: Conditional statements are used in all programming languages to let a computer know if a condition is met and how to execute them. Generally, condtional statements are used with if/else-if/else, but there are other ways to execute them as well. Examples: elif (Python) and switch cases (C#, Java, JavaScript)



1. What is git? What is the difference between git and Github?

  Your answer: git is a version control system that lives on individual computers and used to track what version of code you are working on. GitHub is a software that lives on the cloud. It is used to upload different branches of code to collaborate with anyone around the world. The main difference between the two is that they are 2 separate systems and used for 2 separate things. However, they are 2 systems/software that work together in order to achieve one goal: Maintaining 1 main branch that everyone can work off of and ensure everyone is on the same page.

  Researched answer: Git is a version control system. GitHub is a cloud-based hosing service. Git is installed locally on a system. GitHub lives in the cloud so internet is required.



2. Which JavaScript operators will return a Boolean value?

  Your answer: JavaScript operators that will return a boolean value (true, false) would be >, <, <=, >=, &&, ||.

  Researched answer: The && (AND) operator and || (OR) operator. The && operator will only return true if all cases are true. The || operator will return true if at least one case is true. Otherwise, it will return false. There is also the ! (NOT) operator and that will return the reverse of the value.



3. What is an index? What is the difference between index and value?

  Your answer: The index is the start of the value. In an array, the index is the first value. In a string, the index is the first character.

  The difference between the index and the value is the numbering system. Indexes start at 0 and the values are what the actual item is.

  In the array example below, the index of 0 is the first item in the array. The value is the actual item is, in this case, it is apple.
  let myArray = ["apple", "orange", "banana"]

  Researched answer: An index is a programming method of keeping track of data. Indexing is used to find where the data is at and be accessed quickly. A value is an object that uses memory allocation to where it is created.


4. What is iteration?

  Your answer: An iteration is one step within a loop. So if a for-loop is running in the code, the first step in the for loop is iterated, then the second step of the loop is iterated, etc.

  for(let i=0; i<5; i++) {
    console.log(i)
  }

  In this example, the for loop will go through until the variable i is no longer less than 5. So the first iteration will print 0, second iteration will print 1, third iteration will print 2, etc.

  Researched answer: An iteration is a set of instructions that is repeated in a sequence a specified number of times or until a condition is met. When the iteration is repeated, it is called a loop.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming techniques is a driver and navigator. The driver is hand-coding the material into the IDE. The navigator is explaining to the driver what to code onto the IDE. Both roles are equally important in order to achieve successful codebase. Also, the other importance of pair-programming is to have another set of eyes on the code if something doesn't look right.

  Researched answer: Two programmers working together at one workstation on the same line of code. Also, pair programming is considered an agile method practices and both roles are interchangable at any time, which is recommended.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Functions that perform operations on other operations. Essentially, it is a function in a function.

2. Jest: A JavaScript testing framework. Jest allows the user to create tests to ensure the codebase is correct and operable.

3. Objects: An entity that has state and behavior.

4. Method: Property of an object that contains a function definition. Methods can perform action on objects.

5. Classes: Blueprint for creating objects. Classes encapsulate data with code to work on that data.
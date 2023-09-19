/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */

// Create variables with different data types available in JS and print their data types along with each variable name in the console. 
const stringVariable = "This is a variable"
const numberVariable = 42
const booleanVariable = true
const objectVariable = { fruit: "apple", prize: 50 }
const undefinedVariable = undefined
const nullVariable = null
console.log("stringVariable: ",+ typeof stringVariable)
console.log("numberVariable: ", typeof numberVariable)
console.log("booleanVariable: ", typeof booleanVariable)
console.log("objectVariable: ", typeof objectVariable)
console.log("undefinedVariable:", typeof undefinedVariable)
console.log("nullVariable:",typeof nullVariable)

// Create a concatenated string with the above variables using template literals and without template literals. (separate each variable by space in the string)

const concatenatedStringWithTemplate = `${stringVariable} ${numberVariable} ${booleanVariable}  ${objectVariable.fruit} ${objectVariable.prize}  ${undefinedVariable} ${nullVariable}`
const concatenatedStringWithoutTemplate = stringVariable + " " + numberVariable + " " + booleanVariable + " " + objectVariable.fruit  + " " + objectVariable.prize  + " " + undefinedVariable + " " + nullVariable
console.log("Using template literals the string is:", concatenatedStringWithTemplate)
console.log("Without template literals the string is:", concatenatedStringWithoutTemplate)

// Write a JS program to show an alert message on the loading of the website.

alert("This is my webpage")

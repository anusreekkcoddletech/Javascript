/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */

let arr = ["1", "2", "3", "4", "5", "6", "7"]

// a. Remove number "6" from the array and console the length of the array.

arr.splice(5,1)
console.log("Length:"+ arr.length)

// b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration

arr = ["1", "2", "3", "4", "5", "6", "7"]
for (let i = 0; i < arr.length ; i++) {
    arr[i] = Number(arr[i]) 
    console.log(arr[i] + "-datatype is :" + typeof arr[i])
}

// c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 

arr = ["1", "2", "3", "4", "5", "6", "7"]
arr.splice(-3,3)
console.log(arr)
arr.unshift("one","two")
console.log(arr)

// d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)

arr = ["1", "2", "3", "4", "5", "6", "7"]
let concatenatedString =""
let sum = 0
for(let i = 0 ; i < arr.length ; i++){
    concatenatedString += arr[i].toString()
    let item = parseInt(arr[i])
    sum += item
}
console.log("The Concatenated String :", concatenatedString)
console.log("Sum :", sum)
    
// e. Filter out item "3" from the array and console the array (use any array method)

arr = ["1", "2", "3", "4", "5", "6", "7"]
const filterArr = arr.filter(item => item !== "3")
console.log(filterArr)

// f. Iterate the array and console the item, when item is either "3", "6" or "7"

arr = ["1", "2", "3", "4", "5", "6", "7"]
for(let i = 0 ; i < arr.length ; i++){
    let item = arr[i]
    if (item === "3" || item === "6" || item === "7") {
        console.log(item)
    }
}

// g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)

let arr1 = ["1", "2", "3", "4", "5", "6", "7"];
let arr2 = [1, 2, "3", 4, 5, 6, "7"];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        let item1 = arr1[i];
        let item2 = arr2[j];
        
        if (typeof item1 === typeof item2) {
            console.log("The item in array1: " + item1 + " is equal to the item in array2: " + item2);
        }
    }
}

//  h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.

const a= [0, 2, 3, 7, 5, 6, 8]
for (let i = 0; i < a.length; i++) {
    const result = a[i] * i
    if (result > 40) {
        console.log(result)
    }
}

// i. Create two arrays with five items each and merge the array into a single array and then console it.

let array1 = [1, 2, 3, 4, 5]
let array2=[6, 7, 8, 9, 10]
let array3 = array1.concat(array2)
console.log(array3)

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// Console this star pattern

const n=5
for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= n - i; j++) {
        row += " " 
    }
    for (let k = 1; k <= i; k++) {
        row += "* "
    }
    console.log(row)
}
  

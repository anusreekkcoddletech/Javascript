/* eslint-disable linebreak-style */

/* eslint-disable semi */

/* eslint-disable quotes */

//1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.

const arr = ["car", 1, 5, "js", "node js", "mysql", "sql"]
console.log("The items are:")
arr.map(item => {
    switch (typeof item) 
    {
    case "number":
        console.log(item)
        break
    case "string":
        console.log(item)
        break
    default:
        console.log(item)
    }
})

// 2. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

let arr1 = [1, 2, 3, 4, 5, 6]
function indexdelete(arr1, index1, index2) {
    const result = arr1.filter((value, index) => index !== index1 && index !== index2)
    return result
}
console.log(indexdelete(arr1, 2, 5))

//3. Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)

function Arrayelements(arr) {
    this.arr = arr
    this.printelements = function() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i])
        }
const elements = new Arrayelements(arr)
elements.printelements()

//4. Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finally console the output.

function arrayOperation(arr1, item) {
    const index = arr1.indexOf(item)
    if (index !== -1) {
        arr1.splice(index, 1)
    } else {
        arr1.push(item)
    }
    console.log(arr1)
}
arrayOperation(arr1, 7)

//5. Create a self-invoking function to console you name.

(function(){
    console.log("Anusree")
}())

//6. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

const object = { a: "one", b: "2", f: "5", c: "33", p: "do", q: "one" }
const key = Object.keys(object).reverse()
console.log(key) 

//7. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

const object1 = { data: [{a:"one", id:"22"}, {a:"four", id:"7"}, {a:"six", id:"2"},  {a:"sixty", id:"24"},  {a:"five", id:"212"}] }
const objectnew = object1.data.filter(item => item.id !== "24")
object1.data = objectnew
console.log(object1)

//8. Given var string = "Javascript is the King of the web."
// a) Get the length of the string. 

const string = "Javascript is the King of the web."
console.log("The length of the string is: "+string.length) 

// b) Print the 8th character of the string without using any function. 
// c) Execute the above code from browser console. 

console.log("The 8th character of the string is: "+ string[7]) 

// d) Get the position of the word "King" in string. 

console.log("The position of the word king is:"+string.indexOf("King"))

// e) Replace "King" with "Emperor". 

console.log(string.replace("King", "Emperor"))

// f) Insert the string "new” before the word "King". 

console.log(string.replace("King", "new King"))

// g) Get the words in string as an array. 

console.log(string.split(" "))

// h) Extract and print the words "is the King" from string. 

var selectedwords = string.match("is the King")
if (selectedwords) {
    console.log(selectedwords[0])
} else {
    console.log("Words 'is the King' not found in the string.");
}

// i) Get the count of occurrences of the strings "the" and "of" in string. 

var stringwords = string.split(" ")
var the_count = 0
var of_count = 0
for (var i = 0; i < stringwords.length; i++)
{
    if (stringwords[i] === "the") 
    {
        the_count++
    }
    if (stringwords[i] === "of") 
    
        of_count++
}
console.log("Count of 'the': " + the_count)
console.log("Count of 'of': " + of_count)

// j) pad string with "*" and set the total length of the string as 30, displayed at right side.

const splicedString = string.slice(0, -5)
const newString=splicedString.padEnd(30, "*")
console.log(newString)
console.log("The length of the new string is: "+newString.length) 


